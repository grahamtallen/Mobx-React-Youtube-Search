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
import UsersStore from './stores/UsersStore'
import CsStore from './stores/CsStore'
import App from './forks/react-shopping-cart/js/components/Application'
import {when, autorun, observable} from 'mobx'







import { observer } from 'mobx-react'

import DevTools from 'mobx-react-devtools';


// PseudoStore

@observer
class Apple extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        var updateItems = autorun(() => {

            //console.log("new value = ", groupedItems)
        })

    }
    groupValue (arr) {
    }

    handleDroppedItem(droppedItem) {
        UsersStore.groupedUsers.push(droppedItem);
        var array = UsersStore.users.map((user) => user.name);
        var index = array.indexOf(droppedItem.title);
        if (index > -1) {
            UsersStore.users.splice(index, 1);
        }
        //console.log(droppedItem);
        //items = items.filter((item) => {
        //    return item.title !== droppedItem.title
        //});
    }

    render() {
        console.log('rerendered')
        return (
            <div>

                <ReactCSSTransitionGroup transitionName = "fade"
                                         transitionAppear = {true}
                                         transitionAppearTimeout = {1000}
                                         transitionEnter = {false}
                                         transitionLeave = {false}>
                        <App handleDroppedItem={this.handleDroppedItem} groupValue={this.groupValue} items={UsersStore.userDisplayObjs} />
                    <DevTools />
                </ReactCSSTransitionGroup>

            </div>
        )
    }
};

ReactDOM.render(<Apple />, document.querySelector('.container'));