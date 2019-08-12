import React, { Component } from 'react';
import axios from 'axios';
import VideoItem from './VideoItem';
// import Watch from './Watch';

export class SuggestedVideosList extends Component {
    state = {
        suggestedVideos: [
            {
                id: '2e9diL0xTN4',
                title: 'Khalid - OTW (Official Video) ft. 6LACK, Ty Dolla $ign',
                channelId: 'UCcN-NDV03eHs6oLd1pe2r8w',
                channelTitle: 'KhalidVEVO',
                description: 'Khalid feat. Ty Dolla $ign & 6LACK - OTW (Official Video) Out Now!  http://smarturl.it/XOTW\n \n \nFollow Khalid:\nhttps://www.facebook.com/thegreatkhalid\nhttps://twitter.com/thegreatkhalid\nhttps://www.instagram.com/thegr8khalid/\n \nFollow 6lack:\nhttps://www.facebook.com/6LACK/\nhttps://twitter.com/6LACK\nhttps://www.instagram.com/6lack/\n \nFollow Ty Dolla $ign:\nhttps://www.facebook.com/tydollasign/\nhttps://twitter.com/tydollasign\nhttps://www.instagram.com/tydollasign/',
                publishedAt: '2018-07-03T14:00:00.000Z',
                thumbnails: {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                statistics: {
                    viewCount: "108416393",
                    likeCount: "705614",
                    dislikeCount: "26465",
                    favoriteCount: "0",
                    commentCount: "14382"
                },
                contentDetails: {
                    duration: "PT4M13S", //The time is formatted as an ISO 8601 string. PT stands for Time Duration, 4M is 4 minutes, and 13S is 13 seconds.
                    dimension: "2d",
                    definition: "hd",
                    caption: "false",
                    licensedContent: true
                }
            },
            {
                id: '8DvywoWv6fI',
                title: "Python for Everybody - Full Course with Dr. Chuck",
                channelId: 'UCcN-NDV03eHs6oLd1pe2r8w',
                channelTitle: 'KhalidVEVO',
                description: 'Khalid feat. Ty Dolla $ign & 6LACK - OTW (Official Video) Out Now!  http://smarturl.it/XOTW\n \n \nFollow Khalid:\nhttps://www.facebook.com/thegreatkhalid\nhttps://twitter.com/thegreatkhalid\nhttps://www.instagram.com/thegr8khalid/\n \nFollow 6lack:\nhttps://www.facebook.com/6LACK/\nhttps://twitter.com/6LACK\nhttps://www.instagram.com/6lack/\n \nFollow Ty Dolla $ign:\nhttps://www.facebook.com/tydollasign/\nhttps://twitter.com/tydollasign\nhttps://www.instagram.com/tydollasign/',
                publishedAt: '2018-07-03T14:00:00.000Z',
                thumbnails: {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                statistics: {
                    viewCount: 450177,
                    likeCount: 18072,
                    favoriteCount: 0,
                    dislikeCount: 156,
                    commentCount: 654
                },
                contentDetails: {
                    duration: "PT13H40M10S", //The time is formatted as an ISO 8601 string. PT stands for Time Duration, 4M is 4 minutes, and 13S is 13 seconds.
                    dimension: "2d",
                    definition: "hd",
                    caption: "false",
                    licensedContent: true
                }
            },
            {
                id: '2e9diL0xTN4',
                title: 'Khalid - OTW (Official Video) ft. 6LACK, Ty Dolla $ign',
                channelId: 'UCcN-NDV03eHs6oLd1pe2r8w',
                channelTitle: 'KhalidVEVO',
                description: 'Khalid feat. Ty Dolla $ign & 6LACK - OTW (Official Video) Out Now!  http://smarturl.it/XOTW\n \n \nFollow Khalid:\nhttps://www.facebook.com/thegreatkhalid\nhttps://twitter.com/thegreatkhalid\nhttps://www.instagram.com/thegr8khalid/\n \nFollow 6lack:\nhttps://www.facebook.com/6LACK/\nhttps://twitter.com/6LACK\nhttps://www.instagram.com/6lack/\n \nFollow Ty Dolla $ign:\nhttps://www.facebook.com/tydollasign/\nhttps://twitter.com/tydollasign\nhttps://www.instagram.com/tydollasign/',
                publishedAt: '2018-07-03T14:00:00.000Z',
                thumbnails: {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                statistics: {
                    viewCount: "108416393",
                    likeCount: "705614",
                    dislikeCount: "26465",
                    favoriteCount: "0",
                    commentCount: "14382"
                },
                contentDetails: {
                    duration: "PT4M13S", //The time is formatted as an ISO 8601 string. PT stands for Time Duration, 4M is 4 minutes, and 13S is 13 seconds.
                    dimension: "2d",
                    definition: "hd",
                    caption: "false",
                    licensedContent: true
                }
            },
            {
                id: '2e9diL0xTN4',
                title: 'Khalid - OTW (Official Video) ft. 6LACK, Ty Dolla $ign',
                channelId: 'UCcN-NDV03eHs6oLd1pe2r8w',
                channelTitle: 'KhalidVEVO',
                description: 'Khalid feat. Ty Dolla $ign & 6LACK - OTW (Official Video) Out Now!  http://smarturl.it/XOTW\n \n \nFollow Khalid:\nhttps://www.facebook.com/thegreatkhalid\nhttps://twitter.com/thegreatkhalid\nhttps://www.instagram.com/thegr8khalid/\n \nFollow 6lack:\nhttps://www.facebook.com/6LACK/\nhttps://twitter.com/6LACK\nhttps://www.instagram.com/6lack/\n \nFollow Ty Dolla $ign:\nhttps://www.facebook.com/tydollasign/\nhttps://twitter.com/tydollasign\nhttps://www.instagram.com/tydollasign/',
                publishedAt: '2018-07-03T14:00:00.000Z',
                thumbnails: {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                statistics: {
                    viewCount: "108416393",
                    likeCount: "705614",
                    dislikeCount: "26465",
                    favoriteCount: "0",
                    commentCount: "14382"
                },
                contentDetails: {
                    duration: "PT4M13S", //The time is formatted as an ISO 8601 string. PT stands for Time Duration, 4M is 4 minutes, and 13S is 13 seconds.
                    dimension: "2d",
                    definition: "hd",
                    caption: "false",
                    licensedContent: true
                }
            },
            {
                id: '2e9diL0xTN4',
                title: 'Khalid - OTW (Official Video) ft. 6LACK, Ty Dolla $ign',
                channelId: 'UCcN-NDV03eHs6oLd1pe2r8w',
                channelTitle: 'KhalidVEVO',
                description: 'Khalid feat. Ty Dolla $ign & 6LACK - OTW (Official Video) Out Now!  http://smarturl.it/XOTW\n \n \nFollow Khalid:\nhttps://www.facebook.com/thegreatkhalid\nhttps://twitter.com/thegreatkhalid\nhttps://www.instagram.com/thegr8khalid/\n \nFollow 6lack:\nhttps://www.facebook.com/6LACK/\nhttps://twitter.com/6LACK\nhttps://www.instagram.com/6lack/\n \nFollow Ty Dolla $ign:\nhttps://www.facebook.com/tydollasign/\nhttps://twitter.com/tydollasign\nhttps://www.instagram.com/tydollasign/',
                publishedAt: '2018-07-03T14:00:00.000Z',
                thumbnails: {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                statistics: {
                    viewCount: "108416393",
                    likeCount: "705614",
                    dislikeCount: "26465",
                    favoriteCount: "0",
                    commentCount: "14382"
                },
                contentDetails: {
                    duration: "PT4M13S", //The time is formatted as an ISO 8601 string. PT stands for Time Duration, 4M is 4 minutes, and 13S is 13 seconds.
                    dimension: "2d",
                    definition: "hd",
                    caption: "false",
                    licensedContent: true
                }
            },
            {
                id: '2e9diL0xTN4',
                title: 'Khalid - OTW (Official Video) ft. 6LACK, Ty Dolla $ign',
                channelId: 'UCcN-NDV03eHs6oLd1pe2r8w',
                channelTitle: 'KhalidVEVO',
                description: 'Khalid feat. Ty Dolla $ign & 6LACK - OTW (Official Video) Out Now!  http://smarturl.it/XOTW\n \n \nFollow Khalid:\nhttps://www.facebook.com/thegreatkhalid\nhttps://twitter.com/thegreatkhalid\nhttps://www.instagram.com/thegr8khalid/\n \nFollow 6lack:\nhttps://www.facebook.com/6LACK/\nhttps://twitter.com/6LACK\nhttps://www.instagram.com/6lack/\n \nFollow Ty Dolla $ign:\nhttps://www.facebook.com/tydollasign/\nhttps://twitter.com/tydollasign\nhttps://www.instagram.com/tydollasign/',
                publishedAt: '2018-07-03T14:00:00.000Z',
                thumbnails: {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                statistics: {
                    viewCount: "108416393",
                    likeCount: "705614",
                    dislikeCount: "26465",
                    favoriteCount: "0",
                    commentCount: "14382"
                },
                contentDetails: {
                    duration: "PT4M13S", //The time is formatted as an ISO 8601 string. PT stands for Time Duration, 4M is 4 minutes, and 13S is 13 seconds.
                    dimension: "2d",
                    definition: "hd",
                    caption: "false",
                    licensedContent: true
                }
            },
            {
                id: '2e9diL0xTN4',
                title: 'Khalid - OTW (Official Video) ft. 6LACK, Ty Dolla $ign',
                channelId: 'UCcN-NDV03eHs6oLd1pe2r8w',
                channelTitle: 'KhalidVEVO',
                description: 'Khalid feat. Ty Dolla $ign & 6LACK - OTW (Official Video) Out Now!  http://smarturl.it/XOTW\n \n \nFollow Khalid:\nhttps://www.facebook.com/thegreatkhalid\nhttps://twitter.com/thegreatkhalid\nhttps://www.instagram.com/thegr8khalid/\n \nFollow 6lack:\nhttps://www.facebook.com/6LACK/\nhttps://twitter.com/6LACK\nhttps://www.instagram.com/6lack/\n \nFollow Ty Dolla $ign:\nhttps://www.facebook.com/tydollasign/\nhttps://twitter.com/tydollasign\nhttps://www.instagram.com/tydollasign/',
                publishedAt: '2018-07-03T14:00:00.000Z',
                thumbnails: {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/2e9diL0xTN4/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                statistics: {
                    viewCount: "108416393",
                    likeCount: "705614",
                    dislikeCount: "26465",
                    favoriteCount: "0",
                    commentCount: "14382"
                },
                contentDetails: {
                    duration: "PT4M13S", //The time is formatted as an ISO 8601 string. PT stands for Time Duration, 4M is 4 minutes, and 13S is 13 seconds.
                    dimension: "2d",
                    definition: "hd",
                    caption: "false",
                    licensedContent: true
                }
            }
        ]
    }

    // componentDidUpdate() {
    //     axios.get('https://www.googleapis.com/youtube/v3/search', {
    //         params: {
    //             part: 'snippet',
    //             type: 'video',
    //             relatedToVideoId: this.props.videoId,
    //             key: 'AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM'
    //         }
    //     })
    //         .then(response => {
    //             console.log('response:', response);
    //             this.setState({
    //                 suggestedVideos: response.data.items.map(v => {
    //                     return {
    //                         id: v.id.videoId,
    //                         title: v.snippet.title,
    //                         channelId: v.snippet.channelId,
    //                         channelTitle: v.snippet.channelTitle,
    //                         description: v.snippet.description,
    //                         publishedAt: v.snippet.publishedAt,
    //                         thumbnails: v.snippet.thumbnails,
    //                     }
    //                 })
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             // throw new Error(error);
    //         });
    // }
    // componentDidMount(whatSearchFor) {
    //     axios.get('https://www.googleapis.com/youtube/v3/search', {
    //         params: {
    //             part: 'snippet',
    //             type: 'video',
    //             relatedToVideoId: this.props.videoId,
    //             key: 'AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM'
    //         }
    //     })
    //         .then(response => {
    //             console.log('response:', response);
    //             this.setState({
    //                 suggestedVideos: response.data.items.map(v => {
    //                     return {
    //                         id: v.id.videoId,
    //                         title: v.snippet.title,
    //                         channelId: v.snippet.channelId,
    //                         channelTitle: v.snippet.channelTitle,
    //                         description: v.snippet.description,
    //                         publishedAt: v.snippet.publishedAt,
    //                         thumbnails: v.snippet.thumbnails,
    //                     }
    //                 })
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             // throw new Error(error);
    //         });
    // }

    render() {
        console.log('videoId: suggested video', this.props.videoId)

        return (
            <div style={{ border: '1px solid red' }}>
                <p>Up next</p>
                {this.state.suggestedVideos.map((v, i) => {
                    if(i === 0)
                       return (<> 
                                <VideoItem key={i} info={v} />
                                <hr /> 
                            </>);

                    return <VideoItem key={i} info={v} />
                })}
            </div>
        )
    }
}

export default SuggestedVideosList
