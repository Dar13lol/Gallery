const loadBtn = document.getElementById('loadBtn');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loadBtn.addEventListener('click', async function() {
  try {
    loader.style.display = 'block';
    const response = await fetch('https://dog.ceo/api/breeds/image/random/20');
    if(!response.ok) {
      throw new Error('Failed to load images');
    }
    const data = await response.json();
    displayImages(data.message);
  } catch(error) {
    console.error(error);
  } finally {
    loader.style.display = 'none';
  }
});

function displayImages(images) {
  gallery.innerHTML = '';
  images.forEach(imageUrl => {
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.classList.add('image');
    gallery.appendChild(imgElement);
  });
}
