import React, {useContext} from "react";
import {ShopContext} from "../contexts/ShopContext";
import {useParams} from "react-router-dom";
import Breadcrum from "../components/breadcrums/Breadcrum";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import DescriptionBox from "../components/descriptionBox/DescriptionBox";
import RelatedProdects from "../components/relatedProducts/RelatedProdects";

const Products = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox product={product} />
      <RelatedProdects />
    </div>
  );
};

export default Products;
