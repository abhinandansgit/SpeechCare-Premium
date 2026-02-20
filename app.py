from flask import Flask, render_template, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__)

EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")

@app.route("/")
def home():
    return render_template("index.html")

def send_email(subject, body, recipient):
    msg = MIMEMultipart()
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = recipient
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        server.send_message(msg)

@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    body = f"New Inquiry\n\nName: {name}\nEmail: {email}\nMessage:\n{message}"
    send_email("New Website Inquiry", body, EMAIL_ADDRESS)

    return jsonify({"status": "success"})

@app.route("/appointment", methods=["POST"])
def appointment():
    name = request.form.get("name")
    email = request.form.get("email")
    date = request.form.get("date")
    time = request.form.get("time")

    body = f"""
    Appointment Request

    Name: {name}
    Email: {email}
    Date: {date}
    Time: {time}
    """

    send_email("New Appointment Booking", body, EMAIL_ADDRESS)

    return jsonify({"status": "success"})

if __name__ == "__main__":
    app.run()