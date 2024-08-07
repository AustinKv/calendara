import React from "react";

import HomeServices from "../Components/HomeLoggedIn/HomeServices";
import HomeFAQ from "../Components/HomeLoggedIn/HomeFAQ";
import HomeAd from "../Components/HomeLoggedIn/HomeAd";
import HomeMain from "../Components/HomeLoggedIn/HomeMain";
import HomeWelcome from "../Components/HomeLoggedIn/HomeWelcome";

const HomeLoggedIn = ({ mode }) => {
    return (
        <>
            <div className="home-page">
                <div className="container">
                    <HomeMain mode={mode} />

                    <HomeWelcome mode={mode} />

                    <HomeAd mode={mode} />

                    <HomeFAQ mode={mode} />

                    <HomeServices mode={mode} />
                </div>
            </div>
        </>
    );
};

export default HomeLoggedIn;
