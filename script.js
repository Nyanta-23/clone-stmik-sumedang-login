// element
// body
const tgtBody = document.querySelector('body');

// container
const section = document.createElement('section');

// div1
const div1 = document.createElement('div');
const imgElearn = document.createElement('img');

// div2
const div2 = document.createElement('div');

// form div2
const formLog = document.createElement('form');

const inputUser = document.createElement('input');
const inputPass = document.createElement('input');
const labCb = document.createElement('label');
const cbForm = document.createElement('input');
const inDiv2 = document.createElement('div');
const textLab = document.createTextNode('Remember username');
const logInBut = document.createElement('button');
const buttTxt = document.createTextNode('Log in');

// sidebar div2
const sidebar = document.createElement('div');
const forgotPass = document.createElement('p');
const forgotPassHref = document.createElement('a');
const forgotPassTxt = document.createTextNode('Forgotten your username or password?');
const cookies = document.createElement('p');
const cookiesTxt = document.createTextNode('Cookies must be enabled in your browser');
const cookTandaTanya = document.createElement('div');
const cookHrefTandT = document.createElement('a');
const cookTxt = document.createTextNode('?');
const logUseYourAcc = document.createElement('p');
const logUseYourAccTxt = document.createTextNode('Log in using your account on:');
const sidebarFromLog = document.createElement('div');
const logGoogleHref = document.createElement('a');
const logGoogleTxt = document.createTextNode('Log in with Google');
const logAppleHref = document.createElement('a');
const logAppleTxt = document.createTextNode('Log in with Apple');

// div 3
const div3 = document.createElement('div');

const askFirstTime = document.createElement('h1');
const askFirstTimeTxt = document.createTextNode('Is this your first time here?');

const supBrow = document.createElement('div');
const supBrowTxt = document.createTextNode('Supported Browser');

const divImgBrow = document.createElement('div');
const imgBrow = document.createElement('img');

const clickGogl = document.createElement('p');
const clickGoglTxt = document.createTextNode('Klik tombol Google untuk masuk ke dalam E-learning STMIK Sumedang.');
const gSuite = document.createElement('p');
const gSuiteTxt = document.createTextNode('E-Learning ini hanya bisa di akses dengan menggunakan akun G suite Google Mail STMIK Sumedang (single sign on). Bagi Dosen dan mahasiswa/i silahkan pergunakan akun G Suite tersebut.');

// footer
const footer = document.createElement('footer');
const sectFoot = document.createElement('section');

const divSectFoot1 = document.createElement('div');
const divSectFoot2 = document.createElement('div');

const imgDivSectFoot = document.createElement('img');
const footerPowered = document.createElement('pre');
const footerTxt = document.createTextNode('2021 - Developed By BAPSI STMIK Sumedang. Powered by Moodle');
const getApp = document.createElement('a');
const getAppTxt = document.createTextNode('Get the mobile app');


const h2Fak = document.createElement('h2');
const txtFax = document.createTextNode('Fakultas Teknologi Informasi');

const divEmailLink = document.createElement('div');
const linkBrow = document.createElement('p');
const linkBrowTxt = document.createTextNode('stmik-sumedang.ac.id');
const emailBrow = document.createElement('p');
const emailBrowTxt = document.createTextNode('elearning.stmik-sumedang.ac.id');
const phoneNum = document.createElement('p');
const phoneNumTxt = document.createTextNode('(0261)207395');

// ================================

// appendChild
// section sticked to body
tgtBody.appendChild(section);

// div1 sticked to section & imgElearn sticked to div1
section.appendChild(div1);
div1.appendChild(imgElearn);

// div2 sticked to section & formLog sticked to div2
section.appendChild(div2);
div2.appendChild(formLog);

// inputUser & inputPass sticked to formLog
formLog.appendChild(inputUser);
formLog.appendChild(inputPass);

// div in div2 sticked to formLog
formLog.appendChild(inDiv2);

// LogIn Button sticked to formLog
formLog.appendChild(logInBut);
logInBut.appendChild(buttTxt);

// labCb & cbForm sticked to div in div2
inDiv2.appendChild(cbForm);
inDiv2.appendChild(labCb);

// textLab sticked to labCB
labCb.appendChild(textLab);

// sidebar sticked to div2
div2.appendChild(sidebar);
sidebar.appendChild(forgotPass);
forgotPass.appendChild(forgotPassHref);
forgotPassHref.appendChild(forgotPassTxt);
sidebar.appendChild(cookies);
cookies.appendChild(cookiesTxt);
cookies.appendChild(cookTandaTanya);
cookTandaTanya.appendChild(cookHrefTandT);
cookHrefTandT.appendChild(cookTxt);

