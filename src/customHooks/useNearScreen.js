import {useEffect, useState, useRef} from 'react';

export const useNearScreen = ()=>{
  const articleRef = useRef(null)
  const [showCard, setShowCard] = useState(false)
  
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

  return [
    showCard,
    articleRef
  ]
}
