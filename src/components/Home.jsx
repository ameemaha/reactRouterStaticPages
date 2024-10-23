import React from "react";
import { FaPeopleGroup  } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
const Home = () => {
  return <div className="container">
    <div className="row mt-5">
      <div className="col-lg-6 col-md-12 col-sm-6">
        <h1>We just don’t train,
        We transform the careers</h1>
        <p>Innomatics Research Labs is a pioneer in “Transforming Careers and Lives” of individuals in the Digital Space by catering advanced training on NASSCOM Future skills prime Certified Data Science, Python, Predictive Analytics Modeler, Machine Learning, Artificial Intelligence (AI), Full-stack web development, Amazon Web Services (AWS), DevOps, Microsoft Azure, Big data Analytics, Digital Marketing, and Career Launching program for students who are willing to showcase their skills in the competitive job market with valuable credentials, and also can complete courses with a certificate.</p>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="row grid gap-3">
          <div className="card g-col-3">
            <div className="card-body">
              <FaPeopleGroup style={{color:"red",fontSize:"30px"}}  />
              <h5 className="card-title">Global Leaders in training</h5>
              <p className="card-text">We have trainers hailing from the fortune companies who understand the real-time business cases and can train individuals based on them.</p>
            </div>
          </div>
          <div className="card g-col-6">
            <div className="card-body">
            <FaLaptopCode style={{color:"red",fontSize:"30px"}} />
              <h5 className="card-title">Practical oriented approach</h5>
              <p className="card-text">Our training methodology isn’t confined to theoretical one; We have an exposure towards the real-time industry training by industry experts professionals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Home;
