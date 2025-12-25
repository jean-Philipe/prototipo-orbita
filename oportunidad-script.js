// Datos de oportunidades (incluidos directamente para funcionar sin servidor)
// Estos deben coincidir con los del script.js principal
const oportunidadesData = [
  {
    "id": 1,
    "titulo": "Olimpiada Chilena de Informática (OCI)",
    "tipo": "Competencia técnica",
    "descripcion": "Competencia nacional de programación algorítmica; clasifica a instancias internacionales.",
    "nivelEducativo": "Básica y Media",
    "requisitos": "Estar en enseñanza básica (desde 7°) o media. Conocimientos básicos de programación (Python, C++, Java)",
    "postulacionInicio": "Abril",
    "postulacionFin": "Mayo",
    "realizacion": "Etapas entre junio y octubre (final nacional: octubre)",
    "imagenes": ["Imagenes/1.1.jpeg", "Imagenes/1.2.jpeg"]
  },
  {
    "id": 2,
    "titulo": "FIRST LEGO League Chile",
    "tipo": "Competencia de innovación y robótica",
    "descripcion": "Equipos desarrollan un robot y un proyecto de innovación científica.",
    "nivelEducativo": "Básica y Media",
    "requisitos": "Equipos de 2 a 10 estudiantes. Acompañamiento de un coach adulto",
    "postulacionInicio": "Junio",
    "postulacionFin": "Agosto",
    "realizacion": "Torneos regionales: octubre. Final nacional: noviembre",
    "imagenes": ["Imagenes/2.1.jpeg"]
  },
  {
    "id": 3,
    "titulo": "Feria Nacional Juvenil de Ciencia y Tecnología (Explora)",
    "tipo": "Congreso / feria científica",
    "descripcion": "Presentación de proyectos de investigación escolar.",
    "nivelEducativo": "Básica y Media",
    "requisitos": "Proyecto científico desarrollado con asesor docente. Estudiantes de básica y media",
    "postulacionInicio": "Mayo",
    "postulacionFin": "Junio",
    "realizacion": "Ferias regionales: agosto. Feria nacional: noviembre",
    "imagenes": ["Imagenes/3.1.jpeg", "Imagenes/3.2.jpeg"]
  },
  {
    "id": 4,
    "titulo": "Technovation Girls (Chile)",
    "tipo": "Competencia de tecnología y emprendimiento",
    "descripcion": "Desarrollo de una app + pitch para resolver un problema social.",
    "nivelEducativo": "Media",
    "requisitos": "Mujeres entre 13 y 18 años. Equipos de 2-5 integrantes",
    "postulacionInicio": "Octubre",
    "postulacionFin": "Diciembre",
    "realizacion": "Programa: enero – abril. Pitch regional/global: mayo",
    "imagenes": ["Imagenes/4.1.jpeg", "Imagenes/4.2.jpeg"]
  },
  {
    "id": 5,
    "titulo": "Congreso Escolar de Ciencias (CONESC)",
    "tipo": "Congreso académico escolar",
    "descripcion": "Estudiantes presentan investigaciones en formato ponencia o póster.",
    "nivelEducativo": "Media",
    "requisitos": "Trabajo de investigación guiado. Estudiantes de enseñanza media",
    "postulacionInicio": "Julio",
    "postulacionFin": "Agosto",
    "realizacion": "Congreso: octubre",
    "imagenes": ["Imagenes/5.1.jpeg"]
  },
  {
    "id": 6,
    "titulo": "Olimpiada Nacional de Robótica (WRO Chile)",
    "tipo": "Competencia técnica",
    "descripcion": "Desafíos de robótica autónoma con misiones anuales.",
    "nivelEducativo": "Básica y Media",
    "requisitos": "Equipos escolares. Categorías por edad",
    "postulacionInicio": "Mayo",
    "postulacionFin": "Julio",
    "realizacion": "Torneos: septiembre. Final nacional: octubre",
    "imagenes": ["Imagenes/6.1.jpeg", "Imagenes/6.2.jpeg"]
  },
  {
    "id": 7,
    "titulo": "Desafío Solve for Tomorrow (Samsung)",
    "tipo": "Innovación + emprendimiento escolar",
    "descripcion": "Soluciones tecnológicas a problemas sociales reales.",
    "nivelEducativo": "Media",
    "requisitos": "Equipos de enseñanza media. Idea con base STEM",
    "postulacionInicio": "Abril",
    "postulacionFin": "Junio",
    "realizacion": "Mentorías: julio – septiembre. Final nacional: octubre",
    "imagenes": ["Imagenes/7.1.jpeg"]
  },
  {
    "id": 8,
    "titulo": "Torneo Delibera (Congreso Nacional)",
    "tipo": "Liderazgo y políticas públicas",
    "descripcion": "Equipos redactan y defienden un proyecto de ley juvenil.",
    "nivelEducativo": "Media",
    "requisitos": "Enseñanza media. Equipo + profesor guía",
    "postulacionInicio": "Abril",
    "postulacionFin": "Mayo",
    "realizacion": "Regionales: agosto. Final nacional: octubre",
    "imagenes": ["Imagenes/8.1.jpeg", "Imagenes/8.2.jpeg"]
  },
  {
    "id": 9,
    "titulo": "Bootcamp de Programación Escolar (Talento Digital Escolar)",
    "tipo": "Taller intensivo técnico",
    "descripcion": "Formación práctica en programación y pensamiento computacional.",
    "nivelEducativo": "Media",
    "requisitos": "Enseñanza media. Interés en tecnología (no siempre requiere experiencia previa)",
    "postulacionInicio": "Marzo",
    "postulacionFin": "Mayo",
    "realizacion": "Vacaciones de invierno o verano (julio / enero)",
    "imagenes": ["Imagenes/9.1.jpeg"]
  },
  {
    "id": 10,
    "titulo": "Encuentro Nacional de Estudiantes Investigadores (ENEI Escolar)",
    "tipo": "Congreso académico",
    "descripcion": "Encuentro nacional para presentar investigaciones escolares.",
    "nivelEducativo": "Media",
    "requisitos": "Investigación en curso o finalizada. Estudiantes de media",
    "postulacionInicio": "Agosto",
    "postulacionFin": "Septiembre",
    "realizacion": "Noviembre",
    "imagenes": ["Imagenes/10.1.jpeg"]
  }
];

