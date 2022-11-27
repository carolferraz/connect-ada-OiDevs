import Header from '../../components/Header.js';
import database from '../../models/DataBase.class.mjs';

database.initialization();

const currentImg = `${database.currentUserInSession.image}`;

//renderizando header
const header = new Header();
header.addMenuLink('../../assets/home.svg', './feed.html', true);
header.addMenuLink('../../assets/search.svg', './explorer.html');
header.addMenuLink('../../assets/new.svg', './new.html');
header.addProfileDropdownLink('Ver perfil', '../Profile/profile.html');
header.addProfileDropdownLink('Editar Perfil', './edit-profile.html');
header.addProfileDropdownLink('Seguindo', './following.html');
header.addProfileDropdownLink('Sair', './login.html', false, true);
header.renderMenuLinks();
header.renderDropDownMenu(currentImg);
