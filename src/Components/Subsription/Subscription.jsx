import "./Subscription.css";

 function Subscription(props){
     const day=props.date.toLocaleString('default',{day:'2-digit'});
     const month=props.date.toLocaleString('default',{month:'long'});
     const year=props.year.getFullYear();

       return(
        <div className="subscription">
          <div>{day}</div>
          <div>{month}</div>
          <div>{year}</div>
          <h2 className="subscription_title">{props.title}</h2>
          <div className="subscription_price">{props.amount}</div>

        </div>

       )
 }

 export default Subscription;