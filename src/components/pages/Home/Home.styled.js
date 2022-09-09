import styled, { keyframes } from "styled-components/macro";
import logo from '../../../assets/icons/logo.svg';
import SunIcon from '../../../assets/icons/sun.png';
import MoonIcon from '../../../assets/icons/moon.png';
import { StyledPage } from "../../common";

export const StyledHome = styled(StyledPage)`
  font-size: calc(10px + 2vmin);
  justify-content: center;
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
  vertical-align: bottom;
  margin-left: 5px;
`;