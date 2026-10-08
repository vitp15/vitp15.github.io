// Single source of truth for the CV: the web page (/cv/) and the PDF
// (scripts/cv-pdf.mjs) both render from this file.

export const person = {
  name: 'Vadim Plămădeală',
  asciiName: 'Vadim Plamadeala',
  title: 'Full-Stack Software Engineer',
  location: 'Romania',
  phone: '+40 771 155 169',
  email: 'vitp.work@gmail.com',
  linkedin: 'linkedin.com/in/vadim-plamadeala',
  github: 'github.com/vitp15',
  site: 'vitp15.github.io',
};

export const summary =
  'Full-stack engineer with a Computer Science degree, writing production software since 2024 and shipping ' +
  'projects since high school (2020). I can take a problem from the first conversation to production: choose the ' +
  'stack, design the architecture and the CI/CD, implement and ship. At Colete-Online I develop and maintain the ' +
  'shipping integrations for four e-commerce platforms and work on the Angular and Node.js platform behind them. ' +
  'On my own time I design, build and publish mobile apps and games for Android and iOS (Flutter, Godot). ' +
  'Comfortable moving between Java, TypeScript, Python, PHP and C++/embedded.';

export type Job = {
  role: string;
  company: string;
  /** Company website, shown as a link on the site only (never in the PDF). */
  url?: string;
  place: string;
  start: string;
  end: string;
  blurb?: string;
  bullets: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    role: 'Full-Stack Software Engineer',
    company: 'Colete-Online',
    url: 'https://www.colete-online.ro',
    place: 'Bucharest, Romania',
    start: 'Jul 2025',
    end: 'Present',
    blurb:
      'Parcel-delivery platform for online shops: couriers, lockers and e-commerce integrations.',
    bullets: [
      'Develop and maintain the shipping modules for WooCommerce, PrestaShop, Magento 2 and OpenCart and the shared PHP library behind them: pickup-point and locker selection on an embeddable map widget (TypeScript), address autocomplete, cash on delivery, AWB generation, multi-currency pricing.',
      'Full-stack work on the main platform (Angular, Node.js, TypeScript, Prisma, MySQL, Redis): public order and price API, shipping-point endpoints, API-key management, Redis pub/sub cache invalidation, payments and subscriptions.',
      'Set up CI/CD across the repositories: GitHub Actions on self-hosted runners, Playwright end-to-end suites with nightly runs over several platform versions, release packaging.',
      'Conducted technical interviews for the 2026 interns and take part in infrastructure decisions.',
      'Prototyped a parcel-locker scanning station in Python: camera capture, laser-line detection to measure parcels, tray and arm motion control, kiosk UI on a portrait touchscreen.',
      'C++ and embedded work on a real helicopter project.',
    ],
    stack: ['TypeScript', 'Angular', 'Node.js', 'PHP', 'Prisma', 'MySQL', 'Redis', 'Docker', 'Playwright', 'GitHub Actions', 'Python', 'C++'],
  },
  {
    role: 'Software Engineer',
    company: 'BBMM Software',
    url: 'https://www.bbmmsoftware.com',
    place: 'Remote',
    start: 'Apr 2025',
    end: 'Sep 2025',
    blurb: 'Small team building a web product for GoAhead Ventures, a US client.',
    bullets: [
      'Full-stack development: React front end, FastAPI (Python) services and SQL; Git-based CI/CD and direct contact with the client on scope and delivery.',
    ],
    stack: ['React', 'FastAPI', 'Python', 'SQL', 'CI/CD'],
  },
  {
    role: 'Freelance Mobile Developer',
    company: 'Self-employed',
    place: 'Remote',
    start: 'Oct 2024',
    end: 'Apr 2025',
    bullets: [
      'Sona: Android app that detects car malfunctions from engine sound, with a Python inference server for the ML model deployed on Google Cloud with Docker and GitHub Actions.',
      'Biblia Noul Testament audio: audio Bible app shipped on both Android (Java) and iOS (Swift).',
    ],
    stack: ['Android', 'Java', 'Swift', 'Python', 'Machine Learning', 'GCP', 'Docker'],
  },
];

export type Product = {
  name: string;
  slug: string;
  kind: string;
  line: string;
  tech: string;
};

export const productsIntro =
  'Mobile apps and games for Android and iOS, published under the VitpApps name as a solo developer: product ' +
  'design, code, CI/CD to both stores, store listings in 18 languages, monetisation and legal compliance (GDPR, ' +
  'App Tracking Transparency, data-deletion flows).';

