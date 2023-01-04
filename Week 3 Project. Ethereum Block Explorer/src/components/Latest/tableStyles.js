import styled from 'styled-components';
import { Scroll } from '../../styles';

export const TableWrap = styled(Scroll)`
  min-height: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 20px 0;
  flex: 1 1 auto;
`;

export const Table = styled.table`
  width: 100%;
`;

export const Body = styled.tbody``;

export const Row = styled.tr`
  font-size: 12px;
  color: #a3a7ac;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Cell = styled.td`
  padding: 6px;

  &:first-child {
    padding-left: 0;
    font-family: 'Roboto Mono', monospace;
    font-variant-ligatures: no-contextual;
    font-size: 11px;
  }
`;

export const Tag = styled.span`
  padding: 2px 4px;
  border-radius: 4px;
  background-color: rgba(48, 184, 185, 0.2);
  transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    cursor: pointer;
    background-color: rgba(48, 184, 185, 0.3);
  }
`;

export const Link = styled.a`
  color: #30c8c9;
  text-decoration: none;
  transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    opacity: 0.7;
  }
`;
