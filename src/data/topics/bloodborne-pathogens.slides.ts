import type { Slide } from '../../lib/types'

export const slides: Slide[] = [
  {
    type: 'cover',
    eyebrow: 'Staff In-Service · Annual OSHA Training',
    title: 'Bloodborne Pathogens',
    titleLine2: '& Standard Precautions',
    subtitle:
      'Protecting yourself and your patients from bloodborne exposure, every visit',
    badge: 'In-service presentation & staff reading material',
    address: '11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
  {
    type: 'intro',
    eyebrow: 'About This In-Service',
    title: "Why we're here, and what you'll learn",
    paragraphs: [
      'Bloodborne pathogens training is required annually under the OSHA Bloodborne Pathogens Standard, and it applies to every Haloes Touch team member who may contact blood or body fluids.',
      'This in-service covers how exposures happen, the standard precautions that protect you on every visit, and exactly what to do if an exposure occurs.',
    ],
    note: 'This material applies to every Haloes Touch team member with potential occupational exposure to blood or body fluids, contractors included.',
    objectivesHeading: 'By the end, you will be able to:',
    objectives: [
      'Identify the bloodborne pathogens of greatest concern in home care.',
      'Describe how exposures happen and which fluids are treated as infectious.',
      'Apply standard precautions: hand hygiene, gloves, PPE and safe sharps handling.',
      'Take the right steps immediately after an exposure.',
      'Know your rights and responsibilities under the OSHA standard.',
    ],
  },
  {
    type: 'cards',
    eyebrow: 'The Basics',
    title: 'What are bloodborne pathogens?',
    items: [
      {
        icon: 'Biohazard',
        title: 'HIV',
        body: 'The human immunodeficiency virus, which attacks the immune system and can be transmitted through infected blood and certain body fluids.',
      },
      {
        icon: 'Microscope',
        title: 'Hepatitis B (HBV)',
        body: 'A virus that infects the liver and is far more infectious than HIV, though it is preventable with vaccination.',
      },
      {
        icon: 'Droplet',
        title: 'Hepatitis C (HCV)',
        body: 'A virus that infects the liver and is now the bloodborne pathogen most frequently transmitted by needlestick injury.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'How Exposures Happen',
    title: 'Two main routes of exposure',
    items: [
      {
        icon: 'Syringe',
        title: 'Puncture',
        body: 'A needlestick or cut from a sharp contaminated with blood or body fluid, the most common route of occupational exposure.',
      },
      {
        icon: 'Droplet',
        title: 'Splash or contact',
        body: 'Blood or body fluid contacting broken skin, the eyes, nose or mouth, or non-intact skin.',
      },
    ],
  },
  {
    type: 'icongrid',
    eyebrow: 'How Exposures Happen',
    title: 'Treat all blood and body fluids as infectious',
    items: [
      { icon: 'Droplet', label: 'Blood and blood products' },
      { icon: 'Droplet', label: 'Semen and vaginal secretions' },
      { icon: 'Droplet', label: 'Cerebrospinal fluid' },
      { icon: 'Droplet', label: 'Synovial fluid' },
      { icon: 'Droplet', label: 'Pleural fluid' },
      { icon: 'Droplet', label: 'Pericardial fluid' },
      { icon: 'Droplet', label: 'Peritoneal fluid' },
      { icon: 'Droplet', label: 'Amniotic fluid' },
      { icon: 'Droplet', label: 'Saliva in dental procedures' },
      { icon: 'Droplet', label: 'Any fluid visibly contaminated with blood' },
      { icon: 'Droplet', label: 'Any fluid when it is difficult to tell the fluids apart' },
      { icon: 'Droplet', label: 'Unfixed tissues and organs' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Standard Precautions',
    title: 'Two tiers of protection',
    items: [
      {
        icon: 'ShieldCheck',
        title: 'Standard precautions',
        body: 'Used with every patient, every time, regardless of diagnosis: hand hygiene, gloves, PPE and safe sharps handling.',
      },
      {
        icon: 'Shield',
        title: 'Transmission-based precautions',
        body: 'Added on top of standard precautions for patients with known or suspected infections spread by air, droplet or contact.',
      },
    ],
  },
  {
    type: 'steps',
    eyebrow: 'Precaution 1 · Hand Hygiene',
    title: 'How to wash your hands',
    items: [
      {
        icon: 'Droplet',
        title: 'Wet',
        body: 'Wet your hands with clean, running water.',
      },
      {
        icon: 'Hand',
        title: 'Lather',
        body: 'Apply soap and lather all surfaces, including between fingers and under nails.',
      },
      {
        icon: 'Clock',
        title: 'Scrub for 20 seconds',
        body: 'Scrub for at least 20 seconds, about the time it takes to hum "Happy Birthday" twice.',
      },
      {
        icon: 'Droplet',
        title: 'Rinse',
        body: 'Rinse well under clean, running water.',
      },
      {
        icon: 'CheckCircle2',
        title: 'Dry',
        body: 'Dry with a clean towel or air dry; use alcohol-based hand sanitizer when soap and water are not available.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Precaution 2 · Gloves',
    title: 'Gloves protect every visit',
    items: [
      {
        icon: 'Hand',
        title: 'Wear for contact',
        body: 'Wear gloves any time you may contact blood, body fluids, mucous membranes or non-intact skin.',
      },
      {
        icon: 'RefreshCw',
        title: 'Change between tasks',
        body: 'Change gloves between patients and between dirty and clean tasks on the same patient.',
      },
      {
        icon: 'Trash2',
        title: 'Remove without touching',
        body: 'Remove gloves without touching the outside surface, then perform hand hygiene right away.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Precaution 3 · Protective Barriers',
    title: 'Personal protective equipment (PPE)',
    items: [
      {
        icon: 'Shield',
        title: 'Gowns',
        body: 'Worn when clothing may be exposed to blood or body fluids, such as during wound care.',
      },
      {
        icon: 'Eye',
        title: 'Masks and eye protection',
        body: 'Worn when a splash or spray to the face is possible.',
      },
      {
        icon: 'Hand',
        title: 'Gloves',
        body: 'The most frequently used barrier, worn for virtually every hands-on task.',
      },
      {
        icon: 'Trash2',
        title: 'Remove in the right order',
        body: 'Remove PPE in the correct sequence to avoid contaminating yourself, then wash your hands.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Precaution 4 · Sharps',
    title: 'Safe handling of sharps',
    items: [
      {
        icon: 'Syringe',
        title: 'Never recap',
        body: 'Never recap, bend or break a used needle.',
      },
      {
        icon: 'Trash2',
        title: 'Sharps containers',
        body: 'Dispose of sharps immediately in a puncture-resistant, labeled sharps container.',
      },
      {
        icon: 'Package',
        title: "Don't overfill",
        body: 'Replace a sharps container once it is about three-quarters full, never pack it down.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'In the Home',
    title: "Sharps and spills in patients' homes",
    items: [
      {
        icon: 'Home',
        title: 'Bring your own container',
        body: 'Carry a sharps container with you; never rely on a repurposed household container.',
      },
      {
        icon: 'Truck',
        title: 'Transport sealed',
        body: 'Transport used sharps containers sealed and upright in your vehicle.',
      },
      {
        icon: 'SprayCan',
        title: 'Clean spills promptly',
        body: 'Clean blood or body fluid spills promptly with an appropriate disinfectant.',
      },
      {
        icon: 'Hand',
        title: 'Glove up first',
        body: 'Always glove before cleaning a spill, and use disposable absorbent material.',
      },
      {
        icon: 'Trash2',
        title: 'Bag contaminated waste',
        body: 'Place contaminated disposable items in a sealed bag before placing in regular trash.',
      },
      {
        icon: 'Users',
        title: 'Educate the family',
        body: 'Teach family members how to safely store and dispose of sharps between your visits.',
      },
    ],
  },
  {
    type: 'steps',
    eyebrow: 'If an Exposure Happens',
    title: 'What to do right away',
    items: [
      {
        icon: 'Droplet',
        title: 'Wash immediately',
        body: 'Wash the area with soap and water right away; flush eyes, nose or mouth with water or saline.',
      },
      {
        icon: 'Flag',
        title: 'Report it',
        body: 'Report the exposure to your supervisor immediately, no matter how minor it seems.',
      },
      {
        icon: 'FileText',
        title: 'Document',
        body: 'Document how, when and where the exposure occurred, and the source patient if known.',
      },
      {
        icon: 'Phone',
        title: 'Get evaluated',
        body: 'Seek prompt medical evaluation; post-exposure treatment works best when started quickly.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'If an Exposure Happens',
    title: 'Why speed matters',
    items: [
      {
        icon: 'Clock',
        title: 'HIV post-exposure prophylaxis',
        body: 'Most effective when started within hours, and should begin as soon as possible after exposure.',
      },
      {
        icon: 'Syringe',
        title: 'Hepatitis B treatment',
        body: 'Immune globulin and/or vaccine can prevent infection if given promptly after exposure.',
      },
      {
        icon: 'Microscope',
        title: 'Baseline testing',
        body: 'Baseline and follow-up testing track whether an infection developed and whether treatment is working.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Know the Risk',
    title: 'The diseases',
    items: [
      {
        icon: 'Biohazard',
        title: 'HIV',
        body: 'About 99.7% of needlestick exposures to HIV-infected blood do not result in infection; risk is low but not zero.',
      },
      {
        icon: 'Microscope',
        title: 'Hepatitis B',
        body: 'Unvaccinated workers face up to a 30% risk of infection after a needlestick from an HBV-infected source.',
      },
      {
        icon: 'Droplet',
        title: 'Hepatitis C',
        body: 'Roughly 1.8% risk of infection after a needlestick from an HCV-infected source; there is no vaccine.',
      },
    ],
  },
  {
    type: 'table',
    eyebrow: 'Know the Risk',
    title: 'Comparing the risk after a needlestick',
    columns: ['Source', 'Risk of infection'],
    rows: [
      ['Hepatitis B, unvaccinated', '~30%'],
      ['Hepatitis B, vaccinated', '~0%'],
      ['Hepatitis C', '~0.2%'],
      ['HIV', '~0.3%'],
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Transmission-Based Precautions',
    title: 'Added for specific infections',
    items: [
      {
        icon: 'Wind',
        title: 'Airborne',
        body: 'Used for infections spread by small particles that travel in the air, such as tuberculosis.',
      },
      {
        icon: 'Droplet',
        title: 'Droplet',
        body: 'Used for infections spread by larger respiratory droplets, such as influenza.',
      },
      {
        icon: 'Hand',
        title: 'Contact',
        body: 'Used for infections spread by touching the patient or contaminated surfaces, such as MRSA.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Your Rights',
    title: 'Your rights as a worker (OSHA)',
    items: [
      {
        icon: 'Syringe',
        title: 'Free hepatitis B vaccine',
        body: 'Offered at no cost within 10 days of assignment to a job with occupational exposure.',
      },
      {
        icon: 'Shield',
        title: 'Free PPE',
        body: 'Provided at no cost, in the right sizes, and readily accessible.',
      },
      {
        icon: 'FileText',
        title: 'A written exposure control plan',
        body: 'Your employer must maintain and make available a written plan for preventing exposures.',
      },
      {
        icon: 'Phone',
        title: 'Free post-exposure follow-up',
        body: 'Confidential medical evaluation and follow-up at no cost after an exposure incident.',
      },
      {
        icon: 'BookOpen',
        title: 'Annual training',
        body: 'Free, job-specific bloodborne pathogens training, provided annually.',
      },
      {
        icon: 'FolderOpen',
        title: 'Access to records',
        body: 'The right to access your exposure and medical records.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Your Responsibilities',
    title: 'Your responsibilities (OSHA)',
    items: [
      {
        icon: 'ShieldCheck',
        title: 'Use standard precautions',
        body: 'Treat all blood and body fluids as infectious, with every patient, every time.',
      },
      {
        icon: 'Hand',
        title: 'Use PPE correctly',
        body: 'Wear and dispose of gloves and other PPE as trained.',
      },
      {
        icon: 'Trash2',
        title: 'Handle sharps safely',
        body: 'Never recap needles; dispose of sharps immediately in approved containers.',
      },
      {
        icon: 'Flag',
        title: 'Report exposures',
        body: 'Report every exposure incident right away, no matter how small.',
      },
      {
        icon: 'BookOpen',
        title: 'Complete training',
        body: 'Attend required bloodborne pathogens training annually.',
      },
      {
        icon: 'CheckCircle2',
        title: 'Follow the exposure control plan',
        body: "Follow your agency's written exposure control plan and ask questions when unsure.",
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
    question: 'Which bloodborne pathogens are of greatest concern in home care?',
    options: [
      'Only HIV',
      'HIV, Hepatitis B and Hepatitis C',
      'Only Hepatitis B',
      'The common cold and flu',
    ],
    answerLead: 'B. HIV, Hepatitis B and Hepatitis C',
    answer: 'These three bloodborne viruses are the primary concern for occupational exposure.',
  },
  {
    type: 'quiz',
    index: 2,
    total: 10,
    question: 'What are the two main routes of occupational exposure?',
    options: [
      'Puncture and splash/contact',
      'Eating and drinking',
      'Shaking hands',
      'Breathing shared air',
    ],
    answerLead: 'A. Puncture and splash/contact',
    answer: 'Needlesticks/cuts (puncture) and blood or fluid contacting skin, eyes, nose or mouth (splash/contact).',
  },
  {
    type: 'quiz',
    index: 3,
    total: 10,
    question: 'True or false: standard precautions are only used with patients known to have an infection.',
    options: ['True', 'False'],
    answerLead: 'B. False',
    answer: 'Standard precautions are used with every patient, every time, regardless of diagnosis.',
  },
  {
    type: 'quiz',
    index: 4,
    total: 10,
    question: 'How long should you scrub your hands when washing with soap and water?',
    options: ['5 seconds', 'At least 20 seconds', '2 minutes', 'Until the water runs clear'],
    answerLead: 'B. At least 20 seconds',
    answer: 'Scrub for at least 20 seconds, about the time it takes to hum "Happy Birthday" twice.',
  },
  {
    type: 'quiz',
    index: 5,
    total: 10,
    question: 'What should you never do with a used needle?',
    options: [
      'Dispose of it immediately',
      'Recap, bend or break it',
      'Place it in a sharps container',
      'Carry a sharps container to the home',
    ],
    answerLead: 'B. Recap, bend or break it',
    answer: 'Never recap, bend or break a used needle; dispose of it immediately in a sharps container.',
  },
  {
    type: 'quiz',
    index: 6,
    total: 10,
    question: 'What should you do immediately after a needlestick exposure?',
    options: [
      'Finish the visit, then report it later',
      'Wash the area right away and report it immediately',
      'Wait to see if symptoms develop',
      'Only document it if the patient asks',
    ],
    answerLead: 'B. Wash the area right away and report it immediately',
    answer: 'Wash immediately, report the exposure right away, and seek prompt medical evaluation.',
  },
  {
    type: 'quiz',
    index: 7,
    total: 10,
    question: 'Why does speed matter after an exposure?',
    options: [
      'It does not matter when you report it',
      'Post-exposure treatment works best when started quickly',
      'Only the patient needs to act quickly',
      'Testing is only available same-day',
    ],
    answerLead: 'B. Post-exposure treatment works best when started quickly',
    answer: 'HIV prophylaxis and Hepatitis B treatment are most effective when started as soon as possible.',
  },
  {
    type: 'quiz',
    index: 8,
    total: 10,
    question: 'Which bloodborne pathogen has a vaccine available?',
    options: ['HIV', 'Hepatitis B', 'Hepatitis C', 'All three'],
    answerLead: 'B. Hepatitis B',
    answer: 'A Hepatitis B vaccine is available and offered free to workers with occupational exposure risk.',
  },
  {
    type: 'quiz',
    index: 9,
    total: 10,
    question: 'What is a transmission-based precaution used for contact-spread infections, like MRSA?',
    options: ['Airborne precautions', 'Droplet precautions', 'Contact precautions', 'No extra precautions needed'],
    answerLead: 'C. Contact precautions',
    answer: 'Contact precautions are added on top of standard precautions for infections spread by touch.',
  },
  {
    type: 'quiz',
    index: 10,
    total: 10,
    question: 'Under OSHA, what must your employer provide at no cost to you?',
    options: [
      'PPE and the Hepatitis B vaccine',
      'Nothing; PPE is the employee’s responsibility',
      'Only training, not PPE',
      'Only the vaccine, not PPE',
    ],
    answerLead: 'A. PPE and the Hepatitis B vaccine',
    answer: 'Employers must provide PPE, the Hepatitis B vaccine, training and post-exposure follow-up at no cost.',
  },
  {
    type: 'wrapup',
    eyebrow: 'Wrap-Up',
    title: 'Five things to take with you',
    items: [
      {
        icon: 'ShieldCheck',
        body: 'Treat all blood and body fluids as infectious, with every patient, every time.',
      },
      {
        icon: 'Hand',
        body: 'Use hand hygiene, gloves and PPE as your first line of defense.',
      },
      {
        icon: 'Syringe',
        body: 'Never recap a needle; dispose of sharps immediately in approved containers.',
      },
      {
        icon: 'Clock',
        body: 'If exposed, wash immediately and report right away; speed matters.',
      },
      {
        icon: 'BookOpen',
        body: 'Know your rights: free PPE, vaccine, training and post-exposure care.',
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
        body: 'Bloodborne Pathogens and Standard Precautions learning guide.',
      },
      {
        label: 'Standard',
        body: 'OSHA Bloodborne Pathogens Standard, 29 CFR 1910.1030.',
      },
      {
        label: 'Guidance',
        body: 'CDC guidance on bloodborne pathogens and post-exposure management.',
      },
      {
        label: 'Risk estimates',
        body: 'CDC estimates of transmission risk following occupational needlestick exposure.',
      },
    ],
    note: 'Report every exposure incident right away, no matter how minor it seems. Speed matters.',
  },
  {
    type: 'closing',
    title: 'Questions & discussion',
    subtitle: 'Thank you for protecting yourself and our patients, every visit.',
    note: 'Please sign the in-service attendance roster before you leave.',
    address: 'Haloes Touch Hospice Inc. \u00b7 11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
]
