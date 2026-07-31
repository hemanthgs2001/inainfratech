// Static project portfolio data — consumed by FeaturedProjects (Home) and Projects page.

const projects = [
  {
    id: 'greenfield-residency',
    name: 'Greenfield Residency',
    location: 'Pune, Maharashtra',
    category: 'Residential',
    status: 'Completed',
    client: 'Greenfield Developers Pvt. Ltd.',
    duration: 'Jan 2023 – Nov 2024',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80',
    description:
      'A 240-unit gated residential community featuring landscaped courtyards, underground parking, and rainwater harvesting infrastructure delivered across four towers.',
    scopeOfWork: [
      'Foundation & structural works for 4 towers (G+14)',
      'MEP installation across all units',
      'Landscaping & common area development',
      'Rainwater harvesting & STP setup'
    ]
  },
  {
    id: 'orion-business-park',
    name: 'Orion Business Park',
    location: 'Bengaluru, Karnataka',
    category: 'Commercial',
    status: 'Completed',
    client: 'Orion Realty Group',
    duration: 'Mar 2022 – Jul 2024',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1000&q=80',
    description:
      'A LEED-aligned commercial office park with three towers, structured parking, and a central plaza, delivered on a fast-track schedule ahead of tenant fit-out.',
    scopeOfWork: [
      'Core & shell construction for 3 office towers',
      'Curtain wall facade installation',
      'Structured multi-level parking',
      'Central plaza landscaping'
    ]
  },
  {
    id: 'nh-44-widening',
    name: 'NH-44 Widening Project',
    location: 'Nagpur–Betul Stretch',
    category: 'Infrastructure',
    status: 'Ongoing',
    client: 'National Highways Authority (Contracted)',
    duration: 'Jun 2024 – Present',
    image:
      'https://images.unsplash.com/photo-1545044846-351ba102b6d5?w=1000&q=80',
    description:
      'A 38-km highway widening project from 2-lane to 4-lane configuration, including culvert reconstruction and a new flyover section.',
    scopeOfWork: [
      'Earthwork & sub-grade preparation across 38 km',
      'Bituminous concrete paving',
      'Culvert & drainage reconstruction',
      'Flyover substructure works'
    ]
  },
  {
    id: 'vantage-industrial-park',
    name: 'Vantage Industrial Park',
    location: 'Ahmedabad, Gujarat',
    category: 'Industrial',
    status: 'Completed',
    client: 'Vantage Manufacturing Ltd.',
    duration: 'Sep 2021 – Feb 2023',
    image:
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1000&q=80',
    description:
      'A heavy-load industrial facility comprising three pre-engineered warehouse units and a dedicated utility block for a manufacturing client.',
    scopeOfWork: [
      'PEB erection for 3 warehouse units',
      'Heavy-duty flooring for machine loads',
      'Utility block civil works',
      'Fire safety & compliance certification'
    ]
  },
  {
    id: 'lakeside-mall-renovation',
    name: 'Lakeside Mall Renovation',
    location: 'Hyderabad, Telangana',
    category: 'Renovation',
    status: 'Completed',
    client: 'Lakeside Retail Ventures',
    duration: 'Apr 2023 – Jan 2024',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80',
    description:
      'Structural strengthening and full interior renovation of an existing retail mall, completed in phases to keep the property partially operational throughout.',
    scopeOfWork: [
      'Structural retrofitting of ageing sections',
      'Interior fit-out for retail units',
      'Electrical & fire system upgrade',
      'Facade renovation'
    ]
  },
  {
    id: 'riverbend-flyover',
    name: 'Riverbend Flyover',
    location: 'Lucknow, Uttar Pradesh',
    category: 'Infrastructure',
    status: 'Ongoing',
    client: 'State Public Works Department',
    duration: 'Feb 2025 – Present',
    image:
      'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=1000&q=80',
    description:
      'A 1.2-km elevated flyover project designed to ease congestion at a major river-crossing junction, currently under substructure construction.',
    scopeOfWork: [
      'Pile foundation & pier construction',
      'Girder launching',
      'Deck slab casting',
      'Approach road realignment'
    ]
  }
];

export default projects;
