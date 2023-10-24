import React from 'react'

const Blog = () => {
  return (
    <div className="container pt-5">
        <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-primary font-weight-bold">Our Blog</h4>
            <h4 className="display-4 font-weight-bold">Latest Article From Blog</h4>
        </div>
        <div className="row">
            <div className="col-lg-6 mb-5 blog-item">
                <img className="img-fluid mb-4" src="./assets/img/blog-1.jpg" alt="Image" />
                <div className="d-flex align-items-center mb-4">
                    <div className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{width: "80px", height: "80px"}}>
                        <small>21</small>
                        <strong className="text-uppercase m-0 text-white">March</strong>
                        <small>2022</small>
                    </div>
                    <div className="pl-3">
                        <h3 className="font-weight-bold">Fitness</h3>
                        <div className="d-flex">
                            <small className="mr-2 text-muted"><i className="fa fa-user"></i> Admin</small>
                            <small className="mr-2 text-muted"><i className="fa fa-folder"></i> Fitness</small>
                            <small className="mr-2 text-muted"><i className="fa fa-comments"></i> 15 Comments</small>
                        </div>
                    </div>
                </div>
                <p>The 75 Hard Challenge, a rigorous 75-day self-improvement program, offers a unique pathway to career excellence. By instilling discipline, time management, and resilience, it equips individuals with vital skills. Consisting of daily workouts, reading, diet, and hydration goals, this challenge fosters mental toughness and determination. Physical fitness not only enhances health but also increases energy and cognitive abilities, translating into heightened productivity. Moreover, daily reading promotes continuous learning, crucial in the ever-evolving professional landscape. The challenge encourages goal-setting, self-confidence, and the ability to tackle setbacks head-on. Ultimately, the 75 Hard Challenge isn't just a fitness journey; it's a career-boosting transformation.</p>
                <a className="btn btn-outline-primary mt-2 px-3" href="">Read More <i className="fa fa-angle-right"></i></a>
            </div>
            <div className="col-lg-6 mb-5 blog-item">
                <img className="img-fluid mb-4" src="./assets/img/blog-2.jpg" alt="Image" />
                <div className="d-flex align-items-center mb-4">
                    <div className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{width: "80px", height: "80px"}}>
                        <small>01</small>
                        <strong className="text-uppercase m-0 text-white">Jan</strong>
                        <small>2023</small>
                    </div>
                    <div className="pl-3">
                        <h3 className="font-weight-bold">Skill Development</h3>
                        <div className="d-flex">
                            <small className="mr-2 text-muted"><i className="fa fa-user"></i> Admin</small>
                            <small className="mr-2 text-muted"><i className="fa fa-folder"></i> Web Development</small>
                            <small className="mr-2 text-muted"><i className="fa fa-comments"></i> 15 Comments</small>
                        </div>
                    </div>
                </div>
                <p>The 75 Hard Challenge, a rigorous 75-day self-improvement program, offers a unique pathway to career excellence. By instilling discipline, time management, and resilience, it equips individuals with vital skills. Consisting of daily workouts, reading, diet, and hydration goals, this challenge fosters mental toughness and determination. Physical fitness not only enhances health but also increases energy and cognitive abilities, translating into heightened productivity. Moreover, daily reading promotes continuous learning, crucial in the ever-evolving professional landscape. The challenge encourages goal-setting, self-confidence, and the ability to tackle setbacks head-on. Ultimately, the 75 Hard Challenge isn't just a fitness journey; it's a career-boosting transformation.</p>
                <a className="btn btn-outline-primary mt-2 px-3" href="">Read More <i className="fa fa-angle-right"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Blog
