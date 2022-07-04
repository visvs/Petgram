import styled from "styled-components";
import { Link } from "react-router-dom";
const Form = styled.form`
  padding: 16px 0;  

`;

const Input = styled.input`
  border:1px solid #ccc;  
  border-radius:25px;
  margin: 8px auto;
  padding:8px 4px;
  display: block;
  width: 90%;
  outline: none;
  &:focus {
    border: 2px solid #ccd;
  }
  &[disabled]{
    opacity:.3;
  }
`;

const Button = styled.button`
  background-image: linear-gradient(to right top, #96429f, #8167c5, #6387df, #45a4ef, #3cbef5);
  margin: 0 auto;
  border: none;
  color:#fff;
  height:32px;
  display:block;
  border-radius: 25px;
  width:50%;
  text-align:center;
  &[disabled]{
    opacity:.3;
  }
`
const Ancla = styled.a`
  color: #3CBEF5;
  text-decoration: none;
  &:hover{
    color: #96429F;
  }
`;
const Text = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center
`;

const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  color: #888;
`;

const Image = styled.img`
  display: block;  
  margin: 10px auto;
  width: 100px;
  height: 100px;
`;
const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  height: 50px;
  width: 100%;
  background-color: #5f427e;
  color: white;
  opacity:.8;
`;
export {Form, Input, Button, Ancla, Text, Title, Image, Error}
