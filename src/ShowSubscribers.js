import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {
  
  onDeletedClick =(subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId);
  }
  

  render(){
    return (
   
      <div>
        <Header heading="phone directory"/>
        
         <Link to="/add" ><button className="button">Add</button></Link>
        <div className="grid"> 
          <span className=" grid-item name">Name</span>
          <span className=" grid-item phone">Phone</span>
        </div>
  
       {
         this.props.subscribersList.map(sub =>{
           return  <div key={sub.id} className="grid"> 
            <span className=" grid-item ">{sub.name}</span>
            <span className=" grid-item ">{sub.phone}</span>
            <button className="del-btn" onClick={this.onDeletedClick.bind(this,sub.id)}>Delete</button>
          </div>
         })
       }
  
     
        
       
      </div>
  
  
    );
  }
  
  }
  
export default ShowSubscribers;
