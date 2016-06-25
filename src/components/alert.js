/**
 * Created by grahamallen on 6/24/16.
 */
/**
 * Created by grahamallen on 6/20/16.
 */
import React from 'react'
import { observer } from 'mobx-react'
import GithubStore from '../stores/GithubStore'


const Alert = observer(
    () => {
        if (GithubStore.alert === "") {
            return <div></div>
        }
        if (GithubStore.user.avatar_url !== "") {
            return <div></div>
        }
        const selected_video = GithubStore.selectedVideo;
        return (
            <div className="video-detail col-md-8">
                <div class="alert alert-danger">
                    <strong>{GithubStore.searchTerm}</strong> not found
                </div>
            </div>
        )
    }
);

export default Alert