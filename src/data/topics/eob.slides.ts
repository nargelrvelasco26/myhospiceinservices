import type { Slide } from '../../lib/types'

export const slides: Slide[] = [
  {
    type: 'cover',
    eyebrow: 'Staff In-Service · Patient & Family Education',
    title: 'Explanation of',
    titleLine2: 'Benefits (EOB)',
    subtitle:
      'Helping patients and families understand hospice coverage, costs and who provides each service.',
    badge: 'In-service presentation & staff reading material',
    address: '11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
  {
    type: 'intro',
    eyebrow: 'About This In-Service',
    title: 'Why we\u2019re here, and what you\u2019ll learn',
    paragraphs: [
      'The Explanation of Benefits gives patients and families a summary of the services covered, the costs, and any financial responsibility. When staff can explain it clearly, families feel less stressed and trust us more.',
    ],
    note: 'This material is for intake and office staff, nurses and social workers, and anyone who talks with families about hospice coverage.',
    objectivesHeading: 'By the end of this in-service, you will be able to:',
    objectives: [
      'Explain what an EOB and a Medicare Summary Notice are.',
      'Use plain language to describe hospice benefits and services.',
      'Explain what Medicare covers, excludes and may charge.',
      'Identify which discipline provides each service.',
      'Answer family questions with empathy and transparency.',
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Why it Matters',
    title: 'Why the EOB matters',
    items: [
      {
        icon: 'Eye',
        title: 'Transparency',
        body: 'Patients and families understand the services provided and who provides them.',
      },
      {
        icon: 'ClipboardList',
        title: 'Service tracking',
        body: 'The scope and level of care delivered by each discipline can be verified.',
      },
      {
        icon: 'DollarSign',
        title: 'Financial clarity',
        body: 'Costs, payments and patient responsibilities are clearly outlined.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'The Basics',
    title: 'What is an EOB?',
    items: [
      {
        icon: 'FileText',
        title: 'Not a bill',
        body: 'An EOB or MSN shows what was billed and paid. It is not a bill, and says so.',
      },
      {
        icon: 'Calendar',
        title: 'When it arrives',
        body: 'Medicare mails the MSN every 4 months when services are billed; patients can also view claims online.',
      },
      {
        icon: 'Mail',
        title: 'Who sends it',
        body: 'Medicare, Medicaid or a private insurer sends it, not the hospice.',
      },
      {
        icon: 'Search',
        title: 'Why read it',
        body: 'To confirm the services listed were received, and see any amount the patient may owe.',
      },
    ],
  },
  {
    type: 'table',
    eyebrow: 'Reading It',
    title: 'What\u2019s on a Medicare Summary Notice',
    columns: ['Item on the notice', 'What it means'],
    rows: [
      ['Provider and dates of service', 'Who billed (Haloes Touch Hospice) and the dates covered'],
      ['Amount billed or charged', 'What the hospice billed for the services'],
      ['Medicare-approved amount', 'The amount Medicare allows for those services'],
      ['Medicare paid', 'What Medicare paid to the hospice'],
      ['Maximum you may be billed', 'What the patient may owe, such as a small copay; usually $0 for hospice'],
      ['Notes or remark codes', 'Explanations, such as why a service was denied'],
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Key Terms',
    title: 'Key terms in plain language',
    items: [
      {
        icon: 'DollarSign',
        title: 'Copayment',
        body: 'A small fixed amount the patient pays, such as up to $5 for a hospice prescription.',
      },
      {
        icon: 'Percent',
        title: 'Coinsurance',
        body: 'A percentage of the approved amount, such as 5% for inpatient respite care.',
      },
      {
        icon: 'Calendar',
        title: 'Deductible',
        body: 'The amount paid before insurance starts. There is no deductible for the Medicare hospice benefit.',
      },
      {
        icon: 'CheckCircle2',
        title: 'Approved amount',
        body: 'The amount the insurer allows for a service.',
      },
      {
        icon: 'XCircle',
        title: 'Denied claim',
        body: 'A service the insurer didn\u2019t pay, with a reason code.',
      },
      {
        icon: 'Shield',
        title: 'Patient responsibility',
        body: 'What the patient may owe after insurance pays.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Why Hospice',
    title: 'Explaining why hospice',
    items: [
      {
        icon: 'Heart',
        title: 'Comfort first',
        body: 'For people with a terminal illness who prioritize comfort over curative treatment.',
      },
      {
        icon: 'Home',
        title: 'Familiar setting',
        body: 'Care in a familiar, comfortable place, often at home.',
      },
      {
        icon: 'Users',
        title: 'Whole-family support',
        body: 'Support for both the patient and the family, throughout the journey.',
      },
      {
        icon: 'MessageCircle',
        title: 'How to open the conversation',
        body: 'Sample: "I\u2019d like to talk with you about hospice care, a service designed to provide comfort and support to you and your family as you navigate this stage of life. Our focus is on improving your quality of life, managing your symptoms, and ensuring you feel cared for physically, emotionally and spiritually."',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Benefits',
    title: 'Benefits of hospice care: what to say',
    items: [
      {
        icon: 'Stethoscope',
        title: 'Symptom management',
        body: '"We will manage any pain or discomfort you might experience, ensuring you remain as comfortable as possible."',
      },
      {
        icon: 'HandHeart',
        title: 'Emotional support',
        body: '"Our team includes counselors and social workers who can help with any emotional or psychological concerns."',
      },
      {
        icon: 'Star',
        title: 'Spiritual support',
        body: '"If desired, our chaplain can offer spiritual guidance or simply be here to listen and support you."',
      },
      {
        icon: 'Users',
        title: 'Family involvement',
        body: '"Your family will be involved in your care and will also receive support to help them through this time."',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Services',
    title: 'Services provided: what to say',
    items: [
      {
        icon: 'Stethoscope',
        title: 'Medical care',
        body: '"You\u2019ll have access to doctors, nurses and aides who specialize in hospice care to manage your medical needs."',
      },
      {
        icon: 'Pill',
        title: 'Medications and equipment',
        body: '"We cover medications related to your illness, and provide equipment like hospital beds or oxygen if needed."',
      },
      {
        icon: 'HandHeart',
        title: 'Personal care',
        body: '"Hospice aides can assist with bathing, grooming and other personal care tasks."',
      },
      {
        icon: 'MessageCircle',
        title: 'Counseling and bereavement',
        body: '"We offer counseling for you and your loved ones, including bereavement support for your family afterward."',
      },
      {
        icon: 'Repeat',
        title: 'Therapy services',
        body: '"If needed, physical, occupational or speech therapy can be provided to support your comfort."',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'What Makes Hospice Special',
    title: 'Key features of hospice care',
    items: [
      {
        icon: 'PersonStanding',
        title: 'Personalized care plans',
        body: 'Care plans are tailored to the patient\u2019s wishes and values. "Hospice care is centered around you. Your wishes, preferences and values guide your care plan."',
      },
      {
        icon: 'Phone',
        title: '24/7 on-call support',
        body: 'A nurse is available day and night for emergencies and immediate needs. "We also provide 24/7 on-call support, so you\u2019re never alone when you need us."',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Medicare',
    title: 'The Medicare hospice benefit: highlights',
    items: [
      {
        icon: 'ClipboardList',
        title: 'Eligibility',
        body: 'A terminal illness with a life expectancy of 6 months or less if the illness runs its usual course, certified by a physician.',
      },
      {
        icon: 'CheckCircle2',
        title: 'Covered',
        body: 'Physician services, nursing, aide care, social services, spiritual care, medications, equipment, supplies, therapies and bereavement support related to the terminal illness.',
      },
      {
        icon: 'Ban',
        title: 'Not covered by hospice',
        body: 'Curative treatment for the terminal illness; care not arranged by the hospice; and room and board at home or in a nursing facility.',
      },
      {
        icon: 'Repeat',
        title: 'Unrelated conditions',
        body: 'Treatment for conditions unrelated to the terminal illness is billed separately under regular Medicare.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Levels of Care',
    title: 'The four levels of hospice care',
    items: [
      {
        icon: 'Home',
        title: 'Routine Home Care',
        body: 'Regular visits wherever the patient lives.',
      },
      {
        icon: 'Stethoscope',
        title: 'Continuous Home Care',
        body: 'Mostly nursing care at home during a short-term crisis.',
      },
      {
        icon: 'Building2',
        title: 'General Inpatient Care',
        body: 'Short-term inpatient care for symptoms that can\u2019t be managed at home.',
      },
      {
        icon: 'Bed',
        title: 'Respite Care',
        body: 'Short-term inpatient care to give family caregivers a rest.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Costs',
    title: 'Costs and coverage',
    items: [
      {
        icon: 'Pill',
        title: 'Prescriptions',
        body: 'Medicare may charge a copay of up to $5 per prescription for symptom and pain medicines.',
      },
      {
        icon: 'Percent',
        title: 'Respite care',
        body: 'Up to 5% of the Medicare-approved amount for inpatient respite care.',
      },
      {
        icon: 'Ban',
        title: 'No deductible',
        body: 'There is no deductible for the Medicare hospice benefit.',
      },
      {
        icon: 'Home',
        title: 'Room and board',
        body: 'Not covered by the hospice benefit; Medicaid may help for eligible nursing facility residents. "Medicare, Medicaid and most insurance plans cover hospice care, including medications, equipment and professional services. Our goal is to reduce the financial burden for you and your family."',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Other Payers',
    title: 'Other insurance situations',
    items: [
      {
        icon: 'Shield',
        title: 'Medicare Advantage',
        body: 'Hospice care is billed to Original Medicare, so families get a Medicare Summary Notice, not a plan EOB, for hospice.',
      },
      {
        icon: 'HandHeart',
        title: 'Medicaid',
        body: 'Covers hospice for eligible patients, and may help with nursing facility room and board.',
      },
      {
        icon: 'FileText',
        title: 'Private insurance',
        body: 'Coverage, copays and prior authorization vary by plan; benefits are verified at referral.',
      },
      {
        icon: 'Repeat',
        title: 'Revocation or discharge',
        body: 'If hospice ends, regular coverage resumes, with its usual copays and deductibles.',
      },
    ],
  },
  {
    type: 'table',
    eyebrow: 'Responsibilities',
    title: 'Itemized services and responsible disciplines',
    columns: ['Item', 'Description', 'Responsible discipline'],
    rows: [
      ['Medications', 'Covered drugs for symptom and pain management', 'Hospice physician, pharmacist'],
      ['Durable medical equipment (DME)', 'Beds, oxygen machines, wheelchairs, etc.', 'Clinical team, coordinating with vendors'],
      ['Professional service', 'Symptom management, medication administration, care coordination', 'Nurse'],
      ['Professional service', 'Emotional, psychosocial and resource support for patients and families', 'Social worker'],
      ['Professional service', 'Spiritual support', 'Chaplain or counselor'],
      ['Professional service', 'Counseling and bereavement services for families', 'Chaplain or bereavement coordinator'],
      ['Professional service', 'Personal care, such as bathing and grooming', 'Hospice aide'],
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Conversations',
    title: 'Five key points for every conversation',
    items: [
      {
        icon: 'HandHeart',
        title: 'Start with empathy',
        body: '"I understand this might feel overwhelming, and I\u2019m here to help make things clearer for you."',
      },
      {
        icon: 'MessageCircle',
        title: 'Simplify the complex',
        body: '"The EOB is essentially a summary of what your insurance covers and what your responsibility might be."',
      },
      {
        icon: 'Eye',
        title: 'Focus on transparency',
        body: '"Based on this EOB, your coverage includes [specific benefits], but you might see a small portion billed as a copay."',
      },
      {
        icon: 'HelpCircle',
        title: 'Address concerns',
        body: '"Do you have any questions about what\u2019s outlined here? Let\u2019s go through it together."',
      },
      {
        icon: 'Phone',
        title: 'Close with support',
        body: '"If anything remains unclear, you can reach out to me, or we can discuss it at your next visit."',
      },
    ],
  },
  {
    type: 'table',
    eyebrow: 'FAQs',
    title: 'Common questions from families',
    columns: ['Question', 'Suggested answer'],
    rows: [
      [
        '"Is this a bill?"',
        '"No. It\u2019s a summary of what was billed and paid. You\u2019ll only owe something if it says \u2018maximum you may be billed\u2019 with an amount."',
      ],
      [
        '"Why does it show such a large amount?"',
        '"That\u2019s what was billed to Medicare. Medicare pays the hospice; you usually owe nothing for hospice care."',
      ],
      [
        '"Why did I get a bill from another doctor?"',
        '"Care unrelated to the terminal illness, or not arranged by hospice, is billed separately. Let\u2019s check with our office."',
      ],
      [
        '"Will hospice pay for the nursing home?"',
        '"Hospice covers care related to the illness, but not room and board. Our social worker can help explore Medicaid."',
      ],
      [
        '"Something on here looks wrong."',
        '"Thank you for telling me. I\u2019ll connect you with our billing office to review it."',
      ],
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Errors and Fraud',
    title: 'Help families protect their benefits',
    items: [
      {
        icon: 'Search',
        title: 'Review statements',
        body: 'Check that services listed were actually received.',
      },
      {
        icon: 'FileText',
        title: 'Report concerns',
        body: 'Report possible billing errors to the Haloes Touch billing office or Compliance Officer.',
      },
      {
        icon: 'Phone',
        title: 'Medicare help',
        body: 'Families can call 1-800-MEDICARE with questions about their notice.',
      },
      {
        icon: 'Shield',
        title: 'Protect their number',
        body: 'Never share a Medicare number with unknown callers offering free services.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Practice',
    title: 'Scenarios: what would you do?',
    items: [
      {
        icon: 'Bell',
        title: 'A bill for $9,000?',
        body: 'A daughter is upset after seeing a large amount on her father\u2019s Medicare notice.',
      },
      {
        icon: 'Bell',
        title: 'Another bill',
        body: 'A wife received a bill from a specialist her husband saw for an unrelated problem.',
      },
      {
        icon: 'Bell',
        title: 'Nursing home costs',
        body: 'A son asks if hospice will pay for his mother\u2019s nursing home stay.',
      },
      {
        icon: 'Bell',
        title: 'Wrong date',
        body: 'A family notices a visit listed on a date when no one came.',
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
    question: 'True or false: an EOB is a bill.',
    answer: 'False. It summarizes what was billed and paid.',
  },
  {
    type: 'quiz',
    index: 2,
    total: 10,
    question: 'What is the EOB called for Original Medicare?',
    options: [
      'A) Medicare Summary Notice (MSN)',
      'B) Notice of Election',
      'C) Plan of Care',
      'D) Election Statement',
    ],
    answerLead: 'A.',
    answer: 'Medicare Summary Notice (MSN).',
  },
  {
    type: 'quiz',
    index: 3,
    total: 10,
    question: 'What three things does the EOB provide, according to our guidelines?',
    answer: 'Transparency, service tracking and financial clarity.',
  },
  {
    type: 'quiz',
    index: 4,
    total: 10,
    question: 'What copay may Medicare charge for hospice prescriptions?',
    answer: 'Up to $5 per prescription.',
  },
  {
    type: 'quiz',
    index: 5,
    total: 10,
    question: 'What may patients pay for inpatient respite care?',
    answer: 'Up to 5% of the Medicare-approved amount.',
  },
  {
    type: 'quiz',
    index: 6,
    total: 10,
    question: 'Is there a deductible for the Medicare hospice benefit?',
    answer: 'No.',
  },
  {
    type: 'quiz',
    index: 7,
    total: 10,
    question: 'Name two things the hospice benefit doesn\u2019t cover.',
    answer:
      'Any two: curative treatment for the terminal illness, care not arranged by hospice, room and board. (Unrelated conditions are billed under regular Medicare.)',
  },
  {
    type: 'quiz',
    index: 8,
    total: 10,
    question: 'Which discipline provides personal care such as bathing?',
    answer: 'The hospice aide.',
  },
  {
    type: 'quiz',
    index: 9,
    total: 10,
    question: 'Name the five key points for EOB conversations.',
    answer: 'Start with empathy, simplify, be transparent, address concerns, and close with support.',
  },
  {
    type: 'quiz',
    index: 10,
    total: 10,
    question: 'A family thinks their notice lists a visit that didn\u2019t happen. What do you do?',
    answer: 'Thank them and refer to the billing office or Compliance Officer to review.',
  },
  {
    type: 'wrapup',
    eyebrow: 'Wrap-up',
    title: 'Five things to take with you',
    items: [
      {
        icon: 'FileText',
        body: 'An EOB or MSN is a summary of what was billed and paid, not a bill.',
      },
      {
        icon: 'HandHeart',
        body: 'Explain hospice benefits in plain words, starting with empathy.',
      },
      {
        icon: 'DollarSign',
        body: 'Medicare covers hospice with no deductible; small copays may apply ($5 per prescription, 5% respite).',
      },
      {
        icon: 'Ban',
        body: 'Room and board and curative care aren\u2019t covered by the hospice benefit.',
      },
      {
        icon: 'ClipboardList',
        body: 'Know which discipline provides each service, and refer billing questions to the office.',
      },
    ],
  },
  {
    type: 'sources',
    eyebrow: 'References',
    title: 'Sources',
    rows: [
      {
        label: 'Haloes Touch',
        body: 'Haloes Touch Hospice EOB Guidelines: Explanation of Benefits General Overview.',
      },
      {
        label: 'CMS',
        body: 'Medicare Hospice Benefits (beneficiary booklet): coverage, copays and room and board.',
      },
      {
        label: 'CMS',
        body: 'Medicare.gov: reading your Medicare Summary Notice (MSN).',
      },
      {
        label: 'Regulation',
        body: '42 CFR Part 418: hospice eligibility, election, covered services and coinsurance (418.400).',
      },
      {
        label: 'Medicare',
        body: '1-800-MEDICARE for beneficiary questions about claims and notices.',
      },
    ],
    note: 'Additional references listed without a web search; verify titles and current amounts before distributing.',
  },
  {
    type: 'closing',
    title: 'Questions & discussion',
    subtitle: 'Thank you for using the EOB to build trust, accountability and quality in hospice care.',
    note: 'Please sign the in-service attendance roster before you leave.',
    address: 'Haloes Touch Hospice Inc. \u00b7 11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
]
