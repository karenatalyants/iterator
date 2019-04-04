const data = [{
    name: "Jon Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    name: "Angela Breolo",
    age: 29,
    gender: "female",
    lookingfor: "female",
    location: "San Jose CA",
    image: "https://randomuser.me/api/portraits/women/82.jpg"
  },
  {
    name: "Andy Downing",
    age: 35,
    gender: "male",
    lookingfor: "female",
    location: "Atlanta GA",
    image: "https://randomuser.me/api/portraits/men/99.jpg"
  },
  {
    name: "Doctor Dre",
    age: 47,
    gender: "male",
    lookingfor: "female",
    location: "Compton CA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrBufRCSfxkDGAiMTGYMsg7kPX54EDzFnea0n796HNNFAQUHjGA"
  }
];

const profiles = profileIterator(data);

nextProfile();
// next event

document.getElementById("next").addEventListener("click", nextProfile);


function nextProfile() {
  var currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
  <li class="list-group-item">Name: ${currentProfile.name}</li>
  <li class="list-group-item">Age: ${currentProfile.age}</li>
  <li class="list-group-item">Location: ${currentProfile.location}</li>
  <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    </ul>
    `
    document.getElementById("imageDisplay").innerHTML = `
    <img src="${currentProfile.image}">
    `
  } else {
    window.location.reload();
  }
}

// profile iterator

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? {
        value: profiles[nextIndex++],
        done: false
      } : {
        done: true
      }
    }
  }
}