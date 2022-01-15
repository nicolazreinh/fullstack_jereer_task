import { StyledTextInput, StyledFormArea, StyledFormButton, 
    StyledLabel, Avatar, StyledTitles, colors, ButtonGroup, ExtraText, TextLink, CopyrightText} from './../components/style';
    
    import Logo from './../assets/logo.png';
    
    //formik
    import {Formik, Form} from 'formik';
    import { TextInput } from '../components/FormLip';
    import * as Yup from 'yup';

    
    //icon
    import {FiMail, FiLock, FiPhone, FiUser} from 'react-icons/fi'
    
    // loader
    import Loader from 'react-loader-spinner';
        
    //auth & redux
    import { connect } from 'react-redux';
    import { signupUser } from '../auth/action/userActions';
    import { useHistory } from 'react-router-dom'

    require('yup-phone');




    const Signup = () => {
        const history = useHistory();
        return (
            <div>
                <StyledFormArea>
                    <Avatar image={Logo}></Avatar>
                        <StyledTitles color={colors.themed} size={30}>Sign Up</StyledTitles>
                            <Formik
                                initialValues={{
                                    email: "",
                                    password: "",
                                    repeatPassword: "",
                                    phoneNumber: "",
                                    username: ""
                                }}
                                
                                validationSchema={
                                    Yup.object({
                                        email: Yup.string().email("Invalid email address").required("Required"),
                                        password: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required"),
                                        repeatPassword: Yup.string().required("Required").oneOf([Yup.ref('password')], "Password must match"),
                                        phoneNumber: Yup.string().phone().required(),
                                        username: Yup.string().required("Required")
                                        
                                    })
                                }
                                onSubmit={(values, {setSubmitting, setFieldError})=> {
                                    console.log(values);
                                    signupUser(values, history, setFieldError, setSubmitting);
                                }} 
                            >
                                {() => (
                                    <Form>
                                    <TextInput name="username" 
                                        type="text"
                                        label="Username"
                                        placeholder="alex"
                                        icon={<FiUser/>}
                                    />
                                    
                                    <TextInput name="email" 
                                            type="text"
                                            label="Email Address"
                                            placeholder="alex@example.com"
                                            icon={<FiMail/>}
                                        />

                                    <TextInput name="phoneNumber" 
                                        type="text"
                                        label="Phone Number"
                                        placeholder="0123456789"
                                        icon={<FiPhone/>}
                                    />
    
                                        <TextInput name="password" 
                                            type="password"
                                            label="Password"
                                            placeholder="********"
                                            icon={<FiLock/>}
                                        />

                                        <TextInput name="repeatPassword" 
                                            type="Password"
                                            label="Repeat Password"
                                            placeholder="********"
                                            icon={<FiLock/>}
                                        />
    
                                        <ButtonGroup>
                                        <StyledFormButton type='submit'>Signup</StyledFormButton>
                                        </ButtonGroup>
                                    </Form>
                                )}
                            </Formik>
                            <ExtraText>
                                Already have account? <TextLink to="/Login"> Login</TextLink>
                            </ExtraText>
                </StyledFormArea>
                <CopyrightText>
                    All rights reserver &copy;2020
                </CopyrightText>
            </div>
        )
    }
    
    export default connect(null, {signupUser})(Signup);