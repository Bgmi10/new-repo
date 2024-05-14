import React, { Fragment, useEffect, useState, useRef } from "react";
import "../Home/Home.css";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import im1 from "../../images/vapt.png";
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
import im20 from "../../images/20.png";
import temp1 from "../../images/playstore.png";
import tetmo from "../../images/tetmo.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

import mt from "../../images/meet.png";
import web from "../../images/web.png";
import api from "../../images/api.png";
import service from "../../images/network.png";
import ReCAPTCHA from "react-google-recaptcha";
import { Alert } from "@mui/material";

const Other = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    //const { loading, error, products } = useSelector((state) => state.products);
    const { loading, error, texts } = useSelector((state) => state.texts);
    const [rec, setRec] = useState(false);
    const recaptchaRef = React.createRef();
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

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title="Home" />

                    <div className="bg19" >

                        <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
                            <div className="box5">
                            <div className="groupi" style={{marginTop:'10%'}}>

                                    <p className="providing-high">
                                        Other Services
                                    </p>

                                    <p className="white">

                                    Our VAPT experts leverage industry-leading tools and proven methodologies to deliver a meticulous assessment of your website's security posture. We provide a detailed report outlining vulnerabilities, their severity levels, and recommended remediation steps. Don't wait for a security breach to happen.  Contact Nexus Security today and secure your new website with a comprehensive VAPT.                                    </p>
                                    <div className="top-button">
                                        <Button variant="contained">Know More</Button>
                                        <Button variant="contained">Get In Touch</Button>
                                    </div>

                                </div>
                                <div className="img1">
                                    <img src={im1} />
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                            <div className="why">

                                <div className="cen">
                                    <h2 className="white-cen"> Sub Categories</h2>
                                </div>

                                <div className="cards vap">
                                    <div className="card">
                                    <div className="card-data" style={{paddingTop:'50px'}}>
                                            <h2>RansomeWare and Litigation</h2>
                                            <p> APIs, or Application Programming Interfaces, ensure seamless communication between applications and data. However, these connectors can become security vulnerabilities if not properly secured. Our API Sentinel VAPT service examines your APIs for weaknesses, identifying potential exploits that could compromise sensitive data. We act as vigilant guardians, ensuring the integrity and security of your API integrations.</p>

                                        </div>
                                    </div>
                                    <div className="card">
                                    <div className="card-data" style={{paddingTop:'50px'}}>
                                            <h2>CTF Collab</h2>
                                            <p> Your website or web application embodies your digital identity. A security breach here can damage your reputation and expose sensitive user data. Our Web Fortress VAPT service serves as an impenetrable wall, rigorously testing your web application for vulnerabilities. We identify and address potential security gaps, fortifying your web presence against cyberattacks.</p>

                                        </div>
                                    </div>
                                    <div className="card">
                                    <div className="card-data" style={{paddingTop:'50px'}}>
                                            <h2>Webinars & Seminars</h2>
                                            <p> Your network serves as the foundation of your digital infrastructure, the gateway for data flow. Our Digital Perimeter VAPT service scrutinizes your network infrastructure, including firewalls, routers, and other devices. We identify exploitable weaknesses and recommend solutions, creating a robust shield for your network, safeguarding against potential cyber threats.</p>

                                        </div>
                                    </div>
                                    <div></div>
                                    <div className="card">
                                    <div className="card-data" style={{paddingTop:'50px'}}>
                                            <h2>Employee Training</h2>
                                            <p> Your network serves as the foundation of your digital infrastructure, the gateway for data flow. Our Digital Perimeter VAPT service scrutinizes your network infrastructure, including firewalls, routers, and other devices. We identify exploitable weaknesses and recommend solutions, creating a robust shield for your network, safeguarding against potential cyber threats.</p>

                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                                
                            </div>

                          
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                            <div className="book">
                                <img src={mt} />
                                <div>
                                    <h3>Book a meeting with us</h3>
                                    <p>Lets Collaborate and discuss about your business goals.
                                    </p>
                                </div>
                                <Button variant="contained">Book a meeting</Button>
                            </div>
                        </ScrollAnimation>
                    </div>


                </Fragment>
            )
            }
        </Fragment >
    );
};

export default Other;
