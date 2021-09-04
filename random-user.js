// Load User Data
const loadUser = async () => {
    const url = `https://randomuser.me/api/?gender=male`;
    const res = await fetch(url);
    const data = await res.json();
    displayUser(data.results[0]);
};

// Set Inner Text
const setInnerText = (setItem) => {
    const id = document.getElementById('name');
    id.innerText = setItem;
};

// Displaying Loading Data
const displayUser = user => {
    console.log(user);
    setInnerText(`${user.name.title} ${user.name.first} ${user.name.last}`);
};

const mouseOverEvent = iconId => {
    const id = document.getElementById(iconId);
    id.addEventListener('mouseover',);
};