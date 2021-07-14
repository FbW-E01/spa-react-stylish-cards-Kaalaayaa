import styled from 'styled-components'
import image from './photoleaf4.jpeg'

// const borderWidth= 2;

// const Button = styled.button`
//     border: ${borderWidth}px solid palevioletred;
//     color: palevioletred;
//     margin: 0.1em;
//     background: navy
// `

const Title = styled.h1`
    font-size: 7em;
    text-align: center;
    color: #cf550a;
    font-family: Outward;
    margin: 0;
    margin-top: 0px;

`

const Wrapper = styled.section`
  padding: ;
  border: 20px solid #2d803a;
  width: 300px;
  height: 500px;
  background-image: url(${image});
  background-position: center;
  background-size: cover;
  position: relative;
  left: 600px;
  bottom: 800px;

`;

const Text = styled.p`
    color: #cf550a;
    font-family: Outward-block;
    font-size: 3em;
    margin-top: 260px;
    padding-left: 70px 
`


function StyledComponent() {

    
    return(
            <Wrapper>
                <Title>Feuille</Title>
                <Text>Styled Component</Text>
            </Wrapper>
    )
}

export default StyledComponent