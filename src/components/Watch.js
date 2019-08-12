import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown, faShare, faEllipsisH, faBars} from '@fortawesome/free-solid-svg-icons';
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
                    <div className="col-7 pr-0">
                        <iframe
                            frameBorder='0'
                            title={videoId}
                            allowFullScreen
                            width="800px"
                            height="500px"
                            src={`https://www.youtube.com/embed/${videoId}`}
                        >
                        </iframe>
                        <div className="mt-3">
                            <h3 className="video-title h6">Python for Everybody - Full Course with Dr. Chuck</h3>
                            <p style={{fontSize: '.93rem'}}  className="text-muted">450,155 views</p>

                            <div style={iconsStyle} className="icons text-muted text-light float-right">
                                <span style={{borderBottom: '2px solid grey', paddingBottom: '3.8%'}}>
                                <span className="ml-3"><FontAwesomeIcon icon={faThumbsUp} /> {' 184k'}</span>
                                <span className="ml-3"><FontAwesomeIcon icon={faThumbsDown} /> {' 122   '}</span>
                                </span>
                                <span className="ml-3"><FontAwesomeIcon icon={faShare} /> {' SHARE   '}</span>
                                <span className="ml-3"><FontAwesomeIcon icon={faBars} />{' SAVE   '}</span>
                                <span className="ml-3"><FontAwesomeIcon icon={faEllipsisH} /> {}</span>
                            </div>
                        </div>
                        <hr />
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


const iconsStyle = {
    marginTop: '-4%',
    fontSize: '.9rem',
    color: '#6c757dc2 !important'
}