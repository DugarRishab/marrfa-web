import React from "react";
import "./PropertyRequestForm.css";
import banner from "/assets/banner/formbanner.png";
import PhoneInput from "./PhoneInput";
import { Input } from "antd";
const {TextArea} = Input;


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
                        <Input placeholder="Name" size="large" />
                        <PhoneInput />
                        <Input placeholder="Email" size="large" />
                    </div>
                    {/* <textarea
                        rows={4}
                        name="LookingFor"
                        id="describe"
                        placeholder="What are you looking for?
For example, I'm looking for an apartment in Downtown Dubai"
                    ></textarea> */}
                    <TextArea rows={4} placeholder="What are you looking for?
For example, I'm looking for an apartment in Downtown Dubai"/> 

                    <input type="button" value="Submit Request" />
                </form>
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
