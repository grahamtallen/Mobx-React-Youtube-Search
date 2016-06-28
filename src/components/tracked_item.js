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
                    </div>
                    <div className="media-right">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>
                                        <p className="list-group-item-name">{ item.title }</p>
                                    </td>
                                    <td>
                                        <p>Start: { item.startTime }</p>
                                    </td>
                                    <td>
                                        <p>End: { item.endTime }</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    });

export default TrackedItem
