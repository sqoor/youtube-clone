import React, { Component } from 'react';
import commaNumber from 'comma-number';
import abbreviate from 'number-abbreviate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faShare, faEllipsisH, faBars } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

import SuggestedVideosList from './SuggestedVideosList';
import VideoDetails from './VideoDetails';

export class Watch extends Component {
    youtubeAPI = {
        kind: "youtube#videoListResponse",
        etag: "\"nlUZBA6NbTS7q9G8D1GljyfTIWI/veEldDkmlNWgsDumaquVgHb8njI\"",
        pageInfo: {
            totalResults: 1,
            resultsPerPage: 1
        },
        items: [
            {
                kind: "youtube#video",
                etag: "\"nlUZBA6NbTS7q9G8D1GljyfTIWI/DHZD6ACP7dJXg1DiaDTRBcbj17I\"",
                id: "2e9diL0xTN4",
                snippet: {
                    publishedAt: "2018-07-03T14:00:00.000Z",
                    channelId: "UCcN-NDV03eHs6oLd1pe2r8w",
                    title: "Khalid - OTW (Official Video) ft. 6LACK, Ty Dolla $ign",
                    description: "Khalid feat. Ty Dolla $ign & 6LACK - OTW (Official Video) Out Now!  http://smarturl.it/XOTW\n \n \nFollow Khalid:\nhttps://www.facebook.com/thegreatkhalid\nhttps://twitter.com/thegreatkhalid\nhttps://www.instagram.com/thegr8khalid/\n \nFollow 6lack:\nhttps://www.facebook.com/6LACK/\nhttps://twitter.com/6LACK\nhttps://www.instagram.com/6lack/\n \nFollow Ty Dolla $ign:\nhttps://www.facebook.com/tydollasign/\nhttps://twitter.com/tydollasign\nhttps://www.instagram.com/tydollasign/",
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/2e9diL0xTN4/default.jpg",
                            width: 120,
                            height: 90
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
                    channelTitle: "KhalidVEVO",
                    tags: [
                        "Khalid feat. Ty Dolla $ign & 6LACK",
                        "OTW",
                        "R&B",
                        "Right Hand Music Group",
                        "LLC/RCA Records"
                    ],
                    categoryId: "10",
                    liveBroadcastContent: "none",
                    localized: {
                        "title": "Khalid - OTW (Official Video) ft. 6LACK, Ty Dolla $ign",
                        "description": "Khalid feat. Ty Dolla $ign & 6LACK - OTW (Official Video) Out Now!  http://smarturl.it/XOTW\n \n \nFollow Khalid:\nhttps://www.facebook.com/thegreatkhalid\nhttps://twitter.com/thegreatkhalid\nhttps://www.instagram.com/thegr8khalid/\n \nFollow 6lack:\nhttps://www.facebook.com/6LACK/\nhttps://twitter.com/6LACK\nhttps://www.instagram.com/6lack/\n \nFollow Ty Dolla $ign:\nhttps://www.facebook.com/tydollasign/\nhttps://twitter.com/tydollasign\nhttps://www.instagram.com/tydollasign/"
                    }
                },
                contentDetails: {
                    duration: "PT4M17S",
                    dimension: "2d",
                    definition: "hd",
                    caption: "false",
                    licensedContent: true,
                    regionRestriction: {
                        "allowed": [
                            "LT",
                            "LU",
                            "LV",
                            "TO",
                            "TH",
                            "LR",
                            "LS",
                            "TD",
                            "TF",
                            "TG",
                            "LY",
                            "TC",
                            "LA",
                            "LB",
                            "LC",
                            "TT",
                            "TV",
                            "TW",
                            "NI",
                            "LI",
                            "TR",
                            "LK",
                            "CY",
                            "CX",
                            "CZ",
                            "TJ",
                            "TN",
                            "CR",
                            "CU",
                            "CW",
                            "CV",
                            "CI",
                            "CH",
                            "CK",
                            "CM",
                            "CL",
                            "CO",
                            "CN",
                            "CA",
                            "CC",
                            "KN",
                            "CD",
                            "CG",
                            "CF",
                            "SI",
                            "KP",
                            "SK",
                            "KR",
                            "SM",
                            "SL",
                            "KW",
                            "BW",
                            "KY",
                            "SC",
                            "KZ",
                            "SE",
                            "SD",
                            "SG",
                            "SY",
                            "SX",
                            "SZ",
                            "KE",
                            "KG",
                            "KI",
                            "KH",
                            "SS",
                            "SR",
                            "KM",
                            "ST",
                            "SV",
                            "BV",
                            "JO",
                            "BT",
                            "JM",
                            "BR",
                            "BS",
                            "BQ",
                            "EC",
                            "JE",
                            "BZ",
                            "BY",
                            "BF",
                            "BG",
                            "BD",
                            "BE",
                            "BB",
                            "BA",
                            "BN",
                            "BO",
                            "BL",
                            "BM",
                            "BJ",
                            "BH",
                            "BI",
                            "RE",
                            "TZ",
                            "RO",
                            "UM",
                            "FO",
                            "RW",
                            "RU",
                            "RS",
                            "AS",
                            "AR",
                            "AQ",
                            "AW",
                            "IN",
                            "AU",
                            "IL",
                            "AZ",
                            "AX",
                            "IE",
                            "ID",
                            "ZM",
                            "AG",
                            "AF",
                            "AE",
                            "AD",
                            "IS",
                            "IR",
                            "IQ",
                            "AO",
                            "AM",
                            "AL",
                            "QA",
                            "AI",
                            "MK",
                            "MZ",
                            "MY",
                            "HK",
                            "HM",
                            "HN",
                            "YT",
                            "JP",
                            "HR",
                            "HT",
                            "HU",
                            "YE",
                            "PA",
                            "PE",
                            "PF",
                            "PG",
                            "PH",
                            "PK",
                            "PL",
                            "PM",
                            "PN",
                            "PR",
                            "PS",
                            "PT",
                            "TK",
                            "PW",
                            "IO",
                            "PY",
                            "ET",
                            "GE",
                            "GD",
                            "GG",
                            "GF",
                            "GA",
                            "GB",
                            "GM",
                            "GL",
                            "GN",
                            "GI",
                            "GH",
                            "GU",
                            "GT",
                            "GW",
                            "GQ",
                            "GP",
                            "GS",
                            "GR",
                            "GY",
                            "OM",
                            "WS",
                            "FJ",
                            "FK",
                            "FI",
                            "IT",
                            "FM",
                            "FR",
                            "WF",
                            "NZ",
                            "TL",
                            "SH",
                            "NR",
                            "NP",
                            "NU",
                            "SJ",
                            "NO",
                            "NL",
                            "SA",
                            "NC",
                            "NA",
                            "NF",
                            "NG",
                            "NE",
                            "MA",
                            "TM",
                            "SO",
                            "VU",
                            "SN",
                            "ES",
                            "ER",
                            "VC",
                            "VA",
                            "VG",
                            "VE",
                            "EG",
                            "EE",
                            "VI",
                            "VN",
                            "MW",
                            "MV",
                            "MU",
                            "MT",
                            "MS",
                            "MR",
                            "MQ",
                            "MP",
                            "UG",
                            "DK",
                            "ZA",
                            "UA",
                            "MX",
                            "MG",
                            "MF",
                            "ME",
                            "MD",
                            "MC",
                            "UZ",
                            "UY",
                            "MO",
                            "MN",
                            "MM",
                            "ML",
                            "US",
                            "MH",
                            "IM",
                            "DZ",
                            "AT",
                            "DM",
                            "EH",
                            "DO",
                            "SB",
                            "DJ",
                            "ZW",
                            "DE"
                        ]
                    },
                    projection: "rectangular"
                },
                statistics: {
                    viewCount: "108599477",
                    likeCount: "706440",
                    dislikeCount: "26499",
                    favoriteCount: "0",
                    commentCount: "14393"
                }
            }
        ]
    }
    // you api call should only request title, views, likes dislikes
    // youtube api how to retive only certain fields only.
    state = {
        video: {}
    }
    
