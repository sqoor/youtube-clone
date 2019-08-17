import React, { Component } from 'react';
import axios from 'axios';
import commaNumber from 'comma-number';
import abbreviate from 'number-abbreviate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faShare, faEllipsisH, faBars } from '@fortawesome/free-solid-svg-icons';

import SuggestedVideosList from './SuggestedVideosList';
import VideoDetails from './VideoDetails';
import CommentsList from './CommentsList';

import loading from './loading.gif';

export class Watch extends Component {
    state = {
        video: {
            id: '',
            title: '',
            views: '',
            likes: '',
            dislikes: '',
            commentCount: ''
        }
    }

    async youtubeAPICall(videoId) {
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
                params: {
                    part: "snippet,statistics",
                    id: videoId,
                    // key: 'AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM',
                    // key: 'AIzaSyDux7GMJzNTJPzmWbbm1juDOaLtKKAZf-A',
                    key: 'AIzaSyDgIMKseEYKN1i_wfmyC8rJgauscJd8Fqw',
                    fields: "items(id,snippet(title,channelId,channelTitle,publishedAt,description),statistics(viewCount,likeCount,dislikeCount,commentCount))"
                }
            });

            return response.data.items[0];
        }
        catch (err) {
            console.log(err)
        }

    }

    getQueryString() {
        const textUrl = window.document.location.href;
        const url = new URL(textUrl)

        return url.searchParams.get('v');
    }

    setPageTitle() {
        window.document.title = this.state.video.title;
    }

    async componentDidMount() {
        const videoIdToWatch = this.getQueryString();
        const response = await this.youtubeAPICall(videoIdToWatch);

        if(!response) return;

        this.setState({
            video: {
                id: response.id,
                title: response.snippet.title,
                description: response.snippet.description,
                publishedAt: response.snippet.publishedAt,
                channelId: response.snippet.channelId,
                channelTitle: response.snippet.channelTitle,
                views: commaNumber(response.statistics.viewCount),
                likes: abbreviate(response.statistics.likeCount),
                dislikes: abbreviate(response.statistics.dislikeCount),
                commentCount: abbreviate(response.statistics.commentCount)
            }
        });

        this.setPageTitle();
    }

    loadingIframeStyling(e) {
        try {
            const iframeContentHolder = e.target.contentDocument.children[0].children[1];
            const iframeContenet = e.target.contentDocument.children[0].children[1].children[0];

            iframeContentHolder.style.display = 'flex';
            iframeContentHolder.style.justifyContent = 'center';
            iframeContentHolder.style.alignItems = 'center';
            iframeContenet.style.width = '60px';
        }
        catch {
            return;
        }
    }

    render() {
        const {
            id,
            title,
            views,
            likes,
            dislikes,
            description,
            publishedAt,
            channelId,
            channelTitle,
            commentCount
        } = this.state.video;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7 pr-0">
                        {id ?
                            <iframe
                                title={id}
                                frameBorder='0'
                                allowFullScreen
                                width="800px"
                                height="500px"
                                src={`https://www.youtube.com/embed/${id}`}
                                onLoad={this.loadingIframeStyling}
                            >
                            </iframe>
                            :
                            <iframe
                                title={id}
                                frameBorder='0'
                                width="800px"
                                height="500px"
                                src={loading}
                                onLoad={this.loadingIframeStyling}
                            >
                            </iframe>
                        }
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
                            {channelId ? <VideoDetails details={{ description, publishedAt, channelId, channelTitle }} /> : ''}
                            <div className="m-5">
                                <CommentsList commentCount={commentCount} />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 ml-5">
                        {id ? <SuggestedVideosList videoId={id} /> : ''}
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
