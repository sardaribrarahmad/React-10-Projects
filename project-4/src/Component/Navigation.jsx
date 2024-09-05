
import styled from 'styled-components'
import SearchResult from './SearchResult'
import { useEffect, useState } from 'react';

export const BASE_URL = 'http://localhost:9000';

export const Button = styled.button`
background-color: red;
color:white;
border-radius: 5px;
padding: 6px 20px;
font-size: 20px;
border: none;
justify-content: center;

  &:hover{
  background-color: blueviolet;
  cursor: pointer;
}

`;


export const Container = styled.div`
background-color: #323333;
  margin: 0 auto;
  max-width: 1280px;
`;


const Navigation = () => {

  const [data, setData] = useState(null);
  const [filtereddata,setfiltereddata] = useState(null);


  useEffect(( ) => {
    const fetchfooddata = async () => {
    const response = await fetch(BASE_URL);
    const json = await response.json();
    setData(json);  
    setfiltereddata(json);};
    fetchfooddata(); 
  }, []);

const searchfood = (e) => {
  const searchvalue = e.target.value;


  if(searchvalue == ''){
    setfiltereddata(null);
  }


   const filtar = data?. filter ((food) => 
    food.name.toUpperCase().toUpperCase().includes(searchvalue.toUpperCase().toUpperCase()  )
  )
   ;


  setfiltereddata(filtar);
};


  return (
    <>
      <Container>

      <TopContainer>
            <div className="data">
                <img src="./images/Foody Zone.png" alt="logo" />
            </div>

            <div className="search">
                <input onChange={searchfood} type="text" placeholder=" Search Food...." />
            </div>
      </TopContainer>

      <FilterContainer>
        <Button onClick={() => alert("sardar sab th egreat")}>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>DIner</Button>

      </FilterContainer>
      </Container>
      <SearchResult data = {filtereddata} />
    </>
    

      
  
  
        
  );
}

export default Navigation;

const TopContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 16px;
align-items: center;
min-height: 140px;

.search{
  input{
    background-color: transparent;
    width: 285px;
    height: 40px;
    font-size: 20px ;
    padding: 10px ;
    padding-left: 20px;
    border-radius: 5px ;
    border: 2px solid red;
    text-align: start;
    color: white;
  

  }
}
`;



const FilterContainer = styled.section`
display: flex;
justify-content: center;
gap: 20px;
margin-bottom: 30px;
`;
