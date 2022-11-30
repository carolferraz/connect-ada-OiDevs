import Header from '../../components/Header.js';
import database from '../../models/DataBase.class.mjs';
import Functions from '../../models/Functions.class.mjs';
import UserCard from '../../components/UserCard.js';
import Manager from '../../models/Manager.class.mjs';

const currentImg = `${database.manager.image}`;

//renderizando header
const header = new Header();
header.addMenuLink('../../assets/post.svg', '../AdmFeed/adm-feed.html');
header.addMenuLink('../../assets/user.svg', './adm-explore.html', true);
header.addProfileDropdownLink('Sair', '../../index.html', false, true);
header.renderMenuLinks();
header.renderDropDownMenu(currentImg);

database.initialization();

function renderCards() {
  database.users.forEach(user => {
    return new UserCard(user);
  });
}

renderCards();

const deleteUser = document.querySelectorAll('.delete-user');
const section = document.getElementById('explore');

if (database.users.length === 0) {
  section.innerHTML = `<h3>Nenhum usuário cadastrado</h3`;
}

deleteUser.forEach(button => {
  button.addEventListener('click', () => {
    database.removeUser(button.id);
    window.location.reload();
  });
});