export const products: Product[] = [
  {
    name: 'Solvyx',
    slug: 'solvyx',
    kind: 'Puzzle app',
    line: 'Eight logic puzzles with seed-generated levels, a daily challenge, global leaderboards and asynchronous duels opened through deep links.',
    tech: 'Flutter, Drift (SQLite), Supabase, Android App Links and iOS Universal Links, AdMob, in-app purchases.',
  },
  {
    name: 'Naova',
    slug: 'naova',
    kind: 'Health tracker',
    line: 'Migraine and cycle self-management diary: attack logging in two taps, pattern insights, PDF report for the doctor, encrypted backup. Offline-first.',
    tech: 'Flutter, SQLite, RevenueCat subscriptions, PDF generation, 18 languages.',
  },
  {
    name: 'Huglet',
    slug: 'huglet',
    kind: 'Couples widget',
    line: 'Drawings and notes delivered to a partner’s home-screen widget, recorded haptic touches and, on Android, remote wallpaper, with consent and quiet hours enforced server-side.',
    tech: 'Flutter with native widgets (WidgetKit, Android AppWidget), Supabase, Firebase Cloud Messaging.',
  },
  {
    name: 'MoneyManager',
    slug: 'moneymanager',
    kind: 'Finance app',
    line: 'Expense tracker with budgets, recurring bills, 150+ currencies with live rates, reports and cloud sync. First version in Java and Firebase on Google Play; second version rebuilt in Flutter with local-first sync, shared spaces for families and AI-assisted capture of transactions from bank notifications.',
    tech: 'Flutter, Postgres with trigger-maintained totals, Firebase (v1), 18 languages.',
  },
  {
    name: 'Sliceward',
    slug: 'sliceward',
    kind: 'Puzzle game',
    line: 'A split-screen puzzle about dimensions: move a knife through an N-dimensional world above, solve the (N−1)-dimensional slice below, from 0D to 4D. 900 hand-checked levels.',
    tech: 'Godot 4, GDScript, headless property tests, deterministic screenshot and trailer pipeline.',
  },
  {
    name: 'Impossible Taxi',
    slug: 'impossible-taxi',
    kind: 'Puzzle game',
    line: 'Perspective-illusion puzzle: a taxi that cannot turn crosses Penrose-style worlds; roads that look connected on screen are connected. Deterministic physics verified by property-based and fuzz test suites.',
    tech: 'Godot 4, GDScript, custom perspective-alignment engine, AdMob, in-app purchases.',
  },
  {
    name: 'Imnuri Tineret Cahul',
    slug: 'imnuri-tineret-cahul',
    kind: 'Hymn book app, 2021',
    line: 'My first published app, written in high school and still on Google Play: the hymn book of the youth choir in Cahul with lyrics by category, sheet music as PDF and downloadable recordings.',
    tech: 'Android, Java.',
  },
];

export const education = [
  {
    degree: 'BSc in Computer Science',
    school: 'Faculty of Automatic Control and Computer Science, National University of Science and Technology Politehnica Bucharest',
    start: '2022',
    end: '2026',
    notes:
      'Coursework: algorithms, operating systems, parallel and distributed algorithms, networks, cloud and microservices (Docker Swarm, Kubernetes), security, machine learning.',
  },
  {
    degree: 'Mathematics and Computer Science profile',
    school: 'Ioan Vodă Theoretical High School, Cahul, Republic of Moldova',
    start: '2018',
    end: '2022',
    notes: '',
  },
];

export type OtherProject = { name: string; line: string; url: string };

export const otherProjects: OtherProject[] = [
  { name: 'GuessWordGame', line: 'Telegram bot with a word-guessing game (Python).', url: 'https://github.com/vitp15/guess-word-game-telbot' },
  { name: 'Physics simulations for YouTube Shorts', line: 'Bouncing-ball and collision animations rendered in Python, plus a MIDI bouncing-square playground.', url: 'https://github.com/vitp15/collisionShow' },
  { name: 'LogoSimilarity', line: 'Unsupervised clustering of company logos by visual similarity (Python).', url: 'https://github.com/vitp15/LogoSimilarity' },
  { name: 'SnakeGame', line: 'Snake played inside the file explorer (Python).', url: 'https://github.com/vitp15/SnakeGame' },
  { name: 'RoomReserve', line: 'Microservice backend on Docker Swarm: Nginx gateway, Keycloak, Prometheus and Grafana (university).', url: '' },
  { name: 'Systems coursework', line: 'Process scheduler in Rust, asynchronous web server and memory allocator in C, Halite game bot in C++ (university).', url: '' },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'PHP', 'Python', 'Java', 'C/C++', 'Rust', 'Dart', 'Swift', 'GDScript', 'SQL'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'Prisma', 'MySQL', 'PostgreSQL', 'Redis', 'REST APIs', 'FastAPI', 'Django', 'Supabase', 'Firebase'] },
  { group: 'Web, e-commerce', items: ['Angular', 'React', 'Vite', 'HTML/CSS', 'WordPress/WooCommerce', 'PrestaShop', 'Magento 2', 'OpenCart'] },
  { group: 'Mobile and games', items: ['Flutter', 'Android (Java)', 'iOS (Swift)', 'Godot 4', 'home-screen widgets', 'push notifications', 'in-app purchases (StoreKit 2, Play Billing, RevenueCat)', 'AdMob'] },
  { group: 'DevOps and quality', items: ['Docker', 'Docker Compose/Swarm', 'Kubernetes', 'GitHub Actions', 'self-hosted runners', 'Codemagic', 'Xcode Cloud', 'Google Cloud', 'Playwright', 'Sentry'] },
  { group: 'Practices', items: ['architecture and stack decisions', 'CI/CD design', 'technical interviews', 'code review', 'domain-driven design', 'dependency injection', 'property-based testing', 'AI-assisted development (Claude Code)'] },
];

export const languages = [
  { name: 'Romanian', level: 'native' },
  { name: 'Russian', level: 'fluent' },
  { name: 'English', level: 'fluent' },
];
