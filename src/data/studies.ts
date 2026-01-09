export const studies = [
  {
    title: "Especialización en Ciberseguridad",
    institution: "IES El Caminás",
    description:
      "Formación especializada en seguridad informática, análisis forense digital, gestión de incidentes de seguridad y protección de sistemas y redes.",
    tags: [
      "Ciberseguridad",
      "Análisis Forense",
      "Seguridad de Redes",
      "Gestión de Incidentes",
    ],
  },
  {
    title: "Especialización en IA y Big Data",
    institution: "IES El Caminás",
    description:
      "Especialización en inteligencia artificial, procesamiento de grandes volúmenes de datos, machine learning y técnicas de análisis de datos avanzadas.",
    tags: [
      "Inteligencia Artificial",
      "Big Data",
      "Machine Learning",
      "Análisis de Datos",
    ],
  },
  {
    title: "Grado Superior en Automatización y Robótica Industrial",
    institution: "IES Serra d'Espada",
    description:
      "Formación técnica en automatización industrial, programación de robots, control de procesos, sistemas eléctricos y neumáticos industriales.",
    tags: [
      "Automatización Industrial",
      "Robótica",
      "Control de Procesos",
      "Sistemas Eléctricos",
    ],
  },
  {
    title: "Grado Medio en Instalaciones Eléctricas y Automáticas",
    institution: "IES Serra d'Espada",
    description:
      "Formación básica en instalaciones eléctricas, automatización básica, mantenimiento de sistemas eléctricos y seguridad en instalaciones.",
    tags: [
      "Instalaciones Eléctricas",
      "Automatización",
      "Mantenimiento",
      "Seguridad Eléctrica",
    ],
  },
];

export type StudyItem = (typeof studies)[number];