// Datos de organizadores (inventados)
const organizadores = {
  1: { nombre: "Carlos Ramírez", inicial: "C", profesion: "Director Técnico", organizacion: "Sociedad Chilena de Ciencias de la Computación", bio: "Carlos es ingeniero en computación con más de 15 años de experiencia en educación STEM. Ha dirigido múltiples competencias de programación y ha preparado a estudiantes para competencias internacionales." },
  2: { nombre: "María González", inicial: "M", profesion: "Coordinadora Nacional", organizacion: "FIRST Chile", bio: "María es educadora con especialización en robótica educativa. Lidera el programa FIRST LEGO League en Chile desde hace 8 años, promoviendo la innovación y el trabajo en equipo entre estudiantes." },
  3: { nombre: "Roberto Silva", inicial: "R", profesion: "Coordinador Ejecutivo", organizacion: "Programa Explora CONICYT", bio: "Roberto es biólogo y educador científico. Ha trabajado por más de 12 años fomentando la investigación escolar y la divulgación científica entre jóvenes chilenos." },
  4: { nombre: "Ana Martínez", inicial: "A", profesion: "Directora Regional", organizacion: "Technovation Girls Chile", bio: "Ana es ingeniera de software y emprendedora social. Fundó el capítulo chileno de Technovation Girls para empoderar a jóvenes mujeres en tecnología y emprendimiento." },
  5: { nombre: "Pedro Vargas", inicial: "P", profesion: "Director Académico", organizacion: "Asociación de Profesores de Ciencias", bio: "Pedro es profesor de física y química con 20 años de experiencia. Coordina congresos escolares que promueven la investigación científica desde la educación media." },
  6: { nombre: "Lucía Fernández", inicial: "L", profesion: "Coordinadora Nacional", organizacion: "World Robot Olympiad Chile", bio: "Lucía es ingeniera electrónica especializada en robótica educativa. Dirige la Olimpiada Nacional de Robótica y prepara equipos para competencias internacionales." },
  7: { nombre: "Diego Torres", inicial: "D", profesion: "Gerente de Educación", organizacion: "Samsung Chile", bio: "Diego es educador y especialista en innovación tecnológica. Lidera programas educativos que conectan tecnología con solución de problemas sociales reales." },
  8: { nombre: "Camila Herrera", inicial: "C", profesion: "Directora Ejecutiva", organizacion: "Biblioteca del Congreso Nacional", bio: "Camila es abogada y educadora cívica. Coordina el Torneo Delibera, promoviendo la participación juvenil en la creación de políticas públicas." },
  9: { nombre: "Fernando López", inicial: "F", profesion: "Coordinador de Programas", organizacion: "Fundación Talento Digital", bio: "Fernando es profesor de informática y especialista en educación digital. Diseña y coordina programas de formación intensiva en programación para estudiantes escolares." },
  10: { nombre: "Valentina Rojas", inicial: "V", profesion: "Coordinadora Nacional", organizacion: "Red de Investigación Escolar", bio: "Valentina es científica y educadora. Promueve la investigación científica escolar y coordina encuentros nacionales que conectan estudiantes investigadores de todo Chile." }
};

