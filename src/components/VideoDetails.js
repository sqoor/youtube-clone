import React, { Component } from 'react'

export class VideoDetails extends Component {
    render() {
        console.log('description', this.props.details.description);
        return (
            <div style={{ border: '1px solid red' }}>
                <div style={channelDetailsStyle} className="channel-detail">
                    <div>
                    <img style={{ borderRadius: '50%', width: '2.7rem', height: '2.7rem' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMq9Jx53a62NI7mBaH4gPD2Mh91DSzBcU0soPY6rfiMkBtSFld" />
                    </div>
                    <div>
                        <h3 className="h6 font-weight-bolder d-inline mb-0">Khalid</h3>
                        <p style={{ marginTop: '-8px' }} className="text-muted" ><small>Published on Jul 3, 2019</small></p>
                        <div className="mt-2">
                            Description

                            These words here suppose to be the the video discription and tell what the video about
                        
                        
                            <a className="text-muted d-block mt-5"><small>SHOW MORE</small></a>
                        </div>
                    </div>
                    <div>
                        <button style={{ fontSize: ".85rem", float: 'right', padding: '7px', border: '1px solid red', fontWeight: 'bold', color: 'white', backgroundColor: 'red' }}>SUBSCRIBE 6.6M</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoDetails

const channelDetailsStyle = {
    display: 'grid',
    gridTemplateColumns : '7% 73% 20%',
    gridTemplateRows: 'auto'
}
