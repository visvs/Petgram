import React from 'react';
import { MdFavoriteBorder , MdFavorite} from 'react-icons/md'
import { Button } from './style';

export const FavButton =({liked, likes, onClick}) =>{
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button>          
      <Icon size='28px' onClick={onClick}/> {likes} likes! 
    </Button>
  )
}
