import React from "react";

const Section = ({ title, desc, children }) => {
    return (
        <div>
            <div className="row text-center">
                <div className=" row text-center d-flex justify-content-center">
                    <h1>
                        {title} <hr />
                    </h1>
                    <div className="row  d-flex justify-content-center">
                        <div className="col-6">
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default Section;
