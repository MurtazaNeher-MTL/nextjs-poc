// Dummy data


interface Variant {
  name: string;
  certified_range_km: number;
  top_speed_kmh: number;
  acceleration_0_40_kmh_sec: number;
  delivery_date: string;
  warranty: string;
  color_options: string[];
  scooter_color_img: {
    [color: string]: string[]; // Dynamic keys for color options with arrays of strings (URLs)
  };
  price: string;
}

interface Model {
  id:number,
  title: string;
  title_img: string;
  name: string;
  variants: Variant[];
}

interface VehicleData {
  vehicles: {
    models: Model[];
  };
}

export const modelData: VehicleData = {
  vehicles: {
    models: [
      {
        id:0,
        title: "S1 Pro",
        title_img: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0233698207702652e301588a56560cc8529960e374f17dccd954a015ec0bea9?apiKey=971b6410d97242e7b97afd5891e4e40f&",
        name: "S1 Pro 2nd Generation",
        variants: [
          {
            name: "Standard",
            certified_range_km: 195,
            top_speed_kmh: 120,
            acceleration_0_40_kmh_sec: 2.6,
            delivery_date: "2024-07-10",
            warranty: "8 Year",
            color_options: ["Green", "Red", "Teal", "Lime"],
            scooter_color_img: {
              "green": [
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00001.jpg",
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00002.jpg",
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00004.jpg"
              ],
              "red": [
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+1",
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+2",
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+3"
              ],
              "teal": [
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+1",
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+2",
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+3"
              ],
              "lime": [
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+1",
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+2",
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+3"
              ],
              "pink": [
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+1",
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+2",
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+3"
              ],
              "gold": [
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+1",
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+2",
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+3"
              ],
              "silver": [
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+1",
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+2",
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+3"
              ],
              "gray": [
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+1",
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+2",
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+3"
              ]
            },
            price: "1,31,499"
          },
        ]
      },
      {
        id:1,
        title: "S1 Air",
        title_img: "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/rightSide/ola-s1-air-icon.svg",
        name: "S1 Air",
        variants: [
          {
            name: "Basic",
            certified_range_km: 150,
            top_speed_kmh: 100,
            acceleration_0_40_kmh_sec: 3.0,
            delivery_date: "2024-07-20",
            warranty: "6 Year",
            color_options: ["Silver", "Gray"],
            scooter_color_img: {
              "white": [
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00001.jpg",
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00002.jpg",
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00004.jpg"
              ],
              "red": [
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+1",
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+2",
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+3"
              ],
              "blue": [
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+1",
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+2",
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+3"
              ],
              "yellow": [
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+1",
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+2",
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+3"
              ],
              "pink": [
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+1",
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+2",
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+3"
              ],
              "gold": [
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+1",
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+2",
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+3"
              ],
              "silver": [
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+1",
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+2",
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+3"
              ],
              "gray": [
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+1",
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+2",
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+3"
              ]
            },
            price: "1,05,499"
          },
        ]
      },
      {
        id:2,
        title: "S1 Lite",
        title_img: "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/rightSide/s1X_img.svg",
        name: "S1 Lite",
        variants: [
          {
            name: "Eco",
            certified_range_km: 120,
            top_speed_kmh: 85,
            acceleration_0_40_kmh_sec: 3.5,
            delivery_date: "2024-07-30",
            warranty: "5 Year",
            color_options: ["Green", "Yellow"],
            scooter_color_img: {
              "white": [
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00001.jpg",
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00002.jpg",
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00004.jpg"
              ],
              "red": [
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+1",
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+2",
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+3"
              ],
              "blue": [
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+1",
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+2",
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+3"
              ],
              "yellow": [
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+1",
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+2",
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+3"
              ],
              "pink": [
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+1",
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+2",
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+3"
              ],
              "gold": [
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+1",
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+2",
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+3"
              ],
              "silver": [
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+1",
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+2",
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+3"
              ],
              "gray": [
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+1",
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+2",
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+3"
              ]
            },
            price: "1,31,499"
          },
        ]
      }
    ],
    
  }
};

type AddOnItemProps = {
  icon: string;
  title: string;
  description: string;
  price: string;
};

interface CoverItemProps {
  title: string;
  price: string;
  description: string;
  knowMoreText: string;
  imageSrc: string;
  recommended?: boolean;
}

