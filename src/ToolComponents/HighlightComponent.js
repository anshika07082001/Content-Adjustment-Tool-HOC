import React from 'react'

const HighlightComponent = ({parameter1,parameter2}) => {
  return (
    <div className='btnDiv'>
      <button className='leftBtn' onClick={parameter1}><i class="fa fa-header"></i><br/>Highlight Titles</button>
      <button className='leftBtn' onClick={parameter2}><i class="fa fa-link"></i><br/>Highlight Links</button>
    </div>
  )
}


export default HighlightComponent