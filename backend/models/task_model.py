from bson import ObjectId

class TaskModel:

    @staticmethod
    def get_collection():
        from app import mongo
        return mongo.db.tasks

    @staticmethod
    def create_task(task_data):
        """Creates a new task in the database."""
        task_data["_id"] = ObjectId()
        return TaskModel.get_collection().insert_one(task_data).inserted_id

    @staticmethod
    def get_tasks_by_user(user_id):
        """Retrieves all tasks for a specific user."""
        return list(TaskModel.get_collection().find({"user_id": ObjectId(user_id)}))

    @staticmethod
    def get_task_by_id(task_id):
        """Finds a task by its ID."""
        return TaskModel.get_collection().find_one({"_id": ObjectId(task_id)})

    @staticmethod
    def update_task(task_id, update_data):
        """Updates a task."""
        return TaskModel.get_collection().update_one({"_id": ObjectId(task_id)}, {"$set": update_data})

    @staticmethod
    def delete_task(task_id):
        """Deletes a task by ID."""
        return TaskModel.get_collection().delete_one({"_id": ObjectId(task_id)})
