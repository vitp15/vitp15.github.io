// Every app I have published or am about to. This file feeds the home page,
// /apps/, each /<slug>/ page, the support and legal pages, the URL checklist
// and the GitHub profile README. Counts on the site are derived from it, so
// adding an app here is the only edit needed.
// Store buttons only render when `live` is true, so a link never 404s.

export type Store = { url: string; live: boolean };

export type App = {
  slug: string;
  name: string;
  storeName: string;
  tagline: string;
  description: string;
  bullets: string[];
  stack: string[];
  platforms: ('Android' | 'iOS')[];
  languages: number;
  since: number;
  kind: 'app' | 'game';
  status: 'live' | 'beta' | 'soon';
  statusLine: string;
  color: string;
  colorDark: string;
  tint: string;
  tintDark: string;
  android: Store;
  ios: Store;
  shots: number;
  legal: { slug: string; title: string }[];
};

const PLAY = (id: string) => `https://play.google.com/store/apps/details?id=${id}`;
const APPSTORE = (id: string) => `https://apps.apple.com/app/id${id}`;
const LEGAL = [
  { slug: 'privacy', title: 'Privacy Policy' },
  { slug: 'terms', title: 'Terms & Conditions' },
  { slug: 'data-deletion', title: 'Delete Account and Data' },
];
const BOTH: App['platforms'] = ['Android', 'iOS'];

