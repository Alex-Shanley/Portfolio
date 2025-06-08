from flask import Flask, render_template, url_for
import os

app = Flask(__name__)

work_items = [
    {'img': 'images/salesforce.png', 'title': 'Lumora', 'category': 'App Development'},
    {'img': 'images/P23.png', 'title': 'P23', 'category': 'Web Development'},
    {'img': 'images/brand.png', 'title': 'Lumora', 'category': 'Branding'},
    {'img': 'images/ui ux design.png', 'title': 'Archlight', 'category': 'UX/UI Design'},
    {'img': 'images/app 2.png', 'title': 'NexFund', 'category': 'App Development'},
    {'img': 'images/web 3.png', 'title': 'Finovo', 'category': 'Web Development'},
]

@app.route('/')
def index():
    return render_template('index.html', items=work_items)

@app.route('/projects')
def projects():
    return render_template('projects.html', items=work_items)

@app.route('/skills')
def skills():
    return render_template('skills.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 10000))
    app.run(host='0.0.0.0', port=port)


