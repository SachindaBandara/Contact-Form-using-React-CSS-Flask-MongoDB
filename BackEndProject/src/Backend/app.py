from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from datetime import datetime
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# app.config['MONGO_URI'] = 'mongodb://localhost/contact_us'
# mongo = PyMongo(app)

# Connect to MongoDB ( Can add many collections )
client = MongoClient("mongodb://localhost:27017/")
db = client["contact_form"]
contacts_collection = db["contacts"]

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    date_time = datetime.now()

    if name and email and message:
        contacts_collection.insert_one({
            'name': name,
            'email': email,
            'message': message,
            'date_time': date_time
        })
        return jsonify({'message': 'Message sent successfully!'}), 201
    else:
        return jsonify({'error': 'All fields are required!'}), 400

if __name__ == '__main__':
    app.run(debug=True)
