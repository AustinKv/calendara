import React from "react";

import HomeConclusion from "../Components/HomeLoggedOut/HomeConclusion";
import HomeServices from "../Components/HomeLoggedOut/HomeServices";
import HomeFAQ from "../Components/HomeLoggedOut/HomeFAQ";
import HomeAd from "../Components/HomeLoggedOut/HomeAd";
import HomeMain from "../Components/HomeLoggedOut/HomeMain";
import HomeWelcome from "../Components/HomeLoggedOut/HomeWelcome";

const HomeLoggedOut = ({ mode }) => {
    return (
        <>
            <div className="home-page">
                <div className="container">
                    <HomeMain mode={mode} />

                    <HomeWelcome mode={mode} />

                    <HomeAd mode={mode} />

                    <HomeFAQ mode={mode} />

                    <HomeServices mode={mode} />

                    <HomeConclusion mode={mode} />
                </div>
            </div>
        </>
    );
};

export default HomeLoggedOut;
