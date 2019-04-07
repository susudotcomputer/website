import nachosPhoto from './assets/01-nachos-photo.jpg';
import nachosNeon from './assets/01-nachos-min.png';
import nachosSVG from './assets/svg/01-nachos.svg';
import brownDrinkPhoto from './assets/02-browndrink-photo.jpg';
import brownDrinkNeon from './assets/02-browndrink-min.png';
import brownDrinkSVG from './assets/svg/02-browndrink.svg';
import teaPhoto from './assets/04-tea-photo.jpg';
import teaNeon from './assets/04-tea-min.png';
import teaSVG from './assets/svg/04-tea.svg';
import nicoiseSaladPhoto from './assets/05-nicoisesalad-photo.jpg';
import nicoiseSaladNeon from './assets/05-nicoisesalad-min.png';
import nicoiseSaladSVG from './assets/svg/05-nicoisesalad.svg';
import espressoPhoto from './assets/06-espresso-photo.jpg';
import espressoNeon from './assets/06-espresso-min.png';
import espressoSVG from './assets/svg/06-espresso.svg';
import cigarettePhoto from './assets/07-cigarette-photo.jpg';
import cigaretteNeon from './assets/07-cigarette-min.png';
import cigaretteSVG from './assets/svg/07-cigarette.svg';
import bigSodaPhoto from './assets/08-bigsoda-photo.jpg';
import bigSodaNeon from './assets/08-bigsoda-min.png';
import bigSodaSVG from './assets/svg/08-bigsoda.svg';
import cottonCandyPhoto from './assets/09-cottoncandy-photo.jpg';
import cottonCandyNeon from './assets/09-cottoncandy-min.png';
import cottonCandySVG from './assets/svg/09-cottoncandy.svg';
import sorbetPhoto from './assets/10-sorbet-photo.jpg';
import sorbetNeon from './assets/10-sorbet-min.png';
import sorbetSVG from './assets/svg/10-sorbet.svg';
import martiniImage from './assets/11-martini-photo.jpg';
import martiniNeon from './assets/11-martini-min.png';
import martiniSVG from './assets/svg/11-martini.svg';
import mysterySaladPhoto from './assets/12-mysterysalad-photo.jpg';
import mysterySaladNeon from './assets/12-mysterysalad-min.png';
import mysterySaladSVG from './assets/svg/12-mysterysalad.svg';
import lollipopPhoto from './assets/13-lollipop-photo.jpg';
import lollipopNeon from './assets/13-lollipop-min.png';
import lollipopSVG from './assets/svg/13-lollipop.svg';
import gingeralePhoto from './assets/14-gingerale-photo.jpg';
import gingeraleNeon from './assets/14-gingerale-min.png';
import gingerAleSVG from './assets/svg/14-gingerale.svg';
import shrimpPhoto from './assets/15-shrimp-photo.jpg';
import shrimpNeon from './assets/15-shrimp-min.png';
import shrimpSVG from './assets/svg/15-shrimp.svg';
import redBullPhoto from './assets/16-redbull-photo.jpg';
import redBullNeon from './assets/16-redbull-min.png';
import redBullSVG from './assets/svg/16-redbull.svg';
import icecreamPhoto from './assets/17-icecream-photo.jpg';
import icecreamNeon from './assets/17-icecream-min.png';
import iceCreamSVG from './assets/svg/17-icecream.svg';
import jellybeansImage from './assets/18-jellybeans-photo.jpg';
import jellybeansNeon from './assets/18-jellybeans-min.png';
import jellyBeansSVG from './assets/svg/18-jellybeans.svg';
import burgerPhoto from './assets/19-burger-photo.jpg';
import burgerNeon from './assets/19-burger-min.png';
import burgerSVG from './assets/svg/19-burger.svg';
import styles from '../../utils/css';

const bigSoda = {
  title: 'Big Soda',
  index: '08',
  timeStamp: '0:22:59',
  kind: 'Drink',
  kindList: ['Coke'],
  vesselList: ['Custom cup'],
  clip: 'https://s3.amazonaws.com/susuassets/08-bigsoda.mp4',
  clipPosition: 'center',
  image: bigSodaPhoto,
  neonImage: bigSodaNeon,
  note:
    'Did someone say custom stickers to match the circus event they were attending?? Hey oh!',
  svg: bigSodaSVG,
  position: '54% 15%'
};

const brownDrink = {
  title: 'Brown Drink',
  index: '02/03',
  timeStamp: '0:06:20 & 0:08:01',
  kind: 'Drink',
  kindList: ['Whiskey (or Rum?)'],
  vesselList: ['Tumbler glass'],
  clip: 'https://s3.amazonaws.com/susuassets/02-browndrink.mp4',
  clipPosition: 'center',
  image: brownDrinkPhoto,
  neonImage: brownDrinkNeon,
  note: 'This is the only item that is consumed twice!',
  noteClasses: styles('col-3 col-offset-2'),
  svg: brownDrinkSVG,
  position: '50% 63%'
};

