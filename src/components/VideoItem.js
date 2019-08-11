import React, { Component } from 'react'

export class VideoItem extends Component {
    render() {
        const {
            id,
            title,
            channelId,
            channelTitle,
            description,
            publishedAt,
            thumbnails
        } = this.props.info;

        console.log(id);
        

        // videos thumbnail
        // https://img.youtube.com/vi/<insert-youtube-video-id-here>/0.jpg
        // https://img.youtube.com/vi/<insert-youtube-video-id-here>/1.jpg
        // https://img.youtube.com/vi/<insert-youtube-video-id-here>/2.jpg
        // https://img.youtube.com/vi/<insert-youtube-video-id-here>/3.jpg
        // https://img.youtube.com/vi/A2FsgKoGD04/mqdefault.jpg // without black stripes

        return (
            <div style={{position: 'relative', margin: '20px'}}>
                <img 
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                    height={'94px'}
                    width={'168px'}
                 />
                 <p style={{display: 'inline', position: 'absolute', top: '0', marginLeft: '8px'}}>{title}</p>
                 
            </div>
        )
    }
}

export default VideoItem
