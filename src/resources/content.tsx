import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Chaitanya",
  lastName: "Chitturi",
  name: "Chitturi Venkata Krishna Chaitanya",
  role: "Software Developer • AI/ML Enthusiast • Full Stack Learner",
  avatar: "/images/avatar.jpg",
  email: "chitturi.workspace@gmail.com",
  location: "Asia/Kolkata", // IANA time zone identifier for India
  languages: ["English", "Telugu", "Hindi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Stay updated with my latest projects and insights</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/iamchitturi",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting intelligent solutions through code & creativity</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Tiger Detection AI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/tiger-detection-in-forest-areas-using-night-vision",
  },
  subline: (
    <>
      I'm Chaitanya, a <Text as="span" size="xl" weight="strong">Computer Science</Text> student at Amrita Vishwa Vidyapeetham, passionate about AI/ML, <br /> embedded systems, and building impactful software solutions.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Rajahmundry, India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Computer Science Engineering student at Amrita Vishwa Vidyapeetham (2023–2027),
        currently building a strong technical foundation across programming, AI/ML, embedded systems,
        and software development. I am committed to continuous learning, personal growth, and evolving
        into a responsible and skilled professional.
      </>
    ),
  },
  work: {
    display: true,
    title: "Projects",
    experiences: [
      {
        company: "Tiger Detection in Forest Areas",
        timeframe: "2025",
        role: "AI/ML Project — CNN-based Classifier",
        achievements: [
          <>
            Built a CNN-based tiger detection classifier using TensorFlow/Keras with image augmentation
            for night vision forest surveillance.
          </>,
          <>
            Implemented data preprocessing with augmentation techniques to improve model accuracy
            on low-visibility and nocturnal images.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Tiger Detection Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Optimized Spell Checker",
        timeframe: "2024",
        role: "Data Structures Project — Trie-based Architecture",
        achievements: [
          <>
            Designed and implemented a Trie-based spell checker for accurate and fast word suggestions
            using optimized data structures.
          </>,
          <>
            Achieved efficient memory usage and rapid lookup times through prefix tree optimization.
          </>,
        ],
        images: [],
      },
      {
        company: "Temperature-Based Fan Speed Controller",
        timeframe: "2025",
        role: "Embedded Systems Project — STM32 Microcontroller",
        achievements: [
          <>
            Developed a PWM-controlled fan speed system using real-time temperature sensor input
            on the STM32 microcontroller platform.
          </>,
          <>
            Integrated ADC temperature readings with PWM duty cycle control for smooth,
            automatic fan speed regulation.
          </>,
        ],
        images: [],
      },
      {
        company: "Density-Based Smart Traffic Management",
        timeframe: "2024",
        role: "IoT Project — Sensor-based Adaptive Signal System",
        achievements: [
          <>
            Created a sensor-based adaptive traffic signal management system using TinkerCAD
            for simulation and prototyping.
          </>,
          <>
            Implemented density detection logic to dynamically adjust traffic signal timing
            based on real-time vehicle density.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Amrita Vishwa Vidyapeetham, Coimbatore",
        description: <>B.Tech in Computer Science & Engineering (2023–2027) — CGPA: 6.0/10</>,
      },
      {
        name: "Tirumala Junior Kalasala",
        description: <>Intermediate (2023) — 96.1%</>,
      },
      {
        name: "Tirumala Proactive School",
        description: <>10th Standard (2021) — 100%</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills & Expertise",
    skills: [
      {
        title: "Programming Languages",
        description: (
          <>Proficient in multiple programming languages for systems, applications, and web development.</>
        ),
        tags: [
          { name: "C", icon: "code" },
          { name: "C++", icon: "code" },
          { name: "Java", icon: "java" },
          { name: "Python", icon: "python" },
          { name: "SQL", icon: "code" },
        ],
        images: [],
      },
      {
        title: "Core CS Concepts",
        description: (
          <>Strong foundation in fundamental computer science principles and software engineering.</>
        ),
        tags: [
          { name: "Data Structures & Algorithms", icon: "rocket" },
          { name: "OOP", icon: "rocket" },
          { name: "DBMS", icon: "rocket" },
          { name: "Operating Systems", icon: "rocket" },
          { name: "Computer Networks", icon: "rocket" },
          { name: "Software Engineering", icon: "rocket" },
        ],
        images: [],
      },
      {
        title: "Areas of Interest",
        description: (
          <>Passionate about emerging technologies and building real-world solutions across multiple domains.</>
        ),
        tags: [
          { name: "Cloud Computing", icon: "globe" },
          { name: "AI/ML", icon: "rocket" },
          { name: "Web Development", icon: "globe" },
          { name: "Software Development", icon: "code" },
          { name: "Embedded Systems & IoT", icon: "rocket" },
        ],
        images: [],
      },
      {
        title: "Certifications",
        description: (
          <>
            Google for Startups — Prompt to Prototype (Scaler) · Foundational CS Coursework (Academic Curriculum)
          </>
        ),
        tags: [
          { name: "Google for Startups", icon: "rocket" },
          { name: "CS Foundations", icon: "book" },
        ],
        images: [],
      },
      {
        title: "Extracurricular Activities",
        description: (
          <>
            Volunteer service during Amma (Mata Amritanandamayi Devi) visit – Feb 2025 ·
            NSS volunteer – March 2025 · Cultural coordinator for Gokulashtami – Aug 2025
          </>
        ),
        tags: [
          { name: "Volunteering", icon: "person" },
          { name: "NSS", icon: "person" },
          { name: "Cultural Events", icon: "person" },
        ],
        images: [],
      },
      {
        title: "Strengths & Hobbies",
        description: (
          <>
            Quick learner · Teamwork & coordination · Discipline & patience · Good communication ·
            Ethical & respectful attitude · Hobbies: Volunteering, Cultural events, Badminton, Outdoor sports
          </>
        ),
        tags: [
          { name: "Quick Learner", icon: "rocket" },
          { name: "Team Player", icon: "person" },
          { name: "Badminton", icon: "person" },
          { name: "Sports", icon: "person" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech and learning...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Engineering and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
