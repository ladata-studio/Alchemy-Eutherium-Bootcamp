import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  display: block;
  padding: 8px;
  border-radius: 6px;
  background-color: #84f3df;
  text-align: center;
  font-weight: 600;
  color: #032b3a;
  text-decoration: none;
  transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: #80f0ef;
    transform: scale(1.05) translateY(2px);
  }
`;
