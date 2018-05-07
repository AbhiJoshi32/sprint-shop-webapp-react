import React from "react";
import {findDOMNode} from 'react-dom';

export default class OrderInfo extends React.Component {
    constructor(){
        super();
    }

    render(){
        const accept = this.props.type === 'new' ? <div><button>Accept</button><button>Reject</button></div>:'';
        const {infoObj} = this.props;
        const infoTag = Object.keys(infoObj).map(function(key) {
            return <div key={key} >{key}:{infoObj[key]}</div>;
        });
        return  <div>
                    <div>{infoTag}</div>
                    {accept}
                </div>
    }
}