/**
 * Created by grahamallen on 6/21/16.
 */
import { observable, autorun } from 'mobx'
import YTSearch from 'youtube-api-search'
const API_KEY = "AIzaSyDN8R0gS8T29nr6aFgYXKyGLwe42BRTkok";
import $ from 'jquery'
import repos from './repoData'
import _ from 'lodash'
import csData from './demoJSON'

class CsStore {
    @observable repos_url = "";
    @observable searchTerm = '';
    @observable filterTerm = '';
    @observable delayedTerm = '';
    @observable alert = '';
    @observable user = {
        avatar_url: "",
        name: "Loading..."
    };
    @observable itemSelected = false;
    @observable displayValue = "inventorynumber";

    delayedFilterTerm = () => {  this.delayedTerm = this.filterTerm  };


    @observable items = csData.data;
    @observable selected_item = this.items[0];
    @observable loggedIn = true;


    @observable reposCount = 10;

    @observable sessionid = "";

    login() {
            return $.ajax({
            url: "https://privateapi.collectorsystems.com/authenticate.aspx",
            type: 'POST',
            data: 'UserName=way2b1api&Password=uGsQgoQHzxkx22',
            success: function (data) {
                return data.result.sessionid;
            }
        })
    }

    indexMounted = async () => {
            let sessionid = await this.login();
            console.log(sessionid.result.sessionid);
            this.sessionid = sessionid.result.sessionid;
            this.loggedIn = true;
            return sessionid.result.sessionid; /*
            this.sessionid = sessionid;
            console.log(this.sessionid) */
    };

    getItemUrl(item) {
        let url = `https://privateapi.collectorsystems.com/12940/objects/${item.objectid}/mainimage?width=300&height=300&quality=100&sessionid=${this.sessionid}`;
        return url
    }



    returnDates = () => {
        // TODO make work
        let dates = [];
        this.repos.map((repo) => {
            var date = repo.created_at.slice(0, 10);
            var dateobj = { date: date, count: 1 };
            $.each(dates, (key, value) => {
                if (value.date === date) {
                    dateobj.count++;
                    console.log(dateobj);
                }
            });
            dates.push(dateobj);
        });

        return dates
    };

    search = (term) => {
        var url = "https://api.github.com/users/" + term;
        $.ajax({
            url: url,
            success: (data) => {
                this.user.avatar_url = "";
                this.user = data;
                this.repos_url = data.repos_url;
                this.getRepos(this.repos_url);
            },
            error: () => {
                this.alert = "User Not Found"
            }
        })
    };


    getRepos = (url) => {
        $.ajax({
            url: url,
            success: (data) => {
                this.repos = data;
            }
        });
    };

    reverseOrder = (evt) => {
        this.items = this.items.reverse();
    };

    sortAlphaBeta = (evt) => {
        this.items = this.items.sort(function(a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            }
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            }
            return 0;
        });
    };

    sortByKey = (key) => {
        this.items = this.items.sort(function(a, b) {
            if (a[key].toLowerCase() < b[key].toLowerCase()) {
                return -1;
            }
            if (a[key].toLowerCase() > b[key].toLowerCase()) {
                return 1;
            }
            return 0;
        });
    };

    numOfWatchers = (evt) => {
        console.log(this.repos[0]);
        this.repos = this.repos.sort(function(a, b) {
            if (b.watchers_count < a.watchers_count) {
                return -1;
            }
            if (b.watchers_count > a.watchers_count) {
                return 1;
            }
            return 0;
        });
        console.log(this.repos[this.repos.length - 1]);
    };

    filterItems = (item, term) => {
        var one = -1;
        _.forEach(item, function(value, key) {
            if (typeof value === "string") {
                if (value.indexOf(term) === -1) {
                } else {
                    one = 1;
                }
            }
        });
        return one
    }

}


export default new CsStore();