const burger = {
  title: 'Burger',
  index: '19',
  timeStamp: '1:49:20',
  kind: 'Food',
  kindList: ['Burger'],
  vesselList: ['Paper'],
  clip: 'https://s3.amazonaws.com/susuassets/19-cheeseburger.mp4',
  clipPosition: 'center',
  image: burgerPhoto,
  neonImage: burgerNeon,
  note: 'Kilian made such a great burger. Legendary.',
  svg: burgerSVG,
  position: '57% 66%'
};

const cigarette = {
  title: 'Cigarette',
  index: '07',
  timeStamp: '0:21:24',
  kind: 'Food',
  kindList: ['Cigarette'],
  vesselList: ['Hand'],
  clip: 'https://s3.amazonaws.com/susuassets/07-cigarette.mp4',
  clipPosition: 'center',
  image: cigarettePhoto,
  neonImage: cigaretteNeon,
  svg: cigaretteSVG,
  position: '50% 40%'
};

const cottonCandy = {
  title: 'Cotton Candy',
  index: '09',
  timeStamp: '0:23:10',
  kind: 'Food',
  kindList: ['Cotton candy'],
  vesselList: ['Plastic bag'],
  clip: 'https://s3.amazonaws.com/susuassets/09-cottoncandy.mp4',
  clipPosition: 'right',
  image: cottonCandyPhoto,
  neonImage: cottonCandyNeon,
  note:
    'Note to everyone, cotton candy does not keep well and will photograph terribly and is hard to replace because where do you quickly get some cotton candy?!',
  svg: cottonCandySVG,
  position: '50% 50%'
};

const espresso = {
  title: 'Espresso & Treat',
  index: '06',
  timeStamp: '0:20:19',
  kind: 'Combo',
  kindList: ['Espresso', 'Slice of Banana Bread'],
  vesselList: ['Espresso cup', 'Plate'],
  clip: 'https://s3.amazonaws.com/susuassets/06-espresso.mp4',
  clipPosition: 'center',
  image: espressoPhoto,
  neonImage: espressoNeon,
  note:
    'Totally guessed on the baked good he was eating. We decided banana bread is delicious and would work.',
  svg: espressoSVG,
  position: '82% 46%'
};

const gingerale = {
  title: 'Ginger ale',
  index: '14',
  timeStamp: '0:42:34',
  kind: 'Drink',
  kindList: ['Ginger ale'],
  vesselList: ['Wine glass', 'Black straw'],
  clip: 'https://s3.amazonaws.com/susuassets/14-gingerale.mp4',
  clipPosition: 'right',
  image: gingeralePhoto,
  neonImage: gingeraleNeon,
  svg: gingerAleSVG,
  position: '50% 50%'
};

const icecream = {
  title: 'IceCream',
  index: '17',
  timeStamp: '1:01:44',
  kind: 'Food',
  kindList: ['Vanilla gelato'],
  vesselList: ['Small plastic cup', 'Plastic spoon'],
  clip: 'https://s3.amazonaws.com/susuassets/17-icecream.mp4',
  clipPosition: 'center',
  image: icecreamPhoto,
  neonImage: icecreamNeon,
  svg: iceCreamSVG,
  position: '48% 61%'
};

const jellybeans = {
  title: 'Jelly beans',
  index: '18',
  timeStamp: '1:04:04',
  kind: 'Food',
  kindList: ['Assorted jelly beans'],
  vesselList: ['Glass bowl'],
  clip: 'https://s3.amazonaws.com/susuassets/18-jellybeans.mp4',
  clipPosition: 'center',
  image: jellybeansImage,
  neonImage: jellybeansNeon,
  svg: jellyBeansSVG,
  position: '50% 38%'
};

const lollipop = {
  title: 'Lollipop',
  index: '13',
  timeStamp: '0:35:27',
  kind: 'Food',
  kindList: ['Cherry lollipop'],
  vesselList: ['Stick'],
  clip: 'https://s3.amazonaws.com/susuassets/13-lollipop.mp4',
  clipPosition: 'center',
  image: lollipopPhoto,
  neonImage: lollipopNeon,
  svg: lollipopSVG,
  position: '51% 30%'
};

const martini = {
  title: 'Martini',
  index: '11',
  timeStamp: '0:25:57',
  kind: 'Drink',
  kindList: ['Gin martini'],
  vesselList: ['That glass'],
  clip: 'https://s3.amazonaws.com/susuassets/11-martini.mp4',
  clipPosition: 'left',
  image: martiniImage,
  neonImage: martiniNeon,
  svg: martiniSVG,
  position: '53% 25%'
};

