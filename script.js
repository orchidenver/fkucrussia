'use strict';
// VARIABLES
const menuBars = document.querySelector('#menu-bars');
const overlay = document.querySelector('#overlay');
const navList = document.querySelectorAll('nav > ul > li');
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
      btnEng = document.querySelector('.btns__language-eng'),
      moraleJoinHeader = document.querySelector('.morale__joinheader'),
      moraleJoinPara = document.querySelector('.morale__joinpara'),
      moraleBlockLink = document.querySelector('.block__link'),
      moraleBlockInfo = document.querySelector('.block__info'),
      moraleBlock = document.querySelector('#boost-morale');

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

const supportArrayPol = [
    `SaveLife w UA (Wracaj żywy)`,
    `Pomoc wojsku`,
    `Narodowy Bank Ukrainy`,
    `Pomoc przez Monobank`,
    `Pomóż Ukrainie z Polski`,
    `Ukraińscy skauci`,
    `Pomoc ze Wschodu`,
    `Agenci krwi Patreon`
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
    `https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi`,
    `https://uahelp.monobank.ua/`,
    `http://helpukraine.center/en`,
    `https://en.plast.org.ua/`,
    `https://vostok-sos.org/en/make-a-donation/?fbclid=IwAR2DNDQiu3CCmK2OwF3Fb4pheq7qtDzzuj_Cnu1RogkxIt5JPaoiKFbmSPA`,
    `https://www.patreon.com/BloodAgents`,
];

const supportSrcArrayPol = [
    `https://savelife.in.ua/en/donate/`,
    `https://armysos.com.ua/en/help-the-army`,
    `https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi`,
    `https://uahelp.monobank.ua/`,
    `http://helpukraine.center/pl`,
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
    `Telegram Ukraine now (ENG)`,
    `Telegram NEXTA`,
    `Twitter Dmytro Kuleba`,
    `Facebook MFA of Ukraine`,
];

const resourceArrayPol = [
    `Gazeta Pomorska`,
    `Super Express`,
    `Polskie Radio`,
    `Wyborcza.pl`,
    `Telegram Ukraine now (PL)`,
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
    `https://t.me/ukrainenowenglish`,
    `https://t.me/nexta_live`,
    `https://twitter.com/DmytroKuleba`,
    `https://www.facebook.com/UkraineMFA`,
];

