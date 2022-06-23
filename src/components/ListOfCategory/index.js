import React, {useEffect, useState} from 'react';
import { Category } from '../Category';
import {List, Item} from './styles';

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setFixed] = useState(false);

  useEffect(function () {
    window.fetch('https://petgram-server-vivs.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])
const renderList =({fixed = false})=>(
  <List className={fixed? 'fixed': ' '}>
      {
        categories.map(category => <Item key={category.id}>
          <Category {...category}/>
        </Item>)
      }
  </List>
)

useEffect( () => {
  const onScroll = e => {
    const newShowFixed = window.scrollY > 200
    showFixed !== newShowFixed && setFixed(newShowFixed)
  }

  document.addEventListener('scroll', onScroll)

  return () => document.removeEventListener('scroll', onScroll)
}, [showFixed])

  return (
    <>
      {renderList({})}
      {showFixed && renderList({fixed: true})}
    </>
  )
}
