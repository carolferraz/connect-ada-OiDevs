import Header from "../../components/Header.js"

//renderizando header
const header = new Header()
header.addMenuLink('../../assets/home.svg', "./feed.html")
header.addMenuLink('../../assets/search.svg', "../Explore/explore.html", true)
header.addMenuLink('../../assets/new.svg', "./new-post.html")
header.addProfileDropdownLink('Ver perfil', "../Profile/profile.html")
header.addProfileDropdownLink('Editar Perfil', "./edit-profile.html")
header.addProfileDropdownLink('Seguindo', "./following.html")
header.addProfileDropdownLink('Sair', "../../index.html", false, true)
header.renderMenuLinks()
header.renderDropDownMenu('../../assets/woman.jpg') 
// Fim da header