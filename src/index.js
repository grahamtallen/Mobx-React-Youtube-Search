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

import CounterStore from './stores/CounterStore'
import CsStore from './stores/CsStore'



import { observer } from 'mobx-react'

import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }


    render() {
        return (
            <div>
                <div id="gallery" className="wrapper">
                <SearchBar />
                <RepoList />
                <ItemDetail />
                <ReactCSSTransitionGroup transitionName = "example"
                                         transitionAppear = {true}
                                         transitionAppearTimeout = {1000}
                                         transitionEnter = {false}
                                         transitionLeave = {false}>
                    <DevTools />
                </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));