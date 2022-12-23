import React from 'react'

const SizeComponent = ({parameter1,parameter2}) => {
  return (
  <div className='scaling'>
    <label><i class="fa fa-font"></i><i class="fa fa-arrows-v"></i>Adjust Font Sizing</label>
    <div className='iconDiv'>
      <button className='iconBtn' onClick={parameter2}><i class='fas fa-angle-down'></i></button>
      <div>&nbsp; Default &nbsp;</div>
      <button className='iconBtn' onClick={parameter1}><i class='fas fa-angle-up'></i></button>
    </div> 
  </div>
  )
}


export default SizeComponent