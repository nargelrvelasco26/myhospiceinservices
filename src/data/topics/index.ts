import type { Topic } from '../../lib/types'
// Hidden for now (slide versions kept for later use) - PDF versions are shown instead
// import { slides as hospice101Slides } from './hospice101.slides'
// import { slides as hopeSlides } from './hope.slides'
// import { slides as hipaaSlides } from './hipaa.slides'
// import { slides as socSlides } from './soc.slides'
// import { slides as eobSlides } from './eob.slides'
// import { slides as admissionProtocolSlides } from './admission-protocol.slides'
// import { slides as bloodbornePathogensSlides } from './bloodborne-pathogens.slides'
// import { slides as companyOrientationSlides } from './company-orientation.slides'
// import { slides as bagTechniqueSlides } from './bag-technique.slides'

// Add new in-service topics here as they're created.
// Each topic needs its own `<id>.slides.ts` file exporting a `slides: Slide[]`
// array, then register it below.
export const topics: Topic[] = [
  {
    id: 'company-orientation-pdf',
    title: 'Company Orientation',
    description:
      'View the original Company Orientation guide as a PDF, with its full images and layout.',
    icon: 'FileText',
    status: 'available',
    slides: [],
    pdfUrl:
      'https://acwocotrngkeaxtzdzfz.supabase.co/storage/v1/object/public/InServices/Haloes_Touch_Company_Orientation_PROTECTED.pdf',
  },
  // Hidden for now, will be re-enabled later:
  // {
  //   id: 'company-orientation',
  //   title: 'Company Orientation',
  //   description:
  //     'Meet the Haloes Touch family, our mission and values, and the policies every employee follows.',
  //   icon: 'Users',
  //   status: 'available',
  //   slides: companyOrientationSlides,
  // },
  // Hidden for now, will be re-enabled later:
  // {
  //   id: 'hospice-101',
  //   title: 'Hospice 101',
  //   description:
  //     'What hospice is, who it serves, and how Haloes Touch cares for patients and families.',
  //   icon: 'Heart',
  //   status: 'available',
  //   slides: hospice101Slides,
  // },
  // {
  //   id: 'comprehensive-assessment-hope',
  //   title: 'Comprehensive Assessment & HOPE',
  //   description:
  //     'Assessment timelines, required content, and capturing accurate HOPE data at every timepoint.',
  //   icon: 'ClipboardList',
  //   status: 'available',
  //   slides: hopeSlides,
  // },
  // {
  //   id: 'hipaa-rules-compliance',
  //   title: 'HIPAA Rules & Compliance',
  //   description:
  //     'Protecting patient information on paper, in person and on your laptop, and what to do if a breach occurs.',
  //   icon: 'Lock',
  //   status: 'available',
  //   slides: hipaaSlides,
  // },
  // {
  //   id: 'start-of-care-checklist',
  //   title: 'Start of Care / Nursing Checklist',
  //   description:
  //     'The 10 steps every hospice nurse covers at the admission visit, from eligibility review to documentation.',
  //   icon: 'Search',
  //   status: 'available',
  //   slides: socSlides,
  // },
  // {
  //   id: 'explanation-of-benefits',
  //   title: 'Explanation of Benefits (EOB)',
  //   description:
  //     'Helping patients and families understand hospice coverage, costs and who provides each service.',
  //   icon: 'DollarSign',
  //   status: 'available',
  //   slides: eobSlides,
  // },
  // {
  //   id: 'hospice-admission-protocol',
  //   title: 'Hospice Admission Protocol',
  //   description:
  //     'The 10-step admission process from referral to initiation of services, with timelines and who is responsible.',
  //   icon: 'ClipboardCheck',
  //   status: 'available',
  //   slides: admissionProtocolSlides,
  // },
  // {
  //   id: 'bloodborne-pathogens',
  //   title: 'Bloodborne Pathogens',
  //   description:
  //     'Annual OSHA training on bloodborne pathogens, standard precautions and what to do after an exposure.',
  //   icon: 'Biohazard',
  //   status: 'available',
  //   slides: bloodbornePathogensSlides,
  // },
  // Hidden for now, will be re-enabled later:
  // {
  //   id: 'bag-technique',
  //   title: 'Bag Technique',
  //   description:
  //     'Keeping the nursing bag clean, organized and safe as it travels from home to home.',
  //   icon: 'Briefcase',
  //   status: 'available',
  //   slides: bagTechniqueSlides,
  // },
  {
    id: 'bag-technique-pdf',
    title: 'Bag Technique',
    description:
      'View the original Bag Technique in-service guide as a PDF, with its full images and layout.',
    icon: 'FileText',
    status: 'available',
    slides: [],
    pdfUrl:
      'https://acwocotrngkeaxtzdzfz.supabase.co/storage/v1/object/public/InServices/Bag_Technique_InService_Haloes_Touch_PROTECTED.pdf',
  },
  {
    id: 'start-of-care-checklist-pdf',
    title: 'Start of Care / Nursing Checklist',
    description:
      'View the original Start of Care / Nursing Checklist in-service guide as a PDF, with its full images and layout.',
    icon: 'FileText',
    status: 'available',
    slides: [],
    pdfUrl:
      'https://acwocotrngkeaxtzdzfz.supabase.co/storage/v1/object/public/InServices/Start_of_Care_Nursing_Checklist_InService_Haloes_Touch_PROTECTED.pdf',
  },
  {
    id: 'explanation-of-benefits-pdf',
    title: 'Explanation of Benefits (EOB)',
    description:
      'View the original Explanation of Benefits (EOB) in-service guide as a PDF, with its full images and layout.',
    icon: 'FileText',
    status: 'available',
    slides: [],
    pdfUrl:
      'https://acwocotrngkeaxtzdzfz.supabase.co/storage/v1/object/public/InServices/Explanation_of_Benefits_EOB_InService_Haloes_Touch_PROTECTED.pdf',
  },
  {
    id: 'hospice-admission-protocol-pdf',
    title: 'Hospice Admission Protocol',
    description:
      'View the original Hospice Admission Protocol in-service guide as a PDF, with its full images and layout.',
    icon: 'FileText',
    status: 'available',
    slides: [],
    pdfUrl:
      'https://acwocotrngkeaxtzdzfz.supabase.co/storage/v1/object/public/InServices/Hospice_Admission_Protocol_InService_Haloes_Touch_PROTECTED.pdf',
  },
  {
    id: 'comprehensive-assessment-hope-pdf',
    title: 'Comprehensive Assessment & HOPE',
    description:
      'View the original Comprehensive Assessment & HOPE in-service guide as a PDF, with its full images and layout.',
    icon: 'FileText',
    status: 'available',
    slides: [],
    pdfUrl:
      'https://acwocotrngkeaxtzdzfz.supabase.co/storage/v1/object/public/InServices/Comprehensive_Assessment_HOPE_InService_Haloes_Touch_PROTECTED.pdf',
  },
  {
    id: 'hospice-101-pdf',
    title: 'Hospice 101',
    description:
      'View the original Hospice 101 in-service guide as a PDF, with its full images and layout.',
    icon: 'FileText',
    status: 'available',
    slides: [],
    pdfUrl:
      'https://acwocotrngkeaxtzdzfz.supabase.co/storage/v1/object/public/InServices/Hospice_101_InService_Haloes_Touch_PROTECTED.pdf',
  },
  {
    id: 'bloodborne-pathogens-pdf',
    title: 'Bloodborne Pathogens',
    description:
      'View the original Bloodborne Pathogens in-service guide as a PDF, with its full images and layout.',
    icon: 'FileText',
    status: 'available',
    slides: [],
    pdfUrl:
      'https://acwocotrngkeaxtzdzfz.supabase.co/storage/v1/object/public/InServices/Bloodborne_Pathogens_InService_Haloes_Touch_PROTECTED.pdf',
  },
]
