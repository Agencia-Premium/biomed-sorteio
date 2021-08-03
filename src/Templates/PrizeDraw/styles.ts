import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 8rem;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 2rem;
  }

  button {
    max-width: 40rem;
    min-width: 20rem;
    padding: 0 1.5rem;
    height: 8rem;
    background: var(--blue-200);
    color: #fff;

    border-radius: 0.25rem;
    border: 0;
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.2s;

    @media (max-width: 1440px) {
      font-size: 1.2rem;
      height: 3.4rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
