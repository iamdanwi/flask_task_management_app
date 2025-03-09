from flask import jsonify, request
from models.task_model import TaskModel
from middleware.auth import token_required  # JWT authentication required
from bson import ObjectId


@token_required
def create_task(current_user):
    """Creates a task for the logged-in user."""
    data = request.get_json()
    title = data.get("title")
    description = data.get("description")
    date = data.get("due_date")

    if not title or not description:
        return jsonify({"error": "Title and description are required"}), 400

    task_data = {
        "title": title,
        "description": description,
        "user_id": ObjectId(current_user["_id"]),  # Store user ID reference
        "due_date": date,
        "completed": False
    }
    inserted_id = TaskModel.create_task(task_data)

    return jsonify({"message": "Task created successfully", "task_id": str(inserted_id)}), 201


@token_required
def get_user_tasks(current_user):
    """Retrieves tasks for the logged-in user."""
    tasks = TaskModel.get_tasks_by_user(current_user["_id"])

    for task in tasks:
        task["_id"] = str(task["_id"])  # Convert ObjectId to string
        task["user_id"] = str(task["user_id"])

    return jsonify(tasks), 200


@token_required
def update_task(current_user, task_id):
    """Updates a task by ID."""
    data = request.get_json()
    title = data.get("title")
    description = data.get("description")
    date = data.get("due_date")
    completed = data.get("completed")

    task = TaskModel.get_task_by_id(task_id)

    if not task or str(task["user_id"]) != str(current_user["_id"]):
        return jsonify({"error": "Task not found or unauthorized"}), 404

    update_data = {}
    if title:
        update_data["title"] = title
    if description:
        update_data["description"] = description
    if completed is not None:
        update_data["completed"] = completed
    if date:
        update_data["due_date"] = date

    TaskModel.update_task(task_id, update_data)

    return jsonify({"message": "Task updated successfully"}), 200


@token_required
def delete_task(current_user, task_id):
    """Deletes a task by ID."""
    task = TaskModel.get_task_by_id(task_id)

    if not task or str(task["user_id"]) != str(current_user["_id"]):
        return jsonify({"error": "Task not found or unauthorized"}), 404

    TaskModel.delete_task(task_id)

    return jsonify({"message": "Task deleted successfully"}), 200
