const btn= document.getElementById('exploreButton');
const card= document.getElementById('welcomecard');
const social =document.getElementById('social');
btn.addEventListener('click',()=>{
    btn.style.opacity = '0';
    card.style.opacity = '0';
    social.style.display='flex';

    setTimeout(()=>{
        social.style.opacity ='1';
    },500);
});