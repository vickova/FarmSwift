import { popular_products } from "../utils/Dataset";
const CartInitialState={
  cartList:[],
  cartListLength:0
}

export const CartReducer = (state=CartInitialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item already exists in the cart
      console.log('Heyyyyyyy')
      const exists = state.cartList.find(cartItem => cartItem.id === action.payload.id);
      console.log(state)
      if (exists) {
        console.log('Yesssss')
        return {
          ...state,
          cartList: state.cartList.map(cartItem =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      } else {
        console.log('Okayyy')
        return {
          ...state,
          cartList:[...state.cartList, { ...action.payload, quantity: 1 }]
        }
      } // If the item is already in the cart, don't add it again
      case 'REMOVE_CART':
        // Check if the item already exists in the cart
        console.log('Heyyyyyyy')
        const cartexists = state.cartList.filter(cartItem => cartItem.id !== action.payload.id);
        console.log(state)
        
          return {
            ...state,
            cartList: cartexists
        }
        
        case 'REDUCE_CART':
          // Check if the item already exists in the cart
          console.log('Heyyyyyyy')
          const reducexists = state.cartList.find(cartItem => cartItem.id === action.payload.id);
          console.log(state)
          if (reducexists) {
            console.log('Yesssss')
            return {
              ...state,
              cartList: state.cartList.map(cartItem =>
              cartItem.id === action.payload.id && cartItem.quantity > 1
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            )
          }
          } else {
            console.log('Okayyy')
            return {
              ...state,
              cartList:[...state.cartList]
            }
          } 
       // If the item is already in the cart, don't add it again
     // If the item is already in the cart, don't add it again
       
    default:
      return state;
  }
};

const WishInitialState = {
  wishList:[],
  popular_products: popular_products
}

export const WishReducer = (state=WishInitialState, action) => {
  switch (action.type) {
    case 'ADD_TO_WISH':
      // Check if the item already exists in the cart
      console.log('Heyyyyyyy')
      const exists = state.wishList.find(cartItem => cartItem.id === action.payload.id);
      console.log(state);
      if (exists) {
        console.log('Yesssss')
        return {
          ...state,
          wishList: [...state.wishList],
          popular_products: state.popular_products.map(cartItem =>
            cartItem.id === action.payload.id
              ? { ...cartItem, wish:true }
              : cartItem)
      }
      } else {
        console.log('Okayyy')
        return {
          ...state,
          wishList:[...state.wishList, { ...action.payload}]
        }
      }
        case 'REMOVE_WISH':
          // Check if the item already exists in the cart
          console.log('Removeeeeeeeeee')
          const wishexists = state.wishList.filter(cartItem => cartItem.id !== action.payload.id);
          console.log(wishexists)
          
            return {
              ...state,
              wishList: wishexists,
              popular_products: state.popular_products.map(cartItem =>
                cartItem.id === action.payload.id
                  ? { ...cartItem, wish:false }
                  : cartItem
              )
          }
    default:
      return state;
  }
};
