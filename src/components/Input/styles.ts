import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  color: #000000;
  border: 1px solid black;
  

  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;

    &::placeholder {
      color: #b4b4b4;
    }

    & + input {
      margin-top: 8px;
    }
  }

  svg {
    margin-left: 15px;
    margin-right: 16px;
  }
`;
