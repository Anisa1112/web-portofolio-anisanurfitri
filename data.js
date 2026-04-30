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
    ]
  },
  web: {
    label: 'Web Development',
    projects: [
    ]
  },
  science: {
    label: 'Data Science',
    projects: [
    ]
  },
};

const certsData = {
  'ml-spec': { category: 'AI & Machine Learning', title: 'Belajar Dasar AI', issuer: 'Dicoding', year: '2025', platform: 'Dicoding', field: 'AI & ML', credID: '72ZDKKK5VPYW', link: 'https://drive.google.com/file/d/1xaFdNeHa9Gsv5km_Su5TAXnhgvZEIGmZ/view?usp=sharing' },
  'cv-yolo': { category: 'AI & Machine Learning', title: 'Dasar-Dasar Implementasi Kecerdasan Artifisial', issuer: 'Digital Talent Scholarship 2025', year: '2025', platform: 'Digitalent', field: 'AI & ML', credID: '2299748850-26392/MS/BLSDM.Komdigi/2025', link: 'https://drive.google.com/file/d/1UFjRiMWW9oAtSy46hmIqda0UkKqvzwj2/view?usp=sharing' },
  'dl-fund': { category: 'AI & Machine Learning', title: 'Memahami Aspek Pengembangan Produk AI', issuer: 'Digital Talent Scholarship 2025', year: '2025', platform: 'Digitalent', field: 'AI & ML', credID: '2299814850-5240/MS/BLSDM.Komdigi/2025', link: 'https://drive.google.com/file/d/1NmLgl9hcE4wXwTuNSGa5YVkVKAGq21-d/view?usp=sharing' },
  'essential-skills-sel-2330': { category: 'other', title: 'Essential Skills: Self Efficacy', issuer: 'Pembekalan 12+ Essential Skills Program Magang Nasional', year: '2026', platform: 'GNIK', field: 'Soft Skill', credID: '', link: 'https://drive.google.com/file/d/1Cxmz7-K5NTiCytngbAkWYnqQITWtrnWu/view?usp=sharing' },
  'digital-disruption-t-0574': { category: 'other', title: 'Digital Disruption & Transformation', issuer: 'Pembekalan 12+ Essential Skills Program Magang Nasional', year: '2026', platform: 'GNIK', field: 'Soft Skill', credID: '', link: 'https://drive.google.com/file/d/1DG7ZFClnhXwj-q6ZmuHtlLeFDyWiH2FO/view?usp=sharing' },
  'design-thinking-0427': { category: 'other', title: 'Design Thinking', issuer: 'Pembekalan 12+ Essential Skills Program Magang Nasional', year: '2025', platform: 'GNIK', field: 'Soft Skill', credID: '', link: 'https://drive.google.com/file/d/1Nq0YkpIZV_eZXNKnNfhckmaG6AP6337y/view?usp=sharing' },
  'trial-bootcamp-ai-8671': { category: 'AI & Machine Learning', title: 'Trial Bootcamp AI', issuer: 'Exclusive-Trial Bootcamp AI', year: '2025', platform: 'Intelligo.ID', field: 'AI & ML', credID: 'INTELLIGO/b5c75e/25102025/0019', link: 'https://drive.google.com/file/d/1XRWoh5VgBWQqCg1tTZIbdt3bKxO7d33Z/view?usp=sharing' },
  'intro-to-data-analys-2664': { category: 'Data Analysis', title: 'Intro to Data Analyst', issuer: 'Mini Course- Revou', year: '2025', platform: 'ReVou', field: 'Data Analyst', credID: 'DAMC-20102025-01-1-00290', link: 'https://drive.google.com/file/d/1ucJAd5ECASssXrpUfyHf6jSraZcZ083U/view?usp=sharing' },
  'memulai-pemrograman--8795': { category: 'Data Science', title: 'Memulai Pemrograman dengan Python', issuer: 'Coding Camp 2026 powered by DBS Foundation', year: '2025', platform: 'Dicoding', field: 'Data Scientist & Data Analyst', credID: '1OP8JJGELPQK', link: 'https://drive.google.com/file/d/1l477NhQ2yM0AtDCjitwx6bYl-tioMdCa/view?usp=sharing' },
  'belajar-dasar-struct-9966': { category: 'Data Science', title: 'Belajar Dasar Structured Query Language (SQL)', issuer: 'Coding Camp 2026 powered by DBS Foundation', year: '2025', platform: 'Dicoding', field: 'Data Science & Data Analyst', credID: '2VX355813PYQ', link: 'https://drive.google.com/file/d/1LAvtQyYO1p0QGDv7CBzMRsy5O1MhpJEm/view?usp=sharing' },
  'belajar-dasar-data-s-3951': { category: 'Data Science', title: 'Belajar Dasar Data Science', issuer: 'Coding Camp 2026 powered by DBS Foundation', year: '2026', platform: 'Dicoding', field: 'Data Science', credID: '1OP8JJJMVPQK', link: 'https://drive.google.com/file/d/1MdjIxHD3d7f8X9EUDQTyPXT2QYugir3N/view?usp=sharing' },
  'pengenalan-dasar-art-7386': { category: 'AI & Machine Learning', title: 'Pengenalan Dasar Artificial Intelligence', issuer: 'Fresh Graduate Academy Digital Talent Scholarship 2025', year: '2025', platform: 'Digitalent', field: 'AI & ML', credID: '19511215840-568/FGA/BLSDM.Komdigi/2025', link: 'https://drive.google.com/file/d/1DQuWctNCsFcK1_U-K4jOZOiLD7ZO4a4A/view?usp=sharing' },
  'pivot-table-in-micro-4483': { category: 'Data Analysis', title: 'Pivot Table in Microsoft Excel', issuer: 'MySkill Short Class', year: '2025', platform: 'My Skill', field: 'Excel- Pivot Table', credID: '288140/EXL/LM/10/2025', link: 'https://drive.google.com/file/d/1XONCZ8CajjtLrWzRA8UQ1I3H48O-ZSLn/view?usp=sharing' },
  'fundamental-data-vis-5607': { category: 'Data Science', title: 'Fundamental Data Visualization using R', issuer: 'DQLab E-learning', year: '2025', platform: 'DQLab', field: 'Data Science', credID: '#DQLABINTR1EWEKVF', link: 'https://drive.google.com/file/d/1t6F_B-g0qjN32HQiXNS4yzYzDE_lqDVE/view?usp=sharing' },
  'r-for-data-professio-7762': { category: 'Data Science', title: 'R for Data Professional - Part 3', issuer: 'DQLab E-Learning', year: '2025', platform: 'DQLab', field: 'Data Sience', credID: '#DQLABRFDPETOOBS', link: 'https://drive.google.com/file/d/1RG1gIx_DeeX8Klicm-eyeXqVEAdI_Ct9/view?usp=sharing' },
  'r-for-data-professio-5672': { category: 'Data Science', title: 'R for Data Professional - Part 2', issuer: 'DQLab E-Learning', year: '2025', platform: 'DQLab', field: 'Data Science', credID: '#DQLABRFDPUUVEJT', link: 'https://drive.google.com/file/d/1zl7rdcYJ14Exrevk-IdHAbioZ-duwgkc/view?usp=sharing' },
  'r-for-data-professio-3226': { category: 'Data Science', title: 'R for Data Professional - Part 1', issuer: 'DQLab E-Learning', year: '2025', platform: 'DQLab', field: 'Data Science', credID: '#DQLABRFDPNOWIMS', link: 'https://drive.google.com/file/d/19xSldOTX0Cue9MElyBfj8q0gozuchi6m/view?usp=sharing' },
  'r-fundamental-for-da-2055': { category: 'Data Science', title: 'R Fundamental for Data Science', issuer: 'DQLab E-Learning', year: '2025', platform: 'DQLab', field: 'Data Science', credID: '#DQLABINTR1SAIWOW', link: 'https://drive.google.com/file/d/1SDg7Vx12uCYDkwYKjfJDgZiybmCrpJbe/view?usp=sharing' },
  'introduction-to-data-6476': { category: 'Data Science', title: 'Introduction to Data Science with R', issuer: 'DQLab E-Learning', year: '2025', platform: 'DQLab', field: 'Data Science', credID: '#DQLABBGINRVKDGSB', link: 'https://drive.google.com/file/d/13aKv6kNuEz2ToHgKZWqTb0Il8iGCvCPy/view?usp=sharing' },
  'python-introduction--5988': { category: 'Data Analysis', title: 'Python Introduction for Data Analysis', issuer: 'MySkill Short Class', year: '2025', platform: 'My Skill', field: 'Data Analyst', credID: '284560/DTA/LM/10/2025', link: 'https://drive.google.com/file/d/1j_2h1F6x5dOtoj-h_h5h0VtQLY0EwRPl/view?usp=sharing' },
  'wawasan-karir-dalam--0397': { category: 'Data Analysis', title: 'Wawasan Karir dalam Bidang Data Analytics', issuer: 'Digital Talent Scholarship 2025', year: '2025', platform: 'Digitalent', field: 'Data Analyst', credID: '2299746850-19538/MS/BLSDM.Komdigi/2025', link: 'https://drive.google.com/file/d/1J00RFmBCb8EfHSYg0QtZa1w5Y-se2igT/view?usp=sharing' },
};
