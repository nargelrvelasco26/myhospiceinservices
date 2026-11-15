export type IconName =
  | 'Heart'
  | 'Users'
  | 'Sun'
  | 'Leaf'
  | 'Home'
  | 'Flag'
  | 'Ban'
  | 'RefreshCw'
  | 'Phone'
  | 'Shield'
  | 'MessageCircle'
  | 'Award'
  | 'Globe'
  | 'Star'
  | 'Inbox'
  | 'Repeat'
  | 'Clock'
  | 'Bed'
  | 'Building2'
  | 'Brain'
  | 'Wind'
  | 'Activity'
  | 'Filter'
  | 'PersonStanding'
  | 'Pill'
  | 'Accessibility'
  | 'Briefcase'
  | 'Bird'
  | 'HandHeart'
  | 'Stethoscope'
  | 'UserRound'
  | 'Lightbulb'
  | 'HelpCircle'
  | 'BookOpen'
  | 'ClipboardList'
  | 'MapPin'
  | 'UserCog'
  | 'Hourglass'
  | 'Gauge'
  | 'Link2'
  | 'TrendingUp'
  | 'CheckCircle2'
  | 'AlertTriangle'
  | 'Copy'
  | 'Calendar'
  | 'TrendingDown'
  | 'BarChart3'
  | 'DollarSign'
  | 'HeartPulse'
  | 'Hand'
  | 'Siren'
  | 'Eye'
  | 'FileText'
  | 'Lock'
  | 'Bell'
  | 'Gavel'
  | 'Mic'
  | 'Laptop'
  | 'Send'
  | 'FolderOpen'
  | 'Landmark'
  | 'Syringe'
  | 'UserX'
  | 'Mail'
  | 'Hash'
  | 'Printer'
  | 'Network'
  | 'DoorClosed'
  | 'Fingerprint'
  | 'PenLine'
  | 'EyeOff'
  | 'Car'
  | 'KeyRound'
  | 'UserCheck'
  | 'Wifi'
  | 'Server'
  | 'CloudOff'
  | 'Usb'
  | 'Download'
  | 'Fish'
  | 'Camera'
  | 'Video'
  | 'Search'
  | 'Trash2'
  | 'CreditCard'
  | 'Badge'
  | 'UtensilsCrossed'
  | 'Droplet'
  | 'Smile'
  | 'Zap'
  | 'ThermometerSun'
  | 'Scale'
  | 'ClipboardCheck'
  | 'PackageCheck'
  | 'Boxes'
  | 'Package'
  | 'FileCheck'
  | 'Handshake'
  | 'Percent'
  | 'XCircle'
  | 'Truck'
  | 'Monitor'
  | 'GraduationCap'
  | 'Gift'

export interface CardItem {
  icon: IconName
  title: string
  body: string
}

export type Slide =
  | {
      type: 'cover'
      eyebrow: string
      title: string
      titleLine2: string
      subtitle: string
      badge: string
      address: string
    }
  | {
      type: 'intro'
      eyebrow: string
      title: string
      paragraphs: string[]
      note: string
      objectivesHeading: string
      objectives: string[]
    }
  | {
      type: 'cards'
      eyebrow: string
      title: string
      items: CardItem[]
    }
  | {
      type: 'timeline'
      eyebrow: string
      title: string
      items: { year: string; body: string; color: string }[]
    }
  | {
      type: 'table'
      eyebrow: string
      title: string
      columns: string[]
      rows: string[][]
    }
  | {
      type: 'mythfact'
      eyebrow: string
      title: string
      items: { myth: string; fact: string }[]
    }
  | {
      type: 'icongrid'
      eyebrow: string
      title: string
      items: { icon: IconName; label: string }[]
    }
  | {
      type: 'team'
      eyebrow: string
      title: string
      roles: string[]
    }
  | {
      type: 'steps'
      eyebrow: string
      title: string
      items: { icon: IconName; title: string; body: string }[]
    }
  | {
      type: 'quizIntro'
      eyebrow: string
      title: string
      subtitle: string
    }
  | {
      type: 'quiz'
      index: number
      total: number
      question: string
      options?: string[]
      answerLead?: string
      answer: string
    }
  | {
      type: 'wrapup'
      eyebrow: string
      title: string
      items: { icon: IconName; body: string }[]
    }
  | {
      type: 'sources'
      eyebrow: string
      title: string
      rows: { label: string; body: string }[]
      note: string
    }
  | {
      type: 'closing'
      title: string
      subtitle: string
      note: string
      address: string
    }

export interface Topic {
  id: string
  title: string
  description: string
  icon: IconName
  status: 'available' | 'comingSoon'
  slides: Slide[]
}
