/**
 * Created by grahamallen on 6/20/16.
 */
import React from 'react'
import CounterStore from '../stores/CounterStore'
import { observer } from 'mobx-react'
import VideoStore from '../stores/VideoStore'


const VideoList = observer(() => {

    return (
        <div>
            <ul className="col-md-4 list-group">
                <li className="list-group-item"><a href={ VideoStore.user.html_url }>{ VideoStore.user.html_url }</a></li>
                <li className="list-group-item">{ VideoStore.user.followers }</li>
                <li className="list-group-item">{ VideoStore.user.public_repos }</li>
            </ul>
            <h2>{ CounterStore.counter }</h2>
        </div>

    )
});

export default VideoList