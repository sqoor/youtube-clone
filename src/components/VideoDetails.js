import React, { Component } from 'react';
import abbrivate from 'number-abbreviate';

export class VideoDetails extends Component {
    // get subscribers count of channel and the thumbnail of the channel
    // https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCcN-NDV03eHs6oLd1pe2r8w&fields=items(snippet(thumbnails(default(url))),statistics(subscriberCount))&key=AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM

    // response: 
    // {
    //     "items": [
    //         {
    //             "snippet": {
    //                 "thumbnails": {
    //                     "default": {
    //                         "url": "https://yt3.ggpht.com/a/AGF-l79VPeDUmOS-auFj9O004tGgKszXguIG9TY-iQ=s88-c-k-c0xffffffff-no-rj-mo"
    //                     }
    //                 }
    //             },
    //             "statistics": {
    //                 "subscriberCount": "2399839"
    //             }
    //         }
    //     ]
    // }


    getPublishedAt() {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(this.props.details.publishedAt).toLocaleDateString("en-US", options)
    }

    getDescription() {
        let description = this.props.details.description
        description = description.split('\n');

        return description.length > 1 ? description[0] : description;
    }

    getIsDescriptionNotLong() {
        let description = this.props.details.description
        description = description.split('\n');

        return description.length > 1 ? false : true;
    }

    toggleFullDescription = (e) => {
        if (e.target.innerText === 'SHOW MORE') {
            e.target.innerText = 'SHOW LESS';
            e.target.parentElement.parentElement.children[0].innerText = this.props.details.description;
            return;
        }

        e.target.innerText = 'SHOW MORE';
        e.target.parentElement.parentElement.children[0].innerText = this.props.details.description.split('\n')[0];
    }

    getChannelDetails() {
        const youtubeAPI = {
            "items": [
                {
                    "snippet": {
                        "thumbnails": {
                            "default": {
                                "url": "https://yt3.ggpht.com/a/AGF-l79VPeDUmOS-auFj9O004tGgKszXguIG9TY-iQ=s88-c-k-c0xffffffff-no-rj-mo"
                            }
                        }
                    },
                    "statistics": {
                        "subscriberCount": "2399839"
                    }
                }
            ]
        };

        const thumbnail = youtubeAPI.items[0].snippet.thumbnails.default.url;
        const subscriberCount = abbrivate(youtubeAPI.items[0].statistics.subscriberCount, 1);

        return { thumbnail, subscriberCount };
    }

    render() {
        const { channelId, channelTitle, publishedAt, description } = this.props.details;

        return (
            <div style={{ border: '0px solid red' }}>
                <div style={channelDetailsStyle} className="channel-detail">
                    <div>
                        <img
                            style={imgStyle}
                            src={channelId ? this.getChannelDetails().thumbnail : ''}
                        />
                    </div>
                    <div>
                        <h3 className="h6 font-weight-bolder d-inline mb-0">{channelTitle}</h3>
                        <p style={{ marginTop: '-8px' }} className="text-muted" >
                            <small>
                                Published on {publishedAt ? this.getPublishedAt() : ''}
                            </small>
                        </p>
                        <div className="mt-2" style={{ whiteSpace: 'pre' }}>
                            <div>
                                {description ? this.getDescription() : ''}
                            </div>
                            <a className="text-muted d-block mt-5">
                                <small
                                    onClick={this.toggleFullDescription}
                                    style={{ cursor: 'pointer' }}
                                    hidden={description ? this.getIsDescriptionNotLong() : true}
                                >
                                    SHOW MORE
                                </small>
                            </a>
                        </div>
                    </div>
                    <div>
                        <button style={buttonStyle}>SUBSCRIBE {channelId ? this.getChannelDetails().subscriberCount : ''}</button>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default VideoDetails

const channelDetailsStyle = {
    display: 'grid',
    gridTemplateColumns: '7% 73% 20%',
    gridTemplateRows: 'auto'
};

const imgStyle = {
    borderRadius: '50%',
    width: '2.7rem',
    height: '2.7rem'
};

const buttonStyle = {
    fontSize: ".85rem",
    float: 'right',
    padding: '7px',
    border: '1px solid red',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'red'
};


// channel img and subscripers