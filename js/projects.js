/**
 * projects.js - Real-world project catalog based on Muhamad Afif's official resume and repositories
 */

const realProjects = [
  {
    id: 'taskflow',
    title: 'TaskFlow — Modern Android Productivity App',
    category: 'mobile',
    tagText: 'Android Native',
    badgeType: 'Kotlin & Compose',
    summary: 'A clean, modern, offline-first task management app built natively for Android using Kotlin, Jetpack Compose (Material 3), Room Database, and MVVM architecture.',
    architecture: {
      platform: 'Android 8.0+ (API 26+)',
      language: 'Kotlin 2.0 (Coroutines Flow)',
      ui: 'Jetpack Compose with Material 3 (Material You Dynamic Colors)',
      architecture: 'MVVM + Unidirectional Data Flow (UDF) with StateFlow',
      database: 'Android Jetpack Room SQLite with Reactive Flows',
      package: 'com.taskflow.app (Includes direct debug APK)'
    },
    deepDive: `TaskFlow is an offline-first Android productivity application designed with Google's modern Android architecture best practices.
    
    Key Features:
    • Declarative Material 3 UI: Edge-to-edge Compose layouts with dynamic theming (Material You), smooth animations, and priority color badges.
    • Priority & Category Filtering: Organize tasks across urgency levels (Low, Medium, High, Urgent) and tags (Work, Personal, Fitness, Study, Finance) with one-tap filtering chips.
    • Reactive SQLite Persistence: Room Database integrated with Kotlin Coroutines Flow, providing instant reactive UI updates and complete offline data privacy.
    • MVVM Architecture: Clean separation of concerns with TaskViewModel, TaskRepository pattern, and unidirectional TaskUiState flow.
    • Search & Task Management: Real-time title and note filtering, collapsible completed lists, and one-tap task completion.`,
    stack: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Room Database', 'Coroutines Flow', 'MVVM', 'Android Studio'],
    githubUrl: 'https://github.com/afifawald',
    liveUrl: 'assets/apps/taskflow-debug.apk',
    hasLogo: 'assets/images/taskflow-icon.png'
  },
  {
    id: 'saigon-drip',
    title: 'The Saigon Drip',
    category: 'games',
    tagText: 'Game Development',
    badgeType: 'Unity & C#',
    summary: 'An interactive indie game developed using Unity Engine and C#, featuring custom gameplay mechanics, player physics, audio design, and stylized visual environments.',
    architecture: {
      engine: 'Unity Engine (2D / 3D)',
      language: 'C# (Object-Oriented Architecture)',
      subsystems: 'Physics engine, input controllers, state machines, sound fx',
      platform: 'PC / Windows'
    },
    deepDive: `Developed as part of specialized Game Development coursework and indie exploration. The Saigon Drip blends atmospheric world-building with responsive player controls and collision systems implemented using C# scripts in Unity.
    
    Key Features:
    • Custom Player Mechanics: Smooth character movement, physics collisions, and dynamic interaction triggers.
    • Game State Management: Start menus, inventory/score tracking, level transitions, and game-over state machines.
    • Asset Integration: Custom sprite rendering, audio effects, and optimized lighting pipeline.`,
    stack: ['Unity', 'C#', 'Game Physics', 'Visual Studio', 'Game Design'],
    githubUrl: 'https://github.com/afifawald',
    liveUrl: '#'
  },
  {
    id: 'siswasahat',
    title: 'SiswaSihat',
    category: 'mobile',
    tagText: 'Mobile Application',
    badgeType: 'React Native',
    summary: 'A cross-platform mobile health and wellness tracking application engineered with React Native, supporting student fitness goals, activity logs, and nutrition reminders.',
    architecture: {
      framework: 'React Native (Cross-Platform iOS & Android)',
      language: 'JavaScript / JSX',
      components: 'Reusable mobile cards, tab navigation, state management',
      target: 'Mobile Devices'
    },
    deepDive: `SiswaSihat was created to promote healthy daily habits among polytechnic and college students. 
    
    Features:
    • Activity & Habit Logging: Daily water intake, study-break step goals, and sleep schedule tracking.
    • Intuitive Mobile UI: Touch-friendly mobile layout with custom tabs, modal sheets, and quick inputs.
    • Offline State Storage: Local device persistence for tracking progress without constant internet access.`,
    stack: ['React Native', 'JavaScript', 'Android Studio', 'Mobile UI/UX', 'Figma'],
    githubUrl: 'https://github.com/afifawald',
    liveUrl: '#'
  },
  {
    id: 'teacher-attendance',
    title: 'Teacher Attendance Tracking System',
    category: 'web',
    tagText: 'Web Application',
    badgeType: 'Management System',
    summary: 'A dedicated web application for monitoring and auditing educator classroom check-ins, scheduled sessions, and attendance reports with automated log exports.',
    architecture: {
      type: 'Administrative Web System',
      stack: 'HTML5, CSS3, JavaScript, Local / Database Persistence',
      features: 'Daily attendance logs, time stamping, filtering by class & date'
    },
    deepDive: `Built to simplify educator presence auditing in academic institutions. Eliminates physical paper sign-in sheets by providing a streamlined web portal for teachers to log session check-ins, record class durations, and export attendance statistics for department heads.`,
    stack: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Data Tables', 'DOM APIs'],
    githubUrl: 'https://github.com/afifawald',
    liveUrl: '#'
  },
  {
    id: 'ezpdf',
    title: 'EZPDF — Complete In-Browser PDF Toolkit',
    category: 'tools',
    tagText: 'Live Web Utility',
    badgeType: 'Production Tool',
    summary: 'A fast, client-side PDF utility suite featuring 18 private tools to merge, split, compress, watermark, sign, encrypt, rotate, and convert PDFs directly inside the browser.',
    architecture: {
      type: 'Client-Side Web Application',
      runtime: 'Zero-Server, 100% In-Browser Processing (Wasm & Native JS)',
      libraries: 'pdf-lib, pdf.js, Sortable.js, JSZip',
      privacy: '100% Private (files never leave device memory)',
      deployment: 'GitHub Pages'
    },
    deepDive: `EZPDF provides a completely free, zero-upload PDF manipulation suite. Standard online PDF editors send sensitive documents to unknown third-party servers; EZPDF eliminates this risk by performing all PDF byte manipulations entirely client-side using WebAssembly and PDF-Lib.
    
    Includes 18 modular tools:
    • Document Organization: Merge PDFs, Split into page ranges, Reorder pages via drag-and-drop (Sortable.js), Rotate, and Delete pages.
    • Security & Privacy: Client-side AES encryption/password protection, permission restrictions, and digital signature stamps.
    • Optimization & Conversion: Image-to-PDF conversion, PDF-to-Image rendering with PDF.js, and multi-file batch downloading via JSZip.`,
    stack: ['JavaScript (ES6+)', 'pdf-lib', 'pdf.js', 'Sortable.js', 'JSZip', 'CSS3'],
    githubUrl: 'https://github.com/afifawald/EZPDF',
    liveUrl: 'https://afifawald.github.io/EZPDF',
    iconSvg: 'assets/icons/ezpdf.svg'
  },
  {
    id: 'jpp-portal',
    title: 'JPP PMKL Student Portal',
    category: 'campus',
    tagText: 'Campus Production',
    badgeType: 'Institutional Hub',
    summary: 'The official institutional portal for Politeknik METrO Kuala Lumpur student body. Centralizes campus circulars, event registrations, student equipment bookings, and photo archives.',
    architecture: {
      type: 'Edge-Rendered Full-Stack Portal',
      runtime: 'Cloudflare Workers (Edge V8 Isolates)',
      storage: 'Cloudflare KV (PORTAL_DATA Namespace)',
      routing: 'Custom edge router with sub-10ms response times',
      liveUrl: 'https://jpppmklstudentportal.dev'
    },
    deepDive: `Built as the unified digital hub for Politeknik METrO Kuala Lumpur (PMKL). Centralizes official circulars, event registrations, student equipment bookings, and student council photo archives into one responsive portal.`,
    stack: ['Cloudflare Workers', 'Cloudflare KV', 'Vanilla JS', 'HTML5 / CSS3', 'REST API'],
    githubUrl: 'https://github.com/afifawald/JPP-PMKL-STUDENT-PORTAL',
    liveUrl: 'https://jpppmklstudentportal.dev',
    hasLogo: 'assets/images/jpp-logo.png'
  },
  {
    id: 'print-jobs-engine',
    title: 'Campus Print-Jobs Queue & Dispatch',
    category: 'campus',
    tagText: 'Campus Service',
    badgeType: 'Queue Microservice',
    summary: 'Automated campus printing dispatch system allowing students to upload assignments, calculate print pricing, and monitor real-time queue status before pickup.',
    architecture: {
      type: 'Asynchronous Job Queue',
      endpoints: '/api/print-jobs, /api/printing',
      features: 'File validation, price estimation, queue state machine',
      storage: 'Cloudflare KV job records'
    },
    deepDive: `Designed to alleviate long printing queues at campus administrative centers. Students upload print files (PDFs/DOCX), select specifications, and receive a tracking ticket while council print managers monitor and dispatch orders.`,
    stack: ['Cloudflare Workers', 'KV Storage', 'Asynchronous JS', 'File APIs'],
    githubUrl: 'https://github.com/afifawald/JPP-PMKL-STUDENT-PORTAL',
    liveUrl: 'https://jpppmklstudentportal.dev'
  },
  {
    id: 'merch-store',
    title: 'Student Council Merchandise Store',
    category: 'web',
    tagText: 'E-Commerce Module',
    badgeType: 'Store Engine',
    summary: 'Lightweight merchandise portal for PMKL student apparel, official council lanyards, and event kits with item stock tracking and receipt verification.',
    architecture: {
      type: 'Serverless Store Engine',
      endpoint: '/api/merch',
      capabilities: 'Item catalog, size variants, DuitNow QR verification, order tracking'
    },
    deepDive: `Powers official merchandise drops for PMKL student council. Features responsive product cards with variant selection, integrated Malaysian DuitNow QR payment slips, and order status retrieval.`,
    stack: ['JavaScript ES6+', 'Cloudflare Workers', 'SVG QRs', 'CSS Grid'],
    githubUrl: 'https://github.com/afifawald/JPP-PMKL-STUDENT-PORTAL',
    liveUrl: 'https://jpppmklstudentportal.dev'
  },
  {
    id: 'event-rsvp-system',
    title: 'Event Management & RSVP Booking',
    category: 'campus',
    tagText: 'Event System',
    badgeType: 'RSVP Engine',
    summary: 'Real-time event RSVP registration system handling seat limits, student ID validation, automated attendance roster generation, and status checks.',
    architecture: {
      type: 'Registration Engine',
      endpoints: '/api/events, /api/event-rsvp',
      validation: 'Student matric number deduplication, capacity cap limits'
    },
    deepDive: `Handles student bookings for academic seminars, esport tournaments, and campus leadership workshops. Automatically closes registration when hall capacity is reached and exports structured attendee data.`,
    stack: ['Cloudflare KV', 'Fetch API', 'JSON Schema', 'REST API'],
    githubUrl: 'https://github.com/afifawald/JPP-PMKL-STUDENT-PORTAL',
    liveUrl: 'https://jpppmklstudentportal.dev'
  },
  {
    id: 'facility-rental',
    title: 'Campus Facility & Equipment Rental Manager',
    category: 'campus',
    tagText: 'Booking System',
    badgeType: 'Resource Booking',
    summary: 'Internal booking system for campus sound equipment, meeting halls, projectors, and sports gear requested by student clubs.',
    architecture: {
      type: 'Resource Reservation System',
      endpoint: '/api/rentals',
      workflow: 'Request -> Committee Review -> Approval / Asset Checkout'
    },
    deepDive: `Replaces paper requisition forms with a clean digital workflow. Student clubs submit rental requests with date intervals and equipment quantities; student council executives review availability and issue checkout passes.`,
    stack: ['REST APIs', 'Cloudflare Workers', 'State Machine', 'Form Validation'],
    githubUrl: 'https://github.com/afifawald/JPP-PMKL-STUDENT-PORTAL',
    liveUrl: 'https://jpppmklstudentportal.dev'
  },
  {
    id: 'cf-edge-gateway',
    title: 'Edge API Gateway & Worker Router',
    category: 'web',
    tagText: 'Backend Architecture',
    badgeType: 'Core Gateway',
    summary: 'High-speed edge routing layer developed on Cloudflare Workers dispatching 10+ decoupled campus microservices with CORS isolation and atomic KV persistence.',
    architecture: {
      type: 'Serverless Edge Router',
      runtime: 'Cloudflare V8 Isolates',
      compatibility: 'Node.js Compat layer, Wrangler configuration',
      performance: 'Sub-15ms edge dispatch worldwide'
    },
    deepDive: `The central routing layer linking front-end interfaces to edge data. Eliminates traditional server maintenance, handles peak traffic spikes, and provides instant edge response with zero cold starts.`,
    stack: ['Cloudflare Workers', 'Wrangler CLI', 'Node.js Compat', 'CORS Security'],
    githubUrl: 'https://github.com/afifawald/JPP-PMKL-STUDENT-PORTAL',
    liveUrl: 'https://jpppmklstudentportal.dev'
  }
];

