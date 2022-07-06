import React from 'react';
import { MdFavoriteBorder , MdFavorite} from 'react-icons/md'
import { Button } from './style';
import PropTypes from 'prop-types'; // ES6

export const FavButton =({liked, likes, onClick}) =>{
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button>          
      <Icon size='28px' onClick={onClick}/> {likes} likes! 
    </Button>
  )
}

FavButton.propTypes  = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
