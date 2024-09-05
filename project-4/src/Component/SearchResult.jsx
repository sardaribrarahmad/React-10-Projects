import styled from 'styled-components'
import { BASE_URL} from "./Navigation";
import { Button } from './Navigation';

const SearchResult = ({ data }) => {
  return (
    <FoodContainer>
    
      <FoodCards>
        {data?.map((food) => (
          <FoodCard  key= {food.name}>

            <div className="1">
              <img src={BASE_URL + food.image} alt="" />
            </div>

            <div className="foodinfo">
              <div className="info">
                <h3>{food.name}</h3>
                <p>{food.text}</p>
              </div>

            <Button>${food.price}</Button>
            </div>
          </FoodCard>
        ))}  
        </FoodCards>

    </FoodContainer>
  );
};

export default SearchResult;



const FoodContainer = styled.section`
min-height: calc(100vh - 234px);
background-image: url(./images/bg.png);
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 100vw;
`;



const FoodCards = styled.div`
display: flex;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 20px;
justify-content: center;
padding-top: 80px;
`;


const FoodCard = styled.div`

width: 340px;
height: 167px;
border: 0.66px solid;


display: flex;
border-radius: 20px;
gap: 15px;
padding-right: 20px;
padding-top: 10px;
backdrop-filter: blur(13.18px);
background-blend-mode: overlay, normal;




.foodinfo {
  display: flex;
  gap:5px;
  flex-direction: column;
  align-items: end;

  button{
    font-size:14px;
  }


.info{
  h3{
    font-size: 14px;
  }
  p{
    font-size: 16px;
  }

}
}


`;