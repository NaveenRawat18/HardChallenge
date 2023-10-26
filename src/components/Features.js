import React from 'react';

const Features = () => {

  return (
    <div className="container feature pt-5">
    <div className="d-flex flex-column text-center mb-5">
        <h4 className="text-primary font-weight-bold">Rules of</h4>
        <h4 className="display-4 font-weight-bold">75 Hard challenge</h4>
    </div>
    <div className="row">
        <div className="col-md-6 mb-5">
            <div className="row align-items-center">
                <div className="col-sm-5">
                    <img className="img-fluid mb-3 mb-sm-0" src="./assets/img/feature-1.jpg" alt="Image" />
                    <i className="flaticon-barbell"></i>
                </div>
                <div className="col-sm-7">
                    <h4 className="font-weight-bold">Workout</h4>
                    <p>     
                        "75 Hard" mandates two daily workouts, one outdoors. 
                        This rigorous exercise regimen fosters discipline, enhances endurance, and cultivates a commitment to fitness, 
                        making it a fundamental component of the challenge.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-6 mb-5">
            <div className="row align-items-center">
                <div className="col-sm-5">
                    <img className="img-fluid mb-3 mb-sm-0" src="./assets/img/feature-2.jpg" alt="Image" />
                    <i className="flaticon-training"></i>
                </div>
                <div className="col-sm-7">
                    <h4 className="font-weight-bold">10 Pages a day</h4>
                    <p>                        
                        In the "75 Hard" challenge, reading 10 pages of non-fiction daily fosters continual learning and personal growth, 
                        enhancing mental resilience and knowledge while emphasizing discipline.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-6 mb-5">
            <div className="row align-items-center">
                <div className="col-sm-5">
                    <img className="img-fluid mb-3 mb-sm-0" src="./assets/img/feature-3.jpg" alt="Image" />
                    <i className="flaticon-trends"></i>
                </div>
                <div class="col-sm-7">
                    <h4 class="font-weight-bold">Drink 4L a day</h4>
                    <p>
                        Consuming 4 liters of water daily in the "75 Hard" challenge promotes hydration, 
                        supports overall health, and reinforces discipline. Staying well-hydrated is essential for success in the program.
                    </p>
                </div>
            </div>
        </div>
        <div class="col-md-6 mb-5">
            <div class="row align-items-center">
                <div class="col-sm-5">
                    <img class="img-fluid mb-3 mb-sm-0" src="./assets/img/feature-4.jpg" alt="Image" />
                    <i class="flaticon-support"></i>
                </div>
                <div className="col-sm-7">
                    <h4 className="font-weight-bold">Take Selfie</h4>
                    <p>Taking a daily progress selfie is a rule in the "75 Hard" challenge. It helps track your physical transformation, instilling discipline, and accountability throughout the journey.</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 mb-5">
            <div class="row align-items-center">
                <div class="col-sm-5">
                    <img class="img-fluid mb-3 mb-sm-0" src="./assets/img/feature-5.jpg" alt="Image" />
                    <i class="flaticon-support"></i>
                </div>
                <div className="col-sm-7">
                    <h4 className="font-weight-bold">Healthy Diet</h4>
                    <p>In "75 Hard," a healthy diet is a core rule. It emphasizes consistent adherence to dietary choices aligned with individual goals, promoting better nutrition and overall well-being.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Features
