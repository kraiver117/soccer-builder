import React from 'react'
import { Link } from 'react-router-dom';
import uefa_bg from '../assets/uefa_wallpaper.jpg';
import '../styles/views/main.css';

export const Main = () => {
  return (
    <div className='background-img'>
      <Link className='link-button' to='/admin'>Admin</Link>
      <Link className='link-button' to={'/user'}>User</Link>
    </div>
  )
}
