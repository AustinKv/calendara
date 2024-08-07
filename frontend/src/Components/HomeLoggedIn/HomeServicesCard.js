const HomeServicesCard = ({ mode, service }) => {
    return (
        <>
            <div
                className={`card my-4 border-secondary ${
                    mode === "light" ? "-subtle" : ""
                }`}
                style={{ width: "30rem", overflow: "auto" }}
            >
                <img src={service.imgUrl} className="card-img-top" alt="..." />
                <div
                    className="card-body"
                    style={{
                        backgroundColor: mode === "light" ? "white" : "#4E5259",
                    }}
                >
                    <p
                        className={`card-text text-${
                            mode === "light" ? "black" : "white"
                        }`}
                    >
                        {service.text}
                    </p>
                </div>
            </div>
        </>
    );
};

export default HomeServicesCard;
