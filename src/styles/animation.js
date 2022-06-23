import  {keyframes, css} from "styled-components";


export const fadeIn = ({time = '1s', type = 'ease'} = {}) => css`
  animation: ${time} ${fadeInKeyFrames} ${type};
`
const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to{
    filter: blur(0);
    opacity: 1;
  }
`;

const bounceDownKeyFrames = keyframes`
 0% {
    top: -70px;
  }

  25% {
    top: 0px;
  }

  40%{
    top: 10px
  }

  65%{
    top: -3px
  }

  100% {
    top: 0px;
  }
`

export const bounceDown = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${bounceDownKeyFrames} ${type};
`;
const scaleDown = keyframes`
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.5);
    }
`; 

export const scaleOn = ({time = "3s", type = "ease"} = {}) => css`animation: ${time} ${scaleDown} ${type}`;

