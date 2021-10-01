import React, { useState } from "react";
import ShoppingItem from "./ShoppingItem";
import { mockItems } from "../../mock/mock";
import { Container } from "reactstrap";
import styles from "./ShoppingList.module.scss";
import {postOrder} from "../../api/postOrder";
import {Button} from "reactstrap";
import {useOrders} from "../../api/useOrders/useOrders";
import {useDispatch, useSelector} from "react-redux";
import {writeProduct} from "../../redux/actions";

const ShoppingList = () => {
    useOrders()
    const dispatch = useDispatch()
    const { currentOrder } = useSelector(state => state.orderReducer)
    console.log(currentOrder, "from list")
    const [shop, setShop] = useState({});
  // const [product, setProduct] = useState({})
  // const [order, setOrder] = useState(['Вaш заказ :']);
  //
  const changeHandler = (event) => {

     console.log({[event.target.name]: `${event.target.value}` });

    dispatch(writeProduct({[event.target.name]: `${event.target.value}` }));
  };
  //   console.log(product)
  //
  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   let stringOrder = "";
  //
  //   for (let shopKey in shop) {
  //     stringOrder += ` ${[shopKey]} - ${shop[shopKey]},`;
  //   }
  //
  //   setOrder((order) => order + stringOrder);
  //   setShop([]);
  // };
  // console.log(order);
  // const orderSubmitHandler = () =>{
  //    postOrder({ "name": order })
  //     setOrder('Заказ отправлен')
  // }
  //   const orderClearHandler = () =>{
  //
  //       setOrder('Новый заказ:')
  //   }
  return (
    <Container>
      <div className={styles.shoppingList}>
        {currentOrder.map((item) => (
          <ShoppingItem
             // product={product}
            item={item}
            key={item.id}
            // onClick={onSubmitHandler}
            onChange={changeHandler}
          />
        ))}
      </div>
      <div className={styles.finalMessage}>
        {/*{order}*/}
      </div>
     {/*<Button onClick={orderSubmitHandler} className={styles.btn}>Отправить</Button>*/}
     {/*<Button onClick={orderClearHandler} className={styles.btn}>Очистить</Button>*/}
    </Container>
  );
};

export default ShoppingList;
