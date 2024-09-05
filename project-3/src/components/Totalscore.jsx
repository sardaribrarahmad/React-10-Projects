
import styled from 'styled-components';

const Totalscore = () => {
  return (
    <Container>
    <div className="scores">
      <h1>
        0
      </h1>
      <h2>
        Total score
      </h2>
    </div>

    <div className="numbers">

    </div>
</Container>
  );
}

export default Totalscore;

const Container = styled.div `
display: flex;
background-color: aqua;
align-items: end;

.scores{
  display: flex;
  flex-direction: column;
  h1 {
    display: flex;
    place-content: center;
    font-size:100px;
  }

  h2{
    font-size: 24px;
  }
}

`;

