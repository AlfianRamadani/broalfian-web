import { Information, Project, Education, Experience } from './Types';
import Person1 from './assets/img/person1.png';
import sobatumkm from './assets/img/sobatumkm.png';
import meddok from './assets/img/meddok.png';
import bkk from './assets/img/bkk.png';
import mycabook from './assets/img/mycabook.png';

export const information: Partial<Information> = {
  name: 'Alfian Ramadani',
  country: 'Indonesia',
  description_1: 'I am a FullStack Developer based in Indonesia, passionate about crafting robust and user-friendly web applications.',
  description_2: "I've been studying programming for 2 years, especially web programming. I am passionate about creating websites and am thrilled to present this portfolio, showcasing my skills and projects.",
  description_3: 'My journey in web development is driven by a strong motivation to learn and grow. I approach each project with enthusiasm and a positive attitude, always striving to create the best user experience possible.',
  description_4: 'As a FullStack Developer based in Indonesia, I specialize in both front-end and back-end web development. My journey in programming has been driven by a love for coding and problem-solving, and I am always eager to learn new technologies and improve my craft. This portfolio is a testament to my dedication and the diverse projects I have worked on.',
  email: 'Alfianr792@gmail.com',
  position: 'FullStack Developer',
  contact_person: '+62 895-3418-13016',
  projects_done: 10,
  experience: 2,
  satisfication: 98,
  image: Person1,
  done: 10,
  years: 2
};
export const project: Project[] = [
  {
    featured_img: sobatumkm,
    title: 'SOBATUMKM',
    description: 'A government-backed platform supporting local MSMEs in Balikpapan through training, product registration, consultation, and digital marketing tools.',
    link: 'https://sobatumkmbpp.com'
  },
  {
    featured_img: meddok,
    title: 'MEDDOK',
    description: 'A medical web application built during the ICP Hackathon. This platform allows patients to access health records and book appointments, while doctors can manage patients and provide healthcare services. Designed with a focus on secure and efficient digital health management.',
    link: 'https://github.com/AlfianRamadani/MedDok'
  },
  {
    featured_img: bkk,
    title: 'BKK SMK Negeri 2 Balikpapan',
    description: 'A web application designed to facilitate job placement for students at SMK Negeri 2 Balikpapan. This platform connects students with potential employers, streamlining the recruitment process and enhancing career opportunities.',
    link: '#'
  },
  {
    featured_img: mycabook,
    title: 'MYCABOOK',
    description: 'A web application designed to facilitate book rentals and sales, allowing users to easily manage their book transactions and access a wide range of literary resources.',
    link: 'https://github.com/AlfianRamadani/katalog-buku'
  }
];

export const education: Education[] = [
  {
    school: 'MTsN 2 Balikpapan',
    major: 'Lorem ipsum dolor sit.',
    period: '2019-2022'
  },
  {
    school: 'SMK Negeri 2 Balikpapan',
    major: 'Rekayasa Perangkat Lunak',
    period: '2022-2025'
  },
  {
    school: 'Institut Teknologi Bandung',
    major: 'Teknik Informatika',
    period: '2025-2029'
  }
];

export const experience: Experience[] = [
  {
    work: 'PT Kilang Pertamina Internasional',
    division: 'Web Developer Internship',
    period: 'Apr - Jul 2024'
  },
  {
    work: 'PT Media Kreasi Abadi',
    division: 'Full Stack Developer Intership',
    period: 'Oct 2024 - Jan 2025'
  },
  {
    work: 'PT Media Kreasi Abadi',
    division: 'Full Stack Developer',
    period: 'Jan 2025 - Apr 2025'
  }
];
