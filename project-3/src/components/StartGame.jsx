import styled from 'styled-components'


const StartGame = ({toggle}) => {
  return (
    <Container>
      <img src="./public/images/dices 1.png" alt="" />
      <div className="data">
        <h1>
          DICE GAME
        </h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

export default StartGame;



const Container = styled.div`
margin: 0 auto;
max-width: 1180px;
display: flex;
height: 100vh;
justify-content:space-evenly;
place-items: center;
align-self: center;
background-color: aquamarine;

.data{

  display: flex;
  flex-direction: column;

  h1{
    font-size: 96px ;
    font-style: bold;
    white-space: nowrap;
  }
}
`;

const Button = styled.button`
background-color: black;
color: white;
padding: 10px 18px;
border-radius: 5px;
min-width: 220px;
align-items: center;
justify-content: center;
align-self: flex-end;
font-size: 16px;

&:hover{
  background-color: aqua;
  cursor: pointer;
}
`;


const transparentbtn = styled(Button)`
background-color: white;
color: black;
padding: 10px 18px;
border-radius: 5px;
min-width: 220px;
align-items: center;
justify-content: center;
align-self: flex-end;
font-size: 16px;

`;

