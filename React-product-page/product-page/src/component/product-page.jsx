import React from "react";
import {useState} from 'react'
import css from './product-page.module.css'
import { productData } from "./Data";

function ProductPage() {

    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }
    const inputHandle =(e) => {
        const value = parseInt(e.target.value)
        if(!isNaN(value)){
            setCount(value)
        }
    }

  return (
    <div>
        {/* brand-crumbs  */}
      {productData.bradCrumbs.map((item, index) => (
        <React.Fragment key={index}>
          <a href={item.link} className={css.brandCrumbs}>
            {item.text}
          </a>
          {/* if => brandCrumb has item than  */}
          {index < productData.bradCrumbs.length - 1 && <span>{' / '}</span>}
        </React.Fragment>
      ))}

      {/* heading section  */}
      <div>
        <h1>{productData.heading}</h1>
      </div>
      {/* price section  */}
      <div>
        <span><b>Price: </b></span>
        <span style={{textDecoration: ' line-through'}}>{productData.price.salePrice}</span>{'  '}
        <span>{productData.price.regularPrice}</span>
      </div>
      {/* sort Description  */}
      <div>
        <span>{productData.sortDescription}</span>
      </div>
      {/* add item section  */}
      <div>
        <button onClick={decrement}>-</button>
        <input type="text" value={count} onChange={inputHandle}/>
        <button onClick={increment}>+</button>
      </div>
      

      {/* Tag section  */}
      <div>
        <span><b>Tags: </b></span>
        {productData.tags.map((item, index) => (
           <React.Fragment key={index}>
                <span style={{margin: '2px'}}>{item.text}</span>
                {index < productData.tags.length -1 && <span>{','}</span>}
           </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
