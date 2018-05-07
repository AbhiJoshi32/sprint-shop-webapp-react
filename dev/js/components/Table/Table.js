import React from "react";
import TableContent from "./TableContent";
import TableContentCollapsable from "./TableContentCollapsable";


export default class Table extends React.Component {
    showDetail(ev) {
        console.log(ev.target.parentElement);
    }



    render() {
        const {headingList} = this.props;
        const {type} = this.props;
        const headingTag = headingList.map((head,headIndex)=>{return <th colSpan={1} key={'head'+headIndex}>{head}</th>});
        const {entries} = this.props;
        const entriesTag = entries.map((entry,index)=> {
            const {attrList} = entry;
            const {infoObj} = entry;
            if (type==='collapsible')
                return <TableContentCollapsable key={index} attrList={attrList} infoObj={infoObj} infoContainer={this.props.children}/>
            else
                return <TableContent key={index} attrList={attrList}/>
        });
        return (
            <table>
                <thead>
                    <tr>
                        {headingTag}
                    </tr>
                </thead>
                {entriesTag}
            </table>

        );
    }
}
