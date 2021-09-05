// My Info in Object
let globalObj = {
    email: 'ibnumahtab@gmail.com',
    cell: '+880162012345',
    dob: {
        date: '08 March 1998',
        age: 23,
    },
    gender: 'Male',
};

// Load User Data
const loadUser = async () => {
    const url = `https://randomuser.me/api/?gender=male`;
    const res = await fetch(url);
    const data = await res.json();
    displayUser(data.results[0]);
};

// Displaying Loading Data
const displayUser = user => {
    globalObj = user;
    setInnerText('name', `${user.name.title} ${user.name.first} ${user.name.last}`);
    document.getElementById('user-image').setAttribute('src', `${user.picture.large}`);
    document.getElementById('info').textContent = '';
};

// Set Inner Text
const setInnerText = (fieldID, setItem) => {
    const id = document.getElementById(fieldID);
    id.innerText = setItem;
};

// Showing Others Info with Mouseover Event
const mouseOverEvent = iconId => {
    const id = document.getElementById(iconId);
    id.addEventListener('mouseover', () => {
        let objProperty = globalObj[iconId];
        if (iconId === 'age') {
            objProperty = globalObj.dob.age;
        } else if (iconId === 'date') {
            objProperty = globalObj.dob.date;
        }
        setInnerText('info', objProperty)
    });
};

// Call The Mouseover Event Function
mouseOverEvent('email');
mouseOverEvent('cell');
mouseOverEvent('age');
mouseOverEvent('date');
mouseOverEvent('gender');