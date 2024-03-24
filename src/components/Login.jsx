import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Image from "./Image";
import { useNavigate } from "react-router-dom";
const intialValue = {
  email: "",
  password: "",
};
const Login = () => {

  const [data, setData] = useState(intialValue);
  // const[user, setUser]= useState([])
  const navigate= useNavigate()
  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    // console.log(data)
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
   const getUserData= localStorage.getItem("authdata")
  //  console.log('the user data ',getUserData)
    const { email, password } = data;

if(getUserData &&getUserData.length){
  const getData= JSON.parse(getUserData)
  // console.log(getData)
  const userLogin= getData.filter((ele, k)=>{
return ele.email===email &&ele.password===password
  })
  // console.log('user login', userLogin)
  if(userLogin.length===0){
    alert("Please Enter Valid Details")
  }
  else{
    // console.log("User Login Successfully")
    navigate('/details')
    localStorage.setItem("user_data", JSON.stringify(userLogin))
    // localStorage.setItem("login_data", getUserData)
  }
}
    
  }
  return (
    <>
      <div className="container mt-5">
        <section className="d-flex justify-content-between">
          <div className="left" style={{ width: "100%" }}>
            <div className="text text-center col-lg-6 mb-3">Login</div>
            <Form>
              
              <Form.Group className="mb-3 col-lg-6" controlId="email">
                <Form.Control
                  type="email"
                  onChange={getData}
                  name="email"
                  placeholder="Enter Your Email"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="password">
                <Form.Control
                  type="password"
                  onChange={getData}
                  name="password"
                  placeholder="Enter Your Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-6"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Form>
          </div>
          <Image />
        </section>
      </div>
    </>
  );
};

export default Login;
