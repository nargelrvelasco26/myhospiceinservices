import type { Slide } from '../../lib/types'

export const slides: Slide[] = [
  {
    type: 'cover',
    eyebrow: 'Staff In-Service · Infection Prevention & Control',
    title: 'Bag Technique',
    titleLine2: '',
    subtitle:
      'Keeping the nursing bag clean, organized and safe from home to home',
    badge: 'In-service presentation & staff reading material',
    address: '11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
  {
    type: 'intro',
    eyebrow: 'About This In-Service',
    title: "Why we're here, and what you'll learn",
    paragraphs: [
      'Your nursing bag travels from home to home, and without good technique it can carry germs along with it.',
      'This in-service covers how to choose, clean and use your bag so it protects patients instead of putting them at risk.',
    ],
    note: 'This material applies to every Haloes Touch clinician who carries a nursing bag into patient homes.',
    objectivesHeading: 'By the end, you will be able to:',
    objectives: [
      'Explain why bag technique matters for infection prevention.',
      'Clean and restock the bag using the four-phase routine.',
      'Use proper bag technique at every home visit.',
      'Choose safe surfaces and locations for the bag in the home and car.',
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Key Terms',
    title: 'Words you will hear in this in-service',
    items: [
      {
        icon: 'Bug',
        title: 'MDRO',
        body: 'Multidrug-resistant organism: bacteria that resist one or more antibiotics typically used to treat it.',
      },
      {
        icon: 'Microscope',
        title: 'C. difficile',
        body: 'A hardy, spore-forming bacteria that causes severe diarrhea and spreads easily on surfaces.',
      },
      {
        icon: 'Hand',
        title: 'Contact precautions',
        body: 'Extra steps, like gloves and gowns, used to prevent spreading germs through touch.',
      },
      {
        icon: 'Package',
        title: 'Noncritical item',
        body: 'Equipment that touches intact skin but not mucous membranes, like a stethoscope or blood pressure cuff.',
      },
      {
        icon: 'SprayCan',
        title: 'Low-level disinfection',
        body: 'A cleaning level that kills most bacteria and viruses, appropriate for noncritical equipment.',
      },
      {
        icon: 'Clock',
        title: 'Contact time',
        body: 'How long a disinfectant must stay wet on a surface to work, per the product label.',
      },
      {
        icon: 'Droplet',
        title: 'Bioburden',
        body: 'The amount of contamination, such as dirt or organic matter, present on a surface before disinfecting.',
      },
      {
        icon: 'Briefcase',
        title: 'Dedicated equipment',
        body: 'Equipment left in a single patient home and not carried between patients.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Your Bag',
    title: 'What a nursing bag looks like',
    items: [
      {
        icon: 'Briefcase',
        title: 'Traditional nursing bag',
        body: 'A structured bag with multiple compartments for supplies and equipment.',
      },
      {
        icon: 'Backpack',
        title: 'Backpack style',
        body: 'A hands-free option that still needs the same cleaning and technique.',
      },
      {
        icon: 'Luggage',
        title: 'Rolling bag',
        body: 'Useful for heavier loads, but requires extra care about where wheels have been.',
      },
      {
        icon: 'Boxes',
        title: 'Tote or tackle box style',
        body: 'Rigid-sided containers that are easy to wipe down between visits.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Why It Matters',
    title: 'Your bag travels home to home',
    items: [
      {
        icon: 'Home',
        title: 'Every home is different',
        body: 'Your bag may be set on counters, floors or furniture in homes with very different levels of cleanliness.',
      },
      {
        icon: 'Car',
        title: 'It rides along in your car',
        body: 'Heat, spills and clutter in the car can all affect what lives on your bag.',
      },
      {
        icon: 'Repeat',
        title: 'It touches every patient',
        body: 'Without good technique, the bag can become a way germs travel from one patient to the next.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'The Research',
    title: 'What the research found',
    items: [
      {
        icon: 'Percent',
        title: '84% of bag exteriors',
        body: 'Grew some pathogen, and 15.9% grew a multidrug-resistant organism (MDRO).',
      },
      {
        icon: 'BarChart3',
        title: '48.4% of bag interiors',
        body: 'Grew some pathogen, and 6.3% grew an MDRO.',
      },
      {
        icon: 'AlertTriangle',
        title: '43.7% of equipment',
        body: 'Carried inside the bag grew some pathogen, and 5.6% grew an MDRO.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Choosing & Caring for the Bag',
    title: 'Set your bag up for success',
    items: [
      {
        icon: 'Package',
        title: 'Choose a nonporous exterior',
        body: 'A wipeable, nonporous material cleans far more effectively than canvas or fabric.',
      },
      {
        icon: 'RefreshCw',
        title: 'Clean on a schedule',
        body: 'Clean the bag on a regular schedule, at least weekly and no less than monthly, per agency policy.',
      },
      {
        icon: 'Recycle',
        title: 'Replace when worn',
        body: 'Replace a bag once it is cracked, torn or can no longer be cleaned effectively.',
      },
    ],
  },
  {
    type: 'steps',
    eyebrow: 'Cleaning the Bag',
    title: 'A four-phase routine',
    items: [
      {
        icon: 'Inbox',
        title: '01 · Prepare',
        body: 'Gather supplies and a clean, dedicated surface to work on.',
      },
      {
        icon: 'Search',
        title: '02 · Empty & inspect',
        body: 'Remove everything and inspect the bag and contents for damage or expired supplies.',
      },
      {
        icon: 'SprayCan',
        title: '03 · Disinfect',
        body: 'Wipe all surfaces with an approved disinfectant and allow the full contact time.',
      },
      {
        icon: 'PackageCheck',
        title: '04 · Restock',
        body: 'Restock only clean, undamaged supplies before the next visit.',
      },
    ],
  },
  {
    type: 'mythfact',
    eyebrow: 'Myth vs. Fact',
    title: "There's no such thing as a 'clean side' of the bag",
    items: [
      {
        myth: 'One side of the bag can be kept clean if you just avoid touching it.',
        fact: 'The whole bag, inside and out, picks up germs from every surface it touches and needs regular disinfecting.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'What Goes Inside',
    title: 'Two kinds of contents',
    items: [
      {
        icon: 'Trash2',
        title: 'Single-use items',
        body: 'Gloves, alcohol wipes, gauze and other disposables used once and thrown away, never shared between patients.',
      },
      {
        icon: 'Recycle',
        title: 'Reusable equipment',
        body: 'Stethoscopes, blood pressure cuffs and similar tools that must be cleaned between uses.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'What Goes Inside',
    title: 'Cleaning reusable equipment',
    items: [
      {
        icon: 'Clock',
        title: 'On a regular basis',
        body: 'Clean reusable equipment after every patient use, not just when visibly soiled.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Always when conditions call for it',
        body: 'Always clean immediately after contact with blood, body fluids, or a patient on contact precautions.',
      },
    ],
  },
  {
    type: 'steps',
    eyebrow: 'At Every Visit',
    title: 'Bag technique, step by step',
    items: [
      {
        icon: 'MapPin',
        title: 'Choose your spot',
        body: 'Select a clean, flat surface near the door before bringing the bag inside.',
      },
      {
        icon: 'Package',
        title: 'Set down a barrier',
        body: 'Place a barrier under the bag before setting it down.',
      },
      {
        icon: 'Droplet',
        title: 'Perform hand hygiene',
        body: 'Clean your hands before opening the bag and removing supplies.',
      },
      {
        icon: 'Boxes',
        title: 'Remove only what you need',
        body: 'Take out only the supplies needed for this visit; avoid rummaging mid-task.',
      },
      {
        icon: 'Hand',
        title: 'Keep the bag out of the care zone',
        body: 'Never set the bag on the patient’s bed or let it touch the patient directly.',
      },
      {
        icon: 'CheckCircle2',
        title: 'Close it up',
        body: 'Close the bag when finished and perform hand hygiene again before leaving.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Using a Barrier',
    title: 'Barrier or no barrier?',
    items: [
      {
        icon: 'ShieldCheck',
        title: 'Always use a barrier',
        body: 'A barrier under the bag protects it from whatever is on the surface beneath it, in every home.',
      },
      {
        icon: 'XCircle',
        title: 'Never skip it',
        body: 'Skipping the barrier, even "just this once," is how surfaces and bags cross-contaminate.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Choosing a Barrier',
    title: 'Choosing a surface barrier',
    items: [
      {
        icon: 'CheckCircle2',
        title: 'Good options',
        body: 'A dedicated, washable barrier cloth or a disposable barrier pad made for this purpose.',
      },
      {
        icon: 'Ban',
        title: 'Avoid newspaper or paper towels',
        body: 'These are too thin, absorb fluids, and do not create a reliable barrier.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'In the Home',
    title: 'Where to put the bag in the home',
    items: [
      {
        icon: 'Home',
        title: 'A clean, hard surface',
        body: 'Prefer a wiped-down counter or table over soft furniture.',
      },
      {
        icon: 'Package',
        title: 'Hung up, if possible',
        body: 'A hook or hanger keeps the bag off the floor and away from pets and clutter.',
      },
      {
        icon: 'Boxes',
        title: 'Never on the floor',
        body: 'A rolling bag should still be lifted onto a surface rather than left rolling on the floor.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'In the Car',
    title: 'The car, and when to leave the bag out',
    items: [
      {
        icon: 'Car',
        title: 'Secure it in the vehicle',
        body: 'Keep the bag secured and upright, away from extreme heat when possible.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Leave it in the car when...',
        body: 'The patient or household has a known MDRO, active C. difficile, is on contact precautions, has visible pests, an unsafe environment, or if you are unable to find a clean surface to place it on.',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'The Most Important Step',
    title: 'Your hands touch the patient, not the bag',
    items: [
      {
        icon: 'Droplet',
        title: 'Before entering the bag',
        body: 'Clean your hands before opening the bag and taking out supplies.',
      },
      {
        icon: 'Hand',
        title: 'Before touching the patient',
        body: 'Clean your hands again after handling the bag and before touching the patient.',
      },
      {
        icon: 'UserCheck',
        title: 'After touching the patient',
        body: 'Clean your hands before going back into the bag after patient contact.',
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
    question: 'What percentage of bag exteriors studied grew a multidrug-resistant organism (MDRO)?',
    options: ['1.5%', '6.3%', '15.9%', '48.4%'],
    answerLead: 'C. 15.9%',
    answer: 'Research found 84% of bag exteriors grew some pathogen, and 15.9% grew an MDRO.',
  },
  {
    type: 'quiz',
    index: 2,
    total: 10,
    question: "True or false: one side of the bag can stay 'clean' if you don't touch it.",
    options: ['True', 'False'],
    answerLead: 'B. False',
    answer: 'There is no clean side; the whole bag picks up germs and needs regular disinfecting.',
  },
  {
    type: 'quiz',
    index: 3,
    total: 10,
    question: 'What are the four phases of cleaning the bag?',
    options: [
      'Prepare, empty & inspect, disinfect, restock',
      'Open, wipe, close, store',
      'Inspect, discard, reorder, deliver',
      'Unpack, wash, dry, pack',
    ],
    answerLead: 'A. Prepare, empty & inspect, disinfect, restock',
    answer: 'Prepare your supplies, empty and inspect the bag, disinfect with full contact time, then restock clean items only.',
  },
  {
    type: 'quiz',
    index: 4,
    total: 10,
    question: 'Why should you always use a barrier under the bag?',
    options: [
      'It is optional unless the home looks dirty',
      'It protects the bag from whatever is on the surface beneath it, every time',
      'It is only needed for rolling bags',
      'It is only required for the first visit to a new home',
    ],
    answerLead: 'B. It protects the bag from whatever is on the surface beneath it, every time',
    answer: 'A barrier should always be used, in every home, regardless of how clean it looks.',
  },
  {
    type: 'quiz',
    index: 5,
    total: 10,
    question: 'Which surface barrier should you avoid?',
    options: [
      'A dedicated washable barrier cloth',
      'A disposable barrier pad',
      'Newspaper or paper towels',
      'Any of the above are fine',
    ],
    answerLead: 'C. Newspaper or paper towels',
    answer: 'Newspaper and paper towels are too thin and absorb fluids, so they do not create a reliable barrier.',
  },
  {
    type: 'quiz',
    index: 6,
    total: 10,
    question: 'When should reusable equipment like a stethoscope be cleaned?',
    options: [
      'Only when visibly soiled',
      'Once a week, regardless of use',
      'After every patient use, and always after blood or body fluid contact',
      'Only if the patient requests it',
    ],
    answerLead: 'C. After every patient use, and always after blood or body fluid contact',
    answer: 'Reusable equipment should be cleaned after every patient use and always after contact with blood, body fluids, or contact-precaution patients.',
  },
  {
    type: 'quiz',
    index: 7,
    total: 10,
    question: 'When should you leave the bag in the car instead of bringing it inside?',
    options: [
      'Whenever it is raining',
      'When the home or patient has a known MDRO, C. difficile, or is on contact precautions',
      'Only if the patient asks you to',
      'Never; the bag always comes inside',
    ],
    answerLead: 'B. When the home or patient has a known MDRO, C. difficile, or is on contact precautions',
    answer: 'Leave the bag in the car for known MDRO, active C. difficile, contact precautions, pests, an unsafe environment, or no clean surface available.',
  },
  {
    type: 'quiz',
    index: 8,
    total: 10,
    question: 'At what three points should you clean your hands during bag technique?',
    options: [
      'Only after touching the patient',
      'Before entering the bag, before touching the patient, and after touching the patient',
      'Only at the start of the visit',
      'Hand hygiene is not part of bag technique',
    ],
    answerLead: 'B. Before entering the bag, before touching the patient, and after touching the patient',
    answer: 'Clean hands before opening the bag, before touching the patient, and again before returning to the bag after patient contact.',
  },
  {
    type: 'quiz',
    index: 9,
    total: 10,
    question: 'How should single-use items like gloves and alcohol wipes be handled?',
    options: [
      'Reused if they look clean',
      'Used once and discarded, never shared between patients',
      'Cleaned with disinfectant and reused',
      'Left in the bag until the next visit',
    ],
    answerLead: 'B. Used once and discarded, never shared between patients',
    answer: 'Single-use items are disposable and must never be reused or shared between patients.',
  },
  {
    type: 'quiz',
    index: 10,
    total: 10,
    question: 'What should you do with the bag once you are inside the home?',
    options: [
      'Set it directly on the patient’s bed',
      'Place it on a barrier on a clean, hard surface, away from the care zone',
      'Leave it on the floor near the door',
      'Hand it to a family member to hold',
    ],
    answerLead: 'B. Place it on a barrier on a clean, hard surface, away from the care zone',
    answer: 'Choose a clean, hard surface, place a barrier underneath, and keep the bag out of the direct care zone.',
  },
  {
    type: 'wrapup',
    eyebrow: 'Wrap-Up',
    title: 'Five things to take with you',
    items: [
      {
        icon: 'SprayCan',
        body: 'Clean the bag on a regular schedule using the four-phase routine.',
      },
      {
        icon: 'ShieldCheck',
        body: 'Always use a barrier under the bag, in every home.',
      },
      {
        icon: 'Droplet',
        body: 'Clean your hands before the bag, before the patient, and after the patient.',
      },
      {
        icon: 'Recycle',
        body: 'Never reuse single-use items, and clean reusable equipment after every use.',
      },
      {
        icon: 'Car',
        body: 'Know when to leave the bag in the car instead of bringing it inside.',
      },
    ],
  },
  {
    type: 'sources',
    eyebrow: 'References',
    title: 'Sources',
    rows: [
      {
        label: 'Technique',
        body: 'McGoldrick, M. (2014). Bag Technique. Home Healthcare Nurse, 32(1), 39\u201345.',
      },
      {
        label: 'Research',
        body: 'Bakunas-Kenneley, I., & Madigan, E. A. (2009). Infection prevention and control in home health care: the nurse’s bag. American Journal of Infection Control, 37(8), 687\u2013688.',
      },
    ],
    note: 'Follow Haloes Touch policy and your clinical judgment for cleaning frequency and precautions in any specific home.',
  },
  {
    type: 'closing',
    title: 'Questions & discussion',
    subtitle: 'Thank you for keeping your bag, and our patients, safe at every visit.',
    note: 'Please sign the in-service attendance roster before you leave.',
    address: 'Haloes Touch Hospice Inc. \u00b7 11500 S. Eastern Ave., Ste. 150, Henderson, NV 89052',
  },
]
