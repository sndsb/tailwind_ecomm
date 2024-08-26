import React, { useEffect } from 'react'
import { footerLogo } from '../assets/images'
import { socialMedia } from '../constants'
import { useDispatch, useSelector } from 'react-redux';
import { siteSettingList } from '../reducx/selector';
import { getSetiteSettingData } from '../reducx/reducer/siteSettingSlice';

const Footer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSetiteSettingData());
    }, []);
  
    const {siteSettingData,isLoading} = useSelector(siteSettingList);
  return (
    <footer className='max-contaier'>
        <div className='flex justify-between items-start max-lg:flex-col'>
            <div className='flex flex-col items-start mt-5'>
                
                <a href='/'>
                 <img src={ footerLogo} height={46} width={150}/>
                 <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>{siteSettingData?.description}</p>
                 <div className='flex items-center gap-5 mt-8'>
                    {socialMedia.map((media)=>(
                        <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                            <img src={media.src} width={24} height={24}/>
                        </div>
                    ))}
                 </div>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer