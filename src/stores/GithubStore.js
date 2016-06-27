/**
 * Created by grahamallen on 6/21/16.
 */
import { observable, autorun } from 'mobx'
import YTSearch from 'youtube-api-search'
const API_KEY = "AIzaSyDN8R0gS8T29nr6aFgYXKyGLwe42BRTkok";
import $ from 'jquery'
import repos from './repoData'
import Sortable from 'react-sortablejs';
import _ from 'lodash'

class GithubStore {
    @observable repos_url = "";
    @observable repos = repos;
    @observable searchTerm = '';
    @observable alert = '';
    @observable user = {
        avatar_url: "",
        name: "Loading..."
    };

    @observable reposCount = 10;

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
        this.repos = this.repos.reverse();
    };

    sortAlphaBeta = (evt) => {
        this.repos = this.repos.sort(function(a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
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
}


export default new GithubStore();