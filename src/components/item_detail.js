/**
 * Created by grahamallen on 6/20/16.
 */
import React from 'react'
import { observer } from 'mobx-react'
import CsStore from '../stores/CsStore'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import CalendarHeatmap from 'react-calendar-heatmap';
import Coverflow from 'react-coverflow'

const ItemDetail = observer(
    () => {
        if (!CsStore.itemSelected) {
            return <div></div>
        }
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const Items = CsStore.items.map((item) => {
               /*if (item.title !== "White and Yellow Package") {
                    return;
                } */
                return <img src={`https://privateapi.collectorsystems.com/12940/objects/${item.objectid}/mainimage?width=300&height=300&quality=100&sessionid=${CsStore.sessionid}`}
                            alt={item.title}
                            key={item.objectid}
                            onClick={ () => {
                                CsStore.selected_item = item;
                            }}
                />

            }
        );

        return (
            <div>
                <ReactCSSTransitionGroup transitionName = "fade"
                                         transitionAppear = {true} transitionAppearTimeout = {1000}
                                         transitionEnter = {false} transitionLeave = {false}>
                    <div className="superbox">
                        <div className="superbox-show">
                            <button onClick={() => { CsStore.itemSelected = false }} id="closeDetailButton" className="btn btn-block btn-secondary pull-right">
                                Close
                            </button>
                            <h4 className="galleryObjectTitle">{CsStore.selected_item.title}</h4>
                            <div className="galleryImgDiv"><img src={CsStore.getItemUrl(CsStore.selected_item)} className="superbox-current-img" /></div>
                            <div className="currentObjectTable" style={{display: 'inline-block'}}>
                              <table id="leftColumnClone" className="table table-profile" style={{display: 'inline-block'}}>
                                  <tbody>
                                    <tr>
                                        <td style={{borderTop: '0px'}}className="field">Type</td>
                                        <td style={{borderTop: '0px'}}className="type fieldAttribute">
                                            Jewelry
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="field">Status</td>
                                        <td onClick={ () => {
                                                        console.log("click");
                                                        CsStore.filterTerm = CsStore.selected_item.objectstatus
                                                        }} className="status fieldAttribute">{ CsStore.selected_item.objectstatus }</td>
                                    </tr>
                                    <tr>
                                        <td className="field">Date</td>
                                        <td className="date fieldAttribute">{ CsStore.selected_item.objectdate }</td>
                                    </tr>
                                    <tr>
                                        <td className="field">Inventory Number</td>
                                        <td className="inventory fieldAttribute">{ CsStore.selected_item.inventorynumber }</td>
                                    </tr>
                                    <tr>
                                        <td className="field">Location</td>
                                        <td className="location fieldAttribute">{ CsStore.selected_item.fulllocationname }</td>
                                    </tr>
                                    <tr>
                                        <td className="field">Dimensions</td>
                                        <td className="dimensions fieldAttribute">{ CsStore.selected_item.imperialdims }</td>
                                    </tr>
                                    <tr>
                                        <td className="field">Medium</td>
                                        <td className="medium fieldAttribute">{ CsStore.selected_item.medium }</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Coverflow
                                displayQuantityOfSide={2}
                                navigation={true}
                                enableHeading={true}
                                media={{
                                  '@media (max-width: 900px)': {
                                    width: '600px',
                                    height: '500px'
                                  },
                                  '@media (min-width: 900px)': {
                                    width: '960px',
                                    height: '500px'
                                  }
                                }}
                            >
                                {Items}
                            </Coverflow>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
);

export default ItemDetail