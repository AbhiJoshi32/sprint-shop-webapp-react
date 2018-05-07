import React from "react";

export default class TableContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {attrList} = this.props;
        const entryTag = attrList.map((attr,attrindex)=>{return <td colSpan={1} key={'summ'+attrindex}>{attr}</td>});
        return(
            <tbody>
                <tr>{entryTag}</tr>
            </tbody>
        )
    };
}