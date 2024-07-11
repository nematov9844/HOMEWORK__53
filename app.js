// 1. Qiymatlari sonlardan iborat bo’lgan object berilgan. Qiymatlarini n martaga ochiruvchi dastur tuzing
// Input: n = 3,  const obj = {a: 2, b: 3, c: 4}
// Output: const res = {a: 6, b: 9, c: 12}

const obj = { a: 2, b: 3, c: 4 };

const n = 3;
const oshuruvchi = (obj) => {
  const res = {};
  for (const key in obj) {
    res[key] = obj[key] * n;
  }
  console.log(res);
};
// oshuruvchi(obj);

// 2. argument sifatida berilgan string da nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing

let string = "men dasturlashni o’rganishni istayman lekin vaqtim yo'q";

const aniqlaydigan = (string) => {
  let strCount = 0;
  string.split(" ").filter((item) => {
    if (item.includes("a") || item.includes("A")) {
      strCount++;
      return item;
    }
  });
  console.log(strCount);
};
// aniqlaydigan(string);

// 3. Quyidagi ko’rinishda object lardan tuzilgan array berildi. Agar read property true bo’lsa o’sha kitob o’qigan deb chiqarsin, aks holda o’qilmagan deb chiqarsin

const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    read: false,
  },
  {
    title: "Dunyoning ishlari",
    author: "O’tkir Hoshimov",
    read: true,
  },
  {
    title: "Iymon",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    read: true,
  },
];

const readBooks = books.filter((item) => {
  if (item.read === true) {
    console.log(item.author, "ning", item.title, "kitobi o’qilgan");
  } else {
    console.log(item.author, "ning", item.title, "kitobi o’qilmagan");
  }
});

// Output:
// 1. Akrom Malik ning Halqa kitobi o’qilmagan
// 2. O’tkir Hoshimov ning Dunyoning ishlari kitobi o’qilgan
// 3. Shayx Muhammad Sodiq Muhammad Yusuf hazratlarining Iymon kitobi o’qilgan

// 4. String lar arrayi berilgan. Shunday object hosil qilinki o’sha object kalitlari array elementlaridan va qiymatlari ularning uzuligindan iborat bo’lsin
let strings = ["text", "world", "laptop"];
// Output: {”text”: 4, “world”: 4, “laptop”: 6}
let new_strings = strings.reduce((net, item) => {
  net[item] = item.length;
  return net;
}, {});
// console.log(new_strings);

// 5. Arraydagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating
// Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// Output: {dog: 2, chicken: 3, cat: 1, rabbit: 1}

const animals = [
  "dog",
  "chicken",
  "cat",
  "dog",
  "chicken",
  "chicken",
  "rabbit",
];

let new_animals = animals.reduce((net, item) => {
  if (net[item]) {
    net[item] += 1;
  } else {
    net[item] = 1;
  }
  return net;
}, {});
// console.log(new_animals);

// 6. Arraydagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
// Input: [
// {name: 'John', age: 13},
// {name: 'Mark', age: 56},
// {name: 'Rachel', age: 45},
// {name: 'Nate', age: 67},
// {name: 'Jeniffer', age: 65}
// ];
// Output: 54

let people = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];

let yo = people.sort((a, b) => a.age - b.age);
// console.log(yo[yo.length - 1].age - yo[0].age);

// 7. Array truthy va falsy elementlardan tuzilgan. O’sha arraydagi truthy va falsy elementlarni alohida arraylarga ajratib object qilib qaytaruvchi **getTruthyFalsy** funksiya tuzing. (filter)
// Input: [false, 1, 10, "", null, "sultonqul", 1.13, 0]
// Output: {truthy: [1, 10, "sultonqul", 1.13], falsy: [false, "", null, 0]}

let array = [false, 1, 10, "", null, "sultonqul", 1.13, 0];

const getTruthyFalsy = (array) => {
  let truthy = [];
  let falsy = [];
  array.forEach((item) => {
    if (item) {
      truthy.push(item);
    } else {
      falsy.push(item);
    }
  });
  return { truthy, falsy };
};
// console.log(getTruthyFalsy(array));

// 8. Gapdagi eng uzun va eng qisqa so’zlarni aniqlab {minWord: “…”, maxWord: “….”} qiymat qaytaruvchi minManWord() nomli function yarating
// Input: “Men dasturlash kursida o’qiyman”
// Output: {minWord: “Men”, maxWord: “dasturlash”}

let iM = "Men dasturlash kursida o’qiyman";

const minManWord = (iM) => {
    let arr = iM.split(" ");
  let min = arr[0];
  let max = arr[0];
  arr.forEach((item) => {
    if (item.length < min.length) {
      min = item;
    }
    if (item.length > max.length) {
      max = item;
    }
  });
  return { minWord: min, maxWord: max };
};
// console.log(minManWord(iM));