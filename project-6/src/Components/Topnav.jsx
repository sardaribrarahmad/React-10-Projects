
import styled from 'styled-components';
import Balance from './Balance';



const Topnav = () => {
  return (
    <>
<Container>
      <Topnavv>
          <h1>
            Dashboard
          </h1>
          <img src="./Group 165.png" alt="" />
    </Topnavv>
    <Balance />
    </Container>
    
    </>

      
    
  )
}

export default Topnav;

// const Maincc = styled.div`
// max-width: 1200px ;
// margin: 0 auto;
// `;


const Container = styled.div`
width: 1200px;
margin: 0 auto;
display: flex;
flex-direction: column;


`;


const Topnavv = styled.div`

display:flex;
justify-content:space-between;
background-color:red;
align-items: center;
padding: 2px;
max-height: 64px;
border: 2px solid grey;

h1{
margin-left: 150px;
}

img{
  
margin-right: 180px;

}
`;


