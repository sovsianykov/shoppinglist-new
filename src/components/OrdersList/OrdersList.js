import React from 'react';
import styles from './OrdersList.module.scss';
import {useFetch} from "../../api/api";
import ListItem from "./ListItem";

const OrdersList = () => {
    const {response, isLoading, error} = useFetch()
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>error...</h2>
    }
    console.log(response)
    return (
        <section className={styles.ordersList}>
            <h4>История заказов</h4>
            {response.map(item => ( <ListItem item={item} key={item._id}/>))}
        </section>
    );
};

export default OrdersList;