import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBKx3qS3m7arUufm-hdsQ_0s2rOtwurkrI",
  authDomain: "abdullah-12921.firebaseapp.com",
  projectId: "abdullah-12921",
  storageBucket: "abdullah-12921.appspot.com",
  messagingSenderId: "66499440161",
  appId: "1:66499440161:web:5461ec99e0dcca3193fd60",
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      // Write the form data to the Firebase Realtime Database
      await database.ref("messages").push(formDetails);
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error(error);
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    } finally {
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-left">
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={`animate__animated ${
                    isVisible ? "animate__fadeInLeft" : ""
                  }`}
                >
                  <h2 className="section-heading">Let's Connect</h2>
                  <p className="lead">
                    Have a question or want to work together? I'd love to hear
                    from you!
                  </p>
                  <div className="contact-info">
                    <p>Email: talhashahid325@gmail.com</p>
                    <p>Whatsapp: +923265120120</p>
                    <p>Address: Rehman town, Sialkot Pakistan</p>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={`animate__animated ${
                    isVisible ? "animate__fadeInRight" : ""
                  }`}
                >
                  <img src={contactImg} alt="contact" className="img-fluid" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name"
                  value={formDetails.firstName}
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Last Name"
                  value={formDetails.lastName}
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={formDetails.email}
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Phone Number"
                  value={formDetails.phone}
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  value={formDetails.message}
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={buttonText === "Sending..."}
              >
                {buttonText}
              </button>
              {status && (
                <div
                  className={`mt-3 alert ${
                    status.success ? "alert-success" : "alert-danger"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
