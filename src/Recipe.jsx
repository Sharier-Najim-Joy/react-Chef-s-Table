
import PropTypes from 'prop-types'
import { MdAccessTime } from "react-icons/md";
import { FaGripfire } from "react-icons/fa";



const Recipe = ({recipe,handleItem}) => {
    const {recipe_name,short_description,ingredients,preparing_time,calories,recipe_image}=recipe
    // console.log(preparing_time)
  return (
    <div className=''>
        <div className='border-2 border-[#28282833] mb-4 text-left p-5 rounded-xl hover:shadow-2xl'>
            <img className='rounded-2xl' src={recipe_image} alt="" />
            <div>
              <h2>{recipe_name}</h2>
              <p>{short_description}</p>
              <hr />
              <h2>Ingredients:{ingredients.length}</h2>
              <ul>
            {
              ingredients.map((ingredient,idx)=><div key={idx}>* {ingredient}</div>)
            }
            </ul>
            <hr />
            <div className='flex '>
              <p className='mr-5 flex items-center gap-2'><MdAccessTime></MdAccessTime>{preparing_time} min</p>
              <p className='mr-5 flex items-center gap-2'><FaGripfire></FaGripfire>{calories}</p>
            </div>
            <button onClick={()=>handleItem(recipe)} className='bg-[#0BE58A] rounded-3xl p-2 hover:bg-white transition-transform border-2 border-transparent hover:border-teal-300'>Want to Cook</button>
            </div>
            
        </div>
    </div>
  )
}

Recipe.propTypes = {
  recipe: PropTypes.array,
  handleItem:PropTypes.func,
}

export default Recipe