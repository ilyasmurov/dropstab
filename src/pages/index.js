import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Container from "../components/Container";
import Header from "../components/Header";
import Content from "../components/Content";
import Highcharts from "../components/Highcharts";

// redux
import { getCurrencies } from "../actions/currencies";

// lib
import lib from "../lib/currencies";

const Index = () => {
  const stateCurrencies = useSelector(state => state.currencies);
  const [scales, setScales] = useState({});
  const dispatch = useDispatch();

  const dateFrom = +new Date(2016, 0, 1);
  const dateTo = +new Date();

  // при загрузке получаем список валют
  useEffect(() => {
    dispatch(getCurrencies(dateFrom, dateTo));
  }, []);

  //
  useEffect(() => {
    if (stateCurrencies.done) {
      const _scales = lib.getScalesFromData(stateCurrencies.data);
      setScales(_scales);
    }
  }, [stateCurrencies.done]);

  return (
    <Container loaded={stateCurrencies.done}>
      <Header>
        <h1>Currencies</h1>
      </Header>
      <Content>
        {Object.keys(scales).length > 0 && <Highcharts series={scales} />}
      </Content>
    </Container>
  );
};

export default Index;
