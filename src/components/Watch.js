import React, { Component } from 'react';
import commaNumber from 'comma-number';
import abbreviate from 'number-abbreviate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faShare, faEllipsisH, faBars } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

import SuggestedVideosList from './SuggestedVideosList';
import VideoDetails from './VideoDetails';

export class Watch extends Component {
    
// you api call should only request title, views, likes dislikes
// youtube api how to retive only certain fields only.

// request:
//https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=2e9diL0xTN4&fields=items(snippet(title),statistics(viewCount, likeCount, dislikeCount))&key=AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM
//https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=2e9diL0xTN4&fields=items(id, snippet(title),statistics(viewCount, likeCount, dislikeCount))&key=AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM
// response
// {
//     
// }

youtubeAPI = {
    "items": [
        {
            "id": "2e9diL0xTN4",
            "snippet": {
                "title": "Khalid - OTW (Official Video) ft. 6LACK, Ty Dolla $ign"
            },
            "statistics": {
                "viewCount": "108602718",
                "likeCount": "706465",
                "dislikeCount": "26502"
            }
        }
    ]
}

state = {
        video: {}
    }
    
    render() {
        const videoId = this.youtubeAPI.items[0].id;
        const title = this.youtubeAPI.items[0].snippet.title;
        const views = commaNumber(this.youtubeAPI.items[0].statistics.viewCount);
        const likes = abbreviate(this.youtubeAPI.items[0].statistics.likeCount);
        const dislikes = abbreviate(this.youtubeAPI.items[0].statistics.dislikeCount);
                
        console.log('id', videoId);
        console.log('title', title);
        console.log('views', views);
        console.log('likes', likes);
        console.log('dislikes', dislikes);

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
                            <h3 className="video-title h6">{title}</h3>
                            <p style={{ fontSize: '.93rem' }} className="text-muted">{views} views</p>
                            <div style={iconsStyle} className="icons text-muted text-light float-right">
                                <span style={{ borderBottom: '2px solid grey', paddingBottom: '3.8%' }}>
                                    <span className="ml-3"><FontAwesomeIcon icon={faThumbsUp} /> {likes}</span>
                                    <span className="ml-3"><FontAwesomeIcon icon={faThumbsDown} /> {dislikes}</span>
                                </span>
                                <span className="ml-3"><FontAwesomeIcon icon={faShare} /> {'SHARE'}</span>
                                <span className="ml-3"><FontAwesomeIcon icon={faBars} />{'SAVE'}</span>
                                <span className="ml-3"><FontAwesomeIcon icon={faEllipsisH} /> {}</span>
                            </div>
                        </div>
                        <hr />
                        <div>
                            {/* <VideoDetails details={videoDetails} /> */}
                        </div>
                    </div>
                    <div className="col-4 ml-5">
                        {/* <SuggestedVideosList videoId={videoId} /> */}
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