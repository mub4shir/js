const states = [
  {
    name: 'Madhya Pradesh',
    cities: [
      {
        name: 'Indore',
        towns: [
          {
            name: 'Mhow',
          },
          {
            name: 'Dewas',
          },
        ],
      },
      {
        name: 'Bhopal',
        towns: [
          {
            name: 'Manit',
          },
          {
            name: 'Berasia',
          },
        ],
      },
      {
        name: 'Gwalior',
        towns: [
          {
            name: 'Ajaypur',
          },
        ],
      },
    ],
  },
  {
    name: 'Jharkhand',
    cities: [
      {
        name: 'Dhanbad',
        towns: [
          {
            name: 'IIT(ISM) Dhanbad',
          },
          {
            name: 'Hirapur',
          },
        ],
      },
      {
        name: 'Wasseypur',
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: 'Mirzapur',
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: 'Assam',
    cities: [
      {
        name: 'Guwhati',
        towns: [
          {
            name: 'Amin',
          },
          {
            name: 'Jalah',
          },
        ],
      },
      {
        name: 'Jungle1',
        towns: [
          {
            name: 'Tiger found at IIT Guwahati',
          },
          {
            name: 'Leopard found in IIT Guwahati',
          },
        ],
      },
      {
        name: 'Tezpur',
        towns: [
          {
            name: 'Dibrugarh',
          },
          {
            name: 'Silchar',
          },
        ],
      },
    ],
  },
  {
    name: 'Bihar',
    cities: [
      {
        name: 'Patna',
        towns: [
          {
            name: 'Sonpur',
          },
          {
            name: 'Maner',
          },
        ],
      },
      {
        name: 'Gaya',
        towns: [
          {
            name: 'Bakraur',
          },
          {
            name: 'Barachatti',
          },
        ],
      },
      {
        name: 'Darbhanga',
        towns: [
          {
            name: 'Singhwara',
          },
          {
            name: 'Jale',
          },
        ],
      },
    ],
  },
];

const name = states.map((state) => state.name);
// console.log(name);
const cities = states.map((city) => city.cities);

// const cname = cities.map((c) => c.c).map(c.name);

const cname = cities.map((e, i) => e.map((n) => n.name));
const single = cname.map((e, i) => e.map((s, i) => s));
console.log(single);
console.log(cname);
