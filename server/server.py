from flask import Flask, request
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import pdf_util

app = Flask(__name__)
app.config['SECRET_KEY'] = "secret"
app.config['UPLOAD_FOLDER'] = "static/files"

@app.route('/api/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        file = request.files['file']
    file.save(os.path.join(os.path.abspath(os.path.dirname(__file__)), app.config['UPLOAD_FOLDER'], secure_filename(file.filename)))
    return "files uploaded successfully"

@app.route('/api/maths/create_paper/', methods=['POST'])
def create_paper():
    number_of_questions = request.form['number_of_questions']
    paper_types = request.form['paper_types']
    topics = request.form['topics']
    if type(number_of_questions) != int:
        return "Please enter the number of questions"
    if number_of_questions < 1:
        return "Please enter a number greater than 0"
    if number_of_questions > 100:
        return "Please enter a number less than 100"
    print("Number of questions: ", number_of_questions)
    print("Paper types: ", paper_types)
    print("Topics: ", topics)
    pdf_util.generate_paper(number_of_questions)
    return "200 - OK"

@app.route('/api/download', methods=['GET', 'POST'])
def download():
    # Return all files in the directory via an API in JSON format
    json_test_data = [
        {
            "filename": "test1.txt",
            "fileurl": "http://dfsghsf"
        },
        {
            "filename": "test2.txt",
            "fileurl": "http://sdgfsfgsfg"
        }
    ]
    return json_test_data

if __name__ == '__main__':
    CORS(app)
    app.run(debug=True)