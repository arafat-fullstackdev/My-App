import "./Subscription.css";
import SubscriptionData from "./SubscriptionData";

function Subscription(props) {
  // const { date, year, title, amount } = props;

  return (
   
    <div className="subscription">
      <SubscriptionData date={props.date}/>
      <h2 className="subscription_title">{props.title}</h2>
      <div className="subscription_price">{props.amount}</div>
    </div>
  );
}

export default Subscription;
