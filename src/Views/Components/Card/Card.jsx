import './Card.css';

const Card=(props)=> {
  return (

    //   <div class="header">
    //   </div>

    <header>
    <div className="card-group">
      <div className="card">  
      <div className="container">
      </div>
      </div>
      <div className="cardform">
      <div className="container">
      {props.Form}
      </div>
      </div>
      </div>
  
    
    

 
      
      </header>
    // </div>
  );
}

export default Card;
