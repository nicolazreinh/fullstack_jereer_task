import axios from "axios";

import {sessionService} from "redux-react-session";


export const loginUser = (credentials, history, setFieldError, setSubmitting) => {
    //make check and get some data

    axios.post("https://murmuring-island-96841.herokuapp.com/user/signin", credentials, {
        headers:{
            "Content-Type":"application/json"
        }
    }).then((response) => {
        const {data} = response;
        
        console.log(response)
        console.log(data)

        if(data.status === "FAILED"){
            const {message}= data;

            //check for scpecific error
            if(message.includes("credentials")){
                setFieldError("email", message);
                setFieldError("password", message);
            } else if(message.includes("password")){
                setFieldError("password", message);
            } 
        } else if (data.status === "SUCCESS"){
            const userData = data.data[0];

            const token = userData._id;

            sessionService.saveSession(token).then(()=>{
                sessionService.saveUser(userData).then(() => {
                    history.push("/Dashboard");
                }).catch(err => console.error(err))
            }).catch(err => console.error(err))
        }

        //complete submission
        setSubmitting(false);

    }).catch(err => console.log(err));
}

export const signupUser = (credentials, history,setFieldError, setSubmitting) => {
    console.log(credentials);
    axios.post("https://murmuring-island-96841.herokuapp.com/user/signup", credentials, {
        headers:{
            "Content-Type":"application/json"
        }
    }).then((response) => {
        const {data} = response;

        if(data.status === "FAILED") {
            const {message} = data;

            //checking for specific error
            if(message.includes("email")){
                setFieldError("email", message);
            } else if(message.includes("username")){
                setFieldError("username", message);
            } else if(message.includes("phone number")){
                setFieldError("phoneNumber", message);
            }else if(message.includes("password")){
                setFieldError("password", message);
            }

            setSubmitting(false);

        } else if(data.status === "SUCCESS"){
            const {email, password} = credentials;

            loginUser({email, password}, history, setFieldError, setSubmitting);
        }

    }).catch(err => console.error(err))
}

export const logoutUser = (history) => {
    return () => {
        sessionService.deleteSession();
        sessionService.deleteUser();
        history.push('/');
    }
}