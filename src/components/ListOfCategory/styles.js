import styled from "styled-components";
import { bounceDown , fadeIn, scaleOn} from "../../styles/animation";

const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  &.fixed {
    ${bounceDown()}
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
  }
`
const Item = styled.li`
  padding: 0 8px;
`
export {
  Item,
  List,

}
