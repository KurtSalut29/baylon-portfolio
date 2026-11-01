// Content comes from Gelli's brief (Portfolio of gelli Mae.docx), her photo, her
// Integrated OS certificate (the picture in gelli.docx), and her project screenshots.
//
// Decisions confirmed with the user on 2026-11-01:
// - The brief's email belonged to someone else, so no email is shown until hers is
//   known. Set `email` below and it appears on the site and résumé automatically.
// - Her screenshots show a wedding web app, which is the project shown here.
// - Her role is shown as Web Developer.
// - The Cisco certificate in her folder carries another student's name; it is not used.

export const profile = {
  name: "Gelli Mae Baylon",
  first: "Gelli Mae",
  last: "Baylon",
  fullName: "Gelli Mae T. Baylon",
  role: "Web Developer",
  degree: "BS Computer Science",
  degreeLong: "Bachelor of Science in Computer Science",
  school: "Biliran Province State University",
  email: "" as string,
  phone: "0963 192 8381",
  phoneHref: "tel:+639631928381",
  smsHref: "sms:+639631928381",
  photo: "/profile.jpg",
  resumePdf: "/resume/Gelli-Mae-Baylon-Resume.pdf",
  statement: "I create useful and user-friendly applications and websites.",
  careerGoal:
    "I want to become a developer because I am interested in creating useful and user-friendly applications and websites. I want to improve my programming and problem-solving skills and build practical technology solutions.",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#certificate", label: "Certificate" },
  { href: "#contact", label: "Contact" },
] as const;

export type Screen = {
  key: string;
  label: string;
  title: string;
  text: string;
  features: string[];
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const project = {
  name: "Our Wedding",
  kind: "Web app · Website",
  summary:
    "A wedding web app with two sides: a dashboard where the couple plans and tracks everything, and a website where guests read their story, see the gallery, and RSVP.",
  tags: ["HTML & CSS", "Web development", "UI design"],
  screens: [
    {
      key: "dashboard",
      label: "Dashboard",
      title: "For the couple",
      text: "One place to plan the day: events, the guest list, photos, and messages, with RSVPs tracked as they come in.",
      features: [
        "Totals for events, guests, photos and confirmed RSVPs",
        "Weekly overview chart",
        "Guest RSVP status at a glance",
      ],
      src: "/projects/wedding-dashboard.jpg",
      alt: "Our Wedding dashboard with totals for events, guests, photos and RSVPs, a weekly overview chart, and an RSVP status ring at 98% confirmed.",
      width: 1984,
      height: 1182,
    },
    {
      key: "website",
      label: "Website",
      title: "For the guests",
      text: "An elegant navy and white site where guests can save the date, read the couple's story, browse the gallery, and RSVP.",
      features: [
        "Save the Date and RSVP buttons up front",
        "Our Story section",
        "Photo gallery",
      ],
      src: "/projects/wedding-website.jpg",
      alt: "Our Wedding website with a 'Two hearts. One forever.' hero, a bridal bouquet photo, Our Story, and a gallery of rings, table setting and cake.",
      width: 1984,
      height: 1632,
    },
  ] satisfies Screen[],
};

export const skills = {
  technical: [
    { name: "HTML and CSS", text: "Structuring pages and styling them into clean, responsive layouts." },
    { name: "Basic Web Development", text: "Building working websites and simple web apps from start to finish." },
  ],
  personal: [
    { name: "Critical Thinking and Analytical Skills", text: "Breaking problems down and finding practical solutions." },
    { name: "Communication and Teamwork", text: "Working well with others and explaining ideas clearly." },
    { name: "Creativity and Adaptability", text: "Bringing fresh ideas and adjusting quickly when things change." },
  ],
};

export const certificate = {
  title: "Integrated OS: Be More Digi-TALINO",
  kind: "Certificate of Participation",
  issuer: "Integrated Office Solutions, Inc.",
  date: "September 5, 2025",
  dateTime: "2025-09-05",
  details:
    "A webinar on strengthening digital literacy: productivity apps, digital communication, smart research, and data safety and security.",
  image: "/certificates/integrated-os.jpg",
  width: 3072,
  height: 2048,
};

export const resume = {
  headline: "Aspiring Web Developer",
  summary:
    "BS Computer Science student at Biliran Province State University seeking a Web Developer role. Interested in creating useful and user-friendly applications and websites. Built a wedding web app with a planning dashboard and a guest website. Skilled in HTML and CSS, with strong critical thinking, communication, and teamwork.",
  skills: [
    { label: "Technical", items: "HTML and CSS, Basic Web Development" },
    {
      label: "Soft Skills",
      items: "Critical Thinking and Analytical Skills, Communication and Teamwork, Creativity and Adaptability",
    },
  ],
  projects: [
    {
      name: "Our Wedding",
      subtitle: "Wedding Web App and Website",
      bullets: [
        "Built a wedding planning dashboard showing events, guest list, gallery, messages, and RSVP status.",
        "Designed a guest-facing website with Save the Date, the couple's story, a photo gallery, and RSVP.",
        "Created a consistent navy and white visual style across both the dashboard and the website.",
      ],
    },
  ],
  certifications: [
    { name: "Integrated OS: Be More Digi-TALINO (Webinar)", issuer: "Integrated Office Solutions, Inc.", date: "September 2025" },
  ],
};
