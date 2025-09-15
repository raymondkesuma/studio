export const products = [
  {
    id: 'prod_001',
    name: 'Nexus Compute Engine',
    description: 'Scalable virtual machines for any workload, from small applications to large-scale enterprise systems.',
    price: '$50/mo',
    features: [
      {
        title: 'Auto-scaling',
        icon: 'TrendingUp',
      },
      {
        title: '99.99% Uptime SLA',
        icon: 'ShieldCheck',
      },
      {
        title: 'Global Network',
        icon: 'Globe',
      },
    ],
    useCases: ['Web hosting', 'Big data processing', 'Development & testing'],
    targetAudience: 'Enterprise businesses with high-performance computing needs.',
    keyFeatures: ['Live migration for VMs', 'Per-second billing', 'Custom machine types'],
    businessNeeds: ['Cost optimization', 'High availability', 'Infrastructure scalability'],
  },
  {
    id: 'prod_002',
    name: 'Helios Object Storage',
    description: 'Secure, durable, and highly-scalable object storage for your unstructured data.',
    price: '$0.026/GB',
    features: [
      {
        title: 'Data Lifecycle',
        icon: 'Archive',
      },
      {
        title: 'Versioning',
        icon: 'Copy',
      },
      {
        title: 'Multi-region',
        icon: 'Copy',
      },
    ],
    useCases: ['Data archiving', 'Backup and recovery', 'Rich media content'],
    targetAudience: 'Companies requiring long-term, secure data retention.',
    keyFeatures: ['Multiple storage classes', 'Object versioning to prevent accidental deletion', 'Server-side encryption'],
    businessNeeds: ['Data durability', 'Disaster recovery', 'Compliance and archiving'],
  },
  {
    id: 'prod_003',
    name: 'Quantum AI Platform',
    description: 'An end-to-end platform for building, deploying, and managing machine learning models at scale.',
    price: 'Contact Us',
    features: [
      {
        title: 'JupyterLab',
        icon: 'Cpu',
      },
      {
        title: 'TensorFlow/PyTorch',
        icon: 'BrainCircuit',
      },
      {
        title: 'Serverless Training',
        icon: 'Zap',
      },
    ],
    useCases: ['Predictive analytics', 'Natural language processing', 'Computer vision'],
    targetAudience: 'Data science teams and developers building AI applications.',
    keyFeatures: ['Managed training services', 'Hyperparameter tuning', 'Model deployment and monitoring'],
    businessNeeds: ['Accelerating ML development', 'Scalable training infrastructure', 'Simplified model deployment'],
  },
];

export const testimonials = [
  {
    id: 'test_001',
    quote: "ApexCloud's infrastructure has been a game-changer for our platform. The scalability and reliability are second to none, allowing us to grow without any hiccups.",
    author: 'Jane Doe',
    title: 'CTO, Quantum Inc.',
    company: 'Quantum Inc.',
    logoImageId: 'logo-quantum',
  },
  {
    id: 'test_002',
    quote: 'Migrating to ApexCloud was seamless. Their support team is exceptional, and the performance improvements we\'ve seen are remarkable. Highly recommended for any enterprise.',
    author: 'John Smith',
    title: 'Head of Engineering, Stellar Solutions',
    company: 'Stellar Solutions',
    logoImageId: 'logo-stellar',
  },
  {
    id: 'test_003',
    quote: "The Quantum AI Platform has accelerated our ML development cycle by 50%. It's a powerful, intuitive tool that has empowered our data science team to innovate faster.",
    author: 'Emily White',
    title: 'Lead Data Scientist, Apex Dynamics',
    company: 'Apex Dynamics',
    logoImageId: 'logo-apex',
  },
  {
    id: 'test_004',
    quote: 'We rely on Helios Object Storage for our critical data archives. The durability and security give us peace of mind, and the cost is incredibly competitive.',
    author: 'Michael Brown',
    title: 'Director of IT, Fusion Enterprises',
    company: 'Fusion Enterprises',
    logoImageId: 'logo-fusion',
  },
];
