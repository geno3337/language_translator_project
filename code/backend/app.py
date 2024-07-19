# Install required libraries using: pip install Flask googletrans==4.0.0-

from flask import Flask, render_template, request, jsonify, send_from_directory
from googletrans import Translator
from flask_cors import CORS,cross_origin

app = Flask(__name__,static_folder='my-app/build')
translator = Translator()
CORS(app)
# CORS(app, resources={r"/translate": {"origins": "http://localhost:3000"}})

# @app.route('/')
# def index():
#     return render_template('index.html')

@app.route('/')
@cross_origin
def serve():
    return send_from_directory(app.static_folder,'index.html')


@app.route('/translate', methods=['POST'])
def translate():
    try:
        data = request.get_json()
        text = data['text']
        target_language = data['target_language']

        translation = translator.translate(text, dest=target_language)
        translated_text = translation.text

        return jsonify({'translated_text': translated_text})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
