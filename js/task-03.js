const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const navImagesRef = document.querySelector('#gallery');



// const makeListItemImageRef = ({url,alt}) => {
//     const itemRef = document.createElement('li');
//     itemRef.classList.add('image-item');


//     const imageRef = document.createElement('img');
//     imageRef.setAttribute('src', `${url}`);
//     imageRef.setAttribute('alt', `${alt}`);
//     imageRef.setAttribute('width', 450);
//     imageRef.setAttribute('height', 300);
    
//     itemRef.append(imageRef);
//     return itemRef;
// }
// console.log(makeListItemImageRef(images[1]));
   
// const elements = images.map(makeListItemImageRef);
// console.log(elements);
// navImagesRef.append(...elements);

const makeListItemImageRef = ({ url, alt }) => {
    return `<li> <img src=" ${url}"" alt= "${alt}"
    width="450px" height= "300px"/<li>`;
};
const createElementRef = (images) => {
    return images.map(makeListItemImageRef).join('')

};
navImagesRef.insertAdjacentHTML('afterbegin',createElementRef(images));
navImagesRef.style.marginTop = '40px';
navImagesRef.style.display = 'flex';
navImagesRef.style.justifyContent = 'space-around';
navImagesRef.style.padding = '0';
navImagesRef.style.listStyle = 'none';