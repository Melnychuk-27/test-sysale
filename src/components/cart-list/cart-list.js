import React from 'react';
import './cart-list.css';

import CartItem from '../cart-item';

export default function CartList() {


  const listGoods = [
    {
      title: 'Шампунь',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
        enim ad minim veniam, quis nostrud exercitation ullamco.`,
      price: 200,
      src: 'good-1.png',
      colors: ['Красный','Зелёный','Синий','Фиолетовый'],
      volumes: [100,200,300],
    },
    {
      title: 'Шампунь',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
        enim ad minim veniam, quis nostrud exercitation ullamco.`,
      price: 200,
      src: 'good-2.png',
      colors: ['Красный','Зелёный','Синий','Фиолетовый'],
      volumes: [100,200,300],
    },
    {
      title: 'Шампунь',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
        enim ad minim veniam, quis nostrud exercitation ullamco.`,
      price: 200,
      src: 'good-3.png',
      colors: ['Красный','Зелёный','Синий','Фиолетовый'],
      volumes: [100,200,300],
    }
    
  ]

  return (
    <div className='list-goods'>
      {
        listGoods.map((good,idex) => {
          return <CartItem good={good} key={idex} />
        })
      }
    </div>
  );
}