/**
 * Created by grahamallen on 6/20/16.
 */
import React from 'react'
import { observer } from 'mobx-react'
import VideoStore from '../stores/VideoStore'


const VideoDetail = observer(
    () => {
        const selected_video = VideoStore.selectedVideo;
        return (
            <div className="video-detail col-md-8">
                <div className="details">
                    <div>
                        { VideoStore.user.name }
                    </div>
                    <div>
                        { VideoStore.selectedVideo.snippet.description }
                    </div>
                </div>
                <div className="embed-responsive embed-responsive-16by9">
                    <img src={VideoStore.user.avatar_url} className="img-circle"></img>
                </div>

            </div>
        )
    }
);

export default VideoDetail