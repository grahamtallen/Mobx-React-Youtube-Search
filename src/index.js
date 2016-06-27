/**
 * Created by grahamallen on 6/20/16.
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import RepoList from './components/repo_list'
import GithubDetail from './components/github_detail'
import Counter from './components/counter'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Alert from './components/alert'

import CounterStore from './stores/CounterStore'
import GithubStore from './stores/GithubStore'



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
                <ReactCSSTransitionGroup transitionName = "example"
                                         transitionAppear = {true}
                                         transitionAppearTimeout = {1000}
                                         transitionEnter = {false}
                                         transitionLeave = {false}>
                    <SearchBar />
                    <Alert />
                    <GithubDetail/>
                    <RepoList />
                    <DevTools />
                </ReactCSSTransitionGroup>

            </div>
        )
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));