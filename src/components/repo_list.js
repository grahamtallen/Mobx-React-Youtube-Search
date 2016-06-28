/**
 * Created by grahamallen on 6/20/16.
 */
import React from 'react'
import { observer } from 'mobx-react'
import FirebaseItems from '../stores/Firebase'
import TrackedItem from './tracked_item'
import FlipMove from 'react-flip-move'
import moment from 'moment'

const RepoList = observer(() => {


    const Items = FirebaseItems.user_history.map((item) => {
            if (FirebaseItems.today ) {
                var today = moment().format();
                console.log(item.title);
                console.log(moment(item.startTime, "D DD").format() === moment(today, "D DD").format());
                console.log(moment(today, "D DD").format());
                console.log(moment(item.startTime, "D DD").format());
            }
            return <TrackedItem
                key={item.id}
                item={item}
            />
        }
    );


    return (
        <div>
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
        </div>

    )
});

export default RepoList