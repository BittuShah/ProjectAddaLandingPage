import React, { Component } from "react";
import Logo from "../photos/1.png";
import styles from "../cssModules/style.module.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Joi from "joi-browser";
import axios from "axios";

class HomePage extends Component {
  state = {
    data: { email: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email")
  };

  doSubmit = async () => {
    // Call Server

    const obj = { Email: this.state.data.email };
    const { data: post } = await axios.post(process.env.REACT_APP_API_URL, obj);
    console.log(post);
  };

  handleSubmit = e => {
    e.preventDefault();

    this.doSubmit();

    Swal.fire({
      icon: "success",
      title:
        "You successfully registered registered your Email, And we'll let you when its ready!",
      showCloseButton: true,
      showConfirmButton: false
    });
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  render() {
    return (
      <div className={`container-fluid text-center ${styles.main}`}>
        <div className={`text-center ${styles.overlay}`}></div>
        <img
          src={Logo}
          alt="Logo of the website"
          className={`${styles.logo}`}
        />
        <Link to="/aboutus" className={`btn btn-primary ${styles.about}`}>
          About us
        </Link>
        <div className={`text-left ${styles.content}`}>
          <h1 className={`${styles.mainTagLine}`}>
            THE NEXT <br /> BIG THING IS HERE
          </h1>
          <h5
            style={{ marginTop: "20px" }}
            className={`${styles.childTagLine}`}
          >
            OH, AND WE'RE LAUCHING OUR OWN THING THAT'S PRETTY COOL
          </h5>
        </div>
        <div className={`row ${styles.emailBox}`}></div>
        <div className={`row ${styles.box}`}>
          <div className="col-lg-6" style={{ paddingTop: "50px" }}>
            <h2 className={`${styles.emailTagLine}`}>
              Get an elecronic mail when it's ready.
            </h2>
            <h4 className={`text-left ${styles.emailChildTagLine}`}>
              That's right - no stamps required.
            </h4>
          </div>
          <div className="col-lg-6">
            <form
              className={`form-group ${styles.mailForm}`}
              onSubmit={this.handleSubmit}
            >
              <label className={`${styles.emailLabel}`} htmlFor="email">
                EMAIL
              </label>
              <br />
              <div className="row">
                <div className="input-group m-2">
                  <input
                    className={`form-control col-lg-6 offset-lg-2 ${styles.emailInput}`}
                    name="email"
                    type="text"
                    onChange={this.handleChange}
                    placeholder="Enter Email..."
                  />
                  <button
                    className={`btn col-lg-3 p-0 ${styles.emailButton}`}
                    disabled={this.validate()}
                  >
                    STAY CONNECTED
                  </button>
                </div>
              </div>
            </form>

            <div className={`${styles.createdBy}`}>
              <h5>Created By Parshv Shah</h5>
              <a
                className={`${styles.navA} ${styles.insta} ${styles.icons}`}
                href="https://www.instagram.com/parshv__shah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                className={`${styles.navA} ${styles.git} ${styles.icons}`}
                href="https://github.com/BittuShah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a
                className={`${styles.navA} ${styles.linkedin} ${styles.icons}`}
                href="https://www.linkedin.com/in/parshv-shah-9313b9162/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
