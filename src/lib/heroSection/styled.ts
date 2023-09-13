import styled from 'styled-components';

export const HeroContainer = styled.section`
  .hero__section_title {
    /* font-family: Roboto; */
    font-size: 72px;
    font-weight: 700;
    line-height: 86px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
    width: 60%;
  }
  .hero__section_sub_title {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
    margin-top: 20px;
  }
`;

export const HeroInputStyled = styled.div`
  .input__container {
    height: 48px;
    border: 1px solid #000000;
    background-color: #fff;
    width: 330px;
  }
  .hero__input {
    height: 100%;
    width: 100%;
    background: transparent;
    color: #505050;
    font-size: 16px;
    padding: 0px 10px;
  }
  .hero__button {
    border: 1px solid #310e93;
    background-color: #310e93;
    color: #fff;
    height: 48px;
  }
`;
