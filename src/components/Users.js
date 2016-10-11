/**
 * Created by grahamallen on 10/11/16.
 */

import React, {Component} from 'react';
import {observer} from 'mobx-react';
import people from '../data/people'
import Sortable from 'react-sortablejs-guten';
import App from '../forks/react-shopping-cart/js/app.js';

const UserListItem = observer(({user}) => {
    return <li>{user.name}</li>
});

var products = [
    { title: "iPhone 5S", price: 299.99 , id: 1},
    { title: "iWatch", price: 124.33 , id: 2},
    { title: "Nexus 5", price: 650.00 , id: 3},
    { title: "Beats Headphones", price: 150.00, id: 4},
    { title: "MacBook Pro", price: 1299.99, id: 5},
    { title: "Samsung Tab", price: 299.99, id: 6},
    { title: "Canon Camera", price: 459.99, id: 7},
    { title: "Razer DeathAdder", price: 59.99, id: 8}
];


@observer
class UserList extends Component {
    componentDidMount () {
        Sortable.create(document.getElementById('sortableList'))
    }
    render() {
        return <ul id="sortableList">
            {/*people.map((user) => <UserListItem user={user} />)*/}
        </ul>
    }
}

export default App