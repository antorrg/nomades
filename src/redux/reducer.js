import {
    LANDING,
    PRODUCT,
    PRODUCT_BY_ID,
    CLEAN_STATE,
    ITEM,
    ALL_USERS,
    USER_BY_ID,

} from './actions'

const initialState = {
    Landing:[],
    Products:[],
    ProductId:[],
    Item:[],
    Users:[],
    UserById: [],

}

const reducer = (state = initialState, {type, payload})=>{
    switch(type){
        case LANDING:
            return {
                ...state,
                Landing: payload,
            }
        case PRODUCT:
            return {
                ...state,
                Products: payload,
            }
        case PRODUCT_BY_ID:
            return {
                ...state,
                ProductId:payload,
            }
        case ITEM:
            return {
                ...state,
                Item:payload
            }
        case ALL_USERS: 
        console.log(payload)
            return {
                ...state,
                Users: payload,
            }
        case USER_BY_ID:
            return {
                ...state,
                UserById: payload,
            }
        case CLEAN_STATE:
            return {
                ...state,
                Item:payload,
                ProductId:payload,
                UserById: payload,
            }
        default:
            return {
                ...state,
            }
    }
}

export default reducer