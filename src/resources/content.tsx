import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Icon, Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Chaitanya",
  lastName: "Chitturi",
  name: "Chitturi Venkata Krishna Chaitanya",
  role: "Backend Developer • Spring Boot • REST APIs & Microservices",
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
  headline: <>Building robust backends & scalable REST APIs</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <Row gap="6" vertical="center">
          <Icon name="github" size="s" />
          <strong>zCloudPass</strong>
        </Row>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "https://github.com/zcloudpass",
  },
  subline: (
    <>
      I'm Chaitanya, a <Text as="span" size="xl" weight="strong">Backend Developer</Text> specializing in Spring Boot, REST APIs, <br /> and building secure, scalable server-side applications.
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
        focused on backend development with Spring Boot, REST API design, and relational databases.
        I enjoy architecting clean, maintainable server-side systems and am committed to continuous
        learning and evolving into a skilled backend engineer.
      </>
    ),
  },
  work: {
    display: true,
    title: "Projects",
    experiences: [
      {
        company: "zCloudPass",
        timeframe: "2025",
        role: "Full-Stack Zero-Knowledge Password Manager",
        link: "https://github.com/zcloudpass",
        achievements: [
          <>
            Architected a <strong>zero-knowledge password manager</strong> where
            all encryption and decryption happens entirely on the client side —
            the server only stores an opaque encrypted blob per user and has no
            ability to read vault contents, even if compromised.
          </>,
          <>
            Built the backend in <strong>Rust with Axum, SQLx &amp; PostgreSQL</strong>,
            choosing Rust for memory safety and performance in a security-sensitive
            application. Frontend built with <strong>React, TypeScript &amp; Vite</strong>;
            cross-platform desktop app via <strong>Tauri</strong> for native performance
            and a smaller binary footprint over Electron.
          </>,
          <>
            Designed a clean <strong>REST API versioned under /api/v1</strong> with
            session token-based authentication (Bearer headers) and auth-protected
            vault endpoints — fully separated frontend and backend repos with clean
            API contracts.
          </>,
          <>
            Deployed with <strong>Vercel</strong> (frontend SPA),{" "}
            <strong>Render</strong> (containerized backend via Docker), and{" "}
            <strong>GitHub Actions CI/CD</strong> — targeting Windows, macOS, and
            Linux via Tauri builds.
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
        description: <>B.Tech in Computer Science & Engineering (2023–2027)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills & Expertise",
    skills: [
      {
        title: "Backend Development",
        description: (
          <>Interested in building scalable server-side applications, RESTful APIs, and microservice architectures using modern Java frameworks.</>
        ),
        tags: [
          { name: "Spring Boot", icon: "code" },
          { name: "Spring Security", icon: "code" },
          { name: "Spring Data JPA", icon: "code" },
          { name: "REST APIs", icon: "globe" },
          { name: "Hibernate", icon: "code" },
        ],
        images: [],
      },
      {
        title: "Programming Languages",
        description: (
          <>Proficient in languages that power robust backend systems and enterprise applications.</>
        ),
        tags: [
          { name: "Java", icon: "code" },
          { name: "SQL", icon: "code" },
          { name: "Python", icon: "code" },
          { name: "C", icon: "code" },
          { name: "C++", icon: "code" },
        ],
        images: [],
      },
      {
        title: "Databases & Data Management",
        description: (
          <>Skilled in relational database design, query optimization, and ORM-based data access layers.</>
        ),
        tags: [
          { name: "MySQL", icon: "code" },
          { name: "PostgreSQL", icon: "code" },
          { name: "JDBC", icon: "code" },
          { name: "JPA / Hibernate", icon: "code" },

        ],
        images: [],
      },
      {
        title: "Tools & DevOps",
        description: (
          <>Comfortable with version control, build tools, API testing, and containerized deployments.</>
        ),
        tags: [
          { name: "Git & GitHub", icon: "github" },
          { name: "Maven", icon: "code" },
          { name: "Postman", icon: "globe" },
          { name: "Docker", icon: "code" },
          { name: "IntelliJ IDEA", icon: "code" },
        ],
        images: [],
      },
      {
        title: "Core CS Concepts",
        description: (
          <>Strong foundation in fundamental computer science principles essential for backend engineering.</>
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
        title: "Certifications",
        description: (
          <>
            Google for Startups — Prompt to Prototype (Scaler)
          </>
        ),
        tags: [
          { name: "Google for Startups", icon: "rocket" },

        ],
        images: [],
      },
      {
        title: "Extracurricular Activities",
        description: (
          <>
            Volunteer service during Amma (Mata Amritanandamayi Devi) visit to Kovai– Feb 2025 ·
            NSS volunteer ,Coordinated Many Events – March 2025 · Cultural Coordinator for Gokulashtami Celebrations – Aug 2025
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
            Ethical & respectful attitude · Hobbies: Volunteering,Participating In Cultural events
          </>
        ),
        tags: [
          { name: "Quick Learner", icon: "rocket" },
          { name: "Team Player", icon: "person" },
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
  description: `Backend engineering projects by ${person.name}`,
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
