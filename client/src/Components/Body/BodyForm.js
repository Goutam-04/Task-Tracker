import React, { useState } from 'react'



const BodyForm = () => {

    const [text,setText]=useState("")



    const onInputChange= (e)=>{
        // console.log(e.target.value)
        setText(e.target.value)
        console.log(text)
    }
const onFormSubmit=(e)=>{
  
}


  return (
    <div className='flex justify-center items-center mt-8 '>
  <form className='form' onSubmit={onFormSubmit}>
  <input
      className='input w-full bg-transparent text-xl border-b-2 border-solid border-cyan-500 text-white'
      onChange={onInputChange}
      placeholder='Create a work to do later'
      value={text}
      
    />
  </form>
  </div>
  )
}

export default BodyForm