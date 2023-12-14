import styled from "@emotion/styled";

export const Container = styled.div`
  width: 280px;
  min-width: 280px;
  margin: 0 auto;
  padding: 0 15px;
  
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  /* Mobile 480px */
  @media screen and (min-width: 480px) {
    max-width: 480px; 
  }

  /* Tablet 768px */
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  /* PC 1024px */
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  } 
`