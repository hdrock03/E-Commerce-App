import CategoryItem from "./CategoryItem"
import styled from "styled-components";
import { categories } from "../data";

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
`;

export default Categories