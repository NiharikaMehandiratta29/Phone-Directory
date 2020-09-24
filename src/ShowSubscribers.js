import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css';

class ShowSubscribers extends Component {
  
  
  
  /*let subscribers=[
    {
      id:1,
      name: "Niharika" ,
      phone: "0000000"

    },
    {
      id:2,
      name: "Ayush" ,
      phone: "1111111"

    }
  ]*/

  constructor(){
    super();
    this.state={
      subscribersListToShow:[

      ]
    }
  }
  
   componentDidMount(){
     let newSubscriber= {
       id: 1,
       name: "Niks" ,
       phone: "1234567890"
     }

     let subscribersList = this.state.subscribersListToShow;
     subscribersList.push(newSubscriber);
     this.setState({subscribersListToShow: subscribersList})

   }

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
         this.state.subscribersListToShow.map(sub =>{
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
