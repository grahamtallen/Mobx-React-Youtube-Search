/**
 * Created by grahamallen on 6/20/16.
 */
import React from 'react'
import Counter from './counter.js'
import VideoStore from '../stores/VideoStore'
import { observer } from 'mobx-react'


const VideoListItem = observer(
    ({video}) => {
    const imgUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => VideoStore.selectedVideo = video} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        <p>{video.snippet.title}</p>

                    </div>
                </div>
            </div>
        </li>
    )
});

export default VideoListItem