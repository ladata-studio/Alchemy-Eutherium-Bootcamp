import styled from 'styled-components';

export const BlockGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const Block = styled.div`
  max-height: calc(100vh - 320px);
  padding: 25px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #151a1e;
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 12px;
  box-shadow: 0 0.5px 0 rgba(163, 167, 172, 0.3);
  color: #e7eaed;
`;
