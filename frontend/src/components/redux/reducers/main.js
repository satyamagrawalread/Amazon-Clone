import { getProductsreducer } from "./Productsreducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    getProductsData: getProductsreducer
})

export default rootReducers;