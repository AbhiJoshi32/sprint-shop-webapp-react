import React from "react";
import { IndexLink, Link } from "react-router";
import FontIcon from "../../../assets/images/font.png"

export default class Nav extends React.Component {
    constructor() {
        super();
        this.state = {collapse:true,dropdown:false};
    }

    toggleDropDown(ev) {
        ev.preventDefault();
        const dropDownState = !this.state.dropdown;
        this.setState({dropdown: dropDownState});
    }

    toggleCollapse() {
      const collapsed = !this.state.collapse;
      this.setState({collapse : collapsed});
      this.props.isCollapsed(collapsed);
      console.log("collapsed called in nav" ,collapsed);
    }

    setCollapseState(status) {
      this.setState({collapse:status});
      console.log("status in nav is" + status);
    }

  render() {
      const { location } = this.props;
      const { navCollapseState } = this.props;
      const {dropdown} = this.state;
      const dropdownClass = dropdown ? "open":"";
      const dashboardClass = location.pathname === "/" ? "active" : "";
      const reviewClass = location.pathname.match(/^\/review/) ? "active" : "";
      const grossClass = location.pathname.match(/^\/gross/) ? "active" : "";
      const historyClass = location.pathname.match(/^\/history/) ? "active" : "";
      const accSettingClass = location.pathname.match(/^\/setting\/account/) ? "active" : "";
      const serviceSettingClass = location.pathname.match(/^\/setting\/service/) ? "active" : "";
      const availSettingClass = location.pathname.match(/^\/setting\/availability/) ? "active" : "";
      const priceSettingClass = location.pathname.match(/^\/setting\/price/) ? "active" : "";

    return (
        <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
            <ul class="nav sidebar-nav">
                <li class="sidebar-brand">
                    <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>
                        <img src={FontIcon}/>
                    </IndexLink>
                </li>
                <li class={dashboardClass}>
                    <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}><i class="fa fa-fw fa-home"/> Dashboard</IndexLink>
                </li>
                <li class={historyClass}>
                    <Link to="history" onClick={this.toggleCollapse.bind(this)}><i class="fa fa-fw fa-folder"/> History </Link>
                </li>

                <li class={"dropdown " + dropdownClass}>
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" onClick={this.toggleDropDown.bind(this)}><i class="fa fa-fw fa-plus"/> Shop Setting <span class="caret"/></a>
                    <ul class="dropdown-menu" role="menu">
                        <li class={accSettingClass}><Link to="setting/account" onClick={this.toggleCollapse.bind(this)}>Account</Link></li>
                        <li class={serviceSettingClass}><Link to="setting/service" onClick={this.toggleCollapse.bind(this)}>Services</Link></li>
                        <li class={availSettingClass}><Link to="setting/availability" onClick={this.toggleCollapse.bind(this)}>Availability</Link></li>
                        <li class={priceSettingClass}><Link to="setting/pricing" onClick={this.toggleCollapse.bind(this)}>Pricing</Link> </li>
                    </ul>
                </li>
                <li class={reviewClass}>
                    <Link to="review" onClick={this.toggleCollapse.bind(this)}><i class="fa fa-fw fa-bank"/> Reviews</Link>
                </li>
                <li class={grossClass}>
                    <Link to="gross" onClick={this.toggleCollapse.bind(this)}><i class="fa fa-fw fa-dropbox"/> Gross Summary</Link>
                </li>
                <li>
                    <a href=""><i class="fa fa-fw fa-twitter"/> Logout</a>
                </li>
            </ul>
        </nav>
    );
  }
}