function initProjectGallery() {
  const container = document.getElementById('projectCardsGrid');
  const tabs = document.querySelectorAll('.filter-tab');
  const searchInput = document.getElementById('projectSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');

  if (!container) return;

  let currentCategory = 'all';
  let currentSearchQuery = '';

  function render() {
    container.innerHTML = '';
    
    const q = currentSearchQuery.trim().toLowerCase();

    const filtered = realProjects.filter(project => {
      // 1. Category match
      const matchesCategory = currentCategory === 'all' || project.category === currentCategory;
      if (!matchesCategory) return false;

      // 2. Search query match
      if (!q) return true;
      const titleMatch = project.title.toLowerCase().includes(q);
      const summaryMatch = project.summary.toLowerCase().includes(q);
      const stackMatch = project.stack.some(s => s.toLowerCase().includes(q));
      const tagMatch = project.tagText.toLowerCase().includes(q);
      const badgeMatch = project.badgeType.toLowerCase().includes(q);
      return titleMatch || summaryMatch || stackMatch || tagMatch || badgeMatch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; background: var(--bg-surface); border: 1px dashed var(--border-subtle); border-radius: var(--radius-md);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
          <h3 style="font-size: 1.15rem; margin-bottom: 0.35rem;">No matching projects found</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">No results found for "${currentSearchQuery}". Try clearing your search.</p>
          <button class="btn-ghost" onclick="resetProjectFilters()">Reset Filters & Search</button>
        </div>
      `;
      return;
    }

    filtered.forEach(project => {
      const card = document.createElement('article');
      card.className = 'craft-project-card spotlight-hover';
      
      const liveLinkMarkup = project.liveUrl && project.liveUrl !== '#'
        ? (project.liveUrl.endsWith('.apk')
            ? `<a href="${project.liveUrl}" download="TaskFlow-debug.apk" class="action-link" title="Download Android APK">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                 <span>Download APK</span>
               </a>`
            : `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="action-link" title="Open Live Site">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                 <span>Live Site</span>
               </a>`)
        : '';

      const iconPreview = project.iconSvg 
        ? `<img src="${project.iconSvg}" alt="${project.title} icon" style="width: 28px; height: 28px; border-radius: 6px; vertical-align: middle; margin-right: 6px;">`
        : (project.hasLogo 
            ? `<img src="${project.hasLogo}" alt="Logo" style="width: 26px; height: 26px; border-radius: 4px; vertical-align: middle; margin-right: 6px; background: rgba(255,255,255,0.05); padding: 2px;">`
            : '');

      card.innerHTML = `
        <div>
          <div class="brutal-card-header" style="margin-bottom: 1rem;">
            <div class="window-dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <span class="window-title-text mono">${project.id.toUpperCase()}.APP</span>
            <span class="window-badge mono">${project.badgeType}</span>
          </div>
          <div class="card-top-row">
            <span class="card-category-indicator">${project.tagText}</span>
          </div>
          <h3 class="card-title">
            ${iconPreview}
            <span>${project.title}</span>
          </h3>
          <p class="card-summary">${project.summary}</p>
          <div class="card-tech-chips">
            ${project.stack.map(s => `<span class="chip">${s}</span>`).join('')}
          </div>
        </div>
        <div class="card-action-links">
          <button class="action-link highlight" onclick="openDetailModal('${project.id}')">
            <span>Architecture Specs</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
          ${liveLinkMarkup}
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="action-link" title="View Source on GitHub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span>GitHub</span>
          </a>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Category Tab Clicks
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-filter') || 'all';
      render();
    });
  });

  // Search Input Events
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.classList.toggle('show', currentSearchQuery.length > 0);
      }
      render();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        currentSearchQuery = '';
        clearBtn.classList.remove('show');
        render();
        searchInput.focus();
      }
    });
  }

  // Global reset helper
  window.resetProjectFilters = function() {
    currentCategory = 'all';
    currentSearchQuery = '';
    if (searchInput) searchInput.value = '';
    if (clearBtn) clearBtn.classList.remove('show');
    tabs.forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-filter') === 'all');
    });
    render();
  };

  render();
}

