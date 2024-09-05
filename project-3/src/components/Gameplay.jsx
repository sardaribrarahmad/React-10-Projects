import Numberselector from "./Numberselector";
import Totalscore from "./Totalscore";
import styled from "styled-components";
import Roledice from "./Roledice";


const Gameplay = () => {
  return (
    <Main>
      <div className="top-section">
      <Totalscore />
      <Numberselector />
      </div>
      <Roledice />
    </Main>
    
  
  );
}

export default Gameplay;

const Main = styled.main ` 

padding-top: 40px;
.top-section{
display: flex;
justify-content: space-between;
align-items: center;
padding: 50px;
}`;

