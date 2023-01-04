import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: 26px 0;
  text-align: center;
`;

export const H1 = styled.h1`
  margin: 0;
  font-size: 48px;
  font-weight: bold;
  color: transparent;

  --bg-size: 400%;
  --color-one: hsl(170 90% 55%);
  --color-two: hsl(210 95% 55%);
  
  background: linear-gradient(
      90deg,
      var(--color-one),
      var(--color-two),
      var(--color-one)
    )
    0 0 / var(--bg-size) 100%;
  
  background-clip: text;
  -webkit-background-clip: text;

  @media (prefers-reduced-motion: no-preference) {
    animation: move-bg 16s linear infinite;

    @keyframes move-bg {
      to {
        background-position: var(--bg-size) 0;
      }
    }
  }
`;
