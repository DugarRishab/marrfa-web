import React, { useState } from "react";
import "./AboutUs.css";

const Tabs = ["Company", "History", "Our values", "Our team", "Reviews", "Contact us"];

const helpInfo = [
    {
        heading: "Streamlined Discovery",
        detail: "Whether you are looking for properties in Europe or commercial investments in Asia, we provide a wide range of international real estate opportunities and an extensive inventory to suit your investment goals.",
        icon: "search"
    },
    {
        heading: "Data-Driven Insights",
        detail: "We equip investors with the latest market data, including historical price trends, rental yields, and capital appreciation forecasts. This information enables our clients to make well-informed decisions based on clear, factual insights.",
        icon: "monitoring"
    },
    {
        heading: "Seamless Investment Process",
        detail: "Our platform simplifies the entire investment journey, from property discovery to transaction completion. With user-friendly tools and transparency, investors can navigate their investments without hassles and uncertainties.",
        icon: "payments"
    },
    {
        heading: "Multilingual Support",
        detail: "To cater to a global clientele, Marrfa provides support in multiple languages, including English, Arabic, and Persian. This ensures that all users have a smooth and accessible experience, regardless of their location or language.",
        icon: "translate"
    },
]

const HelpCard = ({heading, icon, detail}) => {
    return (
        <div className="helpcard">
            <div className="icon">
                <i className="material-icons material-symbols-outlined">{icon}</i>
            </div>
            <div className="topic">{heading}</div>
            <div className="detail">
                {detail}
            </div>
        </div>
    );
};

const AboutUs = () => {
    const [selected, setSelected] = useState(0);
    console.log(selected);

    return (
        <div className="about-us">
            <section className="tabs">
                {Tabs.map((value, idx) => (
                    <a
                        key={idx}
                        onClick={() => setSelected(idx)}
                        className={"tabitem" + (selected == idx ? " active" : "")}
                    >
                        {value}
                    </a>
                ))}
            </section>
            <section className="company">
                <div className="left">
                    <div className="heading">Company</div>

                    <p>
                        Marrfa was founded with a singular vision: to democratize access to global real estate
                        investments. In a world where technology has opened up so many opportunities, the freedom to
                        invest in properties across borders remains limited. Many investors face a fragmented and opaque
                        real estate market, with challenges such as lack of transparency, complex processes, and
                        insufficient data to make informed decisions. Our mission is to break down these barriers and
                        provide investors with the last freedom—the freedom to invest confidently in real estate
                        anywhere in the world.
                    </p>
                    <p>
                        For many, the journey to finding the right investment property is daunting. Traditional methods
                        involve dealing with countless agents, navigating through unclear regulations, and facing a lack
                        of reliable information. This cumbersome process often leaves investors feeling overwhelmed and
                        uncertain. Marrfa is here to change that.
                    </p>
                </div>
                <div className="right">
                    <img src="/assets/company-section.png" />
                </div>
            </section>
            <section className="unique">
                <div className="left">
                    <img src="/assets/company-section.png" />
                </div>
                <div className="right">
                    <div className="heading">What makes Marrfa different</div>

                    <p>
                        At Marrfa, we believe that everyone should have access to clear, transparent information when it
                        comes to investing in real estate. The real estate market has long been dominated by gatekeepers
                        who limit access to information and opportunities. This has created a significant gap in the
                        market, especially for those looking to invest across borders.
                    </p>
                    <p>
                        In today's interconnected world, people have more freedom than ever to work remotely, travel,
                        and live in different parts of the globe. Yet, when it comes to investing in properties, many
                        still feel confined by outdated systems and processes. Real estate is not just about buying a
                        property; it’s about investing in a future, choosing a community, and creating value. Marrfa
                        exists to make this process straightforward, accessible, and fair for everyone.
                    </p>
                </div>
            </section>
            <section className="helping">
                <div className="heading">How Marrfa helps Clients</div>
                <div className="card-container">
                <div className="horizontal"></div>
                {
                    helpInfo.map((value, idx)=>(
                        <HelpCard detail={value.detail} heading={value.heading} icon={value.icon} key={idx} />
                    ))
                }
                    
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
