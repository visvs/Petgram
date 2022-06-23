import React from 'react'
import {MdFavoriteBorder} from 'react-icons/md';

import { ImageWrapper, Img, Button } from './style'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCard = ({id, src = DEFAULT_IMAGE, likes = 0})=>{
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImageWrapper>
          <Img src={src} ></Img>
        </ImageWrapper>
      </a>
      <Button>
       <MdFavoriteBorder size={32}/> {likes} likes!
      </Button>
    </article>
  )
}
