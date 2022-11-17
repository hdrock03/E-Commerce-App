import CategoryItem from "./CategoryItem"
import styled from "styled-components";
import { categories } from "../data";
import {mobile} from '../responsive'

const Categories = () => {
  return (
    <Container>
       {categories.map(item =>(
        <CategoryItem item={item}/>
       ))} 
    </Container>
  )
}


// -------------------------------STYLED-COMPONENTS-------------------------------------

const Container = styled.div`
    padding: 20px;
    display :flex;
    justify-content: space-between;
    /* padding 0 kiye taki image pura screen pe aaye */
    ${mobile({padding: '0px', flexDirection:'column'})}
`;

export default Categories