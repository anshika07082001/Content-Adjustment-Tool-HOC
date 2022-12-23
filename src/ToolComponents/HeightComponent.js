import React from 'react'

const HeightComponent = ({parameter1,parameter2}) => {
  return (
  <div className='scaling'>
    <label><i class="fa fa-arrows-v"></i><i class='fas fa-align-justify'></i>Adjust Line Height</label>
    <div className='iconDiv'>
      <button className='iconBtn' onClick={parameter2}><i class='fas fa-angle-down'></i></button>
      <div>&nbsp; Default &nbsp;</div>
      <button className='iconBtn' onClick={parameter1}><i class='fas fa-angle-up'></i></button>
    </div> 
  </div>
  )
}


export default HeightComponent