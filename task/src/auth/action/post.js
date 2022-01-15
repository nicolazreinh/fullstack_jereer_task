import axios from "axios";

import {sessionService} from "redux-react-session";

export const addPost = (values) => {
    console.log(values);
    axios.post("https://murmuring-island-96841.herokuapp.com/post/addPost", values, {
        headers:{
            "Content-Type":"application/json"
        }
    }).then((response) => {
        console.log(response);
    }).catch(err => console.error(err))
}
