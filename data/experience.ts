export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: 'IBM',
    role: 'Software Developer',
    period: 'July 2022 — Present',
    description:
      'Building and maintaining high-performance backend services and distributed systems at scale, while contributing across the full stack — from cloud infrastructure to AI-powered agentic tools.',
    highlights: [
      'Developed and maintained high-performance backend services in Go for production-grade web applications.',
      'Managed Kubernetes clusters and orchestrated containerized applications on the OpenShift Container Platform.',
      'Implemented automated deployment pipelines using Jenkins, ArgoCD, and GitOps principles, reducing manual deployment effort by 30%.',
      'Worked with AWS services as an AWS Certified Cloud Practitioner, supporting cloud-native architecture decisions.',
      'Enhanced user experience and interface responsiveness through frontend development with React.',
      'Built agentic tools for a custom AI framework leveraging LLMs and external services in Python.',
      'Worked on cutting-edge AI agentic technologies including MCP (Model Context Protocol) and agentic skills.',
      'Implemented an AI agentic Observability dashboard pipeline PoC, providing insightful dashboards from OpenTelemetry traces.',
      'Participated in code reviews and contributed to upholding best practices and coding standards across the team.',
    ],
  },
  {
    company: 'IBM',
    role: 'Software Developer Intern',
    period: 'January 2022 — July 2022',
    description:
      'Gained hands-on experience in backend development, cloud infrastructure, and frontend engineering — contributing meaningfully to real-world production systems from day one.',
    highlights: [
      'Contributed to the development of backend services in Go to power production web applications.',
      'Managed containerized environments using Docker and Kubernetes, improving deployment efficiency.',
      'Assisted in setting up CI/CD pipelines with Jenkins to streamline continuous integration workflows.',
      'Enhanced frontend components in React with a focus on improving load times and responsiveness.',
      'Supported cross-functional teams in identifying bottlenecks and optimizing application architecture.',
    ],
  },
  {
    company: 'EDC — NSS College of Engineering',
    role: 'Project Head',
    period: 'April 2021 — May 2022',
    description:
      'Led the project wing of the Entrepreneurship Development Cell at NSS College of Engineering, driving student-led initiatives and fostering an innovation-oriented culture on campus.',
    highlights: [
      'Spearheaded and mentored student project teams, guiding them from ideation to execution.',
      'Coordinated workshops, hackathons, and entrepreneurship events to build a thriving startup ecosystem on campus.',
      'Collaborated with faculty and industry professionals to bring real-world perspectives into student projects.',
    ],
  },
];

export interface Education {
  institution: string;
  degree: string;
  field: string;
  grade: string;
  period: string;
  location: string;
}

export const education: Education[] = [
  {
    institution: 'NSS College of Engineering',
    degree: 'Bachelor of Technology (Honours)',
    field: 'Electronics and Communication Engineering',
    grade: 'CGPA: 9.1 / 10',
    period: 'August 2018 — July 2022',
    location: 'Palakkad, Kerala',
  },
  {
    institution: 'MES Campus School',
    degree: 'Higher Secondary Education (Class XII)',
    field: 'Science with Mathematics & Computer Science',
    grade: 'Grade: 9.4 / 10',
    period: 'June 2016 — June 2018',
    location: 'Kuttippuram, Kerala',
  },
];
