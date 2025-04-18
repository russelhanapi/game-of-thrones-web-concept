import { createAwards, createHouseSigils, createHouseModals } from './utils.js';

const awardsPath = 'data/awards.json';
const housesPath = 'data/houses.json';

export async function loadAwards() {
  try {
    const response = await fetch(awardsPath);
    const { awards } = await response.json();
    const awardsContainer = document.querySelector('.awards-grid');
    awards.forEach((award) => {
      const awardImg = createAwards(award);
      awardsContainer.appendChild(awardImg);
    });
    ScrollReveal().reveal('.award-img', {
      origin: 'bottom',
      interval: 200,
      easing: 'ease-out',
      duration: 1500,
    });
  } catch (error) {
    console.error('Failed to load awards:', error);
    document.querySelector('.awards-grid').innerHTML =
      '<p>Error loading awards.</p>';
  }
}

export async function loadSigils() {
  try {
    const response = await fetch(housesPath);
    const { houses } = await response.json();
    const sigilContainer = document.querySelector('.sigils-container');
    houses.forEach((house) => {
      const sigilImg = createHouseSigils(house);
      sigilContainer.appendChild(sigilImg);
    });
    ScrollReveal().reveal('.sigil', {
      delay: 0,
      origin: 'top',
      interval: '200',
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function loadHouses() {
  try {
    const response = await fetch(housesPath);
    const { houses } = await response.json();
    const housesSection = document.querySelector('.section-houses');
    houses.forEach((house) => {
      const modalHouse = createHouseModals(house);
      housesSection.insertAdjacentHTML('afterbegin', modalHouse);
    });
  } catch (error) {
    console.log(error.message);
  }
}
