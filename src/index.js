/**
 * Created by grahamallen on 6/20/16.
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import Counter from './components/counter'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import CounterStore from './stores/CounterStore'
import VideoStore from './stores/VideoStore'

import { observer } from 'mobx-react'

import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <ReactCSSTransitionGroup transitionName = "example"
                                         transitionAppear = {true} transitionAppearTimeout = {1000}
                                         transitionEnter = {false} transitionLeave = {false}>

                        <h4>Search Youtube</h4>
                    <SearchBar />
                    <VideoDetail/>
                    <VideoList />
                    <h3>Counter Component</h3>
                    <Counter/>
                    <p>Search Term = { VideoStore.searchTerm }</p>
                    <button onClick={ () => VideoStore.searchTerm = "Surfboards" }>Search Surfboards</button>
                    <DevTools />
                </ReactCSSTransitionGroup>

            </div>
        )
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));