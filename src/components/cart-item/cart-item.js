import React,{useState,useEffect} from 'react';
import './cart-item.css' 

let classNameSelect='';

export default function CartItem({good}) {

  const {title,price,colors,volumes,description,src} = good;

  const [quantity, setQuantity] = useState(1)
  const [modPrice, setModPrice] = useState(1)
  const [selectToggle, setSelectToggle] = useState(true)
  const [classNameButton, setClassNameButton] = useState('cart__buttons-buy')
  const [colorChoose, setColorChoose] = useState('Цвет')
  const [srcIcon, setSrcIcon] = useState('marker.png')


  useEffect(()=>{
    return (()=>{clearTimeout()})
  })
  function onSelectMouse() {
    onSelectClick()
  }

  function onSelectClick() {
    // if()
    setSelectToggle((prev)=>!prev);
    classNameSelect = selectToggle ? '-is-active' : "" ;
  }
  function onBuyClick() {
    setClassNameButton(()=>'cart__buttons-buy-click')
    setTimeout(()=>{
      setClassNameButton(()=>'cart__buttons-buy')
    },500)
  }

  const boxVolumes = volumes.map((volume,index) => {
    return (
      <label key={volume}>
        <input
              type="radio"
              name={`${src}`}
              value={`${index}`}
              className='real-radio-btn'
              onClick={()=>onVolumeClick(volume)}
              />
              <span className="custom-radio-btn"></span>  
          {volume}
      </label>
    );
  });

  function onVolumeClick(volume) {
    if(volume===100) {
      setModPrice(() => 1);
    }
    if(volume===200) {
      setModPrice(() => 2);
    }
    if(volume===300) {
      setModPrice(() => 3);
    }
  } 

  function onDecrementClick() {
    if(quantity > 1) {
      setQuantity((prev)=>prev-1);
    }
  }

  function onIncrementClick() {
    setQuantity((prev)=>prev+1);
  }

  function onMarkerClick() {
    if(srcIcon==='marker.png'){
      setSrcIcon(()=>'check.svg')
    } else {
      setSrcIcon(()=>'marker.png')
    }
  }

  function onSelectChooseClick(color) {
    setColorChoose(color)
  }

  return (
    <div className='cart__good'>
      <div className='cart__head'>
        <div className='cart__head-new'>
          NEW
        </div>
        <div className='cart__head-img'>
          <img src={`./img/${src}`} alt={title}/>
        </div> 
        <div className='cart__head-marker' onClick={onMarkerClick}>
          <img src={`./img/${srcIcon}`} alt='marker'/>
        </div>   
      </div>
      <div className='cart__body'>
        <h3 className='cart__body-title'>{title}</h3>
        <p className='cart__body-description'>{description}</p>
        <div className='cart__body-color-price'>
          <div className='cart__select-color'>
            <div className='select'>
              <div className={`select__header${classNameSelect}`} onClick={onSelectClick}>
                <span className='select__current'>{colorChoose}</span>
                <div className={`select__icon${classNameSelect}`}><img src="./img/Vector.svg" alt="Vector" /></div>
              </div>
              <div className={`select__body${classNameSelect}`} onMouseLeave={onSelectMouse}>
                {
                colors.map(color => <div className='select__item' onClick={()=>onSelectChooseClick(color)} key={color}>{color}</div>)
                }
              </div>
            </div>
          </div>
          <div className='cart__price'>
            {`${quantity*price*modPrice} грн`}
          </div>
        </div>
        <div className='cart__body-volume'>
          {
            boxVolumes
          }
        </div>
      </div>
      <div className='cart__bottom'>
        <div className='cart__buttons-quantity'>
          <button className='cart__button-decrement' onClick={onDecrementClick}>-</button>
          <div className='cart__quantity'>{quantity}</div>
          <button className='cart__button-increment' onClick={onIncrementClick}>+</button>
        </div>
        <button className={classNameButton} onClick={onBuyClick}>КУПИТЬ</button>
      </div>
    </div>
  );
}