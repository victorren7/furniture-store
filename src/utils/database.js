import taborSofa from '../assets/products/tabor-green-sofa.jpeg'
import ojaiChair from '../assets/products/ojai-upholstered-chair.jpg'
import teaKettle from '../assets/products/grey-tea-kettle.jpeg'
import roundFarmTable from '../assets/products/modern-farmhouse-round-dining-table.jpg'
import coffeeTable from '../assets/products/rectangular-coffee-table.jpeg'
import nightStand from '../assets/products/night-stand.jpeg'
import havenSofa from '../assets/products/haven-loft-sofa.jpeg'
import sideboard from '../assets/products/Sawyer-Sideboard.jpg'
import armchair from '../assets/products/Mico-Armchair-Lifestyle.jpeg'

export const database = [
  {  
    id: 1,
    name: "Tabor Green Sectional Sofa",
    type: "sofa",
    image: taborSofa,
    price: 3999,
    amount: 1,
    description: "Timson relaxes the traditional roll-arm sofa for a sectional collection that's casual and cool. Scaled low for curl-up comfort with a modern look, the left-arm chaise and right-arm sofa feature subtle rolled arms and a low back that puts the emphasis on broad back cushions and T-shaped box seat cushions. ",
    link: "https://www.crateandbarrel.com/timson-green-velvet-2-piece-left-arm-chaise-sectional-sofa/s123601"
  },
  {  
    id: 2,
    name: "Ojai Upholstered Accent Chair",
    type: "chair",
    image: ojaiChair,
    amount: 1,
    description: "A modern classic, the chair attends to detail in mortise-and-tenon joinery and softly turned edges.",
    price: 799,
    link: "https://www.crateandbarrel.com/ojai-upholstered-wood-frame-accent-chair/s411188"
  },
  {  
    id: 3,
    name: "Tea Kettle with Maple Handle",
    type: "tea kettle",
    image: teaKettle,
    amount: 1,
    description: "Clad in matte grey, this electric kettle graces countertops with polished style. Minimalist controls and a discreet black LCD screen create a sleek look, while the maple knob and angled handle add natural warmth.",
    price: 295,
    link: "https://www.crateandbarrel.com/fellow-stagg-ekg-matte-grey-electric-pour-over-tea-kettle-with-maple-handle/s614048"
  },
  {  
    id: 4,
    name: "Modern Farmhouse Round Dining Table",
    type: "table",
    image: roundFarmTable,
    amount: 1,
    description: "Create the ultimate gathering space with our extendable table. Expertly crafted from a combination of woods, its substantial without taking up too much space.",
    price: 2599,
    link: 'https://www.potterybarn.com/products/modern-farmhouse-round-pedestal-extending-dining-table/?pkey=s~dining%20table~309'
  },
  {  
    id: 5,
    name: "Woodstock Rectangular Coffee Table",
    type: "table",
    image: coffeeTable,
    amount: 1,
    description: "Equal parts rustic and modern, Woodstock expertly combines a mix of natural materials to fit in a range of settings. Unique grain patterns give each piece one-of-a-kind quality, adding a natural look to these clean-lined silhouettes. ",
    price: 1999,
    link: "https://www.potterybarn.com/products/westbrook-rectangular-coffee-table/?pkey=s~coffee%20table~297"
  },
  {  
    id: 6,
    name: "Otter Charging Nightstand",
    type: "nightstand",
    image: nightStand,
    amount: 1,
    description: "A salute to minimalist design, and coastal vibe. Crafted of solid wood, the dimensional finish adds character and warmth to each piece.",
    price: 589,
    link: "https://www.potterybarn.com/products/cayman-mini-nightstand/?pkey=s~cayman%20nightstand~3"
  },
  {  
    id: 7,
    name: "Mico Rattan Armchair",
    type: "chair",
    image: armchair,
    amount: 1,
    description: "Weaved in rattan, Mico's relaxed, unique form offers a blend of Danish modern style and breezy tropical vibes. Can go perfect for a final piece in the living room, or even better as an outside.",
    price: 695,
    link: "https://www.castlery.com/us/products/mico-rattan-armchair"
  },
  {  
    id: 8,
    name: "The Sideboard",
    type: "sideboard",
    image: sideboard,
    amount: 1,
    description: "The Sideboard delivers visually contrasting tones framed with sleek lines. Doors open to reveal ample storage with adjustable shelves.​",
    price: 2499,
    link: "https://www.castlery.com/us/products/sawyer-sideboard"
  },
  {  
    id: 9,
    name: "Haven Loft Sofa",
    type: "sofa",
    image: havenSofa,
    amount: 1,
    description: "All wood is kiln-dried to prevent warping, High-gauge sinuous springs provide cushion support, and Seat cushions have down alternative-wrapped high-resiliency polyurethane foam cores.",
    price: 1499,
    link: 'https://www.westelm.com/products/haven-loft-sofa-86-h4998/?pkey=csofas'
  },
]