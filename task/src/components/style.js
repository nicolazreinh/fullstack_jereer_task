import styled from 'styled-components';

//background
import background from './../assets/background.jpg';

//react router
import {Link} from 'react-router-dom';

export const colors = {
    primary:'#7eabf2',
    themed:'#566782',
    light1:'#142033',
    light2:'#c0d1eb',
    dark1:'#153361',
    dark2:'#0b1b33',
    dark3:'#0b1b33',
    red:'#f70733'
}

// Styled components
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachment: fixed;
`;

export const StyledTitles = styled.h2`
    font-size: ${(props)=> props.size}px;
    text-align: center;
    color: ${(props)=> props.color? props.color: props.primary};
    padding: 5px;
    margin: 20px;
`;

export const StyledSubTitles = styled.p`
    font-size: ${(props)=> props.size}px;
    text-align: center;
    color: ${(props)=> props.color? props.color: props.primary};
    padding: 5px;
    margin: 25px;
`;

export const Avatar = styled.div`
    width: 92px;
    height: 86px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-position: center;
    margin: auto;
`;

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    color: ${colors.primary};
    border-radius: 25px;
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.primary};
        color: ${colors.themed};
        cursor: pointer;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;

//input
export const StyledTextInput = styled.input`
    width: 200px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark1};
    background-color: ${colors.ligh2};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

${(props) => props.invalid && `background-color: ${colors.red}; ${colors.primary};`}

&:focus {
    background-color: ${colors.dark2};
    color: ${colors.primary};
}
`;

//input
export const StyledTextInputForDashboard = styled.input`
    width: 400px;
    height: 100px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.primary};
    background-color: ${colors.ligh2};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

${(props) => props.invalid && `background-color: ${colors.red}; ${colors.primary};`}

&:focus {
    background-color: ${colors.primary};
    color: ${colors.light1};
}
`;

//input
export const StyledTopicForDashboard = styled.input`
    width: 200px;
    height: 50px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.primary};
    background-color: ${colors.ligh2};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

${(props) => props.invalid && `background-color: ${colors.red}; ${colors.primary};`}

&:focus {
    background-color: ${colors.primary};
    color: ${colors.light1};
}
`;


export const StyledLabel= styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
`;

export const StyledLabelForDashboard = styled.p`
    text-align: center;
    font-size: 33px;
    font-weight: bold;
    
`;

export const StyledFormArea= styled.div`
    background-color: ${props => props.bg || colors.light1};
    text-align: center;
    padding: 45px 55px;
`;

export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colors.themed};
    color: ${colors.themed};
    border-radius: 25px;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.themed};
        color: ${colors.primary};
        cursor: pointer;
    }
`;

export const ErrorMsg= styled.div`
    font-size: 11px;
    color: ${(colors.red)};
    margin-top: -5px;
    margin-down: 10px;
    text-align: left;
`;

export const ExtraText = styled.p`
    font-size: ${(props) => props.size};
    text-align: center;
    color: ${(props) => (props.color? props.color: colors.dark1)};
    padding: 2px;
    margin-top: 10px;
`;

//icons
export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 35px;
    ${(props)=> props.right && `right: 15px;`}
    ${(props)=> !props.right && `left: 15px;`}
    
`;

export const TextLink= styled(Link)`
    Text-decoration: none;
    color: ${colors.themed};
    transition: ease-in-out 0.3s;

    &:hover {
        text-decoration: underline;
        letter-spacing: 2px;
        font-weight: bold; 
    }
`;

//copyright
export const CopyrightText= styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: ${colors.light2};
`;

