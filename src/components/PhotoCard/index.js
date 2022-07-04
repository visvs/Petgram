import React, {Fragment, } from 'react'
import { Article, ImgWrapper, Img } from './style'
//import { useLocalStorage } from '../../customHooks/useLocalStorage'
import { useNearScreen } from '../../customHooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import {Link} from 'react-router-dom';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked ,likes = 0, src = DEFAULT_IMAGE }) => {
  const [showCard, articleRef] = useNearScreen();
  /* const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false) */
  const { mutation, mutationLoading, mutationError } = ToggleLikeMutation();


  const handledFavClick = () => {
    /* !liked &&  */
    mutation({
      variables: {
        input: { id }
      }
    })
   /*  setLiked(!liked) */
  }
  return (
    <Article ref={articleRef}>
      {
        showCard && (<Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>  
          <FavButton liked={liked} likes={likes} onClick={handledFavClick}></FavButton>        
        </Fragment>)
      }
    </Article>
  )
}
