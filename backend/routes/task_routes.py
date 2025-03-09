from flask import Blueprint
from controllers.task_controller import create_task, get_user_tasks, update_task, delete_task

task_bp = Blueprint('task', __name__)

task_bp.route('/create_task', methods=["POST"])(create_task)
task_bp.route('/get_all_task', methods=["GET"])(get_user_tasks)
task_bp.route('/update_task', methods=["PUT"])(update_task)
task_bp.route('/delete_task', methods=["DELETE"])(delete_task)