// Reseñas inventadas para cada oportunidad
const reseñas = {
  1: [
    { autor: "Javier", inicial: "J", fecha: "Hace 2 semanas", texto: "Excelente experiencia. La competencia fue muy bien organizada y aprendí muchísimo sobre algoritmos. Los problemas eran desafiantes pero alcanzables. ¡Recomendado 100%!", rating: 5 },
    { autor: "Sofía", inicial: "S", fecha: "Hace 1 mes", texto: "Una oportunidad increíble para mejorar mis habilidades de programación. Los organizadores fueron muy amables y el ambiente fue muy positivo. Definitivamente volveré a participar.", rating: 5 },
    { autor: "Matías", inicial: "M", fecha: "Hace 3 semanas", texto: "El evento superó mis expectativas. Pude conocer a muchos estudiantes con intereses similares y aprendí técnicas nuevas de programación competitiva.", rating: 5 },
    { autor: "Isabella", inicial: "I", fecha: "Hace 2 meses", texto: "Participación muy enriquecedora. Los problemas estaban bien diseñados y el formato de competencia fue justo. ¡Gracias por esta experiencia!", rating: 5 },
    { autor: "Tomás", inicial: "T", fecha: "Hace 1 mes", texto: "Excelente organización y ambiente. Los talleres previos fueron muy útiles y los problemas del concurso fueron desafiantes pero accesibles.", rating: 5 },
    { autor: "Catalina", inicial: "C", fecha: "Hace 3 semanas", texto: "Una experiencia inolvidable. Pude aplicar todo lo que había estudiado y conocer a otros estudiantes apasionados por la programación.", rating: 5 }
  ],
  2: [
    { autor: "Diego", inicial: "D", fecha: "Hace 1 semana", texto: "FIRST LEGO League fue una experiencia increíble. Trabajar en equipo para construir el robot y desarrollar el proyecto de innovación fue muy enriquecedor.", rating: 5 },
    { autor: "Constanza", inicial: "C", fecha: "Hace 2 semanas", texto: "El torneo fue muy bien organizado. Aprendí mucho sobre robótica y trabajo en equipo. El ambiente fue muy colaborativo y amigable.", rating: 5 },
    { autor: "Nicolás", inicial: "N", fecha: "Hace 1 mes", texto: "Excelente oportunidad para desarrollar habilidades técnicas y blandas. El proceso de diseño del robot fue desafiante pero muy educativo.", rating: 5 },
    { autor: "Antonia", inicial: "A", fecha: "Hace 3 semanas", texto: "Una experiencia única. Pude aplicar conceptos de STEM de manera práctica y conocer a muchos estudiantes con intereses similares.", rating: 5 },
    { autor: "Benjamín", inicial: "B", fecha: "Hace 2 meses", texto: "El programa FIRST LEGO League es excelente para desarrollar pensamiento crítico y creatividad. Los organizadores fueron muy profesionales.", rating: 5 },
    { autor: "Francisca", inicial: "F", fecha: "Hace 1 semana", texto: "Participar fue una de las mejores decisiones. El trabajo en equipo fue clave y aprendí mucho sobre programación y diseño de robots.", rating: 5 }
  ],
  3: [
    { autor: "Martín", inicial: "M", fecha: "Hace 2 semanas", texto: "La feria Explora fue una experiencia fantástica. Pude presentar mi proyecto de investigación y recibir feedback valioso de otros estudiantes y profesionales.", rating: 5 },
    { autor: "Amanda", inicial: "A", fecha: "Hace 1 mes", texto: "Excelente organización. El ambiente fue muy académico pero también acogedor. Conocer otros proyectos de investigación fue muy inspirador.", rating: 5 },
    { autor: "Sebastián", inicial: "S", fecha: "Hace 3 semanas", texto: "Una oportunidad única para presentar nuestro proyecto científico. Los evaluadores fueron muy constructivos y aprendí mucho sobre comunicación científica.", rating: 5 },
    { autor: "Javiera", inicial: "J", fecha: "Hace 2 meses", texto: "La feria superó mis expectativas. Pude conectar con otros investigadores jóvenes y recibir comentarios que mejoraron significativamente mi proyecto.", rating: 5 },
    { autor: "Ignacio", inicial: "I", fecha: "Hace 1 semana", texto: "Excelente experiencia académica. El formato de presentación fue claro y la organización fue impecable. ¡Muy recomendado!", rating: 5 },
    { autor: "Florencia", inicial: "F", fecha: "Hace 3 semanas", texto: "Una experiencia enriquecedora que me ayudó a mejorar mis habilidades de investigación y presentación. Los organizadores fueron muy amables.", rating: 5 }
  ],
  4: [
    { autor: "Daniela", inicial: "D", fecha: "Hace 2 semanas", texto: "Technovation Girls cambió mi vida. Aprendí a desarrollar una app desde cero y hacer un pitch profesional. El programa es muy completo y los mentores son increíbles.", rating: 5 },
    { autor: "Paula", inicial: "P", fecha: "Hace 1 mes", texto: "Excelente programa para mujeres en tecnología. El proceso de desarrollo de la app fue desafiante pero muy educativo. El pitch final fue una experiencia única.", rating: 5 },
    { autor: "María", inicial: "M", fecha: "Hace 3 semanas", texto: "Una oportunidad increíble para aprender emprendimiento tecnológico. El apoyo de los mentores fue excepcional y conocí a muchas chicas talentosas.", rating: 5 },
    { autor: "Carolina", inicial: "C", fecha: "Hace 2 meses", texto: "Technovation Girls me ayudó a desarrollar habilidades técnicas y de emprendimiento. El programa está muy bien estructurado y es muy inspirador.", rating: 5 },
    { autor: "Gabriela", inicial: "G", fecha: "Hace 1 semana", texto: "Excelente experiencia. Pude crear una solución real para un problema social y aprender sobre desarrollo de apps y emprendimiento.", rating: 5 },
    { autor: "Andrea", inicial: "A", fecha: "Hace 3 semanas", texto: "El programa es increíble. Aprendí mucho sobre tecnología y emprendimiento, y conocí a un grupo maravilloso de chicas apasionadas por la innovación.", rating: 5 }
  ],
  5: [
    { autor: "Rodrigo", inicial: "R", fecha: "Hace 2 semanas", texto: "El congreso CONESC fue una experiencia académica muy valiosa. Pude presentar mi investigación y recibir feedback de expertos. La organización fue excelente.", rating: 5 },
    { autor: "Carolina", inicial: "C", fecha: "Hace 1 mes", texto: "Excelente oportunidad para compartir investigaciones escolares. El ambiente fue muy académico y aprendí mucho de las presentaciones de otros estudiantes.", rating: 5 },
    { autor: "Felipe", inicial: "F", fecha: "Hace 3 semanas", texto: "Una experiencia enriquecedora. Pude mejorar mi investigación con los comentarios recibidos y conocer otros trabajos interesantes.", rating: 5 },
    { autor: "Paz", inicial: "P", fecha: "Hace 2 meses", texto: "El congreso fue muy bien organizado. Los evaluadores fueron muy constructivos y el ambiente fue muy profesional pero acogedor.", rating: 5 },
    { autor: "Gonzalo", inicial: "G", fecha: "Hace 1 semana", texto: "Excelente oportunidad académica. Pude desarrollar mis habilidades de investigación y presentación. Muy recomendado para estudiantes interesados en ciencias.", rating: 5 },
    { autor: "Trinidad", inicial: "T", fecha: "Hace 3 semanas", texto: "Una experiencia única que me ayudó a crecer como investigadora. El feedback fue muy valioso y conocí a otros estudiantes con intereses similares.", rating: 5 }
  ],
  6: [
    { autor: "Andrés", inicial: "A", fecha: "Hace 2 semanas", texto: "La Olimpiada de Robótica fue excelente. Los desafíos fueron muy interesantes y aprendí mucho sobre programación de robots autónomos.", rating: 5 },
    { autor: "Camila", inicial: "C", fecha: "Hace 1 mes", texto: "Una experiencia increíble. El trabajo en equipo fue clave y los desafíos fueron muy desafiantes pero alcanzables. Los organizadores fueron muy profesionales.", rating: 5 },
    { autor: "Maximiliano", inicial: "M", fecha: "Hace 3 semanas", texto: "Excelente competencia. Pude aplicar conocimientos de programación y mecánica de manera práctica. El ambiente fue muy colaborativo.", rating: 5 },
    { autor: "Bárbara", inicial: "B", fecha: "Hace 2 meses", texto: "La olimpiada superó mis expectativas. Los desafíos estaban bien diseñados y aprendí mucho sobre robótica competitiva.", rating: 5 },
    { autor: "Cristóbal", inicial: "C", fecha: "Hace 1 semana", texto: "Una oportunidad única para desarrollar habilidades en robótica. El formato de competencia fue justo y los organizadores fueron muy amables.", rating: 5 },
    { autor: "Daniela", inicial: "D", fecha: "Hace 3 semanas", texto: "Excelente experiencia. Pude trabajar en equipo y resolver desafíos complejos de robótica. Muy recomendado para estudiantes interesados en tecnología.", rating: 5 }
  ],
  7: [
    { autor: "Eduardo", inicial: "E", fecha: "Hace 2 semanas", texto: "Solve for Tomorrow fue una experiencia transformadora. Pude desarrollar una solución tecnológica para un problema real de mi comunidad. Los mentores fueron increíbles.", rating: 5 },
    { autor: "Natalia", inicial: "N", fecha: "Hace 1 mes", texto: "Excelente programa que combina tecnología con impacto social. El proceso de desarrollo de la solución fue muy educativo y el pitch final fue una gran experiencia.", rating: 5 },
    { autor: "Ricardo", inicial: "R", fecha: "Hace 3 semanas", texto: "Una oportunidad única para crear soluciones con impacto real. El apoyo de Samsung fue excepcional y aprendí mucho sobre innovación social.", rating: 5 },
    { autor: "Fernanda", inicial: "F", fecha: "Hace 2 meses", texto: "El desafío me ayudó a desarrollar habilidades técnicas y de emprendimiento social. Los mentores fueron muy profesionales y el ambiente fue muy colaborativo.", rating: 5 },
    { autor: "Alejandro", inicial: "A", fecha: "Hace 1 semana", texto: "Excelente programa. Pude aplicar tecnología para resolver un problema social real y aprender sobre emprendimiento e innovación.", rating: 5 },
    { autor: "Macarena", inicial: "M", fecha: "Hace 3 semanas", texto: "Una experiencia increíble que me enseñó a pensar en soluciones tecnológicas con impacto social. El programa está muy bien estructurado.", rating: 5 }
  ],
  8: [
    { autor: "Joaquín", inicial: "J", fecha: "Hace 2 semanas", texto: "El Torneo Delibera fue una experiencia única. Pude aprender sobre el proceso legislativo y trabajar en un proyecto de ley real. Muy enriquecedor.", rating: 5 },
    { autor: "Francisca", inicial: "F", fecha: "Hace 1 mes", texto: "Excelente oportunidad para entender cómo funcionan las políticas públicas. El proceso de creación del proyecto de ley fue muy educativo.", rating: 5 },
    { autor: "Vicente", inicial: "V", fecha: "Hace 3 semanas", texto: "Una experiencia increíble que me enseñó sobre participación ciudadana y legislación. Los organizadores fueron muy profesionales y el ambiente fue muy académico.", rating: 5 },
    { autor: "Constanza", inicial: "C", fecha: "Hace 2 meses", texto: "El torneo fue muy bien organizado. Pude desarrollar habilidades de argumentación y conocer el proceso legislativo desde dentro.", rating: 5 },
    { autor: "Martín", inicial: "M", fecha: "Hace 1 semana", texto: "Excelente experiencia cívica. Aprendí mucho sobre política y legislación, y pude trabajar en equipo para crear una propuesta de ley.", rating: 5 },
    { autor: "Antonia", inicial: "A", fecha: "Hace 3 semanas", texto: "Una oportunidad única para participar en la creación de políticas públicas. El proceso fue muy educativo y los organizadores fueron muy amables.", rating: 5 }
  ],
  9: [
    { autor: "Lucas", inicial: "L", fecha: "Hace 2 semanas", texto: "El bootcamp fue increíble. Aprendí a programar desde cero y el formato intensivo fue perfecto para concentrarme. Los instructores fueron muy pacientes y claros.", rating: 5 },
    { autor: "Valentina", inicial: "V", fecha: "Hace 1 mes", texto: "Excelente programa de formación. Pude desarrollar habilidades de programación de manera práctica y el ambiente fue muy colaborativo.", rating: 5 },
    { autor: "Matías", inicial: "M", fecha: "Hace 3 semanas", texto: "Una experiencia muy enriquecedora. Aprendí mucho sobre programación y pensamiento computacional. El formato del bootcamp es ideal para aprender rápido.", rating: 5 },
    { autor: "Isidora", inicial: "I", fecha: "Hace 2 meses", texto: "El bootcamp superó mis expectativas. Los proyectos prácticos fueron muy útiles y pude desarrollar habilidades que ahora uso en mi vida diaria.", rating: 5 },
    { autor: "Sebastián", inicial: "S", fecha: "Hace 1 semana", texto: "Excelente oportunidad para aprender programación. El formato intensivo fue perfecto y los instructores fueron muy profesionales.", rating: 5 },
    { autor: "Javiera", inicial: "J", fecha: "Hace 3 semanas", texto: "Una experiencia única que me introdujo al mundo de la programación. El bootcamp está muy bien estructurado y es perfecto para principiantes.", rating: 5 }
  ],
  10: [
    { autor: "Diego", inicial: "D", fecha: "Hace 2 semanas", texto: "El ENEI Escolar fue una experiencia académica excelente. Pude presentar mi investigación y conocer trabajos increíbles de otros estudiantes de todo Chile.", rating: 5 },
    { autor: "Catalina", inicial: "C", fecha: "Hace 1 mes", texto: "Una oportunidad única para compartir investigaciones escolares a nivel nacional. El ambiente fue muy académico y aprendí mucho de las presentaciones.", rating: 5 },
    { autor: "Nicolás", inicial: "N", fecha: "Hace 3 semanas", texto: "Excelente encuentro académico. Pude mejorar mi investigación con el feedback recibido y conocer a otros estudiantes investigadores apasionados.", rating: 5 },
    { autor: "Antonia", inicial: "A", fecha: "Hace 2 meses", texto: "El encuentro fue muy bien organizado. Los evaluadores fueron muy constructivos y el ambiente fue muy profesional pero acogedor.", rating: 5 },
    { autor: "Benjamín", inicial: "B", fecha: "Hace 1 semana", texto: "Una experiencia enriquecedora que me ayudó a crecer como investigador. Pude conectar con otros estudiantes y recibir comentarios valiosos.", rating: 5 },
    { autor: "Francisca", inicial: "F", fecha: "Hace 3 semanas", texto: "Excelente oportunidad académica. El formato del encuentro fue perfecto y conocí a muchos estudiantes con intereses similares a los míos.", rating: 5 }
  ]
};

