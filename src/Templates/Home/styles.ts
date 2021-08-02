import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;

  .left {
    width: 60%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .right {
    width: 50%;

    padding: 2rem;

    display: flex;
    align-items: center;
    flex-direction: column;

    > img {
      padding-bottom: 2rem;
    }
  }
`;
