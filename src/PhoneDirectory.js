import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscribersList: [
                {
                    id: 1,
                    name: 'Niharika',
                    phone: '0123456789'
                },
                {
                    id: 2,
                    name: 'Ayush',
                    phone: '9876543210'
                }
            ]
        }
    }
    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers});
    }
    render() {
        return (

            <div>
                <Router>
                    <div className="main-container">
                        <Route exact path='/' render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
                        <Route exact path='/add' render={({ history }, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
                    </div>
                </Router>

            </div>
        )

    }
}

export default PhoneDirectory;