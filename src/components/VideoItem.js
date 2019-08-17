import React, { Component } from 'react';

import axios from 'axios';
import moment from 'moment';
import abbreviate from 'number-abbreviate';

import loading from './loading.gif';

/*
    // id title views duration, channelId, channelTitle
    // request 
    // https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=2e9diL0xTN4&fields=items(statistics(viewCount),contentDetails(duration))&key=AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM
    https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=2e9diL0xTN4&fields=items(id,snippet(title, channelId,channelTitle),statistics(viewCount),contentDetails(duration))&key=AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM
    // reponse 
       {
    "items": [
        {
            "id": "2e9diL0xTN4",
            "snippet": {
                "channelId": "UCcN-NDV03eHs6oLd1pe2r8w",
                "title": "Khalid - OTW (Official Video) ft. 6LACK, Ty Dolla $ign",
                "channelTitle": "KhalidVEVO"
            },
            "contentDetails": {
                "duration": "PT4M17S"
            },
            "statistics": {
                "viewCount": "108758288"
            }
        }
    ]
}

        */

export class VideoItem extends Component {
    state = {
        video: {
            id: '',
            title: '',
            duration: {},
            viewCount: '',
            channelId: '',
            channelTitle: '',
            description: '',
        },
        watchVideo: false,
        isLoading: true
    }

    async youtubeAPICall() {

        const res = {
            "items": [
                {
                    "id": "2e9diL0xTN4",
                    "snippet": {
                        "channelId": "UCcN-NDV03eHs6oLd1pe2r8w",
                        "title": "Khalid - OTW (Official Video) ft. 6LACK, Ty Dolla $ign",
                        "channelTitle": "KhalidVEVO",
                        "description": "Khalid feat. Ty Dolla $ign & 6LACK - OTW (Official Video) Out Now!  http://smarturl.it/XOTW\n \n \nFollow Khalid:\nhttps://www.facebook.com/thegreatkhalid\nhttps://twitter.com/thegreatkhalid\nhttps://www.instagram.com/thegr8khalid/\n \nFollow 6lack:\nhttps://www.facebook.com/6LACK/\nhttps://twitter.com/6LACK\nhttps://www.instagram.com/6lack/\n \nFollow Ty Dolla $ign:\nhttps://www.facebook.com/tydollasign/\nhttps://twitter.com/tydollasign\nhttps://www.instagram.com/tydollasign/"
                    },
                    "contentDetails": {
                        "duration": "PT4M17S"
                    },
                    "statistics": {
                        "viewCount": "108758288"
                    }
                }
            ]
        }

        return res.items[0];


        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                id: this.props.id,
                part: 'snippet,statistics,contentDetails',
                // key: 'AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM',
                key: 'AIzaSyDux7GMJzNTJPzmWbbm1juDOaLtKKAZf-A',
                fields: 'items(id,snippet(title, channelId,channelTitle,description),statistics(viewCount),contentDetails(duration))'
            }
        });

        console.log('this.props', this.props)
        console.log('response.data.items',response.data.items);
        return response.data.items[0];
    }

    formatDuration(duration) {
        return {
            seconds: moment.duration(duration).seconds(),
            minutes: moment.duration(duration).minutes(),
            hours: moment.duration(duration).hours()
        }
    }

    formatViews(viewsNumber) {
        return abbreviate(viewsNumber, 1)
    }

    finishedLoading = () => {
        this.setState({
            isLoading: false
        })
    }
    async componentDidMount() {
        const video = await this.youtubeAPICall();
        console.log('video', video);

        this.setState({
            video: {
                id: video.id,
                title: video.snippet.title,
                duration: this.formatDuration(video.contentDetails.duration),
                viewCount: this.formatViews(video.statistics.viewCount),
                channelId: video.snippet.channelId,
                channelTitle: video.snippet.channelTitle,
                description: video.snippet.description
            }
        });

        this.props.finishedLoading(this.props.id);
        this.finishedLoading();
    }

    openVideo = () => {
        window.location.href = `/watch?v=${this.state.video.id}`
        this.setState({ watchVideo: true });
    }

    

    whileLoadingShowAnimation() {
        if(this.state.isLoading)
            return <img src={loading} alt="loading..." width="70px"/> 
    }

    render() {
        const {
            id,
            title,
            duration,
            viewCount,
            channelTitle,
            description
        } = this.state.video;

        const {showDescription} = this.props;


        if(this.state.isLoading) {
            return (
                <div className="my-3 container-fluid" style={{ position: 'relative' }}>
                    <div className="row">
                        <img src={loading} alt="loading..." width="70px"/> 
                    </div>
                </div>
            )
        }

        return (
            <div className="my-3 container-fluid" style={{ position: 'relative' }}>
                <div className="row">
                    <div
                        onClick={this.openVideo}
                        className="thumbnail p-0"
                        style={thumbNailStyle}
                    >
                        {
                            id ?
                                <img
                                    style={thumbnailImgStyle}
                                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                                    alt=""
                                />
                                : ''
                        }

                        {
                            duration ?
                                <span className="duration-badge badge badge-dark" style={durationStyle}>
                                    {duration.hours <= 0 ? '' : duration.hours + ':'}
                                    {duration.minutes <= 0 ? '' : duration.minutes + ':'}
                                    {duration.seconds <= 0 ? '00' : duration.seconds}
                                </span>
                                : ''
                        }

                    </div>
                    <div
                        onClick={this.openVideo}
                        className="col p-0 pl-2"
                        style={titleStyle}
                    >
                        <p className="title text-bolder m-0" style={titleStyle}>{title}</p>
                        <p className="channelTitle text-muted p-0 m-0" style={titleStyle} >{channelTitle}</p>
                        <p className="views text-muted p-0 m-0" style={titleStyle}>{viewCount}</p>
                        {showDescription ? 
                             <p className="views text-muted p-0 m-0" style={titleStyle}>{description.slice(0, 68) + '...'}</p>
                            : null }
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoItem

const titleStyle = {
    display: 'absolute',
    top: '0',
    fontSize: '.8rem',
    fontWeight: 'bold',
    cursor: 'pointer'
}

const thumbNailStyle = {
    display: 'grid',
    height: '94px',
    width: '168px',
    cursor: 'pointer'
}

const thumbnailImgStyle = {
    gridColumn: '1/100',
    gridRow: '1/100',
    height: '94px',
    width: '168px'
}

const durationStyle = {
    gridColumn: '85/90',
    gridRow: '90/95'
}
