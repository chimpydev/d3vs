import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import Web2Development from "../../assests/images/website-development.svg";
import Default from "../../assests/images/web2development.svg"
import ServerManagment from "../../assests/images/work-risk-free.svg";
import Digital from "../../assests/images/visual-collaboration.svg";
import Web3Development from "../../assests/images/tell-us.svg"
import Ecommerce from "../../assests/images/online-shopping.svg"


import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "Web2")
    return <img width="100%" height="100%" src={Web2Development} />;
  else if (props.fileName === "ecommerce")
  return <img width="100%" height="100%" src={Ecommerce} />;
  else if (props.fileName === "web3")
  return <img width="100%" height="100%" src={Web3Development} />;
  else if (props.fileName === "digital")
    return <img width="100%" height="100%" src={Digital} />;
  else if (props.fileName === "server")
    return <img width="100%" height="100%" src={ServerManagment} />;
  else
    return <img width="100%" height="100%" src={Default} />;

}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.highlight }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
