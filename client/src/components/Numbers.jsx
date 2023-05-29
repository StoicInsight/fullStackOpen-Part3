import React from 'react'

const Numbers = ({people, deleteNumber}) => {
      console.log('people from numbers', people)

  return (
    <div className='flex flex-col items-center bg-white w-max p-10 rounded-lg'>
      <h2 className='p-5 '>Numbers</h2>
      {people.map((person, id) => {
        return (
          <div className="flex items-stretch gap-10" key={id}>
            <p className='text-2xl font-bold'>{person ? person.name : 'no people'}</p>
            <button className="bg-red-600 p-1 rounded-md" onClick={() => deleteNumber(person.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default Numbers