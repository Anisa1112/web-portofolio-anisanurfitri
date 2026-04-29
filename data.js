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
      { id: 'face', name: 'Face Verification', year: '2025', desc: 'This project uses face recognition for face verification by comparing the buyer\'s photo during fertilizer purchase with the photo on their ID card (KTP). The system helps validate purchase proof, prevent fraud, and ensure subsidized fertilizer is received by the correct person.', stack: ['Python', 'FaceAPI', 'InsightFace', 'FaceAnalysis'], github: 'https://github.com/Anisa1112/Face-Verification-.git', ppt: '#' },
    ]
  },
  data: {
    label: 'Data Analysis',
    projects: [
      { id: 'sales', name: 'Sales Analytics Dashboard', year: '2024', desc: 'Interactive sales dashboard built with Power BI & SQL that transforms raw transaction data into actionable business insights — featuring trend analysis, regional performance, and KPI tracking.', stack: ['Power BI', 'SQL', 'DAX', 'Excel'], github: 'https://github.com/anisanurfitri', ppt: '#' },
      { id: 'covid', name: 'COVID-19 Data Exploration', year: '2023', desc: 'Exploratory analysis of Indonesia COVID-19 data including vaccination correlation analysis and time-series forecasting of case trends.', stack: ['Python', 'Pandas', 'Matplotlib', 'Tableau'], github: 'https://github.com/anisanurfitri', ppt: '#' },
    ]
  },
  web: {
    label: 'Web Development',
    projects: [
      { id: 'portfolio', name: 'Responsive Portfolio Website', year: '2025', desc: 'A modern, fully responsive personal portfolio built with HTML, CSS & JavaScript. Features smooth animations, interactive sections, and a clean editorial design system.', stack: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/anisanurfitri', ppt: '#' },
      { id: 'ecommerce', name: 'E-Commerce Landing Page', year: '2024', desc: 'Responsive e-commerce landing page for CV Putra Anugrah Mandiri with product showcase, order form, and WhatsApp integration for optimal customer conversion.', stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], github: 'https://github.com/anisanurfitri', ppt: '#' },
      { id: 'inventory', name: 'Inventory Management System', year: '2023', desc: 'Web-based inventory management app with full CRUD, stock reports, and low-stock notifications using Flask backend and SQLite database.', stack: ['Python', 'Flask', 'SQLite', 'Bootstrap'], github: 'https://github.com/anisanurfitri', ppt: '#' },
    ]
  },
  science: {
    label: 'Data Science',
    projects: [
      { id: 'predictive', name: 'Predictive Modeling with Student Data', year: '2025', desc: 'End-to-end data science pipeline using Python — from exploratory data analysis and feature engineering to building and evaluating predictive models for real-world classification and regression problems.', stack: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas'], github: 'https://github.com/anisanurfitri', ppt: '#' },
      { id: 'crop', name: 'Crop Yield Prediction', year: '2024', desc: 'Harvest yield prediction model using climate, rainfall, and soil data from PUSDATIN Ministry of Agriculture. Helps farmers optimize planting season planning.', stack: ['Python', 'Random Forest', 'Streamlit', 'Pandas'], github: 'https://github.com/anisanurfitri', ppt: '#' },
      { id: 'customer', name: 'Customer Segmentation', year: '2023', desc: 'Customer segmentation using K-Means Clustering on retail dataset. Produces 4 customer segments with clear behavioral profiles to support targeted marketing strategy.', stack: ['Python', 'K-Means', 'PCA', 'Tableau'], github: 'https://github.com/anisanurfitri', ppt: '#' },
    ]
  },
};

const certsData = {
  'ml-spec': { category: 'AI & Machine Learning', title: 'Belajar Dasar AI', issuer: 'Dicoding', year: '2025', platform: 'Dicoding', field: 'AI & ML', credID: '72ZDKKK5VPYW', link: 'https://drive.google.com/file/d/1xaFdNeHa9Gsv5km_Su5TAXnhgvZEIGmZ/view?usp=sharing' },
  'cv-yolo': { category: 'AI & Machine Learning', title: 'Dasar-Dasar Implementasi Kecerdasan Artifisial', issuer: 'Digital Talent Scholarship 2025', year: '2025', platform: 'Komdigi', field: 'AI & ML', credID: '2299748850-26392/MS/BLSDM.Komdigi/2025', link: 'https://drive.google.com/file/d/1UFjRiMWW9oAtSy46hmIqda0UkKqvzwj2/view?usp=sharing' },
  'dl-fund': { category: 'AI & Machine Learning', title: 'Memahami Aspek Pengembangan Produk AI', issuer: 'Digital Talent Scholarship 2025', year: '2025', platform: 'Komdigi', field: 'AI & ML', credID: '2299814850-5240/MS/BLSDM.Komdigi/2025', link: 'https://drive.google.com/file/d/1NmLgl9hcE4wXwTuNSGa5YVkVKAGq21-d/view?usp=sharing' },
  'essential-skills-sel-2330': { category: 'other', title: 'Essential Skills: Self Efficacy', issuer: 'Pembekalan 12+ Essential Skills Program Magang Nasional', year: '2026', platform: 'GNIK', field: 'Soft Skill', credID: '', link: 'https://drive.google.com/file/d/1Cxmz7-K5NTiCytngbAkWYnqQITWtrnWu/view?usp=sharing' },
  'digital-disruption-t-0574': { category: 'other', title: 'Digital Disruption & Transformation', issuer: 'Pembekalan 12+ Essential Skills Program Magang Nasional', year: '2026', platform: 'GNIK', field: 'Soft Skill', credID: '', link: 'https://drive.google.com/file/d/1DG7ZFClnhXwj-q6ZmuHtlLeFDyWiH2FO/view?usp=sharing' },
  'design-thinking-0427': { category: 'other', title: 'Design Thinking', issuer: 'Pembekalan 12+ Essential Skills Program Magang Nasional', year: '2025', platform: 'GNIK', field: 'Soft Skill', credID: '', link: 'https://drive.google.com/file/d/1Nq0YkpIZV_eZXNKnNfhckmaG6AP6337y/view?usp=sharing' },
  'trial-bootcamp-ai-8671': { category: 'AI & Machine Learning', title: 'Trial Bootcamp AI', issuer: 'Exclusive-Trial Bootcamp AI', year: '2025', platform: 'Intelligo.ID', field: 'AI & ML', credID: 'INTELLIGO/b5c75e/25102025/0019', link: 'https://drive.google.com/file/d/1XRWoh5VgBWQqCg1tTZIbdt3bKxO7d33Z/view?usp=sharing' },
};
