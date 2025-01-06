export const AddToCart = (item)=>{
    return{
        type:'ADD_TO_CART',
        payload:item
    }
}

export const AddToWish = (item)=>{
    return{
        type:'ADD_TO_WISH',
        payload:item
    }
}

export const ReduceCart = (item)=>{
    return{
        type:'REDUCE_CART',
        payload:item
    }
}
export const RemoveFromWish = (item)=>{
    return{
        type:'REMOVE_WISH',
        payload:item
    }
}
export const RemoveCart = (item)=>{
    return{
        type:'REMOVE_CART',
        payload:item
    }
}
export const WishToggle = (item)=>{
    return {
        type:'WISH_TOGGLE',
        payload:item
    }
}
export const setCategory = (item)=>{
    return{
        type:'SETCATEGORYLIST',
        payload: item
    }
}

export const searchItemAction = (item)=>{
    return{
        type: 'SEARCHITEM',
        payload: item
    }
}

export const SubmitOrder = ()=>{
    return{
        type: 'SUBMITORDER'
    }
}
export const SignUser = (item)=>{
    return{
        type: 'SIGNED_USER',
        payload: item
    }
}