export const coverItems: CoverItemProps[] = [
  {
    title: "Protect your Charger & Screen",
    price: "₹799/year",
    description:
      "Secure your scooters display and charger from accidental damage and theft ..",
    knowMoreText: "know more",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/15f0a4a3ad38bc410807139c471872329909d34c6398cb595f102c5224ffad2b?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    recommended: true,
  },
  {
    title: "Protection from Rodents",
    price: "₹699/year",
    description:
      "Ride worry-free with rodent and animal attack coverage. Uncheck to opt-out ..",
    knowMoreText: "know more",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3984edeb58cf9feba3e86a6fa4c38857dcaa1174e12bbe31b4251b27366edb0e?apiKey=971b6410d97242e7b97afd5891e4e40f&",
  },
];

export const avatars = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/af232b9c11c5cc13e755a1df36fb0f836ccdc4314eda3a0fb9116a76e3b5d45c?apiKey=971b6410d97242e7b97afd5891e4e40f&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/c48ac4a734b5eb7a4d93d9b2c00098817745cb6e81091b27128bfef53a4244eb?apiKey=971b6410d97242e7b97afd5891e4e40f&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/915b7b92417209dc24714e4f0e0a8b4a512043caa6512768bf5f35dbb7a55f7a?apiKey=971b6410d97242e7b97afd5891e4e40f&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/13abbb49bccab024979470231a11ea4887292960a9da5e6ca8e35314add4b94a?apiKey=971b6410d97242e7b97afd5891e4e40f&",
];

export const avatarsDetails= [
  {
    name: "ICICI Lombard",
    price: "5999",
    src:   "https://cdn.builder.io/api/v1/image/assets/TEMP/af232b9c11c5cc13e755a1df36fb0f836ccdc4314eda3a0fb9116a76e3b5d45c?apiKey=971b6410d97242e7b97afd5891e4e40f&",
  },
  {
    name: "TATA",
    price: "5683",
    src:   "https://cdn.builder.io/api/v1/image/assets/TEMP/c48ac4a734b5eb7a4d93d9b2c00098817745cb6e81091b27128bfef53a4244eb?apiKey=971b6410d97242e7b97afd5891e4e40f&",
  },
  {
    name: "Reliance",
    price: "8765",
    src:     "https://cdn.builder.io/api/v1/image/assets/TEMP/915b7b92417209dc24714e4f0e0a8b4a512043caa6512768bf5f35dbb7a55f7a?apiKey=971b6410d97242e7b97afd5891e4e40f&",
  },
  {
    name: "DIGIT",
    price: "4567",
    src:   "https://cdn.builder.io/api/v1/image/assets/TEMP/13abbb49bccab024979470231a11ea4887292960a9da5e6ca8e35314add4b94a?apiKey=971b6410d97242e7b97afd5891e4e40f&",
  }
]

export const addOns: AddOnItemProps[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb58dab99c81e3f92fd92ab0ff40315ac0853f11d05fd9279fb62a03d6489e42?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    title: "Personal Accident Cover",
    description: "(Mandatory if you don't have one)",
    price: "₹443",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/67effc394c0ac2b375e5c4e80b19e6d1497bceab1cdb2e97fa8548a14eedba14?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    title: "Zero Depreciation",
    description: "(Claim full cost of repaired parts)",
    price: "₹1255",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e370ccdf5446bb2bbdb07b8b076c39e6b1ab5bc332c35caca9d7acad0cc7bc8?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    title: "Road Side Assistance",
    description: "(On road towing and repair services)",
    price: "₹47",
  },
];




// actions: [
//   {
//     name: "CHOOSE MODEL AND VARIANT"
//   },
//   {
//     name: "DELIVERING TO",
//     action: "Select location"
//   },
//   {
//     name: "COMPARE MODELS",
//     action: "View full spec sheet"
//   },
//   {
//     name: "Explore finance",
//     action: "Explore finance as low as 6.99%* with 0% processing fee!"
//   },
//   {
//     name: "Explore accessories",
//     action: "Explore accessories"
//   }
// ],
// accessories: [
//   {
//     name: "Scooter Cover",
//     price: 999,
//     shipping_date: "2024-07-19",
//     description: "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
//   },
//   {
//     name: "Scooter Cover",
//     price: 999,
//     shipping_date: "2024-07-19",
//     description: "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
//   }
// ]
