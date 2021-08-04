import styled from "styled-components";

export const Container = styled.form`
  width: 38rem;
  height: 38rem;
  padding: 0 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(92, 99, 105, 0.2);

  display: flex;
  flex-direction: column;

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    margin: 1rem 0 1.5rem;
    padding-bottom: 1rem;

    @media (max-width: 375px) {
      gap: 0.2rem;
    }

    @media (max-width: 320px) {
      flex-direction: column;
      gap: 1rem;
      margin: 0.5rem 0;
      text-align: center;
    }

    img {
      border-radius: 50%;
      width: 3rem;
      height: 3rem;

      @media (min-width: 2560px) {
        width: 5rem;
        height: 5rem;
      }
    }

    p {
      font-size: 1.4rem;

      @media (min-width: 2560px) {
        font-size: 1.8rem;
      }

      @media (max-width: 375px) {
        font-size: 1.4rem;
      }
    }

    span {
      @media (min-width: 2560px) {
        font-size: 1.4rem;
      }

      @media (max-width: 375px) {
        font-size: 0.8rem;
      }
    }
  }

  .signOutButton {
    height: 3rem;
    border-radius: 0.5rem;
    border: 0;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;

    color: #333;
    font-weight: bold;
    cursor: pointer;

    @media (min-width: 2560px) {
      height: 4rem;
      font-size: 1rem;
    }

    @media (max-width: 320px) {
      margin-left: 0;
    }

    &:hover {
      filter: brightness(0.95);
    }
  }

  .signInButton {
    height: 3rem;
    border-radius: 0.5rem;
    background: #e83f5b;
    border: 0;
    padding: 0 1.5rem;
    margin: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-weight: bold;
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
    }

    svg:first-child {
      margin-right: 1rem;
    }

    svg.closeIcon {
      margin-left: 1rem;
    }

    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.2);
    }
  }

  @media (min-width: 2560px) {
    width: 60rem;
    height: 48rem;
    margin-top: 4rem;
  }

  @media (max-width: 2000px) {
    margin-top: 2rem;
    height: 32rem;
  }

  @media (max-width: 1600px) {
    padding-top: 1rem;
    height: 34rem;
  }

  @media (max-width: 1440px) {
    height: 32rem;
    width: 32rem;
  }

  @media (max-width: 1280px) {
    width: 26rem;
    padding: 0 1.2rem;
  }

  @media (max-width: 425px) {
    width: 100%;
  }

  @media (max-width: 320px) {
    height: 40rem;
  }

  label {
    font-size: 1.2rem;
    color: #333;
    padding: 0.5rem;

    @media (min-width: 2560px) {
      font-size: 1.6rem;
      padding: 0.8rem 0.5rem;
    }

    @media (max-width: 1024px) {
      font-size: 1rem;
    }
  }

  input:not(.botaoCheck),
  select {
    width: 100%;
    padding: 0 1rem;
    background: #fff;
    height: 3.6rem;
    border-radius: 0.5rem;

    border: 2px solid #d7d7d7;

    font-weight: 400;
    font-size: 1.2rem;

    @media (min-width: 2560px) {
      height: 4.2rem;
      font-size: 1.6rem;
    }

    @media (max-width: 1440px) {
      font-size: 1.1rem;
      height: 3.4rem;
    }

    & + input,
    & + select {
      margin-top: 1.4rem;
    }

    &:hover,
    &:focus {
      border-color: #3485ff;
      outline-color: #3485ff;
    }
  }

  .buttoncheck {
    margin-top: 1rem;

    .check {
      color: #737380;
      font-size: 1rem;
      padding-left: 0.8rem;

      @media (min-width: 2560px) {
        font-size: 1.4rem;
      }

      a {
        padding: 0 0.2rem;
        color: #333;
      }
    }
    .botaoCheck {
      width: 4% !important;
      transform: scale(1.5);
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 3.6rem;
    background: var(--blue-200);
    color: #fff;

    border-radius: 0.25rem;
    border: 0;
    font-size: 1.4rem;
    margin-top: 1.5rem;
    font-weight: 600;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

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
