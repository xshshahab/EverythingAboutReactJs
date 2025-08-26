import React from "react";

const trends = [
  {
    id: "xsh-01-linkedinscams",
    title:
      "Rising LinkedIn Job Scams Targeting Indian Professionals in Tech Sector",
    author: "Kanishk Gaur",
  },
  {
    id: "xsh-02-digitalarrest",
    title:
      "India's Battle Against Digital Arrest Scams and Cyber Fraud in 2025",
    author: "Async Insights",
  },
  {
    id: "xsh-03-aifraud",
    title: "AI-Enabled Fraud Threats Emerging in India's Digital Economy",
    author: "Point Predictive Team",
  },
  {
    id: "xsh-04-investmentfraud",
    title: "Social Media Investment Scams: Crypto and Trading Frauds in India",
    author: "Deepak Sharma",
  },
  {
    id: "xsh-05-h1bfraud",
    title: "H1B Visa Fraud and Fake Credentials in Indian IT Staffing",
    author: "Venkatesh Alla",
  },
  {
    id: "xsh-06-deepfakes",
    title: "Deepfake Scams and AI Fraud Risks in Indian Banking Sector",
    author: "Deloitte Insights",
  },
  {
    id: "xsh-07-cybercrimes",
    title: "Latest Cyber Crimes on Social Media and LinkedIn in India",
    author: "Cyber Lawyer India",
  },
  {
    id: "xsh-08-jobscams",
    title: "Fake Job Listings on LinkedIn: A Growing Menace for Job Seekers",
    author: "Indian Tech Guide",
  },
  {
    id: "xsh-09-govinitiatives",
    title:
      "Indian Government's Advisory on Combating Deepfakes on Social Media",
    author: "ET Government",
  },
  {
    id: "xsh-10-platformfraud",
    title: "Platform Frauds Dominating Scams in India: PwC Report Insights",
    author: "PwC India",
  },
  {
    id: "xsh-11-sextortion",
    title: "Global Sextortion Scams Leveraging LinkedIn Profiles",
    author: "Times of India",
  },
  {
    id: "xsh-12-techsupport",
    title: "Tech Support Frauds Costing Millions in India",
    author: "Astra Security",
  },
  {
    id: "xsh-13-phishing2025",
    title: "Phishing Statistics and Trends in India for 2025",
    author: "Keepnet Labs",
  },
  {
    id: "xsh-14-remotejobscam",
    title: "Remote Work Scams Shaking India's Tech Industry",
    author: "People Matters",
  },
  {
    id: "xsh-15-aidetection",
    title: "Role of AI in Preventing Digital Frauds in Indian Retail",
    author: "Dr. Amit Andre",
  },
  {
    id: "xsh-16-googlefraud",
    title: "Google's AI-Powered Fraud Detection Expansion in India",
    author: "TechCrunch",
  },
  {
    id: "xsh-17-pigbutchering",
    title: "Pig Butchering Scams and AI-Enhanced Fraud Predictions for 2025",
    author: "GovTech",
  },
  {
    id: "xsh-18-socialmonitoring",
    title: "Monitoring Social Media for Fraud Detection in India",
    author: "EY US",
  },
  {
    id: "xsh-19-digitalprogress",
    title: "Cyber Threats Undermining India's Digital Progress",
    author: "Rajat Maheshwari",
  },
  {
    id: "xsh-20-internetscams",
    title: "Top Internet Scams Targeting Indians on Social Platforms in 2025",
    author: "Norton US",
  },
];

const TrendsList: React.FC = () => {
  return (
    <div className="max-w-3xl p-6 mx-auto mt-8 bg-white rounded-lg shadow-md">
      <h3 className="mb-6 text-2xl font-bold text-center text-gray-900">
        Today's Top Trends
      </h3>
      <section className="space-y-4">
        {trends.map((trend) => (
          <div
            key={trend.id}
            className="pb-4 transition-colors duration-200 border-b border-gray-200 hover:bg-gray-50"
          >
            <h4 className="text-lg font-semibold text-gray-800">
              {trend.title}
            </h4>
            <p className="mt-1 text-sm text-gray-600">By {trend.author}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TrendsList;
