/**
 * Created by grahamallen on 6/24/16.
 */
/**
 * Created by grahamallen on 6/20/16.
 */
import React from 'react'
import { observer } from 'mobx-react'
import weCsStore from '../stores/CsStore'


const Alert = observer(
    () => {
        if (CsStore.alert === "") {
            return <div></div>
        }
        if (CsStore.user.avatar_url !== "") {
            return <div></div>
        }
        const selected_video = CsStore.selectedVideo;
        return (
            <div className="video-detail col-md-8">
                <div class="alert alert-danger">
                    <strong>{CsStore.searchTerm}</strong> not found
                </div>
            </div>
        )
    }
);

export default Alert