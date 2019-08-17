import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import abbreviate from 'number-abbreviate';

import loading from './loading.gif';

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
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
                params: {
                    id: this.props.id,
                    part: 'snippet,statistics,contentDetails',
                    // key: 'AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM',
                    // key: 'AIzaSyDux7GMJzNTJPzmWbbm1juDOaLtKKAZf-A',
                    key: 'AIzaSyDgIMKseEYKN1i_wfmyC8rJgauscJd8Fqw',
                    fields: 'items(id,snippet(title, channelId,channelTitle,description),statistics(viewCount),contentDetails(duration))'
                }
            });

            return response.data.items[0];
        }
        catch (err) {
            console.log(err);
        }
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
        if (this.state.isLoading)
            return <img src={loading} alt="loading..." width="70px" />
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

        const { showDescription } = this.props;

        if (this.state.isLoading) {
            return (
                <div className="my-3 container-fluid" style={{ position: 'relative' }}>
                    <div className="row">
                        <img src={loading} alt="loading..." width="70px" />
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
                                    {duration.seconds <= 0 ? '00' : duration.seconds < 9 ? '0' + duration.seconds : duration.seconds }
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
                            : null}
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
