import React from 'react'
import { observer } from 'mobx-react'


const RepoListItem = observer(
    ({repo}) => {

        return (
            <div className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <a target="_blank" href={ "http://www." + repo.git_url.slice(6)}>
                            <p className="list-group-item-name">{ repo.name }</p>
                        </a>
                    </div>
                    <div className="media-right">
                        <p>Watchers: { repo.watchers }</p>
                    </div>
                </div>
            </div>
        )
    });

export default RepoListItem
