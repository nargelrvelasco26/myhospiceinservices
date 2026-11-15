import type { Slide } from '../../lib/types'

export const slides: Slide[] = [
  {
    type: 'cover',
    eyebrow: 'Nurse In-Service · Comprehensive Assessment & HOPE',
    title: 'Comprehensive',
    titleLine2: 'Assessment & HOPE',
    subtitle: 'Assessing the whole person, and capturing accurate HOPE data',
    badge: 'In-service presentation & staff reading material',
    address: '11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
  {
    type: 'intro',
    eyebrow: 'About This In-Service',
    title: "Why we're here, and what you'll learn",
    paragraphs: [
      'The comprehensive assessment is the foundation of the plan of care. Since October 2025, HOPE has captured standardized data at set points in the hospice stay, feeding quality measures and payment.',
    ],
    note: 'This material is for RNs and LPNs.',
    objectivesHeading: 'By the end, you will be able to:',
    objectives: [
      'Follow the required assessment timelines.',
      'Name the required content areas of the comprehensive assessment.',
      'Explain HOPE and its timepoints.',
      'Apply symptom impact rating and follow-up visit rules.',
      'Keep assessments accurate and consistent.',
    ],
  },
  {
    type: 'timeline',
    eyebrow: 'Timeline',
    title: 'Assessment timelines',
    items: [
      {
        year: '48 hrs',
        body: 'Initial assessment: completed by the RN within 48 hours of election.',
        color: 'bg-hospice-green',
      },
      {
        year: '5 days',
        body: 'Comprehensive assessment: completed by the IDG within 5 calendar days.',
        color: 'bg-hospice-gold',
      },
      {
        year: '15 days',
        body: "Updates: the IDG updates the comprehensive assessment at least every 15 days, and whenever the patient's condition changes.",
        color: 'bg-slate-500',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Requirements',
    title: 'What the comprehensive assessment must cover',
    items: [
      {
        icon: 'ClipboardList',
        title: 'Admitting condition',
        body: 'The diagnoses and condition that led to hospice admission.',
      },
      {
        icon: 'PersonStanding',
        title: 'Functional status',
        body: "The patient's ability to perform daily activities.",
      },
      {
        icon: 'Hourglass',
        title: 'Imminence of death',
        body: 'Signs and symptoms indicating how close the patient is to death.',
      },
      {
        icon: 'Gauge',
        title: 'Symptom severity',
        body: 'Pain and other symptoms, and their impact on the patient.',
      },
      {
        icon: 'Pill',
        title: 'Drug profile review',
        body: 'A review of all medicines the patient is taking.',
      },
      {
        icon: 'Bird',
        title: 'Bereavement',
        body: "The risk level and needs of the patient's family.",
      },
      {
        icon: 'Link2',
        title: 'Referrals',
        body: 'Needs for other services, such as dietary or therapy.',
      },
      {
        icon: 'TrendingUp',
        title: 'Measurable data',
        body: 'Objective data that supports the plan of care over time.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Whole Person',
    title: 'A team assessment',
    items: [
      {
        icon: 'Stethoscope',
        title: 'Registered nurse',
        body: 'Assesses physical condition, symptoms and functional status.',
      },
      {
        icon: 'Users',
        title: 'Social worker',
        body: 'Assesses psychosocial needs, caregiver support and resources.',
      },
      {
        icon: 'HandHeart',
        title: 'Chaplain',
        body: 'Assesses spiritual needs and sources of meaning and support.',
      },
      {
        icon: 'UserCog',
        title: 'Physician',
        body: 'Reviews the medical plan of care and prognosis.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Medicines',
    title: 'The drug profile review',
    items: [
      {
        icon: 'CheckCircle2',
        title: 'Effectiveness',
        body: 'Are medicines controlling symptoms as intended?',
      },
      {
        icon: 'AlertTriangle',
        title: 'Side effects',
        body: 'Are any medicines causing new or worsening symptoms?',
      },
      {
        icon: 'Copy',
        title: 'Interactions and duplicates',
        body: 'Checking for drug interactions and duplicate therapy.',
      },
      {
        icon: 'Calendar',
        title: 'Adherence',
        body: 'Is the patient able to take medicines as prescribed?',
      },
      {
        icon: 'TrendingDown',
        title: 'Deprescribing',
        body: 'Stopping medicines that no longer support comfort goals.',
      },
      {
        icon: 'UserCog',
        title: 'Physician review',
        body: 'The physician reviews and approves medicine changes.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'HOPE Content',
    title: 'What is HOPE?',
    items: [
      {
        icon: 'ClipboardList',
        title: 'A standardized tool',
        body: 'A standardized assessment tool used across hospices.',
      },
      {
        icon: 'RefreshCw',
        title: 'Replaced HIS',
        body: 'HOPE replaced the Hospice Item Set (HIS) on October 1, 2025.',
      },
      {
        icon: 'BarChart3',
        title: 'Feeds quality measures',
        body: "HOPE data feeds the Hospice Quality Reporting Program's measures.",
      },
      {
        icon: 'DollarSign',
        title: 'Tied to payment',
        body: 'Meeting HQRP requirements affects the annual payment update.',
      },
    ],
  },
  {
    type: 'timeline',
    eyebrow: 'HOPE Timepoints',
    title: 'HOPE timepoints',
    items: [
      {
        year: 'Admission',
        body: 'Completed at the comprehensive assessment.',
        color: 'bg-hospice-green',
      },
      {
        year: 'HUV1',
        body: 'HOPE Update Visit 1: days 6-15 of the hospice stay.',
        color: 'bg-hospice-gold',
      },
      {
        year: 'HUV2',
        body: 'HOPE Update Visit 2: days 16-30 of the hospice stay.',
        color: 'bg-slate-500',
      },
      {
        year: 'SFV',
        body: 'Symptom Follow-up Visit: within 2 days of a moderate or severe symptom impact rating.',
        color: 'bg-rose-700/80',
      },
      {
        year: 'Discharge',
        body: 'Completed at the time of death or live discharge.',
        color: 'bg-hospice-green-dark',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'HOPE Content',
    title: 'What HOPE collects',
    items: [
      {
        icon: 'Briefcase',
        title: 'Administrative',
        body: 'Admission, discharge and visit information.',
      },
      {
        icon: 'MessageCircle',
        title: 'Preferences',
        body: "The patient's goals and care preferences.",
      },
      {
        icon: 'Stethoscope',
        title: 'Diagnoses',
        body: 'The terminal diagnosis and related conditions.',
      },
      {
        icon: 'HeartPulse',
        title: 'Health conditions',
        body: 'Current symptoms and functional status.',
      },
      {
        icon: 'Hand',
        title: 'Skin',
        body: 'Skin condition and risk of skin breakdown.',
      },
      {
        icon: 'Pill',
        title: 'Medicines',
        body: 'The current medicine regimen.',
      },
    ],
  },
  {
    type: 'icongrid',
    eyebrow: 'Symptom Impact',
    title: 'Symptom impact and follow-up visits',
    items: [
      { icon: 'Shield', label: 'None' },
      { icon: 'Sun', label: 'Mild' },
      { icon: 'AlertTriangle', label: 'Moderate' },
      { icon: 'Siren', label: 'Severe' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Symptom Impact',
    title: 'Moderate or severe: SFV within 2 calendar days',
    items: [
      {
        icon: 'Gauge',
        title: 'Rate honestly',
        body: "Rate symptom impact based on the patient's actual experience.",
      },
      {
        icon: 'Calendar',
        title: 'Schedule the SFV',
        body: 'Schedule the Symptom Follow-up Visit within 2 calendar days.',
      },
      {
        icon: 'ClipboardList',
        title: 'Document the result',
        body: 'Document the reassessment and any changes to the plan of care.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Accuracy',
    title: 'Accurate HOPE data',
    items: [
      {
        icon: 'Eye',
        title: 'Assess at the visit',
        body: "Base HOPE answers on what you observe at today's visit.",
      },
      {
        icon: 'Ban',
        title: "Don't copy forward",
        body: 'Each HOPE item reflects the current visit, not a prior one.',
      },
      {
        icon: 'FileText',
        title: 'Match your narrative',
        body: 'Your visit note should support every HOPE answer.',
      },
      {
        icon: 'Calendar',
        title: 'Watch the windows',
        body: 'Know the day ranges for HUV1, HUV2 and discharge.',
      },
      {
        icon: 'BookOpen',
        title: 'Use item definitions',
        body: 'Follow the official HOPE item definitions, not assumptions.',
      },
      {
        icon: 'HelpCircle',
        title: 'Ask for help',
        body: 'When unsure, ask your supervisor or clinical educator.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'EMR Notes',
    title: 'Template notes for Haloes Touch',
    items: [
      {
        icon: 'Calendar',
        title: 'Symptom impact timing',
        body: 'Confirm the template captures symptom impact at the right timepoint.',
      },
      {
        icon: 'Hourglass',
        title: '"Death is imminent" item',
        body: 'Only mark this item when signs support it at that visit.',
      },
      {
        icon: 'Gauge',
        title: 'Scales that apply',
        body: 'Use the scale that matches the item being assessed.',
      },
      {
        icon: 'MessageCircle',
        title: 'Report template problems',
        body: 'Tell your supervisor if a template doesn\u2019t match a HOPE item.',
      },
    ],
  },
  {
    type: 'steps',
    eyebrow: 'Connections',
    title: 'How assessment connects to eligibility',
    items: [
      {
        icon: 'Flag',
        title: 'Baseline',
        body: 'The initial and comprehensive assessments set the baseline.',
      },
      {
        icon: 'TrendingUp',
        title: 'Trajectory',
        body: 'Updates track the decline that supports continued eligibility.',
      },
      {
        icon: 'RefreshCw',
        title: 'IDG updates',
        body: 'The IDG updates the assessment at least every 15 days.',
      },
      {
        icon: 'Award',
        title: 'Recertification',
        body: 'See the Hospice Eligibility & LCD Documentation in-service.',
      },
    ],
  },
  {
    type: 'icongrid',
    eyebrow: 'Quality Review',
    title: 'Common errors',
    items: [
      { icon: 'Clock', label: 'Assessment completed late' },
      { icon: 'Copy', label: 'Copied-forward answers' },
      { icon: 'AlertTriangle', label: 'HOPE items that conflict with the note' },
      { icon: 'Calendar', label: 'Missed HUV or SFV window' },
      { icon: 'Gauge', label: 'Symptom impact not rated' },
      { icon: 'Pill', label: 'Drug profile review incomplete' },
      { icon: 'Bird', label: 'No bereavement assessment' },
      { icon: 'Users', label: 'Disciplines not coordinated' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Self-Check',
    title: 'Before you sign: assessment checklist',
    items: [
      {
        icon: 'Clock',
        title: 'Within the timeline',
        body: 'Completed within the required timeline and HOPE window.',
      },
      {
        icon: 'ClipboardList',
        title: 'All content areas addressed',
        body: 'Every required content area is covered.',
      },
      {
        icon: 'Pill',
        title: 'Drug profile documented',
        body: 'The drug profile review is documented.',
      },
      {
        icon: 'Gauge',
        title: 'Symptom impact rated',
        body: 'Symptom impact is rated, with an SFV scheduled if moderate or severe.',
      },
      {
        icon: 'FileText',
        title: 'HOPE matches the note',
        body: 'HOPE answers match the visit note.',
      },
      {
        icon: 'Ban',
        title: 'No copied-forward answers',
        body: 'No answers were copied forward from a prior visit.',
      },
      {
        icon: 'HandHeart',
        title: 'Bereavement and referrals',
        body: 'Bereavement and referral needs are documented.',
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
    question: 'Within what time must the RN complete the initial assessment?',
    options: ['24 hours', '48 hours after election', '5 days', '15 days'],
    answerLead: 'B. 48 hours after election',
    answer: "Within 48 hours after the election of hospice, unless the patient requests otherwise.",
  },
  {
    type: 'quiz',
    index: 2,
    total: 10,
    question: 'When must the comprehensive assessment be completed?',
    answer: 'Within 5 calendar days after the election of hospice, by the IDG.',
  },
  {
    type: 'quiz',
    index: 3,
    total: 10,
    question: 'How often must the comprehensive assessment be updated?',
    answer: "At least every 15 days, and as often as the patient's condition requires.",
  },
  {
    type: 'quiz',
    index: 4,
    total: 10,
    question: 'What did HOPE replace, and when?',
    answer: 'The Hospice Item Set (HIS), on October 1, 2025.',
  },
  {
    type: 'quiz',
    index: 5,
    total: 10,
    question: 'What is the window for HOPE Update Visit 1 (HUV1)?',
    answer: 'Days 6\u201315 of the hospice stay.',
  },
  {
    type: 'quiz',
    index: 6,
    total: 10,
    question:
      'After a moderate or severe symptom impact, the Symptom Follow-up Visit must occur within:',
    options: ['2 calendar days', '7 days', '15 days', '30 days'],
    answerLead: 'A. 2 calendar days',
    answer: '2 calendar days.',
  },
  {
    type: 'quiz',
    index: 7,
    total: 10,
    question: 'Name three required content areas of the comprehensive assessment.',
    answer:
      'Any three: admitting condition, functional status, imminence of death, symptom severity, drug profile review, bereavement, referrals.',
  },
  {
    type: 'quiz',
    index: 8,
    total: 10,
    question: 'True or false: symptom impact items should be completed at recertification.',
    answer: 'False. They are collected at Admission, HUV1, HUV2 and Discharge.',
  },
  {
    type: 'quiz',
    index: 9,
    total: 10,
    question: "What can happen if a hospice doesn't meet HQRP requirements?",
    answer: 'A 4-percentage-point reduction in its annual payment update.',
  },
  {
    type: 'quiz',
    index: 10,
    total: 10,
    question: 'What does the drug profile review check?',
    answer: 'Effectiveness, side effects, interactions, duplicate therapy and adherence.',
  },
  {
    type: 'wrapup',
    eyebrow: 'Wrap-Up',
    title: 'Five things to take with you',
    items: [
      {
        icon: 'Clock',
        body: 'Initial in 48 hours, comprehensive in 5 days, updates at least every 15 days.',
      },
      {
        icon: 'ClipboardList',
        body: 'Cover every required area, including the drug profile and bereavement.',
      },
      {
        icon: 'RefreshCw',
        body: 'HOPE: Admission, HUV1, HUV2, SFV and Discharge, each in its window.',
      },
      {
        icon: 'Siren',
        body: 'Moderate or severe symptom impact: follow-up visit within 2 days.',
      },
      {
        icon: 'Eye',
        body: 'Assess at the visit; HOPE answers must match your note.',
      },
    ],
  },
  {
    type: 'sources',
    eyebrow: 'References',
    title: 'Sources',
    rows: [
      {
        label: 'Regulation',
        body: '42 CFR 418.54: Comprehensive assessment of the patient.',
      },
      {
        label: 'CMS',
        body: 'HOPE Guidance Manual, effective October 1, 2025.',
      },
      {
        label: 'CMS',
        body: 'FY 2025 Hospice Wage Index and Payment Rate Update final rule.',
      },
      {
        label: 'CMS',
        body: 'HQRP requirements and measure specifications.',
      },
      {
        label: 'Haloes Touch',
        body: 'Assessment policies and documentation review findings on EMR HOPE templates.',
      },
    ],
    note: 'Listed without a web search; verify titles and current versions before distributing.',
  },
  {
    type: 'closing',
    title: 'Questions & discussion',
    subtitle: 'Thank you: a thorough assessment is where great hospice care begins.',
    note: 'Please sign the in-service attendance roster before you leave.',
    address: 'Haloes Touch Hospice Inc. \u00b7 11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
]
