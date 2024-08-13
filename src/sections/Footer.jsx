import React from 'react'
import { footerLogo } from '../assets/images'
import { socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className='max-contaier'>
        <div className='flex justify-between items-start max-lg:flex-col'>
            <div className='flex flex-col items-start mt-5'>
                
                <a href='/'>
                 <img src={ footerLogo} height={46} width={150}/>
                 <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto iusto aperiam nostrum perferendis voluptate quos facilis atque officia quisquam, reiciendis autem culpa animi omnis modi! Ratione, perferendis similique! Dolor.</p>
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