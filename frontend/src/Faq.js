import React, { useState } from "react";
import "./Faq.css";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button onClick={() => setIsOpen(!isOpen)} className="faq-question">
        <span>{question}</span>
        <span>{isOpen ? <i class="fa-solid fa-minus"></i> : <i class="fa-solid fa-plus"></i>}</span>
      </button>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
}

function FAQSection() {
  const faqs = [
    { question: "Why a FAQ section?", answer: "To provide quick answers to common questions." },
    { question: "How does this work?", answer: "Click on a question to expand the answer." },
    { question: "Can I add more questions?", answer: "Yes, just modify the FAQ array in the code." }
  ];

  return (
    <>
    <i class="fa-solid fa-arrow-left arrow-buton"></i>
    <div className="faq-section">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <div className="search-container">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="What are you looking for?" className="faq-search" />
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </div>
    </>
    
  );
}

function Faq() {
  return (
    <div>
      <FAQSection />
    </div>
  );
}

export default Faq;
