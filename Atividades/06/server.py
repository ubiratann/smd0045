
from flask import Flask
from flask import Flask, render_template, flash, request
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField


app = Flask(__name__)

@app.route("/",methods=['POST'])
def index():
    form = ReusableForm(request.form);
    name=request.form['numero'];
    
    return render_template('index.html', message=message);

# run the application
if __name__ == "__main__":
    app.run(debug=True)
