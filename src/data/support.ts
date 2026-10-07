// Support page content per app. `a` is HTML (short, trusted, written here).
export type Faq = { q: string; a: string };
export type Support = { intro: string; feedbackNote?: string; faqs: Faq[] };

const dd = (slug: string) => `/vitp-apps-policies/${slug}/data-deletion`;

export const support: Record<string, Support> = {
  solvyx: {
    intro: 'Eight logic puzzles in one app. If something is broken, unclear, or just annoying, write to us. We read everything.',
    feedbackNote: 'You can also send feedback from inside the app: <strong>Settings → Send feedback</strong>. That attaches your app version and language automatically, which makes bugs much faster to fix.',
    faqs: [
      { q: 'Do I need an account?', a: 'No. Every game works offline with no account. An optional free account only adds the global leaderboard, friends and duels.' },
      { q: 'How do I delete my account and data?', a: `In the app: <strong>Settings → Account → Delete account and data</strong>. It removes your profile, scores, duels and friendships immediately. The same request can be made from the <a href="${dd('solvyx')}">data deletion page</a>.` },
      { q: 'I bought Solvyx Plus and it is not showing.', a: 'Open <strong>Settings → Restore purchases</strong>. Purchases follow your store account, so make sure you are signed in to the same Apple Account or Google account you bought with.' },
      { q: 'A puzzle looks unsolvable.', a: 'It is not. Every level is checked by a solver before it ships, and every one is solvable by logic alone, never by guessing. If you are stuck, Solvy Coach will explain the next forced move and why it is forced. If you still think a level is broken, send us the game, difficulty and level number.' },
      { q: 'Can I turn off the ads?', a: 'Yes. A one-time <strong>Remove ads</strong> purchase or a <strong>Solvyx Plus</strong> subscription removes them.' },
    ],
  },
  naova: {
    intro: 'Naova is a self-management diary for migraine and the menstrual cycle. It is not medical advice and it never diagnoses. If something is broken or unclear, write to us and tell us your phone model and what you were trying to do.',
    faqs: [
      { q: 'Do I need an account?', a: 'No. Naova works offline and your entries stay on your phone. Encrypted cloud backup (Naova Pro) is optional: turn it on in <strong>Settings → Backup &amp; restore</strong>.' },
      { q: 'How do I log an attack quickly?', a: 'Tap <strong>Quick save</strong> on the home screen, set how strong it is, and tap Save. It records the attack with the current time; add symptoms, triggers and medication later, when you feel better.' },
      { q: 'Does Naova predict attacks or tell me what to take?', a: 'No. Naova shows patterns in the data you logged, for example how often attacks fell on days with high stress or a given phase of your cycle. It does not predict, diagnose or recommend medication. Bring the report to your doctor and decide together.' },
      { q: 'How do I share my diary with my doctor?', a: 'Open <strong>Doctor report</strong>, choose the period and tap <strong>Export PDF</strong>. Naova Pro can also export all your data as CSV.' },
      { q: 'I subscribed to Naova Pro and it is not showing.', a: 'Open <strong>Settings → Naova Pro → Restore purchases</strong> while online. Subscriptions follow your Apple Account or Google account, so use the one you bought with.' },
      { q: 'How do I delete my data?', a: `Your entries live on your phone: deleting them in the app or uninstalling removes them. If you used cloud backup, open <strong>Settings → Backup &amp; restore</strong>, tap <strong>Disconnect</strong> and choose <strong>Delete backup</strong>, or follow the <a href="${dd('naova')}">data deletion page</a>.` },
    ],
  },
  huglet: {
    intro: 'We read every message. Write to us and tell us your phone model and what you were trying to do.',
    faqs: [
      { q: 'How do I connect with my person?', a: 'Open Huglet, choose to invite someone and share the link or the code. When they install and open it, you are connected. Invite codes expire after 7 days; make a new one if needed.' },
      { q: 'The widget does not update. What can I check?', a: 'Make sure Huglet has notifications and background activity allowed in your phone settings. Some phones (for example Xiaomi and a few others) stop apps in the background to save battery: allow Huglet to run in the background and disable battery optimisation for it. On iPhone, the system decides how often a widget refreshes, so there can be a delay.' },
      { q: 'Why can’t I change an iPhone’s wallpaper, or send a custom touch to an iPhone?', a: 'iOS does not allow apps to change the wallpaper, and it does not let an app play a custom vibration from the background. On iPhone, a touch plays when the person opens Huglet. Android supports both.' },
      { q: 'How do permissions, limits and blocking work?', a: 'The person receiving decides what you may send (widget, wallpaper, touches), daily limits and quiet hours, and can pause, disconnect or block you. This is enforced on our servers, and these safety controls are always free.' },
      { q: 'How do I report something I received?', a: 'Use the report option on the item in Huglet, or email us. We review reports and can remove content or accounts. You can also block the person at any time.' },
      { q: 'How do I restore my purchase or cancel Huglet Plus?', a: 'In Huglet, open the Plus screen and choose <strong>Restore purchases</strong>. To cancel a subscription, use your store account: Apple ID subscriptions on iPhone, or Google Play → Payments &amp; subscriptions on Android. Refunds are handled by Apple and Google under their policies.' },
      { q: 'Why do I see ads, and how do I remove them?', a: 'The free version shows a discreet ad while you draw. Huglet Plus removes all ads. You can change your ad choices any time in <strong>Settings → Privacy settings</strong>.' },
      { q: 'How do I delete my account and data?', a: `In the app: <strong>Settings → Account → Delete account</strong>. If you can no longer open the app, follow <a href="${dd('huglet')}">Delete your data</a>.` },
    ],
  },
  moneymanager: {
    intro: 'If a number looks wrong, a sync did not arrive or something is unclear, write to us. Include your phone model and, if you can, a screenshot.',
    faqs: [
      { q: 'Where is my data stored?', a: 'On your device first. When you sign in, your data is backed up and kept in sync with your other devices, so a new phone shows the same accounts, budgets and transactions after you sign in with the same account.' },
      { q: 'I changed phones. How do I get my data back?', a: 'Install MoneyManager and sign in with the same account you used before. Your data downloads automatically. If you never signed in, the data stayed only on the old phone.' },
      { q: 'How do budgets work?', a: 'A budget has a monthly amount and, optionally, linked expense categories. Expenses in those categories are counted against it automatically. You can also set a budget to receive a percentage of every income you add.' },
      { q: 'Can I keep accounts in different currencies?', a: 'Yes. Each account has its own currency, and transfers between accounts are converted with live exchange rates. Reports are shown in the currency you choose.' },
      { q: 'How do I delete my account and data?', a: `In the app: <strong>Settings → Account → Delete account</strong>. If you can no longer open the app, follow the <a href="${dd('moneymanager')}">data deletion page</a>.` },
    ],
  },
  sliceward: {
    intro: 'If something is broken, unclear, or a level feels unfair, write to us. We read everything.',
    faqs: [
      { q: 'How do I play?', a: '<ul><li>The top half shows the whole world and the yellow slice (the knife). The bottom half shows what the knife cuts: that is where your character lives.</li><li>Move the knife with the arrows next to the top half; move the character with the arrows next to the bottom half.</li><li>Solids are opaque from outside. Tunnels, rooms and the target are visible only in the slice. Sweeping the knife into a solid crushes the character: watch the bottom half.</li><li>In Shape levels there is no character: rotate and move the knife until the section fits between the two green outlines.</li></ul>' },
      { q: 'I bought "Remove ads" but still see ads', a: 'Open Settings and tap <strong>Restore purchase</strong> while online. The purchase is tied to your store account.' },
      { q: 'My progress disappeared', a: 'Progress is stored on the device and in your system backup. Reinstalling restores it only if the backup was on.' },
    ],
  },
  'impossible-taxi': {
    intro: 'If something is broken, unclear, or a level feels unfair, write to us. We read everything.',
    faqs: [
      { q: 'How do I play?', a: '<ul><li>The taxi only drives forward or backward. <strong>The camera is the puzzle</strong>: drag to rotate and tilt it.</li><li>When two roads look connected on screen, they are. Drive across. If they don’t look connected, the taxi falls.</li><li>Tilt all the way to the top view to "lift" the taxi onto a road above or below, but from above you cannot see the gaps.</li><li>Orange walls bounce the taxi; plain blocks wreck it.</li></ul>' },
      { q: 'I bought Pro but still see ads', a: 'Open Settings and tap <strong>Restore purchase</strong> while online. The purchase is tied to your store account.' },
      { q: 'My progress disappeared', a: 'Progress is stored on the device and in your system backup. Reinstalling restores it only if the backup was on.' },
    ],
  },
};
