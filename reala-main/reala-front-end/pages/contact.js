import React from "react";
import Layout from "../components/global/layout";
import InnerPageLayout from "../components/inner-page-layout";
import { CONTACTFROM } from "../config";
import Link from "next/link";
import { MdOutlineMailOutline} from "react-icons/md";
import axios from "axios";
import { API_URL } from "../config";
import { toast } from 'react-toastify';

const Contact = () => {
  const [loading, setLoading] = React.useState(false);
  const notifySuccess = () => toast.success("Message Sent!");
  const notifyError = () => toast.error("Oops! Something went wrong");
    // Handling form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    // Construct form data payload
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };
    
    // Send the form data to your API route
    try {
      const response = await axios.post(`/api/contact`, formData);
      // Handle success - clear form, show message, etc.
      notifySuccess();
      event.target.reset();
      console.log(response.data.message);
    } catch (error) {
      // Handle error - show error message, etc.
      notifyError();
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <Layout>
      <InnerPageLayout title="Need Instant Help?" />
      <div className="contact">
        <div className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="contact__info">
                  <h4>Email</h4>
                  <Link className="nav-link" href="mailto:Immatherealtor@gmail.com">
                    <MdOutlineMailOutline /> Immatherealtor@gmail.com
                  </Link>
                </div>
                <div className="contact__info">
                  <h4>Phone</h4>
                  <a href="tel:+14313347223">+1 (431) 334-7223</a>
                </div>
              </div>
              <div className="col-lg-8">
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="d-lg-flex gap-lg-3 input">
                    <div className="w-100">
                      <label htmlFor="name">Name</label>
                      <input
                        name="name"
                        id="name"
                        required
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="w-100">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="input">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      type="text"
                      rows="3"
                      placeholder="Message"
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="button-primary" disabled={loading} style={{backgroundColor: loading? "grey" : undefined}}>
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
