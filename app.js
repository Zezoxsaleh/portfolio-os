"use strict";

const profile = {
  name: "Ezzeldeen Saleh",
  title: "Backend Developer",
  location: "Cairo, Egypt",
  email: "ezzeldeensaat234@gmail.com",
  phone: "01140258638",
  github: "https://github.com/Zezoxsaleh",
  linkedin: "https://linkedin.com/in/ezzeldeensaleh",
  about: [
    "Backend Developer specializing in scalable, production-grade distributed systems using Java, Spring Boot, and microservices architecture.",
    "Experienced in event-driven systems with Apache Kafka, REST API design, JWT and Spring Security authentication, and CI/CD workflows with Docker.",
    "Strong foundation in data engineering with Kafka, Spark, NiFi, and ETL pipelines, plus complementary full-stack skills in React."
  ],
  strengths: [
    "Distributed systems and microservices design",
    "REST API design, security, and integration",
    "Event-driven architecture with Kafka",
    "Docker and containerized deployment",
    "Clean Architecture and SOLID principles",
    "Systematic debugging and ownership"
  ],
  education: "B.Sc. Information Systems, Helwan University, Faculty of Computer Science and AI, Cairo. 2023 - 2027/28."
};

const projects = [
  {
    id: "food",
    title: "Food Ordering System",
    subtitle: "Full Stack Microservices Platform",
    featured: true,
    category: "backend",
    status: "Running",
    github: "https://github.com/Zezoxsaleh/food-ordering-system",
    tags: ["Java", "Spring Boot", "Apache Kafka", "Docker Compose", "React", "MySQL", "Stripe", "JWT"],
    metrics: ["5+ services", "6 containers", "Stripe flow", "Kafka events"],
    nodes: ["Gateway", "Auth", "Orders", "Payments", "Restaurants", "Notifications"],
    points: [
      "Architected a production-grade backend across independently deployable microservices with clear service boundaries.",
      "Engineered asynchronous event-driven messaging with Apache Kafka for fault-tolerant data flow.",
      "Secured API surfaces using Spring Security and JWT authentication.",
      "Delivered end-to-end Stripe payment integration and Docker Compose setup."
    ]
  },
  {
    id: "bookcircle",
    title: "BookCircle",
    subtitle: "Community Book Sharing Platform",
    category: "backend",
    status: "Running",
    github: "https://github.com/Zezoxsaleh/BookCircle",
    tags: ["ASP.NET Core", "Entity Framework Core", "SQL Server", "SignalR", "JWT", "React", "React Query"],
    metrics: ["15+ endpoints", "3 roles", "SignalR", "Borrow lifecycle"],
    nodes: ["Readers", "Owners", "Admin", "Catalog", "Borrowing", "Realtime Hub"],
    points: [
      "Designed REST APIs covering authentication, book management, borrowing workflows, and admin operations.",
      "Built role-based access control for Admin, BookOwner, and Reader users with refresh token rotation.",
      "Integrated SignalR for real-time push notifications and optimized frontend fetching with React Query.",
      "Delivered a complete borrow lifecycle from request to owner approval, active borrow, and return."
    ]
  },
  {
    id: "clickstream",
    title: "Clickstream Data Pipeline",
    subtitle: "Real-Time Data Engineering System",
    featured: true,
    category: "data",
    status: "Streaming",
    github: "https://github.com/Zezoxsaleh/clickstream-pipeline",
    tags: ["Apache Kafka", "Apache NiFi", "Apache Spark", "MySQL", "ETL", "Stream Processing"],
    metrics: ["1000s events/sec", "ETL routing", "Spark jobs", "BI queries"],
    nodes: ["Event Producer", "Kafka Topic", "NiFi Flow", "Spark Job", "MySQL Sink", "Insight Layer"],
    points: [
      "Architected a real-time data pipeline ingesting and processing thousands of simulated clickstream events per second.",
      "Used Apache Kafka for high-throughput stream ingestion with guaranteed message delivery.",
      "Orchestrated distributed ETL workflows with Apache NiFi and processed analytics with Apache Spark.",
      "Surfaced structured business insights through MySQL queries."
    ]
  },
  {
    id: "train",
    title: "Train Tracking System",
    subtitle: "Real-Time Tracking Backend",
    category: "tracking",
    status: "Live Map",
    github: "https://github.com/Zezoxsaleh/train-tracking-system",
    tags: ["PHP", "JavaScript", "REST APIs", "MySQL"],
    metrics: ["Routes", "Schedules", "API separation", "Persistence"],
    nodes: ["Station API", "Schedule Core", "Route Engine", "Tracking UI", "MySQL", "Status Feed"],
    points: [
      "Built a real-time train tracking backend with dynamic schedule and routing logic.",
      "Designed clean RESTful APIs that enabled frontend-backend separation.",
      "Persisted schedule management and route state through a database-backed service layer."
    ]
  },
  {
    id: "optimization",
    title: "Optimization Algorithms Lab",
    subtitle: "Concept Service Module",
    category: "lab",
    status: "Prototype",
    github: null,
    tags: ["Algorithms", "Simulation", "Scheduling", "Analysis"],
    metrics: ["Route scoring", "Cost models", "Search space", "Heuristics"],
    nodes: ["Inputs", "Constraints", "Solver", "Scoreboard", "Trace", "Report"],
    points: [
      "Portfolio OS module representing algorithmic thinking around routing, scheduling, and tradeoff analysis.",
      "Designed as a future app surface for visualizing optimization runs and engineering decisions."
    ]
  },
  {
    id: "automation",
    title: "Automation Tools Console",
    subtitle: "Concept Service Module",
    category: "lab",
    status: "Queued",
    github: null,
    tags: ["Scripts", "CI/CD", "Docker", "GitHub Actions"],
    metrics: ["Deploy tasks", "Health checks", "One-command setup", "Reports"],
    nodes: ["Trigger", "Runner", "Checks", "Artifacts", "Notify", "Rollback"],
    points: [
      "Portfolio OS module for the automation mindset behind containerized setup, test feedback, and repeatable delivery.",
      "Designed to show how engineering workflows can become reliable product surfaces."
    ]
  }
];

const skillProcesses = [
  ["Backend Kernel", "Java, Spring Boot, REST APIs", 92],
  ["Security Daemon", "JWT, Spring Security, roles", 86],
  ["Event Bus", "Kafka, async messaging", 84],
  ["Data Engine", "Spark, NiFi, ETL", 78],
  ["Container Runtime", "Docker, Compose, Linux", 80],
  ["Database Cache", "PostgreSQL, MySQL, SQL Server", 76],
  ["Frontend Bridge", "React, Vite, API integration", 72],
  ["Learning Thread", "Three.js, R3F, GSAP direction", 64]
];

