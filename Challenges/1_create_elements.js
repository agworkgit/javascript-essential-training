const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;


function createNavMenu() {
    let unordered__list = document.createElement('ul');
    unordered__list.innerHTML = navContent;
    let nav = document.createElement('nav');
    nav.append(unordered__list);
    nav.classList.add('main-navigation');
    let siteheader = document.querySelector('.siteheader');
    siteheader.append(nav);
}

createNavMenu();