sidebar.appendChild(logUseYourAcc);
logUseYourAcc.appendChild(logUseYourAccTxt);
sidebar.appendChild(sidebarFromLog);
sidebarFromLog.appendChild(logGoogleHref);
logGoogleHref.appendChild(logGoogleTxt);
sidebar.appendChild(sidebarFromLog);
sidebarFromLog.appendChild(logAppleHref);
logAppleHref.appendChild(logAppleTxt);

// div 3 sticked to section
section.appendChild(div3);

div3.appendChild(askFirstTime);
askFirstTime.appendChild(askFirstTimeTxt);

div3.appendChild(supBrow);
supBrow.appendChild(supBrowTxt);

div3.appendChild(divImgBrow);
divImgBrow.appendChild(imgBrow);

div3.appendChild(clickGogl);
clickGogl.appendChild(clickGoglTxt);

div3.appendChild(gSuite);
gSuite.appendChild(gSuiteTxt);

// footer
tgtBody.appendChild(footer);
footer.appendChild(sectFoot);
sectFoot.appendChild(divSectFoot1);
sectFoot.appendChild(divSectFoot2);

// side div left
divSectFoot1.appendChild(imgDivSectFoot);
divSectFoot1.appendChild(footerPowered);
footerPowered.appendChild(footerTxt);

divSectFoot1.appendChild(getApp);
getApp.appendChild(getAppTxt);

// side div right
divSectFoot2.appendChild(h2Fak);
h2Fak.appendChild(txtFax);
divSectFoot2.appendChild(divEmailLink);

divEmailLink.appendChild(linkBrow);
linkBrow.appendChild(linkBrowTxt);

divEmailLink.appendChild(emailBrow);
emailBrow.appendChild(emailBrowTxt);

divEmailLink.appendChild(phoneNum);
phoneNum.appendChild(phoneNumTxt);



// ====================================
// Attribute

// img on div1 style
imgElearn.setAttribute('src', 'img/LOGO-NEW-1.png');

// ----------
// div2
// inputUsername Attr
inputUser.setAttribute('placeholder', 'Username');
inputUser.setAttribute('type', 'text');

// inputPassword Attr
inputPass.setAttribute('placeholder', 'Password');
inputPass.setAttribute('type', 'password');

// checkbox Form
cbForm.setAttribute('type', 'checkbox');

// sidebar

// forgotpass attr
forgotPassHref.setAttribute('href', '#');

// log in google attr
logGoogleHref.setAttribute('href', '#');

// Log in apple attr
logAppleHref.setAttribute('href', '#');

// cookies tanda tanya atr
cookHrefTandT.setAttribute('href', '#');

// image browser
imgBrow.setAttribute('src', 'img/yahoo-mail-supported-browsers.png');

// img footer
imgDivSectFoot.setAttribute('src', 'img/kampusmerdeka.png');

// Get the mobile app link
getApp.setAttribute('href', '#');


// =====================================


// Style

// body style
tgtBody.style.backgroundColor = '#ebf4f8';

// section(container) style;
section.style.width = '58%';
section.style.margin = 'auto';
section.style.marginTop = '80px';

// div1 style
div1.style.backgroundColor = 'rgba(0,0,0,.03)';
div1.style.padding = '18px 0px 5px 0px';
div1.style.borderBottom = '1px solid rgba(0,0,0,.125)';
div1.style.display = 'grid';
div1.style.placeItems = 'center';

// div2 style
div2.style.display = 'flex';
div2.style.backgroundColor = '#fff';
div2.style.padding = '40px 0 20px 0 ';
div2.style.fontFamily = 'Arial';
div2.style.fontSize = '0.9rem';

// form style
formLog.style.display = 'flex';
formLog.style.placeContent = 'left';
formLog.style.flexDirection = 'column';
formLog.style.padding = '0px 0px 0px 70px';
formLog.style.width = '160px';

// inputUsername Style
inputUser.style.height = '40px';
inputUser.style.border = '1px solid #ccc';

// inputPassword Style
inputPass.style.height = '40px';
inputPass.style.border = '1px solid #ccc';

inputPass.style.marginTop = '15px';

// inDiv2 style
inDiv2.style.margin = '15px 0 20px 0';

// label checkbox form style
labCb.style.justifyItems = 'right';

// checkbox Form style
cbForm.style.justifyItems = 'left';

