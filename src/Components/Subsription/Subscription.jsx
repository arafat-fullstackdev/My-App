import React from 'react';
import './Subscription.css';

const Subscription = () => {

    let date= (new Date('2024','06','29'));
    let title = "Monthly Subscription";
    let amount = '124.23';
  return (
    <div className='Subscription'>
        <div className='date'>{date.toISOString()}</div>
        <h2 className='.Subscription_title'>{title}</h2>
        <div className='.Subscription_price'>{amount}</div>
    </div>
  )
}

export default Subscription;