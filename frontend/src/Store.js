import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productDetailsReducer, productListReducer} from './Reducer/ProductReducers'
import {cartReducer} from './Reducer/CartReducer'
import {userLoginReducer, userRegisterReducer} from './Reducer/userReducers'

const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
}) 

const cartItemsFromStorage = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): []

const userInfoFromStorage = localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')): null

const initialState = {
     cart: {cartItem: cartItemsFromStorage},
     userLogin: {userInfo: userInfoFromStorage},
    
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;