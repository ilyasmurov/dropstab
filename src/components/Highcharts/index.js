import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";

import styles from "./styles.scss";

const Highchars = ({ series }) => {
  const currencyAxis = {
    BTC: 2,
    USD: 2,
    ETH: 2,
    volume24h: 0,
    marketCapUsd: 1
  };

  console.log(">> series: ", series);

  const _series = Object.keys(series).map(item => {
    return {
      name: item,
      data: series[item],
      showInLegend: true,
      type: item === "volume24h" ? "column" : "line",
      yAxis: item
    };
  });

  console.log("series: ", _series);

  const options = {
    chart: {
      zoomType: "x"
    },
    tooltip: {
      shared: true,
      split: false
    },
    credits: {
      enabled: false
    },
    series: _series,
    xAxis: {
      type: "datetime"
    },
    yAxis: [
      {
        // Primary yAxis
        id: "marketCap",
        title: {
          text: "MarketCap",
          x: -10
        },
        opposite: false,
        labels: {
          align: "right"
        },
        height: "80%",
        resize: {
          enabled: true
        },
        offset: 0
      },
      {
        id: "volume24h",
        title: { text: "Volume" },
        opposite: false,
        labels: {
          align: "right"
        },
        top: "80%",
        height: "20%",
        offset: 0
      },
      {
        id: "BTC",
        title: { text: "BTC" },
        opposite: true,
        labels: {
          align: "right"
        },
        height: "80%",
        resize: {
          enabled: true
        }
      },
      {
        id: "ETH",
        title: { text: "ETH" },
        opposite: true,
        labels: {
          align: "right"
        },
        height: "80%",
        resize: {
          enabled: true
        }
      },
      {
        id: "USD",
        title: { text: "USD" },
        opposite: true,
        labels: {
          align: "right"
        },
        height: "80%",
        resize: {
          enabled: true
        }
      }
    ],
    rangeSelector: {
      selected: 1
    },
    scrollbar: {
      enabled: false
    },
    legend: {
      enabled: true,
      x: 0
    }
    // plotOptions: {
    //   series: {
    //     events: {
    //       legendItemClick: function(a) {
    //         return a.target.name !== "volume24h";
    //       }
    //     }
    //   }
    // }
  };

  return (
    <div className={styles.container}>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
};

export default Highchars;
