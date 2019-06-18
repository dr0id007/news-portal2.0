import React from "react";
import Footer from "./footer";

const about = () => {
  return (
    <div>
      <header className="text-center py-5 mb-4 bg-b">
        <div className="container">
          <h1 className="font-weight-light text-white ">About Page</h1>
          <h5 className="text-white font-weight-light p-5 mb-5">
            This is the about section of the news portal which contains same old
            boring section that no one wants to read and if you are reading this
            that means you are interested in this project or just click by
            mistake.Here's a fun fact that all pandas in the world are on loan
            from China,cool isn't it. One more if you were to spell out numbers
            starting from one, you would not find letter 'A' until thousand. Now
            let me introduce myself, I am a student by nature and web developer
            by passion , as love to create ideas into reality by coding them
            into life , and just created this spa web app using react js and
            just to test my react.js skills and to also display it to my
            projects.As you can also check out my other projects also by
            clicking the link.If you have read this far hope you have an awesome
            day.Peace.!
          </h5>
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default about;
