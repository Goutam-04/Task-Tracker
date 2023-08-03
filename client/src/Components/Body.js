import React from 'react'
import BodyHeader from './Body/BodyHeader'
import BodyForm from './Body/BodyForm'

const Body = () => {
  return (
    <div style={{minHeight:'90vh',
    display:'flex',
    flexDirection:'column',
    background:'#088395'}}>
      <BodyHeader/>
      <BodyForm/>
    </div>
  )
}

export default Body