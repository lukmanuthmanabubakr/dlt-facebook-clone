// sideBar

const menuItems = document.querySelectorAll('.menuItems');

const messagesNotifications = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages')


const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customizeTheme');
const fontSizes = document.querySelectorAll('.chooseSize span')
let root = document.querySelector(':root')


const colorPalette = document.querySelectorAll('.chooseColor span');
const bgOne = document.querySelector('.bgOne')
const bgTwo = document.querySelector('.bgTwo')
const bgThree = document.querySelector('.bgThree')







// remove active class from menu items

const changeActiveItem = () => {
    menuItems.forEach(items => {
        items.classList.remove('active')
    })
}





menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        


        if(item.id != "notifications") {
            document.querySelector('.notificationPopup').
            style.display = 'none'
        }else{
            document.querySelector('.notificationPopup').
            style.display = 'block'


            document.querySelector('#notifications .notificationCount').
            style.display = 'none';
        }

    })
})



// messages

messagesNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'

messagesNotifications.querySelector('.notificationCount').
    style.display = "none"


    setTimeout (() => {
        messages.style.boxShadow = 'none'

    }, 2000)
    
})


// theme

const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customizeTheme')) {
        themeModal.style.display = 'none'
    }
}


themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);






// remove active class from font size
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

//fontSizes

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSizes;
        size.classList.toggle('active');


        if (size.classList.contains('fontSizeOne')) {
            fontSizes = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains('fontSizTwo')) {
            fontSizes = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }else if(size.classList.contains('fontSizeThree')) {
            fontSizes = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '17rem');
        }else if (size.classList.contains('fontSizeFour')) {
            fontSizes = '19px';
            root.style.setProperty('--sticky-top-left', '5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }else if (size.classList.contains('fontSizeSix')) {
            fontSizes = '22px';
            root.style.setProperty('--sticky-top-left', '-13rem');
            root.style.setProperty('--sticky-top-right', '35rem');
        }

        // change font size of the root html element

        document.querySelector('html').style.fontSize = fontSizes;
              
    })
})

// remove active class from color
// const changeActiveClass = () => {
//     colorPalette.forEach(colorPicker => {
//         colorPicker.classList.remove('active');
//     })
// }



//color
colorPalette.forEach (palette => {
    palette.addEventListener('click', () => {
        let primary;
        if(palette.classList.contains('colorOne')) {
            primary = '252';
        }else if(palette.classList.contains('colorTwo')) {
            primary ='52'
        }else if(palette.classList.contains('colorThree')) {
            primary = '352'
        }else if(palette.classList.contains('colorFour')) {
            primary = '152'
        }else if(palette.classList.contains('colorFive')) {
            primary = '202'
        }

        palette.classList.add('active')
        root.style.setProperty('--primary-color-hue', primary)
    })
})

// theme backgroond

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change background

const changeBg = () => {
    root.style.setProperty('--light-color-lightness',lightColorLightness)
    root.style.setProperty('--white-color-lightness',whiteColorLightness)
    root.style.setProperty(' --dark-color-lightness',darkColorLightness)
}


bgOne.addEventListener('click', () => {
    // add active class

    bgOne.classList.add('active');


    // remove active class from 2 others

    bgTwo.classList.remove('active');
    bgThree.classList.remove('active');


    window.location.reload()

})

bgTwo.addEventListener('click', () => {
    lightColorLightness = '15%';
    whiteColorLightness = '20%';
    darkColorLightness = '95%';

    // add active class
    bgTwo.classList.add('active')

     // remove active class from 2 others

     bgOne.classList.remove('active');
     bgThree.classList.remove('active');

     changeBg();
})


bgThree.addEventListener ('click', () => {
    lightColorLightness = '0%';
    whiteColorLightness = '10%';
    darkColorLightness = '95%';

    //  add active class
    bgThree.classList.add('active')

     // remove active class from 2 others

     bgOne.classList.remove('active');
     bgTwo.classList.remove('active');

     changeBg();
})