// Variables globales
let oportunidadActual = null;

// Obtener ID de la URL
function obtenerIdOportunidad() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id')) || 1;
}

// Cargar datos de la oportunidad
async function cargarOportunidad() {
    const id = obtenerIdOportunidad();
    
    try {
        const response = await fetch('oportunidades.json');
        const oportunidades = await response.json();
        oportunidadActual = oportunidades.find(op => op.id === id);
    } catch (error) {
        // Si falla, usar datos embebidos
        oportunidadActual = oportunidadesData.find(op => op.id === id);
    }
    
    if (!oportunidadActual) {
        oportunidadActual = oportunidadesData[0];
    }
    
    renderizarOportunidad();
}

// Renderizar toda la información de la oportunidad
function renderizarOportunidad() {
    renderizarHeader();
    renderizarGaleria();
    renderizarInformacion();
    renderizarFormulario();
    renderizarOrganizador();
    renderizarReseñas();
}

// Renderizar header
function renderizarHeader() {
    document.getElementById('opportunityTitle').textContent = oportunidadActual.titulo;
    document.getElementById('opportunityMeta').textContent = `${oportunidadActual.tipo} · ${oportunidadActual.nivelEducativo}`;
    document.getElementById('eventTitle').textContent = oportunidadActual.titulo;
    
    // Badges
    const badgesContainer = document.getElementById('eventBadges');
    badgesContainer.innerHTML = `
        <div class="event-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
            </svg>
            ${oportunidadActual.tipo}
        </div>
    `;
}

