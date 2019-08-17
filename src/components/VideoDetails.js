import React, { Component } from 'react';

import axios from 'axios';
import abbrivate from 'number-abbreviate';

/*
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

*/

export class VideoDetails extends Component {

    state = {
        details: {
            publishedAt: '',
            description: '',
            channelId: '',
            channelTitle: '',
            thumbnail: '',
            subscriberCount: '',
            isDescriptionLong: ''
        }
    }

    getPublishedAt = () => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(this.props.details.publishedAt).toLocaleDateString("en-US", options)
    }

    getDescription = () => {
        let description = this.props.details.description
        description = description.split('\n');

        return description.length > 1 ? description[0] : description;
    }

    getIsDescriptionLong = () => {
        let description = this.props.details.description
        description = description.split('\n');

        return description.length > 1 ? true : false;
    }

    async getChannelDetails() {
        const youtubeAPI = await this.youtubeAPICall();
        const thumbnail = youtubeAPI.items[0].snippet.thumbnails.default.url;
        const subscriberCount = abbrivate(youtubeAPI.items[0].statistics.subscriberCount, 1);

        return { thumbnail, subscriberCount };
    }

    youtubeAPICall = async () => {
        const responose = {
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
        }
        return responose;

        const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
            params: {
                part: "snippet,statistics",
                id: this.props.details.channelId,
                key: "AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM",
                fields: "items(snippet(thumbnails(default(url))),statistics(subscriberCount))"
            }
        });

        return response.data;
    }

    async componentDidMount() {
        const { getPublishedAt, getDescription, getIsDescriptionLong } = this;
        const { channelId, channelTitle } = this.props.details;
        const { thumbnail, subscriberCount } = await this.getChannelDetails();

        this.setState({
            details: {
                publishedAt: getPublishedAt(),
                description: getDescription(),
                isDescriptionLong: getIsDescriptionLong(),
                channelId: channelId,
                channelTitle: channelTitle,
                thumbnail: thumbnail,
                subscriberCount: subscriberCount,
            }
        })
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

    render() {
        const {
            channelTitle,
            publishedAt,
            description,
            thumbnail,
            isDescriptionLong,
            subscriberCount
        } = this.state.details;

        return (
            <div style={{ border: '0px solid red' }}>
                <div style={channelDetailsStyle} className="channel-detail">
                    <div>
                        <img
                            style={imgStyle}
                            alt="channel"
                            src={thumbnail}
                        />
                    </div>
                    <div>
                        <h3 className="h6 font-weight-bolder d-inline mb-0">{channelTitle}</h3>
                        <p style={{ marginTop: '-8px' }} className="text-muted" >
                            <small>
                                Published on {publishedAt}
                            </small>
                        </p>
                        <div className="mt-2" style={{ /*whiteSpace: 'pre',*/ overflowWrap: 'break-word' }}>
                            <p>
                                {description}
                            </p>
                            <p className="text-muted d-block mt-5">
                                <small
                                    onClick={this.toggleFullDescription}
                                    style={{ cursor: 'pointer' }}
                                    hidden={isDescriptionLong ? false : true}
                                >
                                    SHOW MORE
                                </small>
                            </p>
                        </div>
                    </div>
                    <div>
                        <button style={buttonStyle}>
                            SUBSCRIBE {subscriberCount}
                        </button>
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