const resourceSrcArrayPol = [
    `https://pomorska.pl/`,
    `https://www.se.pl/wojna-na-ukrainie/`,
    `https://www.polskieradio.pl/395`,
    `https://wyborcza.pl/0,0.html?disableRedirects=true`,
    `https://t.me/UkraineNowPoland`,
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

const blocksArmyParaContentPol = [
    `Fundusz charytatywny na wsparcie wojska ukraińskiego`,
    `Darowizna dla Ukraińskiego Wojska`,
    `Przelew na konto NBU`,
    `Przelew przez Monobank`,
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

const blocksAidParaContentPol = [
    `Pomoc humanitarna i medyczna z Polski`,
    `Darowizna na służby medyczne i broń defensywną`,
    `Organizacje charytatywne udzielające pomocy od 2014 roku`,
    `Społeczność dawców krwi w Ukrainie`,
];

const cardContentPlayEng = [
    `https://playforukraine.live/`,
    `Play for Ukraine`,
    `When playing your every move helps to attack the websites used to serve the Russian army. Before starting the game, turn on the VPN if you play from the territory of Ukraine. There are instructions on how to do it. Share with friends, let them play and do good too. Even if you just leave this page open on your computer, the attack continues.`,
];

const cardContentLegionEng = [
    `https://fightforua.org/`,
    `Join our army`,
    `FightforUA.org website, where soldiers from abroad can join Ukraine in fighting Russian invasion, is now online. It contains all the necessary information for thise who want to join Ukrainian International legion.`,
];

const cardContentCyberEng = [
    `https://help-ukraine-win.com/`,
    `Join cyber-army`,
    `All Ukrainian people fight against Russian aggression to defend their motherland. You probably heard about it, and you can help us from your home right now.`,
];

const cardContentPlayUkr = [
    `https://playforukraine.live/`,
    `ГРАЙ ЗА УКРАЇНУ`,
    `Кожен твій хід допомагає атакувати сайти, які використовуються для обслуговування російської армії. Перед початком гри включи VPN, якщо граєш з території України. Ось інструкція як це зробити. Поділись з друзями, нехай теж грають з користю. Навіть якщо ти просто залишиш відкритою цю сторінку на своєму комп'ютері, то атака продовжується.`,
];

const cardContentLegionUkr = [
    `https://fightforua.org/`,
    `Приєднуйся до армії`,
    `FightforUA.org website, where soldiers from abroad can join Ukraine in fighting Russian invasion, is now online. It contains all the necessary information for those who want to join Ukrainian International legion.`,
];

const cardContentCyberUkr = [
    `https://help-ukraine-win.com/`,
    `Наш кібер-легіон`,
    `Система волонтерської кібероборони України створили програму для допомоги в боротьбі у інформаційній війні.`,
];

const cardContentPlayPol = [
    `https://playforukraine.live/`,
    `GRAJ W DRUŻYNIE UKRAIŃSKIEJ!`,
    `Każdy Twój ruch pomaga atakować strony internetowe, służące armii rosyjskiej.
    // Przed rozpoczęciem gry włącz VPN, jeśli grasz z terytorium Ukrainy. Przekaż znajomym, by też zagrali. Wystarczy że nie zamkniesz strony, a atak będzie w dalszym ciągu kontynuowany.`,
];

const cardContentLegionPol = [
    `https://fightforua.org/`,
    `Dołącz do naszej armii`,
    `FightforUA.org strona internetowa, na której żołnierze z zagranicy mogą dołączyć do Ukrainy w walce z rosyjską inwazją, jest już online. Zawiera wszystkie niezbędne informacje dla tych, którzy chcą wstąpić do ukraińskiego międzynarodowego legionu.`,
];

const cardContentCyberPol = [
    `https://help-ukraine-win.com/`,
    `Dołącz do cyber-armii`,
    `Wszyscy Ukraińcy walczą z rosyjską agresją w obronie swojej ojczyzny. Zapewne słyszałeś o tym i możesz nam pomóc już teraz z domu.`,
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

class FightWithUsCards {
    constructor(hrefContent, headerContent, paraContent, parentEl) {
        this.href = hrefContent;
        this.header = headerContent;
        this.paragraph = paraContent;
        this.parent = document.querySelector(parentEl);
    }

    renderCard() {
        this.parent.insertAdjacentHTML('beforeend', `
        <div class="morale__block block">
            <div class="block__header">
                <h3><a class="block__link" href="${this.href}" >
                    ${this.header}
                </a></h3>
            </div>
            <div class="block__info">
                <p>
                    ${this.paragraph}
                </p>
            </div>
        </div>
        `);
    }
}

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
    moraleHeader.textContent = 'Борися за нас';
    // moraleLink.textContent = 'Грай та атакуй Росію';
    // moraleInfo.textContent =`Кожен твій хід допомагає атакувати сайти, які використовуються для обслуговування російської армії. Перед початком гри включи VPN, якщо граєш з території України. Ось інструкція як це зробити. Поділись з друзями, нехай теж грають з користю. Навіть якщо ти просто залишиш відкритою цю сторінку на своєму комп'ютері, то атака продовжується.`;
    truthHeader.textContent = 'Слідкуйте за правдою';
    selfHeader.textContent = 'Я - українець';
    selfPara.textContent = `В Україні є багато речей, якими я пишаюся. Але є одна річ, яка яскраво виділяється – це свобода.
    Радяни намагалися нас задушити, але все марно.
    Янукович намагався нас задушити, але все марно.
    Путін намагається знищити нас з 2014 року,
    а ми все ще живі й здорові. Ми боремося,
    І ми ніколи не здамося. Тому що ми стоїмо за правду.
    За свободу.`;

    // moraleJoinHeader.style.display = 'none';
    // moraleJoinPara.style.display = 'none';

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

    moraleBlock.innerHTML = `<h2 class="morale__header">${moraleHeader.textContent}</h2>`;

    new FightWithUsCards(
        cardContentPlayUkr[0], 
        cardContentPlayUkr[1],
        cardContentPlayUkr[2],
        '#boost-morale',
    ).renderCard();
    
    new FightWithUsCards(
        cardContentCyberUkr[0], 
        cardContentCyberUkr[1],
        cardContentCyberUkr[2],
        '#boost-morale',
    ).renderCard();

    localStorage.setItem('lang', 'ukr');
}

function toEng () {
    // Навігація
    homePage.textContent = 'Home';
    finSupport.textContent = 'Fanancial support';
    boostMorale.textContent = 'Boost morale';
    truthPage.textContent = 'Truth';
    homeHeader.textContent = 'Russian warship, go fuck yourself!';
    homePara1.textContent = 'This single-page web project was designed in order to help ukrainian goverment to resist and fight russian and belorussian aggression against sovereign Ukraine.';
    homePara2.textContent = 'All the provided links and resources will help you support us financially, as well as obtain the truth about what is really going on in Ukraine.';
    homeParaSlava.textContent = 'SLAVA UKRAINI!';
    finSupportHeader.textContent = 'Support us';
    blocksArmyHeader.textContent = 'Army';
    blocksAdisHeader.textContent = 'Aids';
    moraleHeader.textContent = 'Fight for us';
    // moraleLink.textContent = 'Play and attack Russia';
    // moraleInfo.textContent =`When playing your every move helps to attack the websites used to serve the Russian army. Before starting the game, turn on the VPN if you play from the territory of Ukraine. There are instructions on how to do it. Share with friends, let them play and do good too. Even if you just leave this page open on your computer, the attack continues.
    // `;
    truthHeader.textContent = 'Follow the truth and find out more';
    selfHeader.textContent = 'Ukrainian me';
    selfPara.textContent = `There are a lot of things in Ukraine that I'm proud of. But there is one thing that stands out vividly - it's freedom.
      Soviets tried to suffocate us, but all in vain.
      Yanukovich tried to smother us, but all in vain.
      Putin has been trying to demolish us since 2014, 
      and yet we're still alive and well. We're fighting,
      And we'll never give up. Because we're standing for truth.
      For freedom.`;

    //   moraleJoinHeader.textContent = 'Join our army (for soldiers from abroad)';
    //   moraleJoinPara.innerHTML = '<a class="morale__joinlink"href="https://fightforua.org/" target="_blank">FightforUA.org</a> website, where soldiers from abroad can join Ukraine in fighting Russian invasion, is now online. It contains all the necessary information for thise who want to join Ukrainian International legion.';

    // moraleJoinHeader.style.display = 'inline-block';
    // moraleJoinPara.style.display = 'inline-block';

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

    moraleBlock.innerHTML = `<h2 class="morale__header">${moraleHeader.textContent}</h2>`;

    new FightWithUsCards(
        cardContentPlayEng[0], 
        cardContentPlayEng[1],
        cardContentPlayEng[2],
        '#boost-morale',
    ).renderCard();
    
    new FightWithUsCards(
        cardContentLegionEng[0], 
        cardContentLegionEng[1],
        cardContentLegionEng[2],
        '#boost-morale',
    ).renderCard();
    
    new FightWithUsCards(
        cardContentCyberEng[0], 
        cardContentCyberEng[1],
        cardContentCyberEng[2],
        '#boost-morale',
    ).renderCard();

    localStorage.setItem('lang', 'eng');
}

function toPol () {
    // Навігація
    homePage.textContent = 'Strona główna';
    finSupport.textContent = 'Wsparcie finansowe';
    boostMorale.textContent = 'Zwiększ morale';
    truthPage.textContent = 'Poznaj prawdę';
    homeHeader.textContent = 'Rosyjski statku, wypierdalaj!';
    homePara1.textContent = 'Ta jednostronicowa witryna internetowa została stworzona po to, by pomóc ukraińskiemu rządowi w konfrontacji i zwalczaniu rosyjskiej i białoruskiej agresji w stosunku do suwerennej Ukrainy.';
    homePara2.textContent = 'Wszystkie linki oraz informacje na tej stronie pomogą Państwu wesprzeć nas finansowo, a także dowiedzieć się, co naprawdę dzieje się na Ukrainie.';
    homeParaSlava.textContent = 'Chwała Ukrainie!';
    finSupportHeader.textContent = 'WESPRZYJ NAS';
    blocksArmyHeader.textContent = 'WOJSKO';
    blocksAdisHeader.textContent = 'LEKI';
    moraleHeader.textContent = 'WALCZ Z NAMI';
    // moraleLink.textContent = 'GRAJ I ATAKUJ ROSJĘ';
    // moraleInfo.textContent =`Każdy Twój ruch pomaga atakować strony internetowe, służące armii rosyjskiej.
    // Przed rozpoczęciem gry włącz VPN, jeśli grasz z terytorium Ukrainy. Przekaż znajomym, by też zagrali. Wystarczy że nie zamkniesz strony, a atak będzie w dalszym ciągu kontynuowany.`;
    truthHeader.textContent = 'PODĄŻAJ ZA PRAWDĄ';
    selfHeader.textContent = 'JESTEM UKRAIŃCEM!';
    selfPara.textContent = `Jestem dumny z wielu rzeczy, które są na Ukrainie. Ale jest jedna bardzo ważna cecha, która nas wyróżnia - wolność. Sowieci próbowali nas zdusić, ale bezskutecznie. Janukowicz próbował nas zdusić, ale bezskutecznie. Putin próbuje nas zniszczyć od 2014 roku, a my wciąż żyjemy. Walczymy i nigdy się nie poddamy, ponieważ walczymy o naszą wolność!`;
    // moraleJoinHeader.textContent = 'DOŁĄCZ DO NASZEJ ARMII (DLA ŻOŁNIERZY Z ZAGRANICY)';
    // moraleJoinPara.textContent = 'Strona FightforUA.org, na której żołnierze z zagranicy mogą dołączyć do Ukrainy w walce z rosyjską inwazją, jest już online. Zawiera wszystkie niezbędne informacje dla tych, którzy chcą wstąpić do ukraińskiego międzynarodowego legionu.';
    // moraleJoinPara.innerHTML = 'Strona <a class="morale__joinlink"href="https://fightforua.org/" target="_blank">FightforUA.org</a>, na której żołnierze z zagranicy mogą dołączyć do Ukrainy w walce z rosyjską inwazją, jest już online. Zawiera wszystkie niezbędne informacje dla tych, którzy chcą wstąpić do ukraińskiego międzynarodowego legionu.';

    // moraleJoinHeader.style.display = 'inline-block';
    // moraleJoinPara.style.display = 'inline-block';
    
    finSupportRefs.forEach((el, i) => {
        el.textContent = supportArrayPol[i];
        el.href = supportSrcArrayPol[i];
    });

    resourceLink.forEach((el, i) => {
        el.textContent = resourceArrayPol[i];
        el.href = resourceSrcArrayPol[i];
    });

    blocksArmyPara.forEach((el, i) => {
        el.textContent = blocksArmyParaContentPol[i];
    });

    blocksAidPara.forEach((el, i) => {
        el.textContent = blocksAidParaContentPol[i];
    });

    moraleBlock.innerHTML = `<h2 class="morale__header">${moraleHeader.textContent}</h2>
    <div class="morale__body"></div>
    <div class="morale__controls">
      <button aria-label="previous slide" class="slider__prev"> < </button>
      <button aria-label="next slide" class="slider__next"> > </button>
    </div>
    `;

    new FightWithUsCards(
        cardContentPlayPol[0], 
        cardContentPlayPol[1],
        cardContentPlayPol[2],
        '.morale__body',
    ).renderCard();
    
    new FightWithUsCards(
        cardContentLegionPol[0], 
        cardContentLegionPol[1],
        cardContentLegionPol[2],
        '.morale__body',
    ).renderCard();
    
    new FightWithUsCards(
        cardContentCyberPol[0], 
        cardContentCyberPol[1],
        cardContentCyberPol[2],
        '.morale__body',
    ).renderCard();

    localStorage.setItem('lang', 'pol');
}

if (localStorage.getItem('lang') === 'ukr') toUkr();

if (localStorage.getItem('lang') === 'eng') toEng();

if (localStorage.getItem('lang') === 'pol') toPol();


// Event listeners
menuBars.addEventListener('click', toggleNav);
navList.forEach(navEl => navEl.addEventListener('click', toggleNav));
// btnUkr.addEventListener('click', toUkr);
// btnEng.addEventListener('click', toEng);

document.querySelector('select').addEventListener('change', (e) => {
    
    if (e.target.value === 'eng') {
        toEng();
        console.log('ddd');
    } else if (e.target.value === 'ukr') {
        toUkr();
        console.log('ddd');
    } else if (e.target.value === 'pol') {
        toPol();
        console.log('ddd');
    } else {
        return;
    }
    // if (document.querySelector('input').value === 'eng') toEng();
    // if (document.querySelector('input').value === 'ukr') toUkr();
    // if (document.querySelector('input').value === 'pol') toPol();
});
