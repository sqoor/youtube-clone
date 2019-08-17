import React, { Component } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountUp } from '@fortawesome/free-solid-svg-icons';

import Comment from './Comment';


/*
get list of comments for a video by its id
request:
https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyDux7GMJzNTJPzmWbbm1juDOaLtKKAZf-A&part=snippet&videoId=2e9diL0xTN4&maxResults=10
https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyDgIMKseEYKN1i_wfmyC8rJgauscJd8Fqw&part=snippet&videoId=SLsTskih7_I&maxResults=10&order=relevance&fields=items(id, snippet(totalReplyCount,topLevelComment(snippet(authorDisplayName,authorChannelUrl,authorProfileImageUrl,textDisplay,textOriginal,likeCount,publishedAt,updatedAt))))
response:

{
    "items": [
        {
            "id": "UghGPHkb-bpMZHgCoAEC",
            "snippet": {
                "topLevelComment": {
                    "snippet": {
                        "authorDisplayName": "Aidan Burris",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/-Q3U2L-kW7dA/AAAAAAAAAAI/AAAAAAAAAAA/fivi43ROv6k/s28-c-k-no-mo-rj-c0xffffff/photo.jpg",
                        "authorChannelUrl": "http://www.youtube.com/channel/UC8qPXsl6zAOhhsAC3UMd4Vg",
                        "textDisplay": "Malone the only guy to master the effect of looking rich and poor at the same time",
                        "textOriginal": "Malone the only guy to master the effect of looking rich and poor at the same time",
                        "likeCount": 12027,
                        "publishedAt": "2017-06-09T02:25:38.000Z",
                        "updatedAt": "2017-06-09T02:25:38.000Z"
                    }
                },
                "totalReplyCount": 128
            }
        },
        {
            "id": "UgzYGoDnCAZXXSWa5rh4AaABAg",
            "snippet": {
                "topLevelComment": {
                    "snippet": {
                        "authorDisplayName": "Benjamin Peter",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/-cMtVzCJd4SY/AAAAAAAAAAI/AAAAAAAAAAA/t2os265rswA/s28-c-k-no-mo-rj-c0xffffff/photo.jpg",
                        "authorChannelUrl": "http://www.youtube.com/channel/UC0H9oacZQSb6dwdgDcg7zBA",
                        "textDisplay": "Still loving this song in 2019.<br />Who else?",
                        "textOriginal": "Still loving this song in 2019.\nWho else?",
                        "likeCount": 42,
                        "publishedAt": "2019-08-16T19:18:59.000Z",
                        "updatedAt": "2019-08-16T19:18:59.000Z"
                    }
                },
                "totalReplyCount": 4
            }
        },
        {
            "id": "UgwH4sXwAnHEYbNRuX54AaABAg",
            "snippet": {
                "topLevelComment": {
                    "snippet": {
                        "authorDisplayName": "100,000 subscribers with 0 videos",
                        "authorProfileImageUrl": "https://yt3.ggpht.com/-1zeYWUXnoKw/AAAAAAAAAAI/AAAAAAAAAAA/8MGvZ21Up_o/s28-c-k-no-mo-rj-c0xffffff/photo.jpg",
                        "authorChannelUrl": "http://www.youtube.com/channel/UC8uGHu-pBSxlvzFbJGtXi_A",
                        "textDisplay": "Who is better?<br /><br />Like: <b>Post Malone</b><br /><br />Comment: <b>Drake</b>",
                        "textOriginal": "Who is better?\n\nLike: *Post Malone*\n\nComment: *Drake*",
                        "likeCount": 2193,
                        "publishedAt": "2019-07-21T21:27:56.000Z",
                        "updatedAt": "2019-07-21T21:27:56.000Z"
                    }
                },
                "totalReplyCount": 99
            }
        }
       

get the data
response.map(c => {
    c.id
    c.snippet.totalReplyCount
    c.snippet.topLevelComment.snippet {
        authorChannelUrl
        authorDisplayName
        authorProfileImageUrl
        likeCount
        publishedAt
        textDisplay
        textOriginal
        updatedAt
    }
});

*/

export class CommentsList extends Component {
    state = {
        comments: [],
        isLoading: true
    }

