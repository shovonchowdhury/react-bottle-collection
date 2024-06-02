import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addCartListToLocalStorage, getCartListFromLocalStorage, removeCartFromLS} from "../../utilities/cart-from-localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles,setbottles]=useState([]);
    const [purchasedBottles,setpurchasedBottles]=useState([]);

    useEffect(()=>{
        fetch(`bottles.json`)
        .then(res=>res.json())
        .then(data=>setbottles(data))
    },[])

    useEffect(()=>{
        if(bottles.length>0)
        {
            const getstoredcard=getCartListFromLocalStorage();
            //console.log(getstoredcard);
            const saveCart=[];
            for(const id of getstoredcard)
                {
                    console.log(id);
                    const bottle=bottles.find(bottle=> bottle.id === id);
                    saveCart.push(bottle);
                }
            setpurchasedBottles(saveCart);
        }
    },[bottles])

    const addToCartHandler=(bottle)=>{
        const newpurchasedBottles=[...purchasedBottles,bottle];
        setpurchasedBottles(newpurchasedBottles);
        addCartListToLocalStorage(bottle.id);
    }

    const removeFromCartHandler=(id)=>{

        const newCartAfterRemove=[...purchasedBottles];
        
        for(let i=0;i<newCartAfterRemove.length;i++)
            {
                if(newCartAfterRemove[i].id===id)
                    {
                        newCartAfterRemove.splice(i,1);
                        console.log(i);
                        break;
                    }
            }
        setpurchasedBottles(newCartAfterRemove);
        removeCartFromLS(id);

    }

   
    
    return (
        <div>
            <h3>Bottles Number:{bottles.length}</h3>
            <Cart purchasedBottles={purchasedBottles} removeFromCartHandler={removeFromCartHandler}></Cart>
            <div className="bottles">
                {
                    bottles.map(bottle=> <Bottle key={bottle.id} bottle={bottle} addToCartHandler={addToCartHandler}> </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;