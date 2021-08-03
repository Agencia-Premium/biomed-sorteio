import styled from "styled-components";

export const ContainerCard = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  flex-wrap: wrap;
  gap: 1rem;
  transition: 0.5s;

  .containerCards {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 33.4rem;
    max-height: 13.6rem;
    background-color: #fff;
    border-radius: 0.65rem;
    background-color: var(--bg-card);
    transition: 0.5s;
  }
  .containerCards:hover {
    border: 1.5px solid var(--contorno);
    transition: 0.5s;
  }

  .imagem {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;

    .imgCard {
      width: 100%;
      height: 11.5rem;
      border-radius: 0.75rem 0 0 0.75rem;
    }
    transition: 0.5s;
  }

  .contextCard {
    width: 40%;
    height: 11.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--bg-card);
    position: relative;
    left: 0rem;
    border-radius: 0 0.75rem 0.75rem 0;
    transition: 0.5s;
  }
  .contextCard:hover {
    box-shadow: -10px 0px 9px -1px rgba(0, 0, 0, 0.15);
    transition: 0.9s;
  }
`;
