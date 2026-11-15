import type { Slide } from '../../lib/types'

export const slides: Slide[] = [
  {
    type: 'cover',
    eyebrow: 'Staff In-Service · Privacy & Security',
    title: 'HIPAA Rules',
    titleLine2: '& Compliance',
    subtitle:
      'Protecting patient information, on paper, in person and on your laptop',
    badge: 'In-service presentation & staff reading material',
    address: '11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
  {
    type: 'intro',
    eyebrow: 'About This In-Service',
    title: "Why we're here, and what you'll learn",
    paragraphs: [
      "HIPAA protects the privacy of patient information, and this material applies to every Haloes Touch team member, contractors included.",
      'This in-service covers the HIPAA rules and the practical habits that keep patient information safe, at the office, in the field, and online.',
    ],
    note: 'This material covers the HIPAA rules and the practical habits that keep information safe. It applies to every Haloes Touch team member, contractors included.',
    objectivesHeading: 'By the end, you will be able to:',
    objectives: [
      'Explain what PHI is.',
      'Apply the Minimum Necessary Rule and know when PHI may be shared.',
      'Describe the three types of Security Rule safeguards.',
      'Use laptops, phones and email safely with PHI.',
      'Recognize a breach, report it, and understand the penalties.',
    ],
  },
  {
    type: 'cards',
    eyebrow: 'The Basics',
    title: "HIPAA is everyone's business",
    items: [
      {
        icon: 'Lock',
        title: 'Privacy Rule',
        body: 'Limits the use and sharing of PHI, and gives patients rights over their information.',
      },
      {
        icon: 'Shield',
        title: 'Security Rule',
        body: 'Requires safeguards to protect electronic PHI (ePHI).',
      },
      {
        icon: 'Bell',
        title: 'Breach Notification',
        body: 'Requires notifying patients, HHS, and sometimes the media, when a breach occurs.',
      },
      {
        icon: 'Gavel',
        title: 'Enforcement Rule',
        body: 'Sets out investigations and penalties for violations.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Privacy Rule',
    title: 'What is protected health information (PHI)?',
    items: [
      {
        icon: 'MessageCircle',
        title: 'Spoken',
        body: 'Information discussed out loud, in person or on the phone.',
      },
      {
        icon: 'Mic',
        title: 'Recorded',
        body: 'Audio or video recordings that include patient information.',
      },
      {
        icon: 'FileText',
        title: 'Paper',
        body: 'Printed notes, charts, faxes and mail.',
      },
      {
        icon: 'Laptop',
        title: 'Electronic',
        body: 'Information stored or sent through a computer, EMR or phone.',
      },
    ],
  },
  {
    type: 'icongrid',
    eyebrow: 'Privacy Rule',
    title: 'Examples of information that can identify a patient',
    items: [
      { icon: 'CheckCircle2', label: 'Name and address' },
      { icon: 'CheckCircle2', label: 'Date of birth' },
      { icon: 'CheckCircle2', label: 'Phone number and email' },
      { icon: 'CheckCircle2', label: 'Medical record number' },
      { icon: 'CheckCircle2', label: 'Social Security number' },
      { icon: 'CheckCircle2', label: "Physician's and clinical notes" },
      { icon: 'CheckCircle2', label: 'Billing information' },
      { icon: 'CheckCircle2', label: 'Photos of the patient' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Privacy Rule',
    title: 'Use, disclosure and the Minimum Necessary Rule',
    items: [
      {
        icon: 'Building2',
        title: 'Use',
        body: 'Sharing or looking at PHI inside our agency to do your job.',
      },
      {
        icon: 'Send',
        title: 'Disclosure',
        body: 'Sharing PHI outside our agency, with another party.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: "Patients' Rights",
    title: 'Patients have rights over their information',
    items: [
      {
        icon: 'FolderOpen',
        title: 'Access',
        body: 'Patients can see and get a copy of their own records.',
      },
      {
        icon: 'Ban',
        title: 'Some limits',
        body: 'A few situations allow limiting what is shared, such as psychotherapy notes.',
      },
      {
        icon: 'RefreshCw',
        title: 'Amendments',
        body: 'Patients can ask that incorrect information be corrected.',
      },
      {
        icon: 'FileText',
        title: 'Notice of Privacy Practices',
        body: 'Patients must be given a notice explaining how their PHI is used.',
      },
      {
        icon: 'ClipboardList',
        title: 'Accounting of disclosures',
        body: 'Patients can ask for a list of who their PHI was shared with.',
      },
      {
        icon: 'Repeat',
        title: 'Personal representative',
        body: 'A health care agent or guardian can exercise these rights for the patient.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Privacy Rule',
    title: 'When PHI may be shared without authorization',
    items: [
      {
        icon: 'Building2',
        title: 'Treatment, payment and operations',
        body: "Sharing PHI to coordinate the patient's care, bill for services, or run the agency.",
      },
      {
        icon: 'Landmark',
        title: 'Public health and disasters',
        body: 'Reporting to public health authorities and emergency responders.',
      },
      {
        icon: 'Syringe',
        title: 'Disease control',
        body: 'Reporting required for communicable disease tracking.',
      },
      {
        icon: 'UserX',
        title: 'Reporting abuse',
        body: 'Reporting suspected abuse, neglect or domestic violence as required by law.',
      },
      {
        icon: 'Shield',
        title: 'Product safety & oversight',
        body: 'Sharing with the FDA or health oversight agencies.',
      },
      {
        icon: 'Gavel',
        title: 'Law enforcement',
        body: 'Sharing in response to a valid court order, subpoena or legal requirement.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Privacy Rule',
    title: 'When written authorization is required',
    items: [
      {
        icon: 'FileText',
        title: 'Marketing',
        body: "Using a patient's PHI to market products or services requires their written okay.",
      },
      {
        icon: 'DollarSign',
        title: 'Sale of PHI',
        body: "Selling a patient's PHI is not allowed without their written authorization.",
      },
      {
        icon: 'BookOpen',
        title: 'Psychotherapy notes',
        body: 'These require separate, specific authorization before they can be shared.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'In the Field',
    title: 'Everyday privacy in hospice care',
    items: [
      {
        icon: 'MessageCircle',
        title: 'Watch your voice',
        body: "Don't discuss patients where others can overhear, in hallways, elevators or waiting rooms.",
      },
      {
        icon: 'Phone',
        title: 'Verify callers',
        body: "Confirm who you're speaking with before sharing any information over the phone.",
      },
      {
        icon: 'Users',
        title: 'Neighbors and visitors',
        body: "Be mindful of what can be seen or heard by neighbors and visitors in a patient's home.",
      },
      {
        icon: 'Mail',
        title: 'Voicemail and messages',
        body: 'Leave the minimum information needed in voicemails and text messages.',
      },
      {
        icon: 'Hash',
        title: 'Social media',
        body: 'Never post about patients, even without using their name.',
      },
      {
        icon: 'Printer',
        title: 'Faxes and mail',
        body: 'Double-check fax numbers and addresses before sending PHI.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Security Rule',
    title: 'Three types of safeguards protect ePHI',
    items: [
      {
        icon: 'Network',
        title: 'Administrative',
        body: 'Policies, training and oversight that manage how ePHI is accessed and protected.',
      },
      {
        icon: 'DoorClosed',
        title: 'Physical',
        body: 'Protecting the devices, offices and storage places where ePHI lives.',
      },
      {
        icon: 'Fingerprint',
        title: 'Technical',
        body: 'The technology and controls that protect ePHI on systems and networks.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Security Rule',
    title: 'Administrative and physical safeguards',
    items: [
      {
        icon: 'Network',
        title: 'Administrative',
        body: 'Leaders and the HIPAA Security Officer set rules for who can access ePHI, including limited access for business associates and subcontractors, with systems to detect, correct and prevent breaches, plans for responding to breaches and protecting data in emergencies, and ongoing audits and staff training.',
      },
      {
        icon: 'DoorClosed',
        title: 'Physical',
        body: 'Protect computers, equipment and storage places, limit access to authorized people only, lock offices and file drawers, keep a clean desk, and pick up printouts right away, shredding PHI rather than placing it in regular trash.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Security Rule',
    title: 'Technical safeguards',
    items: [
      {
        icon: 'Lock',
        title: 'Access controls',
        body: 'Limiting who can open or edit ePHI, based on their role.',
      },
      {
        icon: 'Fingerprint',
        title: 'Authentication',
        body: 'Confirming a user is who they say they are before granting access.',
      },
      {
        icon: 'BarChart3',
        title: 'Monitoring and audit logs',
        body: 'Recording which records each user opens and when.',
      },
      {
        icon: 'PenLine',
        title: 'Digital signatures',
        body: 'Verifying the authenticity of electronic documents and records.',
      },
      {
        icon: 'Ban',
        title: 'Virus protection',
        body: 'Software that guards devices against malware and viruses.',
      },
      {
        icon: 'Lock',
        title: 'Encryption',
        body: 'Scrambling data so it is unreadable without the proper key.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Laptop & Device Safety',
    title: 'Your laptop in patients’ homes and on the road',
    items: [
      {
        icon: 'Lock',
        title: 'Lock it every time',
        body: 'Lock the screen or log out any time you step away, even for a minute.',
      },
      {
        icon: 'EyeOff',
        title: 'Guard your screen',
        body: "Position your screen so it can't be seen by others nearby.",
      },
      {
        icon: 'Users',
        title: 'Work use only',
        body: 'Use your work laptop for work only, not personal browsing or accounts.',
      },
      {
        icon: 'Car',
        title: 'Never leave it in sight',
        body: 'Never leave a laptop visible in a car or unattended in public.',
      },
      {
        icon: 'ClipboardList',
        title: 'Log out of the EMR',
        body: 'Always log out of the EMR when you finish, rather than just closing the window.',
      },
      {
        icon: 'RefreshCw',
        title: 'Keep it updated',
        body: 'Install updates promptly; they often patch security vulnerabilities.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Laptop & Device Safety',
    title: 'Passwords and logins',
    items: [
      {
        icon: 'KeyRound',
        title: 'Use a passphrase',
        body: 'Choose a long, unique passphrase rather than a simple password.',
      },
      {
        icon: 'Ban',
        title: 'Never share it',
        body: 'Never share your password with anyone, including coworkers.',
      },
      {
        icon: 'Fingerprint',
        title: 'Use multi-factor sign-in',
        body: 'Enable multi-factor authentication wherever it is offered.',
      },
      {
        icon: 'EyeOff',
        title: "Don't write it down",
        body: "Don't write your password on a sticky note or leave it somewhere visible.",
      },
      {
        icon: 'RefreshCw',
        title: 'Change it when needed',
        body: 'Change your password promptly if you suspect it was exposed.',
      },
      {
        icon: 'UserCheck',
        title: 'Use your own account',
        body: 'Never log in under someone else’s account, or let anyone use yours.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Laptop & Device Safety',
    title: 'Wi-Fi, storage and files',
    items: [
      {
        icon: 'Wifi',
        title: 'Be careful on public Wi-Fi',
        body: 'Avoid accessing PHI over unsecured public Wi-Fi networks.',
      },
      {
        icon: 'Server',
        title: 'Keep PHI in approved systems',
        body: 'Store PHI only in agency-approved systems, never personal cloud storage.',
      },
      {
        icon: 'CloudOff',
        title: 'No personal accounts',
        body: 'Never use personal email, drives or accounts to store or send PHI.',
      },
      {
        icon: 'Usb',
        title: 'Avoid USB drives',
        body: 'Avoid copying PHI onto USB drives or other removable media.',
      },
      {
        icon: 'Download',
        title: 'Install nothing unapproved',
        body: 'Don’t install unapproved apps or software on agency devices.',
      },
      {
        icon: 'Printer',
        title: 'Limit printing',
        body: 'Print PHI only when necessary, and dispose of it securely.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Laptop & Device Safety',
    title: 'Email and phishing',
    items: [
      {
        icon: 'Fish',
        title: 'Warning signs of phishing',
        body: 'Be alert to an urgent or threatening tone, a request for your password or to "verify" your login, unexpected attachments or links, a sender address that doesn’t quite match, or offers that are too good to be true.',
      },
      {
        icon: 'Mail',
        title: 'Safe email habits',
        body: "Don't click: verify the sender by phone, report suspicious email to your supervisor or IT, send PHI only through approved secure or encrypted email, double-check every recipient, and keep PHI out of subject lines, never forwarding it to a personal email.",
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Laptop & Device Safety',
    title: 'Phones, texts and photos',
    items: [
      {
        icon: 'Phone',
        title: 'Lock your phone',
        body: 'Always use a passcode or biometric lock on any device with PHI access.',
      },
      {
        icon: 'MessageCircle',
        title: 'No PHI by regular text',
        body: 'Never send PHI through regular, unencrypted text messages.',
      },
      {
        icon: 'Camera',
        title: 'Photos with care',
        body: "Never photograph a patient or their records without following agency policy.",
      },
      {
        icon: 'Video',
        title: 'Video calls',
        body: 'Use approved platforms, and be mindful of who can see or hear a video call.',
      },
    ],
  },
  {
    type: 'steps',
    eyebrow: 'Laptop & Device Safety',
    title: 'If your laptop or phone is lost or stolen',
    items: [
      {
        icon: 'Flag',
        title: 'Report immediately',
        body: 'Tell your supervisor and the Privacy Officer right away, even if you think it will turn up.',
      },
      {
        icon: 'Lock',
        title: 'Lock or wipe',
        body: 'IT can lock or remotely wipe the device to protect any PHI on it.',
      },
      {
        icon: 'Gavel',
        title: 'Police report',
        body: 'File a police report for a lost or stolen device.',
      },
      {
        icon: 'HelpCircle',
        title: 'Help assess',
        body: 'Help the Privacy Officer assess what information may have been exposed.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Breach Notification',
    title: 'What is a breach?',
    items: [
      {
        icon: 'CreditCard',
        title: 'What was exposed',
        body: 'What type and amount of PHI was involved.',
      },
      {
        icon: 'Users',
        title: 'Who saw it',
        body: 'Who accessed or received the information, and whether they were authorized to.',
      },
      {
        icon: 'Eye',
        title: 'Was it viewed',
        body: 'Whether the PHI was actually acquired or viewed, not just potentially exposed.',
      },
      {
        icon: 'RefreshCw',
        title: 'Was it fixed',
        body: 'Whether the risk has been mitigated, such as a confirmed deletion or device recovery.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Breach Notification',
    title: 'Who must be notified',
    items: [
      {
        icon: 'UserCheck',
        title: 'Patients',
        body: 'Affected patients must be notified without unreasonable delay.',
      },
      {
        icon: 'Landmark',
        title: 'HHS',
        body: 'All breaches are reported to HHS; large breaches are reported promptly.',
      },
      {
        icon: 'FileText',
        title: 'The media',
        body: 'Breaches affecting 500 or more people in a state require media notification.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Breach Notification',
    title: 'Common breaches, and what to do',
    items: [
      {
        icon: 'Printer',
        title: 'Misdirected fax or email',
        body: 'Sending PHI to the wrong recipient by fax or email.',
      },
      {
        icon: 'Laptop',
        title: 'Lost or stolen device',
        body: 'A laptop, phone or tablet with PHI going missing.',
      },
      {
        icon: 'Search',
        title: 'Snooping',
        body: "Looking up a patient's record without a work reason.",
      },
      {
        icon: 'MessageCircle',
        title: 'Talking in public',
        body: 'Discussing patient information somewhere it can be overheard.',
      },
      {
        icon: 'Trash2',
        title: 'Improper disposal',
        body: 'Throwing PHI in regular trash instead of shredding it.',
      },
      {
        icon: 'Hash',
        title: 'Social media posts',
        body: 'Posting about a patient, even without naming them.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Enforcement',
    title: 'Penalties for violations',
    items: [
      {
        icon: 'DollarSign',
        title: 'Civil fines',
        body: 'Fines that scale with the severity and awareness of the violation.',
      },
      {
        icon: 'Gavel',
        title: 'Criminal penalties',
        body: 'Knowing or malicious violations can result in criminal charges.',
      },
      {
        icon: 'Badge',
        title: 'Job consequences',
        body: 'Violations can result in discipline up to termination of employment.',
      },
    ],
  },
  {
    type: 'quizIntro',
    eyebrow: 'Knowledge Check',
    title: 'Knowledge check',
    subtitle: '10 questions. Ask the group each question; the answer is on the next slide.',
  },
  {
    type: 'quiz',
    index: 1,
    total: 10,
    question: 'What is it your job to protect?',
    options: [
      "The patient's name and SSN only",
      'Your agency, when sharing patients’ PHI',
      'Subcontractors, when sharing patients’ PHI',
      'All information that can connect the patient to their health information',
    ],
    answerLead: 'D. All information that can connect the patient to their health information',
    answer: 'PHI includes all information that can connect a patient to their health information, in any form.',
  },
  {
    type: 'quiz',
    index: 2,
    total: 10,
    question: 'The Minimum Necessary Rule states:',
    options: [
      'Use or share the least amount of PHI needed to get the job done',
      'Health plans can limit how many patients you treat',
      "You're limited in the PHI you can get for treatment",
      'Patients only need to share the minimum information',
    ],
    answerLead: 'A. Use or share the least amount of PHI needed to get the job done',
    answer: 'Use or share only the least amount of PHI needed for the task.',
  },
  {
    type: 'quiz',
    index: 3,
    total: 10,
    question: 'Use and disclosure of PHI is required when it is:',
    options: [
      'Requested by a loved one',
      'Requested or authorized by the patient, or required by HHS',
      'Not authorized by the patient',
      'Requested by a subcontractor',
    ],
    answerLead: 'B. Requested or authorized by the patient, or required by HHS',
    answer: 'Disclosure is required to the patient (or with their authorization) and to HHS when it investigates.',
  },
  {
    type: 'quiz',
    index: 4,
    total: 10,
    question: 'When is a signed authorization required to use or share PHI?',
    options: [
      'To maintain the patient directory',
      "To inform family involved in the patient's care",
      'To report victim abuse',
      'For marketing or sales purposes',
    ],
    answerLead: 'D. For marketing or sales purposes',
    answer: "Marketing and sale of PHI require the patient's written authorization.",
  },
  {
    type: 'quiz',
    index: 5,
    total: 10,
    question: "What happens if a patient can't exercise their rights?",
    options: [
      'They lose all rights to their PHI',
      'A designated personal representative can act for them',
      'A court appoints someone from the state',
      "The patient's health plan protects their rights",
    ],
    answerLead: 'B. A designated personal representative can act for them',
    answer: 'A personal representative, such as a health care agent or guardian, can exercise their rights.',
  },
  {
    type: 'quiz',
    index: 6,
    total: 10,
    question: 'What are the three types of safeguards that protect ePHI?',
    options: [
      'Executive, managerial and manual',
      'Administrative, physical and technical',
      'Organizational, practical and physical',
      'Executive, organizational and technical',
    ],
    answerLead: 'B. Administrative, physical and technical',
    answer: 'Administrative, physical and technical safeguards.',
  },
  {
    type: 'quiz',
    index: 7,
    total: 10,
    question: "You need to step away from your laptop in a patient's home for two minutes. What should you do?",
    options: [
      "Leave it open; you'll be right back",
      'Close the EMR window only',
      'Lock the screen or log out before you step away',
      'Ask a family member to watch it',
    ],
    answerLead: 'C. Lock the screen or log out before you step away',
    answer: 'Lock the screen (Windows key + L) or log out, every time, even for a minute.',
  },
  {
    type: 'quiz',
    index: 8,
    total: 10,
    question: 'An urgent email asks you to confirm your password through a link. What should you do?',
    options: [
      'Click the link and confirm quickly',
      'Reply with your password',
      'Forward it to coworkers to warn them',
      "Don't click: report it to your supervisor or IT",
    ],
    answerLead: "D. Don't click: report it to your supervisor or IT",
    answer: 'It is likely phishing. Don’t click or reply; report it.',
  },
  {
    type: 'quiz',
    index: 9,
    total: 10,
    question: "True or false: a breach affecting fewer than 500 people doesn't have to be reported to HHS.",
    options: ['True', 'False'],
    answerLead: 'B. False',
    answer: 'False. All breaches are reported to HHS. Smaller breaches are logged and reported each year.',
  },
  {
    type: 'quiz',
    index: 10,
    total: 10,
    question: 'Your work laptop is stolen from your car. What do you do first?',
    options: [
      'Wait a day to see if it turns up',
      'Report it right away to your supervisor and the Privacy Officer',
      "Do nothing if it's encrypted",
      'Buy a replacement',
    ],
    answerLead: 'B. Report it right away to your supervisor and the Privacy Officer',
    answer: 'Report it immediately, and file a police report. IT can lock or wipe it remotely.',
  },
  {
    type: 'wrapup',
    eyebrow: 'Wrap-Up',
    title: 'Five things to take with you',
    items: [
      {
        icon: 'Eye',
        body: 'Access and share only the minimum PHI needed for your job.',
      },
      {
        icon: 'MessageCircle',
        body: 'Protect PHI in every form: spoken, paper and electronic.',
      },
      {
        icon: 'Lock',
        body: 'Lock your laptop every time you step away, and never share your login.',
      },
      {
        icon: 'Fish',
        body: 'Think before you click: report suspicious emails.',
      },
      {
        icon: 'Bell',
        body: 'Report any possible breach or lost device right away.',
      },
    ],
  },
  {
    type: 'sources',
    eyebrow: 'References',
    title: 'Sources',
    rows: [
      {
        label: 'Training',
        body: 'HIPAA Rules & Compliance, Coastal Training Technologies Corp. (2013).',
      },
      {
        label: 'Guidance',
        body: 'HHS Office for Civil Rights guidance on HIPAA Privacy, Security and Breach Notification Rules.',
      },
      {
        label: 'Privacy Rule',
        body: '45 CFR Part 160 and Subparts A and E of Part 164.',
      },
      {
        label: 'Security Rule',
        body: '45 CFR Part 160 and Subparts A and C of Part 164.',
      },
      {
        label: 'Breach Notification',
        body: '45 CFR Subpart D of Part 164.',
      },
    ],
    note: 'Staff don’t decide whether something is a breach. Report anything that might be one, and the Privacy Officer will assess it.',
  },
  {
    type: 'closing',
    title: 'Questions & discussion',
    subtitle: "Thank you for protecting our patients' privacy, and encouraging others to do the same.",
    note: 'Please sign the in-service attendance roster before you leave.',
    address: 'Haloes Touch Hospice Inc. \u00b7 11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
]
