import React, {Fragment,useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './style'
import { MdFavoriteBorder , MdFavorite} from 'react-icons/md'
import { useLocalStorage } from '../../customHooks/useLocalStorage'
import { useNearScreen } from '../../customHooks/useNearScreen'


const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [showCard, articleRef] = useNearScreen();
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  return (
    <Article ref={articleRef}>
      {
        showCard && (<Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
          
            <Icon size='28px' onClick={()=>setLiked(!liked)}/> {likes} likes! 
          </Button>
        </Fragment>)
      }
    </Article>
  )
}