// Renderizar galería de imágenes
function renderizarGaleria() {
    const gallery = document.getElementById('imageGallery');
    const imagenes = oportunidadActual.imagenes || (oportunidadActual.imagen ? [oportunidadActual.imagen] : []);
    const numImagenes = imagenes.length;
    
    // Remover clases existentes
    gallery.className = 'image-gallery';
    
    // Agregar clase según cantidad de imágenes
    if (numImagenes === 1) {
        gallery.classList.add('single-image');
    } else if (numImagenes === 2) {
        gallery.classList.add('two-images');
    } else if (numImagenes === 3) {
        gallery.classList.add('three-images');
    } else if (numImagenes === 4) {
        gallery.classList.add('four-images');
    } else if (numImagenes >= 5) {
        gallery.classList.add('five-images');
    }
    
    gallery.innerHTML = imagenes.map((img, index) => `
        <div class="gallery-image">
            <img src="${img}" alt="${oportunidadActual.titulo} - Imagen ${index + 1}" 
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23f7f7f7%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-family=%22Arial%22 font-size=%2218%22 fill=%22%23717171%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${encodeURIComponent(oportunidadActual.titulo)}%3C/text%3E%3C/svg%3E'">
        </div>
    `).join('');
}

// Renderizar información principal
function renderizarInformacion() {
    const infoContent = document.getElementById('infoContent');
    infoContent.innerHTML = `
        <p>${oportunidadActual.descripcion}</p>
        <p><strong>Realización:</strong> ${oportunidadActual.realizacion}</p>
    `;
    
    // Características
    const featuresSection = document.getElementById('featuresSection');
    featuresSection.innerHTML = `
        <div class="feature-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <h4>Postulación</h4>
            <p>${oportunidadActual.postulacionInicio} - ${oportunidadActual.postulacionFin}</p>
        </div>
        <div class="feature-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z"/>
            </svg>
            <h4>Nivel</h4>
            <p>${oportunidadActual.nivelEducativo}</p>
        </div>
        <div class="feature-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <h4>Tipo</h4>
            <p>${oportunidadActual.tipo}</p>
        </div>
    `;
    
    // Descripción
    document.getElementById('descriptionText').innerHTML = `<p>${oportunidadActual.descripcion}</p>`;
    
    // Requisitos
    document.getElementById('requirementsText').innerHTML = `<p>${oportunidadActual.requisitos}</p>`;
}

