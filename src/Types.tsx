export interface Information {
  name: string;
  title: string;
  description: string;
  description_1: string;
  description_2: string;
  description_3: string;
  description_4: string;
  email: string;
  contact_person: string;
  projects_done: number;
  experience: number;
  image: string;
  position: string;
  subDescription: string;
  done: number;
  years: number;
  img: string;
  country: string;
  satisfication: number;
}

export interface Project {
  featured_img: string;
  title: string;
  description: string;
  link: string;
}
export interface Education {
  school: string;
  major: string;
  period: string;
}

export interface Experience {
  work: string;
  division: string;
  period: string;
}
export interface Icon {
  src: string;
  desc: string;
  alt: string;
}
