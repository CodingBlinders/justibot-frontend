import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import './styles/globals.css';
import Image from 'next/image';


const Contact = () => {
  return (
   
    <div className="container mt-5">
    <Head>
      <title>Contact JustiBot</title>
    </Head>

    <div className="row justify-content-center">
        <h1 className="text-center mb-1 topic">Get in touch with JustiBot</h1>
        <p className="text-center mb-5">
          Contact JustiBot for personalized legal assistance and inquiries.
        </p>
        <div className="row justify-content-center content ">
          <div className="col-md-6 right">
            <h4 className="topic">Let's connect with Justibot</h4>
            <p className="form-label">Reach out for export guidance partnership opportunities, or general inquiries.</p>
            <form>
              <div className="flex flex-wrap">
                <div className="mb-2">
                  {/* <label htmlFor="lastName" className="form-label">Last Name</label> */}
                  <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                </div>
                <div className="mb-2">
                  {/* <label htmlFor="firstName" className="form-label">First Name</label> */}
                  <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                </div>
              </div>
              <div className="mb-2">
                {/* <label htmlFor="email" className="form-label">Email</label> */}
                <input type="email" className="form-control" id="email" placeholder="Email" />
              </div>
              <div className="mb-2">
                {/* <label htmlFor="phoneNumber" className="form-label">Phone Number</label> */}
                <input type="text" className="form-control" id="phoneNumber" placeholder="PhoneNumber" />
              </div>
              <div className="mb-5">
                {/* <label htmlFor="message" className="form-label">Message</label> */}
                <textarea className="form-control" id="message" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn mb-3">Send now!</button>
            </form>
          </div>
          <div className="col-md-5 left">
            
            <Image src="/image/scale.jpg" width={600} height={600} alt="Scales of justice" className="img-fluid" />
            <p>Stay connected with JustiBot through our various communication
              channels to experience exceptional customer service and tailored
              legal solution.
            </p>
          </div>

        </div>
    </div>
  </div>
   
  );
};

export default Contact;
