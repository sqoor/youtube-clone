import React, { Component } from 'react';
import axios from 'axios';
import VideoItem from './VideoItem';
// import Watch from './Watch';

export class SuggestedVideosList extends Component {
    state = {
        suggestedVideos: []
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
                key: 'AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM',
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
    
    render() {
        return (
            <div style={{ border: '0px solid red' }}>
                <div>
                    Up next
                    <form className="form-inline range-field d-inline  float-right">
                        <label className="text-muted font-weight-bold " htmlFor="auto-play">
                            <small>AUTOPLAY &nbsp;</small>
                            <input style={{width: '30px'}} id="auto-play" type="range" className="custom-range" min="0" max="1" />    
                        </label>
                    </form>
                </div>
                {this.state.suggestedVideos.map((v, i) => {
                    if (i === 0)
                        return (<>
                            <VideoItem key={i} id={v} />
                            <hr />
                        </>);

                    return <VideoItem key={i  + 1} id={v} />
                })}
            </div>
        )
    }
}

export default SuggestedVideosList