const mysterySalad = {
  title: 'MysterySalad',
  index: '12',
  timeStamp: '0:34:53',
  kind: 'Food',
  kindList: ['Cotton candy'],
  vesselList: ['Plastic bag'],
  clip: 'https://s3.amazonaws.com/susuassets/12-mystery-salad.mp4',
  clipPosition: 'center',
  image: mysterySaladPhoto,
  neonImage: mysterySaladNeon,
  note:
    'Totally mystery salad. We went frame-by-frame to try and get a clue to what kind of salad it was. No friggin’ clue. So we picked caesar salad. Yum, so tasty! (Kilian made his own dressing too! Who does that?! So good.)',
  svg: mysterySaladSVG,
  position: '50% 50%'
};

const nachos = {
  title: 'Cheese Nachos',
  index: '01',
  timeStamp: '0:05:12',
  kind: 'Food',
  kindList: ['Shredded cheese', 'Tortilla chips'],
  vesselList: ['Red paper tray'],
  clip: 'https://s3.amazonaws.com/susuassets/01-nachos.mp4',
  clipPosition: 'left',
  image: nachosPhoto,
  neonImage: nachosNeon,
  note:
    'We couldn’t find red paper trays anywhere! Bonkers, right? So Kilian covered each one with red contact paper to match the movie. It was the first item so it was important to great right and set the tone.',
  svg: nachosSVG,
  position: '50% 62%'
};

const nicoiseSalad = {
  title: 'Niçoise Salad',
  index: '05',
  timeStamp: '0:14:39',
  kind: 'Food',
  kindList: ['Cherry tomatoes', 'Lettuce', 'Red patatoes'],
  vesselList: ['Plates'],
  clip: 'https://s3.amazonaws.com/susuassets/05-nicoisesalad.mp4',
  clipPosition: 'right',
  image: nicoiseSaladPhoto,
  neonImage: nicoiseSaladNeon,
  svg: nicoiseSaladSVG,
  position: '60% 66%'
};

const redBull = {
  title: 'RedBull',
  index: '16',
  timeStamp: '0:56:27',
  kind: 'Drink',
  kindList: ['Red bull'],
  vesselList: ['Can'],
  clip: 'https://s3.amazonaws.com/susuassets/16-redbull.mp4',
  clipPosition: 'right',
  image: redBullPhoto,
  neonImage: redBullNeon,
  note:
    'TBH, we actually missed this one for the event. Brad drinks it so sneakily in the background. An audience member pointed it out to us after. It would be more heartbreaking if it wasn’t a redbull. No one really needs a redbull— especially after all the coffee and tea before.',
  svg: redBullSVG,
  position: '45% 83%'
};

const shrimp = {
  title: 'Shrimp cocktail',
  index: '15',
  timeStamp: '0:43:42',
  kind: 'Food',
  kindList: ['Shrimp', 'Cocktail sauce'],
  vesselList: ['Coupe glass'],
  clip: 'https://s3.amazonaws.com/susuassets/15-shrimp.mp4',
  clipPosition: 'center',
  image: shrimpPhoto,
  neonImage: shrimpNeon,
  svg: shrimpSVG,
  position: '38% 28%'
};

const sorbet = {
  title: 'Sorbet',
  index: '10',
  timeStamp: '0:24:36',
  kind: 'Food',
  kindList: ['Raspberry sorbet', 'Mango sorbet'],
  vesselList: ['Plastic cup', 'Plastic spoon'],
  clip: 'https://s3.amazonaws.com/susuassets/10-sorbet.mp4',
  clipPosition: 'center',
  image: sorbetPhoto,
  neonImage: sorbetNeon,
  svg: sorbetSVG,
  position: '48% 86%'
};

const tea = {
  title: 'Tea',
  index: '04',
  timeStamp: '0:11:56',
  kind: 'Drink',
  kindList: ['English Breakfast Tea'],
  vesselList: ['Strawberry Hill, Syracuse cup'],
  clip: 'https://s3.amazonaws.com/susuassets/04-tea.mp4',
  clipPosition: 'right',
  image: teaPhoto,
  neonImage: teaNeon,
  note:
    'We googled the fuck out of the internet to find the exact right china cup. Turns out the print is “Syracuse China Strawberry Hill”... DM us for a detailed history of the Dutch colonization of the American northwest and its influence on dishware design',
  svg: teaSVG,
  position: '62% 73%'
};

export default [
  nachos,
  brownDrink,
  tea,
  nicoiseSalad,
  espresso,
  cigarette,
  bigSoda,
  cottonCandy,
  sorbet,
  martini,
  mysterySalad,
  lollipop,
  gingerale,
  shrimp,
  redBull,
  icecream,
  jellybeans,
  burger
];
