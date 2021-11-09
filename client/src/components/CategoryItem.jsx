import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  margin: 3px;
  flex: 1;
  height: 70vh;
  position: relative;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
    flex: 1.2;
  }
  ${mobile({ width: "100%" })}
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  padding: 10px;
  background-color: white;
  color: gray;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    letter-spacing: 3px;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Img src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>HOZIROQ OLISH</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
