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


@app.route('/edit_subject/<string:old_name>/')
def edit_result(old_name):
	return flask.render_template('edit_subject.html', old_name=old_name)