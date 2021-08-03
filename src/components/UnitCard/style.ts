import styled from "styled-components";

export const ContainerCard = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  flex-direction: column;
  gap: 1rem;

  .containerCards {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 36.4rem;
    max-height: 13.6rem;
    background-color: #fff;
    border-radius: 0.65rem;
    background-color: var(--bg-card);
  }
  .containerCards:hover {
    border: 2px solid var(--contorno);
  }

  .imagem {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .imgCard {
      width: 100%;
      height: 13.5rem;
      border-radius: 0.75rem 0 0 0.75rem;
    }
    transition: 0.5s;
  }

  .contextCard {
    width: 40%;
    height: 13.5rem;
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
    width: 14rem;
    box-shadow: -10px 0px 9px -1px rgba(0, 0, 0, 0.15);
    transition: 0.5s;
  }
`;
