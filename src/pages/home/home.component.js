import React from "react";
import ProductList from "../products/products.component";

const HomePage = () => {
  return (
    <main>
      <ProductList
        src_img={"/assets/images/honda_civic_type_r_4k_5k_hd.jpg"}
      />
    </main>
  );
};
export default HomePage;
