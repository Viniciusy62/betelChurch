import styled from "styled-components";

export const Container = styled.section`
  /* header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.6rem;

    background-color: #111111;
    width: 100%;

    img {
      width: clamp(3rem, 4rem, 6rem);
    }
  } */

  .apresentation-images {
    padding: 8rem 1.6rem 1.6rem;
    background: #333;
    height: 100vh;

    p,
    h1 {
      color: #fff;
    }

    p {
      font-size: 1.6rem;
    }

    h1 {
      font-size: 4.2rem;
      font-weight: 400;
      margin: 1.6rem auto 0.8rem;
    }

    button {
      margin-top: 1.6rem;
      width: 21rem;
    }
  }

  .apresentation {
    padding: 1.6rem;

    p:nth-child(1) {
      font-family: "Lora", serif;
      font-weight: 400;
      font-size: 2.4rem;
    }

    p:nth-child(2) {
      font-style: italic;
      font-weight: 100;
    }

    p {
      margin-bottom: 2.4rem;
      font-size: 1.8rem;
    }
  }

  .whorship-time {
    padding: 1.6rem;

    h2 {
      margin-bottom: 4.8rem;
      font-family: "Lora", serif;
      font-size: 3.2rem;
      font-weight: 400;
    }

    .images-worship-time {
      display: flex;
      flex-wrap: nowrap;
    }

    p {
      font-size: 1.6rem;
      font-weight: 600;

      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      align-items: center;
      
      span:nth-child(1) {
        font-size: 2.4rem;
      }

      span:nth-child(even) {
        font-size: 1.8rem;
        font-weight: bold;
      }
    }

  }
`;
