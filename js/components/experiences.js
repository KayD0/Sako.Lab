const experienceData = {
    "title": "Experience",
    "experiences": [
      {
        "role": "Web Developer",
        "period": "2023 - Now",
        "company": "ECBEING CORP",
        "description": "Currently working as a sole proprietor, I am working on development projects using C#. We perform functional improvements, maintenance and development of EC packages and EC microservices."
      },
      {
        "role": "Business System Developer",
        "period": "2019 - 2023",
        "company": "Deloitte Tohmatsu RippleMark LLC",
        "description": "I moved to Deloitte Tohmatsu Ripplemark LLC and worked for about 3 years developing business web applications using C#. During this period, I was mainly responsible for the development of new functions, and was responsible for everything from design to implementation, unit testing (test code creation), and integration test specification creation."
      },
      {
        "role": "Business System Developer",
        "period": "2016 - 2019",
        "company": "Artnet CO.,LTD.",
        "description": "After graduating from university, I worked as a business systems engineer at Arnet Co., Ltd., where I was involved in development projects using C++ for half a year, and then for about two years on development projects using C#. During this period, I was engaged in the development of business systems and business web applications, and experienced the full cycle from outline design to comprehensive testing."
      }
    ]
  };

  export function generateExperienceHTML() {
    const section = document.getElementById('experience-section');
  
    // タイトルを作成
    const title = document.createElement('h1');
    title.className = 'title pb-3 mb-5';
    title.textContent = experienceData.title;
    section.appendChild(title);
  
    // 経歴データを生成
    const divContainer = document.createElement('div');
    divContainer.className = 'border-start border-2 border-light pt-2 ps-5';
  
    experienceData.experiences.forEach(experience => {
      const positionDiv = document.createElement('div');
      positionDiv.className = 'position-relative mb-4';
  
      const arrowSpan = document.createElement('span');
      arrowSpan.className = 'bi bi-arrow-right fs-4 text-light position-absolute';
      arrowSpan.style.top = '-5px';
      arrowSpan.style.left = '-50px';
      
      const roleHeading = document.createElement('h5');
      roleHeading.className = 'mb-1';
      roleHeading.textContent = experience.role;
  
      const periodP = document.createElement('p');
      periodP.className = 'mb-2';
      periodP.textContent = experience.period;
  
      const companyP = document.createElement('p');
      companyP.className = 'mb-2';
      companyP.textContent = experience.company;
  
      const descriptionP = document.createElement('p');
      descriptionP.textContent = experience.description;
  
      positionDiv.appendChild(arrowSpan);
      positionDiv.appendChild(roleHeading);
      positionDiv.appendChild(periodP);
      positionDiv.appendChild(companyP);
      positionDiv.appendChild(descriptionP);
  
      divContainer.appendChild(positionDiv);
    });
  
    section.appendChild(divContainer);
  }