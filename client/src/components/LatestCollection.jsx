import React, { useContext, useState, useEffect } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "./title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { all_product } = useContext(shopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(all_product.slice(1, 11));
  }, [all_product]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
          voluptate. Distinctio maiores
        </p>
      </div>
      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            images={item.images}
            name={item.name}
            price={item.new_price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
