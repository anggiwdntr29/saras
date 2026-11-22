export const EXPERIENCE_LABEL = 'Experience'

export const EXPERIENCE_HEADLINE = 'Where I have worked'

export const EXPERIENCE_INTRO =
  'My professional experience spans several industries, including real estate, hospitality, food and beverage, manufacturing, utilities, and construction-related business administration.'

export type Experience = {
  company: string
  entity?: string
  position: string
  period: string
  industry: string
  summary: string
  responsibilities: string[]
  projects: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    company: 'Nirvana Bali',
    entity: 'PT. Global Development Group',
    position: 'Procurement Admin — Real Estate & Purchasing Support',
    period: 'Oct 2026 — Present',
    industry: 'Real Estate',
    summary:
      'Supported procurement administration and purchasing activities for real estate development and operational requirements.',
    responsibilities: [
      'Conducted supplier research to identify potential vendors based on product availability, quality, pricing, and requirements.',
      'Requested and reviewed quotations from suppliers.',
      'Compared product specifications and pricing to support purchasing decisions.',
      'Coordinated with vendors regarding product details, availability, and delivery schedules.',
      'Handled purchasing requests for project-related goods and materials.',
      'Checked product specifications against project requirements.',
      'Followed up on purchasing requirements and delivery timelines.',
      'Prepared and organized purchase orders, official letters, contracts, and finance-related reports.',
      'Organized invoices, delivery notes, and proof of payment.',
      'Coordinated documentation with finance, warehouse, receiving, and other relevant departments.',
    ],
    projects: [
      'Procurement & Supplier Sourcing',
      'Real Estate Project Purchasing Support',
      'Procurement Documentation & Financial Administration',
    ],
  },
  {
    company: 'Palma Islands Indonesia',
    entity: 'PT. Next Stepping Stone',
    position: 'Administrative Assistant',
    period: 'Apr 2026 — Aug 2026',
    industry: 'Hospitality',
    summary:
      'Supported villa and office administration, guest communication, purchasing activities, inventory monitoring, and daily operational coordination.',
    responsibilities: [
      'Managed rental inquiries and booking-related communication.',
      'Coordinated guest reservations and villa viewing arrangements.',
      'Maintained property databases, operational records, and administrative documents.',
      'Organized invoices, filing systems, and daily office documentation.',
      'Coordinated with the housekeeping team regarding operational needs and staff scheduling.',
      'Monitored villa-related expenses and maintained records.',
      'Identified purchasing requirements based on daily operational needs.',
      'Coordinated with vendors and suppliers regarding product availability and delivery arrangements.',
      'Assisted with purchasing office and villa operational supplies.',
      'Monitored inventory levels and updated stock records.',
      'Maintained purchasing documentation, invoices, and supporting records.',
    ],
    projects: [
      'Villa Operations & Administrative Management',
      'Purchasing & Inventory Management',
      'Villa Database & Expense Monitoring',
    ],
  },
  {
    company: 'PT Bali Hai Brewery Indonesia',
    position: 'Administrative Staff — EBI Bali',
    period: 'Jan 2025 — Apr 2026',
    industry: 'Manufacturing',
    summary:
      'Supported warehouse administration, receiving transactions, inventory reconciliation, and operational reporting using the Orlansoft system.',
    responsibilities: [
      'Processed receiving transactions for empty bottles and packaging materials using Orlansoft.',
      'Recorded receiving information within the system.',
      'Supported warehouse receiving activities and related administrative documentation.',
      'Updated daily stock and inventory records.',
      'Performed stock reconciliation with the warehouse team.',
      'Checked differences between physical inventory and system records.',
      'Followed up on stock discrepancies with relevant departments.',
      'Prepared daily inventory reports.',
      'Updated dashboard reports for management.',
      'Managed shipment documentation and stock location transfers using Orlansoft.',
      'Maintained accurate operational data and transaction records.',
    ],
    projects: [
      'Receiving & Packaging Administration',
      'Inventory Control & Stock Reconciliation',
      'Inventory Reporting & System Administration',
    ],
  },
  {
    company: 'Etu Coffee Bali',
    position: 'Administrative Assistant to Director',
    period: 'Apr 2023 — Jan 2025',
    industry: 'Food & Beverage',
    summary:
      'Provided administrative and operational support across business partnerships, customer coordination, café operations, recruitment, and purchasing activities.',
    responsibilities: [
      'Coordinated with more than 90 clients and potential business partners.',
      'Managed communication regarding collaboration opportunities and business inquiries.',
      'Arranged meetings and followed up on partnership discussions.',
      'Coordinated with influencers for promotional activities.',
      'Managed online sales platforms, including Accurate POS, Grab Merchant, and Shopee Partner.',
      'Coordinated daily operational activities with bar and kitchen teams.',
      'Prepared weekly and monthly employee shift schedules.',
      'Assisted with candidate screening and recruitment administration.',
      'Coordinated interview schedules and communication with candidates.',
      'Supported employee onboarding and training arrangements.',
      'Coordinated purchasing activities based on bar and kitchen operational requirements.',
      'Communicated with suppliers regarding product availability and purchasing needs.',
      'Assisted with payment coordination and purchasing documentation.',
      'Maintained cash flow and expense records using spreadsheets.',
      'Managed employee attendance records and other operational data.',
    ],
    projects: [
      'Business Partnerships & Client Coordination',
      'Café Operations & Sales Administration',
      'Recruitment & Employee Coordination',
      'Purchasing & Financial Administration',
    ],
  },
  {
    company: 'PT PLN (Persero) UP3 Bali Selatan',
    position: 'Junior Technician Intern',
    period: 'Aug 2022 — Jan 2023',
    industry: 'Utilities',
    summary:
      'Participated in electrical distribution maintenance activities, customer complaint data administration, and electrical infrastructure support.',
    responsibilities: [
      'Assisted technicians with new electrical installations.',
      'Supported maintenance and replacement activities for distribution substation cubicles.',
      'Participated in field activities and technical coordination.',
      'Assisted with reviewing and processing customer complaint records through the Integrated Complaints Application website.',
      'Updated complaint information through the application system.',
      'Supported the completion and closure of outstanding complaint cases.',
      'Helped process data involving more than 200 customers within one week.',
      'Assisted with preparation and implementation activities related to electrical infrastructure support for the 2022 G20 Presidency in Nusa Dua, Bali.',
      'Participated in activities related to Uninterruptible Power Supply (UPS) installation.',
      'Supported Public Electric Vehicle Charging Station (SPKLU) installation activities.',
    ],
    projects: [
      'Electrical Distribution Maintenance Support',
      'Customer Complaint Data Administration',
      'G20 Electrical Infrastructure Support — Nusa Dua, Bali',
    ],
  },
  {
    company: 'PT Adi Luhung Abadi',
    entity: 'ADILA Group Contractor',
    position: 'Marketing Administrator',
    period: 'Apr 2021 — Jul 2022',
    industry: 'Construction',
    summary:
      'Provided administrative support for marketing and business development activities, particularly in tender preparation and business opportunity documentation.',
    responsibilities: [
      'Prepared and organized tender-related documents.',
      'Checked document completeness and administrative requirements through the LPSE platform.',
      'Supported the preparation of business correspondence.',
      'Coordinated with third-party partners regarding equipment support and business cooperation opportunities.',
      'Maintained communication and documentation with external parties.',
    ],
    projects: ['Tender & Business Development Administration'],
  },
]
