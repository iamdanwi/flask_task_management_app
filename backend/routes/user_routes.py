from flask import Blueprint
from controllers.user_controller import login_user, register_user

user_bp = Blueprint('user', __name__)

user_bp.route('/register', methods=['POST'])(register_user)
user_bp.route('/login', methods=['POST'])(login_user)
