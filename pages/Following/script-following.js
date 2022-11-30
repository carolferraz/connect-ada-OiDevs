import UserCard from "../../components/UserCard.js";
import database from "../../models/DataBase.class.mjs";
import Header from "../../components/Header.js";

const currentImg = `${database.currentUserInSession.image}`;

//renderizando header
const header = new Header();
header.addMenuLink("../../assets/home.svg", "../Feed/feed.html");
header.addMenuLink("../../assets/search.svg", "../Explore/explore.html");
header.addMenuLink('../../assets/new.svg', '../NewPost/new-post.html');
header.addProfileDropdownLink('Ver perfil', '../Profile/profile.html');
header.addProfileDropdownLink('Editar Perfil', '../EditProfile/edit-profile.html');
header.addProfileDropdownLink('Seguindo', '../Following/following.html', true);
header.addProfileDropdownLink("Sair", "./login.html", false, true);
header.renderMenuLinks();
header.renderDropDownMenu(currentImg);
// Fim da header

database.initialization();


function renderCards() {
  const followList = database.currentUserInSession.followList;
  database.users.forEach(user => {
    for (let i = 0; i < followList.length; i++) {
      if (user.id === followList[i]) {
        new UserCard(user);
        buttonFollow(user.id);
      }
    }
  });
}

function buttonFollow(id) {
  const followButton = document.getElementById(`${id}`);
  followButton.addEventListener('click', function () {
    addFollowUserToFollowList(id);
  });
}

const followListOfLoggedUser = database.currentUserInSession.followList;

function addFollowUserToFollowList(id) {
  const idOfUser = id;
  const button = document.getElementById(`${id}`);

  const followUser = followListOfLoggedUser.find(
    element => element === idOfUser
  );

  if (!followUser) {
    followListOfLoggedUser.push(idOfUser);
    button.className = 'unfollow-btn';
    button.innerText = 'Deixar de seguir';
  } else {
    const index = followListOfLoggedUser.indexOf(idOfUser);
    followListOfLoggedUser.splice(index, 1);

    button.className = 'follow-btn';
    button.innerText = 'Seguir';
  }

  database.currentUserInSession = {
    ...database.currentUserInSession,
    followList: followListOfLoggedUser,
  };

  database.users = database.currentUserInSession;
}

renderCards();
