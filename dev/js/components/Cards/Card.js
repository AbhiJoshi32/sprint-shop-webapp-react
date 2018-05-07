import React from "react";



export default class Card extends React.Component {

    render() {
        const {order} = this.props;
        const {type} =this.props;
        const {title} = this.props;
        const {cardCssClass} = this.props;
        return (
            <div class={"card " + cardCssClass}>
                <div class="card-header">{title}</div>
                <div class="card-content">
                    {this.props.children}
                </div>
            </div>
            );
    }
}