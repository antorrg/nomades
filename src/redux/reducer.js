import {
    LANDING,
    LANDING_BY_ID,
    PRODUCT,
    PRODUCT_BY_ID,
    CLEAN_STATE,
    ITEM,
    ALL_USERS,
    USER_BY_ID,
    IMAGES,
    WORKS,
    WORK_BY_ID,
    ABOUT, 
    MEDIA,
    MEDIA_AD,

} from './actions'

const initialState = {
    Landing:[],
    LandingById: [],
    Products:[],
    ProductId:[],
    Item:[],
    Users:[],
    UserById: [],
    Images : [],
    Works : [],
    WorkById: [],
    About: [],
    Media: [],
    MediaAd:[],

}

const reducer = (state = initialState, {type, payload})=>{
    switch(type){
        case LANDING:
            return {
                ...state,
                Landing: payload,
            }
        case LANDING_BY_ID:
            return {
                ...state,
                LandingById: payload,
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
                Item: [],
                ProductId:[],
                UserById: [],
                WorkById : [],
                LandingById : [],
                MediaAd: []
            }
        case IMAGES:
            return {
                ...state,
                Images: payload,
            }
        case WORKS : 
            return {
                ...state,
                Works : payload,
            }
        case WORK_BY_ID:
            return {
                ...state,
                WorkById : payload,
            }
        case ABOUT:
            return {
                ...state,
                About: payload,
            }
        case MEDIA:
            return {
                ...state,
                Media: payload,
            }
        case MEDIA_AD:
            return {
                ...state,
                MediaAd: payload,
            }
        default:
            return {
                ...state,
            }
    }
}

export default reducer