import React, { Component } from 'react';
import axios from 'axios';

import VideoItem from './VideoItem';
import loading from './loading.gif';


export class Home extends Component {
    state = {
        videos: [],
        isLoading: true
    }

    async youtubeApiCall() {
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    type: 'video',
                    maxResults: '10',
                    chart: 'mostPopular',
                    // regionCode: 'JO',
                    // relevanceLanguage: 'ar',
                    fields: 'items(id(videoId))',
                    // key: 'AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM',
                    // key: 'AIzaSyDux7GMJzNTJPzmWbbm1juDOaLtKKAZf-A',
                    key: 'AIzaSyDgIMKseEYKN1i_wfmyC8rJgauscJd8Fqw',
                }
            });

            return response.data.items;
        }
        catch (err) {
            console.log(err);
        }
    }

    async componentDidMount() {
        const response = await this.youtubeApiCall();

        this.setState({
            videos: response.map(obj => obj.id.videoId)
        });
    }

    finishedLoading = (videoId) => {
        const lastVideo = this.state.videos[this.state.videos.length - 1];
        const isLastVideo = videoId === lastVideo;

        if (isLastVideo) this.setState({ isLoading: false })
    }

    whileLoadingShowAnimation() {
        if (this.state.isLoading) return <img src={loading} alt="loading..." width="70px" />
    }

    render() {
        this.whileLoadingShowAnimation();

        return (
            <div className="container w-75">
                <h1 className="h5">Popular Videos</h1>
                {
                    this.state.videos.map((id, i) => {
                        return <VideoItem key={i} id={id} finishedLoading={this.finishedLoading} showDescription={true} />;
                    })
                }
            </div>
        )
    }
}

export default Home