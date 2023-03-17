from flask import Flask

app = Flask(__name__)

# Example api route
@app.route("/members")
def members():
  return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
  app.run(debug=True) # since this is in development mode