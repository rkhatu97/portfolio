import React from "react";
import './index.scss'
import certificate from "../../images/Certificate-1.jpg";
import certificate_2 from "../../images/Certificate-2.jpg";

function Certificates() {
    return (
        <section className="certificate-page component-spacing" id="certificates">
            <div className="component-header"> Certificates </div>
            <div className="component-sub-header"> Certificates </div>
            {/* <div className="d-flex justify-content-evenly">
                
                
            </div> */}
            <div className="d-flex align-items-center justify-content-center col-lg-12 col-md-12 col-Sm-12 col-xs-12">
                    <img className="col-lg-6 col-md-5 col-Sm-12 col-xs-12" src={certificate_2} alt="jpg" />
                    <img className="col-lg-6 col-md-5 col-Sm-12 col-xs-12" src={certificate} alt="jpg_1" />
                </div>
        </section>
    )
}

export default Certificates;