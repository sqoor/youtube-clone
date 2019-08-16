import React, { Component } from 'react';
import VideoItem from './VideoItem';
import './Home.css';
import axios from 'axios';


/*
// suppose to get the popular vidoes on this page

// request: 
// https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM&maxResults=10&chart=mostPopular
// https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM&fields=items(id(videoId))&maxResults=10&chart=mostPopular
// response: 
//
// {
//     "items": [
//         {
//             "id": {
//                 "videoId": "qlzVPauUgw8"
//             }
//         },
//         {
//             "id": {
//                 "videoId": "A2FsgKoGD04"
//             }
//         },
//         {
//             "id": {
//                 "videoId": "VRJmcxCrAOA"
//             }
//         },
//         {
//             "id": {
//                 "videoId": "hHW1oY26kxQ"
//             }
//         },
//         {
//             "id": {
//                 "videoId": "VNM7Z7hir_I"
//             }
//         },
//         {
//             "id": {
//                 "videoId": "1Za8BtLgKv8"
//             }
//         },
//         {
//             "id": {
//                 "videoId": "TcMBFSGVi1c"
//             }
//         },
//         {
//             "id": {
//                 "videoId": "pk7ESz6vtyA"
//             }
//         },
//         {
//             "id": {
//                 "videoId": "z2VZ_OGz0RU"
//             }
//         },
//         {
//             "id": {
//                 "videoId": "rg_zwK_sSEY"
//             }
//         }
//     ]
// }

*/


export class Home extends Component {
    state = {
        videos: []
    }


    async youtubeApiCall() {
        const res = [
            {
                "id": "qlzVPauUgw8"
            },
            {
                "id": "A2FsgKoGD04"
            },
            {
                "id": "VRJmcxCrAOA"
            },
            {
                "id": "hHW1oY26kxQ"
            },
            {
                "id": "VNM7Z7hir_I"
            },
            {
                "id": "1Za8BtLgKv8"
            },
            {
                "id": "TcMBFSGVi1c"
            },
            {
                "id": "pk7ESz6vtyA"
            },
            {
                "id": "z2VZ_OGz0RU"
            },
            {
                "id": "rg_zwK_sSEY"
            }
        ]
        return res;

        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: '10',
                chart: 'mostPopular',
                fields: 'items(id(videoId))',
                key: 'AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM'
            }
        });

        return response.data.items;
    }

    async componentDidMount() {
        const response = await this.youtubeApiCall();

        this.setState({
            videos: response.map(obj => obj.id.videoId)
        });
    }


    render() {
        return (
            <div className="container w-75">
                <h1 className="h5">Popular Videos</h1>
                {
                    this.state.videos.map((id, i) => {
                        return <VideoItem key={i} id={id} />;
                    })
                }
            </div>
        )
    }
}

export default Home