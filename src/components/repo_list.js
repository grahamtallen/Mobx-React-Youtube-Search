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
    if (CsStore.loggedIn) {
        return <div></div>
    }
    if (CsStore.itemSelected) {
        return <div></div>
    }

    const Repos = CsStore.items.map((item) => {


            if (item.title.indexOf(CsStore.delayedTerm) === -1) {
                return;
            }
            return <RepoListItem
                key={item.objectid}
                item={item}
            />
        }
    );


    return (
        <div className="superbox">
            <ReactCSSTransitionGroup transitionName = "fade"
                                     transitionAppear = {true}
                                     transitionAppearTimeout = {1000}
                                     transitionEnter = {false}
                                     transitionLeave = {false}>
                    <FlipMove
                        className=""
                        easing="ease-in-out"
                        delay="0"
                        staggerDelayBy="0"
                        staggerDurationBy="30"
                        duration="700"
                        enterAnimation="accordionHorizontal"
                        leaveAnimation="elevator"
                    >
                        { Repos }
                    </FlipMove>
            </ReactCSSTransitionGroup>
        </div>

    )
});

export default RepoList