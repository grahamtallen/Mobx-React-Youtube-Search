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

    const Repos = CsStore.items.map((item) => {
            console.log(item.title.indexOf("U"));
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
        </div>

    )
});

export default RepoList