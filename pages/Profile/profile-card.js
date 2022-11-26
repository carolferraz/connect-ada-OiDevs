import ProfileCard from '../../components/ProfileCard.js';

const profileCard = new ProfileCard();
profileCard.profileData(
  '../../assets/profile-photo.png',
  'Leslie Alexander',
  'UI Designer',
  '100'
);
profileCard.render();

const profileCard2 = new ProfileCard();
profileCard2.profileData(
  '../../assets/tarso-brant.png',
  'Tarso Brant',
  'Ator sedutor',
  '1806'
);
profileCard2.render();

const profileCard3 = new ProfileCard();
profileCard3.profileData(
  '../../assets/woman.jpg',
  'Morena Desconhecida',
  'Modelo de banco de imagens',
  '2611'
);
profileCard3.render();
