// redux/sanitySlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { sanityClient } from '../lib/sanity'  // Assuming client is your Sanity client

// Initial state
const initialState = {
  posts: [],
  post: null,   // For storing a single post
  loading: false,
  error: null,
}

// Async Thunks for fetching data

// Fetch all posts/products
export const fetchPosts = createAsyncThunk('sanity/fetchPosts', async () => {
  const data = await sanityClient.fetch('*[_type == "product"]')  // Adjust query as needed
  return data
})

// Fetch a single post/product by ID
export const fetchPostById = createAsyncThunk('sanity/fetchPostById', async (id) => {
  const data = await client.fetch(`*[_type == "product" && _id == "${id}"]{ _id, title, slug, price, description }`)
  return data[0]  // We assume Sanity returns an array, but we want the first (and only) result
})

// Slice definition
const sanitySlice = createSlice({
  name: 'sanity',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchPosts (all products)
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      // Handle fetchPostById (single product)
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.loading = false
        state.post = action.payload
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

// Export the actions for use in components
export const { setPosts, setLoading, setError } = sanitySlice.actions

// Export the reducer to be included in the store
export default sanitySlice.reducer
