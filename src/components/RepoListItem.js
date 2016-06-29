import React from 'react'
import { observer } from 'mobx-react'


const RepoListItem = observer(
    ({item}) => {

        return (
            <div className="superbox-list">
                        <p className="searchedValue">{ item.inventorynumber }</p>
                        <p>{ item.title }</p>
            </div>
        )
    });

export default RepoListItem
