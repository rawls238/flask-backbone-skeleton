from flask import Flask, render_template
from flask.ext.compress import Compress

application = Flask(__name__)
Compress(application)

@application.route('/', defaults={'path': ''})
@application.route('/<path:path>')
def spa(path):
  return render_template('index.html')

# run the app.
if __name__ == "__main__":
  application.debug = True
  application.run()
