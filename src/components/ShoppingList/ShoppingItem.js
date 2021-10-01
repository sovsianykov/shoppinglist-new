import React, {memo, useMemo} from 'react';
import { FormGroup, Input, Label} from "reactstrap";
import styles from "./ShoppingList.module.scss";
import cn from 'classnames';




const ShoppingItem = ({item, onChange}) => {
    
    const classNames = useMemo(() =>  cn ({
        [styles.shoppingListItem] :true, 
        [styles.shoppingListItem_active] : !(item.amount === "")
    })
        
    ,[item.amount])
    return (
        <FormGroup className={classNames} >
            <Label for={item.id}  className={styles.labelItem}>{item.name}</Label>

            <Input
                onChange={onChange}
                className={styles.inputItem}
                type='select'
                value={item.amount}
                name={item.name}
                id={item.id}>
                <option >+</option>
                <option>1 пачка</option>
                <option>1 литр</option>
                <option>2 пачки</option>
                <option>1 дес</option>
                <option>2 дес</option>
                <option>1 литр</option>
                <option>1 литр</option>
                <option>10 шт</option>
                <option>1 кг</option>
                <option>2 кг</option>
                <option>3 кг</option>
                <option>1 шт</option>
                <option>2 шт</option>
                <option>3 шт</option>
                <option>4</option>
                <option>5</option>
                <option>10</option>
                <option>30</option>
                <option>100г</option>
                <option>200г</option>
                <option>500г</option>
                <option>800</option>
            </Input>
        </FormGroup>
    );
};

export default memo(ShoppingItem);
