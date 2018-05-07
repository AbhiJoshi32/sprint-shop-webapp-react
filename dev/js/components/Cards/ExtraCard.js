import React from "react";


export default class ExtraCard extends React.Component {
    render() {
        return (
            <div class="extra-card">
                <div class="row">
                    <div class="col-md-5"><i class={"fa fa-fw fa-"+this.props.icon+" extra-info-icon fa-4x"}/></div>
                    <div class="col-md-7 extra-info-content">
                        <div class="extra-info-head">
                            {this.props.title}
                        </div>
                        <div class="extra-info-value">
                            {this.props.value}
                        </div>
                    </div>
                </div>
                <div class="extra-card-footer">
                    <i class={"fa fa-"+ this.props.footerIcon}/>
                    {this.props.footer}
                </div>

            </div>
        );
    }
}
