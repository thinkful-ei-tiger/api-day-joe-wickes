const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joewickes';

// Add catches to promise chains
function fetchThis(...args) {
  try {
    return fetch(...args)  
    .then(response => {
    if (response.ok) {
      return response.json();
    }
    
    throw new Error(response.statusText);
  }).catch(error => {
      console.log(error);
  });
  } catch(e) {
    console.log(e);
  }
  
}
// Add error key to store and use render to display the error value if it exists
// DRY up code
//


function getItems() {
  return fetchThis(`${BASE_URL}/items`);
}

function createItem(name) {
  const newItem = JSON.stringify({
    name: name,
  });

  return fetchThis(`${BASE_URL}/items`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: newItem,
  });
}

function updateItem(id, updateData) {
  
  return fetchThis(`${BASE_URL}/items/${id}`,
  {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateData),
  });
}

function deleteItem(id) {
  return fetchThis(`${BASE_URL}/items/${id}`,
  {
    method: 'DELETE',
  });
}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem,
};