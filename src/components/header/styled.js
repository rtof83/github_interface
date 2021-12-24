import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  max-width: 600px;
  justify-content: space-between;
  padding: 4px;
  margin: 2rem auto 2rem auto;

  position: sticky;
  top: -70px;
  background-color: white;
  transition: 0.2s;

  div {
    display: flex;
  }
 
  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }

  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 8px;
    border-radius: 8px;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: #2c5282;
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
