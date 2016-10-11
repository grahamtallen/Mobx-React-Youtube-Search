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



import users from './data/people'
var AppComponent = React.createFactory(App);
var roles = ['Maintenace', 'Managment', 'Accounting', 'Pilot', 'Executive', 'Admin', 'Housekeeping', 'Contractor', 'Butler']

var people = users.map((user, index) => {
    return { title: user.name, price: 299.99, id: index, role: roles[Math.floor(Math.random()*7)]}
});





import { observer } from 'mobx-react'

import DevTools from 'mobx-react-devtools';

@observer
class Apple extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
            <div>

                <ReactCSSTransitionGroup transitionName = "fade"
                                         transitionAppear = {true}
                                         transitionAppearTimeout = {1000}
                                         transitionEnter = {false}
                                         transitionLeave = {false}>
                        <AppComponent products={people} />
                        <DevTools />

                </ReactCSSTransitionGroup>

            </div>
        )
    }
};

ReactDOM.render(<Apple />, document.querySelector('.container'));