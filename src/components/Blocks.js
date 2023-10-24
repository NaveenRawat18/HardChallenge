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
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Build Muscle</h3>
                    <p>
                    The "75 Hard" challenge isn't primarily designed for muscle-building, but its rigorous exercise component, featuring two workouts daily, can lead to improved strength and muscle endurance. While it may not be the most efficient muscle-building program, it promotes consistent physical activity and mental toughness, which are valuable for fitness enthusiasts.
                    </p>
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
            <div className="col-md-6 p-0">
                <div className="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                    <i className="flaticon-bodybuilding"></i>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Building Skills</h3>
                    <p>
                        "75 Hard" isn't just about fitness; it's a powerful tool for skill-building. 
                        This challenge cultivates discipline, mental toughness, and consistency, which are essential attributes for mastering any skill. 
                        By adhering to its rules, participants learn to persevere, setting a strong foundation for skill development in any area of life.
                    </p>
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blocks
