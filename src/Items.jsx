
import PropTypes from 'prop-types'

const Items = ({item,idx,handlePreparing}) => {
  // console.log(item)
    const {recipe_name,preparing_time,calories}=item;
  return (
    <div>
        <div className='grid grid-cols-5 space-y-2 items-center bg-gray-200 m-2 p-2 rounded-2xl'>
            <h2>{idx+1}</h2>
            <h4>{recipe_name}</h4>
            <h4>{preparing_time} minutes</h4>
            <h4>{calories}</h4>
        <button onClick={()=>handlePreparing(item,preparing_time,calories)} className='bg-[#0BE58A] p-2 rounded-3xl font-bold hover:bg-gray-500 hover:text-white'>Preparing</button>   
        </div>
    </div>
  )
}

Items.propTypes = {
  item: PropTypes.string.isRequired,
  idx: PropTypes.string.isRequired,
  handlePreparing: PropTypes.string.isRequired,
}

export default Items