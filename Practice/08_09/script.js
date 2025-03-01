/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack image in the assets folder
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${frogpack.volume
  }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${frogpack.color
  }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${frogpack.pocketNum
  }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${frogpack.strapLength.left
  } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${frogpack.strapLength.right
  } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${frogpack.lidOpen ? "open" : "closed"
  }</span></li>
    </ul>  
`;

// Create article element function
const createArticle = function () {
  const article = document.createElement('article');
  article.innerHTML = content;

  return article;
}

// Helper image element function

const imageInsert = function () {
  const figure = document.createElement('figure');
  const figureCaption = document.createElement('figcaption');
  figureCaption.innerHTML = 'frog backpack';

  const img = document.createElement('img');

  img.setAttribute('src', '../../assets/images/frog.svg');
  img.setAttribute('alt', 'frog backpack');
  img.style.height = '500px'; // reduce size

  figure.append(img);
  figure.append(figureCaption);

  return figure;
}

// Append article to HTML
const main = document.querySelector('main');
main.append(createArticle());
main.append(imageInsert());