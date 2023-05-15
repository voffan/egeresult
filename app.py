import flask

app = flask.Flask(__name__)


@app.route('/')
def index():
	return flask.render_template('index.html')


@app.route('/subjects/')
def subjects():
	return flask.render_template('subjects.html')


@app.route('/add_student/')
def add_student():
	return flask.render_template('add_student.html')


@app.route('/edit_student/')
def edit_student():
	return flask.render_template('edit_student.html')


@app.route('/add_result/')
def add_result():
	return flask.render_template('add_result.html')