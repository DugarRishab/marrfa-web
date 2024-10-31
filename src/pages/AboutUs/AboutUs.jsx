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
    EyeFilled,
    RocketFilled,
    CheckSquareFilled,
    LockFilled,
} from "@ant-design/icons";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import AvatarCard from "../../components/AvatarCard/AvatarCard";
import Mobcarousel from "../../components/mobile-carousel/Mobcarousel";

const Tabs = ["Company", "History", "Our values", "Our team", "Reviews", "Contact us"];

const helpInfo = [
    {
        heading: "Streamlined Discovery",
        detail: "We offer diverse international real estate options, tailored to meet your unique investment goals.",
        icon: "search",
    },
    {
        heading: "Data-Driven Insights",
        detail: "We empower investors with comprehensive market data to make data-driven investment decisions.",
        icon: "monitoring",
    },
    {
        heading: "Seamless Investment Process",
        detail: "Our platform streamlines property investment with user-friendly tools, offering a hassle-free experience from discovery to completion.",
        icon: "payments",
    },
    {
        heading: "Multilingual Support",
        detail: "Marrfa offers multilingual support in English, Arabic, and Persian, ensuring a smooth and accessible experience for global users.",
        icon: "translate",
    },
];

const HistoryInfo = [
    ["2024", "Partnerships and Growth", "Marrfa formed strategic partnerships with key real estate developers and expanded its offerings to include exclusive investment opportunities and enhanced market insights."],
    ["2023", "Platform Launch", "Marrfa launched its online platform, offering a data-driven approach to discovering and comparing international real estate properties."],
    ["2022", "Foundation stone", "Marrfa was established to address the challenges in cross-border real estate investments, focusing on creating a more transparent and streamlined process for investors worldwide."],
]

const ValueInfo = [
    ["Transparency", "We provide clear, data-driven insights to help investors make informed decisions with full visibility into their investments.", <EyeFilled className="bullet-icon" />],
    ["Innovation", "We continuously enhance our platform with the latest technology and tools to offer the best user experience and investment options.", <RocketFilled className="bullet-icon" />],
    ["Customer Success", "We prioritize our clients' success by offering personalized support and guidance throughout their investment journey.", <CheckSquareFilled className="bullet-icon" />],
    ["Integrity", "We operate with honesty and fairness, ensuring that all information and transactions are straightforward and trustworthy.", <LockFilled className="bullet-icon" />]
]

const IconMap = {
    search: <SearchOutlined style={{ fontSize: 25 }} />,
    monitoring: <LineChartOutlined style={{ fontSize: 25 }} />,
    payments: <BankOutlined style={{ fontSize: 25 }} />,
    translate: <TranslationOutlined style={{ fontSize: 25 }} />,
};

const lorem="Marrfa simplifies global real estate investments by breaking down barriers like complex processes and lack of transparency."

const HelpCard = ({ heading, icon, detail }) => {
    return (
        <div className="helpcard">
            <div className="icon">{IconMap[icon]}</div>
            <div className="topic">{heading}</div>
            <div className="detail">{detail}</div>
        </div>
    );
};



const HistoryItem = ({year, heading, desc}) => {
    return (
        <div className="history-item">
            <div className="year">{year}</div>
            <div className="big-dot"></div>
            <div className="desc">
                <div className="title">{heading}</div>
                <div className="para">
                    {desc}
                </div>
            </div>
        </div>
    );
};

const ValuePoint = ({heading, desc, icon}) => {
    return (
        <div className="valuepoint">
            <div className="icon-area">
                <div className="icon-wrap">
                    {icon}
                </div>
            </div>
            <div className="desc">
                <h2>{heading}</h2>
                {desc}
            </div>
        </div>
    );
};


