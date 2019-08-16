import React, { Component } from 'react'
import axios from 'axios';

import VideoItem from './VideoItem';

export class Results extends Component {
    state = {
        videos: [],
        keyword: ''
    }

    async searchVideos(whatToSearchFor) {
        const res = [
            {
                "id": "qlzVPauUgw8"
            },
            {
                "id": "A2FsgKoGD04"
            },
            {
                "id": "VRJmcxCrAOA"
            },
            {
                "id": "hHW1oY26kxQ"
            },
            {
                "id": "VNM7Z7hir_I"
            },
            {
                "id": "1Za8BtLgKv8"
            },
            {
                "id": "TcMBFSGVi1c"
            },
            {
                "id": "pk7ESz6vtyA"
            },
            {
                "id": "z2VZ_OGz0RU"
            },
            {
                "id": "rg_zwK_sSEY"
            }
        ]
        return res; 


        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q: whatToSearchFor,
                part: 'snippet',
                maxResults: 10,
                key: 'AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM'
            }
        });

        return response.data.items[0];
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
            videos: videos.map(v => v),
            keyword: keywordToSearchFor
        });

        this.setPageTitle();

        console.log('keywordToSearchFor', keywordToSearchFor);
        console.log('videos', videos)
        console.log('this.state', this.state);
    }


    render() {
        return (
            <div className="container w-75">
                <h1 className="h5">Searched For: {this.state.keyword}</h1>
               

                {
                    this.state.videos.map((videoId, i) => {
                        return <VideoItem key={i} id={videoId} />;
                    })
                }
            </div>
        )
    }
}

export default Results
