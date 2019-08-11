import React, { Component } from 'react';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

export class VideoItem extends Component {
    render() {
        const videoId = this.props.videos.items ?
            this.props.videos.items[0].id.videoId :
            'qlzVPauUgw8';

        console.log('vidoeId', this.props.videos.items ? this.props.videos.items[0].id.videoId : 'empty');

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
                        <VideoList />
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                       <VideoDetails />
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoItem
