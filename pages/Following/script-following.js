import Header from "../../components/Header.js"
import FollowerCard from "../../components/FollowerCard.js"

//renderizando header
const header = new Header()
header.addMenuLink('../../assets/home.svg', "../Feed/feed.html")
header.addMenuLink('../../assets/search.svg', "../Explore/explore.html")
header.addMenuLink('../../assets/new.svg', "../NewPost/new-post.html")
header.addProfileDropdownLink('Ver perfil', "../Profile/profile.html")
header.addProfileDropdownLink('Editar Perfil', "../EditProfile/edit-profile.html")
header.addProfileDropdownLink('Seguindo', "../Following/following.html", true)
header.addProfileDropdownLink('Sair', "../../index.html", false, true)
header.renderMenuLinks()
header.renderDropDownMenu('../../assets/woman.jpg')

