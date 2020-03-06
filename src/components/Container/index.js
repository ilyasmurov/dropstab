import React from "react";
import styles from "./styles.scss";

import Loading from "../Loading";

export default ({ children, loaded }) => (
  <div className={styles.container}>{loaded ? children : <Loading />}</div>
);