// Renderizar formulario de postulación
function renderizarFormulario() {
    const priceInfo = document.getElementById('priceInfo');
    priceInfo.innerHTML = `
        <div class="price-amount">Gratuito</div>
        <div class="price-label">Postulación sin costo</div>
    `;
    
    document.getElementById('postulationStart').value = oportunidadActual.postulacionInicio;
    document.getElementById('postulationEnd').value = oportunidadActual.postulacionFin;
    document.getElementById('educationLevel').value = oportunidadActual.nivelEducativo;
    document.getElementById('realizationDate').value = oportunidadActual.realizacion;
    
    // Manejar submit del formulario
    document.getElementById('applicationForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Postulación enviada! Te contactaremos pronto con más información.');
    });
}

// Renderizar información del organizador
function renderizarOrganizador() {
    const organizador = organizadores[oportunidadActual.id] || organizadores[1];
    const organizerCard = document.getElementById('organizerCard');
    
    organizerCard.innerHTML = `
        <div class="organizer-avatar">${organizador.inicial}</div>
        <div class="organizer-info">
            <div class="organizer-name">${organizador.nombre}</div>
            <div class="organizer-badge">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                Organizador destacado
            </div>
            <div class="organizer-stats">
                <div class="organizer-stat">
                    <div class="organizer-stat-value">${Math.floor(Math.random() * 200) + 50}</div>
                    <div class="organizer-stat-label">Eventos organizados</div>
                </div>
                <div class="organizer-stat">
                    <div class="organizer-stat-value">4.9★</div>
                    <div class="organizer-stat-label">Calificación</div>
                </div>
                <div class="organizer-stat">
                    <div class="organizer-stat-value">${Math.floor(Math.random() * 5) + 3}</div>
                    <div class="organizer-stat-label">Años organizando</div>
                </div>
            </div>
            <div class="organizer-details">
                <div class="organizer-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>${organizador.organizacion}</span>
                </div>
                <div class="organizer-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <span>${organizador.profesion}</span>
                </div>
            </div>
            <div class="organizer-bio">
                <p>${organizador.bio}</p>
            </div>
            <button class="message-organizer-button">Contactar al organizador</button>
        </div>
    `;
}

