import {LOGIN_REQUEST , LOGIN_SUCCESS , LOGIN_FAIL , REGISTER_USER_REQUEST , REGISTER_USER_SUCCESS , REGISTER_USER_FAIL, LOGOUT_FAIL ,LOGOUT_SUCCESS} from '../constants/userConstant';

export const userReducer = (state={users:[]} , action)=>{

    switch(action.type)
    {
        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
            return{
                isAuthenticated:false
            };
        
        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload
            };
        case LOGOUT_SUCCESS:
            return{
                isAuthenticated:false,
                user:null
            };

        case LOGIN_FAIL:
        case REGISTER_USER_FAIL:
            return {
                ...state,
                isAuthenticated:false,
                user:null,
                error:action.payload
            };

        case LOGOUT_FAIL:
            return{
                ...state,
                error:action.payload
            };

        default:
            return state;
    }
}