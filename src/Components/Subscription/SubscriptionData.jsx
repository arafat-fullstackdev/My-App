import "./Subscription.css";
import Subscription from "./Subscription"; 

function SubscriptionData ()  {
  let subscriptions = [

    {
    id:"1",
    date:(new Date('2024', '07', '17')),
    title:"Monthly Subscription",
    amount:"124.60"
    },
    {
      id:"2",
      date:(new Date('2024', '07', '7')),
      title:"Yearly Subscription",
      amount:"204.60"
      },
      {
        id:"3",
        date:(new Date('2024', '07', '14')),
        title:"Quarterly Subscription",
        amount:"44.60"
        }
  ]

//   let date = new Date("2024", "06", "29");
//   let title = "Monthly Subscription";
//   let amount = "124.23";
  
  return (
    <div className="Subscription">
      <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount}/>
      <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount}/>
      <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount}/>
    
 
    </div>
  );

};

export default SubscriptionData;
