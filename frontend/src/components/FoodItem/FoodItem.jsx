import React  from 'react'
// import Rating from '../Rating'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,rating,price,description,image}) => {
 
  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img loading='lazy' className='food-item-image' src={image} alt="" />
            {!cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
              :<div className='food-item-counter'>
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                  <p>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>

            }
        </div>
          <div className="food-item-info">
            <div className="food-item-name-rating">
              <p>{name}</p>
              <p className='food-item-rating'> ★ {rating}</p>
              {/* <Rating rating={rating} /> */}
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">₹{price}</p>
            
          </div>
    </div>
  )
}

export default FoodItem
