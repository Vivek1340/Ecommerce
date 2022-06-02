import { useState } from "react"
import {  Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { userRequest } from "../requestMethods"
import { mobile } from "../responsive"

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),  url("https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500") center;
background-size: cover;
display: flex;
align-items :center;
justify-content: center;

`
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({width: "75%"})}

`

const Title = styled.h1`
font-size: 24px;
font-weight:300;
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0 ;
padding: 10px;
`
const Agreement = styled.span`
font-size: 12px;
margin: 20px;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor:pointer;

`

const Register = () => {
  const [inputs, setInputs] = useState({});
const navigate = useNavigate();


  const handleChange = (e)=>{
    setInputs(prev => {
        return {
          ...prev, [e.target.name]: e.target.value
        };
      });
  }
// console.log(inputs)

const handleClick = (e)=>{
    // e.preventDefault();

    
    const createUser = async () => {
        try {
            // console.log("hi")
          const res = await userRequest.post("auth/register", inputs);
          console.log("user created");
          console.log(res)
        

        }catch{}
        
           

}
createUser();
console.log("hi")
navigate('/');

}

    return (
        <Container>
            <Wrapper>
                <Title>
                    CREATE AN ACCOUNT
                </Title>
                <Form>
                    <Input placeholder="name " name="name" onChange={handleChange}/>
                    <Input placeholder="last name " name="lastName" onChange={handleChange} />
                    <Input placeholder="email " name="email" onChange={handleChange} />
                    <Input placeholder="username " name="username" onChange={handleChange}/>
                    <Input placeholder="password " name="password" onChange={handleChange}/>
                    <Input placeholder="confirm password " onChange={handleChange}/>
                    <Agreement>
                        By creating an account , I consent to the processing of my ;personal data in accordance with the <b> PRIVACY POLICY</b>
                    </Agreement>
                    
                    <Button onClick={handleClick}> CREATE</Button>
                    
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register;