    render() {
        const videoId = this.youtubeAPI.items[0].id;
        const title = this.youtubeAPI.items[0].snippet.title;
        const views = commaNumber(this.youtubeAPI.items[0].statistics.viewCount);
        const likes = abbreviate(this.youtubeAPI.items[0].statistics.likeCount);
        const dislikes = abbreviate(this.youtubeAPI.items[0].statistics.dislikeCount);
                
        console.log('id', videoId);
        console.log('title', title);
        console.log('views', views);
        console.log('likes', likes);
        console.log('dislikes', dislikes);

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7 pr-0">
                        <iframe
                            frameBorder='0'
                            title={videoId}
                            allowFullScreen
                            width="800px"
                            height="500px"
                            src={`https://www.youtube.com/embed/${videoId}`}
                        >
                        </iframe>
                        <div className="mt-3">
                            <h3 className="video-title h6">{title}</h3>
                            <p style={{ fontSize: '.93rem' }} className="text-muted">{views} views</p>
                            <div style={iconsStyle} className="icons text-muted text-light float-right">
                                <span style={{ borderBottom: '2px solid grey', paddingBottom: '3.8%' }}>
                                    <span className="ml-3"><FontAwesomeIcon icon={faThumbsUp} /> {likes}</span>
                                    <span className="ml-3"><FontAwesomeIcon icon={faThumbsDown} /> {dislikes}</span>
                                </span>
                                <span className="ml-3"><FontAwesomeIcon icon={faShare} /> {'SHARE'}</span>
                                <span className="ml-3"><FontAwesomeIcon icon={faBars} />{'SAVE'}</span>
                                <span className="ml-3"><FontAwesomeIcon icon={faEllipsisH} /> {}</span>
                            </div>
                        </div>
                        <hr />
                        <div>
                            {/* <VideoDetails details={videoDetails} /> */}
                        </div>
                    </div>
                    <div className="col-4 ml-5">
                        {/* <SuggestedVideosList videoId={videoId} /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Watch


const iconsStyle = {
    marginTop: '-4%',
    fontSize: '.9rem',
    color: '#6c757dc2 !important'
}