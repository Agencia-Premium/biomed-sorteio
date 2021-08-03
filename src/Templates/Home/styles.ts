import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;

  @media (max-width: 990px) {
    display: block;
  }

  .left {
    width: 60%;
    height: 100%;
    box-shadow: 4px 0px 28px rgba(0, 0, 0, 0.25);

    @media (max-width: 990px) {
      width: 100%;
    }

    @media (max-width: 600px) {
      width: 100%;
      height: 60%;
    }

    img {
      width: 100%;
      height: 100%;

      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
      }
    }
  }

  .right {
    width: 50%;

    padding: 2rem;

    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 1600px) {
      padding: 1rem;
    }

    @media (max-width: 990px) {
      width: 100%;
    }

    > img {
      padding-bottom: 2rem;

      @media (max-width: 1600px) {
        padding-bottom: 0rem;
      }
    }
  }
`;
