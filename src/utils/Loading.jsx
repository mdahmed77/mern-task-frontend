import React from 'react'
import loader from '../assets/images/loader.svg'

const Loading = () => {
  return (
    <img src={loader} className='h-[120px] w-auto' alt={'loader'} />
  )
}

export default Loading