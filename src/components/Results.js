import React, { Component } from 'react'
import axios from 'axios';

import VideoItem from './VideoItem';
import loading from './loading.gif';

export class Results extends Component {
    state = {
        videos: [],
        keyword: '',
        isLoading: true
    }

    async searchVideos(whatToSearchFor) {
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    q: whatToSearchFor,
                    part: 'snippet',
                    maxResults: 10,
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

    getQueryString() {
        const textUrl = window.document.location.href;
        const url = new URL(textUrl)

        return url.searchParams.get('search_query');
    }

    setPageTitle() {
        window.document.title = `${this.state.keyword} - YouTube`;
    }

    async componentDidMount() {
        const keywordToSearchFor = this.getQueryString(); // trim
        const videos = await this.searchVideos(keywordToSearchFor);

        this.setState({
            videos: videos.map(v => v.id.videoId),
            keyword: keywordToSearchFor
        });

        this.setPageTitle();
    }

    finishedLoading = (videoId) => {
        const lastVideo = this.state.videos[this.state.videos.length - 1];
        const isLastVideo = videoId === lastVideo;

        if (isLastVideo) this.setState({ isLoading: false })
    }

    whileLoadingShowAnimation() {
        if (this.state.isLoading)
            return <img src={loading} alt="loading..." width="70px" />
    }

    render() {
        return (
            <div className="container w-75">
                <h1 className="h5 mb-5"><span className="text-muted">Searched For:</span> {this.state.keyword}</h1>

                {this.whileLoadingShowAnimation()}

                {this.state.videos.map((videoId, i) => {
                    return <VideoItem key={i} id={videoId} finishedLoading={this.finishedLoading} showDescription={true} />;
                })}
            </div>
        );
    }
}

export default Results
