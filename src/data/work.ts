import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Montaje e instalación de ventanas",
    company: "Juansa Ventanas",
    region: "Onda, Castellón, España",
    description:
      "Trabajos de montaje e instalación de ventanas durante periodos estacionales. Responsabilidades en el montaje de estructuras y sistemas de ventanas.",
    technologies: [],
  },
  {
    title: "Prácticas Ciclo Grado Superior Robótica",
    company: "Torrecid",
    region: "España",
    description:
      "Reparación de averías eléctricas en planta y oficinas. Automatización de procesos de almacén con Python. Gestión de inventario de almacén.",
    technologies: [
      "Python",
      "Automatización",
      "Electricidad Industrial",
      "Inventario",
    ],
  },
  {
    title: "Prácticas en montaje de impresoras de cartón",
    company: "Maincer",
    region: "España",
    description:
      "Montaje mecánico de cinta transportadora. Mecanizado de cuadros eléctricos. Preinstalación de componentes eléctricos y mecánicos en cuadros eléctricos y maquinaria industrial.",
    technologies: [
      "Montaje Mecánico",
      "Cuadros Eléctricos",
      "Maquinaria Industrial",
    ],
  },
  {
    title: "Pre montaje e instalación de componentes",
    company: "EFI Cretaprint",
    region: "España",
    description:
      "Pre montaje e instalación de componentes mecánicos y eléctricos en impresoras industriales. Identificación y corrección de fallos de funcionamiento.",
    technologies: [
      "Montaje Industrial",
      "Impresoras Industriales",
      "Mantenimiento",
      "Detección de Fallos",
    ],
  },
];

export type WorkItem = (typeof work)[number];

