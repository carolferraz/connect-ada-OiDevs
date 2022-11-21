class Header {
  links;

  constructor() {
    this.header = document.createElement('header');
    this.links = [];
  }

  addMenuLink(linkName, href, isActive = false) {
    this.links.push({linkName, href, isActive})
  }

  render() {
    const nav = document.createElement('nav');
    const logoLink = document.createElement('a');
    const imgLogo = document.createElement('img')
    const ul = document.createElement('ul')
    ul.classList.add('menu')
    const li = document.createElement('li')
    const a = document.createElement('a')

    this.links.forEach((link) => {
      const li = document.createElement('li')
      const a = document.createElement('a')

      a.setAttribute("href", link.href)
      a.innerHTML = link.linkName
      li.append(a)
      ul.append(li)
      if(link.isActive) {
        a.classList.add('active-menu')
      }
    })

    imgLogo.setAttribute("src", "../../assets/logo.svg")
    logoLink.setAttribute("href", "./feed.html")

    logoLink.append(imgLogo)
    nav.append(logoLink, ul)
    this.header.append(nav);
    document.querySelector('main').append(this.header);
  }
}

export default Header;
