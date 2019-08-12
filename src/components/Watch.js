import React, { Component } from 'react';
// import axios from 'axios';

import SuggestedVideosList from './SuggestedVideosList';
import VideoDetails from './VideoDetails';

export class Watch extends Component {
    state = {
        video: []
    }

    render() {
        const videos = this.props.videos.items ? this.props.videos.items : [];
        const videoId = videos.length > 0 ? videos[0].id.videoId : '2e9diL0xTN4';
        const videoDetails = videos.length > 0 ? videos[0].snippet : 'emtpy'

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7 mr-5">
                        <iframe
                            frameBorder='0'
                            title={videoId}
                            allowFullScreen
                            width="800px"
                            height="500px"
                            src={`https://www.youtube.com/embed/${videoId}`}
                        >
                        </iframe>
                        <div> 
                            <VideoDetails details={videoDetails} />
                        </div>
                    </div>
                    <div className="col-4 ml-5">
                        <SuggestedVideosList videoId={videoId} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Watch
