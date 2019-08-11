import React, { Component } from 'react';
import axios from 'axios';
import VideoItem from './VideoItem';
// import Watch from './Watch';

export class SuggestedVideosList extends Component {
    state = {
        suggestedVideos: []
    }

    componentDidMount(whatSearchFor) {
        axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                type: 'video',
                relatedToVideoId: this.props.videoId,
                key: 'AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM'
            }
        })
            .then(response => {
                console.log('response:', response);
                this.setState({
                    suggestedVideos: response.data.items.map(v => {
                        return {
                            id: v.id.videoId,
                            title: v.snippet.title,
                            channelId: v.snippet.channelId,
                            channelTitle: v.snippet.channelTitle,
                            description: v.snippet.description,
                            publishedAt: v.snippet.publishedAt,
                            thumbnails: v.snippet.thumbnails,
                        }
                    })
                });
            })
            .catch(error => {
                console.log(error);
                throw new Error(error);
            });
    }

    render() {
        console.log('videoId: suggested video', this.props.videoId)

        return (
            <div style={{ border: '1px solid red' }}>
                Suggested Video List
                {this.state.suggestedVideos.map((v, i) => <VideoItem key={i} info={v}/>)}
            </div>
        )
    }
}

export default SuggestedVideosList
