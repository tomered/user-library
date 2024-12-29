import Image from "next/image";
import UserCard from "./components/UserCard";
import UserGrid from "./components/UserGrid";

const allUsers = [
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Célia",
      last: "Lacroix",
    },
    location: {
      street: {
        number: 4166,
        name: "Avenue du Château",
      },
      city: "Strasbourg",
      state: "Haute-Saône",
      country: "France",
      postcode: 81440,
      coordinates: {
        latitude: "-15.9864",
        longitude: "163.8774",
      },
      timezone: {
        offset: "-11:00",
        description: "Midway Island, Samoa",
      },
    },
    email: "celia.lacroix@example.com",
    login: {
      uuid: "373060d6-c7ba-4056-833b-d90751ce3f6c",
      username: "redswan636",
      password: "captain1",
      salt: "CSOatxHn",
      md5: "6e20c01c174d5016cf006972cfb9de69",
      sha1: "baf26b88aa37a483492c24b5047a1e960694d533",
      sha256:
        "4040a21dc4916f77355dc01970fd8924ef30cfb48d5bf4df261b379f355abec1",
    },
    dob: {
      date: "1945-10-04T13:19:41.760Z",
      age: 79,
    },
    registered: {
      date: "2011-08-22T02:40:40.932Z",
      age: 13,
    },
    phone: "01-89-29-47-88",
    cell: "06-44-83-11-01",
    id: {
      name: "INSEE",
      value: "2450957212283 36",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/34.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/34.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/34.jpg",
    },
    nat: "FR",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Obren",
      last: "Kovač",
    },
    location: {
      street: {
        number: 7073,
        name: "Gradine",
      },
      city: "Topola",
      state: "Jablanica",
      country: "Serbia",
      postcode: 51917,
      coordinates: {
        latitude: "56.0584",
        longitude: "119.1738",
      },
      timezone: {
        offset: "+6:00",
        description: "Almaty, Dhaka, Colombo",
      },
    },
    email: "obren.kovac@example.com",
    login: {
      uuid: "67d52112-8c33-434c-ad79-5cb4d27151a4",
      username: "angryladybug685",
      password: "mimi",
      salt: "fwfPqMhO",
      md5: "5b60a527265a08ae2c51ac211fb67820",
      sha1: "c94457d1c8827fdea885dea9e583e8a4196c8af7",
      sha256:
        "467e20409196363db2663d001e71df683d8549cbf4dc3f3cb29270699df8af49",
    },
    dob: {
      date: "1961-10-18T14:36:33.487Z",
      age: 63,
    },
    registered: {
      date: "2022-04-06T22:04:33.114Z",
      age: 2,
    },
    phone: "017-4271-415",
    cell: "065-0304-039",
    id: {
      name: "SID",
      value: "846282983",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/62.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/62.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/62.jpg",
    },
    nat: "RS",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Joseph",
      last: "Montgomery",
    },
    location: {
      street: {
        number: 6592,
        name: "York Road",
      },
      city: "Leeds",
      state: "Devon",
      country: "United Kingdom",
      postcode: "C1 3ND",
      coordinates: {
        latitude: "20.3292",
        longitude: "-137.7153",
      },
      timezone: {
        offset: "+3:00",
        description: "Baghdad, Riyadh, Moscow, St. Petersburg",
      },
    },
    email: "joseph.montgomery@example.com",
    login: {
      uuid: "a907a4f9-1b74-4b27-a890-60706fc7a4d4",
      username: "yellowgorilla617",
      password: "fisher",
      salt: "zDQ2wqZz",
      md5: "b19e94dab8d439b782f95bd266faebfd",
      sha1: "4f8fe1c181b50fd7e9d2bc0f4d6bf49249c22524",
      sha256:
        "39058843f010fe21165e1b7845b79869eea1a431af35ad34ce05fca74a8f9195",
    },
    dob: {
      date: "1990-12-02T06:23:51.261Z",
      age: 34,
    },
    registered: {
      date: "2003-05-31T16:01:17.153Z",
      age: 21,
    },
    phone: "017687 95989",
    cell: "07348 364344",
    id: {
      name: "NINO",
      value: "PH 27 14 71 A",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/3.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/3.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
    },
    nat: "GB",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Abhinav",
      last: "Banerjee",
    },
    location: {
      street: {
        number: 4225,
        name: "Ashoka Rd",
      },
      city: "Sikar",
      state: "Mizoram",
      country: "India",
      postcode: 98590,
      coordinates: {
        latitude: "78.1931",
        longitude: "117.2395",
      },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
      },
    },
    email: "abhinav.banerjee@example.com",
    login: {
      uuid: "471899af-74c6-47ad-94d6-5f69d00d0243",
      username: "silverzebra560",
      password: "zenith",
      salt: "cLHL2XdS",
      md5: "44dc847ef0eaed165bf7cb741c2cb725",
      sha1: "2f7e65b95a7074789006df41ddbad53348984004",
      sha256:
        "b8a27b8053c5f37db63be348c3e99a6ae5e93ed97cab431704ccc039d26649e7",
    },
    dob: {
      date: "1965-06-24T21:45:26.718Z",
      age: 59,
    },
    registered: {
      date: "2003-08-25T15:38:34.064Z",
      age: 21,
    },
    phone: "8861044959",
    cell: "8560169559",
    id: {
      name: "UIDAI",
      value: "874418618831",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/1.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/1.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
    },
    nat: "IN",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Stanko",
      last: "Stojaković",
    },
    location: {
      street: {
        number: 5740,
        name: "Stevana Popova",
      },
      city: "Batočina",
      state: "Kolubara",
      country: "Serbia",
      postcode: 52640,
      coordinates: {
        latitude: "71.2753",
        longitude: "121.6824",
      },
      timezone: {
        offset: "-8:00",
        description: "Pacific Time (US & Canada)",
      },
    },
    email: "stanko.stojakovic@example.com",
    login: {
      uuid: "366b52aa-9dab-4bf6-8364-f3775e1cf5b8",
      username: "ticklishbear429",
      password: "norwich",
      salt: "wlxHKX32",
      md5: "b280185bdb45bbb985974c29b5751197",
      sha1: "823646337baa70ff3d7b7db3ab7bc27634a59740",
      sha256:
        "b7124260de8f5dafc00f633dcd4eee35e2e9cb919dea2d1dc3ce3ddcad32fe51",
    },
    dob: {
      date: "1955-01-24T04:28:51.703Z",
      age: 69,
    },
    registered: {
      date: "2010-11-17T02:22:22.813Z",
      age: 14,
    },
    phone: "020-3809-325",
    cell: "069-9721-607",
    id: {
      name: "SID",
      value: "073572423",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/46.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/46.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/46.jpg",
    },
    nat: "RS",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Kuzey",
      last: "Küçükler",
    },
    location: {
      street: {
        number: 288,
        name: "Mevlana Cd",
      },
      city: "Amasya",
      state: "Isparta",
      country: "Turkey",
      postcode: 88887,
      coordinates: {
        latitude: "38.7228",
        longitude: "-83.3833",
      },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    email: "kuzey.kucukler@example.com",
    login: {
      uuid: "fec51fc9-90d5-43a3-accf-c8a634b0b231",
      username: "brownelephant410",
      password: "trees",
      salt: "qxVLLqu7",
      md5: "8cea969a561467aa8ef7e32a1b3e22ac",
      sha1: "48c315cee1834a24dae8c4e928a9cd7031fab23f",
      sha256:
        "d2e31808b2c9b7ea543d29162632c56bc782542f76f5923c0673a77f0bfb07c3",
    },
    dob: {
      date: "1962-03-03T00:12:20.250Z",
      age: 62,
    },
    registered: {
      date: "2017-01-06T01:46:36.534Z",
      age: 7,
    },
    phone: "(054)-138-8709",
    cell: "(296)-052-8870",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/71.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/71.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg",
    },
    nat: "TR",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Lea",
      last: "Margaret",
    },
    location: {
      street: {
        number: 7950,
        name: "Arctic Way",
      },
      city: "Kingston",
      state: "New Brunswick",
      country: "Canada",
      postcode: "H8A 9I1",
      coordinates: {
        latitude: "53.0058",
        longitude: "-26.8496",
      },
      timezone: {
        offset: "+11:00",
        description: "Magadan, Solomon Islands, New Caledonia",
      },
    },
    email: "lea.margaret@example.com",
    login: {
      uuid: "f8dda5bc-bac3-439f-8ef8-fee7f7d88a8a",
      username: "organicmeercat160",
      password: "porsche1",
      salt: "iyBpwMGS",
      md5: "b13d1ba36684d93112ce3587b0fe1085",
      sha1: "a0aa837d1e754ceaef7bb3a4070c0fb52ed69c78",
      sha256:
        "b83b4ea66f4e5b969ccd74795bc226dc59fb7e4b56aec8f1d9e67913386b7ad3",
    },
    dob: {
      date: "1984-11-23T08:03:25.072Z",
      age: 40,
    },
    registered: {
      date: "2006-07-04T16:57:44.376Z",
      age: 18,
    },
    phone: "D71 Y67-5080",
    cell: "Y11 E22-7184",
    id: {
      name: "SIN",
      value: "045925872",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/71.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/71.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/71.jpg",
    },
    nat: "CA",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Sharida",
      last: "Linthorst",
    },
    location: {
      street: {
        number: 7526,
        name: "Hollewei",
      },
      city: "Piershil",
      state: "Utrecht",
      country: "Netherlands",
      postcode: "8229 IL",
      coordinates: {
        latitude: "-19.0046",
        longitude: "88.8713",
      },
      timezone: {
        offset: "-7:00",
        description: "Mountain Time (US & Canada)",
      },
    },
    email: "sharida.linthorst@example.com",
    login: {
      uuid: "60ee67d5-a657-4712-871a-3e6f8b56fe36",
      username: "beautifulcat815",
      password: "valentin",
      salt: "c3df9hjI",
      md5: "f4338bde3d382d9fdb1398b5762060ca",
      sha1: "5611bb23282cb4edd39263e92c9bbb09c0766d59",
      sha256:
        "2b4262a81c51e16452a98c3af3910b0533925d938dfdc0905eb92277ad9e36ce",
    },
    dob: {
      date: "1989-02-17T04:12:50.803Z",
      age: 35,
    },
    registered: {
      date: "2014-01-08T07:47:05.235Z",
      age: 10,
    },
    phone: "(096) 5420815",
    cell: "(06) 43988253",
    id: {
      name: "BSN",
      value: "17600380",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/36.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/36.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/36.jpg",
    },
    nat: "NL",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Marie",
      last: "Petersen",
    },
    location: {
      street: {
        number: 7289,
        name: "Ellehammersvej",
      },
      city: "København S",
      state: "Danmark",
      country: "Denmark",
      postcode: 64365,
      coordinates: {
        latitude: "-6.6319",
        longitude: "-43.1475",
      },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    email: "marie.petersen@example.com",
    login: {
      uuid: "2a421d74-9884-4934-a90a-43b26c208101",
      username: "whitekoala850",
      password: "theforce",
      salt: "1J1FaICu",
      md5: "477d4768a17149f0f3adbd3636887fa6",
      sha1: "eb03d46522b438bf69a5c60462730bccc3423bc5",
      sha256:
        "2d90ad67b83518e1417e2275864809058e50bea4387ce073b9ab45410d75a4a3",
    },
    dob: {
      date: "1999-09-07T00:56:31.426Z",
      age: 25,
    },
    registered: {
      date: "2002-10-07T17:41:20.730Z",
      age: 22,
    },
    phone: "10195299",
    cell: "68607733",
    id: {
      name: "CPR",
      value: "060999-0719",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/50.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/50.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/50.jpg",
    },
    nat: "DK",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Niels",
      last: "Pusch",
    },
    location: {
      street: {
        number: 4744,
        name: "Wiesenweg",
      },
      city: "Bad Aibling",
      state: "Sachsen-Anhalt",
      country: "Germany",
      postcode: 60696,
      coordinates: {
        latitude: "70.0460",
        longitude: "-27.9193",
      },
      timezone: {
        offset: "+5:45",
        description: "Kathmandu",
      },
    },
    email: "niels.pusch@example.com",
    login: {
      uuid: "0daf0989-dc1b-4fcf-8510-5da2176f8f99",
      username: "bluewolf568",
      password: "tennis1",
      salt: "6J2HVjpv",
      md5: "1a9cf848c55813ed3a140659947d7a85",
      sha1: "79dd741d71b281fa89bc62a01d32c3e3dceb6063",
      sha256:
        "9aa47033cbef32b0913a3ca80226000136ba2a25a38917bd94d08b1f58f96c68",
    },
    dob: {
      date: "1953-01-19T06:59:55.775Z",
      age: 71,
    },
    registered: {
      date: "2003-12-12T03:13:13.262Z",
      age: 21,
    },
    phone: "0013-1720609",
    cell: "0175-5391631",
    id: {
      name: "SVNR",
      value: "48 190153 P 234",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/47.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg",
    },
    nat: "DE",
  },
];

export default function Home() {
  return <UserGrid users={allUsers as any} />;
  // return <UserCard></UserCard>;
}
