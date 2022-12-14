import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import "./PullRequestChart.css";
import PullRequestData from "../../shared/opensource/pull_requests.json";

class PullRequestChart extends Component {
  render() {
    const data = {
      labels: ["Web2", "Web3", "Digital Marketing", "Ecommerce Development", "Server Managment"],
      datasets: [
        {
          data: [
            PullRequestData["web2"],
            PullRequestData["web3"],
            PullRequestData["digitalMarketing"],
            PullRequestData["ecommerceDev"],
            PullRequestData["serverManagment"]
          ],
          backgroundColor: ["#28a745", "#6f42c1", "#d73a49", "#fcfc59", "#1190b3"],
          hoverBackgroundColor: ["#28a745dd", "#6f42c1dd", "#d73a49dd", "#fcfc59dd", "#1190b3dd"],
        },
      ],
    };

    return (
      <div className="pr-chart">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="pr-chart-header" style={{ color: "#FFFFFF"}}>Services done by category</h2>
        </Fade>
        <Doughnut
          data={data}
          options={{
            padding: "0",
            margin: "0",
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

export default PullRequestChart;
