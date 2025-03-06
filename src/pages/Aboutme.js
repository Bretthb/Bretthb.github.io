import React, { useState } from "react";
import "./Aboutme.css";
import styled from "styled-components";
import Content from "../Components/ContentDiv";

// Styling for the modal
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Dark background */
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure modal appears on top */
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: 80%; /* Wider modal */
  max-height: 90%;
  overflow: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PdfViewer = styled.iframe`
  width: 100%;
  height: 800px; /* Set height for the PDF view */
  border: none;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap; /* Allow images to wrap */
  justify-content: center; /* Center the images */
  background-color: white;
  padding-bottom: 6px;

  outline-width: 2px;

  margin: 10px;
  gap: 15px; /* Control the gap between the images */
  overflow-x: hidden; /* Prevent horizontal scroll */

  /* On smaller screens */
  @media (max-width: 768px) {
    padding: 0 10px; /* Add padding on the sides */
  }
`;

const AboutImage = styled.img`
  width: 185px; /* Set a fixed width */
  height: 185px; /* Set a fixed height for uniformity */
  object-fit: cover; /* Ensures images maintain a good aspect ratio while filling the container */
  border-radius: 8px; /* Optional: Add rounded corners */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Subtle shadow */

  /* Adjust layout on small screens */
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const BackgroundImage = styled.div`
  background-image: url(${(props) => props.image});
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  outline-style: solid;
  outline-width: 2px;
  outline-color: grey;
`;

const Aboutme = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const importAll = (r) => r.keys().map(r);
  const images = importAll(
    require.context(
      "../../public/pictures/Gallery",
      false,
      /\.(PNG|jpe?g|svg|webp|JPG|JPEG)$/
    )
  );

  return (
    <Content>
      <ImageContainer>
        {images.map((image, index) => (
          <AboutImage key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </ImageContainer>

      <BackgroundImage image="/pictures/backgroundaboutme.jpg"></BackgroundImage>
      <div className="about-container">
        <h1 className="about-title">About Me</h1>

        <div className="about-content">
          {/* Left side: Professional Photo */}
          <div className="about-left">
            <div className="photo-section">
              <img
                src="/pictures/Prof.JPEG"
                alt="Brett in a professional setting"
                className="profile-photo"
              />
            </div>
          </div>

          {/* Right side: General + Education */}
          <div className="about-right">
            {/* General Section */}
            <div className="about-section">
              <h2>General</h2>
              <p>
                Hello, and welcome to my personal website, which I coded in
                React. This website first started out as a project for learning
                the React library but sooner than later I realized that rather
                than leaving it in some repository and never touching it again,
                I can use this to be an archive of interests and research,
                aswell as a resourse for job recruiters to check out. While many
                people journal about their thoughts and idea's with physical pen
                and paper, I can code my thoughts and ideas into this website
                deciding which information can remain public or private. It is a
                limitless sandbox, which I can look back at one day, see how
                much I have acomplished and hopefully feel satisfied.
              </p>
            </div>

            {/* Education Section */}
            <div className="about-section">
              <h2>Education</h2>
              <p>
                Starting from high school, I attended a small private classical
                Christian school. It opened my eyes to the wonderful world of
                academics, making learning interesting rather than strict and
                stale.
              </p>
              <p>
                After high school, I enrolled in a classical-taught program in
                Pennsylvania to study Electrical Engineering. However, due to
                COVID-19 moving classes online, I took a gap year, working at a
                small upholstery shop while learning about programming in python
                and the mechanics of options in the stock market. This gap year
                is what sparked my interest in finance, I was constantly
                learning. From using options to hedge to forex, to bonds, even
                to learning about commodity futures.
              </p>
              <p>
                Fast forward to the end of my gap year, I applied to James
                Madison University and was accepted. Initially, I pursued
                Computer Science due to my strong interest in programming.
                However, I was denied entry into the major. After retaking a
                class and performing exceptionally well, I reapplied—only to be
                denied again. The JMU CS department cited that they had accepted
                too many applicants that cycle. This was a disappointing
                setback, but I refused to settle for something less challenging.
                I wanted my education to be rigorous and worth the investment.
                Ultimately, I chose to study Mathematics, a field that pushes me
                intellectually. Now, I am on track to graduate on time with a
                Math degree and a Computational Analytics concentration, all
                without extending my studies. I look forward to the future and
                remain committed to pursuing difficult and meaningful
                challenges.
              </p>
              <p>
                As William Wallace famously said in Braveheart, "Every man dies,
                not every man really lives."
              </p>
            </div>
          </div>
        </div>

        {/* Resume Section (Centered Below) */}
        <div className="resume-section">
          <h2>Resume</h2>
          <button onClick={openModal} className="resume-link">
            View My Resume
          </button>
        </div>
      </div>

      {/* Modal for Resume */}
      <Modal show={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={closeModal}>×</CloseButton>
          <PdfViewer src="/resume.pdf" title="Resume Viewer" />
        </ModalContent>
      </Modal>

      <BackgroundImage image="/pictures/backgroundaboutme.jpg"></BackgroundImage>

      <div className="ContactMeC">
        <div className="ContactMe">
          <h1>Contact Me</h1>
          <p>
            If you'd like to get in touch, feel free to reach out via email or
            connect with me on social media!
          </p>

          <div className="contactDetails">
            {/* Email Section */}
            <div className="email">
              <h3>Email:</h3>
              <a href="mailto:Bretthbono1@gmail.com">Bretthbono1@gmail.com</a>
            </div>

            {/* Social Media Links Section */}
            <div className="socials">
              <h3>Follow me:</h3>
              <a
                href="https://www.linkedin.com/in/bretthbono"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://github.com/bretthb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a
                href="https://x.com/Bretthbono"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i> x
              </a>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Aboutme;
