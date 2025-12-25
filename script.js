// Datos de oportunidades (incluidos directamente para funcionar sin servidor)
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

// Estado de la aplicación
let todasLasOportunidades = []; // Todas las oportunidades sin filtrar
let oportunidades = []; // Oportunidades no recomendadas (sin filtrar)
let oportunidadesRecomendadas = []; // Oportunidades recomendadas (sin filtrar)
let filtros = {
    tipo: 'all',
    fecha: 'all',
    nivel: 'all'
};

// IDs de oportunidades recomendadas (seleccionadas estratégicamente)
const IDs_RECOMENDADAS = [1, 7, 9, 2]; // OCI, Solve for Tomorrow, Bootcamp, FIRST LEGO League

// Cargar oportunidades
function cargarOportunidades() {
    // Intentar cargar desde JSON (funciona en GitHub Pages)
    fetch('oportunidades.json')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok');
        })
        .then(data => {
            oportunidades = data;
            separarOportunidades(data);
        })
        .catch(() => {
            // Si falla (p.ej. en file://), usar datos embebidos
            oportunidades = oportunidadesData;
            separarOportunidades(oportunidadesData);
        });
}

// Separar oportunidades recomendadas del resto
function separarOportunidades(listaCompleta) {
    todasLasOportunidades = listaCompleta;
    oportunidadesRecomendadas = listaCompleta.filter(op => IDs_RECOMENDADAS.includes(op.id));
    oportunidades = listaCompleta.filter(op => !IDs_RECOMENDADAS.includes(op.id));
    
    // Asegurarse de que la sección de recomendadas esté visible
    const sectionRecomendadas = document.querySelector('.recommended-section');
    if (sectionRecomendadas) {
        sectionRecomendadas.style.display = 'block';
    }
    
    mostrarOportunidadesRecomendadas(oportunidadesRecomendadas);
    mostrarOportunidades(oportunidades);
}

// Generar HTML de una card de oportunidad
function generarCardOportunidad(oportunidad) {
    return `
        <a href="oportunidad.html?id=${oportunidad.id}" class="opportunity-card">
            <div class="opportunity-image-container">
                <img src="${oportunidad.imagenes ? oportunidad.imagenes[0] : oportunidad.imagen}" alt="${oportunidad.titulo}" class="opportunity-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23f7f7f7%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-family=%22Arial%22 font-size=%2218%22 fill=%22%23717171%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${encodeURIComponent(oportunidad.titulo)}%3C/text%3E%3C/svg%3E'">
                <div class="opportunity-badge">${oportunidad.tipo}</div>
                <button class="opportunity-favorite" onclick="event.preventDefault(); toggleFavorite(${oportunidad.id})" aria-label="Guardar en favoritos">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 28c7-4.733 14-10 14-17a6.978 6.978 0 0 0-2-5 6.978 6.978 0 0 0-5-2c-2.02 0-3.847.8-5.127 2.087L16 8.333l-1.873-2.246A7.06 7.06 0 0 0 9 4c-1.973 0-3.847.8-5 2a6.978 6.978 0 0 0-2 5c0 7 7 12.267 14 17z" fill="none" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </button>
            </div>
            <div class="opportunity-info">
                <div class="opportunity-type">${oportunidad.tipo}</div>
                <h3 class="opportunity-title">${oportunidad.titulo}</h3>
                <p class="opportunity-description">${oportunidad.descripcion}</p>
                <div class="opportunity-details">
                    <div class="opportunity-dates">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="flex-shrink: 0;">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>
                        <span class="opportunity-postulation">Postulación: ${oportunidad.postulacionInicio} - ${oportunidad.postulacionFin}</span>
                    </div>
                </div>
            </div>
        </a>
    `;
}

