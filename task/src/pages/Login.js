import { StyledTextInput, StyledFormArea, StyledFormButton, 
StyledLabel, Avatar, StyledTitles, colors, ButtonGroup, ExtraText, TextLink, CopyrightText} from './../components/style';

import Logo from './../assets/logo.png';

//formik
import {Formik, Form} from 'formik';
import { TextInput } from '../components/FormLip';
import * as Yup from 'yup';

//icon
import {FiMail, FiLock} from 'react-icons/fi'

// loader
import Loader from 'react-loader-spinner';

//auth & redux
import { connect } from 'react-redux';
import { loginUser } from '../auth/action/userActions';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo}></Avatar>
                    <StyledTitles color={colors.themed} size={30}>Log in</StyledTitles>
                            
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            validationSchema={
                                Yup.object({
                                    email: Yup.string().email("Invalid email address").required("Required"),
                                    password: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required")
                                })
                            } 
                            onSubmit={(values, {setSubmitting, setFieldError})=> {
                                console.log(values);
                                loginUser(values, history, setFieldError, setSubmitting);
                            }} 
                        >
                            {() => (
                                <Form>
                                    <TextInput name="email" 
                                        type="text"
                                        label="Email Address"
                                        placeholder="alex@example.com"
                                        icon={<FiMail/>}
                                    />

                                    <TextInput name="password" 
                                        type="password"
                                        label="Password"
                                        placeholder="********"
                                        icon={<FiLock/>}
                                    />

                                    <ButtonGroup>
                                    <StyledFormButton type="submit">Login</StyledFormButton>
                                    </ButtonGroup>
                                </Form>
                            )}
                        </Formik>
                        <ExtraText>
                            New here? <TextLink to="/Signup"> Signup</TextLink>
                        </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All rights reserver &copy;2020
            </CopyrightText>
        </div>
    )
}

export default connect(null, {loginUser}) (Login);