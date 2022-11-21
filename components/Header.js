class Header {
  links;
  dropdownLinks;

  constructor() {
    this.header = document.createElement('header');
    this.nav = document.createElement('nav');
    this.ul = document.createElement('ul');
    this.ul.classList.add('menu');
    this.links = [];
    this.dropdownLinks = [];
    this.header.append(this.nav);
    this.nav.append(this.ul);
  }

  addMenuLink(icon, href, isActive = false) {
    this.links.push({ icon, href, isActive });
  }

  addProfileDropdownLink(linkName, href, isActive = false, isDanger = false) {
    this.dropdownLinks.push({ linkName, href, isActive, isDanger});
  }

  renderMenuLinks() {
    const logoLink = document.createElement('a');
    const imgLogo = document.createElement('img');

    this.links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      const icon = document.createElement('img');
      icon.setAttribute('src', link.icon)

      a.setAttribute('href', link.href);
      a.append(icon)
      li.append(a);
      this.ul.append(li);
      if (link.isActive) {
        a.classList.add('active-menu');
      }
    });

    imgLogo.setAttribute('src', '../../assets/logo.svg');
    logoLink.setAttribute('href', './feed.html');

    logoLink.append(imgLogo);
    document.querySelector('main').append(this.header);
    this.nav.append(logoLink, this.ul);
  }

  renderDropDownMenu(userPic) {
    const li = document.createElement('li');
    const divDropdown = document.createElement('div');
    const dropDownBtn = document.createElement('button');
    const profilePic = document.createElement('img');
    const profileArrow = document.createElement('img');
    const dropDownContent = document.createElement('div');

    divDropdown.classList.add('dropdown');
    dropDownBtn.classList.add('dropbtn');
    dropDownBtn.id = 'dropdown';
    profilePic.classList.add('user-img');
    profilePic.setAttribute('src', userPic);
    profileArrow.setAttribute('src', '../assets/arrow-down.svg');
    dropDownContent.classList.add('dropdown-content');
    dropDownContent.id = 'dropdown-links';

    this.dropdownLinks.forEach(link => {
      const a = document.createElement('a');

      a.setAttribute('href', link.href);
      a.innerHTML = link.linkName;
      dropDownContent.append(a);
      if (link.isActive) {
        a.classList.add('active-menu');
      }
      if (link.isDanger) {
        a.classList.add('danger');
      }
    });

    dropDownBtn.append(profilePic, profileArrow);
    divDropdown.append(dropDownBtn, dropDownContent);
    li.append(divDropdown);
    this.ul.append(li);
  }
}

export default Header;
