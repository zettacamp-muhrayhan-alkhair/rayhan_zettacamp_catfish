import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  public students: {
    name: string;
    status: string;
    img: string;
    desc: string;
    descBool: boolean;
    like: boolean;
  }[] = [
    {
      name: 'aaaa',
      status: 'active',
      img: 'https://randompicturegenerator.com/img/people-generator/ga96942021ad2ed4e55531b6cf727aa93224bbed40cbf755155b1cf35e96c17c25c1e276d308b67b31981f143778b93ca_640.jpg',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit pariatur laborum sapiente amet voluptatum, ea quas blanditiis dolorem sit quaerat in laboriosam minima at harum quibusdam fuga consequuntur non suscipit! Vel aliquam consequatur reprehenderit impedit corrupti eum sequi voluptatibus aperiam, eveniet temporibus harum, unde assumenda quae esse quaerat suscipit iusto!',
      descBool: false,
      like: false,
    },
    {
      name: 'bbbbb',
      status: 'inactive',
      img: 'https://randompicturegenerator.com/img/people-generator/gb4612c18d373b8d417f10aa4b359fd5fcd0c238fe9b1a09802c3d28817c9300f3c5c526faef7801f7c6c4333eba122c8_640.jpg',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit pariatur laborum sapiente amet voluptatum, ea quas blanditiis dolorem sit quaerat in laboriosam minima at harum quibusdam fuga consequuntur non suscipit! Vel aliquam consequatur reprehenderit impedit corrupti eum sequi voluptatibus aperiam, eveniet temporibus harum, unde assumenda quae esse quaerat suscipit iusto!',
      
      descBool: false,like: false,
    },
    {
      name: 'cccc',
      status: 'inactive',
      img: 'https://randompicturegenerator.com/img/people-generator/g762ac4dbbd24f82749a7e74c090539736e5774808a8d84909da7c162f78fa65b563e9e186d2a34e7c9261c7c7821dc24_640.jpg',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit pariatur laborum sapiente amet voluptatum, ea quas blanditiis dolorem sit quaerat in laboriosam minima at harum quibusdam fuga consequuntur non suscipit! Vel aliquam consequatur reprehenderit impedit corrupti eum sequi voluptatibus aperiam, eveniet temporibus harum, unde assumenda quae esse quaerat suscipit iusto!',
      descBool: false,like: false,
    },
    {
      name: 'dddd',
      status: 'inactive',
      img: 'https://randompicturegenerator.com/img/people-generator/g84bc5d5bb81936123afb8583c78fcad70425edd5623128d56cf22a3fd5378eb61063af6a3324b2d4a811ebacc8a72cf8_640.jpg',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit pariatur laborum sapiente amet voluptatum, ea quas blanditiis dolorem sit quaerat in laboriosam minima at harum quibusdam fuga consequuntur non suscipit! Vel aliquam consequatur reprehenderit impedit corrupti eum sequi voluptatibus aperiam, eveniet temporibus harum, unde assumenda quae esse quaerat suscipit iusto!',
      descBool: false,like: false,
    },
    {
      name: 'eeee',
      status: 'inactive',
      img: 'https://randompicturegenerator.com/img/people-generator/gab5efb99b1f5b1ac18f8f302c793aaa28f5e881eb21d8ae4f7f64f55d3d800a5c77426e67b2e74c5e8d7c1787c13369f_640.jpg',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit pariatur laborum sapiente amet voluptatum, ea quas blanditiis dolorem sit quaerat in laboriosam minima at harum quibusdam fuga consequuntur non suscipit! Vel aliquam consequatur reprehenderit impedit corrupti eum sequi voluptatibus aperiam, eveniet temporibus harum, unde assumenda quae esse quaerat suscipit iusto!',
      descBool: false,like: false,
    },
  ];
}
