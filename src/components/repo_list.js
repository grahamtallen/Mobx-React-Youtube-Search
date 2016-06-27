/**
 * Created by grahamallen on 6/20/16.
 */
import React from 'react'
import { observer } from 'mobx-react'
import FirebaseItems from '../stores/Firebase'
import TrackedItem from './tracked_item'
import FlipMove from 'react-flip-move'

const RepoList = observer(() => {


    const Items = FirebaseItems.user_history.map((item) =>
        <TrackedItem
            key={item.id}
            item={item}
        />
    );


    return (
        <div>

            {/*<div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={GithubStore.reverseOrder}>Reverse Order</button>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={GithubStore.sortAlphaBeta}>Alphabetically</button>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={GithubStore.numOfWatchers}>By # of watchers</button>
                </div> */}
                <FlipMove
                    className="col-md-4 list-group"
                    easing="ease-in-out"
                    delay="0"
                    staggerDelayBy="0"
                    staggerDurationBy="30"
                    duration="600"
                    enterAnimation="elevator"
                    leaveAnimation="elevator"
                >
                    { Items }
                </FlipMove>
                <button
                    onClick={FirebaseItems.addItem}
                    > Add a new Item
                </button>
        </div>

    )
});

export default RepoList