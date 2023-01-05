import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Scroll } from '../../styles';

export const TableWrap = styled(Scroll)`
  min-height: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 20px 0;
  flex: 1 1 auto;
`;

export const Table = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  ${({ type }) =>
    type === 'block' ? `grid-template-columns: 1fr 1fr 6fr` : `none`};
  ${({ type }) =>
    type === 'tx' ? `grid-template-columns: 6fr 5fr 1fr 5fr 1fr 5fr` : `none`};
  gap: 0;
`;

export const Cell = styled.div`
  padding: 6px;
  font-size: 12px;
  line-height: 1.4;
  color: #a3a7ac;

  &.cell--centered {
    margin: 0 auto;
    text-align: center;
  }
`;

export const Tag = styled.span`
  padding: 2px 4px;
  border-radius: 4px;
  background-color: rgba(48, 184, 185, 0.2);
  font-family: 'Roboto Mono', monospace;
  font-variant-ligatures: no-contextual;
  font-size: 11px;
  transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    cursor: pointer;
    background-color: rgba(48, 184, 185, 0.3);
  }
`;

export const Link = styled(RouterLink)`
  color: #30c8c9;
  text-decoration: none;
  transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    opacity: 0.7;
  }
`;
