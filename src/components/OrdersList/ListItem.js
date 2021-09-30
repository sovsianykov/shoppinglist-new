import React from "react";
import styles from "./OrdersList.module.scss";

const ListItem = ({ item }) => {
  return (
    <div className={styles.ordersListItem}>
      <p className={styles.title}>№ {item._id}</p>
      {item.name}
    </div>
  );
};

export default ListItem;
