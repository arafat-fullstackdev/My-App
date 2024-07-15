import './SubscriptionData.css';
function SubscriptionDate(props){
    const month=props.date.toLocaleString('default',{month:'long'});
    const day=props.date.toLocaleString('default',{day:'2-digit'});
    const year=props.year.getFullYear();

    return(
        <div>
            <div>{month}</div>
          <div>{day}</div>

          <div>{year}</div>
        </div>
    )

}

export default SubscriptionDate;