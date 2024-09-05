import styled from "styled-components";
import Sidenav from "../../Components/Sidenav";
import Topnav from "../../Components/Topnav";



const Dashboard = () => {
  return (
    <>
    <Main>
       <Sidenav />
       <Topnav />

    </Main>
    
    </>
    
  );
};

export default Dashboard;

const Main = styled.div`
display:flex;
`
;
