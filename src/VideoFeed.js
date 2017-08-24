/**
 * Created by admin on 8/23/2017.
 */
import React, { Component } from 'react';
import {$,jQuery} from 'jquery';
import {videoData} from './data';

class VideoFeed extends Component
{
    render()
    {
        return(
            <div className="feed-container">
                <div className="videos">
                    <h2>This is video feed</h2>
                    {videoData.map((item, index) => (
                        <VideoPost videoSrc={item.src} title={item.title} />
                    ))}
                </div>

            </div>
        )
    }
}

class VideoPost extends Component
{
    render()
    {
        return(
            <div className="video-post-card">
                <div className="video-container">
                    <iframe src={this.props.videoSrc} frameborder="0" allowfullscreen/>
                </div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default VideoFeed;