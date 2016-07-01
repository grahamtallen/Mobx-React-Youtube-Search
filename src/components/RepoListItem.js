import React from 'react'
import { observer } from 'mobx-react'
import CsStore from '../stores/CsStore.js'

const RepoListItem = observer(
    ({item}) => {
        return (
            <div onClick={() => { CsStore.selected_item = item; CsStore.itemSelected = true; console.log(CsStore.itemSelected) }} className="superbox-list">
                        <p className="searchedValue">{ item[CsStore.displayValue] }</p>
                        <img className="superbox-img"
                             src={`https://privateapi.collectorsystems.com/12940/objects/${item.objectid}/mainimage?width=300&height=300&quality=100&sessionid=${CsStore.sessionid}`} />
                        <p>{ item.title }</p>
            </div>
        )
    });

export default RepoListItem


var str = "https://privateapi.collectorsystems.com/12940/objects/867747/mainimage?width=300&height=300&quality=100&sessionid=ed27e816-45ba-4835-8a2a-ce583109b5c2";