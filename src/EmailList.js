import React from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import "./EmailList.css";
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import InboxIcon from '@mui/icons-material/Inbox';
import Section from './Section';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';
//import Mail from './Mail';
//import {useNavigate} from 'react-router-dom';

function EmailList() {

  //const navigate= useNavigate();


  return (
    
    <div className='emailList'>
      <div className='emailList_settings'>
        <div className='emailList_settingsLeft'>
        
        
        
          <CheckBoxIcon />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='emailList_settingsRight'>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>

        </div>
      </div>
      <div className='emailList_sections'>
        <Section Icon={InboxIcon} title='primary' color='red' selected  /> 
       
        <Section Icon={PeopleIcon} title='social' color='blue' selected />
        <Section Icon={LocalOfferIcon} title='Promotions' color='green' selected />
      </div>

      <div className='emailList_list'>
        <EmailRow
          title="twitch"
          subject="Hi sravan"
          description="!!!react"
          time="10pm"
        />
         <EmailRow
          title="scratch"
          subject="Hi sravan"
          description="!!!course"
          time="2am"
        />
         <EmailRow
          title="ramp"
          subject="Hi sravan"
          description="!!!this is a test"
          time="1pm"
        />
         <EmailRow
          title="full stack"
          subject="developer"
          description="!!!this is a test"
          time="12am"
        />

      </div>



    </div>
  )
}

export default EmailList;