    async youtubeApiCall() {
        const res = [
            {
                "id": "UghGPHkb-bpMZHgCoAEC",
                "snippet": {
                    "topLevelComment": {
                        "snippet": {
                            "authorDisplayName": "Aidan Burris",
                            "authorProfileImageUrl": "https://yt3.ggpht.com/-Q3U2L-kW7dA/AAAAAAAAAAI/AAAAAAAAAAA/fivi43ROv6k/s28-c-k-no-mo-rj-c0xffffff/photo.jpg",
                            "authorChannelUrl": "http://www.youtube.com/channel/UC8qPXsl6zAOhhsAC3UMd4Vg",
                            "textDisplay": "Malone the only guy to master the effect of looking rich and poor at the same time",
                            "textOriginal": "Malone the only guy to master the effect of looking rich and poor at the same time",
                            "likeCount": 12027,
                            "publishedAt": "2017-06-09T02:25:38.000Z",
                            "updatedAt": "2017-06-09T02:25:38.000Z"
                        }
                    },
                    "totalReplyCount": 128
                }
            },
            {
                "id": "UgzYGoDnCAZXXSWa5rh4AaABAg",
                "snippet": {
                    "topLevelComment": {
                        "snippet": {
                            "authorDisplayName": "Benjamin Peter",
                            "authorProfileImageUrl": "https://yt3.ggpht.com/-cMtVzCJd4SY/AAAAAAAAAAI/AAAAAAAAAAA/t2os265rswA/s28-c-k-no-mo-rj-c0xffffff/photo.jpg",
                            "authorChannelUrl": "http://www.youtube.com/channel/UC0H9oacZQSb6dwdgDcg7zBA",
                            "textDisplay": "Still loving this song in 2019.<br />Who else?",
                            "textOriginal": "Still loving this song in 2019.\nWho else?",
                            "likeCount": 42,
                            "publishedAt": "2019-08-16T19:18:59.000Z",
                            "updatedAt": "2019-08-16T19:18:59.000Z"
                        }
                    },
                    "totalReplyCount": 4
                }
            },
            {
                "id": "UgwH4sXwAnHEYbNRuX54AaABAg",
                "snippet": {
                    "topLevelComment": {
                        "snippet": {
                            "authorDisplayName": "100,000 subscribers with 0 videos",
                            "authorProfileImageUrl": "https://yt3.ggpht.com/-1zeYWUXnoKw/AAAAAAAAAAI/AAAAAAAAAAA/8MGvZ21Up_o/s28-c-k-no-mo-rj-c0xffffff/photo.jpg",
                            "authorChannelUrl": "http://www.youtube.com/channel/UC8uGHu-pBSxlvzFbJGtXi_A",
                            "textDisplay": "Who is better?<br /><br />Like: <b>Post Malone</b><br /><br />Comment: <b>Drake</b>",
                            "textOriginal": "Who is better?\n\nLike: *Post Malone*\n\nComment: *Drake*",
                            "likeCount": 2193,
                            "publishedAt": "2019-07-21T21:27:56.000Z",
                            "updatedAt": "2019-07-21T21:27:56.000Z"
                        }
                    },
                    "totalReplyCount": 99
                }
            },
            {
                "id": "Ugy4LuSKWFIKpLJj_nF4AaABAg",
                "snippet": {
                    "topLevelComment": {
                        "snippet": {
                            "authorDisplayName": "PahAdi ChoRa",
                            "authorProfileImageUrl": "https://yt3.ggpht.com/-56j_feE2A8g/AAAAAAAAAAI/AAAAAAAAAAA/GpGiVG7o1x8/s28-c-k-no-mo-rj-c0xffffff/photo.jpg",
                            "authorChannelUrl": "http://www.youtube.com/channel/UC-qZeZrceJ0MsrwGnoDU06g",
                            "textDisplay": "Love from India 🇮🇳🇮🇳❤️🙏",
                            "textOriginal": "Love from India 🇮🇳🇮🇳❤️🙏",
                            "likeCount": 10,
                            "publishedAt": "2019-08-15T22:04:34.000Z",
                            "updatedAt": "2019-08-15T22:04:34.000Z"
                        }
                    },
                    "totalReplyCount": 0
                }
            },
            {
                "id": "Ugwtbjq2Xwn7T4vAMM54AaABAg",
                "snippet": {
                    "topLevelComment": {
                        "snippet": {
                            "authorDisplayName": "1k EXOTIX",
                            "authorProfileImageUrl": "https://yt3.ggpht.com/-hewsKckH2EE/AAAAAAAAAAI/AAAAAAAAAAA/SovM6HoCrt0/s28-c-k-no-mo-rj-c0xffffff/photo.jpg",
                            "authorChannelUrl": "http://www.youtube.com/channel/UCOSmtuHHlyyxwBTfDILZ7eQ",
                            "textDisplay": "If<br />U<br />Are<br />Reading this<br />I hope<br />U <br />Become <br />Rich",
                            "textOriginal": "If\nU\nAre\nReading this\nI hope\nU \nBecome \nRich",
                            "likeCount": 646,
                            "publishedAt": "2019-08-07T02:58:15.000Z",
                            "updatedAt": "2019-08-07T02:58:15.000Z"
                        }
                    },
                    "totalReplyCount": 21
                }
            },
            {
                "id": "UgzHzux0qw1wulweoWx4AaABAg",
                "snippet": {
                    "topLevelComment": {
                        "snippet": {
                            "authorDisplayName": "coryx kenshin",
                            "authorProfileImageUrl": "https://yt3.ggpht.com/-5OXvJwjBJVU/AAAAAAAAAAI/AAAAAAAAAAA/ywFDzh8V8lc/s28-c-k-no-mo-rj-c0xffffff/photo.jpg",
                            "authorChannelUrl": "http://www.youtube.com/channel/UCZ3ViboQXlPA__KrChqfeVg",
                            "textDisplay": "Who just randomly thought of this song and wanted to hear it again",
                            "textOriginal": "Who just randomly thought of this song and wanted to hear it again",
                            "likeCount": 5812,
                            "publishedAt": "2019-06-18T14:48:55.000Z",
                            "updatedAt": "2019-06-18T14:48:55.000Z"
                        }
                    },
                    "totalReplyCount": 134
                }
            },
            {
                "id": "Ugw3Zx27cXzaFs9H47N4AaABAg",
                "snippet": {
                    "topLevelComment": {
                        "snippet": {
                            "authorDisplayName": "Scott Hofer",
                            "authorProfileImageUrl": "https://yt3.ggpht.com/-1Qr2kPzvT3A/AAAAAAAAAAI/AAAAAAAAAAA/5HJDrmrXG5s/s28-c-k-no-mo-rj-c0xffffff/photo.jpg",
                            "authorChannelUrl": "http://www.youtube.com/channel/UCuFto3ntdNoA3CMGCrow9ag",
                            "textDisplay": "Anyone listening in August 2019?",
                            "textOriginal": "Anyone listening in August 2019?",
                            "likeCount": 451,
                            "publishedAt": "2019-08-11T03:11:52.000Z",
                            "updatedAt": "2019-08-11T03:11:52.000Z"
                        }
                    },
                    "totalReplyCount": 26
                }
            },
            {
                "id": "UgwBLQYC78eSlZD9pmB4AaABAg",
                "snippet": {
                    "topLevelComment": {
                        "snippet": {
                            "authorDisplayName": "Syed Aqib",
                            "authorProfileImageUrl": "https://yt3.ggpht.com/-ga786819upY/AAAAAAAAAAI/AAAAAAAAAAA/F2CJVZjIFVU/s28-c-k-no-mo-rj-c0xffffff/photo.jpg",
                            "authorChannelUrl": "http://www.youtube.com/channel/UCm7C2HgvZD4HZOnMXnue_1g",
                            "textDisplay": "Who&#39;s here after his new song<br /> (goodbyes)",
                            "textOriginal": "Who's here after his new song\n (goodbyes)",
                            "likeCount": 2670,
                            "publishedAt": "2019-07-05T16:21:00.000Z",
                            "updatedAt": "2019-07-07T05:06:59.000Z"
                        }
                    },
                    "totalReplyCount": 40
                }
            },
            {
                "id": "Ugz4Roo2FkuD5BOULC54AaABAg",
                "snippet": {
                    "topLevelComment": {
                        "snippet": {
                            "authorDisplayName": "NO video 1Million subscribe BANGLADESH",
                            "authorProfileImageUrl": "https://yt3.ggpht.com/-d95cJlmMCG8/AAAAAAAAAAI/AAAAAAAAAAA/L6LXWTH8nAU/s28-c-k-no-mo-rj-c0xffffff/photo.jpg",
                            "authorChannelUrl": "http://www.youtube.com/channel/UCrRuwMAW_R4mSwwcZ9b4DeA",
                            "textDisplay": "┏┓┏┳━┳┓┏┓┏━━┓<br />┃┗┛┃━┫┃┃┃┃╭╮┃<br />┃┏┓┃━┫┗┫┗┫╰╯┃<br />┗┛┗┻━┻━┻━┻AUGUST–2019?",
                            "textOriginal": "┏┓┏┳━┳┓┏┓┏━━┓\n┃┗┛┃━┫┃┃┃┃╭╮┃\n┃┏┓┃━┫┗┫┗┫╰╯┃\n┗┛┗┻━┻━┻━┻AUGUST–2019?",
                            "likeCount": 1093,
                            "publishedAt": "2019-07-13T09:59:45.000Z",
                            "updatedAt": "2019-08-01T06:34:06.000Z"
                        }
                    },
                    "totalReplyCount": 40
                }
            },
            {
                "id": "Ugyi9rHSPKXn0SiNXHB4AaABAg",
                "snippet": {
                    "topLevelComment": {
                        "snippet": {
                            "authorDisplayName": "Raheel Ahmed",
                            "authorProfileImageUrl": "https://yt3.ggpht.com/-T07fUJBoZxg/AAAAAAAAAAI/AAAAAAAAAAA/3Ka_swjt2Ms/s28-c-k-no-mo-rj-c0xffffff/photo.jpg",
                            "authorChannelUrl": "http://www.youtube.com/channel/UCelEZgQHyPaeBJUKbTnGAgA",
                            "textDisplay": "Who else attended his concert in Budapest on 11th August? was lit &lt;3",
                            "textOriginal": "Who else attended his concert in Budapest on 11th August? was lit <3",
                            "likeCount": 6,
                            "publishedAt": "2019-08-15T15:14:03.000Z",
                            "updatedAt": "2019-08-15T15:14:03.000Z"
                        }
                    },
                    "totalReplyCount": 1
                }
            }
        ];
        return res;

        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
                params: {
                    // videoId: this.params.id,
                    videoId: '2e9diL0xTN4',
                    part: 'snippet',
                    maxResults: '10',
                    order: 'relevance',
                    key: 'AIzaSyDgIMKseEYKN1i_wfmyC8rJgauscJd8Fqw',
                    fields: 'items(id, snippet(totalReplyCount,topLevelComment(snippet(authorDisplayName,authorChannelUrl,authorProfileImageUrl,textDisplay,textOriginal,likeCount,publishedAt,updatedAt))))'
                }
            });

            return response.data.items;
        }
        catch (err) {
            console.log(err);
        }
    }

    async componentDidMount() {
        const response = await this.youtubeApiCall();

        this.setState({
            comments: response.map(c => c)
        });
    }

    render() {
        const { comments } = this.state;
        const { commentCount } = this.props;
        console.log(commentCount);
        return (
            <div>
                <div>{commentCount} Comments <span style={{ cursor: 'pointer' }} className="text-muted ml-4"><FontAwesomeIcon icon={faSortAmountUp} /> SORT BY</span></div>
                {comments.map(c => {
                    return <Comment key={c.id} details={c} />
                })}
            </div>
        );
    }
}

export default CommentsList


/*
    // number of comments
    // user image
    // user name
    // passed time (ago)
    // likes
    // dislikes
    // Number of replies
    // id (not important)
    items(id, snippet(topLevelComment(snippet(authorDisplayName,authorProfileImageUrl,authorChannelUrl,textDisplay,textOriginal,likeCount,publishedAt,updatedAt),totalReplyCount)))

*/