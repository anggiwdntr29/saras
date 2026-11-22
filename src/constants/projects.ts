export const PROJECTS_LABEL = 'Projects'

export const PROJECTS_HEADLINE = 'Selected work'

export const PROJECTS_INTRO =
  'Selected work from my professional experience — the context of each project, and what I contributed to it.'

export type Project = {
  title: string
  overview: string
  contributions: string[]
  keyAreas: string[]
  /** Photos in /public/projects — e.g. { src: '/projects/nirvana-sourcing-1.jpg', alt: '…' } */
  images?: ProjectImage[]
}

export type ProjectImage = {
  src: string
  alt: string
}

export type ProjectGroup = {
  company: string
  entity?: string
  projects: Project[]
}

export const PROJECT_GROUPS: ProjectGroup[] = [
  {
    "company": "Nirvana Bali",
    "entity": "PT. Global Development Group",
    "projects": [
      {
        "title": "Procurement & Supplier Sourcing",
        "overview": "Supported procurement activities by identifying suitable suppliers, collecting quotations, and comparing product specifications and pricing to meet operational and project requirements.",
        "contributions": [
          "Conducted supplier research to identify potential vendors based on product availability, quality, pricing, and requirements.",
          "Requested and reviewed quotations from multiple suppliers.",
          "Compared product specifications and pricing to support purchasing decisions.",
          "Coordinated with vendors regarding product details, availability, and delivery schedules.",
          "Followed up on purchasing requirements to support procurement processes."
        ],
        "keyAreas": [
          "Supplier Sourcing",
          "Vendor Evaluation",
          "Quotation Comparison",
          "Procurement Coordination"
        ]
      },
      {
        "title": "Real Estate Project Purchasing Support",
        "overview": "Provided purchasing and administrative support for real estate development projects, including the procurement of goods and materials for project requirements.",
        "contributions": [
          "Handled purchasing requests for project-related goods and materials.",
          "Checked product specifications against project requirements.",
          "Coordinated with suppliers to confirm product availability and delivery arrangements.",
          "Monitored purchasing requirements and delivery timelines.",
          "Coordinated with internal departments to ensure purchasing requirements were communicated and followed up."
        ],
        "keyAreas": [
          "Project Purchasing",
          "Material Sourcing",
          "Purchasing Coordination",
          "Project Administration"
        ]
      },
      {
        "title": "Procurement Documentation & Financial Administration",
        "overview": "Maintained procurement and project documentation to support administrative records, financial tracking, and internal coordination.",
        "contributions": [
          "Prepared purchase orders, official letters, contracts, and finance-related reports.",
          "Organized invoices, delivery notes, and proof of payment.",
          "Maintained digital and physical filing systems for project documentation.",
          "Coordinated documentation with finance, warehouse, receiving, and other relevant departments.",
          "Followed up on outstanding documents and administrative requirements."
        ],
        "keyAreas": [
          "Purchase Orders",
          "Document Control",
          "Financial Records",
          "Administrative Reporting"
        ]
      }
    ]
  },
  {
    "company": "Palma Islands Indonesia",
    "entity": "PT. Next Stepping Stone",
    "projects": [
      {
        "title": "Villa Operations & Administrative Management",
        "overview": "Supported daily villa and office operations through administrative coordination, guest communication, booking management, and accurate documentation.",
        "contributions": [
          "Managed rental inquiries and booking-related communication.",
          "Coordinated guest reservations and villa viewing arrangements.",
          "Maintained property databases, operational records, and administrative documents.",
          "Organized invoices, filing systems, and daily office documentation.",
          "Coordinated with housekeeping regarding operational needs and staff scheduling.",
          "Monitored villa-related expenses and maintained accurate records."
        ],
        "keyAreas": [
          "Villa Administration",
          "Booking Coordination",
          "Guest Communication",
          "Operational Support"
        ]
      },
      {
        "title": "Purchasing & Inventory Management",
        "overview": "Supported purchasing and inventory processes to ensure the availability of essential supplies for daily villa operations.",
        "contributions": [
          "Identified purchasing requirements based on daily operational needs.",
          "Coordinated with vendors and suppliers regarding product availability and delivery arrangements.",
          "Assisted with purchasing office and villa operational supplies.",
          "Monitored inventory levels and updated stock records.",
          "Maintained purchasing documentation, invoices, and supporting records.",
          "Coordinated with housekeeping to ensure essential supplies were available when needed."
        ],
        "keyAreas": [
          "Purchasing Administration",
          "Inventory Monitoring",
          "Supplier Coordination",
          "Stock Control"
        ]
      },
      {
        "title": "Villa Database & Expense Monitoring",
        "overview": "Maintained organized operational and financial records to support villa management activities and administrative reporting.",
        "contributions": [
          "Updated villa property databases and operational spreadsheets.",
          "Maintained purchasing records and expense documentation.",
          "Organized invoices and supporting financial documents.",
          "Monitored operational expenses and maintained accurate records.",
          "Ensured administrative information was organized and accessible."
        ],
        "keyAreas": [
          "Data Management",
          "Expense Tracking",
          "Spreadsheet Administration",
          "Document Control"
        ]
      }
    ]
  },
  {
    "company": "PT Bali Hai Brewery Indonesia",
    "projects": [
      {
        "title": "Receiving & Packaging Administration",
        "overview": "Handled administrative receiving activities for empty bottles and packaging materials through the Orlansoft system, supporting accurate receiving records and warehouse operations.",
        "contributions": [
          "Processed receiving transactions for empty bottles and packaging materials using Orlansoft.",
          "Recorded receiving information within the system.",
          "Supported warehouse receiving activities and related administrative documentation.",
          "Coordinated with warehouse personnel to maintain accurate receiving records."
        ],
        "keyAreas": [
          "Receiving Administration",
          "Orlansoft System",
          "Warehouse Coordination",
          "Transaction Recording"
        ]
      },
      {
        "title": "Inventory Control & Stock Reconciliation",
        "overview": "Supported daily inventory management by monitoring stock movements and maintaining consistency between physical stock, warehouse records, and system data.",
        "contributions": [
          "Updated daily stock and inventory records.",
          "Performed stock reconciliation with the warehouse team.",
          "Checked differences between physical inventory and system records.",
          "Followed up on stock discrepancies with relevant departments.",
          "Maintained inventory movement documentation."
        ],
        "keyAreas": [
          "Inventory Control",
          "Stock Reconciliation",
          "Data Accuracy",
          "Warehouse Administration"
        ]
      },
      {
        "title": "Inventory Reporting & System Administration",
        "overview": "Prepared and maintained inventory reports and system transactions to support daily warehouse monitoring and management reporting.",
        "contributions": [
          "Prepared daily inventory reports.",
          "Updated dashboard reports for management.",
          "Managed shipment documentation and stock location transfers using Orlansoft.",
          "Maintained accurate operational data and transaction records.",
          "Supported timely reporting for management review."
        ],
        "keyAreas": [
          "Inventory Reporting",
          "Orlansoft",
          "Data Management",
          "Operational Reporting"
        ]
      }
    ]
  },
  {
    "company": "Etu Coffee Bali",
    "projects": [
      {
        "title": "Business Partnerships & Client Coordination",
        "overview": "Supported business development and partnership activities by coordinating with clients, potential business partners, and external parties to maintain professional communication and collaboration opportunities.",
        "contributions": [
          "Coordinated with more than 90 clients and potential business partners.",
          "Managed communication regarding collaboration opportunities and business inquiries.",
          "Arranged meetings and followed up on partnership discussions.",
          "Coordinated with influencers for promotional activities.",
          "Assisted with scheduling and communication to support marketing collaborations."
        ],
        "keyAreas": [
          "Client Relations",
          "Business Communication",
          "Partnership Coordination",
          "Influencer Collaboration"
        ]
      },
      {
        "title": "Café Operations & Sales Administration",
        "overview": "Supported daily café operations and sales administration by managing online sales platforms, coordinating operational teams, and maintaining business records.",
        "contributions": [
          "Managed online sales platforms, including Accurate POS, Grab Merchant, and Shopee Partner.",
          "Coordinated daily operational activities with bar and kitchen teams.",
          "Prepared weekly and monthly employee shift schedules.",
          "Monitored operational information and supported daily business administration.",
          "Maintained sales and operational records using spreadsheets."
        ],
        "keyAreas": [
          "Café Operations",
          "Sales Administration",
          "POS Management",
          "Team Coordination"
        ]
      },
      {
        "title": "Recruitment & Employee Coordination",
        "overview": "Assisted management with recruitment and employee coordination activities, supporting the hiring process and helping new team members adapt to operational requirements.",
        "contributions": [
          "Assisted with candidate screening and recruitment administration.",
          "Coordinated interview schedules and communication with candidates.",
          "Supported hiring coordination and management decisions.",
          "Assisted with employee onboarding activities.",
          "Prepared training arrangements and supported new employees in understanding operational standards."
        ],
        "keyAreas": [
          "Recruitment Support",
          "Interview Coordination",
          "Employee Onboarding",
          "Training Administration"
        ]
      },
      {
        "title": "Purchasing & Financial Administration",
        "overview": "Supported purchasing and financial administration to maintain smooth café operations and organized business records.",
        "contributions": [
          "Coordinated purchasing activities based on bar and kitchen operational requirements.",
          "Communicated with suppliers regarding product availability and purchasing needs.",
          "Assisted with payment coordination and purchasing documentation.",
          "Maintained cash flow and expense records using spreadsheets.",
          "Managed employee attendance records and other operational data."
        ],
        "keyAreas": [
          "Purchasing Administration",
          "Vendor Coordination",
          "Expense Monitoring",
          "Financial Records"
        ]
      }
    ]
  },
  {
    "company": "PT PLN (Persero) UP3 Bali Selatan",
    "projects": [
      {
        "title": "Electrical Distribution Maintenance Support",
        "overview": "Participated in electrical distribution maintenance activities, including new installations, maintenance, and replacement of cubicles at distribution substations across South Bali.",
        "contributions": [
          "Assisted technicians with new electrical installations.",
          "Supported maintenance and replacement activities for distribution substation cubicles.",
          "Participated in field activities and technical coordination.",
          "Assisted with operational preparations and supporting documentation."
        ],
        "keyAreas": [
          "Technical Support",
          "Electrical Distribution",
          "Maintenance Coordination"
        ]
      },
      {
        "title": "Customer Complaint Data Administration",
        "overview": "Supported the Command Center team in processing and closing customer complaint records through the Integrated Complaints Application website.",
        "contributions": [
          "Assisted with reviewing and processing customer complaint records.",
          "Updated complaint information through the application system.",
          "Supported the completion and closure of outstanding complaint cases.",
          "Helped process data involving more than 200 customers within one week."
        ],
        "keyAreas": [
          "Data Administration",
          "Complaint Management",
          "Digital Application",
          "Data Processing"
        ]
      },
      {
        "title": "G20 Electrical Infrastructure Support — Nusa Dua, Bali",
        "overview": "Participated in preparation and implementation activities for electrical infrastructure support for the 2022 G20 Presidency in Nusa Dua, Bali.",
        "contributions": [
          "Assisted in pre-activity preparations for electrical infrastructure installations.",
          "Participated in activities related to Uninterruptible Power Supply (UPS) installation.",
          "Supported Public Electric Vehicle Charging Station (SPKLU) installation activities.",
          "Assisted the technical team during preparation and implementation stages."
        ],
        "keyAreas": [
          "Project Support",
          "Electrical Infrastructure",
          "Technical Coordination",
          "G20 2022"
        ]
      }
    ]
  },
  {
    "company": "PT Adi Luhung Abadi",
    "entity": "ADILA Group Contractor",
    "projects": [
      {
        "title": "Tender & Business Development Administration",
        "overview": "Provided administrative support for marketing and business development activities, particularly in tender preparation and business opportunity documentation.",
        "contributions": [
          "Prepared and organized tender-related documents.",
          "Checked document completeness and administrative requirements through the LPSE platform.",
          "Supported the preparation of business correspondence.",
          "Coordinated with third-party partners regarding equipment support and business cooperation opportunities.",
          "Maintained communication and documentation with external parties."
        ],
        "keyAreas": [
          "Tender Administration",
          "LPSE Documentation",
          "Business Development Support",
          "Partner Coordination"
        ]
      }
    ]
  }
]
