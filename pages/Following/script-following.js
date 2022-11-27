import Header from '../../components/Header.js';
import database from '../../models/DataBase.class.mjs';

//renderizando header
const header = new Header();
header.addMenuLink('../../assets/home.svg', './feed.html');
header.addMenuLink('../../assets/search.svg', './explorer.html');
header.addMenuLink('../../assets/new.svg', './new.html');
header.addProfileDropdownLink('Ver perfil', './profile.html');
header.addProfileDropdownLink('Editar Perfil', './edit-profile.html');
header.addProfileDropdownLink('Seguindo', './following.html', true);
header.addProfileDropdownLink('Sair', './login.html', false, true);
header.renderMenuLinks();
header.renderDropDownMenu('../../assets/woman.jpg');

const currentImg = `${database.currentUserInSession.image}`;

//renderizando header
const header = new Header();
header.addMenuLink('../../assets/home.svg', './feed.html', true);
header.addMenuLink('../../assets/search.svg', './explorer.html');
header.addMenuLink('../../assets/new.svg', './new.html');
header.addProfileDropdownLink('Ver perfil', '../Profile/profile.html');
header.addProfileDropdownLink(
  'Editar Perfil',
  '../EditProfile/edit-profile.html'
);
header.addProfileDropdownLink('Seguindo', '../Following/following.html');
header.addProfileDropdownLink('Sair', '../../index.html', false, true);
header.renderMenuLinks();
header.renderDropDownMenu(currentImg);
