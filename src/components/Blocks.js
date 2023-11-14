import React from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'; 

const Blocks = () => {
  return (
<div className="container gym-class mb-0">
        <div className="row px-3">
            <div className="col-md-6 p-0">
                <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                    <i className="flaticon-six-pack"></i>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Benefits</h3>
                    <p>Experience transformation with the 75 Hard Challenge: build resilience, discipline, and mental toughness. Achieve enduring self-improvement through fitness and conquer challenges for a life-changing journey</p>
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
            <div className="col-md-6 p-0">
                <div className="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                    <i className="flaticon-bodybuilding"></i>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Building Skills</h3>
                    <p>
                    75 Day Hard Challenge Focus: Transformative Discipline, Resilience, Mental Toughness, and Fitness for a Life-Altering Journey Toward Personal Triumph and Self-Improvement</p>
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blocks
