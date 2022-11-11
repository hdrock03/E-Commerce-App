import styled from "styled-components"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import { sliderItems } from "../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick =(direction) =>{
    if(direction === 'left'){ // agr dir left h to index set kro
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2) // agr index 0 se bda h to 1 minus kr do aur 0 hai to 2 index pe chala jaye mtlv last
    } else{
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  }
  return (
    <Container>
        <Arrow direction='left' onClick={() => handleClick('left')}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map(item => (
          <Slide bg= {item.bg}>
          <ImgContaianer>
          <Image src={item.img}/>
          </ImgContaianer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
          </Slide>
          ))}
        </Wrapper>
        <Arrow direction='right' onClick={() => handleClick('right')}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

// -------------------------------STYLED-COMPONENTS-------------------------------------

const Container = styled.div`
/* border: 1px solid red; */
width: 100%;
height: 100vh;
display: flex;
background-color: #FFF;
position: relative;
overflow:hidden; // isse ek viewport se jyada nh dikhega mtlb horizontal me jo scrolling rhta h usko hata dega
`;

const Arrow= styled.div`
    width: 50px;
    height: 50px;
    background-color: #e6dfdf;
    border-radius: 50%;
    /* yeh display wala kiye h qki arrow center me nh tha */
    display: flex;
    align-items: center;
    justify-content: center;
    /* dono arrow ko center me side-side me rkhna h to parent me position relative dena hga */
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    /* use Props for element position */
    /* agr direction left hai to left=10px */
    left: ${props => props.direction === 'left' && "10px"};
    right: ${props => props.direction === 'right' && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index:2;
`;

const Wrapper = styled.div`
/* border: 1px solid black; */
height:100%;
display: flex;
/* transform:translateX(-100vw); // isse current screen -100vw shift ho jayega */
transform: translateX(${(props) => props.slideIndex * -100}vw);
transition: all 1s ease ;
`;


const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
/* border: 1px solid blue; */
background-color: #${props => props.bg}; // # diye h suruat me taki props.bg ka jo color h wo hexcode me change ho jaye
`;

const ImgContaianer = styled.div`
/* border: 1px solid green; */
height:100%;
flex: 1;
`;

const Image = styled.img`
/* border: 1px solid red; */
height: 80%;
`;

const InfoContainer = styled.div`
flex:1;
padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing:3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;



export default Slider