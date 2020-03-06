import React from "react";

import styles from "./styles.scss";

export default ({ children }) => (
  <div className={styles.content}>{children}</div>
);
