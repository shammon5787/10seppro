import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from './CategorySlice.jsx'
import SearchSlice from "./SearchSlice.jsx"
import CardReducer from './CardSlice.jsx'

const Store = configureStore({
    reducer:{
        category: CategoryReducer ,
        search: SearchSlice ,
        cart: CardReducer ,
    }
})

export default Store