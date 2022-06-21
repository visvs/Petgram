import React from 'react';

const DEFAUL_IMAGE = "https://imgur.com/dJa0Hpl";

export const Category = (cover = DEFAUL_IMAGE, path, emoji = '?') =>{
  <a href={path}>
    <img src={cover}/>
    {emoji}
  </a>
}
