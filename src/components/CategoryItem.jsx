import styled from "styled-components";
import {mobile} from '../responsive'

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

// -------------------------------STYLED-COMPONENTS-------------------------------------

const Container = styled.div`
    flex: 1; // sara element ko equal height width milega
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover; // isse image shrink nh krega
${mobile({height: '30vh'})}
`;

const Info = styled.div`
/* phle info niche tha image ke to usko upar image pe krne ke liye container ko relative aur info ko absolute diya gya */
/* height width 100% diye taki pura container ko occupy kr liye taki jb flex lagaye to center me aa jaye */
/* top and left 0 diye taki top pe chala jaye usko baad flex se middle me la skte h */
position: absolute;
height: 100%;
width:100%;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Title = styled.h1`
color: white;
margin-bottom: 20px;

`;

const Button = styled.button`
border: none;
padding: 10px ;
background-color: white;
color: gray;
cursor: pointer;
`;

export default CategoryItem