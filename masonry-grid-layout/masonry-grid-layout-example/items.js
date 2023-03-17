const posts = [];
const images = [
  "https://i.pinimg.com/564x/6a/00/e5/6a00e5fd3e8a957778eed6db022d8e57.jpg",
  "https://i.pinimg.com/564x/45/23/ec/4523ec84cbeafbf805d1763fb7d2fe30.jpg",
  "https://i.pinimg.com/564x/5d/2a/aa/5d2aaabc687451c664b54f3d8e0df697.jpg",
  "https://i.pinimg.com/564x/ce/b0/06/ceb006c73a30798166b16b7896a8ed23.jpg",
  "https://i.pinimg.com/564x/4d/53/a8/4d53a8b0fd94490d37532c6eb09a794e.jpg",
  "https://i.pinimg.com/564x/5b/6d/06/5b6d06db65c4a460111b5b1d865023ca.jpg",
  "https://i.pinimg.com/564x/72/f2/a8/72f2a883c43cf1f5dec16bb056258029.jpg",
  "https://i.pinimg.com/564x/75/dc/b0/75dcb05e815af3d8f29306f2b58ce9e3.jpg",
  "https://i.pinimg.com/564x/fc/29/16/fc2916d112bb69a48fa6f53b0478548a.jpg",
  "https://i.pinimg.com/564x/22/14/d3/2214d312b8c9d3429b6cb4c99c0dedbb.jpg",
  "https://i.pinimg.com/564x/ad/bf/54/adbf545c36c53f66d140bc197c84359a.jpg",
];

let imageIndex = 0;

for (let i = 1; i < 80; i++) {
  let item = {
    id: i,
    title: `Post ${i}`,
    image: images[imageIndex],
  };

  posts.push(item);
  imageIndex++;
  if (imageIndex > images.length - 1) imageIndex = 0;
}
