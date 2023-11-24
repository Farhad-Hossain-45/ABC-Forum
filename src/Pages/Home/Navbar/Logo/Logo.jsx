/* eslint-disable no-unused-vars */
import React from 'react';
import logo_Image from '../../../../assets/forum_icon-removebg-preview.png'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            <Link>
            <div className=''>
                <div className='flex items-center gap-1'>
                <div><img src={logo_Image} alt=""  className=' w-16 h-10'/></div>
                
                <div><p className='text-green-900 font-medium'>ABC FORUM</p></div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Logo;