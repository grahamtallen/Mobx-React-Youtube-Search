/**
 * Created by grahamallen on 6/20/16.
 */
import React from 'react'
import { observer } from 'mobx-react'
import GithubStore from '../stores/GithubStore'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import CalendarHeatmap from 'react-calendar-heatmap';


const GithubDetail = observer(
    () => {
        if (GithubStore.user.avatar_url === "") {
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
                    <CalendarHeatmap
                        endDate={new Date()}
                        numDays={400}
                        values={GithubStore.returnDates()}
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