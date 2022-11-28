import FollowerCard from "../../components/FollowerCard.js";
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
  database.users.forEach((user) => {
    const followList = database.currentUserInSession.followList;
    
    for (let i = 0; i < followList.length; i++) {
      if(user.id === followList[i]) {
        new FollowerCard(user);

        const followButton = document.getElementById(`${user.id}`);
        followButton.className = "unfollow-btn";
        followButton.innerText = "Deixar de seguir";
        
        followButton.addEventListener("click", function () {    
          const followUser = followList.find(follow => follow === user.id);
          console.log('FOLLOWUSER');
          console.log(followUser)
          const index = database.currentUserInSession.followList.findIndex(follow => follow === followUser);
          console.log(`index`);
            console.log(index);
          if (followUser) {
            database.currentUserInSession.removeFollow(index);
            database.currentUserInSession.followList.splice(index, 1);
            console.log(database.currentUserInSession.followList);
            followButton.className = "follow-btn";
            followButton.innerText = "Seguir";
          } else {
            database.currentUserInSession.followList.push(user.id);
            followButton.className = "unfollow-btn";
            followButton.innerText = "Deixar de seguir";
          }
        });
      }
    }
  });
}

// function buttonFollow(id) {
//   const followButton = document.getElementById(`${id}`);
//   if(followButton.classList.contains('f'))
//   this.button.className = "unfollow-btn";
//   this.button.innerText = "Deixar de seguir";
//   followButton.addEventListener("click", function () { addFollowUserToFollowList(id) }
//   );
// }

// const followListOfLoggedUser = database.currentUserInSession.followList;


// function addFollowUserToFollowList(id) {
//   const idOfUser = id;
//   const button = document.getElementById(`${id}`);

//   const followUser = followListOfLoggedUser.find(element => element === idOfUser);

//   if (!followUser) {
//     followListOfLoggedUser.push(idOfUser);
//     button.className = "unfollow-btn";
//     button.innerText = "Deixar de seguir";
//   } else {
//     followListOfLoggedUser.pop(idOfUser);
//     button.className = "follow-btn";
//     button.innerText = "Seguir";
//   }
// }

// function addFollowUserToFollowList(id) {
//   return function clickEventListener(event) {
//     const idOfUser = id;
//     followListOfLoggedUser.find(
//       (idOfUser) => idOfUser === followListOfLoggedUser.id
//     );
//     followListOfLoggedUser.push(idOfUser);
//     this.className = "unfollow-btn";
//     this.innerText = "Deixar de seguir";
//   };
// }

renderCards();
