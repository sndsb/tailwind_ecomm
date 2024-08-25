import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({ images, title, price,rating }) => {
    return (
        <div className='flex flex-1 flex-col w-full max-sm:w-full'>
            <img src={images[0]} alt={title} className='w-[280px] h-[280px] ' />

            <div className='mt-8 flex justify-start gap-2.5'>
                <img src={star} alt='rating' width={24} height={24} loading='lazy' />
                <p className='font-montserrat text-xl leading-normal text-slate-gray'>({rating})</p>

            </div>
            <h3 className='font-semibold font-palanquin text-2xl leading-normal mt-2'>{title}</h3>
            <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>${price}</p>
        </div>
    )
}

export default PopularProductCard