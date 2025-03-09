from bson import ObjectId
from werkzeug.security import check_password_hash

class UserModel:

    @staticmethod
    def get_collection():
        from app import mongo  # Importing here to avoid circular imports
        return mongo.db.users
    
    @staticmethod
    def create_user(user_data):
        user_data["_id"] = str(ObjectId())  # Ensure _id is stored as a string
        return UserModel.get_collection().insert_one(user_data)
    
    @staticmethod
    def find_by_email(email):
        user = UserModel.get_collection().find_one({"email": email})
        if user:
            user["_id"] = str(user["_id"])  # Convert ObjectId to string
        return user  # Return None if user is not found
    
    @staticmethod
    def verify_password(hashed_password, password):
        return check_password_hash(hashed_password, password)

    @staticmethod
    def find_by_id(user_id):
        user = UserModel.get_collection().find_one({"_id": user_id})
        if user:
            user["_id"] = str(user["_id"])  # Convert ObjectId to string
        return user