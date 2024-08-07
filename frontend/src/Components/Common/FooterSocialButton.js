import React from "react";

const FooterSocialButton = ({ mode, site, btn }) => {
    return (
        <>
            <a
                className={`btn btn-${
                    mode === "light" ? "" : "dark"
                } btn-floating btn-shadow-white text-white m-1 ${
                    mode === "light" ? "footer-social-btn-light" : ""
                }`}
                href={`https://www.${site}.com/`}
                role="button"
            >
                <i className={`bi bi-${btn}`}></i>
            </a>
        </>
    );
};

export default FooterSocialButton;
