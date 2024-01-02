import React, {useContext} from "react";
import "./css/ShopCategory.css";
import {ShopContext} from "../contexts/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/item/Item";

const ShopCategory = ({category, banner}) => {
  const {all_product} = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img src={banner}className="shopcategory-banner"  alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image}
            new_price={item.new_price} old_price={item.old_price}/>
          }else{
            return null
          }
        })}
      </div>

<div className="shopcategory-loadmore">
    Explore More...
</div>

    </div>
  );
};

export default ShopCategory;
