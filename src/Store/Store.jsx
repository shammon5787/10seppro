import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from './CategorySlice.jsx'
import SearchSlice from "./SearchSlice.jsx"

const Store = configureStore({
    reducer:{
        category: CategoryReducer ,
        search: SearchSlice ,
    }
})

export default Store