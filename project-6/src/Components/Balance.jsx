
import styled from "styled-components";
import Prize from "./Prize";


const Balance = () => {
  return (
     <MainC>
      <Container1>
      <div className="text">
        <h1>
        Total Portfolio Value
        </h1>
        <h2>
        ₹ 112,312.24
        </h2>

      </div>
      <div className="text">
        <h1>
        Wallet Balances
        </h1>
        <h2>
        22.39401000 BTC
        </h2>
      </div>
      <div className="text">
        <h1>

        </h1>
        <h2>
        ₹ 1,300.00 INR
        </h2>
      </div>

      <div className="bt1">
        <Button>Deposit</Button>
        <Button>Widthdraw</Button>
      </div>

    </Container1>
    <Prize />

    </MainC>
    
    
  );
};

export default Balance;

const MainC = styled.div`
max-width: 900px ;
margin: 0 auto;
`;



export const Button = styled.button`
background-color:purple;
color:white;
border-radius: 16px;
padding: 8px 16px 8px 16px;
align-items: center;
width: 130px;
`;
export const Container1 = styled.div`
display: flex;
min-height: 106px;
justify-content: space-between;
background-color: aqua;
align-items: center;
gap:10px;
.text{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  h1{
    justify-content: start;
    font-size: 14px;}
  h2{
    font-size: 22px;
    background-color: grey;
  }
};
.bt1{
  display: flex;
  gap: 10px;
}
`;