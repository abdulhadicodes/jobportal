document.addEventListener("DOMContentLoaded", () => {
  // Function to save the service provider's profile data
  window.saveProviderProfile = function () {
      const name = document.getElementById("providerName").value;
      const serviceType = document.getElementById("providerServiceType").value;
      const location = document.getElementById("providerLocation").value;
      const description = document.getElementById("providerDescription").value;

      if (name && serviceType && location) {
          const profile = {
              name,
              serviceType,
              location,
              description
          };

          displayProfile(profile);
          addToListings(profile);
          alert("Profile saved successfully!");
      } else {
          alert("Please fill out all required fields.");
      }
  };

  // Function to display the service provider's profile preview
  function displayProfile(profile) {
      const profilePreview = document.getElementById("providerProfilePreview");
      profilePreview.innerHTML = `
          <h3>Profile Preview:</h3>
          <p><strong>Name:</strong> ${profile.name}</p>
          <p><strong>Service Type:</strong> ${profile.serviceType}</p>
          <p><strong>Location:</strong> ${profile.location}</p>
          <p><strong>Description:</strong> ${profile.description || 'N/A'}</p>
      `;
  }

  // Function to add the profile to the service seeker listings
  function addToListings(profile) {
      const listingsContainer = document.getElementById("providerListings");
      const listingElement = document.createElement("div");
      listingElement.classList.add("listing");
      listingElement.innerHTML = `
          <h4>${profile.name}</h4>
          <p><strong>Service Type:</strong> ${profile.serviceType}</p>
          <p><strong>Location:</strong> ${profile.location}</p>
          <p>${profile.description || 'No description available'}</p>
      `;
      listingsContainer.appendChild(listingElement);
  }
});


// Save profile data
function saveProfile() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const serviceType = document.getElementById('serviceType').value;
  const location = document.getElementById('location').value;
  const description = document.getElementById('description').value;

  document.getElementById('profileName').textContent = name;
  document.getElementById('profileEmail').textContent = email;
  document.getElementById('profileServiceType').textContent = serviceType;
  document.getElementById('profileLocation').textContent = location;
  document.getElementById('profileDescription').textContent = description;

  alert('Profile saved successfully!');
}

// Add a new service
function addService() {
  const serviceTitle = document.getElementById('serviceTitle').value;
  const serviceDetails = document.getElementById('serviceDetails').value;

  if (serviceTitle && serviceDetails) {
      const serviceList = document.getElementById('serviceList');
      const listItem = document.createElement('li');
      listItem.textContent = `${serviceTitle}: ${serviceDetails}`;
      serviceList.appendChild(listItem);

      // Clear the form
      document.getElementById('serviceTitle').value = '';
      document.getElementById('serviceDetails').value = '';
      alert('Service added successfully!');
  } else {
      alert('Please fill in all fields.');
  }
}
function viewProfile(name) {
  // This function simulates viewing a detailed profile.
  document.getElementById('provider-listings').style.display = 'none';
  document.getElementById('provider-profile').style.display = 'block';

  // For demonstration purposes, hardcode the profile details.
  document.getElementById('profileName').innerText = name;
  document.getElementById('profileServiceType').innerText = 'Electrician';
  document.getElementById('profileLocation').innerText = 'New York, NY';
  document.getElementById('profileDescription').innerText = 'Experienced electrician with 5 years of work.';
}

function backToListings() {
  // Go back to the listings section.
  document.getElementById('provider-profile').style.display = 'none';
  document.getElementById('provider-listings').style.display = 'block';
}