function openDetailModal(id) {
  const project = realProjects.find(p => p.id === id);
  if (!project) return;

  const overlay = document.getElementById('projectModalOverlay');
  const body = document.getElementById('modalContentBody');
  if (!overlay || !body) return;

  const archRows = Object.entries(project.architecture).map(([key, val]) => `
    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding: 0.55rem 0; font-size: 0.88rem; gap: 1rem;">
      <span style="color: var(--text-muted); text-transform: capitalize; flex-shrink: 0;">${key}</span>
      <span style="font-family: var(--font-mono); font-weight: 600; color: var(--text-primary); text-align: right; word-break: break-word;">${val}</span>
    </div>
  `).join('');

  const liveBtn = project.liveUrl && project.liveUrl !== '#'
    ? (project.liveUrl.endsWith('.apk')
        ? `<a href="${project.liveUrl}" download="TaskFlow-debug.apk" class="btn-solid" style="flex: 1; text-align: center; justify-content: center;">
             <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
             <span>Download Android APK</span>
           </a>`
        : `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-solid" style="flex: 1; text-align: center; justify-content: center;">
             <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
             <span>Open Live Site</span>
           </a>`)
    : '';

  body.innerHTML = `
    <div class="brutal-card-header" style="margin-bottom: 1.25rem;">
      <div class="window-dots">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
      <span class="window-title-text mono">SPEC_INSPECTOR://${project.id.toUpperCase()}.SYS</span>
      <span class="window-badge mono">${project.badgeType}</span>
    </div>
    
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
      <span class="card-category-indicator">${project.tagText}</span>
      <span class="chip" style="background: var(--neo-yellow); color: #000; border: 2px solid #000; font-weight: 800;">${project.badgeType}</span>
    </div>
    <h2 style="font-size: 1.65rem; margin-bottom: 0.75rem; font-weight: 800;">${project.title}</h2>
    
    <div style="margin: 1.25rem 0; background: var(--bg-surface-elevated); border: var(--border-solid); border-radius: var(--radius-sm); padding: 1.15rem 1.35rem; box-shadow: var(--shadow-neo-xs);">
      <h4 style="font-size: 0.84rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--neo-yellow); margin-bottom: 0.65rem; font-weight: 800;">System Architecture Specs</h4>
      ${archRows}
    </div>

    <div style="font-size: 0.96rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 1.5rem; white-space: pre-line; font-weight: 500;">
      ${project.deepDive}
    </div>

    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.75rem;">
      ${project.stack.map(s => `<span class="chip">${s}</span>`).join('')}
    </div>

    <div style="display: flex; gap: 0.85rem; flex-wrap: wrap;">
      ${liveBtn}
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-ghost" style="flex: 1; text-align: center; justify-content: center;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        <span>GitHub Repository</span>
      </a>
      <button class="btn-ghost" onclick="closeDetailModal()">Close</button>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  const overlay = document.getElementById('projectModalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initProjectGallery();

  const overlay = document.getElementById('projectModalOverlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeDetailModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDetailModal();
  });
});
