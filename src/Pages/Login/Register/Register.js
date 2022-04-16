import React ,{ useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    // const [email,setEmail] =useState('');
    // const [password,setPassword] =useState('');
    // const [confirmPassword,setconfirmPassword] =useState('');

    const [userInfo,setUserInfo] =useState({
      email : '',
      password : '',
      confirmPassword : '',

    })
    const [errors,setErrors] =useState({
      email : '',
      password : '',
      confirmPassword : '',

    })
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      hookerror,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handelEmailBlur =(e) =>{
      const emailRegex =/\S+@\S+\.\S+/;
      const validEmail =emailRegex.test(e.target.value);

      if(validEmail){
        setUserInfo({...userInfo,email: e.target.value});
        setErrors({...errors,email: ''})
      }else{
        setErrors({...errors,email: 'Invlide Email'});
        setUserInfo({...userInfo, email :''})
      }
    }
    const handelPasswordBlur =(e) =>{
      const passeordRegex =/.{6,}/;
      const validPassword =passeordRegex.test(e.target.value);

      if(validPassword){
        setUserInfo({...userInfo,password: e.target.value});
        setErrors({...errors,password: ''})
      }else{
        setErrors({...errors,password: 'Invlide password'})
        setUserInfo({...userInfo, password :''})
      }
    }

    const handelconfirmPasswordBlur =(e) =>{
    
      if(e.target.value === userInfo.password){
        setUserInfo({...userInfo,confirmPassword: e.target.value});
        setErrors({...errors,password: ''})
      }else{
        setErrors({...errors,password: 'Dont match'})
        setUserInfo({...userInfo, confirmPassword :''})
      }
    }

    const navigate =useNavigate();
    const location =useLocation();
    const from =location.state?.from?.pathname || '/';
    useEffect( () =>{
      if(user){
        navigate(from);
      }
    },[user])

    useEffect(() =>{
      if(errors){
        toast(hookerror?.message);
      }
    } ,[hookerror])

      const handelRegister =(e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
      }
    
   
    return (
        <div className="w-50 mx-auto">
        <h1 className="text-center">Register</h1>
      <Form onSubmit={handelRegister}>
        
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handelEmailBlur} className="p-3" type="email" placeholder="Enter email" />
        </Form.Group>
        {errors?.email && <p className="text-danger">{errors.email}</p>}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={handelPasswordBlur}  className="p-3" type="password" placeholder="Password" />
        </Form.Group>

        {errors?.password && <p className="text-danger">{errors.password}</p>}

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control onChange={handelconfirmPasswordBlur} className="p-3" type="password" placeholder="Confirm Password" />
        </Form.Group>

        {errors?.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button  variant="primary" type="login">
        Register
        </Button>
       
      </Form>
      <p>Alreday Have a Account <Link to="/login" className="btn btn-link text-decoration-none">Login</Link></p>
      <ToastContainer/>
    </div>
    );
};

export default Register;