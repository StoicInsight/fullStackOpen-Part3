import React from 'react'
import PhoneInput from 'react-phone-number-input/input'

const NameForm = ({ trackName, addName, trackNum, nameVal, numVal, closeModal }) => {
  return (

    <div className='w-full'>
      <form className='w-full flex flex-col items-center' action="" onSubmit={addName}>
          <div className="flex items-center font-bold text-lg gap-5 p-3">
             <input
            placeholder='Add name...'
            className='bg-gray-300 p-2 rounded-md w-full'
            onChange={trackName}
            value={nameVal}
            />
          </div>
   
          <div className="flex items-center font-bold text-lg gap-5 p-3">
            <PhoneInput country="US" value={numVal()} onChange={trackNum()} />
            <input
              country="US"
              className='bg-gray-300 p-2 rounded-md w-full'
              placeholder='Add number...'
              onChange={trackNum}
              value={numVal}
            />
          </div>

        <button className='p-[.5rem] bg-blue-700 text-white rounded-lg' onClick={(e) => {closeModal(); addName(e);}}>+ Add Contact</button>
      </form>
    </div>
  )
}

export default NameForm