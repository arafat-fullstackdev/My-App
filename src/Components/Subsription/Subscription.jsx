import "./Subscription.css";

 function Subscription(props){

       return(
        <div className="subscription">
          <div>{props.date.toISOString()}</div>
          <h2 className="subscription_title">{props.title}</h2>
          <div className="subscription_price">{props.amount}</div>

        </div>

       )
 }

 export default Subscription;