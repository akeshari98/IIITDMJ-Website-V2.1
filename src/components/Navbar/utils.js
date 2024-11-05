import { CircleHelp } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { Play } from "lucide-react";
import { Database } from "lucide-react";
import { MapPin } from "lucide-react";
import { HeartPulse,Monitor,Download,Banknote,ShoppingCart,Utensils,Heart,Dumbbell,Activity } from "lucide-react";
import { Book,Briefcase,Clipboard,User,Laptop, Code, Palette, BookOpen,DollarSign, Settings,ClipboardCheck,Home,Layers} from "lucide-react"

export const Menus = [
  {
    name: "Home",
    subMenuGroups: [
      {
        items: [
          {
            name: "About",
            icon: Book,
            href: "/"
          },
        ],
      },
    ],
  },
  {
    name: "Academics",
    gridCols: 3,
    subMenuGroups: [
      {
        heading: "PROGRAMMES",
        items: [
          { name: "B.Tech." },
          { name: "M.Tech." },
          { name: "B.Des." },
          { name: "M.Des." },
          { name: "Ph.D." },
          { name: "Integrated Master+Ph.D." },
          { name: "Special Part Time M.Tech./M.Des." }
        ]
      },
      {
        heading: "ADMISSION",
        items: [
          { name: "Undergraduate programs" },
          { name: "Postgraduate Program" },
          { name: "Ph.D. Programs" },
          { name: "Fees Structure" },
          { name: "Seat Matrix 2024-25" },
          { name: "Academic Guidelines (UG & PG)" },
          { name: "Academic Guidelines (Ph.D.)" },
          { name: "Curriculum" }
        ]
      },
      {
        heading: "ACADEMIC LINKS",
        items: [
          { name: "Academic Calendar" },
          { name: "Time Table Sem I, 2024-25" },
          { name: "Guidelines - Time Table Sem I" },
          { name: "Useful Information" },
          { name: "Fee Refund Rule" },
          { name: "Proposal/Modification for a Course" },
          { name: "Proposal for a New Elective" },
          { name: "Course & Modification in a Course" },
          { name: "Form for submission of thesis" },
          { name: "Convocation" }
        ]
      },
      {
        heading: "IMPORTANT LINKS",
        items: [
          { name: "Important Forms" },
          { name: "Internal Circulars" },
          { name: "External Circulars" },
          { name: "Study In India" }
        ]
      },
    ]
  },
  {
    name: "Administration",
    subMenuGroups: [
      {
        items: [{
          name: "Board of Governors",
          icon: CircleHelp,
          href: "/boardofgoverners"
        },
        {
          name: "Finance Committee",
          icon: DollarSign,
          href: "/financecommittee"
        },
        {
          name: "General Administration",
          icon: Settings,
          href: "/generaladministration"
        },
        {
          name: "Other Administration",
          icon: ClipboardCheck,
          href: "/otheradministration"
        },
        {
          name: "Senate",
          icon: Users,
          href: "/senate"
        },
        {
          name: "Building Works Committee",
          icon: Home,
          href: "/buildingworkscommittee"
        },
        {
          name: "Administrative Structure",
          icon: Layers,
          href: "/administrativestructure"
        }]
      }
    ],
    gridCols: 1,
  },  
  {
    name: "Departments",
    subMenuGroups: [
      { 
        items: [
          {
            name: "Computer Science & Engineering (CSE)",
            icon: Laptop,
            href: "http://cse.iiitdmj.ac.in/"
          },
          {
            name: "Electronics & Communication Engineering (ECE)",
            icon: Code,
            href: "https://www.iiitdmj.ac.in/ece.iiitdmj.ac.in/"
          },
          {
            name: "Design (Des)",
            icon: Palette,
            href: "http://design.iiitdmj.ac.in/"
          },
          {
            name: "Mechanical Engineering (ME)",
            icon: Settings,
            href: "https://www.iiitdmj.ac.in/me.iiitdmj.ac.in/"
          },
          {
            name: "Natural Sciences (NS)",
            icon: BookOpen,
            href: "https://www.iiitdmj.ac.in/ns.iiitdmj.ac.in/"
          },
          {
            name: "Liberal Arts (LA)",
            icon: Users,
            href: "https://www.iiitdmj.ac.in/la.iiitdmj.ac.in/"
          },
        ]
      }
    ],
  },
  {
    name: "Deans",
    subMenuGroups: [
      {
        items: [
          {
            name: "Dean Academics",
            icon: Laptop,
            href: "/deanacademics"
          },
          {
            name: "Dean Students",
            icon: User,
            href: "/deanstudents"
          },
          {
            name: "Dean RSPC",
            icon: Palette,
            href: "/"
          },
          {
            name: "Dean P&D",
            icon: Settings,
            href: "/"
          },
        ],
      },
    ],
  },
  {
    name: "People",
    subMenuGroups: [
      {
        items: [
          {
            name: "Faculty",
            icon: Book,
            href: "http://faculty.iiitdmj.ac.in/"
          },
          {
            name: "Research Staff",
            icon: Users,
            href: "/researchstaff"
          },
          {
            name: "Office Administration",
            icon: Clipboard,
            href: "/officeadministration"
          },
          {
            name: "Staff",
            icon: Briefcase,
            href: "/staff"
          },
        ],
      },
    ],
  },
  {
    name: "Students",
    subMenuGroups: [
      {
        items: [
          {
            name: "Students Portal",
            icon: Book,
            href: "https://iiitdm.iweb.ltd/Account/LoginMVC"
          },
          {
            name: "Placement",
            icon: Briefcase,
            href: "https://www.iiitdmj.ac.in/placement.iiitdmj.ac.in/"
          },
          {
            name: "Gymkhana",
            icon: Dumbbell,
            href: "/gymkhana"
          },
          {
            name: "Activities",
            icon: Activity,
            href: "/activities"
          },
          {
            name: "Counselling",
            icon: Heart,
            href: "/counselling"
          },
          {
            name: "Hostel",
            icon: Home,
            href: "/hostels"
          },
          {
            name: "Alumni Cell",
            icon: Users,
            href: "https://alumni.iiitdmj.ac.in/"
          },
          {
            name: "Student Mess",
            icon: Utensils,
            href: "https://www.iiitdmj.ac.in/mess.iiitdmj.ac.in/"
          },
        ],
      },
    ],
  },
  {
    name: "Facilities",
    subMenuGroups: [
      {
        items: [
          {
            name: "Primary Health Center",
            icon: HeartPulse,
            href: "/primaryhealthcentre"
          },
          {
            name: "Library",
            icon: Book,
            href: "http://web.iiitdmj.ac.in/library.html"
          },
          {
            name: "Computer Center",
            icon: Monitor,
            href: "https://www.iiitdmj.ac.in/cc.iiitdmj.ac.in/"
          },
          {
            name: "Bank and ATM",
            icon: Banknote,
            href: "https://www.iiitdmj.ac.in/downloads/Banking%20Facilities%20in%20PDPM.pdf"
          },
          {
            name: "Shops In Campus",
            icon: ShoppingCart,
            href: "/shopsincampus"
          },
          {
            name: "Downloads",
            icon: Download,
            href: "/"
          },
        ],
      },
    ],
  },
  {
    name: "Facilities",
  }
];