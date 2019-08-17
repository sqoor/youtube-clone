import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import abbrivate from 'number-abbreviate';
import moment from 'moment';

export class Comment extends Component {
    state = {
        id: '',
        totalReplyCount: '',
        authorChannelUrl: '',
        authorDisplayName: '',
        authorProfileImageUrl: '',
        likeCount: '',
        publishedAt: '',
        updatedAt: '',
        textDisplay: '',
        textOriginal: '',
    }

    componentDidMount() {
        try {
            const { details } = this.props;
            const { snippet } = details.snippet.topLevelComment;

            this.setState({
                authorChannelUrl: snippet.authorChannelUrl,
                authorDisplayName: snippet.authorDisplayName,
                authorProfileImageUrl: snippet.authorProfileImageUrl,
                likeCount: snippet.likeCount,
                publishedAt: snippet.publishedAt,
                textDisplay: snippet.textDisplay,
                textOriginal: snippet.textOriginal,
                updatedAt: snippet.updatedAt,
                totalReplyCount: details.snippet.totalReplyCount,
                id: details.id
            });
        }
        catch (e) {
            console.log(e);
        }
    }

    calculatePassedTime() {
        var now = moment(new Date());
        var end = moment(this.state.publishedAt);
        var duration = moment.duration(now.diff(end));

        return duration.humanize()
    }

    render() {
        const {
            totalReplyCount,
            authorDisplayName,
            authorProfileImageUrl,
            likeCount,
            textDisplay,
            // id,
            // authorChannelUrl,
            // publishedAt,
            // updatedAt,
            // textOriginal,
        } = this.state;

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-1">
                        <img src={authorProfileImageUrl} alt={authorDisplayName} style={imgStyle} />
                    </div>
                    <div className="col">
                        <div>
                            <span className="font-weight-bold">{authorDisplayName}</span>
                            <span className="ml-2 text-muted">{this.calculatePassedTime()} ago</span>
                        </div>
                        <div className="mb-3">
                            <div dangerouslySetInnerHTML={{ __html: textDisplay.slice(0, 50) + '...' }} />
                        </div>
                        <div className="text-muted">

                            <span className="mx-2">
                                <FontAwesomeIcon icon={faThumbsUp} /> {abbrivate(likeCount)}
                            </span>
                            <span className="mx-2">
                                <FontAwesomeIcon icon={faThumbsDown} />
                            </span>
                            <span className="mx-2">
                                Replay
                            </span>
                        </div>
                        {totalReplyCount > 0 ?
                            <div className="mt-3">
                                <span className="font-weight-bold">View {abbrivate(totalReplyCount)} Replies</span>
                            </div>
                            : ''
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment

const imgStyle = {
    borderRadius: '50%',
    width: '2.7rem',
    height: '2.7rem'
};