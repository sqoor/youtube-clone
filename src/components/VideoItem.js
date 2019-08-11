import React, { Component } from 'react'

export class VideoItem extends Component {
    render() {
        const {title} = this.props.info;

        // console.log(this.props.info);
        // console.log('video title', videoTitle)
        // console.log('channel title', channelTitle)
        // console.log('video views', videoViews)
        // console.log('video thumbnail', videoThumbnail)
        // console.log('video time created', videoTime)
        // console.log('video duration', videoDuration) // statistics


        return (
            <div>
                {title}
            </div>
        )
    }
}

export default VideoItem
