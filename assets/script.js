let songListss = [
  {
    title: 'Dir Due Daeng (Cover Maya - Meggy Z)',
    artist: 'Sarino',
    genre: 'Dangdut',
    duration: 1,
  },
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

let songLists = [];
for (let i = 0; i < songListss.length; i++) {
  songLists.push(songListss[Math.floor(Math.random() * songListss.length)]);
}

let ask = confirm('Do you want to see my list song?');
let totalDuration = 0;
let newSongLists = [];
let maxDuration;
let totalRealDuration = 0;

// a function to group song based on artists
function songArtists() {
  const inputArtist = prompt('Enter name of artist : (Kufaku, Manis Manja Group, Arif Alfiansyah, OM PMR, Mesin Tempur, Orkes Pencil Alis, Sarino)');
  const songArtist = songLists.filter(({ artist }) => artist === inputArtist);
  console.log(songArtist);
}

// a function to group song based on genres
function songGenres() {
  const inputGenre = prompt('Enter name of genre : (Dangdut, Pop, Grindcore, Pop Dangdut, Pop Rock)');
  const songGenre = songLists.filter(({ genre }) => genre === inputGenre);
  console.log(songGenre);
}

// a function to group song to play song less than 1 hour with random artists & genres
// function songDurations() {
//   const inputDuration = prompt('Enter duration of song less than : (in minute)');
//   songDuration.push(...songLists.filter(({ duration }) => duration < inputDuration));
//   console.log(songDuration);

//   for (i = 0; i < songDuration.length; i++) {
//     duration += songDuration[i].duration;
//   }
//   console.log(`Total duration of songLists is ${duration} minutes`);
// }

// a function to group song to play song less than 1 hour with random artists & genres

function songDuration() {
  maxDuration = prompt('Enter duration of song less than : (in minute)');
  console.log(`Maximum duration of the new song lists : ${maxDuration} minutes `);
  for (const i of songLists) {
    totalDuration += i.duration;
    if (totalDuration < maxDuration) {
      newSongLists.push(i);
    } else {
      break;
    }
    totalRealDuration = totalDuration;
  }
  console.log(newSongLists);
  console.log(`Total duration of new song lists : ${totalRealDuration} minutes`);
}

if (ask) {
  let askAgain = prompt('Enter number to search songs by : (1: Artist, 2: Genre, 3: Duration)');
  while (askAgain != 1 || askAgain != 2 || askAgain != 3) {
    if (askAgain == 1) {
      songArtists();
      break;
    } else if (askAgain == 2) {
      songGenres();
      break;
    } else if (askAgain == 3) {
      songDuration();
      break;
    } else {
      alert('You entered the wrong number!');
      askAgain = prompt('Enter number to search songs by : (1: Artist, 2: Genre, 3: Duration)');
    }
  }
} else {
  alert('Ok, Thank You!');
}
