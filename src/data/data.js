// images source: Nike.com

export const Popular = [
  {
    index: 1,
    imgSrc: 'images/popular/air-max-terrascape-plus-mens-shoe.jpg',
    name: 'Nike Air Max Terrascape Plus',
    price: 165,
    desc: "Men's Shoe",
  },
  {
    index: 2,
    imgSrc: 'images/popular/air-max-dawn-little-kids-shoes.jpg',
    name: 'Nike Air Max Dawn ',
    price: 75,
    desc: 'Little Kids shoe',
  },
  {
    index: 3,
    imgSrc: 'images/popular/air-max-dawn-mens-shoes.jpg',
    name: 'Nike Air Max Dawn',
    price: 95,
    desc: "Men's Shoe",
  },
  {
    index: 4,
    imgSrc: 'images/popular/air-max-pre-day-womens-shoes.jpg',
    name: 'Nike Air Max Pre Day',
    price: 110,
    desc: "Women's Shoes",
  },
  {
    index: 5,
    imgSrc: 'images/popular/blazer-mid-77-big-kids-shoes.jpg',
    name: 'Nike Blazer Mid 77',
    price: 85,
    desc: 'Big Kids Shoes',
  },
  {
    index: 6,
    imgSrc: 'images/popular/metcon-7-womens-training-shoes.jpg',
    name: 'Nike Metcon 7',
    price: 125,
    desc: "Women's Training Shoes",
  },
];

//done
//
//
//
//
//
//
//

// air-force-1-07-womens-shoes.jpg
// air-max-90-se-womens-shoes.jpg
// air-max-97-womens-shoes.jpg
// air-vapormax-2021-fk-womens-shoes.jpg
// air-zoom-pegasus-38-womens-road-running-shoes.jpg
// blazer-mid-77-next-nature-womens-shoes.jpg
// offcourt-se-womens-slides.jpg
// react-infinity-run-flyknit-2-womens-road-running-shoes.jpg

