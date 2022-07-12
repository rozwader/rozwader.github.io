const menuButton = document.getElementById("menuButton");
const menu = document.getElementById('menuNavbar');
const themeChanger = document.getElementById('themeColorChanger');
const lightMode = 'light_mode';
const darkMode = 'dark_mode';
const mainPhoto = document.getElementById('mainPhoto');
const plantsPhoto = document.getElementById('plantsPhoto');
const wireframePhoto = document.getElementById('wireframePhoto');
const whiteboardPhoto = document.getElementById('whiteboardPhoto');
const listOfLines = [
    upper = document.getElementById('upperLine'),
    middle = document.getElementById('middleLine'),
    lower = document.getElementById('lowerLine')
];

const openMenu = function(){
    menuButton.setAttribute('data-is-open', 'pending')
        listOfLines[1].style = 'transform: scale(0); transition: transform 0.3s;'
        listOfLines[0].style = 'top: 50%; transition: top 0.3s;'
        listOfLines[2].style = 'top: 50%; transition: top 0.3s;'
        setTimeout(function(){
            listOfLines[0].style = 'top: 50%; transform: rotateZ(45deg); transition: transform 0.3s;'
            listOfLines[2].style = 'top: 50%; transform: rotateZ(135deg); transition: transform 0.3s;'
            menuButton.setAttribute('data-is-open', 'true')
            afterOpenMenu();
        }, 300) 
}

const closeMenu = function(){
    menuButton.setAttribute('data-is-open', 'pending')
        listOfLines[0].style = 'top: 50%; transform: rotateZ(0deg); transition: transform 0.3s;'
        listOfLines[2].style = 'top: 50%; transform: rotateZ(0deg); transition: transform 0.3s;'
        afterCloseMenu();
        setTimeout(function(){
            listOfLines[1].style = 'transform: scale(1); transition: transform 0.3s;'
            listOfLines[0].style = 'top: 75%; transition: top 0.3s;'
            listOfLines[2].style = 'top: 25%; transition: top 0.3s;'
            menuButton.setAttribute('data-is-open', 'false')
        }, 300)
}

const afterOpenMenu = function(){
    menu.style = 'right: 0; transition: all 0.5s;';
}

const afterCloseMenu = function(){
    menu.style = 'right: -120%; transition: all 0.3s';
}

const changeThemeForDark = function(){
    document.body.style.setProperty('--main_color', '#E0E0E0')
    document.body.style.setProperty('--bg', '#1A1A1A')
    setTimeout(() => {
        themeChanger.getElementsByClassName('material-symbols-outlined')[0].textContent = lightMode
    }, 150)
}

const changeThemeForLight = function(){
    document.body.style.setProperty('--main_color', '#1A1A1A')
    document.body.style.setProperty('--bg', '#E0E0E0')
    setTimeout(() => {
        themeChanger.getElementsByClassName('material-symbols-outlined')[0].textContent = darkMode
    }, 150)
}

menuButton.addEventListener('click', function(event){
    event.preventDefault();
    if(menuButton.getAttribute('data-is-open') == 'false'){
        openMenu();
    }else if(menuButton.getAttribute('data-is-open') == 'true'){
        closeMenu();
    }  
})

themeChanger.addEventListener('click', function(event){
    event.preventDefault();
    if(themeChanger.getAttribute('data-is-dark') == 'false'){ // Dark Mode On
        themeChanger.setAttribute('data-is-dark', 'pending');
        themeChanger.style = 'transform: rotateY(180deg); transition: all 0.5s;'
        mainPhoto.setAttribute('src', './assets/HomeLight.png')
        plantsPhoto.setAttribute('src', './assets/PlantsLight.png')
        wireframePhoto.setAttribute('src', './assets/WireframeLight.png')
        whiteboardPhoto.setAttribute('src', './assets/WhiteboardLight.png')
        changeThemeForDark();
        setTimeout(function(){
            themeChanger.setAttribute('data-is-dark', 'true');
        }, 200)
    }else if(themeChanger.getAttribute('data-is-dark') == 'true'){ // Light Mode On
        themeChanger.setAttribute('data-is-dark', 'pending');
        themeChanger.style = 'transform: rotateY(0); transition: all 0.5s;'
        mainPhoto.setAttribute('src', './assets/HomeDark.png')
        plantsPhoto.setAttribute('src', './assets/PlantsDark.png')
        wireframePhoto.setAttribute('src', './assets/WireframeDark.png')
        whiteboardPhoto.setAttribute('src', './assets/WhiteboardDark.png')
        changeThemeForLight();
        setTimeout(function(){
            themeChanger.setAttribute('data-is-dark', 'false');
        }, 200)
    }
})


// arrow buttons system

const leftArrow = document.getElementsByClassName('arrowLeft')[0];
const rightArrow = document.getElementsByClassName('arrowRight')[0];
const projects = document.getElementsByClassName('project');

let currentProject = 1;

const goLeft = function(){
    projects[currentProject-1]. style = 'display: none'
    if(currentProject == 1){
        currentProject = 3;
    }else{
        currentProject--;
    }
    let newProject = currentProject-1;
    projects[newProject].style = 'display: flex;'
}

const goRight = function(){
    projects[currentProject-1]. style = 'display: none'
    if(currentProject == projects.length){
        currentProject = 1;
    }else{
        currentProject++;
    }
    let newProject = currentProject-1;
    projects[newProject].style = 'display: flex;'
}

leftArrow.addEventListener('click', function(event){
    event.preventDefault();
    goLeft();
})

rightArrow.addEventListener('click', function(event){
    event.preventDefault();
    goRight();
})