const notifications = [
  ["Microservices milestone", "Food Ordering System models 5+ deployable services with Kafka-backed communication."],
  ["Realtime pipeline online", "Clickstream Data Pipeline processes simulated event traffic through Kafka, NiFi, Spark, and MySQL."],
  ["Security layer active", "JWT, refresh token rotation, and role-based access appear across portfolio systems."],
  ["Academic path", "Information Systems at Helwan University, Faculty of Computer Science and AI."],
  ["Portfolio OS unlocked", "Terminal, task manager, project apps, assistant, and telemetry panels are available."]
];
let unreadNotifications = notifications.length;

const activityLines = [
  "order.created -> kafka.orders partition=02",
  "spark.job.clickstream window=30s status=ok",
  "docker.compose health=green services=6",
  "jwt.guard refresh.rotate status=accepted",
  "nifi.flow route=analytics latency=38ms",
  "train.schedule diff=+02m persisted=true"
];

const bootSteps = [
  "Loading distributed-systems memory map",
  "Mounting /projects as executable services",
  "Starting Kafka imagination bus",
  "Hydrating terminal command layer",
  "Compiling glass UI shaders",
  "Indexing achievements and milestones",
  "Unlocking engineering workstation"
];

const dom = {
  bootScreen: document.getElementById("bootScreen"),
  bootLines: document.getElementById("bootLines"),
  bootProgress: document.getElementById("bootProgress"),
  desktop: document.getElementById("desktop"),
  windowLayer: document.getElementById("windowLayer"),
  taskbarApps: document.getElementById("taskbarApps"),
  startButton: document.getElementById("startButton"),
  startMenu: document.getElementById("startMenu"),
  notificationCenter: document.getElementById("notificationCenter"),
  notificationToggle: document.getElementById("notificationToggle"),
  notificationsList: document.getElementById("notificationsList"),
  assistantPanel: document.getElementById("assistantPanel"),
  assistantToggle: document.getElementById("assistantToggle"),
  assistantFeed: document.getElementById("assistantFeed"),
  assistantForm: document.getElementById("assistantForm"),
  assistantInput: document.getElementById("assistantInput"),
  soundToggle: document.getElementById("soundToggle"),
  shutdownScreen: document.getElementById("shutdownScreen"),
  shutdownButton: document.getElementById("shutdownButton"),
  rebootButton: document.getElementById("rebootButton"),
  desktopClock: document.getElementById("desktopClock"),
  dataRain: document.getElementById("dataRain"),
  activityTicker: document.getElementById("activityTicker"),
  desktopHint: document.getElementById("desktopHint"),
  canvas: document.getElementById("ambientCanvas")
};

const windows = new Map();
let zCounter = 60;
let bootDone = false;
let bootTimer = null;
let soundEnabled = true;
let audioContext = null;
let explorerFilter = "all";
let terminalHistory = [
  { kind: "output", html: "<strong>Ezzeldeen OS Terminal</strong> - type <strong>help</strong> to explore." },
  { kind: "output", html: "Try: projects, skills, about, contact, resume, clear, matrix, sudo hire ezzeldeen" }
];
let commandHistoryList = [];
let commandHistoryIndex = -1;
let assistantMessages = [
  {
    from: "bot",
    text: "Workspace assistant online. I can explain Ezzeldeen's backend work, project evidence, hiring fit, or contact path."
  }
];
let dragState = null;
let resizeState = null;
let keyBuffer = "";

const windowDefaults = {
  explorer: { title: "File Explorer - /projects", x: 148, y: 138, w: 760, h: 500, type: "explorer" },
  terminal: { title: "Terminal - es@workspace", x: 188, y: 196, w: 660, h: 420, type: "terminal" },
  taskManager: { title: "Task Manager - skills.exe", x: 900, y: 132, w: 520, h: 520, type: "taskManager" },
  monitor: { title: "Telemetry - project activity", x: 850, y: 170, w: 560, h: 460, type: "monitor" },
  about: { title: "About - profile.sys", x: 240, y: 116, w: 700, h: 500, type: "about" },
  contact: { title: "Contact - comms.app", x: 300, y: 160, w: 620, h: 460, type: "contact" },
  resume: { title: "Resume Capsule - cv.viewer", x: 260, y: 126, w: 700, h: 530, type: "resume" },
  easter: { title: "Hidden Kernel - easter.egg", x: 360, y: 210, w: 520, h: 330, type: "easter" }
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function byProject(id) {
  return projects.find((project) => project.id === id);
}

function isMobileLayout() {
  return window.matchMedia("(max-width: 820px)").matches;
}

function playSound(kind = "click") {
  if (!soundEnabled) return;
  try {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const now = audioContext.currentTime;
    const frequencies = {
      click: 520,
      open: 760,
      close: 260,
      notify: 980,
      boot: 420,
      error: 150
    };
    oscillator.type = kind === "error" ? "sawtooth" : "sine";
    oscillator.frequency.setValueAtTime(frequencies[kind] || 520, now);
    oscillator.frequency.exponentialRampToValueAtTime((frequencies[kind] || 520) * 0.72, now + 0.11);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.045, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.13);
  } catch (error) {
    soundEnabled = false;
    dom.soundToggle.textContent = "OFF";
  }
}

function startBoot() {
  let index = 0;
  bootTimer = window.setInterval(() => {
    if (index < bootSteps.length) {
      const line = document.createElement("span");
      line.innerHTML = `[OK] ${escapeHtml(bootSteps[index])}`;
      line.innerHTML = line.innerHTML.replace("[OK]", "<b>[OK]</b>");
      dom.bootLines.appendChild(line);
      dom.bootProgress.style.width = `${Math.round(((index + 1) / bootSteps.length) * 100)}%`;
      index += 1;
    } else {
      completeBoot();
    }
  }, 360);
}

function completeBoot() {
  if (bootDone) return;
  bootDone = true;
  window.clearInterval(bootTimer);
  dom.bootProgress.style.width = "100%";
  dom.bootScreen.classList.add("is-complete");
  dom.desktop.classList.remove("is-locked");
  window.setTimeout(() => {
    dom.bootScreen.hidden = true;
  }, 900);
  if (!isMobileLayout()) {
    window.setTimeout(() => openWindow("explorer"), 700);
  }
  addAssistantMessage("bot", "Boot complete. The workspace is live. Use Ctrl+` for terminal, Ctrl+Space for assistant, and Ctrl+Shift+P for projects.");
  playSound("boot");
}

function openWindow(id, options = {}) {
  const projectId = options.projectId;
  const windowId = projectId ? `project-${projectId}` : id;
  const existing = windows.get(windowId);
  if (existing) {
    existing.minimized = false;
    focusWindow(windowId);
    renderWindows();
    playSound("open");
    return;
  }

  const project = projectId ? byProject(projectId) : null;
  const base = project
    ? {
        title: `${project.title} - application`,
        x: 220 + (windows.size % 4) * 28,
        y: 118 + (windows.size % 5) * 24,
        w: 720,
        h: 520,
        type: "project",
        projectId
      }
    : windowDefaults[id];

  if (!base) return;

  const safeX = isMobileLayout() ? 10 : clamp(base.x, 8, Math.max(8, window.innerWidth - 340));
  const safeY = isMobileLayout() ? 12 : clamp(base.y, 8, Math.max(8, window.innerHeight - 300));
  windows.set(windowId, {
    id: windowId,
    title: base.title,
    type: base.type,
    projectId: base.projectId || null,
    x: safeX,
    y: safeY,
    w: base.w,
    h: base.h,
    z: ++zCounter,
    minimized: false,
    maximized: false
  });
  renderWindows();
  playSound("open");
}

