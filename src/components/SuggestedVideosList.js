import React, { Component } from 'react';

import axios from 'axios';
import VideoItem from './VideoItem';

import loading from './loading.gif';

export class SuggestedVideosList extends Component {
    state = {
        suggestedVideos: [],
        isLoading: true
    }

    async youtubeAPICall() {
        const res = {
            "items": [
                {
                    "id": {
                        "videoId": "by3yRdlQvzs"
                    }
                },
                {
                    "id": {
                        "videoId": "2zn4dAuZ2RU"
                    }
                },
                {
                    "id": {
                        "videoId": "9bgap3QMwSo"
                    }
                },
                {
                    "id": {
                        "videoId": "UdLQwzofhMo"
                    }
                },
                {
                    "id": {
                        "videoId": "Jqs5EaAaueA"
                    }
                },
                {
                    "id": {
                        "videoId": "JfGD75vHWrU"
                    }
                },
                {
                    "id": {
                        "videoId": "b9yJk4jP6-8"
                    }
                },
                {
                    "id": {
                        "videoId": "mi9aLWGeYtk"
                    }
                },
                {
                    "id": {
                        "videoId": "VPeWDg6B4sI"
                    }
                }
            ]
        }
        return res;

        const response =  await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: '10',
                relatedToVideoId: this.props.videoId,
                // key: 'AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM',
                key: 'AIzaSyDux7GMJzNTJPzmWbbm1juDOaLtKKAZf-A',
                fields: 'items(id(videoId))'
            }
        });

        return response.data;
    }

    async componentDidMount() {
        const response = await this.youtubeAPICall();

        this.setState({
            suggestedVideos: response.items.map(v => v.id.videoId)
        });
    }

    finishedLoading = () => {
        this.setState({
            isLoading: false
        })
    }

    whileLoadingShowAnimation() {
        if(this.state.isLoading)
            return <img src={loading} alt="loading..." width="70px"/> 
    }
    
    render() {
        this.whileLoadingShowAnimation();

        return (
            <div>
                <div>
                    Up next
                    <form className="form-inline range-field d-inline float-right">
                        <label className="text-muted font-weight-bold" htmlFor="auto-play">
                            <small>AUTOPLAY &nbsp;</small>
                            <input 
                                style={{width: '30px'}} 
                                id="auto-play" 
                                type="range" 
                                className="custom-range" 
                                min="0" max="1"
                            />    
                        </label>
                    </form>
                </div>
                {this.state.suggestedVideos.map((videoId, i) => {
                    if (i === 0) {
                        return (
                            <React.Fragment key={videoId}>
                                <VideoItem key={videoId} id={videoId} finishedLoading={this.finishedLoading} />
                                <hr  />
                            </React.Fragment>
                        );
                    }

                    return <VideoItem key={videoId} id={videoId} finishedLoading={this.finishedLoading} />
                })}
            </div>
        )
    }
}

export default SuggestedVideosList