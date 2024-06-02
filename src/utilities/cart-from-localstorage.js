const getCartListFromLocalStorage=()=>{

    const listFromLocalStorage=localStorage.getItem('cart');

    if(listFromLocalStorage)
        return JSON.parse(listFromLocalStorage);

    return [];
}

const addCartListToLocalStorage=(item)=>{

    const listFromLocalStorage=getCartListFromLocalStorage();
    listFromLocalStorage.push(item);
    localStorage.setItem('cart',JSON.stringify(listFromLocalStorage));
}

const removeCartFromLS=(id)=>{
    const cart=getCartListFromLocalStorage();
    for(let i=0;i<cart.length;i++)
        {
            if(cart[i]===id)
                {
                    cart.splice(i,1);
                    break;
                }
        }
    localStorage.setItem('cart',JSON.stringify(cart));
}

export {addCartListToLocalStorage,getCartListFromLocalStorage,removeCartFromLS}