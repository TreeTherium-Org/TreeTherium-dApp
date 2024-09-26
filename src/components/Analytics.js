import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";
import StackedBarChart from "./total-tree-planted.js";
import SideBySideCards from "./card-metrics.js";
import PlanterPieChart from "./total-planter-participation.js";
import GeographicalDistribution from "./geographical-distribution.js";

class Analytics extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Analytics'}>
                <SideBySideCards className="grid-cols-1 @xl:grid-cols-2 @4xl:col-span-2 @6xl:grid-cols-4 @7xl:col-span-12" />               
                <GeographicalDistribution />
                <StackedBarChart />
                <PlanterPieChart />

            </Section>
        );
    }
}

export default Analytics;