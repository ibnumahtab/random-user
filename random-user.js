// CatchUp with ID
const userContainer = document.getElementById('user-container');

// Load User Data
const loadUser = async () => {
    const url = `https://randomuser.me/api/?gender=male`;
    const res = await fetch(url);
    const data = await res.json();
    displayUser(data.results);
};

loadUser();

// Displaying Loading Data
const displayUser = user => {
    
}