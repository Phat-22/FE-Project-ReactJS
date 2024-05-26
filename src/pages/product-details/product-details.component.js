/* eslint-disable array-callback-return */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { productDetailsThunk } from "../../redux/products-list/product-list.slice";
import { BrandsThunk } from "../../redux/products-list/product-list.slice";
import { CategoriesThunk } from "../../redux/products-list/product-list.slice";
import Categories from "../categories/categories.component";
import Brand from "../brands/brands.component";
import DetailsItem from "./details-item/product-details-item.component";

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {
        productDetail: itemDetails,
        brands: brandList,
        categories: categoryList,
        loading,
    } = useSelector((state) => state.productList);

    useEffect(() => {
        dispatch(productDetailsThunk({ id }))
        dispatch(CategoriesThunk());
        dispatch(BrandsThunk());
    }, [dispatch, id]);
    return (
        <main>
            {loading && <p>Loading....</p>}
            <section className="section container">
                <div className="section--left">
                    <Categories data={categoryList} />
                    <Brand data={brandList} />
                </div>
                <div className="section--right">
                    {itemDetails?.map((target) => (
                        <DetailsItem key={target.id} item={target} />
                    ))}
                </div>
            </section>
        </main>
    );
};
export default ProductDetails;