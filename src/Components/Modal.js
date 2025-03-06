import { create } from "zustand";

const useStore = create((set) => ({
  isModalOpen: false,
  selectedPdf: null,
  selectedPdfName: "",

  openModal: (pdfUrl, pdfName) => {
    console.log(`Opening PDF: ${pdfName}`); // ✅ Logs PDF Name
    set({ isModalOpen: true, selectedPdf: pdfUrl, selectedPdfName: pdfName });
  },

  closeModal: () =>
    set({ isModalOpen: false, selectedPdf: null, selectedPdfName: "" }),
}));

export default useStore;
