import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.green }}>
                building innovative software for leaders
              </h1>
             {/* <h2 className="greeting-nickname" style={{ color: theme.text }}>
                ( {greeting.nickname} )
  </h2>*/}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText, marginTop: "-10px"}}
              >
                web2, web3 and mobile application development
              </p>
              <div className="portfolio-repo-btn-div">
                <Button
                  text="Tell us about your project"
                  newTab={true}
                  href="mailto:team@d3vs.xyz"
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
          <img
							alt="saad sitting on table"
							src={require("../../assests/images/home_image.svg")}
						></img> 
          </div>
        </div>
      </div>
    </Fade>
  );
}
