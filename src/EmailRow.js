import { IconButton } from '@mui/material';
import React from 'react'
import './EmailRow.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useNavigate} from 'react-router-dom';
//import { createBrowserHistory } from 'react-router-dom';



function EmailRow({ id, title, subject, description, time }) {
const navigate = useNavigate();




    return (
        <div onClick={() => navigate('/mail')}className='emailRow'>
            <div className='emailRow_options'>
                <CheckBoxOutlineBlankIcon />
                <IconButton>
                <StarOutlineIcon />
                </IconButton>
                <IconButton>
                <LabelImportantIcon />
                </IconButton>
            </div>
            
            <div className='emailRow_title'>
                <h3>{title}</h3>
                </div>
             
             <div className='emailRow_message'>
                <h4>{subject}{""}
                    <span className='emailRow_description'>
                        {description}
                    </span>
                    </h4>
            </div>
            
            <div >
                <p className='emailRow_time'>{time}</p>
            </div>



        </div>
    )
}

export default EmailRow;
