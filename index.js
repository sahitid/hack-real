// index.js

const profileCard = document.getElementById('profileCard');
const profiles = [
    { name: 'Profile 1', details: 'Details about Profile 1.' },
    { name: 'Profile 2', details: 'Details about Profile 2.' },
    { name: 'Profile 3', details: 'Details about Profile 3.' },
    // Add more profiles as needed
];

let currentProfileIndex = 0;
let hammertime;

initProfileCard();

profileCard.addEventListener('mousedown', startSwipe);
profileCard.addEventListener('touchstart', startSwipe);

function initProfileCard() {
    hammertime = new Hammer(profileCard);
    hammertime.on('pan', handlePan);
    hammertime.on('panend', handlePanEnd);
    updateProfileCard();
}

function updateProfileCard() {
    const currentProfile = profiles[currentProfileIndex];
    profileCard.innerHTML = `
        <h2>${currentProfile.name}</h2>
        <p>${currentProfile.details}</p>
    `;
}

function handlePan(e) {
    profileCard.style.transform = `translateX(${e.deltaX}px) rotate(${(e.deltaX / 10)}deg)`;
}

function handlePanEnd(e) {
    const deltaX = e.deltaX;

    if (deltaX > 50) {
        // Swipe right (accept)
        console.log('Accepted');
        currentProfileIndex++;
    } else if (deltaX < -50) {
        // Swipe left (reject)
        console.log('Rejected');
        currentProfileIndex++;
    }

    // Reset card position
    profileCard.style.transition = 'transform 0.3s ease-out';
    profileCard.style.transform = 'translateX(0) rotate(0)';
    
    // Check if there are more profiles
    if (currentProfileIndex < profiles.length) {
        setTimeout(() => {
            profileCard.style.transition = ''; // Reset transition property
            updateProfileCard();
        }, 300); // Delay to allow transition to complete
    } else {
        // No more profiles, handle the end of the card stack
        console.log('No more profiles');
    }
}



<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  const firebaseConfig = {
    apiKey: "AIzaSyCg6PN3R4WfutJeclsemUmq3SvkG0MtUi8",
    authDomain: "icebreakr-4975e.firebaseapp.com",
    projectId: "icebreakr-4975e",
    storageBucket: "icebreakr-4975e.appspot.com",
    messagingSenderId: "930792003992",
    appId: "1:930792003992:web:496e517381072e41ee73ed"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>
