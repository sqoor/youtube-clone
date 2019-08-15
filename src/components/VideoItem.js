import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import abbreviate from 'number-abbreviate';

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
        }
    }

    async youtubeAPICall() {

        const res = {"items": [
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
        ]}

        return res.items[0];

        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                id: this.props.id,
                part: 'statistics,contentDetails',
                key: 'AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM',
                fields: 'items(id,snippet(title, channelId,channelTitle),statistics(viewCount),contentDetails(duration))'
            }
        });
        return response.data.items[0];
    }

    formatDuration(duration) {
        return  {
            seconds: moment.duration(duration).seconds(),
            minutes: moment.duration(duration).minutes(),
            hours: moment.duration(duration).hours()
        }
    }

    formatViews(viewsNumber) {
        return abbreviate(viewsNumber, 1)
    }

    async componentDidMount() {
        const video = await this.youtubeAPICall();
       
        this.setState({
            video: {
                id: video.id,
                title: video.snippet.title,
                duration: this.formatDuration(video.contentDetails.duration),
                viewCount: this.formatViews(video.statistics.viewCount),
                channelId: video.snippet.channelId,
                channelTitle: video.snippet.channelTitle
            }
        });
    }

    openVideo = () => {
        console.log('open video clicked')
    }

    render() {
        const { 
            id,
            title,
            duration,
            viewCount,
            channelTitle
        } = this.state.video;

        return (
            <div className="my-3 container-fluid" style={{ position: 'relative' }}>
                <div className="row">
                    <div
                        onClick={this.openVideo}  
                        className="thumbnail col-5 p-0"
                        style={thumbNailStyle}
                    >
                        <img
                            style={thumbnailImgStyle}
                            src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                            alt=""
                        />
                        
                        {duration ?
                            <span className="duration-badge badge badge-dark" style={durationStyle}>
                                {duration.hours <= 0 ? '' : duration.hours + ':'}
                                {duration.minutes <= 0 ? '' : duration.minutes + ':'}
                                {duration.seconds <= 0 ? '00' : duration.seconds}
                            </span>
                        : ''}

                    </div>
                    <div
                        onClick={this.openVideo}  
                        className="col p-0"
                        style={titleStyle}
                    >
                        <p className="title text-bolder m-0" style={titleStyle}>{title}</p>
                        <p className="channelTitle text-muted p-0 m-0" style={titleStyle}>{channelTitle}</p>
                        <p className="views text-muted p-0 m-0" style={titleStyle}>{viewCount}</p>
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


// To Do:

// routing in react
// 1- click on video item open it on watch page
// 2- build search items pages
// 3- build homepage - popular videos


// 4- build comments in watch page

// not very important
// 5- scroll down load more videos
// 6- convert links in string into <a> elements
// 7- fix the iframe of the watch component