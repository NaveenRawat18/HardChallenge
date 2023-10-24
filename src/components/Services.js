import React from 'react'

const Services = () => {
  return (
    <div className="container-fluid my-5">
    <div className="row">
        <div className="col-lg-4 p-0">
            <div className="d-flex align-items-center bg-secondary text-white px-5" style={{minHeight: "300px"}}>
                <i className="flaticon-training display-3 text-primary mr-3"></i>
                <div className="">
                    <h2 className="text-white mb-3">Progression</h2>
                    <p>75 Hard transforms mental resilience and physical endurance through daily tasks: two workouts, strict diet, water intake, reading, progress photos, self-discipline. Progression thrives, forging unbreakable willpower
                    </p>
                </div>
            </div>
        </div>
        <div className="col-lg-4 p-0">
            <div className="d-flex align-items-center bg-primary text-white px-5" style={{minHeight: "300px"}}>
                <i className="flaticon-weightlifting display-3 text-secondary mr-3"></i>
                <div className="">
                    <h2 className="text-white mb-3">Workout</h2>
                    <p>In the 75 Hard program, workouts are intense and daily, consisting of two 45-minute sessions. These workouts push physical and mental limits, promoting discipline and resilience.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-lg-4 p-0">
            <div className="d-flex align-items-center bg-secondary text-white px-5" style={{minHeight: "300px"}}>
                <i className="flaticon-treadmill display-3 text-primary mr-3"></i>
                <div className="">
                    <h2 className="text-white mb-3">Nutrition</h2>
                    <p>In "75 Hard," a fitness challenge, nutrition is key. Participants must follow a strict diet, emphasizing whole foods, balanced macros, and proper hydration to achieve their physical and mental transformation goals.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services
