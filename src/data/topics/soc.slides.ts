import type { Slide } from '../../lib/types'

export const slides: Slide[] = [
  {
    type: 'cover',
    eyebrow: 'Nurse In-Service · Admissions',
    title: 'Start of Care /',
    titleLine2: 'Nursing Checklist',
    subtitle: 'What every hospice nurse must cover at the admission visit',
    badge: 'In-service presentation & staff reading material',
    address: '11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
  {
    type: 'intro',
    eyebrow: "About This In-Service",
    title: "Why we're here, and what you'll learn",
    paragraphs: [
      'The start of care visit sets the tone for the entire hospice stay. The family forms first impressions, consents are signed, and the nurse gathers the clinical evidence that supports eligibility.',
      'A checklist means nothing gets missed. This in-service walks through the ten steps of the Haloes Touch Start of Care Nursing Checklist, from reviewing the referral to documenting the visit.',
    ],
    note: 'This material is for RNs who perform admissions, and is helpful for clinical managers and intake staff.',
    objectivesHeading: 'By the end, you will be able to:',
    objectives: [
      'Prepare for the visit by reviewing the referral and eligibility.',
      'Explain hospice and obtain all required consents.',
      'Complete a comprehensive, comfort-focused assessment.',
      'Start services, equipment and the initial plan of care.',
      'Document completely and communicate with the IDG.',
    ],
  },
  {
    type: 'icongrid',
    eyebrow: 'Overview',
    title: 'The 10 steps of the SOC checklist',
    items: [
      { icon: 'Search', label: 'Referral review and eligibility' },
      { icon: 'PenLine', label: 'Introduction and consent' },
      { icon: 'Stethoscope', label: 'Comprehensive assessment' },
      { icon: 'Pill', label: 'Medication and symptom review' },
      { icon: 'UtensilsCrossed', label: 'Nutrition and hydration' },
      { icon: 'Shield', label: 'Environment and safety' },
      { icon: 'Users', label: 'Family and caregiver assessment' },
      { icon: 'Send', label: 'Initiate hospice services' },
      { icon: 'ClipboardList', label: 'Plan of care' },
      { icon: 'Laptop', label: 'Documentation' },
    ],
  },
  {
    type: 'timeline',
    eyebrow: 'Timeline',
    title: 'Key timelines around admission',
    items: [
      {
        year: 'Election',
        body: 'The patient elects hospice, and an effective date is set.',
        color: 'bg-hospice-green',
      },
      {
        year: '48 hrs',
        body: 'Initial assessment: the RN visit happens within 48 hours of election, unless the patient asks for later.',
        color: 'bg-hospice-gold',
      },
      {
        year: 'Certification',
        body: 'Verbal certification within 2 days; written certification completed before billing.',
        color: 'bg-slate-500',
      },
      {
        year: '5 days',
        body: 'NOE: the Notice of Election is filed by the office within 5 calendar days.',
        color: 'bg-rose-700/80',
      },
      {
        year: 'Comprehensive',
        body: 'The comprehensive assessment is completed by the IDG within 5 days of election. Late paperwork can make admission days non-billable, so share signed forms with the office the same day.',
        color: 'bg-hospice-green',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Checklist Step 1 of 10',
    title: 'Referral review and eligibility',
    items: [
      {
        icon: 'FileText',
        title: 'Review terminal diagnosis and prognosis',
        body: 'Note measurable decline such as weight loss, PPS or FAST score changes, abnormal labs or recent hospitalizations.',
      },
      {
        icon: 'CheckCircle2',
        title: 'Confirm hospice eligibility',
        body: 'Life expectancy of six months or less if the illness runs its usual course, with related diagnoses and comorbidities supporting the prognosis.',
      },
      {
        icon: 'Stethoscope',
        title: 'Verify physician certification',
        body: 'Confirm the certification of terminal illness has been received, or is pending, before the visit.',
      },
      {
        icon: 'FileCheck',
        title: 'Review referral documents',
        body: 'Review labs, history and physical, and other referral records, and flag concerns to the clinical manager before the visit.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Checklist Step 2 of 10',
    title: 'Introduction and consent',
    items: [
      {
        icon: 'MessageCircle',
        title: 'Explain hospice philosophy and services',
        body: 'Use plain words the family can understand — comfort, at home, with a team — and explain that curative treatment stops while other care continues.',
      },
      {
        icon: 'PenLine',
        title: 'Election of Hospice Benefit',
        body: 'Make sure the election statement is complete, signed and dated by the patient or an authorized representative.',
      },
      {
        icon: 'Lock',
        title: 'HIPAA authorization and privacy notice',
        body: 'Review the notice of privacy practices and patient rights, and obtain the HIPAA authorization.',
      },
      {
        icon: 'FileText',
        title: 'DNR and advance directives',
        body: 'Review the POLST or advance directive with the family, and keep a copy in the chart.',
      },
      {
        icon: 'Pill',
        title: 'Medication consent and financial responsibility',
        body: 'Obtain medication consent and clearly explain financial responsibility before moving on.',
      },
      {
        icon: 'HandHeart',
        title: 'Welcome packet and contact information',
        body: 'Provide the welcome packet and the 24/7 on-call number.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Consents',
    title: 'The election statement: get it right',
    items: [
      {
        icon: 'PenLine',
        title: 'Signed and dated',
        body: 'Signed and dated by the patient or an authorized representative, with that authority documented.',
      },
      {
        icon: 'Calendar',
        title: 'Effective date',
        body: 'The date hospice begins — it cannot be before the date of signature.',
      },
      {
        icon: 'UserRound',
        title: 'Attending physician',
        body: "Names the patient's chosen attending physician.",
      },
      {
        icon: 'FileCheck',
        title: 'Required statements',
        body: 'Includes the waiver of curative care, the right to revoke, and an addendum available on request.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Checklist Step 3 of 10',
    title: 'Comprehensive patient assessment',
    items: [
      {
        icon: 'Eye',
        title: 'Use measurable findings',
        body: 'Avoid vague terms like "stable" or "WNL" — document specific, measurable findings that support eligibility and set a baseline.',
      },
      {
        icon: 'Scale',
        title: 'Capture baseline scores',
        body: 'Record baseline weight, PPS and FAST scores at admission.',
      },
      {
        icon: 'Zap',
        title: 'Use nonverbal pain scales',
        body: 'Use tools such as PAINAD for patients who cannot self-report pain.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Screen for risk',
        body: 'Assess fall risk and pressure injury risk, and complete the HOPE admission data elements.',
      },
    ],
  },
  {
    type: 'icongrid',
    eyebrow: 'Body Systems',
    title: 'Assessment by body system',
    items: [
      { icon: 'Activity', label: 'Vital signs' },
      { icon: 'Zap', label: 'Pain' },
      { icon: 'Shield', label: 'Skin and wounds' },
      { icon: 'Wind', label: 'Respiratory' },
      { icon: 'Brain', label: 'Neuro and cognition' },
      { icon: 'Smile', label: 'Emotional status' },
      { icon: 'UtensilsCrossed', label: 'GI and appetite' },
      { icon: 'Droplet', label: 'GU and continence' },
      { icon: 'PersonStanding', label: 'Function and ADLs' },
      { icon: 'ThermometerSun', label: 'Weight and nutrition' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Checklist Step 4 of 10',
    title: 'Medication and symptom review',
    items: [
      {
        icon: 'Pill',
        title: 'Reconcile current medications',
        body: 'Check effectiveness, side effects and interactions, and look for duplicate drug therapy.',
      },
      {
        icon: 'HeartPulse',
        title: 'Identify comfort-focused medication needs',
        body: 'Identify medicines related to the terminal illness, which are covered by hospice, and note any drugs needing lab monitoring.',
      },
      {
        icon: 'TrendingDown',
        title: 'Recommend deprescribing as appropriate',
        body: "Recommend stopping medications that no longer serve the patient's comfort goals.",
      },
      {
        icon: 'BookOpen',
        title: 'Assess for medication education needs',
        body: 'Discuss the comfort kit and controlled substance safety with the family.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Checklist Step 5 of 10',
    title: 'Nutrition and hydration',
    items: [
      {
        icon: 'UtensilsCrossed',
        title: 'Assess current intake',
        body: 'Record the percentage of meals eaten and note any change from baseline.',
      },
      {
        icon: 'Droplet',
        title: 'Screen for swallowing difficulties',
        body: 'Screen for aspiration risk and document any swallowing concerns.',
      },
      {
        icon: 'Scale',
        title: 'Weight and nutritional concerns',
        body: 'Record baseline weight and mid-arm circumference, and prepare families that reduced intake is expected near the end of life.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Checklist Step 6 of 10',
    title: 'Environment and safety',
    items: [
      {
        icon: 'Home',
        title: 'Home safety check',
        body: 'Check clutter, lighting, grab bars, smoke alarms and oxygen safety.',
      },
      {
        icon: 'Bed',
        title: 'Bed and seating arrangements',
        body: 'Evaluate fall risk and the path to the bathroom.',
      },
      {
        icon: 'Package',
        title: 'Equipment needs',
        body: 'Identify needs such as a hospital bed, oxygen or a walker, and check medication storage or a lockbox.',
      },
      {
        icon: 'Siren',
        title: 'Emergency plan explained',
        body: 'Confirm the plan includes the 24/7 hospice number, and note any pets, weapons or visit safety concerns.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Checklist Step 7 of 10',
    title: 'Family and caregiver assessment',
    items: [
      {
        icon: 'Users',
        title: 'Identify primary caregiver(s)',
        body: 'Identify the decision-maker or legal representative along with the primary caregiver.',
      },
      {
        icon: 'HandHeart',
        title: 'Assess caregiver understanding and coping',
        body: 'Look for caregiver strain, health concerns and work demands that may affect care.',
      },
      {
        icon: 'BookOpen',
        title: 'Provide caregiver teaching as needed',
        body: 'Address teaching needs identified during the visit.',
      },
      {
        icon: 'MessageCircle',
        title: 'Review caregiver availability and needs',
        body: 'Note any gaps in 24-hour coverage, and refer to social work and chaplain as needed.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Checklist Step 8 of 10',
    title: 'Initiate hospice services',
    items: [
      {
        icon: 'PackageCheck',
        title: 'Place DME and pharmacy orders',
        body: 'Order urgent DME before leaving the home, and confirm pharmacy and comfort kit delivery.',
      },
      {
        icon: 'Send',
        title: 'Notify team of new admission',
        body: 'Notify the team right away so services can start quickly.',
      },
      {
        icon: 'Handshake',
        title: 'Coordinate with IDG',
        body: 'Schedule social work and chaplain visits, and create the hospice aide assignment.',
      },
      {
        icon: 'Calendar',
        title: 'Schedule next visits',
        body: 'Give the family the visit schedule before you leave.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Checklist Step 9 of 10',
    title: 'Plan of care (POC)',
    items: [
      {
        icon: 'ClipboardList',
        title: 'Create initial POC in EMR',
        body: "Build a plan that is individualized to the patient's assessment findings.",
      },
      {
        icon: 'HeartPulse',
        title: 'Address urgent needs and comfort measures',
        body: 'Prioritize measurable goals and interventions that address comfort first.',
      },
      {
        icon: 'Calendar',
        title: 'Establish visit frequency and disciplines',
        body: 'List the visit frequency for each discipline, and include medications, DME and supplies.',
      },
      {
        icon: 'FileCheck',
        title: 'Obtain and verify physician orders',
        body: 'Confirm orders are signed. The plan of care is reviewed by the IDG at least every 15 days.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Checklist Step 10 of 10',
    title: 'Documentation',
    items: [
      {
        icon: 'Laptop',
        title: 'Complete SOC notes in EMR',
        body: 'Complete notes promptly, with a 48-hour target, and write findings that support eligibility.',
      },
      {
        icon: 'FolderOpen',
        title: 'Upload signed forms and consents',
        body: 'Upload consents the same day so the office can file the Notice of Election within 5 days.',
      },
      {
        icon: 'ClipboardCheck',
        title: 'Document POC, goals and interventions',
        body: 'Use SBAR format for clear, organized documentation.',
      },
      {
        icon: 'MessageCircle',
        title: 'Communicate findings to clinical manager and IDG',
        body: 'Confirm the aide assignment matches the plan of care.',
      },
    ],
  },
  {
    type: 'icongrid',
    eyebrow: 'Pitfalls',
    title: 'Common admission pitfalls',
    items: [
      { icon: 'FileText', label: 'Incomplete election statement' },
      { icon: 'UserX', label: 'Missing attending physician' },
      { icon: 'Clock', label: 'Late consents to the office' },
      { icon: 'Pill', label: 'Medications not reconciled' },
      { icon: 'Eye', label: 'Vague findings ("stable," "WNL")' },
      { icon: 'ClipboardList', label: 'Plan of care not individualized' },
      { icon: 'Users', label: 'IDG not notified' },
      { icon: 'AlertTriangle', label: 'Safety risks not addressed' },
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
    question: 'How many steps are on the Haloes Touch SOC Nursing Checklist?',
    answer: 'Ten, from referral review to documentation.',
  },
  {
    type: 'quiz',
    index: 2,
    total: 10,
    question: 'Within how long must the RN complete the initial assessment?',
    options: ['24 hours', '48 hours after election', '7 days', '14 days'],
    answerLead: 'B. 48 hours after election',
    answer: 'Within 48 hours after the election of hospice, unless the patient requests otherwise.',
  },
  {
    type: 'quiz',
    index: 3,
    total: 10,
    question: 'Name four consents or documents reviewed at admission.',
    answer: 'Any four: election of hospice benefit, HIPAA, DNR/advance directives, medication consent, financial responsibility, welcome packet.',
  },
  {
    type: 'quiz',
    index: 4,
    total: 10,
    question: 'Name three required elements of the election statement.',
    answer: 'Any three: signature and date, effective date, attending physician, waiver of curative care, right to revoke.',
  },
  {
    type: 'quiz',
    index: 5,
    total: 10,
    question: 'Why avoid "stable" or "WNL" in the SOC assessment?',
    answer: 'Because specific, measurable findings are needed to support eligibility and set a baseline.',
  },
  {
    type: 'quiz',
    index: 6,
    total: 10,
    question: 'What does a drug profile review look for?',
    answer: 'Effectiveness, side effects, interactions, duplicate therapy, and drugs needing lab monitoring.',
  },
  {
    type: 'quiz',
    index: 7,
    total: 10,
    question: 'Name three home safety items to check.',
    answer: 'Any three: clutter, lighting, grab bars, bed and seating, equipment, oxygen safety, emergency plan.',
  },
  {
    type: 'quiz',
    index: 8,
    total: 10,
    question: 'Which disciplines should be coordinated after admission?',
    answer: 'The IDG, including social work, chaplain and the hospice aide, plus the physician.',
  },
  {
    type: 'quiz',
    index: 9,
    total: 10,
    question: 'Name three features of a good initial plan of care.',
    answer: 'Any three: individualized, measurable goals, interventions, visit frequency, medications and DME.',
  },
  {
    type: 'quiz',
    index: 10,
    total: 10,
    question: 'Why upload signed consents the same day?',
    answer: 'So the office can file the Notice of Election within 5 days and keep admission days billable.',
  },
  {
    type: 'wrapup',
    eyebrow: 'Wrap-Up',
    title: 'Five things to take with you',
    items: [
      {
        icon: 'Search',
        body: 'Review the referral and eligibility before you arrive.',
      },
      {
        icon: 'PenLine',
        body: 'Explain hospice clearly, and check every consent before you leave.',
      },
      {
        icon: 'Stethoscope',
        body: 'Assess head to toe with specific, measurable findings.',
      },
      {
        icon: 'Send',
        body: 'Start DME, pharmacy and the IDG the same day.',
      },
      {
        icon: 'Laptop',
        body: 'Document promptly, upload consents, and report to the team.',
      },
    ],
  },
  {
    type: 'sources',
    eyebrow: 'References',
    title: 'Sources',
    rows: [
      {
        label: 'Checklist',
        body: 'Haloes Touch Hospice Start of Care Nursing Checklist.',
      },
      {
        label: 'Regulation',
        body: '42 CFR 418.54: initial and comprehensive assessment, including drug profile review.',
      },
      {
        label: 'Regulation',
        body: '42 CFR 418.22 and 418.24: certification of terminal illness and election of hospice care; 42 CFR 418.56: plan of care.',
      },
      {
        label: 'CMS',
        body: 'Medicare Claims Processing Manual, Chapter 11: Notice of Election timing; HOPE guidance manual.',
      },
      {
        label: 'Haloes Touch',
        body: 'Admission policy, consent forms and documentation standards.',
      },
    ],
    note: 'Listed without a web search; verify titles and current versions before distributing.',
  },
  {
    type: 'closing',
    title: 'Questions & discussion',
    subtitle: 'Thank you for making every admission thorough, compassionate and complete.',
    note: 'Please sign the in-service attendance roster before you leave.',
    address: 'Haloes Touch Hospice Inc. \u00b7 11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
]
