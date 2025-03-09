from functools import wraps
from flask import request, jsonify
import jwt
import os
from models.user_model import UserModel
from dotenv import load_dotenv

load_dotenv()
SECRET_KEY = os.getenv('SECRET_KEY')


def token_required(f):
    """Middleware to protect routes that require authentication."""

    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get("Authorization")

        if not token:
            return jsonify({"error": "Token is missing!"}), 401

        try:
            token = token.split(" ")[1]  # Remove "Bearer " prefix
            decoded_data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
            user = UserModel.find_by_id(decoded_data["user_id"])  # Fetch user from DB

            if not user:
                return jsonify({"error": "Invalid token!"}), 401

        except jwt.ExpiredSignatureError:
            return jsonify({"error": "Token has expired!"}), 401
        except jwt.InvalidTokenError:
            return jsonify({"error": "Invalid token!"}), 401
        except Exception as e:
            return jsonify({"error": str(e)}), 500

        return f(user, *args, **kwargs)  # Pass user to the protected route

    return decorated
