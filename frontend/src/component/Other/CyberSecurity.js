import React, { Fragment, useEffect, useState, useRef } from "react";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import {Fab, colors} from "@mui/material";
import { FAQ_auery } from "./mockdata.js";
import { useAlert } from "react-alert";
import im1 from "../../images/1.png";
import line1 from "../../images/line1.png";
import line2 from "../../images/line2.png";
import { getAllText } from "../../actions/homeAction.js";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import temp from "../../images/Frame.svg";
import founder from "../../images/6.png"
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import im20 from "../../images/20.png";
import ch1 from "../../images/et.png";
import temp1 from "../../images/playstore.png";
import tetmo from "../../images/tetmo.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import ReCAPTCHA from "react-google-recaptcha";
import mn2 from "../../images/mn2.png";
import ct from "../../images/ct.png";
import ct2 from "../../images/ct2.png";
import sot from "../../images/sot.png";
import sot2 from "../../images/sot2.png";
import { Alert } from "@mui/material";
import mt from "../../images/meet.png";
import cl1 from "../../images/cl1.jpg";
import cl2 from "../../images/cl2.jpg";
import cl3 from "../../images/cl3.jpg";
import cl4 from "../../images/cl4.jpg";
import cl5 from "../../images/cl5.png";
import bt1 from "../../images/bt1.png";
import bt2 from "../../images/bt2.jpg";
import bt3 from "../../images/bt3.png";
import bt6 from "../../images/bt6.png";
import oc from "../../images/os.png";
import course from "../../images/course.png";
import vapt from "../../images/vapt1.png";
import { TabView, TabPanel } from 'primereact/tabview';
import './cyber.css'
import CountdownTimer from './Countertime.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faArrowCircleUp, faCalendarCheck, faCertificate, faGlobe, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Accordion from "./Accordion.js";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const CyberSecurity = ({ history }) => {
    const alert = useAlert();
    const dispatch = useDispatch();
    //const { loading, error, products } = useSelector((state) => state.products);
    const { loading, error, texts } = useSelector((state) => state.texts);
    const [rec, setRec] = useState(false);
    const recaptchaRef = React.createRef();
    const [activeIndex, setActiveIndex] = useState(null);   
    

  const handleAccordionClick = (index) => {
    // Toggle the active index when a section is clicked
    setActiveIndex(activeIndex === index ? null : index);
  };

  
  
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    async function submitForm(event) {
        event.preventDefault()
        const captchaValue = recaptchaRef.current.getValue()
        if (!captchaValue) {
            alert.error('Please verify the reCAPTCHA!')
        } else {
            // make form submission
            alert.success('Form submission successful!')
        }
    }

    function bookMeeting() {
        history.push("/book");
    }

    function onChange(value) {
        setRec(value);
        console.log(recaptchaRef.current.getValue());

    }
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getAllText());
    }, [dispatch, error, alert]);

    console.log(texts);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 1024, // Adjust breakpoint as needed
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768, // Adjust breakpoint as needed
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // Add more breakpoints if needed
        ]
      };
      
   
      const slides = [
        { id: 1, content: `I am now confident in my ethical hacking abilities after completing this course. The practical, hands-on approach truly sets it apart."`, author: 'Tharun Danari, Ethical Hacker Intern' },
        { id: 2, content: `"This course took my hacking skills to the next level. The practical experience is what sets it apart from the rest."`, author: 'Kabir Verma, Intern, EH' },
        {
            id:3 , content: `"Enrolling in this ethical hacking course was a game-changer. The hands-on experience is what makes graduates stand out in the field."`,
            author: "Kamalesh, Ethical Hacker"
        }
       
      ];
    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title="cyber-security" />

                    <div className="main">
                          
                        <ScrollAnimation animateIn="fadeIn">
                            <div className="box5">
                                <div className="groupi" style={{ width: "100%", marginTop:'5%' }}>
                                    <p className="providing-high">
                                        Ethical Hacking
                                    </p >

                                    <p className="white">
                                        Advance upskilling program to elevate your career and land your dream job.
                                    </p>
                                    <div className="paragrap">
                                    <p className="white"> <FontAwesomeIcon icon={faCalendarCheck}  /> {"Next Batch Starts From Soon" }< CountdownTimer  hours={24} minutes={40} seconds={20} /> </p>
                                    <p className="white"> <FontAwesomeIcon icon={faGlobe} /> {"English"}</p>
                                    <p className="white"><FontAwesomeIcon icon={faCertificate} /> {"Certified Course"}</p>
                                    </div>


                                </div>
                                
                                <div className="img4">
                                    <img src={ch1} className="gradient-overlay" style={{ width: '80%', height: 'auto', borderRadius:
                                '6px' }} />
                                </div>
                                </div>
                        </ScrollAnimation>


                        <ScrollAnimation animateIn="fadeIn">
                            <div className="eth" sty>
                                <div className="zero">
                                    <TabView>
                                        <TabPanel className="tb" header="3 Months">
                                            <h3>UpSkilling Program</h3>

                                            <p>Certification</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Live sessions + Recorded Content Access</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Resume Building</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Dedicated Student Support</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Job-Ready Projects</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />

                                            <Button variant="contained">Enroll Now</Button>
                                        </TabPanel>
                                        <TabPanel className="tb" header="6 Months">
                                            <h3>Placement Training</h3>

                                            <p>Industry-Ready-Certification</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Students Community</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Resume building & Aptitude training</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Top-notch Programs</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Placement Training</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Doubt Solving sessions</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />

                                            <Button variant="contained" >Enroll Now</Button>
                                        </TabPanel>
                                        <TabPanel className="tb" header="9 Months">
                                            <h3>Job Assistance</h3>

                                            <p>Mock Interviews</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Free Aptitude & Soft Skills Training</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Students Community</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Building Real World Projects</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Job Referrals</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Letter of Recommendation</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />

                                            <Button variant="contained">Enroll Now</Button>
                                        </TabPanel>
                                    </TabView>
                                    <p className="tstx">
                                    For details about the course  
                                    </p>
                                    <Fab variant="extended" className="feb">
                                     
                                    <Chip icon={<MdPhone />} label="Talk to an Expert" />
                                      
                                    </Fab>
                                  
                                </div>
                                <Accordion />
                              
                        </div>
                        </ScrollAnimation>
                  

                    </div>
                </Fragment>
                
            )
            }
               
               <ScrollAnimation animateIn="fadeIn">
               <p className="top-1">FAQ</p>
               <h1 className="top-2">Frequently Asked Questions</h1>
               <h2 className="top-3">Discover valuable hands-on <br />experience and professional <br />development opportunities through <br />our dynamic upskilling program <br />designed <br /> to provide practical skills and<br /> industry exposure.</h2>
              
              
              <div className="chase-2">
               {FAQ_auery.map((item, index) => (
  <div className={`name ${activeIndex === index ? 'active' : ''}`} key={index}>
    <h3 onClick={() => handleAccordionClick(index)}>
      {item.title}
      <span className="icon-1">
        {activeIndex === index ? (
          <FontAwesomeIcon icon={faMinus} />
        ) : (
          <FontAwesomeIcon icon={faPlus} />
        )}
      </span>
    </h3>
    {activeIndex === index && (
      <div className="content">
        {item.subItems.map((subItem, subIndex) => (
          <p key={subIndex}>{subItem}</p> // Add unique keys for nested elements
        ))}
      </div>
    )}
  </div>
))}


      </div>
     
      <div style={{ maxWidth: '100%', padding: '0 20px' }}>
      <p className="cj-2" style={{ textAlign: 'center', color: '#32c2ff', marginTop: '50px' }}>EDUCATION FOR EVERYONE</p>
      <h1 className="students" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '30px', color: 'white', marginTop:'50px' }}>Let’s hear from our Students</h1>
      <div className="slider-container" style={{ margin: '0 auto', maxWidth: '800px' }}>
      <Slider
      {...settings}
      style={{ color: '#b0b0b0', marginTop: '50px', fontWeight:"bold", fontSize: "18px" }}
      className="slider"
      containerStyle={{
        borderBottom: '1px solid #b0b0b0',
        paddingBottom: '20px',
        fontSize:'large',
        fontWeight: "bold"
      }}
    >
      {slides.map((item, index) => (
        <div key={index} style={{ margin: '0 10px' }}>
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="description">
                <p className="subtitle-3">{item.content}</p>
                <div className="clint-info-wrapper">
                  <div className="client-info">
                    <h5 className="title">{item.author}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
</Slider>
      </div>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center",marginLeft: "50px" }}>
  <div style={{ width: "100%", maxWidth: "600px", marginBottom: "40px" }}>
    <img
      src="https://campalin.com/assets/images/others/Cert.png"
      style={{
        height: "auto",
        width: "70%",
        marginLeft: "50px",
        marginTop: "100px",
        fontWeight: "bold",
        maxWidth: "400px",
      }}
      alt="Certificate"
    />
    <h1 style={{ color: "white", marginLeft: "50px", marginTop: "8px" }}>Get a Certificate</h1>
    <p style={{ color: "#b0b0b0", marginLeft: "50px", fontSize: "18px", marginTop: "8px" }}>
      Enhance your skills and boost your career prospects with our upskilling program, <br />offering a certificate upon successful completion.
    </p>
    <div style={{ display: "flex", justifyContent: "start", marginTop: "20px" }}>
      <img
        src="https://campalin.com/Courses/images/card-icon-11.png"
        style={{ height: "30px", width: "30px", marginLeft: "50px" }}
        alt="Icon"
      />
      <p style={{ color: "#b0b0b0", marginLeft: "10px", fontSize: "18px", marginTop: "10px" }}>
        5000+
      </p>
      <p style={{ color: "#b0b0b0", marginLeft: "10px", fontSize: "18px", marginTop: "10px" }}>
        Get Award
      </p>
    </div>
    <div style={{ display: "flex", justifyContent: "start", marginTop: "20px" }}>
      <img
        src="https://campalin.com/Courses/images/card-icon-12.png"
        style={{ height: "30px", width: "30px", marginLeft: "50px" }}
        alt="Icon"
      />
      <p style={{ color: "#b0b0b0", marginLeft: "10px", fontSize: "18px", marginTop: "10px" }}>
        10K+
      </p>
      <p style={{ color: "#b0b0b0", marginLeft: "10px", fontSize: "18px", marginTop: "10px" }}>
        Zero to career
      </p>
    </div>
  </div>
  <div style={{ width: "100%", maxWidth: "600px", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <p className="white" style={{ marginTop: "100px", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>
      Projects You Will Build
      <span style={{ fontSize: "18px", fontWeight: "500", color: "#b0b0b0", display: "block", textAlign: "center", marginTop: "10px" }}>
        Apply your skills and knowledge gained during the upskilling program to build a real-world project, showcasing your abilities and demonstrating your readiness for professional development.
      </span>
    </p>
    <img
      src="https://campalin.com/assets/images/projects-thumbnails/projects%20ethical.png"
      style={{ height: "200px", width: "300px", marginTop: "20px" }}
      alt="Project Thumbnail"
    />
    <p style={{ marginTop: "40px", color: "#b0b0b0", textAlign: "center" }}>
      <FontAwesomeIcon icon={faArrowCircleUp} /> Industry relevant projects
    </p>
    <p style={{ marginTop: "40px", color: "#b0b0b0", textAlign: "center" }}>
      <FontAwesomeIcon icon={faArrowCircleUp} /> Trending technologies
    </p>
    <p style={{ marginTop: "40px", color: "#b0b0b0", textAlign: "center" }}>
      <FontAwesomeIcon icon={faArrowCircleUp} /> Learn Emerging Tech stacks
    </p>
  </div>
</div>

      </ScrollAnimation>
        </Fragment >
    );
};

export default CyberSecurity;
