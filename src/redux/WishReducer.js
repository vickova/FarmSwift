const InitialState={
    cartList:[],
    cartListLength:0
  }
  
  const CartReducer = (state=InitialState, action) => {
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
       
      default:
        return state;
    }
  };
  
  export default CartReducer