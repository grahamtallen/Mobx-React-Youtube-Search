/**
 * Created by grahamallen on 6/20/16.
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import RepoList from './components/repo_list'
import ItemDetail from './components/item_detail'
import Counter from './components/counter'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Alert from './components/alert'
import Login from './components/login'
import Users from './components/Users'
import CounterStore from './stores/CounterStore'
import CsStore from './stores/CsStore'
import App from './forks/react-shopping-cart/js/components/Application'
import {when, autorun, observable} from 'mobx'


import users from './data/people'
var roles = ['Maintenace', 'Managment', 'Accounting', 'Pilot', 'Executive', 'Admin', 'Housekeeping', 'Contractor', 'Butler']
var imgs = ['http://semantic-ui.com/images/avatar2/small/kristy.png',
            'http://semantic-ui.com/images/avatar2/small/matthew.png',
            'http://semantic-ui.com/images/avatar2/small/elyse.png',
            'http://semantic-ui.com/images/avatar2/small/molly.png',
            'http://semantic-ui.com/images/avatar/small/jenny.jpg',
            'http://semantic-ui.com/images/avatar/large/elliot.jpg'
            ]

var people = users.map((user, index) => {
    return { title: user.name, price: 299.99, id: index, imgSrc: imgs[Math.floor(Math.random()*5)], role: roles[Math.floor(Math.random()*7)]}
});





import { observer } from 'mobx-react'

import DevTools from 'mobx-react-devtools';


// PseudoStore

var groupedItems = observable([]);

@observer
class Apple extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        var updateItems = autorun(() => {
            console.log("new value = ", groupedItems)
        })

    }
    groupValue (arr) {
        groupedItems = arr
    }

    render() {
        return (
            <div>

                <ReactCSSTransitionGroup transitionName = "fade"
                                         transitionAppear = {true}
                                         transitionAppearTimeout = {1000}
                                         transitionEnter = {false}
                                         transitionLeave = {false}>
                        <App groupValue={this.groupValue} items={people} />

                </ReactCSSTransitionGroup>

            </div>
        )
    }
};

ReactDOM.render(<Apple />, document.querySelector('.container'));