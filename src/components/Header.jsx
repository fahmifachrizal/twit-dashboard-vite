import { useState } from 'react'
import { HiBell } from 'react-icons/hi'

function Header({title, subtitle}) {
  const [toggleButton, setToggleButton] = useState({notif:false, profile:false})

  return (
    <div className='flex font-raleway pb-8'>
      <div className='flex-1 flex flex-col gap-y-2'>
        <p className='text-4xl font-bold'>{title}</p>
        <p className='font-medium'>{subtitle}</p>
      </div>
      <div className='flex gap-4 select-none'>
        <button className='w-10 h-10 bg-gray-300 rounded-full text-xl flex items-center justify-center text-gray-700 relative'
          onClick={() => setToggleButton({notif:!toggleButton.notif, profile:false})}
        >
          <HiBell />
          { toggleButton.notif && 
            <div className='absolute -bottom-10 w-48 bg-white right-0 translate-y-1/2 flex flex-col gap-y-1 p-1 text-sm rounded-l-lg rounded-br-lg ring ring-gray-300'>
              <a className='hover:bg-gray-200 py-1 rounded-lg'>Profile</a>
              <button className='hover:bg-red-600 hover:text-white py-1 rounded-lg'>Log out</button>
            </div>
          }
        </button>
        <button className='w-10 h-10 bg-gray-300 rounded-full text-xl flex items-center justify-center text-gray-700 relative'
          onClick={() => setToggleButton({notif:false, profile:!toggleButton.profile})}
        >
          <div>FF</div>
          { toggleButton.profile && 
            <div className='absolute -bottom-10 w-48 bg-white right-0 translate-y-1/2 flex flex-col gap-y-1 p-1 text-sm rounded-l-lg rounded-br-lg ring ring-gray-300'>
              <a className='hover:bg-gray-200 py-1 rounded-lg'>Profile</a>
              <button className='hover:bg-red-600 hover:text-white py-1 rounded-lg'>Log out</button>
            </div>
          }
        </button>
      </div>
    </div>
  )
}

export default Header