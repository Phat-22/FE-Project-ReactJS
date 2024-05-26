import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getCartThunk = createAsyncThunk(
    "carts/GetCartList",
    async () => {
        const response = await api.get("carts");
        const { shoppingCart } = response.data.data;
        return shoppingCart;
    }
);

export const addToCartThunk = createAsyncThunk(
    "carts/AddToCarts",
    async ({ product }, { rejectWithValue }) => {
        try {
            const response = await api.post("carts", { product });
            const { status } = response.data; //
            if (status === 401) {
                throw new Error("Unauthorized");
            }
            return status;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteCartThunk = createAsyncThunk(
    "carts/DeleteCart",
    async (productId) => {
        const response = await api.delete(`carts`, { productId });
        const { status } = response.data;
        return { productId, status };
    }
);

export const updateCartThunk = createAsyncThunk(
    "carts/UpdateCart",
    async ({ productId, quantity }) => {
        const response = await api.patch(`carts`, { productId, quantity });
        const { status } = response.data;
        return { productId, quantity, status };
    }
);

export const totalCartThunk = createAsyncThunk(
    "carts/TotalCart",
    async () => {
        const response = await api.get("total-cart");
        const { subTotal, tax, total } = response.data.data;
        return { subTotal, tax, total };
    }
);

export const submitOrderThunk = createAsyncThunk(
    "checkout/SubmitOrder",
    async ({items, subTotal, tax, total, name, address, phone, paymentMethod}) => {
        const response = await api.post(`checkout`, {items, subTotal, tax, total, name, address, phone, paymentMethod});
        console.log(response);
        const { orders } = response.data.data.data;
        return {orders};
    }
);

export const cartNumberThunk = createAsyncThunk(
    "carts/CartNumber",
    async () => {
        const response = await api.get('/cartNumber');
        const {cartNumber} = response.data.data
        return {cartNumber} ;
        
      }
)

const CartSlice = createSlice({
    name: "Cart",
    initialState: {
        cart: [],
        subTotal: 0,
        tax: 0,
        total: 0,
        addCartStatus: true,
        cartNumber: 0,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToCartThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.addCartStatus = action.payload;
            })
            .addCase(getCartThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            })
            .addCase(deleteCartThunk.fulfilled, (state, action) => {
                state.loading = false;
                const { productId } = action.payload;
                const deleteProductIndex = state.cart.findIndex(product => product.productId === productId);
                if (deleteProductIndex !== -1) {
                    state.cart.splice(deleteProductIndex, 1)
                }

            })
            .addCase(updateCartThunk.fulfilled, (state, action) => {
                state.loading = false;
                const { productId, quantity } = action.payload;
                const updatedProductIndex = state.cart.findIndex(product => product.productId === productId);
                if (updatedProductIndex !== -1) {
                    state.cart[updatedProductIndex].quantity = quantity;
                }
            })
            .addCase(totalCartThunk.fulfilled, (state, action) => {
                state.loading = false;
                const { subTotal, tax, total } = action.payload;
                state.subTotal = subTotal;
                state.tax = tax;
                state.total = total;
            })
            .addCase(submitOrderThunk.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(cartNumberThunk.fulfilled, (state, action) => {
                state.loading = false;
                const { cartNumber } = action.payload
                console.log(cartNumber);
                state.cartNumber = cartNumber;
            });
    }
})

export default CartSlice.reducer;