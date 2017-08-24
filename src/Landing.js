/**
 * Created by admin on 8/22/2017.
 */
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Landing extends Component
{
    constructor(props)
    {
        super(props);
        //const
        this.navHeight=52;
        //dynamic variables
        this.landingHeight=window.innerHeight/10*3;
        this.navbarTopPosition=-this.landingHeight+this.navHeight;

        this.state=
            {
                nav_bar_className:"landing",
                nav_bar_top_position:this.navbarTopPosition
            }
            ;

        this.scrollHandler = this.scrollHandler.bind(this);
        this.resizeHandler = this.resizeHandler.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.resizeHandler);
    }
    resizeHandler()
    {
        this.landingHeight=window.innerHeight/10*3;
        this.navbarTopPosition=-this.landingHeight+this.navHeight;
        this.setState({nav_bar_top_position:this.navbarTopPosition});
    }
    scrollHandler()
    {
        if(window.scrollY>this.landingHeight-this.navHeight)
        {
            this.setState({nav_bar_className:"landing fixed"});
        }
        else
        {
            this.setState({nav_bar_className:"landing"});
        }
    }
    render()
    {
        return (
            <div className="landing-container">
                <div style={{top:this.state.nav_bar_top_position+"px"}} className={this.state.nav_bar_className}>
                    <div className="navigation-bar" ref="navigation-bar">
                        <div className="nav-element">
                            <Link to="/videos">Videos</Link>
                        </div>
                        <div className="nav-element">
                            <Link to="/pictures">Pictures</Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}