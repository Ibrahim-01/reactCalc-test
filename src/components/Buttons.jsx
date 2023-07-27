import React from 'react'
import Numbers from './Numbers'

const Buttons = () => {
  return (
    <div className=' flex justify-center items-center gap-2 flex-col w-full h-full'>
        <div className=' flex justify-center items-center gap-2 flex-row w-full h-full'>
        <Numbers value = "9" onclick = "display.value += 9 "/>
        <Numbers value = "8" onclick = "display.value += 8 "/>
        <Numbers value = "7" onclick = "display.value += 7 "/>
        <Numbers value = "6" onclick = "display.value += 6 "/>
        </div>
        <div className=' flex justify-center items-center gap-2 flex-row w-full h-full'>
        <Numbers value = "5" onclick = "display.value += 5 "/>
        <Numbers value = "4" onclick = "display.value += 4 "/>
        <Numbers value = "3" onclick = "display.value += 3 "/>
        <Numbers value = "2" onclick = "display.value += 2 "/>
        </div>
        <div className=' flex justify-center items-center gap-2 flex-row w-full h-full'>
        <Numbers value = "0" onclick = "display.value += 0 "/>
        <Numbers value = "1" onclick = "display.value += 1 "/>
        <Numbers value = "%" onclick = "display.value += % "/>
        <Numbers value = "." onclick = "display.value += . "/>
        </div>
        <div className=' flex justify-center items-center gap-2 flex-row w-full h-full'>
        <Numbers value = "-" onclick = "display.value += - "/>
        <Numbers value = "+" onclick = "display.value += + "/>
        <Numbers value = "/" onclick = "display.value += / "/>
        <Numbers value = "*" onclick = "display.value += * "/>
        </div>
        <div className=' flex justify-center items-center gap-2 flex-row w-full h-full'>
        <Numbers value = "=" onclick = "display.value += eval(display.value)"/>
        <Numbers value = "DEL" onclick = "display.value += display.value.toString() "/>
        <Numbers value = "AC" onclick = "display.value = "  />
        </div>

    </div>
  )
}

export default Buttons