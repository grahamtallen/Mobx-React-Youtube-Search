import React from 'react'
import { observer } from 'mobx-react'


const RepoListItem = observer(
    ({repo}) => {

        return (
            <li className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <a target="_blank" href={ "http://www." + repo.git_url.slice(6)}>
                            <p>{ repo.name }</p>
                        </a>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                                <p>Watchers: { repo.watchers }</p>
                        </div>
                    </div>
                </div>
            </li>
        )
    });

export default RepoListItem
