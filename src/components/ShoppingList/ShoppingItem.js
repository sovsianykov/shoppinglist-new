import React, {useCallback} from 'react';
import {Button, FormGroup, Input, Label} from "reactstrap";
import styles from "./ShoppingList.module.scss"



const ShoppingItem = ({item, onChange, onClick}) => {
    
    const onChangeHandler = useCallback((e) =>{
        onChange(e)
    },[ onChange])
    const onClickHandler = useCallback((e) =>{
        onClick(e)
    },[onClick])
    return (
        <FormGroup className={styles.shoppingListItem} >
            <Label for={item.id}  className={styles.labelItem}>{item.name}</Label>
            <Input
                onChange={onChangeHandler}
                className={styles.inputItem}
                type="select"
                value={item.amount}
                name={item.name}
                id={item.id}>
                <option>+</option>
                <option>1пачка</option>
                <option>2пачки</option>
                <option>3пачки</option>
                <option>1кг</option>
                <option>2кг</option>
                <option>3кг</option>
                <option>1шт</option>
                <option>2шт</option>
                <option>3шт</option>
                <option>4</option>
                <option>5</option>
                <option>10</option>
                <option>30</option>
                <option>100г</option>
                <option>200г</option>
                <option>500г</option>
                <option>800</option>
            </Input>
            <Button dark="true"  onClick={onClick}>Add</Button>
        </FormGroup>
    );
};

export default ShoppingItem;