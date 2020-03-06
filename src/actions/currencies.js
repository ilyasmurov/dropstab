import config from "../config";

export const set = value => {
  return dispatch => {
    dispatch({
      type: "currency/set",
      value: value
    });
  };
};

export const getCurrencies = (dateFrom, dateTo) => {
  return dispatch => {
    dispatch({
      type: "currency/load"
    });

    fetch(`${config.api.currencyHistorical}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        currencyId: config.currencyId,
        after: dateFrom,
        before: dateTo
      })
    })
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: "currency/success",
          value: response
        });
      });
  };
};
