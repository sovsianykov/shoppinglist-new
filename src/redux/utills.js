
export const updateOrder=(list, obj)=>{

    for (let el of list) {
        let elValue = Object.values(el)[1]
        let listValue = Object.values(obj)[0]


        if ( listValue === elValue ) {
            el.amount = obj.amount

        }
    }
    return list
}
// export const debounceOrder = (list)=>{
//     filter
// }