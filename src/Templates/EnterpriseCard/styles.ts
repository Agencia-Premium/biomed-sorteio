import styled from "styled-components";

export const ContainerEnterprise = styled.section`
  width: 100%;
  height: 100%;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bg-container);

  .containerPg {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding: 7rem 0 0 0;
    text-align: center;
    h1 {
      color: var(--primary-color);
    }
  }

  .button {
    margin-top: 3.75rem;
    width: 16.6rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border-style: none;
    cursor: pointer;
  }
`;
