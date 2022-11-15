import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Shop</Logo>
            <Desc>There are many variations of Lorem Ipsum available,
            There are many variations of Lorem Ipsum available,
            There are many variations of Lorem Ipsum available,
            There are many variations of Lorem Ipsum available,
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='E4405f'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter />
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                {/* yaha pe inline css lagaye h qki icon me lagana tha   */}
              <Room style={{marginRight:"10px"}} />  12/24 XYZ LANE
            </ContactItem>
            <ContactItem>
               <Phone style={{marginRight:"10px"}} /> +91 234 4567 890
            </ContactItem>
            <ContactItem>
               <MailOutline style={{marginRight:"10px"}} /> Shop@dev.com
            </ContactItem>
            <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
        </Right>
    </Container>
  )
}


// -------------------------------STYLED-COMPONENTS-------------------------------------

const Container = styled.div`
display: flex;
`;


const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display:flex;
`;

const SocialIcon = styled.div`
height: 40px;
width: 40px;
border-radius: 50%;
color: white;
/* yaha pe logo ke piche color dena tha to SocialIcon me color pass kiye aur usko as a prop yaha pass kr diye */
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Title = styled.h3`
    margin-bottom:30px;
`;

const List = styled.ul`
/* jb bhi list bante h to uska phle se margin padding rhta h to usi ko hatane ke liye 0 kiye h dono ko */
    margin: 0;
    padding: 0;
    list-style: none;
    /* do part me equally batne ke liye yeh dono use kiye h */
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
/* width 50% krne se do part me divide ho gya h */
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Payment = styled.img`
width:50%;
`

export default Footer