import React from 'react'

const Subscription = () => {

    let date= (new Date('2024','06','29'));
    let title = "Monthly Subscription";
    let amount = '124.23';
  return (
    <div className='Subscription'>
        <h1 className='date'>{date.toISOString}</h1>
        <h2>{title}</h2>
        <p>{amount}</p>
    </div>
  )
}

export default Subscription