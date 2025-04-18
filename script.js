'use strict';

const awardsPath = 'data/awards.json';
const housesPath = 'data/houses.json';

// Fetch data and insert awards into the DOM
async function loadAwards() {
  try {
    const response = await fetch(awardsPath);
    const data = await response.json();
    const awards = data.awards;

    const awardsContainer = document.querySelector('.awards-grid');
    // Loop over awards and add each one to the container
    awards.forEach((award) => {
      const awardImg = document.createElement('img');
      awardImg.classList.add('award-img');
      awardImg.src = award.src;
      awardImg.alt = award.alt;

      awardsContainer.appendChild(awardImg);
    });
  } catch (error) {
    console.error('Failed to load awards:', error);
    document.querySelector('.awards-grid').innerHTML =
      '<p>Error loading awards.</p>';
  }
}

// Fetch data and insert sigils info into the DOM
async function loadSigils() {
  try {
    const response = await fetch(housesPath);
    const data = await response.json();
    const houses = data.houses;

    const sigilContainer = document.querySelector('.sigils-container');
    //Loop over houses and add each sigil on the sigils container
    houses.forEach((house) => {
      const sigilImg = document.createElement('img');
      sigilImg.classList.add('sigil');
      sigilImg.src = house.sigil;
      sigilImg.alt = `House ${house.name}'s sigil`;
      sigilImg.addEventListener('click', () => clickedHouse(house.name));

      sigilContainer.appendChild(sigilImg);
    });
  } catch (error) {
    console.log(error.message);
  }
}

// Fetch data and insert sigils info into the DOM
async function loadHouses() {
  try {
    const response = await fetch(housesPath);
    const data = await response.json();
    const houses = data.houses;

    const housesSection = document.querySelector('.section-houses');

    //Loop over houses and add each sigil on the sigils container
    houses.forEach((house) => {
      const { name, banner, description, members, otherInformation } = house;

      const html = `<div class='modal' id='modal-${name}'>
      <span class='btn-close' onclick="clickedClose('${name}')">
        &#10006;
      </span>
      <div class='scrollable-area scrollable-modal'>
        <div class='modal-inner'>
          <div class='house-description-card scrollable-area scrollable-description'>
            <div class='banner-container'>
              <img
                class='house-banner'
                src=${banner.large}
                alt="House ${name}'s banner"
              />
              <img
                class='house-banner--mini'
                src=${banner.mini}
                alt="House ${name}'s Banner"
              />
            </div>

            <div class='main-description-box'>
              <div class='header-container'>
                <p class='house-name'>${name}</p>
              </div>
              <div class='description-container'>
                <h3 class='subheading subheading--description'>Description</h3>
                <p class='description-text'>
                  ${description}
                </p>
              </div>

              <div class='members-container'>
                <h3 class='subheading subheading--members'>Notable Members</h3>
                <div class='house-members'>
                  ${members
                    .map(
                      (member) =>
                        `<div class='member'>
                      <img
                        class='member-img'
                        src=${member.image}
                        alt=${member.name}
                      />
                      <span class='member-name'>${member.name}</span>
                    </div>`
                    )
                    .join('')}
                </div>
              </div>
            </div>
          </div>
          <div class='house-information-card scrollable-area scrollable-info'>
            <h3 class='subheading subheading--information'>
              Other Information
            </h3>
            <div class='information-container'>
              ${Object.entries(otherInformation)
                .map(
                  ([key, value]) => `
                  <div class='row'>
                    <h3 class='row-information-title'>
                      ${
                        key.replace(/([A-Z])/g, ' $1') // add space before capital letters
                        // https://stackoverflow.com/questions/5582228/insert-space-before-capital-letters
                      } 
                    </h3>
                    <p class='row-information'>
                      ${Array.isArray(value) ? value.join(', ') : value}
                    </p>
                  </div>`
                )
                .join('')}
                
            </div>
          </div>
        </div>
      </div>
    </div>`;
      housesSection.insertAdjacentHTML('afterbegin', html);
    });
  } catch (error) {
    console.log(error.message);
  }
}

ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 200,
});

ScrollReveal().reveal('.logo-container', {
  delay: 1500,
  origin: 'bottom',
});

ScrollReveal().reveal('.award-img', {
  origin: 'bottom',
  interval: 200,
  easing: 'ease-out',
  duration: 1500,
});

ScrollReveal().reveal('.author-img', {
  origin: 'top',
});

ScrollReveal().reveal('.paragraphs-container, .scrollable-synopsis', {
  origin: 'bottom',
});

ScrollReveal().reveal(
  '#heading-information, .poster-img, .secondary-heading--small',
  {
    origin: 'left',
  }
);

ScrollReveal().reveal('.book-img, #heading-synopsis', {
  origin: 'right',
});

ScrollReveal().reveal('.sigil', {
  delay: 0,
  origin: 'top',
  interval: '200',
});

ScrollReveal().reveal('.blockquote:nth-child(1)', {
  delay: 500,
  origin: 'bottom',
});

ScrollReveal().reveal('.blockquote:nth-child(2)', {
  delay: 3000,
  origin: 'top',
  distance: '20px',
});

ScrollReveal().reveal('.blockquote:nth-child(3)', {
  distance: '0px',
  delay: 6300,
  duration: 3800,
});

ScrollReveal().reveal('.blockquote:nth-child(4)', {
  distance: '0px',
  delay: 8000,
  duration: 1000,
});

function clickedClose(house) {
  document.getElementById('modal-' + house).style.display = 'none';
  document.querySelector('body').style.overflow = 'visible';
  document.querySelector('html').style.overflow = 'visible';

  document
    .querySelectorAll('.sigil')
    .forEach((sigil) => (sigil.style.pointerEvents = 'auto'));
}

function clickedHouse(house) {
  document.getElementById('modal-' + house).style.display = 'block';
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('html').style.overflow = 'hidden';
  document
    .querySelectorAll('.sigil')
    .forEach((sigil) => (sigil.style.pointerEvents = 'none'));
}

loadAwards();
loadHouses();
loadSigils();
