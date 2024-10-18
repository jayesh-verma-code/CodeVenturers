// this code is for card sliders
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //responsive breakpoints
    breakpoints:{
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  

  });


  
 // Array of objects with image and name for each card
 const cardData = [
  { name: 'Birmohan Singh', image: 'dummy_data/images/birmohan_singh.jpg', description: ' AI expert who fosters innovation and critical problem-solving.' },
  { name: 'Damanpreet Singh', image: 'dummy_data/images/damanpreet_singh.jpg', description: 'Algorithms guru known for clear explanations and collaboration.' },
  { name: 'Manoj Sachan', image: 'dummy_data/images/Manoj_sachan.jpg', description: 'Software engineering mentor nurturing creative coding skills.' },
  { name: 'Manoj Singh', image: 'dummy_data/images/manoj_sing.jpg', description: 'Cybersecurity specialist guiding students through real challenges.' },
  { name: 'Dr. Jagdeep Singh', image: 'http://sliet.ac.in/wp-content/uploads/avatars/466/66f81ca30f4ff-bpfull.jpg', description: 'Database systems expert with comprehensive, supportive guidance.' },
  { name: 'Dr. Manminder Singh', image: 'http://sliet.ac.in/wp-content/uploads/avatars/16/66693282b6269-bpfull.jpg', description: 'Machine learning mentor bridging theory with practical applications.' },
  { name: 'Dr. Preetpal Kaur Buttar', image: 'http://sliet.ac.in/wp-content/uploads/avatars/349/632d98c75d80f-bpfull.jpg', description: 'Cloud computing advocate igniting passion for innovative tech solutions.' },
  { name: 'Dr. Tajinder Singh', image: 'http://sliet.ac.in/wp-content/uploads/avatars/468/64e3532d30fac-bpfull.jpg', description: 'Cloud computing advocate igniting passion for innovative tech solutions.' },
  { name: 'Dr. Utkarsh', image: 'http://sliet.ac.in/wp-content/uploads/avatars/493/6165aace595a1-bpfull.jpg', description: 'Software architecture expert championing efficient design practices.' },
  { name: 'Dr. VINOD KUMAR VERMA', image: 'http://sliet.ac.in/wp-content/uploads/avatars/17/28b95ba0ed455dca378c1ada58307bf6-bpfull.jpg', description: ' Data science guide emphasizing practical skills and applications.' },
  { name: 'Jaspal Singh', image: 'http://sliet.ac.in/wp-content/uploads/avatars/36/e0a878e8162fd75cb5eb6929d98df5c1-bpfull.jpg', description: 'HCI specialist improving user experience and usability designs.' },
  { name: 'Rahul Gautam', image: 'http://sliet.ac.in/wp-content/uploads/avatars/350/666bf221c60a0-bpfull.jpg', description: 'OS expert known for clear, effective teaching and student support.' },
  { name: 'Dr. Jatinder Pal Singh', image: 'http://sliet.ac.in/wp-content/uploads/avatars/344/64edd5a68d11b-bpfull.jpg', description: 'Programming languages and compilers mentor fostering deep understanding.' },
  { name: 'Sukhpreet Singh', image: 'http://sliet.ac.in/wp-content/uploads/avatars/353/60544f9339252-bpfull.jpg', description: 'Computer vision specialist challenging students with cutting-edge tech.' },
  { name: 'Chinu', image: 'http://sliet.ac.in/wp-content/uploads/avatars/477/605067c46b9c6-bpfull.jpg', description: 'Computational theory mentor with comprehensive, approachable guidance.' },
  { name: 'Dr. Vikash Kumar Garg', image: 'http://sliet.ac.in/wp-content/uploads/avatars/457/605b0275612df-bpfull.jpg', description: 'Software architecture expert championing efficient design practices.' },
  { name: 'Sunita Rani', image: 'http://sliet.ac.in/wp-content/uploads/avatars/516/64ed97380a462-bpfull.jpg', description: 'OS expert known for clear, effective teaching and student support.' },
]; 

const cardList = document.getElementById('card-list');

// Loop through the cardData array and create a list item for each
cardData.forEach(card => {
  cardList.innerHTML += `
      <li class="card-item swiper-slide" id="card">
          <a href="index3.html" class="card-link">
          <div class="imgp">
              <img src="${card.image}" alt="${card.name}" class="card-image">
              <p class="badge">${card.name}</p>
              </div>
              <h2 class="card-title">${card.description}</h2>
              <button class="card-button"><i class="fa-solid fa-arrow-right"></i></button>
          </a>
      </li>
  `;
});