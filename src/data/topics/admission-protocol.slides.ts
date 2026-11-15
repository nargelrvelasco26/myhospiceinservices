import type { Slide } from '../../lib/types'

export const slides: Slide[] = [
  {
    type: 'cover',
    eyebrow: 'STAFF IN-SERVICE · ADMISSIONS',
    title: 'Hospice Admission',
    titleLine2: 'Protocol',
    subtitle:
      'A step-by-step admission process for compassionate care and CMS compliance',
    badge: 'In-service presentation & staff reading material',
    address: '11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
  {
    type: 'intro',
    eyebrow: 'ABOUT THIS IN-SERVICE',
    title: "Why we're here, and what you'll learn",
    paragraphs: [
      'A structured admission protocol makes sure every patient receives compassionate, efficient, high-quality care, and that every admission meets Medicare rules. Each discipline has a part, from the first referral call to the first visits.',
    ],
    note:
      'This material is for intake staff, nurses, the DON, the Medical Director, social workers, chaplains and the bereavement coordinator.',
    objectivesHeading: "By the end of this in-service, you'll be able to:",
    objectives: [
      'Explain why a structured admission protocol matters.',
      'Describe the 10 steps from referral to initiation of services.',
      'Identify who is responsible for each step.',
      'Meet the regulatory timelines for admission.',
      'Describe the key elements after admission.',
    ],
  },
  {
    type: 'cards',
    eyebrow: 'WHY IT MATTERS',
    title: 'Why a structured admission protocol matters',
    items: [
      {
        icon: 'Gavel',
        title: 'Ensures compliance',
        body: 'Meets Medicare, state and legal requirements, with the NOE and CTI completed on time.',
      },
      {
        icon: 'Link2',
        title: 'Streamlines the process',
        body: 'A clear roadmap minimizes delays and missed steps, with the same standard for every patient.',
      },
      {
        icon: 'Heart',
        title: 'Improves patient care',
        body: 'A holistic assessment and an individualized plan of care.',
      },
      {
        icon: 'Users',
        title: 'Supports teamwork',
        body: 'Nurses, physicians, social workers and chaplains communicate and plan together.',
      },
      {
        icon: 'Smile',
        title: 'Satisfies families',
        body: 'Transparency and timely care reduce confusion and anxiety.',
      },
      {
        icon: 'Shield',
        title: 'Manages risk',
        body: 'Fewer errors, and documented due diligence for audits or disputes.',
      },
    ],
  },
  {
    type: 'icongrid',
    eyebrow: 'THE FLOW',
    title: 'The 10-step admission flow',
    items: [
      { icon: 'Inbox', label: 'Referral received' },
      { icon: 'Search', label: 'Eligibility determination' },
      { icon: 'FileCheck', label: 'History & physical' },
      { icon: 'FileText', label: 'Review of medical records' },
      { icon: 'PenLine', label: 'Hospice order' },
      { icon: 'UserCheck', label: 'Certification of terminal illness' },
      { icon: 'ClipboardCheck', label: 'Initial and comprehensive assessment' },
      { icon: 'Send', label: 'Notice of Election' },
      { icon: 'ClipboardList', label: 'Care plan development' },
      { icon: 'Home', label: 'Initiation of services' },
    ],
  },
  {
    type: 'table',
    eyebrow: 'TIMELINES',
    title: 'Key admission timelines',
    columns: ['What', 'When', 'Who'],
    rows: [
      [
        'Initial assessment (RN)',
        'Within 48 hours after the election, unless the patient requests later',
        'Case manager (RN)',
      ],
      [
        'Certification of terminal illness',
        "Verbal within 2 days of the start of care if the written CTI isn't ready; written and signed before billing",
        'Medical Director and attending physician',
      ],
      [
        'Comprehensive assessment',
        'No later than 5 calendar days after the election',
        'IDG: RN, social worker, chaplain, bereavement',
      ],
      [
        'Notice of Election (NOE)',
        'Submitted and accepted within 5 calendar days after the election',
        'Intake coordinator or billing',
      ],
      [
        'Plan of care review',
        'At least every 15 days by the IDG',
        'Interdisciplinary group',
      ],
    ],
  },
  {
    type: 'cards',
    eyebrow: 'STEP 1 OF 10',
    title: 'Referral received',
    items: [
      {
        icon: 'UserCog',
        title: 'Responsible',
        body: 'Intake Coordinator.',
      },
      {
        icon: 'Inbox',
        title: 'Take the referral',
        body: 'Source: hospital, attending physician or family. Verify insurance eligibility and hospice benefit period.',
      },
      {
        icon: 'FileText',
        title: 'Record the details',
        body: 'Record patient demographics and referral details in Hospice MD, with the patient in pending status.',
      },
      {
        icon: 'Lightbulb',
        title: 'Key details',
        body: "Check for prior hospice elections, since they affect the benefit period, and for Medicare Advantage, Medicaid or private insurance. Note the referral source and urgency, and respond promptly; delays can mean patients miss comfort care. See the Intake & Referral Process in-service.",
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'STEP 2 OF 10',
    title: 'Eligibility determination',
    items: [
      {
        icon: 'UserCog',
        title: 'Responsible',
        body: 'Director of Nursing; Medical Director.',
      },
      {
        icon: 'Search',
        title: 'Check the criteria',
        body: 'Terminal illness with a prognosis of 6 months or less, if the illness runs its usual course.',
      },
      {
        icon: 'UserCheck',
        title: 'Certify eligibility',
        body: "Certification by the hospice Medical Director and the attending physician, if the patient has one.",
      },
      {
        icon: 'FileText',
        title: 'Review history',
        body: 'Review medical history, diagnosis and recent treatments.',
      },
      {
        icon: 'Lightbulb',
        title: 'Key details',
        body: 'Use the Medicare local coverage determination (LCD) guidelines for the diagnosis. Look for measurable decline, such as weight loss, PPS, FAST or hospitalizations and labs, and consider related comorbidities. See the Hospice Eligibility & LCD Documentation in-service.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'STEP 3 OF 10',
    title: 'History & physical (H&P)',
    items: [
      {
        icon: 'UserCog',
        title: 'Responsible',
        body: 'Attending Physician; Nurse Practitioner.',
      },
      {
        icon: 'FileCheck',
        title: 'Verify the diagnosis',
        body: 'Complete or obtain the H&P to verify the terminal diagnosis.',
      },
      {
        icon: 'Stethoscope',
        title: 'When documentation is limited',
        body: "If the H&P is unavailable, consider whether a Nurse Practitioner's assessment can serve as a substitute, ensuring compliance with regulations.",
      },
      {
        icon: 'Lightbulb',
        title: 'Key details',
        body: "The H&P supports the physician's clinical judgment for certification. An NP may document clinical findings, but cannot certify terminal illness for hospice. Recent records are most useful, ideally within the last 30 days. Confirm with the Medical Director when documentation is limited.",
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'STEP 4 OF 10',
    title: 'Review of medical records',
    items: [
      {
        icon: 'UserCog',
        title: 'Responsible',
        body: 'Director of Nursing; Medical Director; Nurse Practitioner.',
      },
      {
        icon: 'FileText',
        title: 'Review records',
        body: 'Obtain and review all pertinent medical records for comprehensive care planning.',
      },
      {
        icon: 'PenLine',
        title: 'Get a release signed',
        body: "Obtain a signed release of information from the patient or POA, and use it to request records from the patient's physicians' offices.",
      },
      {
        icon: 'Lightbulb',
        title: 'Key details',
        body: 'Records support eligibility and the plan of care. Request recent notes, labs, imaging, medication lists and hospital discharge summaries. HIPAA allows sharing for treatment, but follow Haloes Touch release policy. Log requests and follow up on missing records.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'STEP 5 OF 10',
    title: 'Hospice order',
    items: [
      {
        icon: 'UserCog',
        title: 'Responsible',
        body: 'Attending Physician; Medical Director.',
      },
      {
        icon: 'PenLine',
        title: 'Obtain the order',
        body: 'Obtain a written order for hospice care from the attending physician.',
      },
      {
        icon: 'Phone',
        title: 'If no order is available',
        body: 'Contact the attending physician or involve the Medical Director; document all communication.',
      },
      {
        icon: 'Stethoscope',
        title: 'NP support',
        body: 'If needed, an NP may provide clinical justification to support the request, with the Medical Director evaluating and issuing the order.',
      },
      {
        icon: 'Lightbulb',
        title: 'Key details',
        body: 'Document every call, fax and conversation, with dates and times. Confirm who the patient wants as attending physician. The order to evaluate and admit is different from the CTI (step 6). Escalate delays to the DON.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'STEP 6 OF 10',
    title: 'Certification of terminal illness (CTI)',
    items: [
      {
        icon: 'UserCog',
        title: 'Responsible',
        body: 'Medical Director (and attending physician, if any).',
      },
      {
        icon: 'UserCheck',
        title: 'Obtain the CTI',
        body: 'Obtain the CTI for the first benefit period from the Medical Director and the attending physician.',
      },
      {
        icon: 'Mic',
        title: 'Verbal certification',
        body: "Verbal certification is acceptable within 2 days of the start of care if the written CTI isn't ready.",
      },
      {
        icon: 'FileCheck',
        title: 'Written certification',
        body: 'Written, signed CTI must be on file before the claim is submitted.',
      },
      {
        icon: 'Lightbulb',
        title: 'Key details',
        body: "The CTI includes the physician's brief narrative explaining the prognosis, written by the physician based on clinical findings. Document verbal certification in the record: who, when, and the prognosis. An NP cannot certify terminal illness. See the Certification & Recertification (CTI) in-service.",
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'STEP 7A OF 10',
    title: 'Initial assessment',
    items: [
      {
        icon: 'UserCog',
        title: 'Responsible',
        body: 'Case Manager (RN).',
      },
      {
        icon: 'ClipboardCheck',
        title: 'Complete within 48 hours',
        body: 'Complete the initial assessment within 48 hours after the election of hospice care, unless the patient or representative requests a later time.',
      },
      {
        icon: 'Lightbulb',
        title: 'Key details',
        body: 'Assess immediate physical, psychosocial and emotional needs, address urgent comfort needs and safety, review patient rights and obtain consents, and start the initial plan of care. See the Start of Care Nursing Checklist in-service.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'STEP 7B OF 10',
    title: 'Comprehensive assessment',
    items: [
      {
        icon: 'UserCog',
        title: 'Responsible',
        body: 'Case Manager; Social Worker; Chaplain; Bereavement Coordinator.',
      },
      {
        icon: 'HeartPulse',
        title: 'Assess the whole person',
        body: 'Assess physical, emotional and spiritual health, and assess pain and symptom management.',
      },
      {
        icon: 'Clock',
        title: 'Complete within 5 days',
        body: 'Complete no later than 5 calendar days after the election of hospice.',
      },
      {
        icon: 'Lightbulb',
        title: 'Key details',
        body: 'Completed by the IDG, with the attending physician. Includes an initial bereavement risk assessment of the family and a drug profile review. Collects HOPE admission data, and is updated at least every 15 days.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'STEP 8 OF 10',
    title: 'Notice of Election (NOE)',
    items: [
      {
        icon: 'UserCog',
        title: 'Responsible',
        body: 'Intake Coordinator.',
      },
      {
        icon: 'PenLine',
        title: 'Get the signature',
        body: "Obtain the patient's or family's signature on the Election of Benefits form.",
      },
      {
        icon: 'Send',
        title: 'Submit on time',
        body: 'Submit the NOE to Medicare within 5 calendar days of the election.',
      },
      {
        icon: 'Lightbulb',
        title: 'Key details',
        body: "Check every required element of the election statement before filing. A late NOE makes days before acceptance non-covered, and the patient can't be billed for them. Confirm acceptance, not just submission, and fix rejections immediately. See the Hospice Billing Basics in-service.",
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'STEP 9 OF 10',
    title: 'Care plan development',
    items: [
      {
        icon: 'UserCog',
        title: 'Responsible',
        body: 'Interdisciplinary Group (IDG).',
      },
      {
        icon: 'ClipboardList',
        title: 'Develop the plan',
        body: "Develop an individualized plan of care based on the patient's needs and preferences.",
      },
      {
        icon: 'Lightbulb',
        title: 'Key details',
        body: 'Established with the attending physician, the patient or representative, and the caregiver. Includes problems, measurable goals and interventions, and lists visit frequency, medications, DME and supplies. Reviewed and updated at least every 15 days. See the Plan of Care & IDG Updates in-service.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'STEP 10 OF 10',
    title: 'Initiation of hospice services',
    items: [
      {
        icon: 'UserCog',
        title: 'Responsible',
        body: 'Case Manager; Social Worker; Chaplain; Bereavement Coordinator; Hospice Aide.',
      },
      {
        icon: 'Home',
        title: 'Begin services',
        body: 'Begin hospice services based on the care plan: nursing visits, social work and chaplain support, and delivery of medical equipment and supplies.',
      },
      {
        icon: 'Lightbulb',
        title: 'Key details',
        body: 'Schedule first visits for each discipline, and make sure DME and the comfort kit arrive promptly. Create the aide assignment to match the plan of care, give the family the visit schedule and 24/7 number, and offer volunteer support as appropriate.',
      },
    ],
  },
  {
    type: 'table',
    eyebrow: 'RESPONSIBILITIES',
    title: 'Discipline responsibilities at a glance',
    columns: ['#', 'Step', 'Responsible'],
    rows: [
      ['1', 'Referral received', 'Intake Coordinator'],
      ['2', 'Eligibility determination', 'Director of Nursing; Medical Director'],
      ['3', 'History & physical', 'Attending Physician; Nurse Practitioner'],
      [
        '4',
        'Review of medical records',
        'Director of Nursing; Medical Director; Nurse Practitioner',
      ],
      ['5', 'Hospice order', 'Attending Physician; Medical Director'],
      [
        '6',
        'Certification of terminal illness',
        'Medical Director (and attending physician)',
      ],
      ['7A', 'Initial assessment', 'Case Manager (RN)'],
      [
        '7B',
        'Comprehensive assessment',
        'Case Manager; Social Worker; Chaplain; Bereavement Coordinator',
      ],
      ['8', 'Notice of Election', 'Intake Coordinator'],
      ['9', 'Care plan development', 'Interdisciplinary Group'],
      [
        '10',
        'Initiation of services',
        'Case Manager; Social Worker; Chaplain; Bereavement Coordinator; Hospice Aide',
      ],
    ],
  },
  {
    type: 'cards',
    eyebrow: 'AFTER ADMISSION',
    title: 'Key elements after admission',
    items: [
      {
        icon: 'Monitor',
        title: 'Family and caregiver education',
        body: 'Teach about hospice services, care expectations and emergency protocols; answer questions and concerns.',
      },
      {
        icon: 'RefreshCw',
        title: 'Ongoing assessment',
        body: "Monitor the patient's condition and adjust the plan of care at regular IDG meetings (at least every 15 days) and follow-ups.",
      },
      {
        icon: 'Zap',
        title: 'Symptom management',
        body: 'Address pain, nausea, shortness of breath and other distressing symptoms promptly.',
      },
    ],
  },
  {
    type: 'icongrid',
    eyebrow: 'PITFALLS',
    title: 'Common admission pitfalls',
    items: [
      { icon: 'PenLine', label: 'Election statement missing elements' },
      { icon: 'UserCheck', label: 'Missing or late CTI' },
      { icon: 'Clock', label: 'Late Notice of Election' },
      { icon: 'FileCheck', label: 'No H&P or supporting records' },
      { icon: 'Phone', label: 'Undocumented physician calls' },
      { icon: 'ClipboardList', label: 'Generic plan of care' },
      { icon: 'Users', label: 'Comprehensive assessment past 5 days' },
      { icon: 'Truck', label: 'Delayed equipment or medicines' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'COMMUNICATION',
    title: 'Communication keeps admissions on track',
    items: [
      {
        icon: 'MessageCircle',
        title: 'Huddle on new referrals',
        body: 'Intake, the DON and the admitting nurse share referral details early.',
      },
      {
        icon: 'Laptop',
        title: 'Use Hospice MD',
        body: "Keep the patient's status and documents current in the EMR.",
      },
      {
        icon: 'Phone',
        title: 'Document calls',
        body: 'Record physician calls, orders and verbal certifications.',
      },
      {
        icon: 'Send',
        title: 'Same-day handoffs',
        body: 'Send signed forms to the office the same day, so the NOE can be filed.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'PRACTICE',
    title: 'Scenarios: what would you do?',
    items: [
      {
        icon: 'FileText',
        title: '1. No hospice order',
        body: "The hospital referral arrives, but the attending physician hasn't signed a hospice order.",
      },
      {
        icon: 'FileText',
        title: '2. Written CTI delayed',
        body: "The Medical Director agrees the patient is eligible, but the written CTI won't be signed until next week.",
      },
      {
        icon: 'FileText',
        title: '3. Day 4, no NOE',
        body: "It's day 4 after election, and the signed election form is still in the nurse's bag.",
      },
      {
        icon: 'FileText',
        title: '4. Missing records',
        body: "The H&P is missing, and the referral has few details about the patient's decline.",
      },
    ],
  },
  {
    type: 'quizIntro',
    eyebrow: 'KNOWLEDGE CHECK',
    title: 'Knowledge check',
    subtitle: '10 questions. Ask the group each question; the answer is on the next slide.',
  },
  {
    type: 'quiz',
    index: 1,
    total: 10,
    question: 'How many steps are in the Haloes Touch admission protocol?',
    answer: 'Ten, from referral received to initiation of hospice services.',
  },
  {
    type: 'quiz',
    index: 2,
    total: 10,
    question: 'Who receives the referral and verifies insurance and benefit period?',
    answer: 'The Intake Coordinator.',
  },
  {
    type: 'quiz',
    index: 3,
    total: 10,
    question: 'What is the eligibility prognosis for hospice?',
    answer: '6 months or less if the illness runs its usual course.',
  },
  {
    type: 'quiz',
    index: 4,
    total: 10,
    question: 'Who certifies terminal illness for the first benefit period?',
    options: [
      'A) The Nurse Practitioner alone',
      'B) The hospice Medical Director and the attending physician, if any',
      'C) The Intake Coordinator',
      'D) The social worker',
    ],
    answerLead: 'B. The hospice Medical Director and the attending physician, if any',
    answer: 'The hospice Medical Director and the attending physician, if any. An NP cannot certify terminal illness.',
  },
  {
    type: 'quiz',
    index: 5,
    total: 10,
    question: "If the written CTI isn't ready, what is required within 2 days?",
    answer: 'Verbal certification, documented in the record; the written CTI must be signed before billing.',
  },
  {
    type: 'quiz',
    index: 6,
    total: 10,
    question: 'Within how long must the RN complete the initial assessment?',
    answer: 'Within 48 hours after the election of hospice care.',
  },
  {
    type: 'quiz',
    index: 7,
    total: 10,
    question: 'Within how long must the comprehensive assessment be completed?',
    answer: 'No later than 5 calendar days after the election.',
  },
  {
    type: 'quiz',
    index: 8,
    total: 10,
    question: 'When must the NOE be submitted?',
    answer: 'Within 5 calendar days after the election.',
  },
  {
    type: 'quiz',
    index: 9,
    total: 10,
    question: 'Who develops the plan of care, and how often is it reviewed?',
    answer: 'The IDG, with the attending physician and family; reviewed at least every 15 days.',
  },
  {
    type: 'quiz',
    index: 10,
    total: 10,
    question: 'Name the three key elements after admission.',
    answer: 'Family and caregiver education, ongoing assessment, and symptom management.',
  },
  {
    type: 'wrapup',
    eyebrow: 'WRAP-UP',
    title: 'Five things to take with you',
    items: [
      { icon: 'ClipboardList', body: 'Follow the 10-step protocol for every admission, in order.' },
      { icon: 'UserCog', body: 'Know your role: each step has a responsible discipline.' },
      {
        icon: 'UserCheck',
        body: 'CTI: Medical Director and attending physician; verbal within 2 days; written before billing.',
      },
      {
        icon: 'Clock',
        body: '48-hour initial assessment; 5-day comprehensive assessment and NOE.',
      },
      {
        icon: 'Heart',
        body: 'After admission: educate families, reassess every 15 days, manage symptoms.',
      },
    ],
  },
  {
    type: 'sources',
    eyebrow: 'REFERENCES',
    title: 'Sources',
    rows: [
      {
        label: 'Haloes Touch',
        body: 'Haloes Touch Hospice Admission Protocol for CMS Compliance.',
      },
      {
        label: 'Regulation',
        body: '42 CFR 418.20–418.24: eligibility, certification of terminal illness and election of hospice care.',
      },
      {
        label: 'Regulation',
        body: '42 CFR 418.54: initial and comprehensive assessment; 42 CFR 418.56: IDG and plan of care.',
      },
      {
        label: 'CMS',
        body: 'Medicare Benefit Policy Manual, Chapter 9; Medicare Claims Processing Manual, Chapter 11 (Notice of Election).',
      },
      {
        label: 'Regulation',
        body: '42 CFR 418.52: patient rights at admission; 42 CFR 418.64(d): bereavement assessment.',
      },
    ],
    note: 'Regulatory references listed without a web search; verify current versions before distributing.',
  },
  {
    type: 'closing',
    title: 'Questions & discussion',
    subtitle:
      'Thank you: by following this protocol, we create comfort and dignity for patients, and support their families.',
    note: 'Please sign the in-service attendance roster before you leave.',
    address: 'Haloes Touch Hospice Inc. · 11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
]
