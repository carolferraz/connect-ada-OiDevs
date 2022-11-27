import FollowerCard from '../../components/FollowerCard.js';
import database from '../../models/DataBase.class.mjs';
import Header from '../../components/Header.js';

database.initialization();

const currentImg = `${database.currentUserInSession.image}`;

//renderizando header
const header = new Header();
header.addMenuLink('../../assets/home.svg', './feed.html');
header.addMenuLink('../../assets/search.svg', './explorer.html', true);
header.addMenuLink('../../assets/new.svg', './new.html');
header.addProfileDropdownLink('Ver perfil', '../Profile/profile.html');
header.addProfileDropdownLink(
  'Editar Perfil',
  '../EditProfile/edit-profile.html'
);
header.addProfileDropdownLink('Seguindo', '../Following/following.html');
header.addProfileDropdownLink('Sair', './login.html', false, true);
header.renderMenuLinks();
header.renderDropDownMenu(currentImg);
// Fim da header

database.initialization();

function renderCards() {
  database.users.forEach(user => {
    if (user.id !== database.currentUserInSession.id) {
      const followerCard = new FollowerCard(user);
    }
  });
}

renderCards();

// const carol = new FollowerCard({ name: "Carol", image: " ", role: "Front-End Dev"  });

// const vi = new FollowerCard({ name: "Vitória", image: " ", role: "Front-End Dev"  });
