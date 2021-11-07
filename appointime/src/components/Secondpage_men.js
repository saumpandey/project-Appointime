import React, {useState} from 'react'
import './style.css';
import SalonCard_Men from './SalonCard_Men';
import Api_Men from './Api_Men';
import Men from './Api_Men';

const uniqueList = new Set(Men.map((ele) =>{
    return ele.category;
}))

const Secondpage_men= () =>{

    const [item, setItem] = useState(Men);

    const filterItem = (category) =>{
        const updateList = Men.filter((element) =>{
            return element.category === category;
        });

        setItem(updateList);
    };

    return(
        <>
            <div className="navbar">
                <div className="btn-group">
                    <button className="btn-item" onClick={() => filterItem("service")}>Salon and Spa</button>
                    <button className="btn-item"  onClick={() => filterItem("product")}>Product</button>
                </div>
                <hr color="black"></hr>
            </div>
            <SalonCard_Men Data={item} />
        </>
    )
}

export default Secondpage_men;