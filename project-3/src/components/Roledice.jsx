
import { useState } from 'react';
import styled from 'styled-components';

const Roledice = () => {


  const [currentdice, setcurrentdice] = useState(1);

  const randomNumberInRange = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min)) + min);
    return Math.floor(Math.random() * (max - min)) + min;
};


const roleDice = () => {
  const  randomnumber = randomNumberInRange(1, 7);

  setcurrentdice((prev) => randomnumber);

};


  return (
    <Main>
      <div className="content" onClick= {roleDice}>
      <img src={`./public/images/dice/dice_${currentdice}.png`} alt="" />
       <p>
        Click on Dice to roll
      </p>

      <Button> Reset score </Button>
      <Button> Show result</Button> 
    </div>
    </Main> 
  );
}

export default Roledice;

const Button = styled.div `
  letter-spacing: 2px;
  font-size: 24px;
  padding: 20px;
  min-width: 220;
  height: 40px;
  border-radius: 20px;
  background-color: black;
  color: aliceblue;
  text-align: center;

`;

const Main = styled.div`
  display: grid;
  height: 60vh;
  place-items: center;

  .content {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .img{
      width: 500px;
      height: 301px;
    }

    p{
      font-size:20px;
      align-items: center;
      text-align: center;
      font-style: bold;
      font-weight: 700px;

    }
  }
`;


