
import { useState } from 'react';
import styled from 'styled-components';

const Numberselector = () => {

  const array = [1,2,3,4,5,6];
  const [selectednumber, setselectednumber] = useState();
  console.log("number", selectednumber);
  return (
    <Div>
      <div className="flex">
      { array.map((value ,i) => (
        <Box 
        isselected={value == selectednumber}
        key={i} onClick={() => setselectednumber(value)}>
        {value}</Box>
      ))}
      </div>
      <p>
        Select Number
      </p>
    </Div>
  );
}

export default Numberselector;


const Div = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items: end;


.flex{
  display: flex;
  gap: 24px;
}

p{
  font-size: 24px;
  font-weight: 700px;
  display: flex;
  justify-content: flex-end;
}
`;
const Box = styled.div `
  
   height:72px;
  width: 72px;
  border:4px solid black;
  font-size: 50px;
  font-weight: 700px;
  display: grid;
  place-content: center;

  background-color: ${(props)  => props.isselected ? "black":"white"};
  color: ${(props)  => props.isselected ? "white":"black"};
`
