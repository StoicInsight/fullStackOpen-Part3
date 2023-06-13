import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Numbers = ({people, deleteNumber}) => {
      console.log('people from numbers', people)

  return (
    <div className='flex flex-col items-center bg-white rounded-lg w-full'>
      {people.map((person, id) => {
        return (
          <div className="flex items-center justify-between w-full py-4 mx-10 border-y-[1px] border-grey" key={id}>
            <p className='text-2xl font-bold'>{person ? person.name : 'no people'}</p>
            <button className="bg-red-600 p-1 rounded-md text-white" onClick={() => deleteNumber(person.id)}>
              <DeleteIcon/>
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Numbers