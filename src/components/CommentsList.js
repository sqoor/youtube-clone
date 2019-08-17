import React, { Component } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountUp } from '@fortawesome/free-solid-svg-icons';

import Comment from './Comment';


export class CommentsList extends Component {
    state = {
        comments: [],
        isLoading: true
    }

    async youtubeApiCall() {
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
                params: {
                    // videoId: this.params.id,
                    videoId: '2e9diL0xTN4',
                    part: 'snippet',
                    maxResults: '10',
                    order: 'relevance',
                    // key: 'AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM',
                    // key: 'AIzaSyDux7GMJzNTJPzmWbbm1juDOaLtKKAZf-A',
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