import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingItem from "./ShoppingItem";
import { mockItems } from "../../mock/mock";
import { Container } from "reactstrap";
import styles from "./ShoppingList.module.scss";
import {postOrder} from "../../api/postOrder";
import {Button} from "reactstrap";

const ShoppingList = ({ items }) => {
  const [shop, setShop] = useState({});
  const [order, setOrder] = useState([]);

  const changeHandler = (event) => {
    console.log(event.target.value);
    setShop({ ...shop, [event.target.name]: `${event.target.value}` });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let stringOrder = "";

    for (let shopKey in shop) {
      stringOrder += ` ${[shopKey]} - ${shop[shopKey]},`;
    }

    setOrder((order) => order + stringOrder);
    setShop([]);
  };
  console.log(shop);
  console.log(order);
  const orderSubmitHandler = () =>{
     postOrder({ "name": order })
  }
  return (
    <Container>
      <div className={styles.shoppingList}>
        {mockItems.map((item) => (
          <ShoppingItem
            item={item}
            key={item.id}
            onClick={onSubmitHandler}
            onChange={changeHandler}
          />
        ))}
      </div>
      <div className={styles.finalMessage}>
        <h5>Ваш заказ:</h5>
        {order}
      </div>
     <Button onClick={orderSubmitHandler} className={styles.btn}>Отправить</Button>
    </Container>
  );
};

export default ShoppingList;
