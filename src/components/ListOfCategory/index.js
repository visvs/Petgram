import React, {useEffect, useState} from 'react';
import { Category } from '../Category';
import {List, Item} from './styles';
import {useCategoriesData} from '../../customHooks/useCategoriesData'

export const ListOfCategories = () => {
  const {categories, loading} = useCategoriesData();
  const [showFixed, setFixed] = useState(false);

  useEffect( () => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList =({fixed = false})=>(
    <List className={fixed? 'fixed': ' '}>
        {
       loading
         ? <Item key='loading'><Category /></Item>
         : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
     }
    </List>     
  )

  return (
    <>
      {renderList({})}
      {showFixed && renderList({fixed: true})}
    </>
  )
}
