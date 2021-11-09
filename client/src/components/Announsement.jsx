import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  color: white;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announsement = () => {
  return (
    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Container>
  );
};

export default Announsement;