// Mostrar oportunidades recomendadas
function mostrarOportunidadesRecomendadas(listaOportunidades) {
    const grid = document.getElementById('recommendedGrid');
    const section = document.querySelector('.recommended-section');
    
    if (listaOportunidades.length === 0) {
        if (section) {
            section.style.display = 'none';
        }
        grid.innerHTML = '';
        return;
    }

    if (section) {
        section.style.display = 'block';
    }
    grid.innerHTML = listaOportunidades.map(oportunidad => generarCardOportunidad(oportunidad)).join('');
}

// Mostrar oportunidades en el grid
function mostrarOportunidades(listaOportunidades) {
    const grid = document.getElementById('opportunitiesGrid');
    
    if (listaOportunidades.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #717171; padding: 48px;">No se encontraron oportunidades con los filtros seleccionados.</p>';
        return;
    }

    grid.innerHTML = listaOportunidades.map(oportunidad => generarCardOportunidad(oportunidad)).join('');
}

// Función de filtrado para aplicar a una lista de oportunidades
function aplicarFiltros(listaOportunidades) {
    return listaOportunidades.filter(oportunidad => {
        // Filtro por tipo
        if (filtros.tipo !== 'all' && oportunidad.tipo !== filtros.tipo) {
            return false;
        }

        // Filtro por fecha (mes de inicio de postulación)
        if (filtros.fecha !== 'all') {
            const mesInicio = oportunidad.postulacionInicio;
            if (mesInicio !== filtros.fecha) {
                return false;
            }
        }

        // Filtro por nivel educativo
        if (filtros.nivel !== 'all') {
            if (filtros.nivel === 'Media' && oportunidad.nivelEducativo !== 'Media') {
                return false;
            }
            if (filtros.nivel === 'Básica y Media' && oportunidad.nivelEducativo !== 'Básica y Media') {
                return false;
            }
        }

        return true;
    });
}

// Filtrar oportunidades
function filtrarOportunidades() {
    // Si hay filtros activos, aplicar a todas las oportunidades juntas
    const tieneFiltros = filtros.tipo !== 'all' || filtros.fecha !== 'all' || filtros.nivel !== 'all';
    
    if (tieneFiltros) {
        // Cuando hay filtros, ocultar recomendadas y mostrar todas las filtradas juntas
        const filtradas = aplicarFiltros(todasLasOportunidades);
        
        // Ocultar sección de recomendadas
        const sectionRecomendadas = document.querySelector('.recommended-section');
        if (sectionRecomendadas) {
            sectionRecomendadas.style.display = 'none';
        }
        
        // Mostrar todas las oportunidades filtradas juntas
        mostrarOportunidades(filtradas);
        actualizarTituloSeccion(filtradas.length, true);
    } else {
        // Sin filtros, mostrar recomendadas y luego todas las demás
        const sectionRecomendadas = document.querySelector('.recommended-section');
        if (sectionRecomendadas) {
            sectionRecomendadas.style.display = 'block';
        }
        mostrarOportunidadesRecomendadas(oportunidadesRecomendadas);
        mostrarOportunidades(oportunidades);
        actualizarTituloSeccion(oportunidades.length, false);
    }
    
    actualizarFiltrosActivos();
}

// Actualizar título de la sección
function actualizarTituloSeccion(cantidad, conFiltros = false) {
    const titulo = document.getElementById('sectionTitle');
    if (conFiltros) {
        titulo.textContent = `${cantidad} oportunidad${cantidad !== 1 ? 'es' : ''} encontrada${cantidad !== 1 ? 's' : ''}`;
    } else {
        titulo.textContent = 'Todas las oportunidades';
    }
}

// Actualizar campos de búsqueda
function actualizarCamposBusqueda() {
    const campoTipo = document.querySelector('#searchTipo input');
    const campoFechas = document.querySelector('#searchFechas input');
    const campoNivel = document.querySelector('#searchNivel input');

    campoTipo.value = filtros.tipo === 'all' ? '' : filtros.tipo;
    campoFechas.value = filtros.fecha === 'all' ? '' : `Postulación en ${filtros.fecha}`;
    campoNivel.value = filtros.nivel === 'all' ? '' : filtros.nivel;
}

