import type { Topic } from '../../lib/types'
import { slides as hospice101Slides } from './hospice101.slides'
import { slides as hopeSlides } from './hope.slides'
import { slides as hipaaSlides } from './hipaa.slides'
import { slides as socSlides } from './soc.slides'
import { slides as eobSlides } from './eob.slides'

// Add new in-service topics here as they're created.
// Each topic needs its own `<id>.slides.ts` file exporting a `slides: Slide[]`
// array, then register it below.
export const topics: Topic[] = [
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
]
