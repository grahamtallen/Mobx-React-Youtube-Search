/**
 * Created by grahamallen on 6/20/16.
 */
import React from 'react'
import VideoListItem from './video_list_item'
import CounterStore from '../stores/CounterStore'
import { observer } from 'mobx-react'
import VideoStore from '../stores/VideoStore'


const VideoList = observer((props) => {
    const videoListItems = VideoStore.videos.map((video) =>
            <VideoListItem
                key={video.etag}
                video={video}
            />
    );

    return (
        <div>
            <ul className="col-md-4 list-group">
                { videoListItems }
            </ul>
            <h2>{ CounterStore.counter }</h2>
        </div>

    )
});

export default VideoList