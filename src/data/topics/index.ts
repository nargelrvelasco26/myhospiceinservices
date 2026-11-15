import type { Topic } from '../../lib/types'
import { slides as hospice101Slides } from './hospice101.slides'
import { slides as hopeSlides } from './hope.slides'
import { slides as hipaaSlides } from './hipaa.slides'
import { slides as socSlides } from './soc.slides'
import { slides as eobSlides } from './eob.slides'
import { slides as admissionProtocolSlides } from './admission-protocol.slides'
import { slides as companyOrientationSlides } from './company-orientation.slides'
import { slides as bloodbornePathogensSlides } from './bloodborne-pathogens.slides'
import { slides as bagTechniqueSlides } from './bag-technique.slides'

// Add new in-service topics here as they're created.
// Each topic needs its own `<id>.slides.ts` file exporting a `slides: Slide[]`
// array, then register it below.
export const topics: Topic[] = [
  {
    id: 'company-orientation',
    title: 'Company Orientation',
    description:
      'Meet the Haloes Touch family, our mission and values, and the policies every employee follows.',
    icon: 'Users',
    status: 'available',
    slides: companyOrientationSlides,
  },
  {
    id: 'hospice-101',
    title: 'Hospice 101',
    description:
      'What hospice is, who it serves, and how Haloes Touch cares for patients and families.',
    icon: 'Heart',
    status: 'available',
    slides: hospice101Slides,
  },
  {
    id: 'comprehensive-assessment-hope',
    title: 'Comprehensive Assessment & HOPE',
    description:
      'Assessment timelines, required content, and capturing accurate HOPE data at every timepoint.',
    icon: 'ClipboardList',
    status: 'available',
    slides: hopeSlides,
  },
  {
    id: 'hipaa-rules-compliance',
    title: 'HIPAA Rules & Compliance',
    description:
      'Protecting patient information on paper, in person and on your laptop, and what to do if a breach occurs.',
    icon: 'Lock',
    status: 'available',
    slides: hipaaSlides,
  },
  {
    id: 'start-of-care-checklist',
    title: 'Start of Care / Nursing Checklist',
    description:
      'The 10 steps every hospice nurse covers at the admission visit, from eligibility review to documentation.',
    icon: 'Search',
    status: 'available',
    slides: socSlides,
  },
  {
    id: 'explanation-of-benefits',
    title: 'Explanation of Benefits (EOB)',
    description:
      'Helping patients and families understand hospice coverage, costs and who provides each service.',
    icon: 'DollarSign',
    status: 'available',
    slides: eobSlides,
  },
  {
    id: 'hospice-admission-protocol',
    title: 'Hospice Admission Protocol',
    description:
      'The 10-step admission process from referral to initiation of services, with timelines and who is responsible.',
    icon: 'ClipboardCheck',
    status: 'available',
    slides: admissionProtocolSlides,
  },
  {
    id: 'bloodborne-pathogens',
    title: 'Bloodborne Pathogens',
    description:
      'Annual OSHA training on bloodborne pathogens, standard precautions and what to do after an exposure.',
    icon: 'Biohazard',
    status: 'available',
    slides: bloodbornePathogensSlides,
  },
  {
    id: 'bag-technique',
    title: 'Bag Technique',
    description:
      'Keeping the nursing bag clean, organized and safe as it travels from home to home.',
    icon: 'Briefcase',
    status: 'available',
    slides: bagTechniqueSlides,
  },
  {
    id: 'bag-technique-pdf',
    title: 'Bag Technique (PDF)',
    description:
      'View the original Bag Technique in-service guide as a PDF, with its full images and layout.',
    icon: 'FileText',
    status: 'available',
    slides: [],
    pdfUrl: '/pdfs/bag-technique.pdf',
  },
]