// Renderizar reseñas
function renderizarReseñas() {
    const opiniones = reseñas[oportunidadActual.id] || reseñas[1];
    const totalReseñas = opiniones.length;
    const promedio = (opiniones.reduce((sum, r) => sum + r.rating, 0) / totalReseñas).toFixed(2);
    
    // Resumen
    const reviewsSummary = document.getElementById('reviewsSummary');
    reviewsSummary.innerHTML = `
        <div class="rating">
            <span>${promedio}</span>
            <svg class="star" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
        </div>
        <span>(${totalReseñas} opiniones)</span>
    `;
    
    // Grid de reseñas (mostrar primeras 6)
    const reviewsGrid = document.getElementById('reviewsGrid');
    const reseñasAMostrar = opiniones.slice(0, 6);
    
    reviewsGrid.innerHTML = reseñasAMostrar.map(reseña => `
        <div class="review-card">
            <div class="review-header">
                <div class="review-avatar">${reseña.inicial}</div>
                <div class="review-author-info">
                    <div class="review-author-name">${reseña.autor}</div>
                    <div class="review-author-meta">Estudiante participante</div>
                </div>
            </div>
            <div class="review-rating">
                ${Array(reseña.rating).fill(0).map(() => `
                    <svg class="star" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                `).join('')}
            </div>
            <div class="review-date">${reseña.fecha}</div>
            <div class="review-text">${reseña.texto}</div>
        </div>
    `).join('');
    
    // Botón para mostrar todas
    if (totalReseñas > 6) {
        document.getElementById('showAllReviews').style.display = 'block';
        document.getElementById('showAllReviews').textContent = `Mostrar las ${totalReseñas} opiniones`;
    } else {
        document.getElementById('showAllReviews').style.display = 'none';
    }
}

