import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundImg src={`${process.env.PUBLIC_URL}/favicon.ico`} />
      <NotFoundTextBox>
        <div>404 NotFound Page</div>
        <Link to="/">Go to Home </Link>
      </NotFoundTextBox>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const NotFoundImg = styled.img`
  width: 150px;
  margin-right: 20px;
`;

const NotFoundTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  > a {
    font-size: 30px;
    font-weight: 500;
    color: red;
  }
`;

export default NotFound;
