import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Header = () => {
  return (
    
    <div className='header'>
      <div className='header_left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd85DsYtQLiHGsh0mY2jnyr6fVrFrVgI0eVJT69ow&s' alt='' />
      </div>
      <div className='header_middle'>
        <SearchIcon />
        <input placeholder='Searchmail' type='text' />
        <ArrowDropDownIcon className='header_inputCaret' />
      </div >

      <div className='header_right'>

        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <SettingsIcon />
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>



      </div>

    </div >

  )
}

export default Header;
