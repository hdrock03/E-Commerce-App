import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder='Username' />
                <Input placeholder='Password' />
                <Button>LOGIN</Button>
                <Link>FORGET PASSWORD</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

// -------------------------------STYLED-COMPONENTS-------------------------------------

const Container = styled.div`
/* container full screen hona chahiye isiliye height width 100 vh and 100 vw de rh h */
width: 100vw;
height: 100vh;
/* linear gradient upar se niche ke taraf color krta h aur 2 parameter leta h jo color batata h, 1st top aur 2nd bottom ka color batata h */
background:linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
),
url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;
background-size:cover;

display:flex;
justify-content: center;
align-items: center;
`;

const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: #fff;
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin:  10px 0px ;
padding: 8px;
`;


const Button = styled.button`
cursor: pointer;
width: 40%;
border: none;
padding: 10px 10px;
background-color: teal;
color: white;
`;

const Link = styled.a`
margin: 5px 0px;
font-style: 12px;
text-decoration: underline;
cursor: pointer;
`

export default Login