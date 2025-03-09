from flask import Flask
from flask_pymongo import PyMongo
from config.config import Config
from routes.user_routes import user_bp
from routes.task_routes import task_bp

app = Flask(__name__)

# Configure MongoDB connection
app.config["MONGO_URI"] = Config.MONGO_URI
mongo = PyMongo(app)

app.register_blueprint(user_bp, url_prefix='/api/user')
app.register_blueprint(task_bp, url_prefix='/api/task')

@app.route('/')
def hello_world():
    return 'Backend is running properly'

if __name__ == '__main__':
    app.run(debug=True)