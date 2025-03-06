import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useStore from "../Zustand"; // Import Zustand store

// Define the pdfFiles array with the required metadata
const pdfFiles = [
  {
    name: "GMRES Report",
    url: "/ProjectPdf/GMRES_Report.pdf",
    category: "Math and Algorithms",
    description: "An overview of the Generalized Minimal Residual Method.",
    image: "/pictures/GMRES.png",
  },
  {
    name: "Math Etymology",
    url: "/ProjectPdf/Math_etymology.pdf",
    category: "Language",
    description:
      "Overview of the etymology of math definitions. Literal Definitions vs Greek/Latin.",
    image: "/pictures/ety.png",
  },
  {
    name: "Numerical Analysis Report",
    url: "/ProjectPdf/Num_Analysis_REPORT_2.pdf",
    category: "Math and Algorithms",
    description:
      "Overview of Least Squares, Google Page Rank Algorithm, and iteration methods for finding eigenvalues.",
    image: "/pictures/Num_report.png",
  },
  {
    name: "Singular Value Decomposition",
    url: "/ProjectPdf/SVD_Report.pdf",
    category: "Math and Algorithms",
    description: "Overview of Singular Value Decomposition.",
    image: "/pictures/SVD.png",
  },
  // Add more PDFs with their respective data as needed
];

const BlogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding: 20px;
`;

const PdfBlock = styled.div`
  width: 200px;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background-color: white;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const PdfImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
`;

const PdfCategory = styled.p`
  font-size: 12px;
  font-style: italic;
  color: #777;
  margin-top: 5px;
`;

const PdfName = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
`;

const PdfDescription = styled.p`
  font-size: 12px;
  margin-top: 5px;
  color: #555;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 20px 0;
`;

const Tab = styled.button`
  background-color: ${(props) => (props.active ? "#007bff" : "#f1f1f1")};
  color: ${(props) => (props.active ? "white" : "black")};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  width: 90%;
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
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
  height: 700px;
  border: none;
`;

const PdfNameInModal = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
`;

const ProjectsPage = () => {
  const { isModalOpen, selectedPdf, selectedPdfName, openModal, closeModal } =
    useStore();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  // Extract unique categories from pdfFiles
  useEffect(() => {
    const uniqueCategories = [
      "All", // Add an "All" option for showing all projects
      ...new Set(pdfFiles.map((pdf) => pdf.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  // Filter pdfFiles by selected category
  const filteredPdfFiles = pdfFiles.filter(
    (pdf) => selectedCategory === "All" || pdf.category === selectedCategory
  );

  return (
    <div>
      {/* Tabs for filtering by category */}
      <TabContainer>
        {categories.map((category) => (
          <Tab
            key={category}
            active={category === selectedCategory}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Tab>
        ))}
      </TabContainer>

      <BlogContainer>
        {filteredPdfFiles.map((pdf, index) => (
          <PdfBlock key={index} onClick={() => openModal(pdf.url, pdf.name)}>
            <PdfImage
              src={pdf.image || "/assets/pdf-thumbnail.png"}
              alt="PDF Thumbnail"
            />
            <PdfCategory>{pdf.category}</PdfCategory>
            <PdfName>{pdf.name}</PdfName>
            <PdfDescription>{pdf.description}</PdfDescription>
          </PdfBlock>
        ))}
      </BlogContainer>

      {/* Modal for PDF Viewer */}
      <Modal show={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={closeModal}>×</CloseButton>
          {selectedPdf && <PdfViewer src={selectedPdf} title="PDF Viewer" />}
          {selectedPdfName && (
            <PdfNameInModal>{selectedPdfName}</PdfNameInModal>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProjectsPage;
