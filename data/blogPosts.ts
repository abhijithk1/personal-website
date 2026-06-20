export interface BlogPost {
  title: string;
  excerpt: string;
  tags: string[];
  publishDate: string;
  readUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'AI Agent System Using MCP Gateway',
    excerpt:
      'A deep dive into building an AI agent system powered by the Model Context Protocol (MCP) Gateway — exploring how agents discover, connect to, and orchestrate tools through a unified protocol layer.',
    tags: ['AI', 'MCP', 'Agents'],
    publishDate: '2025',
    readUrl: 'https://medium.com/@abhijith0807/ai-agent-system-using-mcp-gateway-334e3a6d1989',
  },
  {
    title: 'Cloud-Native Architecture Explained: A Beginner\'s Guide to Modern Software Design',
    excerpt:
      'Breaking down cloud-native architecture in plain language — microservices, containers, orchestration, and the design principles that make modern software scalable, resilient, and maintainable.',
    tags: ['Cloud', 'Architecture', 'DevOps'],
    publishDate: '2025',
    readUrl: 'https://medium.com/@abhijith0807/cloud-native-architecture-explained-a-beginners-guide-to-modern-software-design-5428d449c225',
  },
  {
    title: 'Build Your Own Claude MCP Server Using omni-server',
    excerpt:
      'A practical, hands-on guide to building a custom Claude MCP server with omni-server — from understanding the Model Context Protocol to deploying your own tool-enabled AI server.',
    tags: ['MCP', 'Claude', 'AI'],
    publishDate: '2025',
    readUrl: 'https://medium.com/@abhijith0807/build-your-own-claude-mcp-server-using-omni-server-a-practical-guide-to-model-context-protocol-1c5068beb027',
  },
  {
    title: 'Test-Driven Development (TDD) in Golang: A Hands-On Guide',
    excerpt:
      'A practical guide to Test-Driven Development in Go — covering the red-green-refactor cycle, writing table-driven tests, and building the discipline of letting tests drive your design.',
    tags: ['Golang', 'TDD', 'Testing'],
    publishDate: '2025',
    readUrl: 'https://medium.com/@abhijith0807/test-driven-development-tdd-in-golang-a-hands-on-guide-to-writing-better-code-06f343be0a87',
  },
  {
    title: 'Understanding the Garbage Collector in Go (Golang)',
    excerpt:
      'An in-depth look at how Go\'s garbage collector works under the hood — covering the tri-color mark-and-sweep algorithm, GC pauses, and practical tips for writing GC-friendly Go code.',
    tags: ['Golang', 'Performance', 'Internals'],
    publishDate: '2025',
    readUrl: 'https://medium.com/@abhijith0807/understanding-the-garbage-collector-in-go-golang-ae65ad713a67',
  },
  {
    title: 'Technology Trends to Watch in 2025: The Future Is Here',
    excerpt:
      'An exploration of the most significant technology trends shaping 2025 — from the rise of AI agents and edge computing to the next wave of developer tooling and cloud-native innovation.',
    tags: ['Technology', 'Trends', 'AI'],
    publishDate: '2024',
    readUrl: 'https://medium.com/@abhijith0807/technology-trends-to-watch-in-2025-the-future-is-here-9fe7d31ee017',
  },
  {
    title: 'Building Robust RESTful APIs with Golang',
    excerpt:
      'A comprehensive guide to designing and building production-ready REST APIs in Go — covering routing, middleware, error handling, validation, and API versioning best practices.',
    tags: ['Golang', 'APIs', 'Backend'],
    publishDate: '2024',
    readUrl: 'https://medium.com/@abhijith0807/building-robust-restful-apis-with-golang-6309df96a200',
  },
  {
    title: 'Writing Effective Unit Tests in Golang: A Practical Guide',
    excerpt:
      'A practical deep-dive into unit testing in Go — from the testing package basics and table-driven tests to mocking, benchmarks, and writing tests that are actually maintainable.',
    tags: ['Golang', 'Testing', 'Best Practices'],
    publishDate: '2024',
    readUrl: 'https://medium.com/@abhijith0807/writing-effective-unit-tests-in-golang-a-practical-guide-0d24444769f6',
  },
  {
    title: 'Mastering Concurrency in Golang: Goroutines, Channels, and Synchronization',
    excerpt:
      'A thorough guide to Go\'s concurrency model — understanding goroutines, channels, select statements, and sync primitives to write safe, efficient, and idiomatic concurrent Go programs.',
    tags: ['Golang', 'Concurrency', 'Backend'],
    publishDate: '2024',
    readUrl: 'https://medium.com/@abhijith0807/mastering-concurrency-in-golang-goroutines-channels-and-synchronization-983f15974faf',
  },
  {
    title: 'Effective Error Handling in Golang: Best Practices',
    excerpt:
      'A guide to Go\'s philosophy of explicit error handling — covering idiomatic patterns, wrapping errors with context, sentinel errors, custom error types, and when to use panic vs. error returns.',
    tags: ['Golang', 'Best Practices', 'Backend'],
    publishDate: '2024',
    readUrl: 'https://medium.com/@abhijith0807/effective-error-handling-in-golang-best-practices-6857f3005437',
  },
  {
    title: 'Setting Up Your Golang Development Environment',
    excerpt:
      'A step-by-step guide to setting up a productive Go development environment — from installation and IDE configuration to writing and running your very first Go program.',
    tags: ['Golang', 'Getting Started', 'Development'],
    publishDate: '2024',
    readUrl: 'https://medium.com/@abhijith0807/setting-up-golang-development-environment-setup-ide-selection-and-writing-your-first-go-program-be657a08b668',
  },
  {
    title: 'Mastering Golang: A Comprehensive Beginner\'s Guide',
    excerpt:
      'A complete beginner\'s roadmap to Go — covering the language\'s core philosophy, syntax, types, control flow, and what makes Go a compelling choice for modern backend development.',
    tags: ['Golang', 'Getting Started', 'Backend'],
    publishDate: '2024',
    readUrl: 'https://medium.com/@abhijith0807/mastering-golang-a-comprehensive-beginners-guide-06d985f57069',
  },
  {
    title: 'Effortlessly Generate Golang REST API Services with API Service Generator',
    excerpt:
      'A hands-on walkthrough of using an API Service Generator to scaffold production-ready Go REST API services — saving hours of boilerplate setup so you can focus on business logic.',
    tags: ['Golang', 'APIs', 'Tools'],
    publishDate: '2024',
    readUrl: 'https://medium.com/@abhijith0807/effortlessly-generate-golang-rest-api-services-with-api-service-generator-f8d462405b0c',
  },
];