// logInButton Style
logInBut.style.marginTop = '5px';
logInBut.style.backgroundColor = '#1b3058';
logInBut.style.border = '1px solid #1b3058';
logInBut.style.color = 'white';
logInBut.style.padding = '10px';
logInBut.style.cursor = 'pointer';

// sidebar style
sidebar.style.margin = '0px 0px 0px 40px';
sidebar.style.width = '170px';

// forgot pass link
forgotPassHref.style.color = '#000';
forgotPassHref.style.textDecoration = 'none';

// cookies tanda tanya
cookies.style.display = 'grid';
cookies.style.alignItems = 'flex-start';
cookTandaTanya.style.position = 'static';

cookTandaTanya.style.backgroundColor = '#3AA9E2';
cookTandaTanya.style.border = '1px solid #3AA9E2';
cookTandaTanya.style.width = '15px';
cookTandaTanya.style.height = '15px';
cookTandaTanya.style.borderRadius = '100%';
cookTandaTanya.style.textAlign = 'center';
cookHrefTandT.style.color = 'white';
cookHrefTandT.style.textDecoration = 'none';

cookTandaTanya.style.margin = '-14px 0 0px 105px';

// sidebar from login
sidebarFromLog.style.display = 'grid';

// log in google
logGoogleHref.style.padding = '20px';
logGoogleHref.style.backgroundColor = '#e9ecef';
logGoogleHref.style.color = '#000';
logGoogleHref.style.textDecoration = 'none';

// Log in apple
logAppleHref.style.padding = '20px';
logAppleHref.style.backgroundColor = '#e9ecef';
logAppleHref.style.color = '#000';
logAppleHref.style.textDecoration = 'none';

// Div 3
div3.style.margin = '20px 0 0 0';
div3.style.width = '100%';
div3.style.backgroundColor = '#fff';

// first time?
askFirstTime.style.fontFamily = 'Arial';
askFirstTime.style.padding = '28px 0 0 20px';

// Support Browser
supBrow.style.fontFamily = 'Arial';
supBrow.style.textAlign = 'center';
supBrow.style.fontWeight = 'bold';

// div img browser
divImgBrow.style.display = 'flex';
divImgBrow.style.width = '100%';
divImgBrow.style.backgroundColor = '#fff';
divImgBrow.style.justifyContent = 'center';

// imgBrowser
imgBrow.style.width = '90%';
clickGogl.style.textAlign = 'center';
clickGogl.style.padding = '5px 0 3px 0';

gSuite.style.textAlign = 'center';
gSuite.style.padding = '0 45px 20px 45px';


// footer
footer.style.width = '100%';
footer.style.backgroundColor = '#ffcb00';

sectFoot.style.display = 'flex';
sectFoot.style.justifyContent = 'center';

divSectFoot1.style.width = '50%';
divSectFoot1.style.margin = '35px 0 0 0';
imgDivSectFoot.style.width = '200px';

footerPowered.style.marginBottom = '50px';

getApp.style.color = '#fff';
getApp.style.marginBottom = '-50px';

divSectFoot2.style.width = '25%';
divSectFoot2.style.margin = '35px 0 0 0';

divEmailLink.style.width = '200px';

linkBrow.style.marginTop = '-14px';
emailBrow.style.marginTop = '-14px';
phoneNum.style.marginTop = '-14px';


// =========================================================
// Js
// LogInButton Js
logInBut.addEventListener('mouseover', function () {
    logInBut.style.border = '1px solid rgb(118, 118, 118)';
    logInBut.style.backgroundColor = '#112';
});

logInBut.addEventListener('mouseout', function () {
    logInBut.style.backgroundColor = '#1b3058';
    logInBut.style.border = '1px solid #1b3058';
})

// forgotpass Js
forgotPass.addEventListener('mouseover', function () {
    forgotPassHref.style.textDecoration = 'underline';
})

forgotPass.addEventListener('mouseout', function () {
    forgotPassHref.style.textDecoration = 'none';
})

// logIn google && apple
logGoogleHref.addEventListener('mouseover', function () {
    logGoogleHref.style.backgroundColor = '#cbd3da';
})

logGoogleHref.addEventListener('mouseout', function () {
    logGoogleHref.style.backgroundColor = '#e9ecef';
})

logAppleHref.addEventListener('mouseover', function () {
    logAppleHref.style.backgroundColor = '#cbd3da';
})

logAppleHref.addEventListener('mouseout', function () {
    logAppleHref.style.backgroundColor = '#e9ecef';
})