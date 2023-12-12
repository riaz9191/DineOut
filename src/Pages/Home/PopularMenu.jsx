import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Menu from "../Shared/Menu/Menu";

const PopularMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
        .then(res=>res.json())
        .then(data =>{
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    }
    ,[])
  return (
    <div>
      <section className='mb-12'>
        <SectionTitle
          heading={"From Our Menu"}
          subheading={"Popular Items"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
            {
                menu.map(item => <Menu key={item._id}
                    item={item} />)
            }
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;
