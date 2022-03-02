'use strict';
// VARIABLES
const menuBars = document.querySelector('#menu-bars');
const overlay = document.querySelector('#overlay');
const navList = document.querySelectorAll('li');
const homeHeader = document.querySelector('.home__header'),
      homePara1 = document.querySelector('.home__para-1'),
      homePara2 = document.querySelector('.home__para-2'),
      homeParaSlava = document.querySelector('.home__para-slava'),
      finSupportHeader = document.querySelector('.fin-support__header'),
      blocksArmyHeader = document.querySelector('.blocks__army__header'),
      blocksAdisHeader = document.querySelector('.blocks__aids__header'),
      finSupportRefs = document.querySelectorAll('.support'),
      moraleHeader = document.querySelector('.morale__header'),
      moraleLink = document.querySelector('.morale__link'),
      moraleInfo = document.querySelector('.morale__info'),
      truthHeader = document.querySelector('.truth__header'),
      resourceLink = document.querySelectorAll('.resource__link'),
      selfHeader = document.querySelector('.self__header'),
      selfPara = document.querySelector('.self__paragraph'),
      homePage = document.querySelector('.nav-home'),
      finSupport = document.querySelector('.nav-fin'),
      boostMorale = document.querySelector('.nav-morale'),
      truthPage = document.querySelector('.nav-truth'),
      blocksArmyPara = document.querySelectorAll('.blocks__army__para'),
      blocksAidPara = document.querySelectorAll('.blocks__aids__para'),
      btnUkr = document.querySelector('.btns__language-ukr'),
      btnEng = document.querySelector('.btns__language-eng');

const supportArray = [
    `SaveLife in UA (Повертайся живим)`,
    `Допомога армії`,
    `Національний Банк України`,
    `Допоможи через Monobank`,
    `Допомога з Польщі`,
    `Гуманітарна допомога`,
    `Допомога Сходу`,
    `Агенти крові Patreon`
];

const supportArrayEng = [
    `SaveLife in UA (Повертайся живим)`,
    `Army SOS`,
    `National Bank of Ukraine`,
    `Donation via Monobank (in UAH)`,
    `Help Ukraine from Poland`,
    `Ukrainian Plast | Ukrainian Scouts`,
    `East-SOS`,
    `Blood agents Patreon`
];

const supportSrcArray = [
    `https://savelife.in.ua/donate/`,
    `https://armysos.com.ua/pomoch-armii`,
    `https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi`,
    `https://uahelp.monobank.ua/`,
    `https://helpukraine.center/`,
    `https://www.plast.org.ua/`,
    `https://vostok-sos.org/`,
    `https://www.patreon.com/BloodAgents`,
];

const supportSrcArrayEng = [
    `https://savelife.in.ua/en/donate/`,
    `https://armysos.com.ua/en/help-the-army`,
    `https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi`,
    `https://uahelp.monobank.ua/`,
    `http://helpukraine.center/en`,
    `https://en.plast.org.ua/`,
    `https://vostok-sos.org/en/make-a-donation/?fbclid=IwAR2DNDQiu3CCmK2OwF3Fb4pheq7qtDzzuj_Cnu1RogkxIt5JPaoiKFbmSPA`,
    `https://www.patreon.com/BloodAgents`,
];

const resourceArray = [
    `Українська правда`,
    `Новоє врємя`,
    `Бабель`,
    `Liga.net`,
    `Telegram Громадське`,
    `Telegram Київ Оперативний`,
    `Telegram Уніан`,
    `Facebook MЗС України`,
];

const resourceArrayEng = [
    `Ukrainska pravda`,
    `Novoe vremya`,
    `Babel`,
    `Meduza`,
    `Telegram Ukraine now`,
    `Telegram NEXTA`,
    `Twitter Dmytro Kuleba`,
    `Facebook MFA of Ukraine`,
];

const resourceSrcArray = [
    `https://www.pravda.com.ua/`,
    `https://nv.ua/`,
    `https://babel.ua/`,
    `https://www.liga.net/`,
    `https://t.me/hromadske_ua`,
    `https://t.me/kyivoperativ`,
    `https://t.me/uniannet`,
    `https://www.facebook.com/UkraineMFA`,
];

const resourceSrcArrayEng = [
    `https://www.pravda.com.ua/eng/`,
    `https://english.nv.ua/`,
    `https://babel.ua/ru/texts/77110-putin-nachal-masshtabnoe-vtorzhenie-v-ukrainu-vzryvy-v-kieve-harkove-odesse-mariupole-i-drugih-gorodah-onlayn-babelya?utm_source=group&utm_medium=telegram`,
    `https://meduza.io/en`,
    `https://t.me/UkraineNow`,
    `https://t.me/nexta_live`,
    `https://twitter.com/DmytroKuleba`,
    `https://www.facebook.com/UkraineMFA`,
];

const blocksArmyParaContent = [
    `Благодійний фонд у підтримку української армії`,
    `Допомога армії України`,
    `Переказ на рахунок НБУ`,
    `Переказ грошей через Монобанк`,
];

const blocksArmyParaContentEng = [
    `Kyiv-based charity fund that helps the Ukrainian Army since 2014`,
    `Donation for the Ukrainian Army`,
    `Support Ukrainian National Bank`,
    `Donation via Monobank (in UAH)`,
];

const blocksAidParaContent = [
    `Гуманітарна допомога з Польщі`,
    `Допомога медикам`,
    `Благодійна організація`,
    `Агенти крові`,
];

const blocksAidParaContentEng = [
    `Humanitarian and medical aid to Ukraine`,
    `Donation for medics and defense equipment`,
    `Charing organization since 2014`,
    `Community of blood donors in Ukraine`,
];

