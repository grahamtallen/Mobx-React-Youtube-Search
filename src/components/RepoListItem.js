import React from 'react'
import { observer } from 'mobx-react'
import CsStore from '../stores/CsStore.js'

const RepoListItem = observer(

    ({item}) => {

        var sessionId = CsStore.sessionid;

        return (
            <div className="superbox-list">
                        <p className="searchedValue">{ item.inventorynumber }</p>
                        <img className="superbox-img"
                             src={CsStore.getItemUrl(item)} />
                        <p>{ item.title }</p>
                        <p>{CsStore.sessionid}</p>
            </div>
        )
    });

export default RepoListItem


var str = "https://privateapi.collectorsystems.com/12940/objects/867747/mainimage?width=300&height=300&quality=100&sessionid=ed27e816-45ba-4835-8a2a-ce583109b5c2";