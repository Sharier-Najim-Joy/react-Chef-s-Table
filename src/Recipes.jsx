
// import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Recipe from './Recipe';
import Items from './Items';
import CurrentlyCooking from './CurrentlyCooking';
import { toast } from 'react-toastify';

const Recipes = () => {
    const [recipes,setRecipes]=useState([]);
    const [items,setItems] =useState([]);
    const [cook,setCook] = useState([])
    const [time,setTime] = useState(0);
    const [calorie,setCalories] = useState(0)
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])

    const handleItem=(recipe)=>{
    //    console.log(recipe.recipe_id)
       const isExit=items.find(item=>item.recipe_id===recipe.recipe_id);
       if(!isExit){
           setItems([...items,recipe])
       }
       else{
        toast.warning('Already exit')
       }
    }

    const handlePreparing = (item,preparing_time,calories) =>{
        setCalories(calorie+calories)
        setTime(time+preparing_time)
        setCook([...cook,item])
        // console.log('hello',item)
        const preparing = items.filter(c=>c.recipe_id !== item.recipe_id)
        setItems(preparing)
    }
    // console.log(cook,time)
  return (
    <div className='container m-auto text-center mt-6'>
        <h1 className='text-6xl'>Our Recipes</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
       <div className='flex flex-col md:flex-row'>
       <div className='w-2/3'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            {
                recipes.map((recipe,idx)=><Recipe 
                key={idx} 
                recipe={recipe}
                handleItem={handleItem}
                ></Recipe>)
            }
            </div>
            
        </div>
        <div className='w-1/3 border-2 ml-2 border-[#28282833] rounded-xl'>
        <div>
        <h2 className='text-2xl mb-2 font-bold'>Want to cook:{items.length}</h2>
           <div>
            <div className='grid grid-cols-5'>
                <h4>No</h4>
            <h4>Name</h4>
            <h4>Time</h4>
            <h4>Calories</h4>
            </div>
           {
                items.map((item,idx)=><Items 
                key={idx} 
                item={item} 
                idx={idx}
                handlePreparing={handlePreparing}
                ></Items>)
            }
           </div>
        </div>
        <div className='mt-4'>
            <h2 className='text-2xl mb-2 font-bold'>Currently cooking:{cook.length}</h2>
            <div className='grid grid-cols-4'>
                <h4>No</h4>
            <h4>Name</h4>
            <h4>Time</h4>
            <h4>Calories</h4>
            </div>
            {
               cook.map((cooking,idx)=><CurrentlyCooking key={idx} idx={idx} cooking={cooking}></CurrentlyCooking>)
            }
        </div>
        <div className='flex justify-end gap-10'>
        <p><span>Total Time = </span><br /><span>{time} minutes</span> </p>
        <p><span>Total Calories =  </span><br /><span>{calorie} Calories</span></p>
        </div>
            </div>
       </div>
    </div>
  )
}

Recipes.propTypes = {

}

export default Recipes