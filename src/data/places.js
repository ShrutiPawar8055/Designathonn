import varanasiImg from '../assets/places/varanasi.png';
import tajMahalImg from '../assets/places/taj-mahal.png';
import somnathImg from '../assets/places/somnath-templee.png';
import vrindavanImg from '../assets/places/vrindavan-prem-mandir.png';

export const places = [
  {
    id: 'varanasi',
    name: 'Varanasi',
    tagline: 'The City of Light',
    state: 'UTTAR PRADESH',
    bestTime: 'October to March',
    language: 'Hindi, Sanskrit',
    significance: 'Spiritual Capital of India',
    category: 'Spiritual',
    region: 'North',
    img: varanasiImg,
    shortDesc: 'The city as old as time itself, where the sacred Ganges flows through eternity.',
    story: {
      what: "Known as Kashi (City of Light), Varanasi is the spiritual heart of India. It is a city of ghats, narrow winding alleys, and ancient temples where life and death meet in a sacred dance on the banks of the Ganges.",
      when: "While historians trace its origins to the 11th Century BCE, making it one of the world's oldest living cities, in Hindu mythology, it is considered eternal—a place that exists beyond the cycles of creation and destruction.",
      why: "Varanasi's popularity stems from the belief that dying here grants 'Moksha' or liberation from the cycle of rebirth. It is the abode of Lord Shiva, home to the Kashi Vishwanath Jyotirlinga, and the site of the world-famous Ganga Aarti, which draws millions seeking spiritual transcendence.",
      mythology: "Legend says the city rests on the tip of Lord Shiva's trident. It was here that the Ganges descended from the heavens, her force broken by Shiva's matted hair, to purify the souls of ancestors.",
      history: "From the visit of Lord Buddha in 500 BCE to the resilience shown during medieval invasions, Varanasi has remained the bastion of Sanskrit learning, classical music, and Vedic philosophy for millennia.",
      legends: "The city is home to the 'Manikarnika' ghat, where the funeral pyre has reportedly never been extinguished for thousands of years, serving as a reminder of the transient nature of life."
    },
    timeline: [
      { year: '1100 BCE', event: 'First historical settlements appear on the banks of the Varuna and Assi rivers.' },
      { year: '528 BCE', event: 'Gautama Buddha gives his first sermon at nearby Sarnath.' },
      { year: '8th Century CE', event: 'Adi Shankaracharya establishes Varanasi as a primary center of Shaivite worship.' },
      { year: '1780 CE', event: 'The current Kashi Vishwanath Temple is built by Ahilyabai Holkar.' }
    ],
    audioGuide: {
      title: 'Echoes of the Ganges',
      duration: '15:20',
      type: 'Ritual & Ambient'
    }
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    tagline: 'A Tear on the Face of Eternity',
    state: 'UTTAR PRADESH',
    bestTime: 'November to February',
    language: 'Hindi, Urdu, English',
    significance: 'UNESCO World Heritage Site',
    category: 'Historic',
    region: 'North',
    img: tajMahalImg,
    shortDesc: 'A white marble masterpiece that stands as a symbol of undying love.',
    story: {
      what: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna. It is the jewel of Mughal art in India and one of the universally admired masterpieces of the world's heritage.",
      when: "Commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal, the main structure was completed in 1648, with the surrounding buildings finished by 1653.",
      why: "It is popular not just for its breathtaking symmetry and architectural perfection, but as the ultimate symbol of eternal love. The way the marble changes color from pinkish at dawn to milky white in the evening and golden under the moon makes it a cinematic experience unlike any other.",
      mythology: "While historical, many believe the site was chosen for its alignment with the heavens. Local legends often speak of a 'Black Taj' that Shah Jahan intended to build for himself across the river, though no evidence exists.",
      history: "Built by over 20,000 artisans under a board of architects led by Ustad Ahmad Lahauri, it utilized materials from all over India and Asia, carried by over 1,000 elephants.",
      legends: "The most famous legend—that Shah Jahan cut off the hands of the workers so they could never build anything as beautiful again—is widely considered a myth by historians, as the same architects worked on later projects."
    },
    timeline: [
      { year: '1631', event: 'Mumtaz Mahal passes away; Shah Jahan vows to build her a monument like no other.' },
      { year: '1632', event: 'Construction begins on the Yamuna river bank.' },
      { year: '1648', event: 'The main mausoleum is completed.' },
      { year: '1983', event: 'Designated as a UNESCO World Heritage site.' }
    ],
    audioGuide: {
      title: 'The Emperor\'s Vow',
      duration: '12:45',
      type: 'History & Poetry'
    }
  },
  {
    id: 'somnath',
    name: 'Somnath',
    tagline: 'The Eternal Shrine',
    state: 'GUJARAT',
    bestTime: 'September to March',
    language: 'Gujarati, Hindi',
    significance: 'First of the Twelve Jyotirlingas',
    category: 'Spiritual',
    region: 'West',
    img: somnathImg,
    shortDesc: 'A temple that has risen from the ashes seventeen times, symbolizing the resilience of faith.',
    story: {
      what: "Somnath is the 'Lord of the Moon'. The temple is situated on the shores of the Arabian Sea and is the most sacred of the twelve Jyotirlingas, where Shiva appeared as a pillar of light.",
      when: "The temple's origins are lost in antiquity, mentioned in the Rig Veda. The current structure, known as the 'Mahameru Prasad', was rebuilt in 1951 after centuries of repeated destruction and reconstruction.",
      why: "It is popular as a symbol of cultural resilience. Having been destroyed and rebuilt 17 times by various invaders, it stands today as a testament to the indestructible nature of Indian spirit and devotion.",
      mythology: "According to legend, the Moon God (Soma) built the first temple in gold after Lord Shiva cured him of a curse. Later, Ravana built it in silver, Krishna in wood, and Bhimdev in stone.",
      history: "The temple was a target for many invaders due to its immense wealth. Each time it was razed, it was rebuilt with greater fervor by local kings like the Solankis and later by Sardar Vallabhbhai Patel after independence.",
      legends: "The 'Baan Stambh' (Arrow Pillar) at the temple points in a straight line towards the South Pole, with no landmass in between—a marvel of ancient geographical knowledge."
    },
    timeline: [
      { year: 'Ancient', event: 'Soma, the Moon God, establishes the first shrine to Shiva.' },
      { year: '1024 CE', event: 'Mahmud of Ghazni raids and destroys the temple.' },
      { year: '1783 CE', event: 'Ahilyabai Holkar builds a smaller temple nearby as the main site was in ruins.' },
      { year: '1951', event: 'The modern temple is inaugurated by Dr. Rajendra Prasad, India\'s first President.' }
    ],
    audioGuide: {
      title: 'The Resilience of Light',
      duration: '18:10',
      type: 'Spiritual & Historical'
    }
  },
  {
    id: 'vrindavan',
    name: 'Vrindavan',
    tagline: 'The Land of Eternal Love',
    state: 'UTTAR PRADESH',
    bestTime: 'September to March',
    language: 'Braj Bhasha, Hindi',
    significance: 'Childhood Abode of Lord Krishna',
    category: 'Spiritual',
    region: 'North',
    img: vrindavanImg,
    shortDesc: 'Where every dust particle is said to echo the name of Krishna.',
    story: {
      what: "Vrindavan is a sacred forest town where Lord Krishna is believed to have spent his childhood. It is a city of over 5,000 temples, where the atmosphere is perpetually thick with the scent of incense and the sound of 'Radhe Radhe'.",
      when: "While its spiritual history is ancient, the modern town was 'rediscovered' in 1515 by Chaitanya Mahaprabhu, who identified the lost sites associated with Krishna's life through divine intuition.",
      why: "Vrindavan's popularity lies in its 'Bhakti' (devotional) atmosphere. Unlike the grand rituals of Varanasi, Vrindavan is about personal, emotional connection with the divine—expressed through Holi, Rasa Lila, and the unique 'Banke Bihari' style of worship.",
      mythology: "The 'Nidhivan' forest in Vrindavan is believed to be the site where Krishna still performs the Maha-Raas (celestial dance) with the Gopis every night. No one is allowed to stay in the forest after sunset.",
      history: "The Mughal Emperor Akbar visited Vrindavan in 1570 and was so impressed by the saints that he donated land and funds for four grand temples, including the red sandstone Govind Dev temple.",
      legends: "The Banke Bihari idol is said to have appeared in the dreams of Swami Haridas. The deity's eyes are so powerful that a curtain is drawn every few minutes to prevent devotees from being overwhelmed by his gaze."
    },
    timeline: [
      { year: 'Ancient', event: 'Krishna performs his childhood Lilas in the forests of Vrindavan.' },
      { year: '1515 CE', event: 'Chaitanya Mahaprabhu visits and identifies the sacred sites.' },
      { year: '1590 CE', event: 'The majestic Govind Dev Temple is completed with Akbar\'s support.' },
      { year: '1864 CE', event: 'The current Banke Bihari Temple is constructed.' }
    ],
    audioGuide: {
      title: 'Songs of the Forest',
      duration: '14:30',
      type: 'Devotional & Musical'
    }
  }
];
