import flask

app = flask.Flask(__name__)


@app.route('/')
def index():
	return flask.render_template('index.html')


@app.route('/subjects/')
def subjects():
	contract_adr = flask.request.args.get('contract_adr', '')
	return flask.render_template('subjects.html', contract_adr=contract_adr)


@app.route('/add_student/')
def add_student():
	contract_adr = flask.request.args.get('contract_adr', '')
	return flask.render_template('add_student.html', contract_adr=contract_adr)


@app.route('/edit_student/')
def edit_student():
	contract_adr = flask.request.args.get('contract_adr', '')
	return flask.render_template('edit_student.html', contract_adr=contract_adr)


@app.route('/add_result/')
def add_result():
	contract_adr = flask.request.args.get('contract_adr', '')
	return flask.render_template('add_result.html', contract_adr=contract_adr);


@app.route('/edit_subject/<string:old_name>/')
def edit_result(old_name):
	contract_adr = flask.request.args.get('contract_adr', '')
	return flask.render_template('edit_subject.html', old_name=old_name, contract_adr=contract_adr)