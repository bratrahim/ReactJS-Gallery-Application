/**
 * Created by admin on 8/23/2017.
 */
import React, { Component } from 'react';
import {$,jQuery} from 'jquery';
import {pictureData} from "./data";

class PicturePost extends Component{
    componentDidMount()
    {
        parallaxEffect();
    }
    render()
    {
        return(
            <div className="post-card">
                <div className="parallax-canvas">
                    <div className="parallax-layer image" data-depth="0.4" style={{backgroundImage:'url('+this.props.imageSrc+')'}}>
                        <div className="image-title-spacer" style={{height:spacerHeight(this.props.title.length)}}>

                        </div>

                    </div>
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

class PictureFeed extends Component{
    componentDidMount()
    {
        document.addEventListener('scroll',parallaxEffect);
    }
    render()
    {
        this.data=pictureData;
        return (
            <div className="feed-container">
                <h2>This is feed</h2>
                {pictureData.map((item, index) => (
                    <PicturePost imageSrc={item.src} title={item.title} />
                ))}
            </div>
        )
    }
}

export default PictureFeed;

const parallaxEffect = function (){
    let layers = document.querySelectorAll(".parallax-layer");
    layers.forEach(function (layer) {
        var topDistance = layer.getBoundingClientRect().top;
        if(isInViewport(layer))
        {
            let depth=layer.getAttribute('data-depth');
            let movement= -(topDistance*depth);
            let translate3d = 'translate3d(0, '+movement+'px,0)';
            layer.style.transform=translate3d;
        }
    });
};

function spacerHeight(titleLength) {
    console.log(titleLength);
    const lines=~~(titleLength/15);
    return 255-(lines*45);
}

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom -1000 <= (window.innerHeight || html.clientHeight) &&
        rect.right-300 <= (window.innerWidth || html.clientWidth)
    );
}