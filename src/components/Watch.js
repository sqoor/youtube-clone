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
        const videoId = videos.length > 0 ? videos[0].id.videoId : 'qlzVPauUgw8';
        const videoDetails = videos.length > 0 ? videos[0].snippet : 'emtpy'

        console.log('vidoeId', this.props.videos.items ? this.props.videos.items[0].id.videoId : 'empty');
        console.log('details', videoDetails);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <iframe
                            title={videoId}
                            allowFullScreen
                            width="800px"
                            height="500px"
                            src={`https://www.youtube.com/embed/${videoId}`}
                        >
                        </iframe>
                    </div>
                    <div className="col-3">
                        <SuggestedVideosList videoId={videoId} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <VideoDetails details={videoDetails} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Watch