export const apps: App[] = [
  {
    slug: 'solvyx',
    name: 'Solvyx',
    storeName: 'Solvyx: Logic Puzzles',
    tagline: 'Eight logic puzzles. One calm app.',
    description:
      'Crowns, Sudoku, Flow, Duo, Shikaku, Bonds, Equate and Blend, each with five difficulty steps that add reasoning, not grid size. Levels are generated from a seed, so everyone solves the same daily puzzle and the leaderboard compares like with like.',
    bullets: [
      'A daily challenge identical for every player, with streaks and a global leaderboard.',
      'Solvy Coach explains the next forced move and why it is forced. Every level is solvable by logic alone.',
      'Asynchronous duels with friends through share links that open straight in the app.',
      'A cognitive canvas with five axes: speed, logic, focus, efficiency and calm.',
    ],
    stack: ['Flutter', 'Dart', 'Drift (SQLite)', 'Supabase', 'Android App Links', 'iOS Universal Links', 'AdMob', 'In-app purchases'],
    platforms: BOTH,
    languages: 18,
    since: 2026,
    kind: 'app',
    status: 'beta',
    statusLine: 'In closed testing on Google Play and TestFlight. Public release soon.',
    color: '#b98a12',
    colorDark: '#f2c14e',
    tint: '#fbf1d6',
    tintDark: '#2a2740',
    android: { url: PLAY('com.vitpapps.solvyx'), live: false },
    ios: { url: APPSTORE('6790561356'), live: false },
    shots: 8,
    legal: LEGAL,
  },
  {
    slug: 'naova',
    name: 'Naova',
    storeName: 'Naova: Migraine & Period Diary',
    tagline: 'Log a migraine in seconds. See your own patterns.',
    description:
      'A self-management diary for migraine and the menstrual cycle, built for the moment of an attack: Quick Save logs it in two taps, details can wait. Over time Naova shows patterns in your own data and prepares a clean report for your doctor. It is a wellness tool, not a medical device.',
    bullets: [
      'Quick Save: two taps at 3 a.m. with your eyes half closed. Fill in the rest later.',
      'Cycle and hormonal view next to your attacks, the part most migraine apps leave out.',
      'A PDF report for the doctor and CSV export of everything you logged.',
      'Offline-first with encrypted backup. No ads. Designed for photosensitivity: no pure white, no flashes.',
    ],
    stack: ['Flutter', 'Dart', 'SQLite', 'RevenueCat', 'PDF generation', 'Encrypted backup'],
    platforms: BOTH,
    languages: 18,
    since: 2026,
    kind: 'app',
    status: 'beta',
    statusLine: 'In closed testing on Google Play and TestFlight. Public release soon.',
    color: '#9c5c7c',
    colorDark: '#cb8fad',
    tint: '#f6e9ef',
    tintDark: '#32222c',
    android: { url: PLAY('com.vitpapps.naova'), live: false },
    ios: { url: APPSTORE('6789275954'), live: false },
    shots: 9,
    legal: LEGAL,
  },
  {
    slug: 'huglet',
    name: 'Huglet',
    storeName: 'Huglet: Couples Widget',
    tagline: 'Draw something. It lands on their home screen.',
    description:
      'A small app for two people. Send a drawing or a note to your person’s home-screen widget, send a touch they can feel and, on Android, change their wallpaper. The person receiving decides what you may send, sets daily limits and quiet hours, and can pause or block at any time. For adults, 18 and older.',
    bullets: [
      'The canvas is exactly the size of their widget. Press send and it appears on their screen.',
      'Recorded touches play back as vibration patterns, so a tap feels like your tap.',
      'Remote wallpaper on Android, with permission. iPhone limits are stated plainly in the app.',
      'Consent, limits and quiet hours are enforced on the server and are always free.',
    ],
    stack: ['Flutter', 'Dart', 'Supabase', 'Firebase Cloud Messaging', 'WidgetKit', 'Android AppWidget', 'AdMob', 'In-app purchases'],
    platforms: BOTH,
    languages: 18,
    since: 2026,
    kind: 'app',
    status: 'beta',
    statusLine: 'In testing. Public release on Google Play and the App Store soon.',
    color: '#c7485f',
    colorDark: '#f0899c',
    tint: '#fbe1e6',
    tintDark: '#3a2129',
    android: { url: PLAY('com.vitpapps.huglet'), live: false },
    ios: { url: APPSTORE('6790552584'), live: false },
    shots: 7,
    legal: [...LEGAL, { slug: 'child-safety', title: 'Child Safety Standards' }],
  },
  {
    slug: 'moneymanager',
    name: 'MoneyManager',
    storeName: 'MoneyManager: Expense Tracker',
    tagline: 'Expenses, budgets and 150+ currencies, in sync.',
    description:
      'Track expenses and income in seconds, set monthly budgets linked to categories, keep accounts in different currencies with live rates, and see where the money goes in reports and forecasts. The first version shipped on Google Play in Java with Firebase sync. The second is a Flutter rewrite for Android and iOS with local-first sync, shared spaces for families and AI-assisted capture of transactions from bank notifications.',
    bullets: [
      'Shared spaces: a family or a couple keeps one budget, with per-member permissions.',
      'Transactions captured from bank notifications and confirmed with one tap, so nothing is typed twice.',
      'Budgets that follow categories, with auto-allocation of a share of each income.',
      'Accounts in 150+ currencies, converted on transfer with live exchange rates; reports, charts and a month-end forecast.',
    ],
    stack: ['Flutter', 'Dart', 'PostgreSQL', 'Local-first sync', 'Java (v1)', 'Firebase (v1)'],
    platforms: BOTH,
    languages: 18,
    since: 2025,
    kind: 'app',
    status: 'live',
    statusLine: 'Version 1 is on Google Play. Version 2, for Android and iOS, is in development.',
    color: '#1e8f69',
    colorDark: '#5fd3a6',
    tint: '#e2f4ec',
    tintDark: '#1d3330',
    android: { url: PLAY('com.vitpapps.moneymanager'), live: true },
    ios: { url: '', live: false },
    shots: 8,
    legal: LEGAL,
  },
  {
    slug: 'sliceward',
    name: 'Sliceward',
    storeName: 'Sliceward: 4D Puzzle',
    tagline: 'A puzzle about dimensions, from a point to 4D.',
    description:
      'The screen is split in two. Above, a world in N dimensions and a golden knife that slices it. Below, the slice itself, in N−1 dimensions, where your character lives. Move the knife and hidden rooms, tunnels and the exit appear in the slice, like a scan. The same mechanic takes you from a point on a line all the way to a four-dimensional world.',
    bullets: [
      'Six chapters, 0D to 4D, 150 levels each, every one checked by hand.',
      'The Flatland moment: a sphere passing through a plane is a circle that grows and shrinks.',
      'In 4D the slice is a full 3D world. Twin views and a w-axis make the fourth dimension playable.',
      'Calm by design: no timer, no pay-to-win, one-handed portrait play.',
    ],
    stack: ['Godot 4', 'GDScript', 'Headless property tests', 'Deterministic trailer pipeline', 'AdMob', 'In-app purchases'],
    platforms: BOTH,
    languages: 18,
    since: 2026,
    kind: 'game',
    status: 'soon',
    statusLine: 'Coming to Google Play and the App Store.',
    color: '#b8860b',
    colorDark: '#ffd94d',
    tint: '#f7ecc8',
    tintDark: '#2a2638',
    android: { url: PLAY('com.vitpapps.sliceward'), live: false },
    ios: { url: '', live: false },
    shots: 8,
    legal: LEGAL,
  },
  {
    slug: 'impossible-taxi',
    name: 'Impossible Taxi',
    storeName: 'Impossible Taxi: Illusions',
    tagline: 'If it looks connected, it is.',
    description:
      'A little taxi that cannot turn carries passengers through worlds of impossible beams. The only real control is the camera: rotate and tilt until two roads look like they touch on screen, and then they do. From above, heights collapse and the taxi lifts onto a road that was never there.',
    bullets: [
      'Drag to rotate the camera. When two roads look connected, drive across.',
      'Top view lifts the taxi onto roads above or below, but hides the gaps.',
      'Orange walls bounce the taxi; plain blocks wreck it; thin air drops it.',
      'Deterministic physics checked by property-based and fuzz test suites.',
    ],
    stack: ['Godot 4', 'GDScript', 'Custom perspective-alignment engine', 'Property-based tests', 'AdMob', 'In-app purchases'],
    platforms: BOTH,
    languages: 18,
    since: 2026,
    kind: 'game',
    status: 'soon',
    statusLine: 'Coming to Google Play and the App Store.',
    color: '#c2641a',
    colorDark: '#ffb24d',
    tint: '#fde9d6',
    tintDark: '#3a2a2a',
    android: { url: PLAY('com.vitpapps.impossibletaxi'), live: false },
    ios: { url: '', live: false },
    shots: 9,
    legal: LEGAL,
  },
  {
    slug: 'imnuri-tineret-cahul',
    name: 'Imnuri Tineret Cahul',
    storeName: 'Imnuri Tineret Cahul',
    tagline: 'The youth hymn book of Cahul, with lyrics, sheet music and recordings.',
    description:
      'My first published app, built in Java while still in high school and on Google Play since 2021. The hymn book of the youth choir in Cahul, Moldova: lyrics organised by category, sheet music as PDF and audio recordings you can download for offline use.',
    bullets: [
      'Lyrics by category, with fast navigation by number.',
      'Sheet music as PDF and recordings for every hymn, downloadable for offline use.',
      'Built in Java for Android; still maintained and still on Google Play.',
    ],
    stack: ['Android', 'Java'],
    platforms: ['Android'],
    languages: 1,
    since: 2021,
    kind: 'app',
    status: 'live',
    statusLine: 'On Google Play since 2021.',
    color: '#0e9aa0',
    colorDark: '#2ee8ef',
    tint: '#d9f6f7',
    tintDark: '#16303a',
    android: { url: PLAY('project.rew.imnuritineretcahul'), live: true },
    ios: { url: '', live: false },
    shots: 0,
    legal: [],
  },
];

export const bySlug = (slug: string) => apps.find((a) => a.slug === slug);

/** Figures shown on the home page, derived from the data above. */
export const figures = {
  apps: apps.length,
  live: apps.filter((a) => a.status === 'live').length,
  beta: apps.filter((a) => a.status === 'beta').length,
  soon: apps.filter((a) => a.status === 'soon').length,
  languages: Math.max(...apps.map((a) => a.languages)),
  platforms: [...new Set(apps.flatMap((a) => a.platforms))].length,
};
