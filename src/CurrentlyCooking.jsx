
// import PropTypes from 'prop-types'

const CurrentlyCooking = (cooking) => {
    // console.log(cooking)
    // const {recipe_name,preparing_time,calories}=cooking;
  return (
        <div className='grid grid-cols-4 bg-gray-200 m-2 p-2 rounded-2xl'>
     <h2>{cooking.idx+1}</h2>
        <h2>{cooking.cooking.recipe_name}</h2>
        <h2>{cooking.cooking.preparing_time}</h2>
        <h2>{cooking.cooking.calories}</h2>
     </div>
  )
}

CurrentlyCooking.propTypes = {

}

export default CurrentlyCooking