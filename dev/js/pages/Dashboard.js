import React from "react";

import ExtraCard from "../components/Cards/ExtraCard";
import Card from "../components/Cards/Card";
import Table from "../components/Table/Table";
import OrderInfo from "../components/Dashboard/OrderInfo";

export default class Dashboard extends React.Component {
    render() {
        const newOrder = {
            headingList:['Username','Number Of Pages','Amount','Time Of Request'],
            entries:[
                {
                    'attrList': ['Peter', '10', '100', '21:00'],
                    infoObj: {
                        Orientation: 'Landscape',
                        Service: 'Grayscale A4',
                        Binding: 'None',
                        Expression: '1-19'
                    }
                },
                {
                    'attrList': ['Peter', '10', '100', '21:00'],
                    infoObj: {
                        Orientation: 'Landscape',
                        Service: 'Grayscale A4',
                        Binding: 'None',
                        Expression: '1-19'
                    }
                }]
        };
        return (
            <div>
                <div class="container">
                    <div class="extra-info col-md-3">
                        <ExtraCard icon = "money" title="Income" value="5000" footer="25/5/2017" footerIcon="calendar-o "/>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class=" col-md-6">
                            <Card cardCssClass={'new-order'} title={'New Order'}>
                                <Table headingList={newOrder.headingList} entries={newOrder.entries} type={'collapsible'}>
                                    <OrderInfo type = {'new'}/>
                                </Table>
                            </Card>
                        </div>
                        <div class="col-md-6">
                            <Card cardCssClass={'completed-order'} title={'Completed Order'}>
                                <Table headingList={newOrder.headingList} entries={newOrder.entries} type={'collapsible'}>
                                    <OrderInfo type = {'completed'}/>
                                </Table>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
