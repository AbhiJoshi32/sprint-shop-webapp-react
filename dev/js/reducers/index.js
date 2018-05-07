import {combineReducers} from "redux"
import orders from "./OrderReducer"
import shopInfo from "./ShopInfoReducer"
import user from "./UserReducer"

export default combineReducers({
    orders,shopInfo,user
})