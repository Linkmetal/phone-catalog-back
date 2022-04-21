db = db.getSiblingDB('admin');

db.createCollection('phones');

db.phones.insertMany([
  {
    _id: {
      $oid: '6246f580bfca641423e5710f',
    },
    name: 'iPhone 7',
    manufacturer: 'Apple',
    description:
      'The iPhone 7\'s exterior is similar in shape and volume to the iPhone 6 and iPhone 6S, although the camera bump is bigger on the iPhone 7. Alongside the existing silver, gold, and rose gold colors, the device is offered in new colors of matte black, glossy "jet black", and, for a limited time, red. The "jet black" color is a dark shade, high-gloss black finish. It is created through a multi-step process, beginning with an anodization phase to make the surface of the casing a porous aluminum oxide, and then using a machine to sweep the casing through a powdered compound, absorbed by aluminum oxide. The process is concluded with an "ultrafine particle bath" for additional finishing; the entire process takes less than an hour.',
    color: 'black',
    price: 769,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650528759/avwa6kyvajqjauncck4j.jpg',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: '2GB',
  },
  {
    _id: {
      $oid: '6256e29c177aec852182a894',
    },
    name: 'iPhone 13 mini 128GB',
    manufacturer: 'Apple',
    description:
      'This update to the iPhone 12 mini sports a larger battery, revamped camera with even better low-light performance, faster processor, and brighter display with a smaller notch. Other features are similar, including UWB, NFC, MagSafe fast wireless charging, 3D face-scanning security, and a waterproof glass-and-aluminum body.',
    color: 'Red',
    price: 699,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650528487/eovu7tzpxrtpbyfnh1py.jpg',
    screen: '5.4 inches',
    processor: 'Apple A15 Bionic',
    ram: '2 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '6256e2c6177aec852182a898',
    },
    name: 'iPhone 13 mini 256GB',
    manufacturer: 'Apple',
    description:
      'This update to the iPhone 12 mini sports a larger battery, revamped camera with even better low-light performance, faster processor, and brighter display with a smaller notch. Other features are similar, including UWB, NFC, MagSafe fast wireless charging, 3D face-scanning security, and a waterproof glass-and-aluminum body.',
    color: 'Red',
    price: 799,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650528501/s3kefqwci3c7xl01pilq.jpg',
    screen: '5.4 in',
    processor: 'Apple A15 Bionic',
    ram: '4 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '6256e2e4177aec852182a89b',
    },
    name: 'iPhone 13 mini 512GB',
    manufacturer: 'Apple',
    description:
      'This update to the iPhone 12 mini sports a larger battery, revamped camera with even better low-light performance, faster processor, and brighter display with a smaller notch. Other features are similar, including UWB, NFC, MagSafe fast wireless charging, 3D face-scanning security, and a waterproof glass-and-aluminum body.',
    color: 'Red',
    price: 999,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650528519/ivbwbkluimlkghxhbmww.jpg',
    screen: '5.4 in',
    processor: 'Apple A15 Bionic',
    ram: '4 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '6256e4b7177aec852182a8ae',
    },
    name: 'iPhone 13 128GB',
    manufacturer: 'Apple',
    description:
      'This update to the iPhone 12 sports a larger battery, revamped camera with even better low-light performance, faster processor, and brighter display with a smaller notch. Other features are similar, including UWB, NFC, MagSafe fast wireless charging, 3D face-scanning security, and a waterproof glass-and-aluminum body..',
    color: 'White',
    price: 799,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650528572/hhsu3dvude29g2xipkkv.jpg',
    screen: '6.1 in',
    processor: 'Apple A15 Bionic',
    ram: '4 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '6256e4c1177aec852182a8b1',
    },
    name: 'iPhone 13 256GB',
    manufacturer: 'Apple',
    description:
      'This update to the iPhone 12 sports a larger battery, revamped camera with even better low-light performance, faster processor, and brighter display with a smaller notch. Other features are similar, including UWB, NFC, MagSafe fast wireless charging, 3D face-scanning security, and a waterproof glass-and-aluminum body..',
    color: 'White',
    price: 899,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650528585/ndyswpiriegdszag3hgs.jpg',
    screen: '6.1 in',
    processor: 'Apple A15 Bionic',
    ram: '4 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '6256e4e0177aec852182a8b4',
    },
    name: 'iPhone 13 512GB',
    manufacturer: 'Apple',
    description:
      'This update to the iPhone 12 sports a larger battery, revamped camera with even better low-light performance, faster processor, and brighter display with a smaller notch. Other features are similar, including UWB, NFC, MagSafe fast wireless charging, 3D face-scanning security, and a waterproof glass-and-aluminum body..',
    color: 'White',
    price: 1099,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650528600/yls9yx7z1thtdddtitrk.jpg',
    screen: '6.1 in',
    processor: 'Apple A15 Bionic',
    ram: '4 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '6256e56f177aec852182a8b7',
    },
    name: 'iPhone 13 Pro 128GB',
    manufacturer: 'Apple',
    description:
      'This premium iPhone offers upgraded cameras compared to the standard iPhone 13, plus telephoto and macro, pro video options, display refresh up to 120 Hz, stainless steel body, and a LiDAR scanner. Other features are similar, including a new, brighter display with a smaller notch, UWB, NFC, MagSafe fast wireless charging, 3D face-scanning security, and a waterproof design.',
    color: 'black',
    price: 999,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650527944/nkqnk4ytdqb0au62zhuy.jpg',
    screen: '6.1 in',
    processor: 'Apple A15 Bionic',
    ram: '6 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '6256e57e177aec852182a8ba',
    },
    name: 'iPhone 13 Pro 256GB',
    manufacturer: 'Apple',
    description:
      'This premium iPhone offers upgraded cameras compared to the standard iPhone 13, plus telephoto and macro, pro video options, display refresh up to 120 Hz, stainless steel body, and a LiDAR scanner. Other features are similar, including a new, brighter display with a smaller notch, UWB, NFC, MagSafe fast wireless charging, 3D face-scanning security, and a waterproof design.',
    color: 'black',
    price: 1099,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650527977/rewrpr8fjzgfixzu4cwk.jpg',
    screen: '6.1 in',
    processor: 'Apple A15 Bionic',
    ram: '6 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '6256e595177aec852182a8bd',
    },
    name: 'iPhone 13 Pro 512GB',
    manufacturer: 'Apple',
    description:
      'This premium iPhone offers upgraded cameras compared to the standard iPhone 13, plus telephoto and macro, pro video options, display refresh up to 120 Hz, stainless steel body, and a LiDAR scanner. Other features are similar, including a new, brighter display with a smaller notch, UWB, NFC, MagSafe fast wireless charging, 3D face-scanning security, and a waterproof design.',
    color: 'black',
    price: 1299,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650527991/vqjpw9bim9m0mj3isqqb.jpg',
    screen: '6.1 in',
    processor: 'Apple A15 Bionic',
    ram: '6 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '6256e7ec177aec852182a8f1',
    },
    name: 'iPhone 13 Pro Max 128GB',
    manufacturer: 'Apple',
    description:
      'TThis jumbo-size iPhone offers all the premium features of the iPhone 13 Pro, but with a larger 6.7-inch display and larger battery. It has display refresh up to 120 Hz, 3x telephoto camera, stainless steel body, and a LiDAR scanner. Other features are similar to the iPhone 13, including a new, brighter display with a smaller notch, UWB, NFC, MagSafe fast wireless charging, and a waterproof design.',
    color: 'Cyan',
    price: 1099,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650528077/clbmeqgrw3mdva67iiuq.jpg',
    screen: '6.7 in',
    processor: 'Apple A15 Bionic',
    ram: '6 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '6256e7f6177aec852182a8f4',
    },
    name: 'iPhone 13 Pro Max 256GB',
    manufacturer: 'Apple',
    description:
      'This jumbo-size iPhone offers all the premium features of the iPhone 13 Pro, but with a larger 6.7-inch display and larger battery. It has display refresh up to 120 Hz, 3x telephoto camera, stainless steel body, and a LiDAR scanner. Other features are similar to the iPhone 13, including a new, brighter display with a smaller notch, UWB, NFC, MagSafe fast wireless charging, and a waterproof design.',
    color: 'Cyan',
    price: 1199,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650528092/la8blalhl4wbmjfbtnt7.jpg',
    screen: '6.7 in',
    processor: 'Apple A15 Bionic',
    ram: '6 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '6256e800177aec852182a8f7',
    },
    name: 'iPhone 13 Pro Max 512GB',
    manufacturer: 'Apple',
    description:
      'TThis jumbo-size iPhone offers all the premium features of the iPhone 13 Pro, but with a larger 6.7-inch display and larger battery. It has display refresh up to 120 Hz, 3x telephoto camera, stainless steel body, and a LiDAR scanner. Other features are similar to the iPhone 13, including a new, brighter display with a smaller notch, UWB, NFC, MagSafe fast wireless charging, and a waterproof design.',
    color: 'Cyan',
    price: 1399,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650528107/uv6mhmfrg8fbjaeuqars.jpg',
    screen: '6.7 in',
    processor: 'Apple A15 Bionic',
    ram: '6 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '626110b6a66241365bb421e2',
    },
    name: 'Redmi Note 11 Pro',
    manufacturer: 'Xiaomi',
    description:
      "\nThe new Xiaomi Redmi Note 11 Pro 5G is Xiaomi's high-end smartphone that gives you the best connectivity. In addition, you will have it in your hands with a 6.67-inch AMOLED DotDisplay 120 Hz FHD + panel and 33 W fast charge Pro.",
    color: 'White, Black, Blue',
    price: 370,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650528438/tca9rw0oc6irnsqvyp9n.jpg',
    screen: '6.7 in',
    processor: 'Qualcomm Snapdragon 695',
    ram: '6 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '62612aafa66241365bb42309',
    },
    name: 'Redmi Note 11',
    manufacturer: 'Xiaomi',
    description:
      'The Redmi Note 11 is the latest evolution of this family of Xiaomi phones that comes with a fairly continuous proposal to what we had seen in the previous generation, at all levels, with subtle improvements. Of course, MIUI 13 beats in its heart on all four sides, something positive... but also negative as we will see later.',
    color: 'Pearl, Blue, Black',
    price: 230,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650535088/sgdjqhxgkwectg2nyovx.jpg',
    screen: '6.4 in',
    processor: 'Qualcomm Snapdragon 680',
    ram: '6 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '62612bada66241365bb42325',
    },
    name: 'Poco M4 Pro 5G',
    manufacturer: 'Xiaomi',
    description:
      'The Xiaomi Poco M4 Pro 5G is the successor to the Poco M3 Pro, and refers to the Redmi Note 11 launched in China. With a 6.6-inch IPS screen with FHD+ resolution and 90Hz refresh rate, the Poco M4 Pro is powered by a Dimensity 810 processor with versions of 4GB of RAM and 64GB of storage or 6GB of RAM with 128GB of storage. The rear camera of the Poco M4 Pro 5G is dual, with a 50MP main sensor and an 8MP ultrawide camera, while the selfie camera is 16MP. Powered by a fast-charging 5000 mAh battery that allows a full charge in one hour, the Poco M4 Pro 5G completes its features with stereo speakers, side fingerprint reader, 5G connectivity and MIUI 12.5 based on Android 11',
    color: 'Black',
    price: 188,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650535341/vule5xvlqaylc8zqvumo.jpg',
    screen: '6.4 in',
    processor: 'MediaTek Helio G96 ',
    ram: '6 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '62612cdfa66241365bb42366',
    },
    name: 'Samsung Galaxy A73',
    manufacturer: 'Samsung',
    description:
      'This latest offering by Samsung comes with exciting features under the hood and it sports a 108MP quad-camera setup. The Galaxy A73 5G has a 6.7-inch AMOLED display. The display panel offers Full HD+ resolution, 20:9 aspect ratio, and a pixel density of 393 PPI. The smartphone comes with 6GB of RAM and packs 128GB of internal storage. You can also expand the storage up to 1TB via microSD card support. The device is powered by Snapdragon 750G SoC which is aided with Adreno 619 GPU.',
    color: 'Black',
    price: 500,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650535648/aqbxz1c4swyusof6lxga.jpg',
    screen: '6.7 in',
    processor: 'Qualcomm Snapdragon 778G',
    ram: '6 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '62612d85a66241365bb42388',
    },
    name: 'Samsung Galaxy A53',
    manufacturer: 'Samsung',
    description:
      'The new Galaxy A series phone comes with a 6.5-inch Super AMOLED display that supports Full HD+ resolution at 1080x2400 pixels. The screen gets a punch hole design and offers pixel density of 405 PPI. The new mid-range device Samsung comes powered by octa-core Exynos 1280 chipset. It gets paired with 6GB RAM and offers 128GB internal storage which is further expandable. The Galaxy A53 5G opts for a quad rear camera that includes 64MP primary sensor, 12MP ultra-wide angle sensor, 5MP sensor and a 5MP sensor. On the front, the phone has a 32MP selfie camera that also supports video calls.',
    color: 'Black',
    price: 449,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650535814/jl7gz1pd8ar7bozkv8ew.jpg',
    screen: '6.5 in',
    processor: 'Samsung Exynos 1280',
    ram: '6 GB',
    __v: 0,
  },
  {
    _id: {
      $oid: '62612e4aa66241365bb423c5',
    },
    name: 'Samsung Galaxy F23',
    manufacturer: 'Samsung',
    description:
      'The new F series phone flaunts a 6.6-inch display that supports Full HD+ resolution at 1080x2408 pixels. The screen gets a notch and offers pixel density of 400 PPI. This mid-range device comes powered by octa-core Snapdragon 750G chipset. It gets paired with 4GB RAM and offers 128GB internal storage which is further expandable. Samsung opts for a triple rear camera that includes 50MP primary sensor, 8MP ultra-wide angle sensor, and a 2MP sensor. On the front, the phone has an 8MP selfie camera that also supports video calls.',
    color: 'Green',
    price: 190,
    imageSrc:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1650536010/pwn9kem8wmlvzbdhxd9q.jpg',
    screen: '6.6 in',
    processor: 'Qualcomm Snapdragon 750G Processor',
    ram: '4 GB',
    __v: 0,
  },
]);