// air-max-90-little-kids-shoes.jpg
// air-max-270-big-kids-shoes.jpg
// air-max-motif-big-kids-shoe.jpg
// air-max-sc-baby-toddler-shoes.jpg
// dunk-low-prm-little-kids-shoes.jpg
// jordan-6-retro-low-baby-toddler-shoes.jpg
// kyrie-infinity-little-kids-shoes.jpg
// little-posite-one-big-kids-shoes.jpg
export const AllShoes = [
  {
    id: 1,
    imgSrc: '/images/men/air-huarache-mens-shoes.jpg',
    name: 'Nike Air Huarache',
    releaseDate: Date.now() - 1000 * 2,
    price: 120,
    selectedSize: [],
    desc: "Men's Shoes",
    salePrice: null,
    forWho: 'Men',
    sizes: [
      6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15,
    ],
  },

  {
    id: 2,
    imgSrc: '/images/men/air-max-plus-mens-shoes.jpg',
    name: 'Nike Air Max Plus',
    releaseDate: Date.now() - 1000 * 32,
    price: 180,
    selectedSize: [],
    desc: "Men's Shoes",
    salePrice: null,
    sizes: [
      6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15,
    ],
    forWho: 'Men',
  },
  {
    id: 3,
    imgSrc: '/images/men/air-vapormax-2021-fk-mens-shoes.jpg',
    name: 'Nike Air Vapormax 2021',
    releaseDate: Date.now() - 1000 * 6,
    price: 210,

    desc: "Men's Shoes",
    salePrice: 195,
    sizes: [
      6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15,
    ],
    forWho: 'Men',
  },
  {
    id: 4,
    imgSrc:
      '/images/men/air-zoom-pegasus-38-air-jordan-moss-mens-road-running-shoes.jpg',
    name: 'Nike Air Zoom Pegasus 38',
    releaseDate: Date.now() - 1000 * 18,
    price: 120,
    selectedSize: [],
    desc: "Men's Running Shoes",
    salePrice: null,
    sizes: [
      6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15,
    ],
    forWho: 'Men',
  },
  {
    id: 5,
    imgSrc: '/images/men/lebron-19-basketball-shoes.jpg',
    name: 'Nike Lebron 19',
    releaseDate: Date.now() - 1000 * 30,
    price: 195,
    selectedSize: [],
    desc: "Men's Basketball Shoes",
    salePrice: 165,
    sizes: [
      6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15,
    ],
    forWho: 'Men',
  },
  {
    id: 6,
    imgSrc:
      '/images/men/pegasus-trail-3-gore-tex-mens-waterproof-trail-running-shoes.jpg',
    name: 'Nike Pegasus Trail 3',
    releaseDate: Date.now() - 1000 * 24,
    price: 155,
    selectedSize: [],
    desc: "Men's Running Shoes",
    salePrice: null,
    sizes: [
      6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15,
    ],
    forWho: 'Men',
  },
  {
    id: 7,
    imgSrc:
      '/images/men/react-infinity-run-flyknit-2-mens-road-running-shoes.jpg',
    name: 'Nike React Infinity Run Flyknit 2',
    releaseDate: Date.now() - 1000 * 14,
    price: 135,
    selectedSize: [],
    desc: "Men's Running Shoes",
    salePrice: null,
    sizes: [
      6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15,
    ],
    forWho: 'Men',
  },
  {
    id: 8,
    imgSrc: '/images/women/air-force-1-07-womens-shoes.jpg',
    name: 'Nike Air Force 1',
    releaseDate: Date.now() - 1000 * 16,
    price: 100,
    selectedSize: [],
    desc: "Women's Shoes",
    salePrice: null,
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    forWho: 'Women',
  },
  {
    id: 9,
    imgSrc: '/images/women/air-max-90-se-womens-shoes.jpg',
    name: 'Nike Air Max 90',
    releaseDate: Date.now() - 1000 * 8,
    price: 125,
    selectedSize: [],
    desc: "Women's Shoes",
    salePrice: null,
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],

    forWho: 'Women',
  },
  {
    id: 10,
    imgSrc: '/images/women/air-max-97-womens-shoes.jpg',
    name: 'Nike Air Max 97',
    releaseDate: Date.now() - 1000 * 20,
    price: 145,
    selectedSize: [],
    desc: "Women's Shoes",
    salePrice: null,
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],

    forWho: 'Women',
  },
  {
    id: 11,
    imgSrc: '/images/women/air-vapormax-2021-fk-womens-shoes.jpg',
    name: 'Nike Air Vapormax 2021',
    releaseDate: Date.now() - 1000 * 22,
    price: 175,
    selectedSize: [],
    desc: "Women's Shoes",
    salePrice: 165,
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],

    forWho: 'Women',
  },
  {
    id: 12,
    imgSrc: '/images/women/air-zoom-pegasus-38-womens-road-running-shoes.jpg',
    name: 'Nike Air Zoom Pegasus 38',
    releaseDate: Date.now() - 1000 * 12,
    price: 115,
    selectedSize: [],
    desc: "Women's Running Shoes",
    salePrice: null,
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],

    forWho: 'Women',
  },

  {
    id: 13,
    imgSrc: '/images/women/blazer-mid-77-next-nature-womens-shoes.jpg',
    name: 'Nike Blazer Mid 77',
    releaseDate: Date.now() - 1000 * 26,
    price: 105,
    selectedSize: [],
    desc: "Women's  Shoes",
    salePrice: null,
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],

    forWho: 'Women',
  },
  {
    id: 14,
    imgSrc: '/images/women/offcourt-se-womens-slides.jpg',
    name: 'Nike Offcourt',
    releaseDate: Date.now() - 1000 * 28,
    price: 85,
    selectedSize: [],
    desc: "Women's  Slides",
    salePrice: 75,
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],

    forWho: 'Women',
  },
  {
    id: 15,
    imgSrc:
      '/images/women/react-infinity-run-flyknit-2-womens-road-running-shoes.jpg',
    name: 'Nike React Infinity Run Flyknit 2',
    releaseDate: Date.now() - 1000 * 10,
    price: 115,
    selectedSize: [],
    desc: "Women's  Running Shoes",
    salePrice: 100,
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],

    forWho: 'Women',
  },
  {
    id: 16,
    imgSrc: '/images/kids/air-max-90-little-kids-shoes.jpg',
    name: 'Nike Air Max 90',
    releaseDate: Date.now() - 1000 * 4,
    price: 80,
    selectedSize: [],
    desc: "Little Kids's Shoes",
    salePrice: null,
    sizes: [
      '10.5C',
      '11C',
      '11.5C',
      '12C',
      '12.5C',
      '13C',
      '13.5C',
      '1Y',
      '1.5Y',
      '2Y',
      '2.5Y',
      '3Y',
    ],
    forWho: 'Kids',
  },
  {
    id: 17,
    imgSrc: '/images/kids/air-max-270-big-kids-shoes.jpg',
    name: 'Nike Air Max 270',
    releaseDate: Date.now() - 1000 * 34,
    price: 100,
    selectedSize: [],
    desc: "Big Kids' Shoes",
    salePrice: null,
    sizes: [
      '10.5C',
      '11C',
      '11.5C',
      '12C',
      '12.5C',
      '13C',
      '13.5C',
      '1Y',
      '1.5Y',
      '2Y',
      '2.5Y',
      '3Y',
    ],
    forWho: 'Kids',
  },
  {
    id: 18,
    imgSrc: '/images/kids/air-max-motif-big-kids-shoe.jpg',
    name: 'Nike Air Max Motif',
    releaseDate: Date.now() - 1000 * 36,
    price: 95,
    selectedSize: [],
    desc: "Big Kids' Shoes",
    salePrice: 85,
    sizes: [
      '10.5C',
      '11C',
      '11.5C',
      '12C',
      '12.5C',
      '13C',
      '13.5C',
      '1Y',
      '1.5Y',
      '2Y',
      '2.5Y',
      '3Y',
    ],
    forWho: 'Kids',
  },
  {
    id: 19,
    imgSrc: '/images/kids/air-max-sc-baby-toddler-shoes.jpg',
    name: 'Nike Air Max Sc',
    releaseDate: Date.now() - 1000 * 38,
    price: 45,
    selectedSize: [],
    desc: 'Baby/Toddler Shoes',
    salePrice: null,
    sizes: [
      '10.5C',
      '11C',
      '11.5C',
      '12C',
      '12.5C',
      '13C',
      '13.5C',
      '1Y',
      '1.5Y',
      '2Y',
      '2.5Y',
      '3Y',
    ],
    forWho: 'Kids',
  },
  {
    id: 20,
    imgSrc: '/images/kids/dunk-low-prm-little-kids-shoes.jpg',
    name: 'Nike Dunk Low',
    releaseDate: Date.now() - 1000 * 40,
    price: 75,
    selectedSize: [],
    desc: "Little Kids' Shoes",
    salePrice: null,
    sizes: [
      '10.5C',
      '11C',
      '11.5C',
      '12C',
      '12.5C',
      '13C',
      '13.5C',
      '1Y',
      '1.5Y',
      '2Y',
      '2.5Y',
      '3Y',
    ],
    forWho: 'Kids',
  },
  {
    id: 21,
    imgSrc: '/images/kids/jordan-6-retro-low-baby-toddler-shoes.jpg',
    name: 'Nike Jordan 6 Retro Low',
    releaseDate: Date.now() - 1000 * 42,
    price: 80,
    selectedSize: [],
    desc: 'Baby/Toddler Shoes',
    salePrice: null,
    sizes: [
      '10.5C',
      '11C',
      '11.5C',
      '12C',
      '12.5C',
      '13C',
      '13.5C',
      '1Y',
      '1.5Y',
      '2Y',
      '2.5Y',
      '3Y',
    ],
    forWho: 'Kids',
  },
  {
    id: 22,
    imgSrc: '/images/kids/kyrie-infinity-little-kids-shoes.jpg',
    name: 'Nike Kyrie Infinity',
    releaseDate: Date.now() - 1000 * 44,
    price: 65,
    selectedSize: [],
    desc: "Little Kids' Shoes",
    salePrice: 55,
    sizes: [
      '10.5C',
      '11C',
      '11.5C',
      '12C',
      '12.5C',
      '13C',
      '13.5C',
      '1Y',
      '1.5Y',
      '2Y',
      '2.5Y',
      '3Y',
    ],
    forWho: 'Kids',
  },
  {
    id: 23,
    imgSrc: '/images/kids/little-posite-one-big-kids-shoes.jpg',
    name: 'Nike Little Posite One',
    releaseDate: Date.now() - 1000 * 46,
    price: 75,
    selectedSize: [],
    desc: "Big Kids' Shoes",
    salePrice: 65,
    sizes: [
      '10.5C',
      '11C',
      '11.5C',
      '12C',
      '12.5C',
      '13C',
      '13.5C',
      '1Y',
      '1.5Y',
      '2Y',
      '2.5Y',
      '3Y',
    ],
    forWho: 'Kids',
  },
];
