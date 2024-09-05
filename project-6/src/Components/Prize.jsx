import styled from 'styled-components';
const Prize = () => {
  return (
 
  <Container11>
  <div className="main">
    <div className="left">
    <div className="text">
        <p>
        Current Prize 
        <br/>
        ₹ 26,670.21 <img src="./Label.png" alt="" />
        </p>    
        <div className="img">
        <Button1>BUY</Button1>
        <Button1>Sell</Button1>
      </div>
    </div>
      
      <div className='imges'>
        <img src="./Tabs.png" alt="" />
        <img src="./Graph.png" alt="" />
        <img src="./Times.png" alt="" />
      </div>

      </div>

      <div className="right">
      <div className="text1">
        <div className="textleft">
        <h1>
        INR Deposite
        </h1>
        <h2>
        2202-06-9 7.06am
        </h2>
        </div>
        <div className="textright">
          <h1>
            +$81123.10
          </h1>
        </div>
        

      </div>
      <div className="text1">
      <div className="textleft">
        <h1>
        INR Deposite
        </h1>
        <h2>
        2202-06-9 7.06am
        </h2>
        </div>
        <div className="textright">
          <h1>
            +$81123.10
          </h1>
        </div>
      </div>
      <div className="text1">
      <div className="textleft">
        <h1>
        INR Deposite
        </h1>
        <h2>
        2202-06-9 7.06am
        </h2>
        </div>
        <div className="textright">
          <h1>
            +$81123.10
          </h1>
        </div>

        
      </div>
      view all
      </div>


  
    </div>
      
    </Container11>
  
    
  )
}

export default Prize;

export const Button1 = styled.button`
background-color:purple;
color:white;
border-radius: 16px;
padding: 8px 16px 8px 16px;
align-items: center;
width: 130px;
`;

const Container11 = styled.div`
display: flex;
height: 400px;
justify-content: space-between;
align-items: center;

gap:10px;

.images{
  display: flex;
  flex-direction: column;
}
.main{
  margin-top: 20px;
  background-color: blue;
  display: flex;
  gap: 120px;
  justify-content: space-between;


  .left{
    background-color: aqua;
  }
  .right{
    background-color: green;
    gap: 40px;
    .text1{
      display: flex;
      width: 400px;
      justify-content: space-between;
      .textleft{
        display: flex;
        flex-direction: column;
      }
      .textright{
        display: flex;
      }

    }
    
    
  }
}
.text{
  display: flex;
  justify-content: space-between;
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
