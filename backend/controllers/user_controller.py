from bson import ObjectId
from flask import jsonify, request
import jwt
import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from models.user_model import UserModel
from dotenv import load_dotenv
import os

load_dotenv()
SECRET_KEY = os.getenv('SECRET_KEY')

def register_user():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not username or not password or not email:
        return jsonify({"error": "Username, Email and Password are required"}), 400

    if UserModel.find_by_username(email):
        return jsonify({"error": "Email already exists"}), 400

    # Hash password before storing
    hashed_password = generate_password_hash(password)
    
    # Create user
    user_data = {"username": username, "email": email , "password": hashed_password}
    UserModel.create_user(user_data)

    return jsonify({"message": "User registered successfully"}), 201

def login_user():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Username and password are required"}), 400

    user = UserModel.find_by_username(email)
    if not user or not check_password_hash(user["password"], password):
        return jsonify({"error": "Invalid username or password"}), 401

    # Generate JWT Token
    token = jwt.encode(
        {"user_id": str(user["_id"]), "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)},
        SECRET_KEY,
        algorithm="HS256"
    )

    return jsonify({"token": token, "email": email, "_id": str(ObjectId())}), 200

def get_user(email):
    user = UserModel.find_by_email(email)
    if not user:
        return jsonify({"error": "User not found"}), 404

    # Remove password before returning user data
    user.pop("password", None)

    return jsonify(user), 200
