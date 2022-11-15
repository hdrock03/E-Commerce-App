import styled from "styled-components"
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";


const Product = ({item, key}) => {
  return (
    <Container>
       <Circle />
       <Image src={item.img} />
       <Info>
            <Icon>
                < ShoppingCartOutlined />
            </Icon>
            <Icon>
                < SearchOutlined />
            </Icon>
            <Icon>
                < FavoriteBorderOutlined />
            </Icon>
       </Info>
    </Container>
  )
}


// -------------------------------STYLED-COMPONENTS-------------------------------------
const Info = styled.div`
opacity: 0; // isse webpage pe jane se icons nh dikhega
width:100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 350px;
    min-width:280px;
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    /* yeh wala diye h qki jb pic pe hover krenge tb 3no icon aa jayega uske liye phle info ka opacity 0 kiye then yaha pe jb hover hga to info ko call kiye aur info ka opacity 1  */
    &:hover ${Info}{
      opacity: 1;
    }
`;

const Circle = styled.div`
width:200px;
height: 200px;
border-radius: 50%;
background-color: #f4fbfd;
position: absolute;

`;
const Image = styled.img`
height: 75%;
z-index: 2;
/* padding: 2px; */
`;



const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
transition: all 0.5s ease;
/* yaha pe hover ho rha h jb icons pe jaa rhe h */
&:hover{
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`;

export default Product