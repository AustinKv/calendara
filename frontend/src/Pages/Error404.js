import React from "react";
import { Link } from "react-router-dom";

const Error404 = ({ mode }) => {
    return (
        <>
            <div
                className="container d-flex justify-content-center mb-5"
                style={{ marginTop: "6rem" }}
            >
                <p
                    className={`my-0 text-${
                        mode === "light" ? "black" : "white"
                    }`}
                    style={{ fontSize: "3rem" }}
                >
                    Error404: Page not found
                </p>
            </div>
            <div className="container d-flex justify-content-center my-3">
                <p
                    className={`text-${mode === "light" ? "black" : "white"}`}
                    style={{ fontSize: "1.5rem" }}
                >
                    Unfortunately, the page you were looking for cannot be
                    found.
                </p>
            </div>
            <div className="container d-flex justify-content-center mt-2 mb-5">
                <p
                    className={`text-${mode === "light" ? "black" : "white"}`}
                    style={{ fontSize: "2rem" }}
                >
                    Go to the{" "}
                    <Link
                        to="/home"
                        className={`text-${
                            mode === "light" ? "primary" : "danger"
                        }`}
                        style={{ textDecoration: "none" }}
                    >
                        Home
                    </Link>{" "}
                    page
                </p>
            </div>
        </>
    );
};

export default Error404;
