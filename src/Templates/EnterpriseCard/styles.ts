import styled from "styled-components";

export const ContainerEnterprise = styled.section`
  width: 100vw;
  height: 100%;
  padding-bottom: 5rem;
  display: flex;
  justify-content: center;
  background: var(--bg-container);

  .containerPg {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 7rem 0 0 0;
    text-align: center;
    h1 {
      color: var(--primary-color);
    }
  }
`;
