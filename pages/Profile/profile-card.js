import ProfileCard from '../../components/ProfileCard.js';
import database from '../../models/DataBase.class.mjs';

database.initialization();

const currentImage = `${database.currentUserInSession.image}`;
const currentName = `${database.currentUserInSession.name}`;
const currentRole = `${database.currentUserInSession.role}`;
const currentFollowlist = 0;

const profileCard = new ProfileCard();

profileCard.profileData(
  currentImage,
  currentName,
  currentRole,
  currentFollowlist
);
profileCard.render();
