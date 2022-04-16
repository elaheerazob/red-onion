import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
    const navegate =useNavigate();
    const [userInfo,setUserInfo] =useState({
      email : '',
      password : '',
     

    })
    const [errors,setErrors] =useState({
      email : '',
      password : '',
      

    })
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
   

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

    

    const handelRegister =(e) =>{
      e.preventDefault();
      signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }


  return (
    <div className="w-50 mx-auto">
        <h1 className="text-center">Login</h1>
      <Form onSubmit={handelRegister}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handelEmailBlur} className="p-3" type="email" placeholder="Enter email" />
        </Form.Group>
        {errors?.email && <p className="text-danger">{errors.email}</p>}


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={handelPasswordBlur} className="p-3" type="password" placeholder="Password" />
        </Form.Group>
        {errors?.password && <p className="text-danger">{errors.password}</p>}

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="login">
          Login
        </Button>
      </Form>
      <p>Are You New <Link to="/register" className="btn btn-link text-decoration-none">Register</Link></p>
      <p>Forgate Your password <button  className="btn btn-link text-decoration-none">Reset Now</button></p>
    </div>
  );
};

export default Login;
