/**
 * Created by grahamallen on 6/20/16.
 */
import React from 'react'
import CounterStore from '../stores/CounterStore'
import { observer } from 'mobx-react'
import GithubStore from '../stores/GithubStore'
import RepoListItem from './RepoListItem'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const RepoList = observer(() => {
    if (GithubStore.user.avatar_url === "") {
        return <div></div>
    }

    const Repos = GithubStore.repos.map((repo) =>
        <RepoListItem
            key={repo.id}
            repo={repo}
        />
    );


    return (
        <div>
            <ReactCSSTransitionGroup transitionName = "fade"
                                     transitionAppear = {true} transitionAppearTimeout = {1000}
                                     transitionEnter = {false} transitionLeave = {false}>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={GithubStore.reverseOrder}>Reverse Order</button>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={GithubStore.sortAlphaBeta}>Alphabetically</button>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={GithubStore.numOfWatchers}>By # of watchers</button>
                </div>
                <h5>Repos: { GithubStore.user.public_repos }</h5>
                <ul className="col-md-4 list-group">
                    { Repos }
                </ul>
            </ReactCSSTransitionGroup>
        </div>

    )
});

export default RepoList