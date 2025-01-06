import { popular_products } from "../utils/Dataset";
const CartInitialState={
  cartList:[],
  cartListLength:0,
  orderHistory: []
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
          case 'SUBMITORDER':
            const History = state.cartList
            return{
              ...state,
              cartList: [],
              orderHistory: [...state.orderHistory, History]
            }
       // If the item is already in the cart, don't add it again
     // If the item is already in the cart, don't add it again
       
    default:
      return state;
  }
};

const WishInitialState = {
  wishList:[],
  popular_products: popular_products,
  categoryItem: 'Browse All Categories',
  searchItem: '',
}

export const WishReducer = (state=WishInitialState, action) => {
  switch (action.type) {
    case 'ADD_TO_WISH':
      // Check if the item already exists in the cart
      console.log('Heyyyyyyy')
      const exists = state.wishList.filter(cartItem => cartItem.id === action.payload.id);
      console.log(state.popular_products);
      if (exists) {
        console.log('Yesssss')
        return {
          ...state,
          wishList:[...state.wishList, { ...action.payload}],
      }
      } 
    case 'WISH_TOGGLE':
      return{
        ...state,
        popular_products: state.popular_products.map(cartItem =>
          cartItem.id === action.payload.id
            ? { ...cartItem, wish:true }
            : cartItem)
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
          case 'SETCATEGORYLIST':
            return{
              ...state,
              categoryItem: action.payload
            }
          case 'SEARCHITEM':
            return{
              ...state,
              searchItem: action.payload
            }
    default:
      return state;
  }
};
const SignUpInitialState = { 
  UserData:{}
}

export const UserReducer = (state=SignUpInitialState, action) => {
  switch (action.type) {
    case 'SIGNED_USER':
      return{
        ...state,
        UserData:action.payload
      }
    default:
      return state;
  }
}