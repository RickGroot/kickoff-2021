const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/'

// GET REQUEST
const teams = fetch(`${url}/squads/2/teams/6/members/12/`)
                .then(response => response.json())
                .then(data => render(data));

// PUT REQUEST
const putData = {
    id:12,
    teamId:6,
    name:'Rick',
    avatar: '',
    createdAt: '',
    prefix:'',
    surname:'Groot',
    mugshot:'https://avatars.githubusercontent.com/u/58476652?s=460&u=81df46ee550dbd4e2b48eb7c7d6208727a154cd1&v=4',
    githubHandle:'https://github.com/RickGroot',
    other: {
        sport: 'N/A',
        muziek: 'Toeter, D&B',
        werkplek: 'Thuis'
    }
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}
  
// postData(`${url}/squads/2/teams/6/members/12`, putData)
//     .then(data => {
//         console.log('Dit is gedaan: ', data);
//     });

function render(putData) {
    let data = putData;
    console.log("this is data", data)
    myName(data);
    mugshot(data);
    werkplek(data);
    muziek(data);
    github(data);
}

function myName(data) {
    let cont = document.getElementById('name')
    cont.append(data.name + ' ' + data.surname)
}

function mugshot(data) {
    let cont = document.getElementById('mugshot')
    cont.src = data.mugshot
}

function werkplek(data) {
    let cont = document.getElementById('werkplek')
    cont.append(data.other.werkplek)
}

function muziek(data) {
    let cont = document.getElementById('muziek')
    cont.append(data.other.muziek)
}

function github(data) {
    let cont = document.getElementById('github')
    cont.setAttribute('href', data.githubHandle);
}