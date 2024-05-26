import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const ProductsThunk = createAsyncThunk(
  "productList/fetchProducts",
  async ({ id_brand, id_category }) => {
    const response = await api.get(`products?id_brand=${id_brand}&&id_category=${id_category}`);
    const { productFilter } = response.data.data;
    return productFilter;
  }
);

export const productDetailsThunk = createAsyncThunk(
  "productList/fetchProductDetails",
  async ({ id }) => {
    const response = await api.get(`product-details/${id}`);
    const { productDetail } = response.data.data;
    return productDetail;
  }
);

export const BrandsThunk = createAsyncThunk(
  "productList/fetchBrands",
  async () => {
    const response = await api.get("brands");
    const { brands } = response.data.data;
    return brands;
  }
);

export const CategoriesThunk = createAsyncThunk(
  "productList/fetchCategories",
  async () => {
    const response = await api.get("categories");
    const { categories } = response.data.data;
    return categories;
  }
);

const productListSlice = createSlice({
  name: "productList",
  initialState: {
    products: [],
    productDetail: [],
    brands: [],
    categories: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ProductsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(ProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(BrandsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(CategoriesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(productDetailsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetail = action.payload;
      })
      
  },
});

export default productListSlice.reducer;
