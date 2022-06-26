import styled from "styled-components";
import { NavLink as LinkRouter} from 'react-router-dom'
import { fadeIn } from "../../styles/animation";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  bottom: 0;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  height: 50px;
  justify-content: space-around;
  left: 0;
  right: 0;
  margin: 0 auto;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &[aria-current]{
     color: #000;
     &:after {
      content: '·';
      ${fadeIn({time: '0.5s'})};
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
     }
  }
`
