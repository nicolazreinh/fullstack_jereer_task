import { StyledTextInputForDashboard,StyledTitles, StyledLabelForDashboard, Avatar, StyledButton, ButtonGroup, StyledFormArea, colors, StyledTopicForDashboard, StyledFormButton } from "../components/style";
import logo from "../assets/logo.png";
import axios from "axios";


import '../dashboard.css';


//auth & redux
import { connect } from "react-redux";
import { logoutUser } from "../auth/action/userActions";

//formik
import {Formik, Form} from 'formik';

import { useHistory } from "react-router-dom";

import { addPost } from '../auth/action/post';
import { useEffect, useState } from "react";

let gUser;

const handelPost = (e)=>{
    e.preventDefault();
    console.log(e.target[0].value);
    let values = {
        "topic": e.target[0].value,
        "content": e.target[1].value,
        "publisher":gUser.username
    }
    axios.post("https://murmuring-island-96841.herokuapp.com/post/addPost", values, {
        headers:{
            "Content-Type":"application/json"
        }
    }).then((response) => {
        console.log(response);
        window.location.reload(false);
    }).catch(err => console.error(err))
}

const getPosts = ()=>{

    axios.get("https://murmuring-island-96841.herokuapp.com/post/postList").then((response) => {
        console.log(response);
        
    }).catch(err => console.error(err))
}

const Dashboard = ({logoutUser, user}) => {
    const history= useHistory();
    gUser=user;
    const [posts, setPosts]=useState([]);
    useEffect(()=>{
            axios.get("https://murmuring-island-96841.herokuapp.com/post/postList").then(res => {
                console.log(res.data);
                setPosts(res.data)
            }).catch(err => {console.log(err)})
    })
    return (
    <div>
        <div style={{
            positon: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "transparent",
            width: "100%",
            padding: "15px",
            display: "flex",
            justifyContent: "flex-start"
        }}>
        <Avatar image={logo}/>
        </div>

        <StyledFormArea bg={colors.dark1}>
            <StyledTitles size={65}>Welcome {user.username}</StyledTitles>
            <form onSubmit={handelPost}>
                <label class="lbl">Topic</label>
                <input class="inp" name="topic"/> 
                <br></br><br></br>
                <label class="lbl">Content</label>
                <input class="inp" name="content"/>
                <br></br><br></br>
                <button id="button-post">Add Post</button>
            </form>
            <ButtonGroup>
                <StyledButton to="#" onClick={()=> logoutUser(history)}>Log Out</StyledButton>
            </ButtonGroup>
        </StyledFormArea>
        <br></br><br></br>
        <StyledFormArea>
            <StyledTitles>Posts</StyledTitles>
                <h2>Topic||Content||Publisher</h2>
            {
                posts.map(post => (<StyledTitles key={post._id}>{post.topic}||{post.content}|| {post.publisher}</StyledTitles> 
                
                    ))
            }
        </StyledFormArea>
        {getPosts()}

        </div>

        );
}

const mapStateToProps = ({session}) => ({
    user: session.user
})

export default connect(mapStateToProps, {logoutUser})( Dashboard);