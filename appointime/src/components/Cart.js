import React,{useState} from 'react'
import {FiX} from "react-icons/fi";

const Cart = () => {

    const [show, setShow] = useState(true);

    return (
        <div>
            
            {
                show?<div className="sideBar">
                        <div className="header">
                            <p>Shopping Cart</p>
                            <button className="cross" onClick={()=> setShow(!show)}><FiX/></button>
                        </div>
                    </div>:null
                } 
        </div>
    )
}

export default Cart;

