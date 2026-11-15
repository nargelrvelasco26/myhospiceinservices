import type { Slide } from '../lib/types'
import { CoverSlide } from './slides/CoverSlide'
import { IntroSlide } from './slides/IntroSlide'
import { CardsSlide } from './slides/CardsSlide'
import { TimelineSlide } from './slides/TimelineSlide'
import { TableSlide } from './slides/TableSlide'
import { MythFactSlide } from './slides/MythFactSlide'
import { IconGridSlide } from './slides/IconGridSlide'
import { TeamSlide } from './slides/TeamSlide'
import { StepsSlide } from './slides/StepsSlide'
import { QuizIntroSlide } from './slides/QuizIntroSlide'
import { QuizSlide } from './slides/QuizSlide'
import { WrapUpSlide } from './slides/WrapUpSlide'
import { SourcesSlide } from './slides/SourcesSlide'
import { ClosingSlide } from './slides/ClosingSlide'

export function SlideView({ slide }: { slide: Slide }) {
  switch (slide.type) {
    case 'cover':
      return <CoverSlide {...slide} />
    case 'intro':
      return <IntroSlide {...slide} />
    case 'cards':
      return <CardsSlide {...slide} />
    case 'timeline':
      return <TimelineSlide {...slide} />
    case 'table':
      return <TableSlide {...slide} />
    case 'mythfact':
      return <MythFactSlide {...slide} />
    case 'icongrid':
      return <IconGridSlide {...slide} />
    case 'team':
      return <TeamSlide {...slide} />
    case 'steps':
      return <StepsSlide {...slide} />
    case 'quizIntro':
      return <QuizIntroSlide {...slide} />
    case 'quiz':
      return <QuizSlide {...slide} />
    case 'wrapup':
      return <WrapUpSlide {...slide} />
    case 'sources':
      return <SourcesSlide {...slide} />
    case 'closing':
      return <ClosingSlide {...slide} />
    default:
      return null
  }
}
