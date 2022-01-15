import { StyledTitles, StyledSubTitles, Avatar, StyledButton, ButtonGroup } from "../components/style";
import logo from "../assets/logo.png";

const Home = () => {
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
        <StyledTitles size={65}>Welcome</StyledTitles>
        <StyledSubTitles size={27}>Hello</StyledSubTitles>

        <ButtonGroup>
            <StyledButton to="/Login">Login</StyledButton>
            <StyledButton to="/Signup">Signup</StyledButton>
        </ButtonGroup>
    </div>
        );
}

export default Home;