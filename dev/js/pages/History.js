import React from "react";
import Card from "../components/Cards/Card";
import Table from "../components/Table/Table";



export default class History extends React.Component {
    render() {
        const historyOrder = {
            headingList:['PIN','Username','Date','Time','Amount','Service','Binding','Pages'],
            entries:[
                {
                    attrList: ['1','Peter','10/10/10','10:10','10','Grayscale A4','None','10'],
                },
                {
                    attrList: ['1','Peter','10/10/10','10:10','10','Grayscale A4','None','10'],
                }]
        };
        return (
            <div>
                <div class="container">
                    <Card cardCssClass={'history-card'}>
                        <Table headingList={historyOrder.headingList} entries={historyOrder.entries}/>
                    </Card>
                </div>
            </div>
        );
    }
}
