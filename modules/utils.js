export function createAwards(award) {
  const awardImg = document.createElement('img');
  awardImg.classList.add('award-img');
  awardImg.src = award.src;
  awardImg.alt = award.alt;
  return awardImg;
}

export function createHouseSigils(house) {
  const sigilImg = document.createElement('img');
  sigilImg.classList.add('sigil');
  sigilImg.src = house.sigil;
  sigilImg.alt = `House ${house.name}'s sigil`;
  sigilImg.addEventListener('click', () => clickedHouse(house.name));
  return sigilImg;
}

export function createHouseModals(house) {
  const { name, banner, description, members, otherInformation } = house;
  const membersHtml = members
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
    .join('');
  const otherInfoHtml = Object.entries(otherInformation)
    .map(
      ([key, value]) => ` 
      <div class='row'>
        <h3 class='row-information-title'>
          ${key.replace(/([A-Z])/g, ' $1')}
        </h3>
        <p class='row-information'>
          ${Array.isArray(value) ? value.join(', ') : value}
        </p>
      </div>`
    )
    .join('');
  return ` 
    <div class='modal' id='modal-${name}'>
      <span class='btn-close' onclick="clickedClose(${name})"}>
        &#10006;
      </span>
      <div class='scrollable-area scrollable-modal'>
        <div class='modal-inner'>
          <div class='house-description-card scrollable-area scrollable-description'>
            <div class='banner-container'>
              <img class='house-banner' src=${banner.large} alt="House ${name}'s banner"/>
              <img class='house-banner--mini' src=${banner.mini} alt="House ${name}'s banner"/>
            </div>
            <div class='main-description-box'>
              <div class='header-container'>
                <p class='house-name'>${name}</p>
              </div>
              <div class='description-container'>
                <h3 class='subheading subheading--description'>Description</h3>
                <p class='description-text'>${description}</p>
              </div>
              <div class='members-container'>
                <h3 class='subheading subheading--members'>Notable Members</h3>
                <div class='house-members'>${membersHtml}</div>
              </div>
            </div>
          </div>
          <div class='house-information-card scrollable-area scrollable-info'>
            <h3 class='subheading subheading--information'>Other Information</h3>
            <div class='information-container'>${otherInfoHtml}</div>
          </div>
        </div>
      </div>
    </div>`;
}

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
