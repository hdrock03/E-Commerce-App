import styled from "styled-components"
import {popularProducts} from '../data'
import Product from "./Product";


const Products = () => {
  return (
    <Container>
        {popularProducts.map(item => (
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}


// -------------------------------STYLED-COMPONENTS-------------------------------------


const Container = styled.div`
display: flex;
flex-wrap: wrap;
padding: 20px;
justify-content: space-between;
`;

export default Products