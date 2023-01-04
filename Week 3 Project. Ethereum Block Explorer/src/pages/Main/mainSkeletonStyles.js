import styled from 'styled-components';

export const Loading = styled.p`
  padding: 8px 0;

  animation: Color 1s linear infinite;
  -webkit-animation: Color 1s ease-in-out infinite;

  --color-one: #d0d0d0;
  --color-two: #a0a0a0;

  @keyframes Color {
    0% {
      color: var(--color-one);
    }

    50% {
      color: var(--color-two);
    }

    100% {
      color: var(--color-one);
    }
  }
`;
