export const en = {
  meta: {
    landingTitle: 'Seklio — Messaging that doesn’t need the internet',
    landingDescription:
      'Seklio is a serverless mesh messenger. Nearby phones connect over Bluetooth and Wi-Fi and relay end-to-end encrypted messages device to device. No servers, no accounts, no phone numbers.',
    faqTitle: 'FAQ — Seklio',
    faqDescription: 'Frequently asked questions about Seklio, the serverless mesh messenger.',
    privacyTitle: 'Privacy Policy — Seklio',
    privacyDescription: 'Seklio’s privacy policy: there are no servers, so there is nothing to collect.',
    supportTitle: 'Support — Seklio',
    supportDescription: 'Get help with Seklio: FAQ, bug reports, and contact.',
  },

  nav: {
    features: 'Features',
    howItWorks: 'How it works',
    faq: 'FAQ',
    support: 'Support',
    download: 'Get the beta',
  },

  hero: {
    badge: 'No internet required',
    title: 'Messaging that doesn’t need the internet.',
    subtitle:
      'Seklio connects nearby phones directly over Bluetooth and Wi-Fi, forming a mesh that carries your messages from device to device. No servers, no accounts, no phone numbers — and everything is end-to-end encrypted.',
    ctaIos: 'Join the iOS beta',
    ctaAndroid: 'Get the Android APK',
    note: 'Free · iOS public beta on TestFlight · Android coming soon',
  },

  comingSoon: 'Coming soon',

  how: {
    title: 'How it works',
    subtitle: 'Three ideas, no infrastructure.',
    steps: [
      {
        title: 'Phones find each other nearby',
        body:
          'Seklio discovers other phones around you over Bluetooth LE and local Wi-Fi. No SIM, no coverage, no setup — if you’re near each other, you’re connected.',
      },
      {
        title: 'Messages hop device to device',
        body:
          'Every phone running Seklio relays sealed envelopes onward. Friends beyond direct range are reached through the phones in between — that’s the mesh.',
      },
      {
        title: 'Only the recipient can read',
        body:
          'Messages are end-to-end encrypted before they leave your phone. The phones relaying them only ever see ciphertext — never your words.',
      },
    ],
  },

  features: {
    title: 'Built for privacy, made for people',
    subtitle: 'Everything a messenger needs — none of the infrastructure it usually costs.',
    items: [
      {
        icon: 'lock',
        title: 'End-to-end encrypted',
        body: 'Modern, proven cryptography — Ed25519 signatures, X25519 key agreement, ChaCha20-Poly1305 encryption — seals every message.',
      },
      {
        icon: 'id',
        title: 'No accounts, no numbers',
        body: 'Your identity is a keypair created on your phone. No phone number, no email, no sign-up — pick a handle and go.',
      },
      {
        icon: 'offline',
        title: 'Works without coverage',
        body: 'Crowded events, campuses, flights, remote trails, power cuts — wherever the network fails, the mesh keeps working.',
      },
      {
        icon: 'clock',
        title: 'Delivers later, too',
        body: 'If your friend is out of reach, your encrypted message waits and travels through phones that meet them — for up to 7 days.',
      },
      {
        icon: 'circles',
        title: 'Circles',
        body: 'Private encrypted groups with QR-code invites. Only invited members hold the key — relays can’t peek.',
        soon: true,
      },
      {
        icon: 'megaphone',
        title: 'Broadcasts',
        body: 'Say something to everyone in range at once — signed, so receivers always know it really came from you.',
      },
      {
        icon: 'photo',
        title: 'Photos, encrypted',
        body: 'Share photos end-to-end encrypted, with a Wi-Fi fast lane when you’re close and a patient chunked path when you’re not.',
      },
      {
        icon: 'qr',
        title: 'Verify in person',
        body: 'Scan a friend’s QR code to verify it’s really them. Verification is mutual, personal, and never touches a server.',
      },
    ],
  },

  privacy: {
    title: 'Nothing to collect. Nowhere to collect it.',
    body:
      'Seklio has no servers, no analytics, and no user database — the infrastructure that usually watches you simply doesn’t exist here.',
    points: [
      'Messages live only on your phone and the recipient’s.',
      'Your identity never leaves your device — it’s a key, not a profile.',
      'No tracking, no ads, no data sharing. There’s nothing to share.',
    ],
    link: 'Read the privacy policy',
  },

  download: {
    title: 'Try the beta',
    subtitle: 'Seklio is in public beta on both platforms.',
    iosTitle: 'iOS',
    iosBody: 'Public beta via TestFlight. Install the TestFlight app, then join with one tap.',
    iosCta: 'Join on TestFlight',
    androidTitle: 'Android',
    androidBody: 'The Android beta is on its way — same mesh, same open protocol.',
    androidCta: 'Download APK',
  },

  faq: {
    title: 'Frequently asked questions',
    subtitle: 'Everything people usually ask before joining the mesh.',
    items: [
      {
        q: 'Does Seklio need the internet?',
        a: 'No. Phones connect to each other directly over Bluetooth LE and local Wi-Fi. There are no servers involved at any point — Seklio works the same in airplane-mode Wi-Fi, on a shared network, or with no infrastructure at all.',
      },
      {
        q: 'How far does it reach?',
        a: 'A direct link reaches as far as Bluetooth or your local Wi-Fi network does. But messages don’t stop there: each phone relays them onward, so your real reach is the whole connected mesh — a message can hop through up to 7 phones (15 for broadcasts) to find its recipient.',
      },
      {
        q: 'Is it really private?',
        a: 'Every direct and group message is end-to-end encrypted with well-studied primitives (X25519 key agreement, ChaCha20-Poly1305 encryption, Ed25519 signatures). Phones that relay your messages only ever see ciphertext. And because there are no servers, there is no central place where metadata piles up.',
      },
      {
        q: 'What data do you collect?',
        a: 'None. There is no backend to send data to. The only thing that can ever leave your phone is an optional, encrypted diagnostics report that you create and send manually if you want to report a bug.',
      },
      {
        q: 'Can I message someone who isn’t nearby right now?',
        a: 'Yes. Your encrypted message is stored on your phone (and on phones that have a stake in delivering it) and handed over whenever a path to the recipient appears — for up to 7 days. Delivery is confirmed end-to-end, so your bubble tells you when it truly arrived.',
      },
      {
        q: 'Does it drain my battery?',
        a: 'Seklio is built around Bluetooth Low Energy, which is designed for all-day background use, and switches to Wi-Fi links when they’re available — faster and cheaper per byte. It’s comparable to other always-nearby apps, not to GPS-style drain.',
      },
      {
        q: 'Do I need a phone number or an email?',
        a: 'No. Your identity is a cryptographic keypair generated on your device. You pick a handle (like @deniz) — that’s all anyone sees, and you can change it anytime.',
      },
      {
        q: 'Is there an Android version?',
        a: 'Not yet — the Android beta is in the works and coming soon. iOS is in public beta on TestFlight now. The two platforms will speak the same open wire protocol, so they’ll join the same mesh.',
      },
      {
        q: 'What does Premium add?',
        a: 'Premium is coming soon, together with Circles. It will be for people who run Circles: creating encrypted groups and admin features like invites and member management. Messaging, joining Circles, broadcasts, photos — all of that stays free, forever.',
      },
      {
        q: 'Is my chat history backed up somewhere?',
        a: 'No. Your history exists only on your device. That’s a feature: nobody — including us — can hand it over, leak it, or mine it. Deleting the app deletes your data.',
      },
    ],
  },

  privacyPage: {
    title: 'Privacy Policy',
    updated: 'Last updated: July 17, 2026',
    sections: [
      {
        h: 'The short version',
        ps: [
          'Seklio has no servers and no user accounts. We do not collect, store, process, or share any personal data — the infrastructure to do so does not exist.',
          'Your messages travel directly between phones, end-to-end encrypted, and are stored only on the devices involved.',
        ],
      },
      {
        h: 'What we don’t collect',
        ps: [
          'We do not collect your name, phone number, email address, contacts, location, message content, metadata, usage analytics, advertising identifiers, or anything else. Seklio ships with no analytics or tracking SDKs.',
          'There is no registration and no login. Your identity in the app is a cryptographic keypair generated on your device; it never leaves it.',
        ],
      },
      {
        h: 'What stays on your device',
        ps: [
          'Your profile (handle, avatar, optional birth-year attestation), your conversations, your keys, and your settings are stored locally on your phone, protected by your device’s security (Keychain / Keystore).',
          'Messages you exchange are also stored on the recipients’ devices, as with any messenger. Encrypted copies of undelivered messages may temporarily sit on relaying phones in the mesh — those phones cannot read them.',
        ],
      },
      {
        h: 'Diagnostics reports (optional, manual)',
        ps: [
          'If you choose to report a bug, the app can create a diagnostics file. It contains technical logs only — never message content, display names, or full identifiers — and it is encrypted on your phone so that only the developer can open it.',
          'You send this file yourself (for example by email). Nothing is ever transmitted automatically.',
        ],
      },
      {
        h: 'Purchases',
        ps: [
          'Premium purchases are processed entirely by Apple (App Store) or the store you bought the app through. We never see your payment details. Entitlement checks happen on your device.',
        ],
      },
      {
        h: 'Beta programs',
        ps: [
          'If you join the iOS beta via TestFlight, Apple collects limited beta-program data (such as crash logs and basic device info) under Apple’s own terms and privacy policy. The Android beta APK is distributed via GitHub; downloading it is subject to GitHub’s terms.',
        ],
      },
      {
        h: 'Children',
        ps: [
          'Seklio includes age-appropriate safeguards: photo features are restricted to adult users based on an on-device age attestation. No age data leaves the device.',
        ],
      },
      {
        h: 'Changes to this policy',
        ps: [
          'If this policy changes, the updated version will be published on this page with a new “last updated” date.',
        ],
      },
      {
        h: 'Contact',
        ps: ['Questions about privacy? Write to {email}.'],
      },
    ],
  },

  supportPage: {
    title: 'Support',
    intro: 'Stuck, found a bug, or just curious? Here’s how to get help.',
    sections: [
      {
        h: 'Start with the FAQ',
        ps: ['Most questions — range, battery, privacy, offline delivery — are answered in the {faq}.'],
      },
      {
        h: 'Report a bug from inside the app',
        ps: [
          'The best bug reports come from the app itself: open Profile → Diagnostics → Report a bug. This creates an encrypted diagnostics file (technical logs only, never message content) and attaches it to an email for you.',
          'If the app crashed, it will offer to send a report on the next launch.',
        ],
      },
      {
        h: 'Contact',
        ps: [
          'Email us anytime at {email}. For iOS beta feedback you can also use TestFlight’s built-in “Send Beta Feedback”.',
        ],
      },
    ],
  },

  langNames: { en: 'English', tr: 'Türkçe' },

  footer: {
    tagline: 'Serverless mesh messaging. No accounts, no servers — just phones helping phones.',
    product: 'Product',
    resources: 'Resources',
    legal: 'Privacy & Support',
    language: 'Language',
    rights: '© 2026 Seklio. All rights reserved.',
  },

  notFound: {
    title: 'Page not found',
    body: 'This page doesn’t exist — maybe it hopped one relay too far.',
    cta: 'Back to the homepage',
  },
} as const;

export type Dict = typeof en;
