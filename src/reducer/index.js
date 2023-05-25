import addToCart from "./addtocart";
import { combineReducers } from "redux";
import { nameOfUser ,SingleProduct,Sorting} from "./addtocart";

const rootReducer = combineReducers({addToCart,nameOfUser,SingleProduct,Sorting})

export default rootReducer;