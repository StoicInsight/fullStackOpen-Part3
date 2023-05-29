import React from 'react'
import PhoneInput from 'react-phone-number-input/input'

const NameForm = ({ trackName, addName, trackNum, nameVal, numVal }) => {
  return (

    <div className=''>
      <form className='' action="" onSubmit={addName}>
          <div className="flex items-center font-bold text-lg gap-5 p-3">
            <h1 className='text-white'>Name</h1>
             <input
            placeholder='Add name...'
            className='p-2 rounded-lg border-none'
            onChange={trackName}
            value={nameVal}
            />
          </div>
   
          <div className="flex items-center font-bold text-lg gap-5 p-3">
            <h1 className='text-white'>Number</h1> 
            <input
              country="US"
              className='p-2 rounded-lg border-none'
              placeholder='Add number...'
              onChange={trackNum}
              value={numVal}
            />
          </div>

        
        <button className='bg-green-500 p-3 rounded-xl text-white font-bold text-2xl'>Add</button>
      </form>
    </div>
  )
}

export default NameForm