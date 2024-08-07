import React from "react";

import Activity from "../Components/Dashboard/Activity";
import CompletedEvents from "../Components/Dashboard/CompletedEvents";
import OverdueEvents from "../Components/Dashboard/OverdueEvents";
import UpcomingEvents from "../Components/Dashboard/UpcomingEvents";

const Dashboard = ({ mode }) => {
    return (
        <>
            <div className="container my-5">
                <h1 className={`text-${mode === "light" ? "black" : "white"}`}>
                    Event Status Overview
                </h1>
            </div>
            <div className="container">
                <div className="row gx-lg-5 gx-md-4 gx-3">
                    <div className="col-lg-3 col-md-6 mb-5 d-flex justify-content-center">
                        <Activity mode={mode} />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 d-flex justify-content-center">
                        <CompletedEvents mode={mode} />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 d-flex justify-content-center">
                        <OverdueEvents mode={mode} />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 d-flex justify-content-center">
                        <UpcomingEvents mode={mode} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
