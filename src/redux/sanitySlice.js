// redux/sanitySlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sanityClient } from "../lib/sanity"; // Assuming client is your Sanity client

// Initial state
const initialState = {
    posts: [],
    post: null, // For storing a single post
    loading: false,
    error: null,
};

// Async Thunks for fetching data

// Fetch all posts/products
export const fetchPosts = createAsyncThunk("sanity/fetchPosts", async () => {
    const data = await sanityClient.fetch("*[_type == 'product']"); // Adjust query as needed
    return data;
});

// Slice definition
const sanitySlice = createSlice({
    name: "sanity",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.posts = action.payload;
        },
        setLoading: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.loading = action.payload;
        },
        setError: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Handle fetchPosts (all products)
            .addCase(fetchPosts.pending, (state) => {
                // eslint-disable-next-line no-param-reassign
                state.loading = true;
                // eslint-disable-next-line no-param-reassign
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                // eslint-disable-next-line no-param-reassign
                state.loading = false;
                // eslint-disable-next-line no-param-reassign
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                // eslint-disable-next-line no-param-reassign
                state.loading = false;
                // eslint-disable-next-line no-param-reassign
                state.error = action.error.message;
            });
    },
});

// Export the actions for use in components
export const { setPosts, setLoading, setError } = sanitySlice.actions;

// Export the reducer to be included in the store
export default sanitySlice.reducer;
