export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'Habit Swap',
    description:
      'A mobile app that helps you break bad habits by replacing urges with quick, contextual positive actions — wiring better behavior over time using a neuroscience-backed approach. Includes a sleek animated landing page.',
    tech: ['React Native', 'Expo', 'Supabase', 'React', 'Vite', 'Tailwind CSS v4', 'TypeScript'],
    github: 'https://github.com/abhijithk1/habitswap-landing-page',
    featured: true,
  },
  {
    title: 'AI Agent System with MCP Gateway',
    description:
      'A fully functional AI agentic system built around the Model Context Protocol (MCP) Gateway. The system connects an AI agent to multiple MCP servers — each exposing tools and data sources — using MCP as a standardized protocol layer, like USB-C for AI applications.',
    tech: ['Python', 'MCP SDK', 'MCP Gateway', 'LLM', 'uv'],
    github: 'https://github.com/abhijithk1/ai-agent-with-mcp-gateway',
    featured: true,
  },
  {
    title: 'SRE Incident Dashboard with WebMCP',
    description:
      'A full-stack AI-assisted incident management platform for Site Reliability Engineers. Features real-time container health monitoring (auto-refreshed every 5s), live log analysis, role-based access for junior/senior SREs, and WebMCP integration for AI-powered incident response and automated post-mortem generation.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Docker Compose', 'WebMCP'],
    github: 'https://github.com/abhijithk1/sre-incident-dashboard-webmcp',
    featured: true,
  },
  {
    title: 'Omni Server',
    description:
      'A foundational Model Context Protocol (MCP) server designed to help developers learn and implement the MCP framework. Features a modular architecture with clean separation of prompts, tools, data, and resources — and integrates seamlessly with Claude Desktop.',
    tech: ['Python', 'MCP SDK', 'Claude Desktop', 'Poetry', 'uv'],
    github: 'https://github.com/abhijithk1/omni-server',
    featured: false,
  },
  {
    title: 'API Service Generator',
    description:
      'A CLI tool built with the Cobra CLI package that scaffolds production-ready Golang REST API services in seconds. Supports PostgreSQL and MySQL, and wires up Gin, sqlc, golang-migrate, IBM alchemy-logging, and Viper — eliminating hours of boilerplate setup.',
    tech: ['Go', 'Cobra CLI', 'Gin', 'sqlc', 'golang-migrate', 'Viper', 'Docker'],
    github: 'https://github.com/abhijithk1/api-service-generator',
    featured: false,
  },
  {
    title: 'Personal Website',
    description:
      'A premium dual-profile personal website built with Next.js, featuring a dark developer portfolio and a warm creative writing section with smooth theme transitions.',
    tech: ['Next.js', 'TypeScript', 'CSS Modules'],
    github: 'https://github.com/abhijithk1/personal-website',
    featured: false,
  },
];
