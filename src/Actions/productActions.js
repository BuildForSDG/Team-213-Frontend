import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../Constants/productConstants";

import axios from "axios";

//Create an action
const listProducts = () => async (dispatch) => {
    try {

        dispatch({ type: PRODUCT_LIST_REQUEST });
        //send ajax request to data
        const { data } = await axios.get("/api/products");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
        
    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });  
    }
   
}




const detailsProduct = (productId) => async (dispatch) => {
    try {

        dispatch({ type: PRODUCT_DETAILS_REQUEST });
        //send ajax request to data
        const { data } = await axios.get("/api/products/" + productId);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
    }

}



export  { listProducts, detailsProduct };