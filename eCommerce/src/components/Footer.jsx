import { Link } from 'react-router-dom'
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
display: flex;
${mobile({flexDirection: "column"})}

`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
margin:20px 0px;
`
const SocialContainer = styled.div`
display:flex;
`
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props => props.color };
display:flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display: "none"})}

`
const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin:0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`
const Right = styled.div`
flex:1;
padding: 20px;
${mobile({backgroundColor: "#fff8f8"})}

`
const ContactItem = styled.div`
 margin-bottom: 20px;
 display: flex;
 align-items: center;
`
const Payment = styled.img`

width:100%;
`


const Footer = () => {
  return (
    <Container>
    <Left>
        <Logo>SWAGGER.</Logo>
        <Desc>This is a practice project , so dont take anything personally if i happen to make it live as it contains image from different sites.</Desc>
        <SocialContainer>
            <SocialIcon color="385999">
                <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest />
            </SocialIcon>
        </SocialContainer>
    </Left>
    <Center>
        <Title>Useful Links</Title>
        <List>
       
        

           <ListItem><Link to="/">Home </Link></ListItem> 
           <ListItem><Link to="/cart">Cart</Link></ListItem> 
             <ListItem><Link to="/products/:category">Man Fashion</Link></ListItem> 
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
            <ListItem></ListItem>

        </List>
    </Center>
    <Right>
        <Title>Contact</Title>
        <ContactItem><Room  style={{marginRight:"10px"}}/>
            1/234 , Sector-13 , Noida 54321
        </ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/>
            +0 123 456 789
        </ContactItem>
        <ContactItem><MailOutline style={{marginRight:"10px"}}/>
            contact@swagger.dev
        </ContactItem>
        <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdugbpy2TGj9Mh3slT6hipBh368HTQs0pn0A&usqp=CAU"/>
    </Right>
    </Container>
  )
}

export default Footer