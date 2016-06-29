/**
 * Created by grahamallen on 6/20/16.
 */
import React from 'react'
import { observer } from 'mobx-react'
import CsStore from '../stores/CsStore'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import CalendarHeatmap from 'react-calendar-heatmap';


const GithubDetail = observer(
    () => {
        if (CsStore.user.avatar_url === "") {
            return <div></div>
        }

        function customOnClick(value) {
            if (value) {
                alert(`${value.date} - ${value.count} repos`);
            }
        }
        const customTooltipDataAttrs = { 'data-toggle': 'tooltip' };
        return (
            <div>
                <ReactCSSTransitionGroup transitionName = "example"
                                         transitionAppear = {true} transitionAppearTimeout = {1000}
                                         transitionEnter = {false} transitionLeave = {false}>
                <div className="video-detail col-md-8">
                    <div className="">
                        <img src={CsStore.user.avatar_url} className="img-circle"></img>
                    </div>
                    <div className="details">
                        <div>
                            <h3>{ CsStore.user.name }</h3>
                        </div>
                        <div>
                            { CsStore.user.email }
                        </div>
                        <div>
                            Followers: { CsStore.user.followers }
                        </div>
                        <div>
                            <a target="_blank" href={ CsStore.user.html_url }>{ CsStore.user.html_url }</a>
                        </div>
                    </div>
                    <CalendarHeatmap
                        endDate={new Date()}
                        numDays={400}
                        values={CsStore.returnDates()}
                        titleForValue={(value) => `Date is `}
                        tooltipDataAttrs={customTooltipDataAttrs}
                        onClick={customOnClick}
                        classForValue={(value) => {
                            if (!value) {
                              return 'color-empty';
                            }
                            return `color-scale-${value.count}`;
                          }}
                    />
                </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
);

export default GithubDetail