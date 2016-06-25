/**
 * Created by grahamallen on 6/20/16.
 */
import React from 'react'
import { observer } from 'mobx-react'
import GithubStore from '../stores/GithubStore'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


const GithubDetail = observer(
    () => {
        if (GithubStore.user.avatar_url === "") {
            return <div></div>
        }
        const selected_video = GithubStore.selectedVideo;
        return (
            <div>
                <ReactCSSTransitionGroup transitionName = "example"
                                         transitionAppear = {true} transitionAppearTimeout = {1000}
                                         transitionEnter = {false} transitionLeave = {false}>
                <div className="video-detail col-md-8">
                    <div className="">
                        <img src={GithubStore.user.avatar_url} className="img-circle"></img>
                    </div>
                    <div className="details">
                        <div>
                            <h3>{ GithubStore.user.name }</h3>
                        </div>
                        <div>
                            { GithubStore.user.email }
                        </div>
                        <div>
                            Followers: { GithubStore.user.followers }
                        </div>
                        <div>
                            <a target="_blank" href={ GithubStore.user.html_url }>{ GithubStore.user.html_url }</a>
                        </div>
                    </div>
                </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
);

export default GithubDetail