const getScalesFromData = data => {
  const scales = {};

  data.forEach(item => {
    for (let key in item.price) {
      if (key !== "BNB") {
        if (!scales[key]) {
          scales[key] = [];
        }

        scales[key].push([item.time, item.price[key]]);
      }
    }

    if (!scales["marketCap"]) {
      scales["marketCap"] = [];
    }
    scales["marketCap"].push([item.time, item.marketCapUsd]);

    if (!scales["volume24h"]) {
      scales["volume24h"] = [];
    }
    scales["volume24h"].push([item.time, item.volume24h]);
  });

  return scales;
};

export default {
  getScalesFromData
};
