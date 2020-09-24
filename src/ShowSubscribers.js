import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css';

class ShowSubscribers extends Component {
  
  
  

  render(){
    return (
   
      <div>
        <Header heading="phone directory"/>
        
        <button className="button">Add</button>
        <div className="grid"> 
          <span className=" grid-item name">Name</span>
          <span className=" grid-item phone">Phone</span>
        </div>
  
       {
         this.props.subscribersList.map(sub =>{
           return  <div key={sub.id} className="grid"> 
            <span className=" grid-item ">{sub.name}</span>
            <span className=" grid-item ">{sub.phone}</span>
            <button className="del-btn" >Delete</button>
          </div>
         })
       }
  
     
        
       
      </div>
  
  
    );
  }
  
  }
  
export default ShowSubscribers;
