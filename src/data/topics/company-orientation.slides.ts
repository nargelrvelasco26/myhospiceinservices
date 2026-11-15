import type { Slide } from '../../lib/types'

export const slides: Slide[] = [
  {
    type: 'cover',
    eyebrow: 'NEW EMPLOYEE ORIENTATION',
    title: 'Welcome to',
    titleLine2: 'Haloes Touch',
    subtitle: 'Who we are, how we care, and what we expect of each other',
    badge: 'Company orientation & employee reading material',
    address: '11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
  {
    type: 'intro',
    eyebrow: 'TODAY',
    title: "What we'll cover today",
    paragraphs: [
      "Welcome to Haloes Touch Hospice. This orientation introduces who we are, how we care for patients and families, and what we expect of each other as members of the team.",
    ],
    note: 'Keep this guide for reference after today\u2019s session.',
    objectivesHeading: 'In this session',
    objectives: [
      'Mission and vision \u2014 why Haloes Touch exists, and where we\u2019re going.',
      'Our team \u2014 meet the Haloes Touch family.',
      'Our services \u2014 the care we provide to patients and families.',
      'Our policies \u2014 what we expect, and what you can expect from us.',
      'Partners and connections \u2014 who we work with, and where to find us.',
    ],
  },
  {
    type: 'cards',
    eyebrow: 'WHO WE ARE',
    title: 'Our mission',
    items: [
      {
        icon: 'Heart',
        title: 'Our mission',
        body: 'At Haloes Touch Hospice Inc., we are guided by a tradition of personal, clinical, and technological excellence. We believe that serving patients in the community setting is the most important activity of our organization. We are committed to delivering the highest quality of patient care with compassion and respect for every individual.',
      },
      { icon: 'Star', title: 'Excellence', body: 'A tradition of personal, clinical and technological excellence.' },
      { icon: 'Home', title: 'Community', body: 'Serving patients in the community setting is our most important work.' },
      { icon: 'Heart', title: 'Compassion', body: 'Delivering the highest quality of care with compassion.' },
      { icon: 'Users', title: 'Respect', body: 'Respect for every individual we serve.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'WHO WE ARE',
    title: 'Our vision',
    items: [
      {
        icon: 'Sun',
        title: 'Our vision',
        body: 'Haloes Touch Hospice Inc. aims to be an integral part of the community, recognized as experts in hospice care. We strive to provide excellent, compassionate patient care, community education, and bereavement services, fostering a new cultural attitude towards health, comfort care, and quality of life at the end of life\u2019s journey.',
      },
      { icon: 'Award', title: 'Hospice experts', body: 'Recognized as experts in hospice care in our community.' },
      { icon: 'GraduationCap', title: 'Community education', body: 'Fostering a new cultural attitude towards health and comfort care.' },
      { icon: 'Bird', title: 'Bereavement services', body: 'Supporting families through grief and loss.' },
      { icon: 'Sun', title: 'Quality of life', body: 'Comfort and quality of life at the end of life\u2019s journey.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'MEET THE HALOES TOUCH FAMILY',
    title: 'Welcome to the Haloes Touch family',
    items: [
      {
        icon: 'Users',
        title: 'The heart of the organization',
        body: 'At Haloes Touch, we believe in the power of teamwork and compassion. Our team is the heart of the organization, working together to provide the highest level of care to those who need it most. Each member brings unique skills, experience and passion to support our mission \u2014 from compassionate caregivers to support staff, every member plays an essential role in creating a caring, respectful environment for our patients and their families.',
      },
    ],
  },
  {
    type: 'icongrid',
    eyebrow: 'MEET THE HALOES TOUCH FAMILY',
    title: 'Our leadership',
    items: [
      { icon: 'UserCog', label: 'Aldrin Pagala, RN \u2014 President & CEO' },
      { icon: 'UserCog', label: 'Marivic Eleno, RN \u2014 Hospice Administrator' },
      { icon: 'UserCog', label: 'Phil Tobes \u2014 Director of Community Liaison' },
      { icon: 'UserCog', label: 'Jasmin Velasco \u2014 Administrative Manager' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR LEADERSHIP',
    title: 'Meet Aldrin Pagala',
    items: [
      {
        icon: 'UserCog',
        title: 'Role at Haloes Touch',
        body: 'Aldrin Pagala, RN \u2014 President & CEO. Leads Haloes Touch\u2019s vision, strategy and growth, and oversees the organization as a whole.',
      },
      {
        icon: 'Lightbulb',
        title: 'About',
        body: 'Aldrin is a registered nurse with extensive experience in hospice care, including serving as a hospice administrator. He understands hospice from every side: caring for patients and families at the bedside, and leading the operations, compliance and teams that make great care possible. As President and CEO, Aldrin brings that experience to guide Haloes Touch\u2019s growth, strengthen our programs and build a team that delivers compassionate, high-quality care to our community.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR LEADERSHIP',
    title: 'Meet Marivic Eleno',
    items: [
      {
        icon: 'UserCog',
        title: 'Role at Haloes Touch',
        body: 'Marivic Eleno, RN \u2014 Hospice Administrator. Responsible for day-to-day hospice operations and for compliance with Medicare, state and accreditation requirements.',
      },
      {
        icon: 'Lightbulb',
        title: 'About',
        body: 'Marivic brings more than 36 years of experience as a registered nurse, combining hands-on patient care with healthcare leadership. She has cared for patients in hospitals in Las Vegas, Henderson and Guam, and served in long-term care as an Assistant Director of Nursing and MDS Coordinator. Since 2019 she has also owned and administered a residential care home in Henderson, leading staff, care planning, regulatory compliance and emergency preparedness. Her nursing heart and administrative experience guide Haloes Touch in delivering compassionate, compliant hospice care.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR LEADERSHIP',
    title: 'Meet Phil Tobes',
    items: [
      {
        icon: 'UserCog',
        title: 'Role at Haloes Touch',
        body: 'Phil Tobes \u2014 Director of Community Liaison. Builds relationships with physicians, hospitals, facilities and the community, and leads community outreach and education about hospice care.',
      },
      {
        icon: 'Lightbulb',
        title: 'About',
        body: 'Phil has spent many years in hospice and home health, and knows firsthand how strong community relationships help patients get the care they need. He understands how hospice liaison work is done: building trust with physicians, hospitals, facilities and families, and making it easy for them to refer to Haloes Touch. As our Director of Community Liaison, Phil leads our outreach and referral efforts. When it comes to connecting the community with Haloes Touch, we can count on Phil.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR LEADERSHIP',
    title: 'Meet Jasmin Velasco',
    items: [
      {
        icon: 'UserCog',
        title: 'Role at Haloes Touch',
        body: 'Jasmin Velasco \u2014 Administrative Manager. Manages office operations, administrative processes and support for the Haloes Touch team.',
      },
      {
        icon: 'Lightbulb',
        title: 'About',
        body: 'Jasmin brings years of hospice office and healthcare administration experience to Haloes Touch. Before joining us, she managed hospice offices in Las Vegas, overseeing clinical records, intake and referrals, payroll, HR and supplies. She is an AAPC Certified Professional Biller with more than six years of medical billing experience, and holds a Bachelor of Science in Medical Technology from the University of Santo Tomas in the Philippines. Jasmin is known for her organization, attention to detail and compassionate support of patients, families and staff.',
      },
    ],
  },
  {
    type: 'icongrid',
    eyebrow: 'MEET THE HALOES TOUCH FAMILY',
    title: 'Our clinical and support team',
    items: [
      { icon: 'Stethoscope', label: 'Dr. Kelly Ashley, MD \u2014 Medical Director' },
      { icon: 'UserRound', label: 'Shirlene Betonio, RN \u2014 Case Manager' },
      { icon: 'UserRound', label: 'Zenaida Figuerao, RN \u2014 Case Manager' },
      { icon: 'HandHeart', label: 'Ermias Abraham \u2014 Medical Social Worker (MSW)' },
      { icon: 'Bird', label: 'Benjamin Tice \u2014 Chaplain / Bereavement Coordinator' },
      { icon: 'Laptop', label: 'Nargel Velasco \u2014 IT Consultant' },
    ],
  },
  {
    type: 'icongrid',
    eyebrow: 'MEET THE HALOES TOUCH FAMILY',
    title: 'Our hospice aides',
    items: [
      { icon: 'UserRound', label: 'Annaliza Budde, CNA \u2014 Hospice Aide' },
      { icon: 'UserRound', label: 'Elizabeth Brizuela, CNA \u2014 Hospice Aide' },
      { icon: 'UserRound', label: 'Joannah Nisce, CNA \u2014 Hospice Aide' },
      { icon: 'UserRound', label: 'April Ompok, CNA \u2014 Hospice Aide' },
      { icon: 'UserRound', label: 'Sam Suarez, CNA \u2014 Hospice Aide' },
    ],
  },
  {
    type: 'icongrid',
    eyebrow: 'WHAT WE DO',
    title: 'Our services',
    items: [
      { icon: 'Zap', label: 'Pain and symptom management' },
      { icon: 'Link2', label: 'Care coordination' },
      { icon: 'Pill', label: 'Medication management' },
      { icon: 'HandHeart', label: 'Emotional and spiritual support' },
      { icon: 'Accessibility', label: 'Medical equipment and supplies' },
      { icon: 'Bed', label: 'Respite care' },
      { icon: 'Stethoscope', label: 'Skilled nursing care' },
      { icon: 'Repeat', label: 'Personal care assistance' },
      { icon: 'Bird', label: 'Bereavement support' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR POLICIES',
    title: 'Equal employment opportunity',
    items: [
      {
        icon: 'Scale',
        title: 'Our commitment',
        body: 'Haloes Touch Hospice is committed to providing equal employment opportunities to all individuals. We are an equal opportunity employer and do not discriminate based on race, color, religion, gender, age, disability, or any other protected status. We are committed to fostering an inclusive and diverse workplace.',
      },
      { icon: 'Users', title: 'Fair treatment', body: 'In hiring, pay, training, promotion and discipline.' },
      { icon: 'Globe', title: 'Inclusive workplace', body: 'Diversity among staff reflects the community we serve.' },
      { icon: 'Flag', title: 'Speak up', body: 'Report concerns to your supervisor, HR or the Administrator.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR POLICIES',
    title: 'Our commitments to patients',
    items: [
      {
        icon: 'Heart',
        title: 'High standard of care',
        body: 'Every employee shows a high level of commitment to patient care, with respect, empathy and compassion, supporting each patient\u2019s dignity and well-being.',
      },
      { icon: 'Heart', title: 'Respect and compassion', body: 'Treat every patient with respect, empathy and compassion.' },
      { icon: 'Repeat', title: 'Whole-person support', body: 'Support patients and families emotionally, spiritually and physically.' },
      { icon: 'MessageCircle', title: 'Honest communication', body: 'Maintain open and honest communication with patients and families.' },
      { icon: 'Globe', title: 'Honor their choices', body: 'Respect each patient\u2019s choices, beliefs and cultural values.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR POLICIES',
    title: 'Patient information confidentiality',
    items: [
      {
        icon: 'Shield',
        title: 'All patient information is confidential',
        body: 'All patient information, including medical records and personal data, is confidential.',
      },
      { icon: 'Shield', title: 'Follow HIPAA', body: 'Follow HIPAA regulations and Haloes Touch privacy policies.' },
      { icon: 'Lock', title: 'Need to know', body: 'Access patient information only for work-related purposes.' },
      { icon: 'Ban', title: 'No unauthorized sharing', body: 'Never share confidential information with unauthorized individuals.' },
      { icon: 'Laptop', title: 'Protect devices', body: 'Lock screens and keep records, phones and laptops secure.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR COMMITMENT TO YOU',
    title: 'Our responsibility to employees',
    items: [
      { icon: 'Shield', title: 'Workplace safety', body: 'A safe and healthy work environment for all employees, volunteers and contractors.' },
      { icon: 'DollarSign', title: 'Fair compensation', body: 'Competitive compensation and benefits.' },
      { icon: 'MessageCircle', title: 'Open communication', body: 'Healthy employee relationships, with concerns and conflicts addressed promptly.' },
      {
        icon: 'GraduationCap',
        title: 'Professional growth',
        body: 'In-service training, external workshops and seminars, mentoring programs, leadership training and cross-training.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'YOUR ROLE',
    title: 'Employee responsibilities',
    items: [
      { icon: 'Star', title: 'Integrity and professionalism', body: 'Perform duties with integrity, professionalism and commitment.' },
      { icon: 'BookOpen', title: 'Follow policies', body: 'Comply with company policies and procedures.' },
      { icon: 'Lock', title: 'Confidentiality', body: 'Respect the confidentiality of all company and patient information.' },
      { icon: 'MessageCircle', title: 'Communication', body: 'Maintain open communication with supervisors and the team.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'YOUR ROLE',
    title: 'Integrity, professionalism and commitment',
    items: [
      { icon: 'Scale', title: 'Act honestly and ethically', body: 'In all interactions, maintaining confidentiality and respecting patient rights.' },
      { icon: 'Smile', title: 'Positive attitude', body: 'Show respect and courtesy toward patients, families and team members.' },
      { icon: 'Heart', title: 'Patients first', body: 'Prioritize the needs of patients and families, with consistent, dedicated quality care.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'YOUR ROLE',
    title: 'Open communication with supervisors and the team',
    items: [
      {
        icon: 'Users',
        title: 'Keep supervisors informed',
        body: 'Give regular updates on tasks, challenges and accomplishments. Promptly communicate concerns, errors or issues that may affect patient care or workflow. Ask for guidance when unsure about tasks, policies or responsibilities.',
      },
      {
        icon: 'MessageCircle',
        title: 'Promote a positive culture',
        body: 'Collaborate with team members and report critical information right away. Use clear, professional and respectful language, verbal, written and digital. Welcome feedback and constructive discussion to improve and resolve conflicts.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'COMPANY POLICY: MUST-DO ACTIONS',
    title: 'Admissions and documentation',
    items: [
      {
        icon: 'CheckCircle2',
        title: 'Admissions and initial assessment',
        body: 'When an admission is announced through our central communication system (RingCentral), all assigned disciplines (RN, certified hospice aide, MSW, bereavement coordinator) plan and complete their assessments within 48 hours of admission. Medicare requires the RN initial assessment within 48 hours and the comprehensive assessment within 5 days; Haloes Touch\u2019s goal is 48 hours.',
      },
      {
        icon: 'PenLine',
        title: 'Documentation requirements',
        body: 'Complete all visit notes within 48 hours of the visit, and sign the Visit Log under the Visit Log tab in the binder. Submit route sheets on or before the due date to be paid for that pay period \u2014 incomplete documentation or missing signatures may delay payroll, and extra checks are not issued between pay periods.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'COMPANY POLICY: MUST-DO ACTIONS',
    title: 'Scheduling and reporting',
    items: [
      {
        icon: 'Calendar',
        title: 'Scheduling and visit coordination',
        body: 'Notify the office immediately of any change or issue with scheduled visits, such as running late, illness or emergencies. Plan a 1\u20132 hour visit window to allow for traffic or earlier care needs.',
      },
      {
        icon: 'Eye',
        title: 'Patient care observations',
        body: 'Report new or unusual observations: rashes, redness, bruises, skin tears or pressure sores. Report patient or caregiver concerns, no matter how minor. Report new complaints of pain to the case manager (RN) immediately, and report signs of abuse or neglect promptly.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'COMPANY POLICY: MUST-DO ACTIONS',
    title: 'Attendance and meetings',
    items: [
      { icon: 'Users', title: 'IDG meetings', body: 'Attend interdisciplinary group (IDG) meetings as scheduled, every other Thursday.' },
      { icon: 'Calendar', title: 'Monthly staff meetings', body: 'Held the second week of each month at the office.' },
      { icon: 'GraduationCap', title: 'In-services', body: 'Attend scheduled in-service trainings; aides complete at least 12 hours a year.' },
      { icon: 'Clock', title: 'Be on time', body: 'Arrive prepared, and let your supervisor know in advance if you can\u2019t attend.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR POLICIES',
    title: 'Non-harassment policy',
    items: [
      {
        icon: 'MessageCircle',
        title: 'Zero tolerance',
        body: 'Haloes Touch maintains a zero-tolerance policy for any form of harassment.',
      },
      { icon: 'MessageCircle', title: 'Verbal, physical or visual', body: 'Harassment in any form is not tolerated.' },
      { icon: 'Ban', title: 'Offensive behavior', body: 'Including offensive jokes, slurs or unwelcome physical contact.' },
      { icon: 'AlertTriangle', title: 'Hostile environment', body: 'Creating a hostile or uncomfortable work environment.' },
      { icon: 'Bell', title: 'Report it', body: 'Report harassment to your supervisor, HR or the Administrator, without fear of retaliation.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR POLICIES',
    title: 'Sexual harassment',
    items: [
      {
        icon: 'AlertTriangle',
        title: 'Know the signs',
        body: 'Sexual harassment includes unwelcome advances, inappropriate remarks, or requests for favors. See the Sexual Harassment Prevention in-service.',
      },
      { icon: 'Bell', title: 'Report immediately', body: 'Report incidents of sexual harassment to your supervisor or HR immediately.' },
      { icon: 'Shield', title: 'Respectful workplace', body: 'Maintain a workplace free from inappropriate behavior.' },
      { icon: 'Users', title: 'Applies to everyone', body: 'Including coworkers, supervisors, patients, families and visitors.' },
      { icon: 'Ban', title: 'No retaliation', body: 'No one is punished for reporting in good faith.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR POLICIES',
    title: 'Right to work and employee records',
    items: [
      { icon: 'CreditCard', title: 'Work authorization', body: 'Documents such as the I-9 form.' },
      { icon: 'Award', title: 'Licenses and certifications', body: 'Current professional licenses and certifications.' },
      { icon: 'GraduationCap', title: 'Training records', body: 'Training and compliance records.' },
      { icon: 'Syringe', title: 'Health records', body: 'TB tests, physical exam certification and immunizations, as applicable.' },
      { icon: 'Bell', title: 'Keep documents current', body: 'Give HR updated copies before anything expires.' },
    ],
  },
  {
    type: 'timeline',
    eyebrow: 'OUR POLICIES',
    title: 'Your direct supervisor',
    items: [
      { year: 'Administrator', body: 'Oversees the hospice agency as a whole.', color: 'bg-hospice-green-dark' },
      { year: 'Director of Nursing (DON)', body: 'Oversees clinical operations and nursing staff.', color: 'bg-hospice-green' },
      { year: 'Case Manager (RN)', body: 'Coordinates the plan of care for assigned patients.', color: 'bg-hospice-gold' },
      { year: 'Certified Hospice Aide', body: 'Reports to the case manager, DON and Administrator.', color: 'bg-slate-500' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR POLICIES',
    title: 'Appearance and identification',
    items: [
      {
        icon: 'Badge',
        title: 'Safety through appearance',
        body: 'Wearing identification and a professional appearance help keep patients, staff and visitors safe.',
      },
      { icon: 'Badge', title: 'Wear your badge', body: 'Wear your Haloes Touch ID badge at all times while working.' },
      { icon: 'Briefcase', title: 'Dress code', body: 'Follow the Haloes Touch dress code for your role.' },
      { icon: 'Smile', title: 'Professional grooming', body: 'Personal hygiene and grooming that reflect a healthcare setting.' },
      { icon: 'CheckCircle2', title: 'Clean and tidy', body: 'A clean, neat appearance appropriate for your role.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR POLICIES',
    title: 'Involvement in patients\u2019 personal affairs',
    items: [
      {
        icon: 'Shield',
        title: 'Professional boundaries',
        body: 'Professional boundaries protect patients and staff.',
      },
      { icon: 'Ban', title: 'Personal, financial or legal affairs', body: 'Do not take part in patients\u2019 personal, financial or legal affairs.' },
      { icon: 'Gift', title: 'Gifts and tips', body: 'Do not accept gifts, tips or gratuities from patients or families.' },
      { icon: 'DollarSign', title: 'Financial advice', body: 'Do not give financial advice or assistance.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR POLICIES',
    title: 'Reporting patient abuse and neglect',
    items: [
      { icon: 'Bell', title: 'Report immediately', body: 'All suspected abuse or neglect must be reported to a supervisor immediately.' },
      { icon: 'AlertTriangle', title: 'Duty to report', body: 'Failure to report may result in disciplinary action.' },
      { icon: 'Shield', title: 'Patients first', body: 'Protecting patients is our top priority.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR POLICIES',
    title: 'Confidential information',
    items: [
      {
        icon: 'Lock',
        title: 'Why confidentiality matters',
        body: 'Confidentiality ensures legal compliance, builds trust, and keeps a respectful environment for patients and families during a vulnerable time.',
      },
      { icon: 'Ban', title: 'Policies and records', body: 'Do not share company policies, patient information or internal records without authorization.' },
      { icon: 'Lock', title: 'Company matters', body: 'Do not disclose private company matters outside of work.' },
      { icon: 'Phone', title: 'Social media', body: 'Never post about patients, families or company matters online.' },
      { icon: 'Bell', title: 'If in doubt, ask', body: 'Check with your supervisor before sharing anything.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR POLICIES',
    title: 'Photographs and legal documents',
    items: [
      {
        icon: 'Camera',
        title: 'Strictly prohibited without consent',
        body: 'Employees are strictly prohibited from photographing patients, families or hospice-related documents (such as legal forms or health records), or handling or sharing legal documents, without written consent from the patient, family or authorized representative.',
      },
      { icon: 'EyeOff', title: 'Patient privacy and dignity', body: 'Protecting what matters most to patients and families.' },
      { icon: 'Shield', title: 'Legal compliance (HIPAA)', body: 'Staying within federal privacy law.' },
      { icon: 'Lock', title: 'Protecting sensitive information', body: 'Keeping records and documents secure.' },
      { icon: 'Handshake', title: 'Maintaining trust', body: 'Trust is the foundation of hospice care.' },
      { icon: 'Star', title: 'Professionalism and ethics', body: 'Upholding the standards our patients deserve.' },
      { icon: 'Ban', title: 'Avoiding misuse of information', body: 'Preventing information from being used improperly.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR POLICIES',
    title: 'Tips and gratuities',
    items: [
      {
        icon: 'Gift',
        title: 'Our policy',
        body: 'To maintain professional boundaries and uphold ethical standards, hospice staff are not permitted to accept tips, gratuities, or personal gifts from patients or families. Families are encouraged to express gratitude through non-monetary means, such as thank-you notes or organizational donations.',
      },
      { icon: 'Repeat', title: 'Politely refuse', body: 'If offered, politely refuse and explain company policy.' },
      {
        icon: 'MessageCircle',
        title: 'What to say',
        body: '\u201cThank you so much. Our policy doesn\u2019t allow me to accept gifts, but your kind words mean a lot.\u201d',
      },
      { icon: 'Heart', title: 'Other ways to give thanks', body: 'Thank-you notes or donations to the organization.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR POLICIES',
    title: 'Standard of conduct',
    items: [
      {
        icon: 'Award',
        title: 'What we uphold',
        body: 'As a member of Haloes Touch Hospice, employees are expected to uphold the highest standards of professionalism, ethics and integrity. Our commitment to compassionate, patient-centered care requires maintaining confidentiality, following all legal and regulatory guidelines, and collaborating effectively with our interdisciplinary teams.',
      },
      { icon: 'Star', title: 'Professionalism', body: 'In every interaction, every day.' },
      { icon: 'Scale', title: 'Ethics', body: 'Doing what is right, even when no one is watching.' },
      { icon: 'Shield', title: 'Integrity', body: 'Honesty and consistency in words and actions.' },
      { icon: 'Users', title: 'Teamwork', body: 'Collaborating effectively with our interdisciplinary teams.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR POLICIES',
    title: 'Alcohol and controlled substances',
    items: [
      {
        icon: 'Shield',
        title: 'A safe, professional environment',
        body: 'Haloes Touch provides a safe, professional and caring environment. Employees must be free from the effects of alcohol, drugs or controlled substances while working.',
      },
      { icon: 'Droplet', title: 'Never at work', body: 'Do not consume, or be under the influence of, alcohol or illegal substances while working.' },
      { icon: 'AlertTriangle', title: 'Consequences', body: 'Any violation results in disciplinary action, up to and including termination.' },
      { icon: 'Repeat', title: 'Help is available', body: 'Resources, including counseling and support services, are available for those seeking help.' },
      { icon: 'Pill', title: 'Patient medicines', body: 'Never take, use or remove patients\u2019 medicines.' },
    ],
  },
  {
    type: 'steps',
    eyebrow: 'OUR POLICIES',
    title: 'Payroll document submission',
    items: [
      { icon: 'FileText', title: 'Complete', body: 'Time sheets or route sheets, overtime requests and leave records.' },
      { icon: 'CheckCircle2', title: 'Verify', body: 'Accurate, complete and verified by your supervisor.' },
      { icon: 'Clock', title: 'Submit on time', body: 'By the payroll cutoff each pay period.' },
      { icon: 'Bell', title: 'Report errors', body: 'Report any discrepancy to payroll immediately.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'OUR POLICIES',
    title: 'Compensation',
    items: [
      {
        icon: 'DollarSign',
        title: 'Competitive and fair',
        body: 'Haloes Touch offers competitive and fair compensation that reflects the dedication, emotional resilience and specialized skills hospice work requires.',
      },
      { icon: 'DollarSign', title: 'Competitive pay', body: 'Rewards your commitment to compassionate end-of-life care.' },
      { icon: 'Star', title: 'Benefits', body: 'Help attract and retain qualified professionals.' },
      { icon: 'Smile', title: 'Job satisfaction', body: 'Supports a stable, satisfied workforce.' },
      { icon: 'FileText', title: 'Your job letter', body: 'Your salary and benefits are described in your job letter.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'WORKING TOGETHER',
    title: 'Meet our partners',
    items: [
      { icon: 'Truck', title: 'MTC Medical Transport', body: 'Non-emergency medical transportation.' },
      { icon: 'Pill', title: '986 Pharmacy', body: 'Pharmacy services.' },
      { icon: 'Phone', title: 'RingCentral', body: 'Phone and team communication.' },
      { icon: 'Monitor', title: 'HospiceMD', body: 'Electronic medical record (EMR).' },
      { icon: 'Package', title: 'Reliant Medical Supply', body: 'Medical equipment and supplies.' },
      { icon: 'Landmark', title: 'QuickBooks', body: 'Accounting.' },
      { icon: 'PackageCheck', title: 'Platinum Medical LTC', body: 'Long-term care pharmacy and medical supplies.' },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'STAY CONNECTED',
    title: 'Find us online',
    items: [
      { icon: 'Globe', title: 'Website', body: 'www.haloestouch.com \u2014 our homepage, services and contact information.' },
      { icon: 'MapPin', title: 'Google Business', body: 'Search \u201cHaloes Touch Hospice\u201d for address, phone, hours, directions and reviews.' },
      { icon: 'Star', title: 'Yelp', body: 'Haloes Touch Hospice on Yelp \u2014 photos, directions and reviews.' },
      { icon: 'Link2', title: 'Facebook and LinkedIn', body: 'Coming soon! Follow Haloes Touch once our pages launch.' },
    ],
  },
  {
    type: 'closing',
    title: 'Welcome to the family',
    subtitle:
      'We\u2019re thrilled to have you on board. Together, we\u2019ll create meaningful impact and achieve great things. Your unique talents and dedication make us stronger. Let\u2019s make this journey memorable!',
    note: 'Please sign the orientation acknowledgment before you leave.',
    address: 'Haloes Touch Hospice Inc. \u00b7 11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
]
