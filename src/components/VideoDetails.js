import React, { Component } from 'react'

export class VideoDetails extends Component {
    render() {
        console.log('description', this.props.details.description);
        return (
            <div style={{border: '1px solid red'}}>
                {this.props.details.description}
                
            </div>
        )
    }
}

export default VideoDetails


