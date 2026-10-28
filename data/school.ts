import {
  BookOpen,
  Compass,
  FlaskConical,
  HeartHandshake,
  Library,
  Palette,
  ShieldCheck,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export const school = {
  name: "NexVora Academy",
  shortName: "NVA",
  tagline: "Learn boldly. Grow kindly. Lead with purpose.",
  description:
    "A demonstration school website template designed to help schools share their story, learning approach and admissions information with families.",
  demoLabel: "Demonstration website",
  location: "School location to be configured",
  address: "Replace with the school's verified address before launch",
  phone: "",
  email: "",
  admissionsEmail: "",
  website: "",
  principalName: "Principal's name to be provided",
  principalRole: "Principal · Demo content",
  principalMessage:
    "Education is a partnership between learners, families and educators. Our demonstration message reflects a commitment to curiosity, kindness and helping every student discover their strengths.",
  academicYear: "Academic year to be confirmed",
};

export type SchoolCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const learningStages: SchoolCard[] = [
  {
    title: "Foundational years",
    description:
      "A warm, play-informed start that encourages curiosity, language, relationships and confident early learning.",
    icon: BookOpen,
  },
  {
    title: "Primary learning",
    description:
      "Strong foundations in literacy, numeracy, creativity and the habits that help children learn independently.",
    icon: Compass,
  },
  {
    title: "Middle years",
    description:
      "Opportunities to ask deeper questions, build subject knowledge and learn through projects and collaboration.",
    icon: FlaskConical,
  },
];

export const schoolValues: SchoolCard[] = [
  {
    title: "Curiosity",
    description: "Ask questions, explore ideas and keep learning.",
    icon: Compass,
  },
  {
    title: "Care and respect",
    description: "Treat people fairly and help build a supportive community.",
    icon: HeartHandshake,
  },
  {
    title: "Integrity",
    description: "Be honest, responsible and thoughtful in daily choices.",
    icon: ShieldCheck,
  },
];

export const facilities: SchoolCard[] = [
  {
    title: "Learning resources",
    description:
      "A welcoming library and learning materials that help students discover ideas beyond the classroom.",
    icon: Library,
  },
  {
    title: "Science and discovery",
    description:
      "Practical learning experiences designed to encourage questions, observation and safe exploration.",
    icon: FlaskConical,
  },
  {
    title: "Arts and expression",
    description:
      "Creative opportunities for students to develop imagination, confidence and communication.",
    icon: Palette,
  },
  {
    title: "Sports and teamwork",
    description:
      "Activities that encourage movement, teamwork, perseverance and respect for others.",
    icon: Trophy,
  },
];

export const campusImages = [
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    alt: "Teacher supporting students in a bright classroom",
    title: "Learning together",
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",
    alt: "Bright classroom arranged for collaborative learning",
    title: "A place to learn",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85",
    alt: "Students participating in a classroom activity",
    title: "Growing together",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
    alt: "Students learning and participating in school",
    title: "Discovering strengths",
  },
];
