import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/apiCalls'

const Container = styled.div`
height : 60 px;
${mobile({ height: "50px" })}

`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}


`
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({ display: "none" })}


`
const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
display:flex;
align-items: center;
margin-left:25px;
padding: 5px;

`
const Input = styled.input`
border: none;
${mobile({ width: "50px" })};

`
const Center = styled.div`
flex:1;
text-align:center;
`
const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: "20px" })};

`
const Right = styled.div`
flex:1;
display: flex;
align-item: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "Center" })};


`
const MenuItem = styled.div`
font-size:14px;
cursor: pointer;
margin-left: 25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}


`


const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity)
    const dispatch = useDispatch();
  const {isFetching , error} = useSelector((state)=>state.user)
  const handleClick = (e) => {
    e.preventDefault();
    logout(dispatch);
  }
  const user = useSelector(state => state.user.currentUser);
// const user = null;

    return (
        <Container>
            <Wrapper>  <Left> <Link to="/"> <Language>EN</Language> </Link>
                <SearchContainer>
                    <Input placeholder='Search' />
                    <Search style={{ color: "gray", fontSize: 16 }} />
                </SearchContainer>
            </Left>
                <Center><Logo>SWAGGER</Logo></Center>
                <Right>
                
                    <Link to="/register">
                     {!user &&   <MenuItem>REGISTER</MenuItem>}
                    </Link>
                    <Link to="/login">
                    {!user &&    <MenuItem>SIGN IN</MenuItem>}
                    </Link>
                    
                    <Link to="/" onClick={handleClick}>
                      {user &&   <MenuItem>LOGOUT</MenuItem> }
                    </Link>
                
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>

        </Container>
    )
}

export default Navbar