function focusWindow(id) {
  const win = windows.get(id);
  if (!win) return;
  win.z = ++zCounter;
}

function closeWindow(id) {
  windows.delete(id);
  renderWindows();
  playSound("close");
}

function minimizeWindow(id) {
  const win = windows.get(id);
  if (!win) return;
  win.minimized = true;
  renderWindows();
}

function toggleMaximize(id) {
  const win = windows.get(id);
  if (!win) return;
  win.maximized = !win.maximized;
  win.minimized = false;
  focusWindow(id);
  renderWindows();
}

function renderWindows() {
  const visibleWindows = Array.from(windows.values())
    .filter((win) => !win.minimized)
    .sort((a, b) => a.z - b.z);
  const focusedZ = visibleWindows.length > 0 ? visibleWindows[visibleWindows.length - 1].z : -1;

  dom.windowLayer.innerHTML = visibleWindows
    .map((win) => renderWindow(win, win.z === focusedZ))
    .join("");

  dom.taskbarApps.innerHTML = Array.from(windows.values())
    .sort((a, b) => a.z - b.z)
    .map((win) => {
      const active = !win.minimized && win.z === zCounter ? " is-active" : "";
      return `<button class="taskbar-app${active}" type="button" data-taskbar-window="${win.id}"><span>${escapeHtml(win.title)}</span></button>`;
    })
    .join("");

  if (dom.desktopHint) {
    dom.desktopHint.style.opacity = visibleWindows.length > 0 ? "0" : "0.85";
  }

  window.requestAnimationFrame(() => {
    const terminalOutput = document.querySelector(".terminal-output");
    if (terminalOutput) terminalOutput.scrollTop = terminalOutput.scrollHeight;
    const activeTerminal = document.querySelector('[data-window-id="terminal"] .terminal-form input');
    if (activeTerminal && document.activeElement && document.activeElement.closest(".terminal-form")) {
      activeTerminal.focus();
    }
  });
}

function renderWindow(win, isFocused = false) {
  const style = `left:${win.x}px;top:${win.y}px;width:${win.w}px;height:${win.h}px;z-index:${win.z};`;
  const maxClass = win.maximized ? " is-maximized" : "";
  const focusClass = isFocused ? " is-focused" : "";
  return `
    <article class="os-window${maxClass}${focusClass}" data-window-id="${win.id}" style="${style}">
      <header class="window-titlebar" data-drag-handle>
        <span class="window-badge"></span>
        <span class="window-title">${escapeHtml(win.title)}</span>
        <div class="window-controls">
          <button class="window-control" type="button" data-window-action="minimize" aria-label="Minimize">-</button>
          <button class="window-control" type="button" data-window-action="maximize" aria-label="Maximize">□</button>
          <button class="window-control" type="button" data-window-action="close" aria-label="Close">x</button>
        </div>
      </header>
      <div class="window-body">
        ${renderWindowBody(win)}
      </div>
      <span class="resize-handle" data-resize-handle aria-hidden="true"></span>
    </article>
  `;
}

function renderWindowBody(win) {
  switch (win.type) {
    case "explorer":
      return renderExplorer();
    case "terminal":
      return renderTerminal();
    case "taskManager":
      return renderTaskManager();
    case "monitor":
      return renderMonitor();
    case "about":
      return renderAbout();
    case "contact":
      return renderContact();
    case "resume":
      return renderResume();
    case "project":
      return renderProject(win.projectId);
    case "easter":
      return renderEasterEgg();
    default:
      return "<p>Unknown app.</p>";
  }
}

