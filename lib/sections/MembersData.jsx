const imgFolder = '/images/partners/'
const members = [
  {
    name: 'accessec',
    description:
      'accessec is a German security system company working to make the digital transformation secure within industrial IT, the automotive industry and identity centric security among others.',
    logo: `${imgFolder}Accessec_logo.png`,
    quote:
      'Accessec is delighted to join the Eclipse foundation and Tangle EE Working Group, supporting the IOTA Foundation in developing, designing and implementing solutions on IOTA’s technology.',
    author: 'Sven Feuchtmüller, Chief Technology Officer',
    url: 'https://accessec.com/'
  },
  {
    name: 'AKITA',
    description:
      'AKITA is building tangible, live prototypes supported by the IOTA Foundation, EDF Development Fund and based on the Tangle network technology to empower the Machine Economy.',
    logo: `${imgFolder}akita.jpg`,
    url: 'https://m2m.akitablock.io/'
  },
  {
    name: 'BiiLabs',
    description:
      'BiiLabs is a technology-driven software company providing components and services for distributed ledger infrastructure in the field of industrial and energy-efficient applications.',
    logo: `${imgFolder}BiiLabs_logo.png`,
    quote:
      'As a member of Eclipse Foundation, BiiLabs will contribute our engineering team’s distributed ledger technology expertise to support the development of open-source software. We will establish a high-level delivery plan for Tangle EE within the working group.',
    author: 'Jim Huang, Co-Founder & CTO of BiiLabs',
    url: 'https://biilabs.io/'
  },
  {
    name: 'Calypso Networks Association',
    description:
      'Calypso Networks Association (CNA) is a non-profit association created in 2003 by OTLIS-Lisbon, ACTV-Venice, STIB-Brussels, LKRKN-Constance, RATP & SNCF-Paris dedicated to develop and promote Contactless Ticketing Standard CALYPSO®. Calypso is a contactless ticketing standard, managed by its users deployed in more than 25 countries and 150 major cities in the world accessible to any supplier, and used by ticketing systems in many transport networks and parkings around the world for more than 15 years. Further than public transport, Calypso provides multiservice applications for leisure, access control, bike, car sharing… CNA has also in its main missions to promote Calypso on a global scale, to provide support to its 120 members and to facilitate and harmonize the shared members’ needs and experiences.',
    logo: `${imgFolder}Calypso_logo.jpg`,
    url: 'https://www.calypsonet-asso.org/'
  },
  {
    name: 'Dell Technologies',
    description:
      'Dell Technologies (NYSE:DELL) is a unique family of businesses that helps organizations and individuals build their digital future and transform how they work, live, and play. The company provides customers with the industry’s broadest and most innovative technology and services portfolio spanning from edge to core to cloud.',
    logo: `${imgFolder}delltechnologies.png`,
    url: 'http://www.delltechnologies.com/'
  },
  {
    name: 'Energinet',
    description:
      'Energinet is an independent public enterprise owned by the Danish Ministry of Climate, Energy and Utilities. Energinet owns, operates and develops the transmission systems for electricity and natural gas in Denmark.',
    logo: `${imgFolder}energinet.png`,
    url: 'https://en.energinet.dk/'
  },
  {
    name: 'ENGIE Lab Crigen',
    description:
      'ENGIE Lab CRIGEN, part of the ENGIE Labs network, is ENGIE Group’s corporate center for R&D and high-level expertise devoted to new energy resources (hydrogen, biogas and gas liquefaction), new energy uses in towns and cities, the buildings and industries of tomorrow and emerging technologies (computer sciences and Al, drones and robots, nanotechnologies and sensors).',
    logo: `${imgFolder}engie-logo-4.png`,
    url: 'https://www.engie.com/'
  },
  {
    name: 'Geometric Energy Corporation',
    description:
      'Geometric Energy Corporation (GEC) offers end-to-end B2B product development services specializing in Blockchain/Beyond Blockchain, AI, IoT, and Cybersecurity to help industry integrate new leading edge technologies.',
    logo: `${imgFolder}GEC_logo.png`,
    quote:
      'We are looking forward to our continued participation with the Eclipse Foundation as part of the Tangle EE working group. We have our sights set high for the future of IOTA and our ongoing contributions to the Tangle ecosystem.',
    author: 'Samuel Reid, CEO of Geometric Energy Corporation',
    url: 'https://www.geometricenergy.ca/'
  },
  {
    name: 'IoTIFY',
    description:
      "IOTIFY is a virtualization platform for the Internet of Things. IoTIFY is industry's first cloud-based IoT performance testing platform helping developers build scalable IoT applications handling millions of connected devices.",
    logo: `${imgFolder}IOTIFY-1.png`,
    url: 'https://iotify.io/'
  },
  {
    name: 'Object Management Group',
    description:
      'The Object Management Group® (OMG®) is an international, open membership, not-for-profit technology standards consortium, founded in 1989. OMG standards are driven by vendors, end-users, academic institutions and government agencies. OMG Task Forces develop enterprise integration standards for a wide range of technologies and an even wider range of industries.',
    logo: `${imgFolder}OMG_logo.png`,
    url: 'https://www.omg.org/'
  },
  {
    name: 'Otto von Guericke University Magdeburg',
    description:
      'Otto von Guericke University Magdeburg is one of Germany’s youngest universities and aims to create a lean and sharply-defined structure with its main focus of expertise in the traditional areas of engineering, the natural sciences and medicine.',
    logo: `${imgFolder}Otto_logo.png`,
    url: 'https://www.uni-magdeburg.de/en/'
  },
  {
    name: 'RWTH Aachen University',
    description:
      'RWTH Aachen University is a place where the future of our industrialised world is thought out. The University is proving to be a hotspot with increasing international recognition where innovative answers to global challenges are developed.',
    logo: `${imgFolder}RWTH_logo.png`,
    url: 'https://www.rwth-aachen.de/'
  },
  {
    name: 'Software AG',
    description:
      'Software AG offers Freedom as a Service. We reimagine integration, spark business transformation and enable fast innovation on the Internet of Things so you can pioneer differentiating business models.  We give you the freedom to connect and integrate any technology—from app to edge. We help you free data from silos so it’s shareable, usable and powerful—enabling you to make the best decisions and unlock entirely new possibilities for growth.',
    logo: `${imgFolder}AG_logo.png`,
    quote:
      'With the Tangle EE working group, IOTA is stepping up its governance structures in line with its technological leadership and roadmap (e.g., coordicide). We are very proud and excited to be part of this initiative which we believe is poised to finally fulfil the promises of DLT.',
    author: 'Christoph F. Strnadl | VP Innovation & Architecture | Software AG',
    url: 'https://www.softwareag.com/'
  },

  {
    name: 'STMicroelectronics',
    description:
      'STMicroelectronics is a global semiconductor leader serving customers across the spectrum of electronics applications, to create a new level of powerful, seamless and cost-effective access to Internet of Things (IoT) functionality.',
    logo: `${imgFolder}st-microelectronics.png`,
    url: 'https://www.st.com/content/st_com/en.html'
  },
  {
    name: 'TMForum',
    description:
      'TM Forum provides an open, agile and collaborative environment that enables communications service providers and digital service providers to rapidly transform their business operations, IT systems and ecosystems to capitalize on the opportunities of the ever-evolving digital world. As a neutral, non-profit member organization, TMForum represents over 850 member companies, serving five billion customers across 180 countries.',
    logo: `${imgFolder}tmforum.png`,
    url: 'https://www.tmforum.org/'
  }
]

export default members
