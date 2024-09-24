const aboutMeData = {
    "title": "About Me",
    "details": [
      {
        "label": "Name",
        "value": "Yoshikazu Hatasako"
      },
      {
        "label": "Birthday",
        "value": "9 June 1920"
      },
      {
        "label": "Degree",
        "value": "bachelor's"
      },
      {
        "label": "Experience",
        "value": "8 Years"
      },
      {
        "label": "Email",
        "value": "test@com"
      },
      {
        "label": "Address",
        "value": "Kanagawa-ken, Japan"
      }
    ]
  };

  export function generateAboutMeHTML() {
    const section = document.getElementById('about-me-section');

    // タイトルを作成
    const title = document.createElement('h1');
    title.className = 'title pb-3 mb-5';
    title.textContent = aboutMeData.title;
    section.appendChild(title);

    // ディテール行を生成
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row mb-4';

    aboutMeData.details.forEach(detail => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-sm-6 py-1';

        const span = document.createElement('span');
        span.className = 'fw-medium text-primary';
        span.textContent = `${detail.label}: `;

        const valueText = document.createTextNode(detail.value);

        colDiv.appendChild(span);
        colDiv.appendChild(valueText);
        rowDiv.appendChild(colDiv);
    });

    section.appendChild(rowDiv);

    // 新しい要素を生成
    const newRowDiv = document.createElement('div');
    newRowDiv.className = 'row g-4';

    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-4 col-lg-6 col-xl-4';

    const flexDiv = document.createElement('div');
    flexDiv.className = 'd-flex bg-secondary p-4';

    const h1Element = document.createElement('h1');
    h1Element.className = 'flex-shrink-0 display-5 text-primary mb-0';
    h1Element.setAttribute('data-toggle', 'counter-up');
    h1Element.textContent = '8';

    const psDiv = document.createElement('div');
    psDiv.className = 'ps-3';

    const pElement = document.createElement('p');
    pElement.className = 'mb-0';
    pElement.textContent = 'Years of';

    const h5Element = document.createElement('h5');
    h5Element.className = 'mb-0';
    h5Element.textContent = 'Experience';

    // 要素の構造を組み立てる
    psDiv.appendChild(pElement);
    psDiv.appendChild(h5Element);
    flexDiv.appendChild(h1Element);
    flexDiv.appendChild(psDiv);
    colDiv.appendChild(flexDiv);
    newRowDiv.appendChild(colDiv);

    // section に追加
    section.appendChild(newRowDiv);
  }