const currentLang = localStorage.getItem('lang');

// FUNCTIONS

function navMenuSlides (into, outo) {
    navList.forEach((navEl, i) => {
        navEl.classList.remove(`slide-${outo}-${i+1}`);
        navEl.classList.add(`slide-${into}-${i+1}`);
    });
}

function toggleNav () {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        navMenuSlides('in', 'out');
    }

    if (!overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        navMenuSlides('out', 'in');
    }

}

/* Language functions */

function toUkr () {
    // Навігація
    homePage.textContent = 'Додому';
    finSupport.textContent = 'Фінансова підтримка';
    boostMorale.textContent = 'Підтримай морально';
    truthPage.textContent = 'Знай правду';
    homeHeader.textContent = 'Рускій воєнний карабль, іді нахуй!';
    homePara1.textContent = 'Цей односторінковий веб-проект був розроблений для того, щоб допомогти українській владі протистояти і боротися з агресією Росії та Білорусі проти суверенної України.';
    homePara2.textContent = 'Усі надані посилання та ресурси допоможуть вам підтримати нас фінансово, а також дізнатися правду про те, що насправді відбувається в Україні.';
    homeParaSlava.textContent = 'СЛАВА УКРАЇНІ!';
    finSupportHeader.textContent = 'Підтримай нас';
    blocksArmyHeader.textContent = 'Армія';
    blocksAdisHeader.textContent = 'Медикаменти';
    moraleHeader.textContent = 'Грай за Україну';
    moraleLink.textContent = 'Грай на атакуй Росію';
    moraleInfo.textContent =`Кожен твій хід допомагає атакувати сайти, які використовуються для обслуговування російської армії. Перед початком гри включи VPN, якщо граєш з території України. Ось інструкція як це зробити. Поділись з друзями, нехай теж грають з користю. Навіть якщо ти просто залишиш відкритою цю сторінку на своєму комп'ютері, то атака продовжується.`;
    truthHeader.textContent = 'Слідкуйте за правдою';
    selfHeader.textContent = 'Я - українець';
    selfPara.textContent = `В Україні є багато речей, якими я пишаюся. Але є одна річ, яка яскраво виділяється – це свобода.
    Радяни намагалися нас задушити, але все марно.
    Янукович намагався нас задушити, але все марно.
    Путін намагається знищити нас з 2014 року,
    а ми все ще живі й здорові. Ми боремося,
    І ми ніколи не здамося. Тому що ми стоїмо за правду.
    За свободу.`;

    finSupportRefs.forEach((el, i) => {
        el.textContent = supportArray[i];
        el.href = supportSrcArray[i];
    });

    resourceLink.forEach((el, i) => {
        el.textContent = resourceArray[i];
        el.href = resourceSrcArray[i];
    });

    blocksArmyPara.forEach((el, i) => {
        el.textContent = blocksArmyParaContent[i];
    });

    blocksAidPara.forEach((el, i) => {
        el.textContent = blocksAidParaContent[i];
    });

    localStorage.setItem('lang', 'ukr');
}

function toEng () {
    // Навігація
    homePage.textContent = 'Home';
    finSupport.textContent = 'Fanancial support';
    boostMorale.textContent = 'Boost morale';
    truthPage.textContent = 'Truth';
    homeHeader.textContent = 'Russian warship, fuck you!';
    homePara1.textContent = 'This single-page web project was designed in order to help ukrainian goverment to resist and fight russian and belorussian aggression against sovereign Ukraine.';
    homePara2.textContent = 'All the provided links and resources will help you support us financially, as well as obtain the truth about what is really going on in Ukraine.';
    homeParaSlava.textContent = 'SLAVA UKRAINI!';
    finSupportHeader.textContent = 'Support us';
    blocksArmyHeader.textContent = 'Army';
    blocksAdisHeader.textContent = 'Aids';
    moraleHeader.textContent = 'Play for Ukraine';
    moraleLink.textContent = 'Play and attack Russia';
    moraleInfo.textContent =`When playing your every move helps to attack the websites used to serve the Russian army. Before starting the game, turn on the VPN if you play from the territory of Ukraine. There are instructions on how to do it. Share with friends, let them play and do good too. Even if you just leave this page open on your computer, the attack continues.
    `;
    truthHeader.textContent = 'Follow the truth and find out more';
    selfHeader.textContent = 'Ukrainian me';
    selfPara.textContent = `There are a lot of things in Ukraine that I'm proud of. But there is one thing that stands out vividly - it's freedom.
      Soviets tried to suffocate us, but all in vain.
      Yanukovich tried to smother us, but all in vain.
      Putin has been trying to demolish us since 2014, 
      and yet we're still alive and well. We're fighting,
      And we'll never give up. Because we're standing for truth.
      For freedom.`;

    finSupportRefs.forEach((el, i) => {
        el.textContent = supportArrayEng[i];
        el.href = supportSrcArrayEng[i];
    });

    resourceLink.forEach((el, i) => {
        el.textContent = resourceArrayEng[i];
        el.href = resourceSrcArrayEng[i];
    });

    blocksArmyPara.forEach((el, i) => {
        el.textContent = blocksArmyParaContentEng[i];
    });

    blocksAidPara.forEach((el, i) => {
        el.textContent = blocksAidParaContentEng[i];
    });

    localStorage.setItem('lang', 'eng');
}

localStorage.getItem('lang') === 'ukr' ? toUkr() : toEng();

// Event listeners
menuBars.addEventListener('click', toggleNav);
navList.forEach(navEl => navEl.addEventListener('click', toggleNav));
btnUkr.addEventListener('click', toUkr);
btnEng.addEventListener('click', toEng);