function renderExplorer() {
  const visibleProjects = explorerFilter === "all"
    ? projects
    : projects.filter((project) => project.category === explorerFilter || (explorerFilter === "backend" && project.category === "tracking"));

  const sidebar = [
    ["all", "All services"],
    ["backend", "Backend"],
    ["data", "Data"],
    ["tracking", "Tracking"],
    ["lab", "Labs"]
  ].map(([filter, label]) => {
    const active = explorerFilter === filter ? " is-active" : "";
    return `<button class="${active}" type="button" data-folder-filter="${filter}">${label}</button>`;
  }).join("");

  return `
    <section class="folder-layout">
      <aside class="folder-sidebar">
        <p class="eyebrow">/projects</p>
        ${sidebar}
      </aside>
      <div class="file-grid">
        ${visibleProjects.map((project) => `
          <article class="file-row${project.featured ? " file-row--featured" : ""}">
            <div>
              <div class="file-row-header">
                <span class="status-tag ${project.category === "data" ? "amber" : ""}">${escapeHtml(project.status)}</span>
                ${project.featured ? `<span class="featured-badge">★ Featured</span>` : ""}
              </div>
              <h3>${escapeHtml(project.title)}</h3>
              <p>${escapeHtml(project.subtitle)}</p>
            </div>
            <div class="tag-list">${project.tags.slice(0, 4).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
            <div class="file-row-actions">
              <button class="project-open-button" type="button" data-open-project="${project.id}">Open app</button>
              ${project.github ? `<a class="project-open-button github-link" href="${project.github}" target="_blank" rel="noopener noreferrer">Source ↗</a>` : ""}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTerminal() {
  const lines = terminalHistory.map((entry) => {
    if (entry.kind === "input") return `<p class="terminal-line input">es@workspace:~$ ${escapeHtml(entry.text)}</p>`;
    return `<p class="terminal-line output">${entry.html}</p>`;
  }).join("");

  return `
    <section class="terminal-panel">
      <div class="terminal-output">
        ${lines}
        <div class="command-chips">
          ${["help", "projects", "skills", "about", "contact", "resume", "clear"].map((command) => `
            <button class="command-chip" type="button" data-command="${command}">${command}</button>
          `).join("")}
        </div>
      </div>
      <form class="terminal-form" data-terminal-form>
        <label for="terminalInput">es@workspace:~$</label>
        <input id="terminalInput" name="terminalInput" type="text" autocomplete="off" spellcheck="false" />
      </form>
    </section>
  `;
}

function renderTaskManager() {
  return `
    <section class="window-section">
      <div>
        <p class="eyebrow">LIVE PROCESSES</p>
        <h2 class="section-title">Skills, technologies, and learning threads</h2>
        <p class="muted">Progress values are staged as an OS-style visualization of confidence, practice, and current learning motion.</p>
      </div>
      <div class="process-list">
        ${skillProcesses.map(([name, detail, value]) => `
          <article class="process-row">
            <div><strong>${escapeHtml(name)}</strong><br><span class="muted">${escapeHtml(detail)}</span></div>
            <div class="meter"><i style="--value:${value}%"></i></div>
            <span class="status-tag">${value}%</span>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderMonitor() {
  return `
    <section class="window-section">
      <div>
        <p class="eyebrow">FAKE SYSTEM MONITOR</p>
        <h2 class="section-title">Project activity telemetry</h2>
      </div>
      <div class="monitor-grid">
        <article class="metric-panel">
          <h3>CPU attention</h3>
          <span class="metric-value" data-live="cpu">42%</span>
          <p>Current focus spread across backend design, event flows, and UI polish.</p>
        </article>
        <article class="metric-panel">
          <h3>Event traffic</h3>
          <span class="metric-value" data-live="events">842</span>
          <p>Simulated stream messages moving through the portfolio pipeline.</p>
        </article>
        <article class="metric-panel">
          <h3>Service load</h3>
          <span class="metric-value" data-live="load">0.73</span>
          <p>Weighted activity score from active project modules.</p>
        </article>
        <article class="metric-panel">
          <h3>Learning sync</h3>
          <span class="metric-value" data-live="learning">76%</span>
          <p>Current growth path: React Three Fiber, GSAP motion systems, and deeper system design.</p>
        </article>
      </div>
      <div class="topology" aria-label="System topology">
        <div class="node">React Desktop Shell</div>
        <div class="node amber">Window Manager</div>
        <div class="node green">Terminal Parser</div>
        <div class="node green">Project Apps</div>
        <div class="node">Telemetry Bus</div>
        <div class="node amber">AI Assistant</div>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section class="window-section">
      <div class="split-grid">
        <article class="info-panel">
          <p class="eyebrow">ABOUT.ME</p>
          <h2 class="section-title">${profile.name}</h2>
          ${profile.about.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </article>
        <article class="info-panel">
          <p class="eyebrow">CORE.STRENGTHS</p>
          <ul>
            ${profile.strengths.map((strength) => `<li>${escapeHtml(strength)}</li>`).join("")}
          </ul>
        </article>
      </div>
      <article class="info-panel">
        <p class="eyebrow">EDUCATION</p>
        <p>${escapeHtml(profile.education)}</p>
      </article>
    </section>
  `;
}

function renderResume() {
  return `
    <section class="window-section">
      <div class="resume-header">
        <div>
          <p class="eyebrow">RESUME CAPSULE</p>
          <h2 class="section-title">${profile.title} // Distributed Systems Track</h2>
          <p class="muted">A condensed recruiter view of the portfolio source content.</p>
        </div>
        <button class="primary-action resume-download" type="button" data-resume-print>⬇ Download Resume</button>
      </div>
      <div class="resume-list">
        <article class="resume-row">
          <h3>Primary focus</h3>
          <p>Java, Spring Boot, microservices, REST APIs, security, Kafka, Docker, and data engineering pipelines.</p>
        </article>
        <article class="resume-row">
          <h3>Project proof</h3>
          <p>Food Ordering System, BookCircle, Clickstream Data Pipeline, Train Tracking System, plus OS concept modules for optimization and automation storytelling.</p>
        </article>
        <article class="resume-row">
          <h3>Working style</h3>
          <p>Clean architecture, end-to-end ownership, systematic debugging, service boundaries, and practical deployment thinking.</p>
        </article>
        <article class="resume-row">
          <h3>Contact</h3>
          <p>${profile.email} | ${profile.github} | ${profile.linkedin}</p>
        </article>
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section class="window-section">
      <div>
        <p class="eyebrow">COMMS.APP</p>
        <h2 class="section-title">Open a channel</h2>
        <p class="muted">Discuss backend engineering challenges, distributed systems design, data pipelines, or opportunities.</p>
      </div>
      <div class="contact-grid">
        <a class="contact-link" href="mailto:${profile.email}">
          <span>Email</span>
          ${profile.email}
        </a>
        <a class="contact-link" href="tel:${profile.phone}">
          <span>Phone</span>
          ${profile.phone}
        </a>
        <a class="contact-link" href="${profile.github}" target="_blank" rel="noopener noreferrer">
          <span>GitHub</span>
          github.com/Zezoxsaleh
        </a>
        <a class="contact-link" href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">
          <span>LinkedIn</span>
          linkedin.com/in/ezzeldeensaleh
        </a>
      </div>
      <form class="contact-form" data-contact-form>
        <input name="name" type="text" placeholder="Your name" required />
        <input name="email" type="email" placeholder="your@email.com" required />
        <textarea name="message" placeholder="Write a short message..." required></textarea>
        <button class="primary-action" type="submit">Send Message ↗</button>
        <p class="contact-note">Clicking send will open your email client with your message pre-filled.</p>
      </form>
    </section>
  `;
}

function renderProject(projectId) {
  const project = byProject(projectId);
  if (!project) return "<p>Project module unavailable.</p>";
  return `
    <section class="window-section">
      <div>
        <p class="eyebrow">APPLICATION SERVICE</p>
        <h2 class="section-title">${escapeHtml(project.title)}</h2>
        <p class="muted">${escapeHtml(project.subtitle)} | status: ${escapeHtml(project.status)}</p>
        ${project.github ? `<a class="project-open-button github-link" href="${project.github}" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>` : ""}
      </div>
      <div class="tag-list">${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      <div class="monitor-grid">
        ${project.metrics.map((metric) => `
          <article class="metric-panel">
            <h3>${escapeHtml(metric)}</h3>
            <p>Telemetry label for this service surface.</p>
          </article>
        `).join("")}
      </div>
      <div class="topology">
        ${project.nodes.map((node, index) => `<div class="node ${index % 3 === 1 ? "amber" : index % 3 === 2 ? "green" : ""}">${escapeHtml(node)}</div>`).join("")}
      </div>
      <article class="info-panel">
        <p class="eyebrow">ENGINEERING NOTES</p>
        <ul>${project.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
      </article>
    </section>
  `;
}

function renderEasterEgg() {
  return `
    <section class="window-section">
      <div class="terminal-panel">
        <div class="terminal-output">
          <p class="terminal-line output"><strong>Hidden kernel unlocked.</strong></p>
          <p class="terminal-line output">You found the quiet layer: the portfolio is not a page, it is a workspace narrative.</p>
          <p class="terminal-line output">Easter commands: matrix, whoami, sudo hire ezzeldeen.</p>
        </div>
      </div>
    </section>
  `;
}

function processTerminalCommand(rawCommand) {
  const command = rawCommand.trim();
  if (!command) return;
  const normalized = command.toLowerCase();
  terminalHistory.push({ kind: "input", text: command });
  commandHistoryList.push(command);
  commandHistoryIndex = commandHistoryList.length;

  if (normalized === "clear") {
    terminalHistory = [];
    renderWindows();
    return;
  }

  const output = (html) => terminalHistory.push({ kind: "output", html });

  if (normalized === "help") {
    output("<strong>Commands:</strong> help, projects, skills, about, contact, resume, clear, matrix, shutdown, whoami, sudo hire ezzeldeen, open food, open bookcircle, open clickstream, open train.");
  } else if (normalized === "projects") {
    output(projects.map((project) => `<strong>${escapeHtml(project.title)}</strong> - ${escapeHtml(project.subtitle)}`).join("<br>"));
    openWindow("explorer");
  } else if (normalized === "skills") {
    output(skillProcesses.map(([name, detail, value]) => `<strong>${escapeHtml(name)}</strong> ${value}% - ${escapeHtml(detail)}`).join("<br>"));
    openWindow("taskManager");
  } else if (normalized === "about") {
    output(`${profile.name}: ${profile.about[0]}`);
    openWindow("about");
  } else if (normalized === "contact") {
    output(`Email: <strong>${profile.email}</strong><br>GitHub: ${profile.github}<br>LinkedIn: ${profile.linkedin}`);
    openWindow("contact");
  } else if (normalized === "resume") {
    output("Opening resume capsule.");
    openWindow("resume");
  } else if (normalized === "shutdown") {
    output("Suspending workstation.");
    triggerShutdown();
  } else if (normalized === "matrix") {
    output("<strong>Data rain intensity increased.</strong> Event streams are now visible in cinematic mode.");
    burstLogs(18);
    pushNotification("Hidden command", "matrix intensified the floating system logs.");
  } else if (normalized === "whoami") {
    output("You are a visitor inside Ezzeldeen's engineering workstation.");
  } else if (normalized === "sudo hire ezzeldeen") {
    output("<strong>Access granted.</strong> Strong match for backend, microservices, Kafka, Docker, and data engineering roles.");
    openWindow("contact");
    pushNotification("Easter egg found", "Hiring protocol unlocked through terminal.");
  } else if (normalized.startsWith("open ")) {
    const target = normalized.replace("open ", "").trim();
    const project = projects.find((item) => item.id === target || item.title.toLowerCase().includes(target));
    if (project) {
      output(`Opening ${escapeHtml(project.title)}.`);
      openWindow("project", { projectId: project.id });
    } else {
      output(`<strong>Not found:</strong> ${escapeHtml(target)}. Try open food, open clickstream, or projects.`);
      playSound("error");
    }
  } else {
    output(`<strong>Unknown command:</strong> ${escapeHtml(command)}. Type help for the command map.`);
    playSound("error");
  }
  renderWindows();
}

function renderNotifications() {
  dom.notificationsList.innerHTML = notifications.map(([title, text]) => `
    <article class="notification">
      <strong>${escapeHtml(title)}</strong>
      <p>${escapeHtml(text)}</p>
    </article>
  `).join("");
}

function pushNotification(title, text) {
  notifications.unshift([title, text]);
  unreadNotifications++;
  renderNotifications();
  updateNotificationBadge();
  playSound("notify");
}

function updateNotificationBadge() {
  const badge = dom.notificationToggle.querySelector(".notif-badge");
  if (unreadNotifications > 0) {
    if (badge) {
      badge.textContent = unreadNotifications > 9 ? "9+" : unreadNotifications;
    } else {
      const b = document.createElement("span");
      b.className = "notif-badge";
      b.textContent = unreadNotifications > 9 ? "9+" : unreadNotifications;
      dom.notificationToggle.appendChild(b);
    }
  } else if (badge) {
    badge.remove();
  }
}

function openResumeWindow() {
  const win = window.open("", "_blank", "width=800,height=900");
  if (!win) { window.print(); return; }
  win.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>Resume — ${profile.name}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; color: #111; background: #fff; padding: 40px; max-width: 800px; margin: 0 auto; }
  h1 { font-size: 28px; font-weight: 800; letter-spacing: -0.5px; }
  h2 { font-size: 13px; font-weight: 600; color: #0077aa; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #ddd; padding-bottom: 4px; margin: 22px 0 8px; }
  h3 { font-size: 14px; font-weight: 700; margin-bottom: 2px; }
  p, li { line-height: 1.55; color: #333; }
  ul { padding-left: 18px; }
  li { margin-bottom: 3px; }
  .subtitle { color: #555; font-size: 15px; margin: 4px 0; }
  .contact-row { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 6px; font-size: 13px; color: #555; }
  .project { margin-bottom: 14px; padding-bottom: 14px; border-bottom: 1px solid #eee; }
  .tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px; }
  .tag { background: #f0f0f0; padding: 2px 7px; border-radius: 4px; font-size: 12px; color: #444; }
  .skill-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px 20px; }
  .no-print { display: block; text-align: center; margin-bottom: 20px; }
  .no-print button { padding: 8px 20px; background: #0077aa; color: #fff; border: none; border-radius: 6px; font-size: 14px; cursor: pointer; }
  @media print { .no-print { display: none; } }
</style>
</head>
<body>
<div class="no-print"><button onclick="window.print()">⬇ Print / Save as PDF</button></div>
<h1>${profile.name}</h1>
<p class="subtitle">${profile.title} — Distributed Systems &amp; Backend Engineering</p>
<div class="contact-row">
  <span>📧 ${profile.email}</span>
  <span>📞 ${profile.phone}</span>
  <span>🐙 github.com/Zezoxsaleh</span>
  <span>💼 linkedin.com/in/ezzeldeensaleh</span>
  <span>📍 Cairo, Egypt</span>
</div>

<h2>About</h2>
${profile.about.map(p => `<p style="margin-bottom:6px">${p}</p>`).join("")}

<h2>Core Skills</h2>
<ul class="skill-grid">
${skillProcesses.map(([name, detail]) => `<li><strong>${name}:</strong> ${detail}</li>`).join("")}
</ul>

<h2>Projects</h2>
${projects.filter(p => p.github).map(p => `
<div class="project">
  <h3>${p.title} <span style="font-weight:400;color:#555">— ${p.subtitle}</span></h3>
  ${p.github ? `<a href="${p.github}" style="font-size:12px;color:#0077aa">${p.github}</a>` : ""}
  <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
  <ul style="margin-top:7px">${p.points.map(pt => `<li>${pt}</li>`).join("")}</ul>
</div>`).join("")}

<h2>Strengths</h2>
<ul>${profile.strengths.map(s => `<li>${s}</li>`).join("")}</ul>

<h2>Education</h2>
<p>${profile.education}</p>
</body></html>`);
  win.document.close();
  win.focus();
}

function addAssistantMessage(from, text) {
  assistantMessages.push({ from, text });
  renderAssistant();
}

function renderAssistant() {
  dom.assistantFeed.innerHTML = assistantMessages.map((message) => `
    <div class="assistant-message ${message.from === "user" ? "user" : "bot"}">${escapeHtml(message.text)}</div>
  `).join("");
  dom.assistantFeed.scrollTop = dom.assistantFeed.scrollHeight;
}

function answerAssistant(prompt) {
  const q = prompt.toLowerCase();

  // Hiring / contact intent
  if (q.includes("hire") || q.includes("recruit") || q.includes("available") || q.includes("opportunity") || q.includes("job") || q.includes("position")) {
    return `Ezzeldeen is actively available for backend engineering roles. Strongest fit: distributed systems, microservices, Kafka, Docker, Java/Spring Boot. Reach out at ${profile.email} or via LinkedIn.`;
  }
  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("linkedin") || q.includes("github")) {
    return `Best contact: ${profile.email} | GitHub: github.com/Zezoxsaleh | LinkedIn: linkedin.com/in/ezzeldeensaleh`;
  }

  // Specific projects
  if (q.includes("food") || q.includes("food ordering") || q.includes("stripe") || q.includes("payment")) {
    return "Food Ordering System: production-grade microservices with Spring Boot, Apache Kafka for async events, Stripe payment integration, Docker Compose for deployment, and JWT security. 5+ independently deployable services.";
  }
  if (q.includes("bookcircle") || q.includes("book") || q.includes("signalr") || q.includes("asp.net") || q.includes(".net")) {
    return "BookCircle: full-stack platform with ASP.NET Core, Entity Framework, SignalR for real-time notifications, role-based auth (Admin/Owner/Reader), and React Query on the frontend.";
  }
  if (q.includes("clickstream") || q.includes("pipeline") || q.includes("nifi") || q.includes("spark") || q.includes("etl") || q.includes("data engineering") || q.includes("data")) {
    return "Clickstream Data Pipeline: real-time data engineering with Kafka ingestion, Apache NiFi for ETL routing, Apache Spark for distributed processing, and MySQL for structured business insights. Handles thousands of events/sec.";
  }
  if (q.includes("train") || q.includes("tracking") || q.includes("php") || q.includes("route") || q.includes("schedule")) {
    return "Train Tracking System: real-time backend with PHP REST APIs, MySQL persistence, and dynamic schedule/routing logic with clean frontend-backend separation.";
  }

  // Tech stack questions
  if (q.includes("kafka") || q.includes("event") || q.includes("messaging") || q.includes("async")) {
    return "Kafka experience: event-driven messaging in the Food Ordering System (order events, payment confirmations) and Clickstream Pipeline (high-throughput ingestion). Strong understanding of topics, partitions, and consumer groups.";
  }
  if (q.includes("docker") || q.includes("container") || q.includes("compose") || q.includes("deploy")) {
    return "Docker: used in Food Ordering System with Docker Compose orchestrating 6 containers. Understanding of containerized deployment, service networking, and environment configuration.";
  }
  if (q.includes("spring") || q.includes("java") || q.includes("spring boot")) {
    return "Primary backend stack is Java + Spring Boot: REST APIs, Spring Security with JWT, microservices architecture, Kafka integration. Used across the Food Ordering System as the core service framework.";
  }
  if (q.includes("security") || q.includes("jwt") || q.includes("auth") || q.includes("oauth")) {
    return "Security experience: JWT authentication, refresh token rotation, role-based access control (Admin/Owner/Reader in BookCircle), Spring Security configuration, and API surface protection.";
  }
  if (q.includes("microservice") || q.includes("distributed") || q.includes("service") || q.includes("architecture")) {
    return "Microservices expertise: designed service boundaries in Food Ordering System with Gateway, Auth, Orders, Payments, Restaurants, and Notifications as independent deployable units communicating via Kafka.";
  }
  if (q.includes("react") || q.includes("frontend") || q.includes("ui")) {
    return "Frontend skills are complementary: React with React Query (BookCircle), Vite setup, and API integration. Primary focus remains on backend systems.";
  }
  if (q.includes("sql") || q.includes("database") || q.includes("postgres") || q.includes("mysql") || q.includes("db")) {
    return "Database experience: MySQL (Food Ordering, Train Tracking, Clickstream sink), SQL Server (BookCircle), PostgreSQL familiarity. Database-backed service layers with proper persistence design.";
  }

  // Profile questions
  if (q.includes("strong") || q.includes("best") || q.includes("backend") || q.includes("proof")) {
    return "Strongest backend proof: Food Ordering System (microservices + Kafka + Stripe + Docker) and Clickstream Data Pipeline (Kafka + NiFi + Spark). These demonstrate production-grade architecture thinking.";
  }
  if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("experience")) {
    return "Core stack: Java, Spring Boot, Microservices, Apache Kafka, Docker, REST APIs, JWT/Spring Security, PostgreSQL/MySQL, Apache Spark, Apache NiFi, ASP.NET Core, React. Clean Architecture and SOLID principles applied throughout.";
  }
  if (q.includes("education") || q.includes("university") || q.includes("degree") || q.includes("helwan") || q.includes("study")) {
    return "B.Sc. Information Systems at Helwan University, Faculty of Computer Science and AI, Cairo — 2023 to 2027/28.";
  }
  if (q.includes("summary") || q.includes("overview") || q.includes("about") || q.includes("who")) {
    return "Ezzeldeen Saleh — Backend Developer specializing in distributed systems, event-driven microservices (Kafka, Spring Boot), data engineering (Spark, NiFi), and secure API design. End-to-end project ownership with Docker deployment experience.";
  }
  if (q.includes("year") || q.includes("how long") || q.includes("experience") || q.includes("senior") || q.includes("junior")) {
    return "Currently a student at Helwan University (2023-2027) actively building production-quality backend systems. The portfolio projects demonstrate architecture skills beyond typical graduate level.";
  }

  return "I can answer about specific projects (Food Ordering, Clickstream, BookCircle, Train Tracking), technologies (Kafka, Docker, Java, Spring Boot, Spark), skills, hiring availability, or contact details. What would you like to know?";
}

function updateClock() {
  const now = new Date();
  dom.desktopClock.textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function updateLiveStats() {
  const cpu = Math.round(34 + Math.random() * 42);
  const events = Math.round(640 + Math.random() * 1280);
  const learning = Math.round(73 + Math.random() * 9);
  const load = (0.42 + Math.random() * 0.86).toFixed(2);
  const values = { cpu: `${cpu}%`, events, learning: `${learning}%`, load, services: 11 };
  Object.entries(values).forEach(([key, value]) => {
    document.querySelectorAll(`[data-live="${key}"]`).forEach((node) => {
      node.textContent = value;
    });
  });

  const shuffled = activityLines
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((line) => `<span>${escapeHtml(line)}</span>`)
    .join("");
  dom.activityTicker.innerHTML = shuffled;
}

function spawnLogLine() {
  const text = activityLines[Math.floor(Math.random() * activityLines.length)];
  const line = document.createElement("span");
  line.className = "data-line";
  line.textContent = `[${new Date().toLocaleTimeString()}] ${text}`;
  line.style.setProperty("--x", `${Math.random() * 52 + 22}%`);
  line.style.setProperty("--speed", `${9 + Math.random() * 8}s`);
  line.addEventListener("animationend", () => line.remove());
  dom.dataRain.appendChild(line);
}

function burstLogs(count) {
  for (let i = 0; i < count; i += 1) {
    window.setTimeout(spawnLogLine, i * 90);
  }
}

function triggerShutdown() {
  dom.shutdownScreen.hidden = false;
  dom.desktop.classList.add("is-locked");
  playSound("close");
}

function rebootWorkspace() {
  dom.shutdownScreen.hidden = true;
  dom.desktop.classList.remove("is-locked");
  pushNotification("Workspace resumed", "Low-power mode ended and the OS session is active again.");
  playSound("boot");
}

function startDrag(event, win) {
  if (win.maximized || isMobileLayout()) return;
  dragState = {
    id: win.id,
    startX: event.clientX,
    startY: event.clientY,
    x: win.x,
    y: win.y
  };
  event.preventDefault();
}

function startResize(event, win) {
  if (win.maximized || isMobileLayout()) return;
  resizeState = {
    id: win.id,
    startX: event.clientX,
    startY: event.clientY,
    w: win.w,
    h: win.h
  };
  event.preventDefault();
  event.stopPropagation();
}

function handlePointerMove(event) {
  if (dragState) {
    const win = windows.get(dragState.id);
    const element = document.querySelector(`[data-window-id="${dragState.id}"]`);
    if (!win || !element) return;
    win.x = clamp(dragState.x + event.clientX - dragState.startX, 8, window.innerWidth - 120);
    win.y = clamp(dragState.y + event.clientY - dragState.startY, 8, window.innerHeight - 100);
    element.style.left = `${win.x}px`;
    element.style.top = `${win.y}px`;
  }

  if (resizeState) {
    const win = windows.get(resizeState.id);
    const element = document.querySelector(`[data-window-id="${resizeState.id}"]`);
    if (!win || !element) return;
    win.w = clamp(resizeState.w + event.clientX - resizeState.startX, 320, window.innerWidth - win.x - 12);
    win.h = clamp(resizeState.h + event.clientY - resizeState.startY, 240, window.innerHeight - win.y - 78);
    element.style.width = `${win.w}px`;
    element.style.height = `${win.h}px`;
  }
}

function stopPointerInteraction() {
  dragState = null;
  resizeState = null;
}

function handleDocumentClick(event) {
  const openTarget = event.target.closest("[data-open-window]");
  if (openTarget) {
    openWindow(openTarget.dataset.openWindow);
    dom.startMenu.hidden = true;
    return;
  }

  const projectTarget = event.target.closest("[data-open-project]");
  if (projectTarget) {
    openWindow("project", { projectId: projectTarget.dataset.openProject });
    return;
  }

  const commandTarget = event.target.closest("[data-command]");
  if (commandTarget) {
    processTerminalCommand(commandTarget.dataset.command);
    return;
  }

  const folderTarget = event.target.closest("[data-folder-filter]");
  if (folderTarget) {
    explorerFilter = folderTarget.dataset.folderFilter;
    renderWindows();
    playSound("click");
    return;
  }

  const windowControl = event.target.closest("[data-window-action]");
  if (windowControl) {
    const winElement = windowControl.closest("[data-window-id]");
    const id = winElement && winElement.dataset.windowId;
    if (!id) return;
    const action = windowControl.dataset.windowAction;
    if (action === "close") closeWindow(id);
    if (action === "minimize") minimizeWindow(id);
    if (action === "maximize") toggleMaximize(id);
    return;
  }

  const taskbarTarget = event.target.closest("[data-taskbar-window]");
  if (taskbarTarget) {
    const id = taskbarTarget.dataset.taskbarWindow;
    const win = windows.get(id);
    if (!win) return;
    if (!win.minimized && win.z === zCounter) {
      win.minimized = true;
    } else {
      win.minimized = false;
      focusWindow(id);
    }
    renderWindows();
    return;
  }

  const closeDrawer = event.target.closest("[data-close-drawer]");
  if (closeDrawer) {
    if (closeDrawer.dataset.closeDrawer === "notifications") dom.notificationCenter.hidden = true;
    if (closeDrawer.dataset.closeDrawer === "assistant") dom.assistantPanel.hidden = true;
    return;
  }

  const promptButton = event.target.closest("[data-assistant-prompt]");
  if (promptButton) {
    const prompt = promptButton.dataset.assistantPrompt;
    addAssistantMessage("user", prompt);
    addAssistantMessage("bot", answerAssistant(prompt));
    playSound("notify");
    return;
  }

  const winElement = event.target.closest("[data-window-id]");
  if (winElement) {
    focusWindow(winElement.dataset.windowId);
    renderWindows();
    return;
  }

  const ctxAction = event.target.closest("[data-ctx-action]");
  if (ctxAction) {
    const action = ctxAction.dataset.ctxAction;
    const target = ctxAction.dataset.ctxTarget;
    const winId = ctxAction.dataset.ctxWindow;
    if (action === "open" && target) openWindow(target);
    if (action === "maximize" && winId) toggleMaximize(winId);
    if (action === "minimize" && winId) minimizeWindow(winId);
    if (action === "close" && winId) closeWindow(winId);
    if (action === "shutdown") triggerShutdown();
    const ctxMenu = document.getElementById("contextMenu");
    if (ctxMenu) ctxMenu.remove();
    return;
  }

  const resumePrint = event.target.closest("[data-resume-print]");
  if (resumePrint) {
    openResumeWindow();
    return;
  }

  if (!event.target.closest(".start-menu") && !event.target.closest("#startButton")) {
    dom.startMenu.hidden = true;
  }
}

function handlePointerDown(event) {
  const winElement = event.target.closest("[data-window-id]");
  if (!winElement) return;
  const id = winElement.dataset.windowId;
  const win = windows.get(id);
  if (!win) return;
  focusWindow(id);
  winElement.style.zIndex = String(win.z);
  const resizeHandle = event.target.closest("[data-resize-handle]");
  if (resizeHandle) {
    startResize(event, win);
    return;
  }
  if (event.target.closest("[data-drag-handle]") && !event.target.closest(".window-controls")) {
    startDrag(event, win);
  }
}

function handleSubmit(event) {
  const terminalForm = event.target.closest("[data-terminal-form]");
  if (terminalForm) {
    event.preventDefault();
    const input = terminalForm.querySelector("input");
    processTerminalCommand(input.value);
    return;
  }

  const contactForm = event.target.closest("[data-contact-form]");
  if (contactForm) {
    event.preventDefault();
    const name = (contactForm.querySelector('[name="name"]').value || "").trim();
    const email = (contactForm.querySelector('[name="email"]').value || "").trim();
    const message = (contactForm.querySelector('[name="message"]').value || "").trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`, "_self");
    contactForm.reset();
    pushNotification("Message ready", `Your email client has been opened with the message pre-filled for ${profile.email}.`);
    addAssistantMessage("bot", `Your email client opened with the message ready to send to ${profile.email}. Just hit Send!`);
    return;
  }

  if (event.target === dom.assistantForm) {
    event.preventDefault();
    const prompt = dom.assistantInput.value.trim();
    if (!prompt) return;
    dom.assistantInput.value = "";
    addAssistantMessage("user", prompt);
    addAssistantMessage("bot", answerAssistant(prompt));
    playSound("notify");
  }
}

function handleKeydown(event) {
  if (!bootDone && event.key === "Enter") {
    completeBoot();
    return;
  }

  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    const terminalInput = document.getElementById("terminalInput");
    if (document.activeElement === terminalInput) {
      event.preventDefault();
      if (event.key === "ArrowUp") {
        if (commandHistoryIndex > 0) commandHistoryIndex--;
        terminalInput.value = commandHistoryList[commandHistoryIndex] || "";
      } else {
        commandHistoryIndex = Math.min(commandHistoryIndex + 1, commandHistoryList.length);
        terminalInput.value = commandHistoryIndex < commandHistoryList.length ? commandHistoryList[commandHistoryIndex] : "";
      }
      return;
    }
  }

  if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
    keyBuffer = (keyBuffer + event.key.toLowerCase()).slice(-12);
    if (keyBuffer.includes("kernel")) {
      openWindow("easter");
      keyBuffer = "";
    }
  }

  if ((event.ctrlKey || event.metaKey) && event.code === "Space") {
    event.preventDefault();
    dom.assistantPanel.hidden = !dom.assistantPanel.hidden;
    return;
  }

  if ((event.ctrlKey || event.metaKey) && event.key === "`") {
    event.preventDefault();
    openWindow("terminal");
    return;
  }

  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === "p") {
    event.preventDefault();
    openWindow("explorer");
    return;
  }

  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === "m") {
    event.preventDefault();
    openWindow("monitor");
    return;
  }

  if (event.key === "Escape") {
    dom.assistantPanel.hidden = true;
    dom.notificationCenter.hidden = true;
    dom.startMenu.hidden = true;
    const ctxMenu = document.getElementById("contextMenu");
    if (ctxMenu) ctxMenu.remove();
  }
}

function setupCanvas() {
  const ctx = dom.canvas.getContext("2d");
  const particles = [];
  const particleCount = 86;

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    dom.canvas.width = Math.floor(window.innerWidth * ratio);
    dom.canvas.height = Math.floor(window.innerHeight * ratio);
    dom.canvas.style.width = `${window.innerWidth}px`;
    dom.canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function seed() {
    particles.length = 0;
    for (let i = 0; i < particleCount; i += 1) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: 0.8 + Math.random() * 1.8,
        hue: Math.random() > 0.72 ? "amber" : "cyan"
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
      if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;
      ctx.beginPath();
      ctx.fillStyle = particle.hue === "amber" ? "rgba(246, 184, 81, 0.72)" : "rgba(57, 213, 255, 0.72)";
      ctx.shadowColor = particle.hue === "amber" ? "rgba(246, 184, 81, 0.55)" : "rgba(57, 213, 255, 0.55)";
      ctx.shadowBlur = 10;
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      ctx.fill();

      for (let j = index + 1; j < particles.length; j += 1) {
        const other = particles[j];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 118) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(57, 213, 255, ${0.12 * (1 - distance / 118)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }
    });
    ctx.shadowBlur = 0;
    window.requestAnimationFrame(draw);
  }

  resize();
  seed();
  draw();
  window.addEventListener("resize", () => {
    resize();
    seed();
  });
}

function handleContextMenu(event) {
  event.preventDefault();
  const existing = document.getElementById("contextMenu");
  if (existing) existing.remove();

  const winElement = event.target.closest("[data-window-id]");
  const menu = document.createElement("div");
  menu.id = "contextMenu";
  menu.className = "context-menu";
  menu.style.left = `${Math.min(event.clientX, window.innerWidth - 200)}px`;
  menu.style.top = `${Math.min(event.clientY, window.innerHeight - 200)}px`;

  if (winElement) {
    const winId = winElement.dataset.windowId;
    menu.innerHTML = `
      <button type="button" data-ctx-action="maximize" data-ctx-window="${winId}">⬜ Maximize</button>
      <button type="button" data-ctx-action="minimize" data-ctx-window="${winId}">⬇ Minimize</button>
      <hr />
      <button type="button" data-ctx-action="close" data-ctx-window="${winId}">✕ Close</button>
    `;
  } else {
    menu.innerHTML = `
      <button type="button" data-ctx-action="open" data-ctx-target="terminal">⌨ Open Terminal</button>
      <button type="button" data-ctx-action="open" data-ctx-target="explorer">📁 Open Projects</button>
      <button type="button" data-ctx-action="open" data-ctx-target="about">👤 About</button>
      <button type="button" data-ctx-action="open" data-ctx-target="contact">✉ Contact</button>
      <hr />
      <button type="button" data-ctx-action="shutdown">⏻ Shutdown</button>
    `;
  }

  document.body.appendChild(menu);
  const closeMenu = (e) => {
    if (!e.target.closest(".context-menu")) {
      menu.remove();
      document.removeEventListener("click", closeMenu);
    }
  };
  window.setTimeout(() => document.addEventListener("click", closeMenu), 10);
}

function init() {
  renderNotifications();
  renderAssistant();
  updateClock();
  updateLiveStats();
  setupCanvas();
  startBoot();
  window.setInterval(updateClock, 1000);
  window.setInterval(updateLiveStats, 1700);
  window.setInterval(spawnLogLine, 1300);

  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("pointerdown", handlePointerDown);
  document.addEventListener("pointermove", handlePointerMove);
  document.addEventListener("pointerup", stopPointerInteraction);
  document.addEventListener("pointercancel", stopPointerInteraction);
  document.addEventListener("submit", handleSubmit);
  document.addEventListener("keydown", handleKeydown);
  document.addEventListener("contextmenu", handleContextMenu);

  dom.startButton.addEventListener("click", () => {
    dom.startMenu.hidden = !dom.startMenu.hidden;
    playSound("click");
  });

  updateNotificationBadge();
  dom.notificationToggle.addEventListener("click", () => {
    dom.notificationCenter.hidden = !dom.notificationCenter.hidden;
    if (!dom.notificationCenter.hidden) {
      unreadNotifications = 0;
      updateNotificationBadge();
    }
    playSound("click");
  });

  dom.assistantToggle.addEventListener("click", () => {
    dom.assistantPanel.hidden = !dom.assistantPanel.hidden;
    if (!dom.assistantPanel.hidden) dom.assistantInput.focus();
    playSound("click");
  });

  dom.soundToggle.classList.add("is-active");
  dom.soundToggle.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    dom.soundToggle.innerHTML = soundEnabled
      ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg><span>SFX</span>`
      : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg><span>OFF</span>`;
    dom.soundToggle.classList.toggle("is-active", soundEnabled);
    playSound("click");
  });

  dom.shutdownButton.addEventListener("click", triggerShutdown);
  dom.rebootButton.addEventListener("click", rebootWorkspace);
  dom.startButton.addEventListener("dblclick", () => openWindow("easter"));
}

init();
