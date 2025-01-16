import React, { useState } from "react";
import "../Styles/NewsPage.css"; // External CSS for styling
import newsImage1 from "../images/News1.jpg"; // Example images
import newsImage2 from "../images/News2.jpg";
import newsImage3 from "../images/News3.jpg";

const NewsPage = () => {
  const [expandedCard, setExpandedCard] = useState(null); // State to track expanded card

  const newsData = [
    {
      title: "Breakthrough in Cancer Treatment",
      description:
        "Researchers have developed a new treatment for cancer that shows promising results in clinical trials.",
      details:
        "This breakthrough involves a revolutionary approach targeting cancer cells while minimizing damage to healthy cells. The treatment has shown success in early-stage trials and is expected to be available for public use soon.",
      image: newsImage1,
    },
    {
      title: "COVID-19 Vaccination Updates",
      description:
        "Stay updated with the latest information on COVID-19 vaccination schedules and guidelines.",
      details:
        "New guidelines have been issued for COVID-19 vaccinations, emphasizing booster shots and expanding eligibility to younger age groups. Vaccination centers are now offering extended hours to accommodate more appointments.",
      image: newsImage2,
    },
    {
      title: "Mental Health Awareness",
      description:
        "Learn about the importance of mental health and how to access support and resources.",
      details:
        "Mental health remains a critical focus area. New support programs and workshops have been launched to help individuals cope with stress, anxiety, and depression. Check your nearest healthcare facility for resources.",
      image: newsImage3,
    },
  ];

  const toggleReadMore = (index) => {
    setExpandedCard(expandedCard === index ? null : index); // Toggle the expanded card
  };

  return (
    <div className="news-page">
      <h1 className="news-title" data-aos="fade-up">
        Latest Healthcare News
      </h1>
      <div className="news-grid">
        {newsData.map((news, index) => (
          <div
            className="news-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <img src={news.image} alt={news.title} className="news-image" />
            <h2 className="news-card-title">{news.title}</h2>
            <p className="news-card-description">{news.description}</p>
            {expandedCard === index && (
              <p className="news-card-details">{news.details}</p>
            )}
            <button
              className="news-read-more"
              onClick={() => toggleReadMore(index)}
            >
              {expandedCard === index ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
