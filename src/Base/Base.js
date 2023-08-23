import React from 'react'

function Base({title,description, children}) {
  return (
    <div className='Base-component'>
      <header>
        <h1 className='heading'>{title}</h1>
      </header>

      <main className='main-segment'>
         <h3>{description} </h3>
         <div>
            {children}
         </div>
      </main>
    </div>
  )
}

export default Base