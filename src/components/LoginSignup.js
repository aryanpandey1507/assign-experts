import './LoginSignup.css';
import {Fragment , useRef, useState , useEffect } from 'react'
import {Link} from 'react-router-dom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FaceIcon from '@material-ui/icons/Face';
import SchoolIcon from '@material-ui/icons/School';

import {useDispatch , useSelector} from 'react-redux';
import {login , register} from '../actions/userActions';
import {useAlert} from 'react-alert';
import { useNavigate } from 'react-router-dom';



function LoginSignup() {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const {error , isAuthenticated} = useSelector(state => state.user)

    const loginTab= useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    const [loginEmail , setLoginEmail] = useState("");
    const [loginPassword , setLoginPassword] = useState("");

    const [user , setUser]= useState({
        name:"",
        email:"",
        schoolName:"",
        password:""
    });

    const {name , email ,schoolName , password} = user;


    const loginSubmit=(e)=>{
        e.preventDefault()
        dispatch(login(loginEmail , loginPassword))
    };

    const registerSubmit = (e)=>{
        e.preventDefault();
        dispatch(register(user))
    }

    const registerDataChange = (e)=>{
        
            setUser({...user, [e.target.name] : e.target.value})
         
    }

    useEffect(()=>{

        if(error)
        {
            alert.error(error);

        }


        if(isAuthenticated){
            //   navigate('https://aryanpandey1507.github.io/Assign/')
            console.log(isAuthenticated);
             
            window.location.href = 'https://aryanpandey1507.github.io/Assign/'; 
                

        }

    },[dispatch , error  ,alert, isAuthenticated , navigate])




    const switchTabs = (e ,tab)=>{
        
        if(tab==="login")
        {
            switcherTab.current.classList.add('shiftToNeutral');
            switcherTab.current.classList.remove('shiftToRight');

            registerTab.current.classList.remove('shiftToNeutralForm');
            loginTab.current.classList.remove('shiftToLeft');
        }

        if(tab==='register'){
            switcherTab.current.classList.add('shiftToRight');
            switcherTab.current.classList.remove('shiftToNeutral');

            registerTab.current.classList.add('shiftToNeutralForm');
            loginTab.current.classList.add('shiftToLeft');
        }
    }

    return ( 

            
            <Fragment>
            <div className='LoginSignUpContainer'>
                <div className='LoginSignUpBox'>
                    <div>
                        <div className='login_signUp_toggle'>
                            <p onClick={(e)=>switchTabs(e , "login")}>Login</p>
                            <p onClick={(e)=>switchTabs(e , "register")}>Register</p>
                        </div>
                        <button ref={switcherTab}></button>
                    </div>
                    <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                        <div className="loginEmail">
                            <MailOutlineIcon />
                            <input 
                               type="email"
                               placeholder="Email"
                               required
                               value={loginEmail}
                               onChange={(e)=>setLoginEmail(e.target.value)}
                            />
                        </div>

                        <div className="loginPassword">
                            <LockOpenIcon />
                            <input 
                               type="password"
                               placeholder="Password"
                               required
                               value={loginPassword}
                               onChange={(e)=>setLoginPassword(e.target.value)}
                            />
                        </div>
                        <Link to ="/password/forgot">Forget Password  ?</Link>
                        <input type="submit" value="Login" className="loginBtn" />
                    </form>


                    <form
                        className="signUpForm"
                        ref={registerTab}
                        encType="multipart/form-data"
                        onSubmit={registerSubmit}>

                        <div className="signUpName">
                        <FaceIcon />
                            <input 
                             type="text"
                             placeholder="Name"
                             required
                             name="name"
                             value={name}
                             onChange={registerDataChange} />
                        </div>

                        <div className="signUpEmail">
                            <MailOutlineIcon />
                            <input 
                             type="email"
                             placeholder="School Issued Email"
                             required
                             name="email"
                             value={email}
                             onChange={registerDataChange} />
                        </div>

                        <div className="signUpEmail">
                            <SchoolIcon />
                            <input 
                             type="text"
                             placeholder="School Name"
                             required
                             name="schoolName"
                             value={schoolName}
                             onChange={registerDataChange} />
                        </div>

                        <div className='signUpPassword'>
                            <LockOpenIcon />
                            <input 
                             type="password"
                             placeholder="Password"
                             required
                             name="password"
                             value={password}
                             onChange={registerDataChange} />
                        </div>

                        <input 
                          type="submit"
                          value="Register"
                          className='signUpBtn'
                         />
                        
                    </form>
                </div>
            </div>
        </Fragment>

     );
}

export default LoginSignup;