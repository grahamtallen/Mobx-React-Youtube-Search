/**
 * Created by grahamallen on 6/27/16.
 */
import React from 'react'
import { observer } from 'mobx-react'


const TrackedItem = observer(
    ({item}) => {

        return (
            <div className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                            <p className="list-group-item-name">{ item.title }</p>
                    </div>
                    <div className="media-right">
                        <p>Start: { item.startTime }</p>
                        <p>End: { item.endTime }</p>
                    </div>
                </div>
            </div>
        )
    });

export default TrackedItem
