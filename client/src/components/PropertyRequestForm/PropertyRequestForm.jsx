import React from "react";
import "./PropertyRequestForm.css";
import banner from "/assets/banner/formbanner.png";
import PhoneInput from "./PhoneInput";
import CustomButton from "../button/CustomButton";


const PropertyRequestForm = () => {
    return (
        <div className="property-form">
            <div className="data-capture">
                <div className="f-heading">Marrfa's Managers are here to help you select a property</div>
                <p>
                    Leave a request, and our expert will contact you to clarify your enquiry and help select suitable
                    properties.
                </p>

                <form action="#">
                    <div className="basic-dtls">
                        <input name="Name" type="text" placeholder="Name" />
                        {/* <input name="Phone" type="" placeholder="Phone" /> */}
                        <PhoneInput />
                        <input name="Email" type="email" placeholder="Email" />
                    </div>
                    <textarea
                        rows={4}
                        name="LookingFor"
                        id="describe"
                        placeholder="What are you looking for?
For example, I'm looking for an apartment in Downtown Dubai"
                    ></textarea>

                    <CustomButton rounded={false} text={"Submit Request"} />
                </form>
                <div className="consent">I confirm that I have read and accept the Privacy Policy and Personal Data Processing Guidelines.</div>
            </div>
            <div className="banner">
                <img src={banner} alt="Jude Halpert" />
                <div className="nameplate">
                    <span style={{fontWeight: 600}}>Jude Halpert</span>,<i>Real Estate Expert Marrfa, UAE</i>
                </div>
            </div>
        </div>
    );
};

export default PropertyRequestForm;
