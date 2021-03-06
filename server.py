from flask import Flask, send_from_directory, request
from pprint import pprint
import requests, os
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='build', static_url_path='')
cors = CORS(app)
app.config['SECRET_KEY'] = 'secret!'
app.config['CORS_HEADERS'] = 'Content-Type'

API_KEY=os.environ['BOOK_API_KEY']
QUERY_URL = 'https://www.googleapis.com/books/v1/volumes?q=+'
PRINT_TYPE = '&printType=books'

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/search')
def search():
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/title", methods=['POST'])
def searchByTitle() :
    dict = request.json
    bookName = dict['title']
    queryUrl = QUERY_URL +"intitle:" + bookName + PRINT_TYPE + '&key=' + API_KEY
    bookJson = requests.get(queryUrl).json()
    bookList = bookJson['items'][:10]
    pprint(bookList[0])
    return {'list' : bookList}

@app.route("/isbn", methods=['POST'])
def searchByIsbn() :
    dict = request.json
    isbnCode = dict['isbn']
    queryUrl = QUERY_URL +"isbn:" + isbnCode + PRINT_TYPE + '&key=' + API_KEY
    bookJson = requests.get(queryUrl).json()
    bookInfo = bookJson['items'][-1]
    pprint(bookInfo)
    return {'book' : bookInfo}

if __name__ == '__main__':
    app.run()