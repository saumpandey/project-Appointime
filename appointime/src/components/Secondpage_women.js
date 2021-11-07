import React, {useState} from 'react'
import './style.css';
import SalonCard from './SalonCard';
import SalonData from './Api';

const uniqueList = new Set(SalonData.map((ele) =>{
    return ele.category;
}))

const Secondpage_women= () =>{

    const [item, setItem] = useState(SalonData);

    const filterItem = (category) =>{
        const updateList = SalonData.filter((element) =>{
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
            <SalonCard Data={item} />
        </>
    )
}

export default Secondpage_women;