// Datos del estudiante ficticio (igual que en script.js)
const estudianteDatos = {
    nombre: "Martín González",
    colegio: "Instituto Nacional",
    curso: "4° Medio",
    eventosParticipados: 12,
    ranking: {
        posicion: 3,
        total: 42
    },
    habilidadesFuertes: [
        { nombre: "Habilidades Técnicas", valor: 4.7 },
        { nombre: "Programación", valor: 4.5 },
        { nombre: "Robótica", valor: 4.3 }
    ],
    habilidadesMejorar: [
        { nombre: "Investigación Científica", valor: 2.8 },
        { nombre: "Emprendimiento", valor: 3.1 },
        { nombre: "Liderazgo", valor: 3.4 }
    ],
    objetivoCarrera: "Ingeniería en Informática",
    objetivoDescripcion: "Mi objetivo es estudiar Ingeniería en Informática para desarrollar software que impacte positivamente en la sociedad.",
    objetivoHint: "Para cumplir este objetivo, necesito fortalecer mis habilidades de investigación científica y emprendimiento."
};

// Inicializar menú del estudiante
function inicializarMenuEstudiante() {
    const menuButton = document.getElementById('menuButton');
    if (!menuButton) return;
    
    const menuOverlay = document.getElementById('studentMenuOverlay');
    const closeButton = document.getElementById('closeStudentMenu');
    const studentInfo = document.getElementById('studentInfo');

    if (!menuOverlay || !studentInfo) return;

    // Renderizar información del estudiante
    renderizarInfoEstudiante(studentInfo);

    // Abrir menú
    menuButton.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Cerrar menú
    closeButton.addEventListener('click', cerrarMenuEstudiante);
    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            cerrarMenuEstudiante();
        }
    });
}

function cerrarMenuEstudiante() {
    const menuOverlay = document.getElementById('studentMenuOverlay');
    if (menuOverlay) {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function renderizarInfoEstudiante(container) {
    const estudiante = estudianteDatos;
    
    container.innerHTML = `
        <div class="student-profile-header">
            <h1 class="student-name">${estudiante.nombre}</h1>
            <div class="student-school">${estudiante.colegio} · ${estudiante.curso}</div>
        </div>

        <div class="student-stats">
            <div class="student-stat">
                <div class="student-stat-value">${estudiante.eventosParticipados}</div>
                <div class="student-stat-label">Eventos participados</div>
            </div>
            <div class="student-stat">
                <div class="student-stat-value">${estudiante.ranking.posicion}°</div>
                <div class="student-stat-label">de ${estudiante.ranking.total} estudiantes</div>
            </div>
        </div>

        <div class="student-ranking">
            <div class="student-ranking-icon">🏆</div>
            <div class="student-ranking-info">
                <div class="student-ranking-position">Top ${estudiante.ranking.posicion}</div>
                <div class="student-ranking-text">En tu curso</div>
            </div>
        </div>

        <div class="student-section">
            <h3 class="student-section-title">Mis Fortalezas</h3>
            <div class="skills-list">
                ${estudiante.habilidadesFuertes.map(habilidad => `
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">${habilidad.nombre}</span>
                            <span class="skill-value">${habilidad.valor.toFixed(1)}/5.0</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-bar-fill" style="width: ${(habilidad.valor / 5) * 100}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="student-section">
            <h3 class="student-section-title">Habilidades a Mejorar</h3>
            <div class="skills-list">
                ${estudiante.habilidadesMejorar.map(habilidad => `
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">${habilidad.nombre}</span>
                            <span class="skill-value">${habilidad.valor.toFixed(1)}/5.0</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-bar-fill improve" style="width: ${(habilidad.valor / 5) * 100}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="student-goal">
            <div class="student-goal-title">🎯 Mi Objetivo</div>
            <div class="student-goal-text">${estudiante.objetivoCarrera}</div>
            <div class="student-goal-text" style="margin-top: 8px;">${estudiante.objetivoDescripcion}</div>
            <div class="student-goal-hint">💡 ${estudiante.objetivoHint}</div>
        </div>
    `;
}

// Funciones para el modal de idiomas
function abrirModalIdiomas() {
    const overlay = document.getElementById('languageModalOverlay');
    if (overlay) {
        overlay.classList.add('active');
    }
}

function closeLanguageModal() {
    const overlay = document.getElementById('languageModalOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
}

function inicializarModalIdiomas() {
    const languageButton = document.getElementById('languageButton');
    const overlay = document.getElementById('languageModalOverlay');
    
    if (languageButton && overlay) {
        languageButton.addEventListener('click', () => {
            abrirModalIdiomas();
        });

        // Cerrar al hacer click fuera
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeLanguageModal();
            }
        });

        // Manejar selección de idioma (solo visual, no funcional)
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', function() {
                // Remover active de todos
                document.querySelectorAll('.language-option').forEach(opt => {
                    opt.classList.remove('active');
                    opt.querySelector('.language-check').style.display = 'none';
                });
                
                // Agregar active al seleccionado
                this.classList.add('active');
                this.querySelector('.language-check').style.display = 'block';
            });
        });
    }
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    cargarOportunidad();
    inicializarMenuEstudiante();
    inicializarModalIdiomas();
});

