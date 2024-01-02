/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import { thumparallaxDown ,simpleParallax} from "../../common/thumparallax";

const MinimalArea2 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/maninspec.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">Dream. Innovate. Implement.</h4>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Our talented software development company is experienced in creating customized software solutions 
                that align with your unique business demands.
                 Whether you need a web operation, mobile app, or enterprise software,
                  we've the chops and skills to deliver high-quality, scalable results that meet your aims.
                </p>
              </Split>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  We provide free initial consultation and support.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  We work with some of the most successful businesses.
                </li>
              </ul>
              <Link href={`/about/about-dark`}>
                <a
                  className="butn bord curve mt-40 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <span>Discover</span>
                </a>
              </Link>

              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea2;
