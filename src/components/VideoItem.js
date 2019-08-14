import React, { Component } from 'react';
import moment from 'moment';
import abbreviate from 'number-abbreviate';

export class VideoItem extends Component {

    getDuration() {
        let duration = this.props.info.contentDetails.duration;
        duration = {
            seconds: moment.duration(duration).seconds(),
            minutes: moment.duration(duration).minutes(),
            hours: moment.duration(duration).hours()
        }

        return duration;
    }

    getviews() {
        let viewsNumber = this.props.info.statistics.viewCount;
        viewsNumber = abbreviate(viewsNumber, 1);
        console.log(viewsNumber)
        return viewsNumber;
    }

    render() {
        const duration  = this.getDuration();
        const views  = this.getviews();
        const {
            id,
            title,
            // channelId,
            channelTitle,
            // description,
            // publishedAt,
            // thumbnails,
        } = this.props.info;
        

        return (
            <div className="my-3 container-fluid" style={{position: 'relative'}}>
                <div className="row">
                <div className="thumbnail col-5 p-0" style={thumbNailStyle}>
                    <img
                        style={thumbnailImgStyle}
                        src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                        alt=""
                        height={'94px'}
                        width={'168px'}
                    />
                    <span className="duration-badge badge badge-dark" style={durationStyle}>
                        {duration.hours <= 0 ? '' : duration.hours + ':'}
                        {duration.minutes <= 0 ? '' : duration.minutes + ':'}
                        {duration.seconds <= 0 ? '00' : duration.seconds}
                    </span>
                 </div>
                 <div className="col p-0" style={titleStyle}>
                    <p className="title text-bolder m-0" style={titleStyle}>{title}</p>
                    <p className="channelTitle text-muted p-0 m-0" style={titleStyle}>{channelTitle}</p>
                    <p className="views text-muted p-0 m-0" style={titleStyle}>{views}</p>
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
    fontWeight: 'bold'
}

const thumbNailStyle = {
    display: 'grid',
    height: '94px',
    width: '168px'
}

const thumbnailImgStyle = {
    gridColumn: '1/100',
    gridRow: '1/100'
}

const durationStyle = {
    gridColumn: '85/90',
    gridRow: '90/95'
}




// videos thumbnail
// https://img.youtube.com/vi/<insert-youtube-video-id-here>/0.jpg
// https://img.youtube.com/vi/<insert-youtube-video-id-here>/1.jpg
// https://img.youtube.com/vi/<insert-youtube-video-id-here>/2.jpg
// https://img.youtube.com/vi/<insert-youtube-video-id-here>/3.jpg
// https://img.youtube.com/vi/A2FsgKoGD04/mqdefault.jpg // without black stripes