/**
 * Created by grahamallen on 6/21/16.
 */
import { observable, autorun } from 'mobx'
import YTSearch from 'youtube-api-search'
const API_KEY = "AIzaSyDN8R0gS8T29nr6aFgYXKyGLwe42BRTkok";

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


    constructor() {

        autorun(() => {
            if (this.searchTerm === '' ) {
                return
            }
            YTSearch({key: API_KEY, term: this.searchTerm}, (videos) => {
                this.videos = videos;
                this.selectedVideo = this.videos[0];
            });
        });
    }

    getVideoUrl = (video) => {
        const videoId = video.id.videoId;
        if (videoId) {
            const url = `https://www.youtube.com/embed/${videoId}`;
            return url
        } else {
            return ""
        }
    }

}


export default new VideoStore();