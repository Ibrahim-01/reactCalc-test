import React from 'react'
import Display from './Display'
import Buttons from './Buttons'

const Mycalculator = () => {
  return (
    <div className=' h-4/5 w-80 bg-[#333834dc] grid grid-rows-1fr-3fr gap-2 rounded-xl border-2 border-yellow-300 '>
        <Display/>
        <Buttons/>

    </div>
  )
}

export default Mycalculator