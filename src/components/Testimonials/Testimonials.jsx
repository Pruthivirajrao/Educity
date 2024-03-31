import React, { useRef } from 'react'
import "./Testimonials.css";
import nextBtn from "../../images/next.png"
import backBtn from "../../images/back-icon.png"
import user_1 from "../../images/user-1.png"
import user_2 from "../../images/user-2.png"
import user_3 from "../../images/user-3.png"
import user_4 from "../../images/user-4.png"
const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
    const slideForward = ()=>{
        if(tx > -50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


    const slideBackward = ()=>{
        if(tx < 0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className="testimonial">
        <img src={nextBtn} alt="" className="next-btn" onClick={slideForward}/>
        <img src={backBtn} alt="" className="back-btn" onClick={slideBackward}/>
        <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Educity,USA</span>
                        </div>
                    </div>
                    <p>Choosing  to pursue my degree at Educity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceed my expectations</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Educity,USA</span>
                        </div>
                    </div>
                    <p>Choosing  to pursue my degree at Educity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceed my expectations</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Educity,USA</span>
                        </div>
                    </div>
                    <p>Choosing  to pursue my degree at Educity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceed my expectations</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Educity,USA</span>
                        </div>
                    </div>
                    <p>Choosing  to pursue my degree at Educity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceed my expectations</p>
                </div>
            </li>
        </ul>

        </div>
    </div>
  )
}

export default Testimonials