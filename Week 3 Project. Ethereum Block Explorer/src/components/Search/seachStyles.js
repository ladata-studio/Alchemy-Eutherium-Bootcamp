import styled from 'styled-components';

export const Search = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 0;
  padding-top: 20px;
  padding-bottom: 60px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 14px;
  padding-left: 56px;
  border: none;
  border-radius: 6px;

  background-color: #1e2227;
  background-image: url('./assets/searchIcon.svg');
  background-size: 24px 24px;
  background-position: 16px 12px;
  background-repeat: no-repeat;

  font-size: 18px;
  color: #ffffff;

  transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);

  &::placeholder {
    color: #a3a7ac;
  }

  &:focus {
    outline: none;
    background-color: #212730;
  }
`;
