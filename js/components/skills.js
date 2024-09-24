const skillsData = {
  "title": "Skills",
  "sections": [
    {
      "category": "Language",
      "items": "C#, Typescript, Javascript, VBA, SQL, HTML, CSS"
    },
    {
      "category": "Framework",
      "items": ".net, .net core, .net framework, vue"
    },
    {
      "category": "DB",
      "items": "SQL Server, MySQL, Oracle, Cache"
    },
    {
      "category": "OS",
      "items": "Windows, Mac, Linux"
    },
    {
      "category": "Cloud",
      "items": "AWS, Azure"
    },
    {
      "category": "Version Management",
      "items": "Git, Git Hub, TortoiseGit, Sourcetree, SVN"
    },
    {
      "category": "IDE",
      "items": "Visual Studio, Visual Studio Code, Pycharm, Anaconda"
    },
    {
      "category": "Other",
      "items": "WSL2, Docker"
    }
  ]
};

export function generateSkillsHTML() {
    const section = document.getElementById('skills-section');
  
    // タイトルを作成
    const title = document.createElement('h1');
    title.className = 'title pb-3 mb-5';
    title.textContent = skillsData.title;
    section.appendChild(title);
  
    // スキルのカテゴリーごとにHTML要素を作成
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row mb-4';
  
    skillsData.sections.forEach(skill => {
      const colDiv = document.createElement('div');
      colDiv.className = 'col-sm-6 py-1';
  
      const categoryP = document.createElement('p');
      const categorySpan = document.createElement('span');
      categorySpan.className = 'fw-medium text-primary';
      categorySpan.textContent = skill.category;
      categoryP.appendChild(categorySpan);
  
      const itemsP = document.createElement('p');
      itemsP.textContent = skill.items;
  
      colDiv.appendChild(categoryP);
      colDiv.appendChild(itemsP);
      rowDiv.appendChild(colDiv);
    });
  
    section.appendChild(rowDiv);
  }