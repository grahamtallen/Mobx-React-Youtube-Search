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

    componentDidMount = () => {
        CsStore.loggedIn = true;
        console.log(CsStore.loggedIn);
        CsStore.indexMounted();
    };


    render() {
        return (
            <div>

                <ReactCSSTransitionGroup transitionName = "fade"
                                         transitionAppear = {true}
                                         transitionAppearTimeout = {1000}
                                         transitionEnter = {false}
                                         transitionLeave = {false}>
                    <div id="gallery" className="wrapper">
                        <SearchBar />
                        <RepoList />
                        <ItemDetail />
                        <DevTools />

                    </div>
                </ReactCSSTransitionGroup>

            </div>
        )
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));