import {LOGIN_REQUEST , LOGIN_SUCCESS , LOGIN_FAIL , REGISTER_USER_REQUEST , REGISTER_USER_SUCCESS , REGISTER_USER_FAIL, LOGOUT_FAIL ,LOGOUT_SUCCESS} from '../constants/userConstant';
import axios from 'axios';


export const login = (email , password)=>async(dispatch)=>{
 
    try{

        console.log(email  , password);

        dispatch({type: LOGIN_REQUEST});

        // const config = {headers : {"Content-type": "application/json"}}

        const {data} = await axios.post(`https://nqsqlapp.herokuapp.com/api/v1/login` , {email, password});
        // console.log(data)

        dispatch({type:LOGIN_SUCCESS , payload:data.user});

    }catch(error){
        dispatch({type: LOGIN_FAIL , payload : error.response.data.message});
    }
}


//register
export const register = (userData)=> async (dispatch)=>{

    try{

        console.log(userData);

        dispatch({type: REGISTER_USER_REQUEST});

        

        const {data} = await axios.post (`https://nqsqlapp.herokuapp.com/api/v1/register`,userData);
        console.log(data)

        dispatch({type:REGISTER_USER_SUCCESS , payload:data.user});

    }catch(error)
    {

        dispatch({type: REGISTER_USER_FAIL , payload : error.response.data.message});

    }
}


//logout

export const logout = ()=> async (dispatch)=>{

    try{

         await axios.get (`/api/v1/logout`);
    

        dispatch({type:LOGOUT_SUCCESS });

    }catch(error){
        dispatch({type: LOGOUT_FAIL , payload : error.response.data.message});
    }
}