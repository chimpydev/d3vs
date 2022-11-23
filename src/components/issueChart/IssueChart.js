import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import "./IssueChart.css";
import IssueData from "../../shared/opensource/issues.json";

class IssueChart extends Component {
  render() {
    const data = {
      labels: ["Web2", "Web3", "Digital Marketing", "Ecommerce Development", "Server Managment"],
      datasets: [
        {
          data: [
            IssueData["web2"],
            IssueData["web3"],
            IssueData["digitalMarketing"],
            IssueData["ecommerceDev"],
            IssueData["serverManagment"]
          ],
          backgroundColor: ["#28a745", "#6f42c1", "#d73a49", "#fcfc59", "#1190b3"],
          hoverBackgroundColor: ["#28a745dd", "#6f42c1dd", "#d73a49dd", "#fcfc59dd", "#1190b3dd"],
        },
      ],
    };

    return (
      <div className="issue-chart">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="issue-chart-header" style={{color: "#e1e1e1"}}>Average price per category($)</h2>
        </Fade>
        <Doughnut
          data={data}
          options={{
            margin: "0",
            padding: "0",
            responsive: true,
            maintainAspectRatio: true,
            animation: {
              duration: 4000,
            },
          }}
        />
      </div>
    );
  }
}

export default IssueChart;
