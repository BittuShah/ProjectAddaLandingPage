import React from "react";
import styles from "../cssModules/aboutUs.module.css";
import { Link } from "react-router-dom";
import Logo from "../photos/1.png";
import Parshv from "../photos/parshv-compressed.jpg";
import Nisu from "../photos/nisu-compressed.jpg";
import Panchu from "../photos/panchu-compressed.jpg";

const AboutUs = () => {
  return (
    <div className={`container-fluid text-center ${styles.main}`}>
      <div className={`${styles.back}`}>
        <div className={`row ${styles.intro}`}>
          <img
            src={Logo}
            alt="Logo of our website!"
            className={`${styles.logo}`}
          />
          <h1
            className={`col-lg-2 col-6 offset-col-4 offset-lg-3 mt-4 p-0 ${styles.about}`}
          >
            About Us <hr className={`${styles.line}`} />
          </h1>
          <Link to="/" className={`col-lg-3 col-2 offset-lg-2`}>
            <i className={`fa fa-home ${styles.home}`}></i>
          </Link>

          <div className={`col-lg-12`}>
            <h2 className={`${styles.tagLine}`}>
              We Are Here To Connect The People...
            </h2>
          </div>
          <br />
          <div className={`col-lg-4 offset-lg-1`}>
            <h4 className={` ${styles.parLineOne}`}>
              We Provide A Plattform For Engineers,
            </h4>
          </div>
          <div className={`col-lg-10 offset-lg-1`}>
            <h5 className={`${styles.parLineTwo}`}>
              You Can Sell Your Inovated Projects Among Those Who Need It, And
              If You Are Client And You Want To Buy Such Creative And Amazing
              Projects From Your Field's Expert Engineers, Then You Are On
              Absolutely Right Platform.
            </h5>
          </div>
        </div>
      </div>

      <div className={`row`}>
        <h1 className={`col-lg-11 ${styles.title}`}>
          Founders <hr className={`${styles.line}`} />
        </h1>
        <div className={`col-lg-3`}>
          <img src={Parshv} alt="Parshv Shah" className={`${styles.images}`} />
          <div className={`${styles.details}`}>
            <h4 className={`${styles.names}`}>Parshv Shah</h4>
            <h6 className={`${styles.degree}`}>
              M.Sc(CA & IT), DCS, HNGU, PATAN
            </h6>
            <div className={`text-center ${styles.links}`}>
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
        <div className={`col-lg-3 offset-lg-1`}>
          <img src={Nisu} alt="Nisarg Patel" className={`${styles.images}`} />
          <div className={`${styles.details}`}>
            <h4 className={`${styles.names}`}>Nisarg Patel</h4>
            <h6 className={`${styles.degree}`}>M.C.A(int), DCS, HNGU, PATAN</h6>
            <div className={`text-center ${styles.links}`}>
              <a
                className={`${styles.navA} ${styles.insta} ${styles.icons}`}
                href="https://www.instagram.com/n__i__s__u/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>

              <a
                className={`${styles.navA} ${styles.git} ${styles.icons}`}
                href="https://github.com/Nis41/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>

              <a
                className={`${styles.navA} ${styles.linkedin} ${styles.icons}`}
                href="https://www.linkedin.com/in/nisarg-patel-259003154"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={`col-lg-3 offset-lg-1`}>
          <img
            src={Panchu}
            alt="Pratik Panchal"
            className={`${styles.images}`}
          />
          <div className={`${styles.details}`}>
            <h4 className={`${styles.names}`}>Pratik Panchal</h4>
            <h6 className={`${styles.degree}`}>
              M.Sc(CA & IT), DCS, HNGU, PATAN
            </h6>
            <div className={`text-center ${styles.links}`}>
              <a
                className={`${styles.navA} ${styles.insta} ${styles.icons}`}
                href="https://www.instagram.com/__panchal__pratik__/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>

              <a
                className={`${styles.navA} ${styles.git} ${styles.icons}`}
                href="https://github.com/PratikPan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>

              <a
                className={`${styles.navA} ${styles.linkedin} ${styles.icons}`}
                href="https://www.linkedin.com/in/pratik-panchal-003722161"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`row ${styles.footer}`}>
        <div className="col-lg-6 offset-lg-3">
          <h6 className={`${styles.footerText}`}>
            &copy; {new Date().getFullYear()} ProjectsAdda. All Rights Reserved.
            {/* Founders of ProjectsAdda :-{" "}
            <span className={`${styles.founders}`}>
              Parshv Shah, Nisarg Patel, Pratik Panchal
            </span> */}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
