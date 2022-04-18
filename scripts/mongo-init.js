db = db.getSiblingDB('admin');

db.createCollection('phones');

db.phones.insertMany([
  {
    _id: {
      $oid: '6246f580bfca641423e5710f',
    },
    name: 'iPhone 7',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 769,
    imageFileName: 'null',
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
    color: 'black',
    price: 699,
    imageFileName:
      'https://res.cloudinary.com/dlf11c89q/image/upload/v1649870779/prdpe5hm9tifi6fhkeag.jpg',
    screen: '5.4 in',
    processor: 'Apple A15 Bionic',
    ram: '4 GB',
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
    color: 'black',
    price: 799,
    imageFileName: 'string',
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
    color: 'black',
    price: 999,
    imageFileName: 'string',
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
    color: 'black',
    price: 799,
    imageFileName: 'string',
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
    color: 'black',
    price: 899,
    imageFileName: 'string',
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
    color: 'black',
    price: 1099,
    imageFileName: 'string',
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
    imageFileName: 'string',
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
    imageFileName: 'string',
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
    imageFileName: 'string',
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
    color: 'black',
    price: 1099,
    imageFileName: 'string',
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
      'TThis jumbo-size iPhone offers all the premium features of the iPhone 13 Pro, but with a larger 6.7-inch display and larger battery. It has display refresh up to 120 Hz, 3x telephoto camera, stainless steel body, and a LiDAR scanner. Other features are similar to the iPhone 13, including a new, brighter display with a smaller notch, UWB, NFC, MagSafe fast wireless charging, and a waterproof design.',
    color: 'black',
    price: 1199,
    imageFileName: 'string',
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
    color: 'black',
    price: 1399,
    imageFileName: 'string',
    screen: '6.7 in',
    processor: 'Apple A15 Bionic',
    ram: '6 GB',
    __v: 0,
  },
]);
