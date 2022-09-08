import styled, { keyframes } from "styled-components/macro";
import logo from '../../../assets/icons/logo.svg';
import SunIcon from '../../../assets/icons/sun.png';
import MoonIcon from '../../../assets/icons/moon.png';

export const StyledHome = styled.div`
  background-color: ${({ theme }) => theme.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.secondary};
`;

const LogoSpin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const Logo = styled.img.attrs({
    src: logo,
    alt: "logo"
})`
    height: 40vmin;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
        animation: ${LogoSpin} infinite 20s linear;
    }
`;

export const ThemeIcon = styled.img.attrs(({ themeId }) => {
  const icon = themeId === 'dark' ? {
    name: 'sun',
    img: SunIcon
  } : {
    name: 'moon',
    img: MoonIcon
  };

  return {
    src: icon.img,
    alt: icon.name + ' icon'
  }
})`
  height: 20px;
  vertical-align: middle;
  margin-left: 5px;
`;