const ReviewCard = ({name, org, comment}) => {
    return (
        <div className="reviewcard">
            <div className="image">
                <img src="/assets/balloon.jpeg" />
                <div className="name">{name}</div>
                <div className="org">{org}</div>
            </div>
            <div className="desc">
                {`"${comment}"`}
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
        setSelected(Tabs.indexOf(value));

        if (targetRef && targetRef.current) {
            // Calculate the target position
            const targetPosition = targetRef.current.offsetTop;

            // Set your desired offset
            const yOffset = 100; // Adjust this value as needed (negative for scrolling up)

            // Scroll to the calculated position
            window.scrollTo({
                top: targetPosition - yOffset,
                behavior: "smooth",
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
						className={
							"tabitem" + (selected == idx ? " active" : "")
						}
					>
						{value}
					</a>
				))}
			</div>
			<section className="intro">
				<div className="heading">About us</div>
				<h3>Invest in Global Real Estate with Confidence and Ease</h3>
				<div className="intro-desc">
					Marrfa simplifies global real estate investments by breaking
					down barriers like complex processes and lack of
					transparency. <br />
					<br />
					Our platform empowers you to invest confidently in
					properties worldwide, eliminating the hassle of traditional
					methods.
				</div>
				<img src="/assets/company-section.png" />
			</section>
			<section ref={refList["Company"]} id="Company" className="company">
				<div className="left">
					<div className="heading">Company</div>

					<p>
						Marrfa was founded with a singular vision: to
						democratize access to global real estate investments. In
						a world where technology has opened up so many
						opportunities, the freedom to invest in properties
						across borders remains limited. Many investors face a
						fragmented and opaque real estate market, with
						challenges such as lack of transparency, complex
						processes, and insufficient data to make informed
						decisions. Our mission is to break down these barriers
						and provide investors with the last freedom—the freedom
						to invest confidently in real estate anywhere in the
						world.
					</p>
					<p>
						For many, the journey to finding the right investment
						property is daunting. Traditional methods involve
						dealing with countless agents, navigating through
						unclear regulations, and facing a lack of reliable
						information. This cumbersome process often leaves
						investors feeling overwhelmed and uncertain. Marrfa is
						here to change that.
					</p>
				</div>
				<div className="right">
					<img src="/assets/unique-section.png" />
				</div>
			</section>
			<section className="unique">
				<div className="left">
					<img src="/assets/company-section.png" />
				</div>
				<div className="right">
					<div className="heading">What makes Marrfa different</div>

					<p>
						At Marrfa, we believe that everyone should have access
						to clear, transparent information when it comes to
						investing in real estate. The real estate market has
						long been dominated by gatekeepers who limit access to
						information and opportunities. This has created a
						significant gap in the market, especially for those
						looking to invest across borders.
					</p>
					<p>
						In today's interconnected world, people have more
						freedom than ever to work remotely, travel, and live in
						different parts of the globe. Yet, when it comes to
						investing in properties, many still feel confined by
						outdated systems and processes. Real estate is not just
						about buying a property; it's about investing in a
						future, choosing a community, and creating value. Marrfa
						exists to make this process straightforward, accessible,
						and fair for everyone.
					</p>
				</div>
			</section>
			<section className="helping">
				<div className="heading">How Marrfa helps Clients</div>
				<div className="how-help">
					At Marrfa, we believe that everyone should have access to
					clear, transparent information when it comes to investing in
					real estate. Real estate is not just about buying a
					property; it's about investing in a future, choosing a
					community, and creating value. Marrfa exists to make this
					process straightforward, accessible, and fair for everyone.
				</div>
				<div className="card-container">
					<div className="horizontal"></div>
					{helpInfo.map((value, idx) => (
						<HelpCard
							detail={value.detail}
							heading={value.heading}
							icon={value.icon}
							key={idx}
						/>
					))}
				</div>
			</section>
			{/* <section ref={refList["History"]} id="History" className="history">
                <div className="heading">History</div>
                <div className="history-list">
                    <div className="vertical">
                        <div className="leftline"></div>
                        <div className="rightline"></div>
                    </div>
                    {HistoryInfo.map((value, idx)=>(
                        <HistoryItem year={value[0]} heading={value[1]} desc={value[2]} key={idx} />
                    ))}
                </div>
            </section> */}
			<section
				ref={refList["Our values"]}
				id="Our values"
				className="values"
			>
				<div className="heading">Our values</div>
				<div className="value-box">
					{ValueInfo.map((value, idx) => (
						<ValuePoint
							heading={value[0]}
							desc={value[1]}
							key={idx}
							icon={value[2]}
						/>
					))}
				</div>
			</section>
			<div className="value-section">
				<img src="/assets/values-section.png" />
			</div>
			<section
				ref={refList["Our team"]}
				id="Our team"
				className="our-team"
			>
				<div className="heading">Our Team</div>
				<div className="executives">
					{/* <div className="sub-heading">Core team</div> */}
					<div className="members">
						<AvatarCard
							name={"Jamil Ahmad"}
							designation={"Founder & CEO"}
							dp={"/assets/people/jamil.jpg"}
						/>
						<AvatarCard
							name={"Mallika Boobna"}
							designation={"Brand Marketing Strategist"}
							dp={"/assets/people/malika.jpg"}
						/>
						<AvatarCard
							name={"Ross S"}
							designation={"Director - Investments"}
							dp={"/assets/people/ross.jpg"}
						/>
						<AvatarCard
							name={"Artem Gede"}
							designation={"Investment Manager, EU"}
							dp={"/assets/people/artem.jpg"}
						/>
					</div>
				</div>
			</section>
			{/* <section ref={refList["Reviews"]} id="Reviews" className="reviews">
                <div className="heading">Reviews</div>
                <div className="review-container">
                    <ReviewCard name={"Bob Ross"} org={"Marrfa"} comment={lorem}  />
                    <ReviewCard name={"Bob Ross"} org={"Marrfa"} comment={lorem}  />
                    <ReviewCard name={"Bob Ross"} org={"Marrfa"} comment={lorem}  />
                    <ReviewCard name={"Bob Ross"} org={"Marrfa"} comment={lorem}  />
                    
                </div>
            </section> */}
			<section
				ref={refList["Contact us"]}
				id="Contact us"
				className="contactus"
			>
				<div className="heading">Contact us</div>
				<div className="body">
					<div className="left">
						<a className="link">
							<EnvironmentFilled />
							Citadel Tower Office No. 1003 and 1004 Business Bay,
							Dubai.
						</a>
						<a className="link" href="mailto: sales@marrfa.com ">
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
