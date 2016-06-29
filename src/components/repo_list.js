/**
 * Created by grahamallen on 6/20/16.
 */
import React from 'react'
import CounterStore from '../stores/CounterStore'
import { observer } from 'mobx-react'
import CsStore from '../stores/CsStore'
import RepoListItem from './RepoListItem'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import FlipMove from 'react-flip-move'

const RepoList = observer(() => {

    const Repos = CsStore.items.map((item) =>
        <RepoListItem
            key={item.objectid}
            item={item}
        />
    );


    return (
        <div className="superbox">
            <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary btn-sm" onClick={CsStore.reverseOrder}>Reverse Order</button>
                        <button type="button" className="btn btn-secondary btn-sm" onClick={CsStore.sortAlphaBeta}>Alphabetically</button>
                        <button type="button" className="btn btn-secondary btn-sm" onClick={CsStore.numOfWatchers}>By # of watchers</button>
                    </div>
                    <FlipMove
                        className=""
                        easing="ease-in-out"
                        delay="0"
                        staggerDelayBy="0"
                        staggerDurationBy="30"
                        duration="600"
                        enterAnimation="accordionHorizontal"
                        leaveAnimation="accordionHorizontal"
                    >
                        { Repos }
                    </FlipMove>
        </div>

    )
});

export default RepoList