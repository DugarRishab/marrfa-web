import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import {
    BankOutlined,
    LineChartOutlined,
    SearchOutlined,
    TranslationOutlined,
    EnvironmentFilled,
    MailFilled,
    PhoneFilled,
} from "@ant-design/icons";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

const Tabs = ["Company", "History", "Our values", "Our team", "Reviews", "Contact us"];

const helpInfo = [
    {
        heading: "Streamlined Discovery",
        detail: "Whether you are looking for properties in Europe or commercial investments in Asia, we provide a wide range of international real estate opportunities and an extensive inventory to suit your investment goals.",
        icon: "search",
    },
    {
        heading: "Data-Driven Insights",
        detail: "We equip investors with the latest market data, including historical price trends, rental yields, and capital appreciation forecasts. This information enables our clients to make well-informed decisions based on clear, factual insights.",
        icon: "monitoring",
    },
    {
        heading: "Seamless Investment Process",
        detail: "Our platform simplifies the entire investment journey, from property discovery to transaction completion. With user-friendly tools and transparency, investors can navigate their investments without hassles and uncertainties.",
        icon: "payments",
    },
    {
        heading: "Multilingual Support",
        detail: "To cater to a global clientele, Marrfa provides support in multiple languages, including English, Arabic, and Persian. This ensures that all users have a smooth and accessible experience, regardless of their location or language.",
        icon: "translate",
    },
];

const IconMap = {
    search: <SearchOutlined style={{ fontSize: 25 }} />,
    monitoring: <LineChartOutlined style={{ fontSize: 25 }} />,
    payments: <BankOutlined style={{ fontSize: 25 }} />,
    translate: <TranslationOutlined style={{ fontSize: 25 }} />,
};

const HelpCard = ({ heading, icon, detail }) => {
    return (
        <div className="helpcard">
            <div className="icon">{IconMap[icon]}</div>
            <div className="topic">{heading}</div>
            <div className="detail">{detail}</div>
        </div>
    );
};

const HistoryItem = () => {
    return (
        <div className="history-item">
            <div className="year">2024</div>
            <div className="big-dot"></div>
            <div className="desc">
                <div className="title">Opening store</div>
                <div className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, repellat vel dolore quos incidunt
                    sint voluptatibus magni exercitationem nobis repellendus, ea, fugit autem architecto fuga optio
                    soluta sequi? Alias, ex.
                </div>
            </div>
        </div>
    );
};

const ValuePoint = () => {
    return (
        <div className="valuepoint">
            <div className="icon-area">
                <div className="icon-wrap">
                    <LineChartOutlined className="bullet-icon" />
                </div>
            </div>
            <div className="desc">
                <h2>Important</h2>
                We provide clear, data-driven insights to help investors make informed decisions with full visibility
                into their investments.
            </div>
        </div>
    );
};

const AvatarCard = () => {
    return (
        <div className="avatar">
            <img src="/assets/balloon.jpeg" />
            <div className="name">Mallika</div>
            <div className="desig">Head designer</div>
        </div>
    );
};

const ReviewCard = () => {
    return (
        <div className="reviewcard">
            <div className="image">
                <img src="/assets/balloon.jpeg" />
                <div className="name">Marrfa</div>
                <div className="org">CEO, Nike</div>
            </div>
            <div className="desc">
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, totam molestiae exercitationem
                eveniet voluptatem tempore ipsam aspernatur iste accusamus eos. Rem minus dolore eius autem veniam
                dignissimos exercitationem. Illum, molestiae!"
            </div>
        </div>
    );
};

const AboutUs = () => {
    const [selected, setSelected] = useState(0);
    const refList = {};
    for (let tab of Tabs) {
        refList[tab] = useRef();
    }

    const homeRef = useRef();

    const handleScroll = (value) => {
        const targetRef = refList[value];
        setSelected(Tabs.indexOf(value))
    
        if (targetRef && targetRef.current) {
            // Calculate the target position
            const targetPosition = targetRef.current.offsetTop;
    
            // Set your desired offset
            const yOffset = 100; // Adjust this value as needed (negative for scrolling up)
    
            // Scroll to the calculated position
            window.scrollTo({
                top: targetPosition - yOffset,
                behavior: 'smooth',
            });
        }
    };
    

    return (
        <div ref={homeRef} className="about-us">
            <div className="tabs">
                {Tabs.map((value, idx) => (
                    <a
                        // ref={refList[value]}
                        key={idx}
                        onClick={() => handleScroll(value)}
                        className={"tabitem" + (selected == idx ? " active" : "")}
                    >
                        {value}
                    </a>
                ))}
            </div>
            <section ref={refList["Company"]} id="Company" className="company">
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
                        property; it's about investing in a future, choosing a community, and creating value. Marrfa
                        exists to make this process straightforward, accessible, and fair for everyone.
                    </p>
                </div>
            </section>
            <section className="helping">
                <div className="heading">How Marrfa helps Clients</div>
                <div className="card-container">
                    <div className="horizontal"></div>
                    {helpInfo.map((value, idx) => (
                        <HelpCard detail={value.detail} heading={value.heading} icon={value.icon} key={idx} />
                    ))}
                </div>
            </section>
            <section ref={refList["History"]} id="History" className="history">
                <div className="heading">History</div>
                <div className="history-list">
                    <div className="vertical">
                        <div className="leftline"></div>
                        <div className="rightline"></div>
                    </div>
                    <HistoryItem />
                    <HistoryItem />
                    <HistoryItem />
                </div>
            </section>
            <section ref={refList["Our values"]} id="Our values" className="values">
                <div className="heading">Our values</div>
                <div className="value-box">
                    <ValuePoint />
                    <ValuePoint />
                    <ValuePoint />
                    <ValuePoint />
                </div>
            </section>
            <section ref={refList["Our team"]} id="Our team" className="our-team">
                <div className="heading">Our Team</div>
                <div className="executives">
                    <div className="sub-heading">Executives</div>
                    <div className="members">
                        <AvatarCard />
                        <AvatarCard />
                        <AvatarCard />
                        <AvatarCard />
                    </div>
                </div>
            </section>
            <section ref={refList["Reviews"]} id="Reviews" className="reviews">
                <div className="heading">Reviews</div>
                <div className="review-container">
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>
            </section>
            <section ref={refList["Contact us"]} id="Contact us" className="contactus">
                <div className="heading">Contact us</div>
                <div className="body">
                    <div className="left">
                        <a className="link">
                            <EnvironmentFilled />
                            Citadel Tower Office No. 1003 and 1004 Business Bay, Dubai.
                        </a>
                        <a className="link">
                            <MailFilled />
                            sales@marrfa.com
                        </a>
                        <a className="link">
                            <PhoneFilled />
                            +971-563282700
                        </a>
                    </div>
                    <div className="right">
                        <GoogleMap />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
