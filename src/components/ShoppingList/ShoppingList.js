import React, {useCallback} from "react";
import ShoppingItem from "./ShoppingItem";
import { Container } from "reactstrap";
import styles from "./ShoppingList.module.scss";
import {Button} from "reactstrap";
import {useOrders} from "../../api/useOrders/useOrders";
import {useDispatch, useSelector} from "react-redux";
import {postTheOrder, writeProduct} from "../../redux/actions";

const ShoppingList = () => {
    useOrders()
    const dispatch = useDispatch()
    const { currentOrder,postedOrder } = useSelector(state => state.orderReducer)


  const changeHandler = (event) => {


    dispatch(writeProduct({name : event.target.name, amount: event.target.value }));
  };
  //   console.log(product)
  //
  const orderSubmitHandler = useCallback((e) => {
          e.preventDefault();
          dispatch(postTheOrder(currentOrder))
      },[currentOrder, dispatch]
  )
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
        {postedOrder}
      </div>
     <Button onClick={orderSubmitHandler} className={styles.btn}>Отправить</Button>
     {/*<Button onClick={orderClearHandler} className={styles.btn}>Очистить</Button>*/}
    </Container>
  );
};

export default ShoppingList;
