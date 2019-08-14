import React, { Component } from 'react';
import axios from 'axios';
import commaNumber from 'comma-number';
import abbreviate from 'number-abbreviate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faShare, faEllipsisH, faBars } from '@fortawesome/free-solid-svg-icons';

// import SuggestedVideosList from './SuggestedVideosList';
import VideoDetails from './VideoDetails';

export class Watch extends Component {

    /*
    // you api call should only request title, views, likes dislikes
    // youtube api how to retive only certain fields only.
    // we need channelId channelTitle publishedAt and description to be passed to the details component
    // request:
    //https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=2e9diL0xTN4&fields=items(snippet(title),statistics(viewCount, likeCount, dislikeCount))&key=AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM
    //https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=2e9diL0xTN4&fields=items(id, snippet(title),statistics(viewCount, likeCount, dislikeCount))&key=AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM
    // https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=2e9diL0xTN4&fields=items(id, snippet(title, channelId, channelTitle, publishedAt, description),statistics(viewCount, likeCount, dislikeCount))&key=AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM
    // response
    // const youtubeAPI = {
    //     "items": [
    //         {
    //             "id": "2e9diL0xTN4",
    //             "snippet": {
    //                 "publishedAt": "2018-07-03T14:00:00.000Z",
    //                 "channelId": "UCcN-NDV03eHs6oLd1pe2r8w",
    //                 "title": "Khalid - OTW (Official Video) ft. 6LACK, Ty Dolla $ign",
    //                 "description": "Khalid feat. Ty Dolla $ign & 6LACK - OTW (Official Video) Out Now!  http://smarturl.it/XOTW\n \n \nFollow Khalid:\nhttps://www.facebook.com/thegreatkhalid\nhttps://twitter.com/thegreatkhalid\nhttps://www.instagram.com/thegr8khalid/\n \nFollow 6lack:\nhttps://www.facebook.com/6LACK/\nhttps://twitter.com/6LACK\nhttps://www.instagram.com/6lack/\n \nFollow Ty Dolla $ign:\nhttps://www.facebook.com/tydollasign/\nhttps://twitter.com/tydollasign\nhttps://www.instagram.com/tydollasign/",
    //                 "channelTitle": "KhalidVEVO"
    //             },
    //             "statistics": {
    //                 "viewCount": "108605498",
    //                 "likeCount": "706485",
    //                 "dislikeCount": "26505"
    //             }
    //         }
    //     ]
    // }

    */

    state = {
        video: {
            id: '',
            title: '',
            views: '',
            likes: '',
            dislikes: ''
        }
    }

    async youtubeAPICall() {

        const youtubeAPI = {
            "items": [
                {
                    "id": "2e9diL0xTN4",
                    "snippet": {
                        "publishedAt": "2018-07-03T14:00:00.000Z",
                        "channelId": "UCcN-NDV03eHs6oLd1pe2r8w",
                        "title": "Khalid - OTW (Official Video) ft. 6LACK, Ty Dolla $ign",
                        "description": "Khalid feat. Ty Dolla $ign & 6LACK - OTW (Official Video) Out Now!  http://smarturl.it/XOTW\n \n \nFollow Khalid:\nhttps://www.facebook.com/thegreatkhalid\nhttps://twitter.com/thegreatkhalid\nhttps://www.instagram.com/thegr8khalid/\n \nFollow 6lack:\nhttps://www.facebook.com/6LACK/\nhttps://twitter.com/6LACK\nhttps://www.instagram.com/6lack/\n \nFollow Ty Dolla $ign:\nhttps://www.facebook.com/tydollasign/\nhttps://twitter.com/tydollasign\nhttps://www.instagram.com/tydollasign/",
                        "channelTitle": "KhalidVEVO"
                    },
                    "statistics": {
                        "viewCount": "108605498",
                        "likeCount": "706485",
                        "dislikeCount": "26505"
                    }
                }
            ]
        }

        return youtubeAPI;

        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: "snippet,statistics",
                // id: "2e9diL0xTN4",
                // id: "WC7H6-U7T34",
                id: "kiPwc_nPHYo",
                key: "AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM",
                fields: "items(id, snippet(title, channelId, channelTitle, publishedAt, description),statistics(viewCount, likeCount, dislikeCount))"
            }
        });

        return response.data;
    }

    async componentDidMount() {
        let youtubeAPI = await this.youtubeAPICall();

        this.setState({
            video: {
                id: youtubeAPI.items[0].id,
                title: youtubeAPI.items[0].snippet.title,
                description: youtubeAPI.items[0].snippet.description,
                publishedAt: youtubeAPI.items[0].snippet.publishedAt,
                channelId: youtubeAPI.items[0].snippet.channelId,
                channelTitle: youtubeAPI.items[0].snippet.channelTitle,
                views: commaNumber(youtubeAPI.items[0].statistics.viewCount),
                likes: abbreviate(youtubeAPI.items[0].statistics.likeCount),
                dislikes: abbreviate(youtubeAPI.items[0].statistics.dislikeCount)
            }
        });
    }

    render() {
        const { id, title, views, likes, dislikes, description, publishedAt, channelId, channelTitle } = this.state.video;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7 pr-0">
                        <iframe
                            frameBorder='0'
                            title={id}
                            allowFullScreen
                            width="800px"
                            height="500px"
                            src={`https://www.youtube.com/embed/${id}`}
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
                            {channelId ? <VideoDetails details={{ description, publishedAt, channelId, channelTitle }} /> : ''}
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



/// bugs text note wraping in details 
/// subsrice numbers error