// Static service data — consumed by ServicesPreview (Home) and Services page.
// No backend/CMS is used; content is maintained here as structured JS data.

const services = [
  {
    id: 'residential-construction',
    title: 'Residential Construction',
    shortDescription: 'End-to-end construction of homes, apartments, and gated residential communities.',
    description:
      'From foundation to finishing, we deliver residential developments built to last. Our teams manage structural work, MEP coordination, and interior handover so families move into homes built on solid engineering, not shortcuts.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
    icon: 'Home',
    deliverables: [
      'Site grading & foundation work',
      'Structural framing & RCC work',
      'MEP (mechanical, electrical, plumbing) coordination',
      'Interior finishing & handover'
    ]
  },
  {
    id: 'commercial-construction',
    title: 'Commercial Construction',
    shortDescription: 'Office parks, retail complexes, and mixed-use developments built for scale.',
    description:
      'We construct commercial spaces designed around occupancy needs, fire safety codes, and long-term facility management, delivered on schedule to protect our clients\u2019 leasing and opening timelines.',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80',
    icon: 'Building2',
    deliverables: [
      'Core & shell construction',
      'Fire & life-safety compliance',
      'Facade & curtain wall installation',
      'Fit-out coordination with tenants'
    ]
  },
  {
    id: 'road-highway-infrastructure',
    title: 'Road & Highway Infrastructure',
    shortDescription: 'Highways, arterial roads, and bridge works engineered for heavy load cycles.',
    description:
      'Our infrastructure division executes road widening, highway construction, and bridge works in line with government specification and load-bearing standards, with a strong focus on worker and public safety.',
    image:
      'https://images.unsplash.com/photo-1545044846-351ba102b6d5?w=900&q=80',
    icon: 'Route',
    deliverables: [
      'Earthwork & sub-grade preparation',
      'Bituminous & concrete paving',
      'Drainage & culvert construction',
      'Bridge & flyover works'
    ]
  },
  {
    id: 'industrial-projects',
    title: 'Industrial Projects',
    shortDescription: 'Factories, warehouses, and process plants built to industrial-grade specification.',
    description:
      'We build industrial facilities that need to handle heavy machinery loads, specialized utilities, and strict safety codes, from pre-engineered warehouse structures to process plant civil works.',
    image:
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=900&q=80',
    icon: 'Factory',
    deliverables: [
      'Pre-engineered building (PEB) erection',
      'Heavy-load flooring & foundations',
      'Utility & process piping civil works',
      'Safety & compliance certification support'
    ]
  },
  {
    id: 'renovation-interiors',
    title: 'Renovation & Interiors',
    shortDescription: 'Structural renovation and interior fit-out for residential and commercial spaces.',
    description:
      'We refresh ageing structures and deliver modern interior fit-outs, balancing structural safety upgrades with the design intent of architects and interior consultants.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80',
    icon: 'Hammer',
    deliverables: [
      'Structural retrofitting & strengthening',
      'Interior fit-out & carpentry',
      'Electrical & plumbing upgrades',
      'Painting & finishing works'
    ]
  },
  {
    id: 'structural-engineering',
    title: 'Structural Engineering',
    shortDescription: 'Structural design, analysis, and certification for buildings of every scale.',
    description:
      'Our structural engineering team provides design validation, load analysis, and certification support so every project stands on sound engineering fundamentals before a single brick is laid.',
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80',
    icon: 'Ruler',
    deliverables: [
      'Structural design & analysis',
      'Seismic & load assessment',
      'Drawing & documentation support',
      'Third-party structural certification'
    ]
  },
  {
    id: 'project-consulting',
    title: 'Project Consulting',
    shortDescription: 'Planning, estimation, and project management advisory for construction ventures.',
    description:
      'For clients who need advisory support before or alongside execution, we offer project planning, cost estimation, and on-ground project management consulting drawn from decades of field experience.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80',
    icon: 'ClipboardList',
    deliverables: [
      'Feasibility & cost estimation',
      'Project scheduling & planning',
      'Vendor & contractor coordination',
      'On-site project management'
    ]
  }
];

export default services;
