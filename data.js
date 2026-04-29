/* ═══════════════════════════════════════════════════
   data.js  —  Anisa Portfolio Data
   Edit via admin.html, lalu download & replace file ini
   ═══════════════════════════════════════════════════ */

const projectData = {
  ai: {
    label: 'AI & ML',
    projects: [
      { id: 'drowning', name: 'Drowning Detection System', year: '2025', desc: 'Real-time drowning detection using YOLOv5 — a computer vision model that identifies potential drowning incidents from CCTV footage with high accuracy using pose estimation and object detection.', stack: ['Python', 'YOLOv5', 'OpenCV'], github: 'https://github.com/Anisa1112/Drowning-Detection-System.git', ppt: 'https://drive.google.com/file/d/1JcGDgsegLj98RaUEphlusjBpwyQs6_SE/view?usp=sharing' },
      { id: 'chatbot', name: 'Learnify – Educational Chatbot Using TF-IDF and Cosine Similarity', year: '2025', desc: 'Learnify is a simple educational chatbot designed to answer questions about education, artificial intelligence, machine learning, data science, programming, and effective learning methods. The system uses Natural Language Processing (NLP) with TF-IDF and Cosine Similarity to match user questions with predefined Q&A data.', stack: ['Python', 'NLP', 'Pandas', 'Scikit-learn'], github: 'https://github.com/Anisa1112/Learnify-Educational-Chatbot.git', ppt: '#' },
      { id: 'face', name: 'Face Verification', year: '2025', desc: 'This project uses face recognition for face verification by comparing the buyer\'s photo during fertilizer purchase with the photo on their ID card (KTP). The system helps validate purchase proof, prevent fraud, and ensure subsidized fertilizer is received by the correct person.', stack: ['Python', 'FaceAPI', 'InsightFace', 'FaceAnalysis'], github: 'https://github.com/Anisa1112/Face-Verification-.git', ppt: '#' }
    ]
  },
  data: {
    label: 'Data Analysis',
    projects: [
      { id: 'sales', name: 'Sales Analytics Dashboard', year: '2024', desc: 'Interactive sales dashboard built with Power BI & SQL that transforms raw transaction data into actionable business insights — featuring trend analysis, regional performance, and KPI tracking.', stack: ['Power BI', 'SQL', 'DAX', 'Excel'], github: 'https://github.com/anisanurfitri', ppt: '#' },
      { id: 'covid', name: 'COVID-19 Data Exploration', year: '2023', desc: 'Exploratory analysis of Indonesia COVID-19 data including vaccination correlation analysis and time-series forecasting of case trends.', stack: ['Python', 'Pandas', 'Matplotlib', 'Tableau'], github: 'https://github.com/anisanurfitri', ppt: '#' }
    ]
  },
  web: {
    label: 'Web Development',
    projects: [
      { id: 'portfolio', name: 'Responsive Portfolio Website', year: '2025', desc: 'A modern, fully responsive personal portfolio built with HTML, CSS & JavaScript. Features smooth animations, interactive sections, and a clean editorial design system.', stack: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/anisanurfitri', ppt: '#' },
      { id: 'ecommerce', name: 'E-Commerce Landing Page', year: '2024', desc: 'Responsive e-commerce landing page for CV Putra Anugrah Mandiri with product showcase, order form, and WhatsApp integration for optimal customer conversion.', stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], github: 'https://github.com/anisanurfitri', ppt: '#' },
      { id: 'inventory', name: 'Inventory Management System', year: '2023', desc: 'Web-based inventory management app with full CRUD, stock reports, and low-stock notifications using Flask backend and SQLite database.', stack: ['Python', 'Flask', 'SQLite', 'Bootstrap'], github: 'https://github.com/anisanurfitri', ppt: '#' }
    ]
  },
  science: {
    label: 'Data Science',
    projects: [
      { id: 'predictive', name: 'Predictive Modeling with Student Data', year: '2025', desc: 'End-to-end data science pipeline using Python — from exploratory data analysis and feature engineering to building and evaluating predictive models for real-world classification and regression problems.', stack: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas'], github: 'https://github.com/anisanurfitri', ppt: '#' },
      { id: 'crop', name: 'Crop Yield Prediction', year: '2024', desc: 'Harvest yield prediction model using climate, rainfall, and soil data from PUSDATIN Ministry of Agriculture. Helps farmers optimize planting season planning.', stack: ['Python', 'Random Forest', 'Streamlit', 'Pandas'], github: 'https://github.com/anisanurfitri', ppt: '#' },
      { id: 'customer', name: 'Customer Segmentation', year: '2023', desc: 'Customer segmentation using K-Means Clustering on retail dataset. Produces 4 customer segments with clear behavioral profiles to support targeted marketing strategy.', stack: ['Python', 'K-Means', 'PCA', 'Tableau'], github: 'https://github.com/anisanurfitri', ppt: '#' }
    ]
  }
};

const certsData = {
  'ml-spec':     { category: 'AI & Machine Learning', title: 'Belajar Dasar AI', issuer: 'Dicoding', year: '2025', platform: 'Dicoding', field: 'AI & ML', credID: '72ZDKKK5VPYW', link: 'https://drive.google.com/file/d/1xaFdNeHa9Gsv5km_Su5TAXnhgvZEIGmZ/view?usp=sharing' },
  'cv-yolo':     { category: 'AI & Machine Learning', title: 'Dasar-Dasar Implementasi Kecerdasan Artifisial', issuer: 'Digital Talent Scholarship 2025', year: '2025', platform: 'Komdigi', field: 'AI & ML', credID: '2299748850-26392/MS/BLSDM.Komdigi/2025', link: 'https://drive.google.com/file/d/1UFjRiMWW9oAtSy46hmIqda0UkKqvzwj2/view?usp=sharing' },
  'dl-fund':     { category: 'AI & Machine Learning', title: 'Memahami Aspek Pengembangan Produk AI', issuer: 'Digital Talent Scholarship 2025', year: '2025', platform: 'Komdigi', field: 'AI & ML', credID: 'ANISA-DL-2023-003', link: '#' },
  'da-python':   { category: 'Data Analysis', title: 'Data Analysis with Python', issuer: 'freeCodeCamp', year: '2023', platform: 'freeCodeCamp', field: 'Data Analysis', credID: 'ANISA-DA-2023-001', link: '#' },
  'powerbi':     { category: 'Data Analysis', title: 'Power BI for Business Intelligence', issuer: 'Microsoft Learn', year: '2023', platform: 'Microsoft', field: 'Data Analysis', credID: 'ANISA-PBI-2023-002', link: '#' },
  'sql-da':      { category: 'Data Analysis', title: 'SQL for Data Analysis', issuer: 'Udacity', year: '2023', platform: 'Udacity', field: 'Data Analysis', credID: 'ANISA-SQL-2023-003', link: '#' },
  'tableau':     { category: 'Data Analysis', title: 'Data Visualization with Tableau', issuer: 'Tableau – Coursera', year: '2023', platform: 'Coursera', field: 'Data Analysis', credID: 'ANISA-TB-2023-004', link: '#' },
  'rwd':         { category: 'Web Development', title: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2022', platform: 'freeCodeCamp', field: 'Web Development', credID: 'ANISA-RWD-2022-001', link: '#' },
  'js-algo':     { category: 'Web Development', title: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2022', platform: 'freeCodeCamp', field: 'Web Development', credID: 'ANISA-JS-2022-002', link: '#' },
  'fe-dicoding': { category: 'Web Development', title: 'Frontend Web Development', issuer: 'Dicoding', year: '2022', platform: 'Dicoding', field: 'Web Development', credID: 'ANISA-FE-2022-003', link: '#' },
  'ibm-ds':      { category: 'Data Science', title: 'Data Science Professional Certificate', issuer: 'IBM – Coursera', year: '2024', platform: 'Coursera', field: 'Data Science', credID: 'ANISA-DS-2024-001', link: '#' },
  'ads-python':  { category: 'Data Science', title: 'Applied Data Science with Python', issuer: 'University of Michigan – Coursera', year: '2024', platform: 'Coursera', field: 'Data Science', credID: 'ANISA-ADS-2024-002', link: '#' },
  'stats-ds':    { category: 'Data Science', title: 'Statistics for Data Science', issuer: 'Digital Talent Scholarship 2025', year: '2023', platform: 'Komdigi', field: 'Data Science', credID: 'ANISA-STATS-2023-003', link: '#' }
};