// Actualizar filtros activos
function actualizarFiltrosActivos() {
    const container = document.getElementById('activeFilters');
    const filtrosActivos = [];

    if (filtros.tipo !== 'all') {
        filtrosActivos.push({ tipo: 'tipo', valor: filtros.tipo, label: filtros.tipo });
    }
    if (filtros.fecha !== 'all') {
        filtrosActivos.push({ tipo: 'fecha', valor: filtros.fecha, label: `Postulación en ${filtros.fecha}` });
    }
    if (filtros.nivel !== 'all') {
        filtrosActivos.push({ tipo: 'nivel', valor: filtros.nivel, label: filtros.nivel });
    }

    if (filtrosActivos.length === 0) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = filtrosActivos.map(filtro => `
        <div class="filter-tag">
            <span>${filtro.label}</span>
            <button onclick="removerFiltro('${filtro.tipo}')" aria-label="Remover filtro">×</button>
        </div>
    `).join('');
}

// Remover filtro
function removerFiltro(tipo) {
    filtros[tipo] = 'all';
    actualizarCamposBusqueda();
    filtrarOportunidades();
}

// Abrir modal
function abrirModal(modalId) {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById(modalId);
    
    // Ocultar otros modales
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    
    overlay.classList.add('active');
    modal.style.display = 'flex';
    
    // Marcar opción activa
    let tipo = modalId.replace('modal', '').toLowerCase();
    if (tipo === 'fechas') {
        tipo = 'fecha';
    }
    const valorActual = filtros[tipo];
    
    modal.querySelectorAll('.filter-option').forEach(option => {
        if (option.dataset.value === valorActual) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Cerrar modal
function closeModal(modalId) {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById(modalId);
    
    overlay.classList.remove('active');
    modal.style.display = 'none';
}

// Seleccionar opción de filtro
function seleccionarFiltro(modalId, valor) {
    let tipo = modalId.replace('modal', '').toLowerCase();
    // Normalizar el nombre del tipo
    if (tipo === 'fechas') {
        tipo = 'fecha';
    }
    filtros[tipo] = valor;
    
    actualizarCamposBusqueda();
    closeModal(modalId);
    filtrarOportunidades();
}

// Toggle favorito
function toggleFavorite(id) {
    // Implementación futura para guardar favoritos
    console.log('Toggle favorite:', id);
}

// Datos del estudiante ficticio
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
    const menuOverlay = document.getElementById('studentMenuOverlay');
    const closeButton = document.getElementById('closeStudentMenu');
    const studentInfo = document.getElementById('studentInfo');

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
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
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

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    cargarOportunidades();

    // Event listeners para campos de búsqueda
    document.getElementById('searchTipo').addEventListener('click', () => abrirModal('modalTipo'));
    document.getElementById('searchFechas').addEventListener('click', () => abrirModal('modalFechas'));
    document.getElementById('searchNivel').addEventListener('click', () => abrirModal('modalNivel'));

    // Event listeners para opciones de filtro (se asignan dinámicamente)
    document.querySelectorAll('.modal').forEach(modal => {
        modal.querySelectorAll('.filter-option').forEach(option => {
            option.addEventListener('click', function() {
                const modalId = this.closest('.modal').id;
                const valor = this.dataset.value;
                seleccionarFiltro(modalId, valor);
            });
        });
    });

    // Cerrar modal al hacer click fuera
    document.getElementById('modalOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
            this.classList.remove('active');
        }
    });

    // Botón de búsqueda
    document.querySelector('.search-button').addEventListener('click', () => {
        filtrarOportunidades();
    });

    // Menú del estudiante
    inicializarMenuEstudiante();

    // Modal de idiomas
    inicializarModalIdiomas();
});

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

