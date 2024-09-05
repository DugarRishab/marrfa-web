import React, { useState } from "react";
import "./Story.css";
import Carousel from "../carousel/Carousel";

const Story = () => {
    return (
        <div className="story">
            <img src="/assets/success.png" />
            <div className="story-info">
                <div className="date">12th May 2024</div>
                <div className="heading">Big story coming soon</div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quisquam perferendis. Reiciendis nisi
                    atque doloremque quam repellat sint accusamus quod nam dolorum numquam. Rem ipsum vel molestias, sed
                    dignissimos, exercitationem inventore hic animi, tenetur perspiciatis deleniti ducimus molestiae.
                    Nemo, cupiditate.
                </div>
            </div>
        </div>
    );
};

export default Story;
