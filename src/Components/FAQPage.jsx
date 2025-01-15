import React, { useState } from 'react';
import '../Styles/FAQPage.css'; // Import the CSS file
import img14 from '../images/img14.jpg'; // Import the image from the src folder

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track which question is active

  const questionsAndAnswers = [
    {
      question: "What services does the General Hospital provide?",
      answer: "We provide comprehensive healthcare services, including diagnostics, specialized treatments, surgeries, and wellness programs."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by calling our helpline, visiting our website, or using our mobile app."
    },
    {
      question: "What are the hospital's visiting hours?",
      answer: "Visiting hours are from 9:00 AM to 7:00 PM. Special arrangements can be made for emergencies."
    },
    {
      question: "Does the hospital offer emergency services?",
      answer: "Yes, our emergency department is operational 24/7 with highly trained medical staff and state-of-the-art facilities."
    },
    {
      question: "Do you accept insurance for treatments?",
      answer: "Yes, we accept a wide range of insurance providers. Please contact our billing department for more details."
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active question
  };

  return (
    <section 
      className="faq-page"
      style={{ backgroundImage: `url(${img14})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-container">
        {questionsAndAnswers.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;
