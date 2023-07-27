import React from 'react'

const Numbers = (props) => {
  return (
    <div>
        <div className=' text-[#000000] text-center w-full h-full bg-pink-400'>
            <input type="button" value={props.value} onClick={props.onclick} />
        </div>
    </div>
  )
}

export default Numbers