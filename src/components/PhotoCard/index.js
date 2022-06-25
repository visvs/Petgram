import React, {Fragment,useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './style'
import { MdFavoriteBorder , MdFavorite} from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const articleRef = useRef(null)
  const [showCard, setShowCard] = useState(false)
  const [liked, setLiked] = useState(() => {
    try {
        const like = window.localStorage.getItem(`like-${id}`)
        
        if (like == 'true') {
            return like
        }
        return false
            
    } catch (e) {
        return false
    }
})


  const setLocalStorage  = value => {
    try{
      window.localStorage.setItem(`like-${id}`, value);
      setLiked(value);    
    }
    catch(e){
      console.error(e);
    }
  }
  useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShowCard(true)
        observer.disconnect()
      }
    })
    observer.observe(articleRef.current)
  }, [articleRef])

  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  return (
    <Article ref={articleRef}>
      {
        showCard && (<Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
          
            <Icon size='28px' onClick={()=>setLocalStorage(!liked)}/> {likes} likes! 
          </Button>
        </Fragment>)
      }
    </Article>
  )
}
