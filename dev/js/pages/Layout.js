import React from "react";

import Footer from "../components/Layout/Footer";
import Nav from "../components/Layout/Nav";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {collapse:true,title:""};
    }

    handleCollapse = (collapseStatus) => {
        if (!(this.state.collapse === collapseStatus)) {
            this.setState({collapse: collapseStatus});
        }

        console.log("handle collapsed called in Layout" ,collapseStatus);
    };

    toggleCollapse() {
        const collapsed = !this.state.collapse;
        this.setState({collapse : collapsed});
        console.log("collapsed called in Layout" ,collapsed);
        this.refs.navRef.setCollapseState(collapsed);
    }

    collapseIfOpen() {
        if (!this.state.collapse) {
            this.toggleCollapse();
        }
    }

    render() {
        const {collapse} = this.state;
        const {location} = this.props;
        const wrapperClass = collapse ? "" : "toggled";
        const overlayClass = collapse ? "none" : "block";
        const hamClass = collapse ? "is-closed" : "is-open";
        console.log(location);

        return (
            <div id = "wrapper" class={wrapperClass}>
                <div class="overlay" onClick={this.collapseIfOpen.bind(this)} style={{display: overlayClass}}/>
                <Nav location={location} isCollapsed={this.handleCollapse} ref="navRef" />
                <div id="page-content-wrapper" onClick={this.collapseIfOpen.bind(this)} >
                    <button type="button"
                            class={"hamburger animated fadeInLeft " + hamClass}
                            data-toggle="offcanvas"
                            onClick={this.toggleCollapse.bind(this)}>
                        <span class="hamb-top"/>
                        <span class="hamb-middle"/>
                        <span class="hamb-bottom"/>
                    </button>
                    <div class="title">{this.props.children.props.route.name}</div>
                    <div class="container main-content">
                        {this.props.children}
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
