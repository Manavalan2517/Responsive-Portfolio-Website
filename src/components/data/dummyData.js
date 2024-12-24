import {
  Settings,
  CropRotate,
  ViewInAr,
  PieChart,
  Code,
  BarChart,
  CloudOutlined,
  FavoriteBorder,
  Public,
  PersonOutlined,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
} from "@mui/icons-material";

import port1 from "../port/port1.jpg";
import port2 from "../port/port2.jpg";
import port3 from "../port/port3.jpg";
import port4 from "../port/port4.jpg";
import port5 from "../port/port5.jpg";
import port6 from "../port/port6.jpg";

import team_1 from "../testimonialImg/team-1.png";
import team_2 from "../testimonialImg/team-2.png";
import team_3 from "../testimonialImg/team-3.png";

import b1 from "../blogImg/b1.png";
import b2 from "../blogImg/b2.png";
import b3 from "../blogImg/b3.png";

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/contact",
    text: "Contact",
  },
];
export const home = [
  {
    text: "HELLO I'M",
    name: "Manavalan",
    post: "Web Developer",
    design: "Full Stack Developer",
    desc: "I am a passionate web developer skilled in creating interactive and responsive web applications. With a strong focus on clean code and modern design principles, I enjoy transforming ideas into functional and visually appealing digital experiences.",
  },
];

export const about = [
  {
    desc: "I am Manavalan V, a first-year Data Science student at SRM University, passionate about leveraging technology to solve real-world problems. With a strong foundation in Python, Java, SQL, and JavaScript, I am committed to mastering data analysis, machine learning, and AI while honing my skills in full-stack web development.",
    desc1:
      "Proficient in tools like React, TypeScript, and Tailwind, I enjoy building functional and user-friendly applications. My interests lie at the intersection of technology and innovation, and I am always eager to explore new opportunities, collaborate on projects, and deepen my expertise in data science and web development.",
    cover: "../data/images/man.png",
  },
];

export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "Crafting visually appealing and innovative designs that prioritize user experience and aesthetic appeal.",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Writing well-structured, maintainable, and efficient code to ensure optimal performance and scalability.",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Building fully responsive designs that adapt seamlessly to any device, ensuring accessibility and usability.",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Material UI",
    desc: "Utilizing Material UI to create modern, consistent, and intuitive user interfaces with a professional touch.",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "Enhancing user interfaces with a diverse collection of high-quality Material UI icons for better visual communication.",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: "Providing exceptional support and assistance to ensure smooth project development and implementation.",
  },
];

export const project = [
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLETED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LIENS OF CODE",
  },
];
export const portfolio = [
  {
    id: 1,
    title: "Ai-Learning Management System",
    link: "https://github.com/Manavalan2517/ai-lms",
    img: "/AI-LMS.png",
  },
];
export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: team_1,
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: team_2,
    name: "Alex Ander",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: team_3,
    name: "GorkCoder",
    post: "React Developer",
  },
];
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: b1,
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: b2,
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: b3,
  },
];
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "2651 Main Street, Suit 124",
    text2: "Seattle, WA, 98101",
  },
  {
    icon: <PhoneIphone />,
    text1: "0123456789",
    text2: "0345627891",
  },
  {
    icon: <EmailOutlined />,
    text1: "hello@thetheme.io",
    text2: "inf0@brex-theme.io",
  },
];
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
];
