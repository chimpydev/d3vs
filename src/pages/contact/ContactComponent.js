import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import SocialMedia2 from "../../components/socialMedia/SocialMedia2";
import SocialMedia3 from "../../components/socialMedia/SocialMedia3";
import SocialMedia4 from "../../components/socialMedia/SocialMedia4";
import SocialMedia5 from "../../components/socialMedia/SocialMedia5";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactDataPharaoh = contactPageData.contactSectionPharaoh;
const ContactDataKellKell = contactPageData.contactSectionKellKell;
const ContactDataMummy = contactPageData.contactSectionMummy;
const ContactDataTuts = contactPageData.contactSectionTuts;
const ContactDataHeldex = contactPageData.contactSectionHeldex;

const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          {/* PHARAOH SECTION */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${ContactDataPharaoh["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: "#FFFFFF" }}
                >
                  {ContactDataPharaoh["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactDataPharaoh["description"]}
                </p>
                <SocialMedia theme={theme} />
                {/* <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
    </div> */}
              </div>
            </div>
          </Fade>

          {/* KELL SECTION */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: "#FFFFFF" }}
                >
                  {ContactDataKellKell["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactDataKellKell["description"]}
                </p>
                <SocialMedia2 theme={theme} />
                {/* <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
    </div> */}
              </div>
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${ContactDataKellKell["profile_image_path"]}`)}
                  alt=""
                />
              </div>
            </div>
          </Fade>

          {/* TUTS SECTION */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${ContactDataTuts["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: "#FFFFFF" }}
                >
                  {ContactDataTuts["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactDataTuts["description"]}
                </p>
                <SocialMedia3 theme={theme} />
                {/* <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
    </div> */}
              </div>
            </div>
          </Fade>

          {/* Mummy SECTION */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: "#FFFFFF" }}
                >
                  {ContactDataMummy["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactDataMummy["description"]}
                </p>
                <SocialMedia4 theme={theme} />
                {/* <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
    </div> */}
              </div>
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${ContactDataMummy["profile_image_path"]}`)}
                  alt=""
                />
              </div>
            </div>
          </Fade>

          {/* HELDEX SECTION */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${ContactDataHeldex["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: "#FFFFFF" }}
                >
                  {ContactDataHeldex["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactDataHeldex["description"]}
                </p>
                <SocialMedia5 theme={theme} />
                {/* <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
    </div> */}
              </div>
            </div>
          </Fade>

          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${addressSection["avatar_image_path"]}`)}
											alt=""
										/> */}
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.green }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {phoneSection["subtitle"]}
                </p>
                <div className="address-btn-div">
                  <Button
                    text="Tell us about your project"
                    newTab={true}
                    href="mailto:team@D3vs.xyz"
                    theme={theme}
                    className="portfolio-repo-btn"
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
