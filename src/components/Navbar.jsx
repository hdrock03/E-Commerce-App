import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import styled from "styled-components";
import {mobile} from '../responsive'

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{color:'gray', fontSize:16}} /> 
            {/* isko inner style bolte hai */}
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shop</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
          {/* yeh badgecontent yeh krta h ki cart ke upar 4 show krega */}
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

// -------------------------------STYLED-COMPONENTS-------------------------------------

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: '10px 0px'})}
`;

const Left = styled.div`
  /* width:33.3%; instead of giving this we can give flex=1 which take 1 part */
  flex: 1;
  display: flex;
  align-items: center; // isse uska child center me align kr jayega from top

`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  /* qki jb mobile me change kr rhe the tb overflow kr ja rha tha to language hata diye */
  ${mobile({display: 'none'})}
`;

const Input = styled.input`
  border: none;
  ${mobile({width: '50px'})}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Center = styled.div`
  /* width:33.3%; */
  flex: 1;
  /* border: 1px solid red; */
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: '24px'})}
`;
const Right = styled.div`
  /* width:33.3%; */
  flex: 1;
  display: flex;
  align-items:center;
  justify-content: flex-end;
  /* flex:2 de diye qki overflow ho rha tha */
  ${mobile({flex:'2' , justifyContent: 'center'})}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: '12px' , marginLeft: '10px'})}
`