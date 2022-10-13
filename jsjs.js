const songLists = [
  {
    title: 'Berak Tak Cebok',
    artist: 'Kufaku',
    genre: 'Pop Rock',
    duration: 6,
  },
  {
    title: 'Bete',
    artist: 'Manis Manja Group',
    genre: 'Dangdut',
    duration: 3,
  },
  {
    title: 'Kipas Angin Kesedot Sampah',
    artist: 'Orkes Pensil Alis',
    genre: 'Pop',
    duration: 4,
  },
  {
    title: 'Tanya Jawab',
    artist: 'Orkes Pensil Alis',
    genre: 'Pop',
    duration: 4,
  },
  {
    title: 'Judul judulan',
    artist: 'OM PMR',
    genre: 'Pop Dangdut',
    duration: 3,
  },
  {
    title: 'Malam Jumat Kliwon',
    artist: 'OM PMR',
    genre: 'Pop Dangdut',
    duration: 3,
  },
  {
    title: 'Kasih Sayang Kepada Orang Tua',
    artist: 'Mawang',
    genre: 'Pop',
    duration: 4,
  },
  {
    title: 'Mari Membaca',
    artist: 'Mesin Tempur',
    genre: 'Grindcore',
    duration: 1,
  },
  {
    title: 'Penyesalan',
    artist: 'Arif Alfiansyah',
    genre: 'Pop',
    duration: 6,
  },
  {
    title: 'Meneketehe',
    artist: 'Manis Manja Group',
    genre: 'Dangdut',
    duration: 3,
  },
];

let totalDuration = 0;
let newSongLists = [];

function songDuration(maxDuration) {
  for (const i of songLists) {
    totalDuration += i.duration;
    if (totalDuration < maxDuration) {
      newSongLists.push(i);
    } else {
      break;
    }
  }
}

songDuration(20);
console.log(newSongLists);
console.log(totalDuration);
