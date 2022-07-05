import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
`;

export const TitlePage = styled.h1`
  text-align:center;
  color: #8d00ff;
  margin-bottom: 10px;
`;
export const ImageNotFound = styled.img`
  object-fit: cover;
  width: 90%;
  height: auto;
`;
