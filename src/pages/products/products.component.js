import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ProductsThunk } from "../../redux/products-list/product-list.slice";
import { BrandsThunk } from "../../redux/products-list/product-list.slice";
import { CategoriesThunk } from "../../redux/products-list/product-list.slice";
import Banner from "../../component/banner/banner.component";
import Categories from "../categories/categories.component";
import Brand from "../brands/brands.component";
import ProductItem from "./product-item/product-item.component";

const ProductList = ({ src_img = "/assets/images/banner.jpg" }) => {
  const { id_brand = '', id_category = '' } = useParams();
  const dispatch = useDispatch();
  const {
    products: productList,
    brands: brandList,
    categories: categoryList,
    loading,
  } = useSelector((state) => state.productList);

  let productFilter = [...productList]
  useEffect(() => {
    dispatch(ProductsThunk({ id_brand, id_category}));
    dispatch(CategoriesThunk());
    dispatch(BrandsThunk());
  }, [dispatch, id_brand, id_category]);

  return (
    <main>
      <Banner src_img={src_img} />
      {loading && <p>Loading....</p>}
      <section className="section container">
        <div className="section--left">
          <Categories data={categoryList} />
          <Brand data={brandList} />
        </div>
        <div className="section--right">
          <div className="products">
            <h2 className="products__h2">products</h2>
          </div>
          <div className="products--new__row"></div>
          <div className="products--new__row">
            {productFilter.map((item) => (
              <ProductItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default ProductList;
