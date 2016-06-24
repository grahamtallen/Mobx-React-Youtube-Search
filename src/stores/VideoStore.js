/**
 * Created by grahamallen on 6/21/16.
 */
import { observable, autorun } from 'mobx'
import YTSearch from 'youtube-api-search'
const API_KEY = "AIzaSyDN8R0gS8T29nr6aFgYXKyGLwe42BRTkok";
import $ from 'jquery'

class VideoStore {


    @observable videos = [{
        id: {},
        snippet: {
            title: "",
            description: "",
            etag: "1",
            thumbnails: {
                default: {
                    url: ""
                }
            }
        }
    }];
    @observable selectedVideo = this.videos[0];
    @observable searchTerm = '';
    @observable user = {
        avatar_url: "",
        name: "Loading..."
    };


    search = (term) => {
            if (term === '' ) {
                return
            }
            var url = "https://api.github.com/users/" + term;
            $.ajax({
                url: url,
                success: (data) => {
                    console.log(data);
                    this.user = data;
                }
            })
        };



}


export default new VideoStore();