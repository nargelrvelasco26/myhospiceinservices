import type { Slide } from '../../lib/types'

export const slides: Slide[] = [
  {
    type: 'cover',
    eyebrow: 'All-Staff In-Service · Orientation',
    title: 'Hospice',
    titleLine2: '101',
    subtitle:
      'What hospice is, who it serves, and how Haloes Touch cares for patients and families',
    badge: 'In-service presentation & staff reading material',
    address: '11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
  {
    type: 'intro',
    eyebrow: 'About This In-Service',
    title: "Why we're here, and what you'll learn",
    paragraphs: [
      "Every Haloes Touch team member, whether you work in the office or in patients' homes, is part of hospice care. Understanding what hospice is helps you explain it to families, answer their questions, and see how your role fits.",
    ],
    note: 'This material is for every Haloes Touch team member, and is a good first in-service for new staff and volunteers.',
    objectivesHeading: "By the end, you will be able to:",
    objectives: [
      'Explain the philosophy and goals of hospice care.',
      'Describe who is eligible and how hospice differs from palliative care.',
      'Name the services the Medicare hospice benefit covers.',
      "Describe the hospice team and the patient's journey.",
      'Correct common myths about hospice.',
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Philosophy',
    title: 'What is hospice?',
    items: [
      {
        icon: 'Heart',
        title: 'Comfort first',
        body: 'Relief of pain and other symptoms, so each day can be as good as possible.',
      },
      {
        icon: 'Users',
        title: 'Patient and family',
        body: 'The patient and family together are the unit of care.',
      },
      {
        icon: 'Sun',
        title: 'Whole person',
        body: 'Physical, emotional, social and spiritual needs.',
      },
      {
        icon: 'Leaf',
        title: 'A natural process',
        body: 'Hospice neither hurries nor postpones death.',
      },
    ],
  },
  {
    type: 'timeline',
    eyebrow: 'History',
    title: 'A short history of hospice',
    items: [
      {
        year: '1967',
        body: "Dame Cicely Saunders opens St Christopher's Hospice in London, the first modern hospice.",
        color: 'bg-hospice-green',
      },
      {
        year: '1969',
        body: 'Elisabeth Kübler-Ross publishes On Death and Dying, opening public conversation about dying.',
        color: 'bg-hospice-gold',
      },
      {
        year: '1974',
        body: 'The first U.S. hospice opens in Connecticut.',
        color: 'bg-slate-500',
      },
      {
        year: '1982',
        body: 'Congress creates the Medicare Hospice Benefit; it becomes permanent in 1986.',
        color: 'bg-rose-700/80',
      },
    ],
  },
  {
    type: 'table',
    eyebrow: 'Palliative Care',
    title: 'Hospice and palliative care',
    columns: ['', 'Palliative care', 'Hospice care'],
    rows: [
      ['Focus', 'Comfort and quality of life', 'Comfort and quality of life'],
      [
        'When',
        'At any stage of serious illness',
        'When life expectancy is about 6 months or less',
      ],
      [
        'Curative treatment',
        'Can continue alongside',
        'Stopped for the terminal illness',
      ],
      ['Where', 'Clinics, hospitals, home', 'Mostly wherever the patient lives'],
      [
        'Payment',
        'Regular insurance benefits',
        'Medicare, Medicaid and insurance hospice benefits',
      ],
    ],
  },
  {
    type: 'mythfact',
    eyebrow: 'Myths',
    title: 'Hospice myths and facts',
    items: [
      {
        myth: '"Hospice is a place."',
        fact: 'Most hospice care is given at home, wherever the patient lives.',
      },
      {
        myth: '"Hospice means giving up."',
        fact: 'Hospice shifts the goal to comfort, dignity and time well spent.',
      },
      {
        myth: '"Hospice is only for the last few days."',
        fact: 'Patients can receive hospice for months, as long as they remain eligible.',
      },
      {
        myth: '"Once you choose hospice, you can\'t change your mind."',
        fact: 'Patients can stop hospice at any time, and come back later if eligible.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Eligibility',
    title: 'Who is eligible for hospice?',
    items: [
      {
        icon: 'UserCog',
        title: 'Terminal illness',
        body: 'Physicians certify a life expectancy of 6 months or less, if the illness runs its usual course.',
      },
      {
        icon: 'Flag',
        title: 'Patient chooses',
        body: 'The patient (or representative) elects hospice and signs an election statement.',
      },
      {
        icon: 'Ban',
        title: 'Comfort focus',
        body: 'Curative treatment for the terminal illness stops; care for other conditions continues.',
      },
      {
        icon: 'RefreshCw',
        title: 'Ongoing review',
        body: 'Eligibility is recertified at the start of each benefit period.',
      },
    ],
  },
  {
    type: 'icongrid',
    eyebrow: 'Diagnoses',
    title: 'Who hospice serves',
    items: [
      { icon: 'Activity', label: 'Cancer' },
      { icon: 'Brain', label: 'Dementia' },
      { icon: 'Heart', label: 'Heart disease' },
      { icon: 'Wind', label: 'Lung disease' },
      { icon: 'Activity', label: 'Stroke' },
      { icon: 'Filter', label: 'Kidney disease' },
      { icon: 'Building2', label: 'Liver disease' },
      { icon: 'PersonStanding', label: 'ALS and other neurologic illness' },
    ],
  },
  {
    type: 'icongrid',
    eyebrow: 'Covered Services',
    title: 'What the Medicare hospice benefit covers',
    items: [
      { icon: 'Stethoscope', label: 'Nursing care' },
      { icon: 'UserCog', label: 'Physician services' },
      { icon: 'Repeat', label: 'Hospice aide care' },
      { icon: 'Users', label: 'Social work' },
      { icon: 'HandHeart', label: 'Spiritual care' },
      { icon: 'Pill', label: 'Medicines for comfort' },
      { icon: 'Accessibility', label: 'Medical equipment' },
      { icon: 'Briefcase', label: 'Medical supplies' },
      { icon: 'Heart', label: 'Volunteers' },
      { icon: 'Bird', label: 'Bereavement support' },
      { icon: 'PersonStanding', label: 'Therapies as needed' },
      { icon: 'Phone', label: '24/7 on-call support' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Where And How',
    title: 'Where care is given, and levels of care',
    items: [
      {
        icon: 'Home',
        title: 'Routine Home Care',
        body: 'Regular visits wherever the patient lives: home, assisted living or a nursing facility. Most hospice days are this level.',
      },
      {
        icon: 'Clock',
        title: 'Continuous Home Care',
        body: 'Mostly nursing care at home, at least 8 hours a day, during a short-term crisis.',
      },
      {
        icon: 'Bed',
        title: 'Inpatient Respite Care',
        body: 'Up to 5 days in a facility to give family caregivers a rest.',
      },
      {
        icon: 'Building2',
        title: 'General Inpatient Care',
        body: "Short-term inpatient care for symptoms that can't be managed at home.",
      },
    ],
  },
  {
    type: 'team',
    eyebrow: 'The Team',
    title: 'The interdisciplinary group (IDG)',
    roles: [
      'Physician and medical director',
      'Registered nurse case manager',
      'Hospice aide',
      'Medical social worker',
      'Chaplain or spiritual counselor',
      'Volunteers',
      'Bereavement coordinator',
      'Therapists and dietary counseling, as needed',
      "The patient's attending physician",
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Volunteers',
    title: 'Volunteers: a hospice tradition',
    items: [
      {
        icon: 'Heart',
        title: 'Companionship',
        body: 'Visiting, reading, listening and simply being present.',
      },
      {
        icon: 'Repeat',
        title: 'Caregiver relief',
        body: 'Sitting with the patient so family can rest or run errands.',
      },
      {
        icon: 'Inbox',
        title: 'Office support',
        body: 'Helping with administrative tasks.',
      },
      {
        icon: 'Star',
        title: 'Special gifts',
        body: 'Music, pets, crafts and life-story projects.',
      },
    ],
  },
  {
    type: 'steps',
    eyebrow: 'The Journey',
    title: "The patient's journey with Haloes Touch",
    items: [
      {
        icon: 'Inbox',
        title: 'Referral',
        body: 'A call from a physician, hospital, facility or family.',
      },
      {
        icon: 'ClipboardList',
        title: 'Admission',
        body: 'Eligibility, consent and the first assessment.',
      },
      {
        icon: 'MapPin',
        title: 'Plan of care',
        body: 'The IDG plans care with the patient and family.',
      },
      {
        icon: 'Home',
        title: 'Care at home',
        body: 'Regular visits and 24/7 support.',
      },
      {
        icon: 'Bird',
        title: 'End of life',
        body: 'Comfort and presence in the final days.',
      },
      {
        icon: 'Heart',
        title: 'Bereavement',
        body: 'Support for the family for up to a year.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Haloes Touch',
    title: 'About Haloes Touch Hospice',
    items: [
      {
        icon: 'Award',
        title: 'Certified',
        body: 'A Medicare- and Medicaid-certified hospice, accredited by ACHC.',
      },
      {
        icon: 'Home',
        title: 'Hospice only',
        body: 'Hospice is all we do.',
      },
      {
        icon: 'Globe',
        title: 'Our community',
        body: 'Serving patients and families from our Henderson, Nevada office.',
      },
      {
        icon: 'Heart',
        title: 'Since 2025',
        body: 'Caring for patients since our first admission in June 2025.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Your Role',
    title: 'How you can explain hospice',
    items: [
      {
        icon: 'MessageCircle',
        title: 'Simple words',
        body: '"Hospice helps people with a serious illness be comfortable at home, with support for the whole family."',
      },
      {
        icon: 'Heart',
        title: 'Listen first',
        body: "Ask what they've heard about hospice, and what worries them.",
      },
      {
        icon: 'Users',
        title: 'Refer questions',
        body: 'Clinical or eligibility questions go to the nurse; benefit and coverage questions to intake or social work.',
      },
      {
        icon: 'Shield',
        title: 'Never pressure',
        body: "Choosing hospice is always the patient's decision.",
      },
    ],
  },
  {
    type: 'quizIntro',
    eyebrow: 'Knowledge Check',
    title: 'Knowledge check',
    subtitle:
      '10 questions. Ask the group each question, then reveal the answer.',
  },
  {
    type: 'quiz',
    index: 1,
    total: 10,
    question: 'What is the main focus of hospice care?',
    answer:
      'Comfort and quality of life, for the patient and family, rather than cure.',
  },
  {
    type: 'quiz',
    index: 2,
    total: 10,
    question: 'Who founded the first modern hospice?',
    options: [
      'Florence Nightingale',
      'Dame Cicely Saunders',
      'Elisabeth Kübler-Ross',
      'Clara Barton',
    ],
    answerLead: 'B. Dame Cicely Saunders',
    answer: "Dame Cicely Saunders, St Christopher's Hospice, London, 1967.",
  },
  {
    type: 'quiz',
    index: 3,
    total: 10,
    question: 'When was the Medicare Hospice Benefit created?',
    answer: '1982 (made permanent in 1986).',
  },
  {
    type: 'quiz',
    index: 4,
    total: 10,
    question: 'What is the difference between palliative care and hospice?',
    answer:
      'Palliative care can be given at any stage, with curative treatment; hospice is for people with about 6 months or less who choose comfort care.',
  },
  {
    type: 'quiz',
    index: 5,
    total: 10,
    question: 'True or false: hospice is only for people with cancer.',
    answer:
      'False. Hospice serves people with dementia, heart, lung, kidney, liver, neurologic and other illnesses.',
  },
  {
    type: 'quiz',
    index: 6,
    total: 10,
    question: 'True or false: most hospice care is given in a hospice building.',
    answer: 'False. Most care is given at home, wherever the patient lives.',
  },
  {
    type: 'quiz',
    index: 7,
    total: 10,
    question: 'Name four services covered by the Medicare hospice benefit.',
    answer:
      'Any four: nursing, physician services, aide care, social work, spiritual care, medicines, equipment, supplies, volunteers, bereavement, 24/7 on-call.',
  },
  {
    type: 'quiz',
    index: 8,
    total: 10,
    question: 'Who are the four core members of the IDG?',
    answer: 'Physician, registered nurse, social worker, and spiritual or other counselor.',
  },
  {
    type: 'quiz',
    index: 9,
    total: 10,
    question:
      "True or false: once a patient chooses hospice, they can't change their mind.",
    answer: 'False. Patients can stop hospice at any time.',
  },
  {
    type: 'quiz',
    index: 10,
    total: 10,
    question: 'How long does bereavement support continue after a death?',
    answer: 'Up to one year.',
  },
  {
    type: 'wrapup',
    eyebrow: 'Wrap-Up',
    title: 'Five things to take with you',
    items: [
      {
        icon: 'Heart',
        body: 'Hospice focuses on comfort, dignity and quality of life for patient and family.',
      },
      {
        icon: 'Users',
        body: "It's for people with a life expectancy of about 6 months or less who choose comfort care.",
      },
      {
        icon: 'Home',
        body: 'Most care is given at home, wherever the patient lives.',
      },
      {
        icon: 'Users',
        body: 'An interdisciplinary team cares for body, mind and spirit, 24/7.',
      },
      {
        icon: 'Bird',
        body: 'Support continues for the family for up to a year after a death.',
      },
    ],
  },
  {
    type: 'sources',
    eyebrow: 'References',
    title: 'Sources',
    rows: [
      {
        label: 'CMS',
        body: 'Centers for Medicare & Medicaid Services. Medicare Hospice Benefits (beneficiary booklet).',
      },
      {
        label: 'Regulation',
        body: '42 CFR Part 418: Medicare hospice eligibility, election, Conditions of Participation (including 418.56 IDG and 418.78 volunteers).',
      },
      {
        label: 'History',
        body: "Saunders C. The founding of St Christopher's Hospice (1967); Kübler-Ross E. On Death and Dying. 1969.",
      },
      {
        label: 'History',
        body: 'Tax Equity and Fiscal Responsibility Act of 1982 (Medicare Hospice Benefit).',
      },
      {
        label: 'National',
        body: 'National Alliance for Care at Home (formerly NHPCO): hospice facts and philosophy.',
      },
      {
        label: 'Haloes Touch',
        body: 'Haloes Touch Hospice Inc. mission and services.',
      },
    ],
    note: 'Listed without a web search; verify titles and current versions before distributing.',
  },
  {
    type: 'closing',
    title: 'Questions & discussion',
    subtitle:
      'Welcome to hospice work: thank you for helping every patient live fully, to the very end.',
    note: 'Please sign the in-service attendance roster before you leave.',
    address: 'Haloes Touch Hospice Inc. · 11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
]
