import React from "react";

export default class TableContentCollapsable extends React.Component {
    constructor() {
        super();
        this.state = {collapsed:true}
    }
    toggleState() {
        this.setState({collapsed:!this.state.collapsed});
    }
    render() {
        const {attrList} = this.props;
        const {infoContainer} = this.props;
        const {infoObj} = this.props;
        const h = this.state.collapsed === true ? '0':'400px';
        const entryTag = attrList.map((attr,attrindex)=>{return <td colSpan={1} key={'attr'+attrindex}>{attr}</td>});
        const infoTag = React.cloneElement(infoContainer, { infoObj: infoObj });

        return(
            <tbody onClick={this.toggleState.bind(this)}>
                <tr>{entryTag}</tr>
                <tr>
                    <td colSpan={4}>
                        <div class="table-info collapsible" style={{maxHeight:h}}>
                            {infoTag}
                        </div>
                    </td>
                </tr>
            </tbody>
        )
    };
}