// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS DATA
// Edit this file to update projects across the entire site.
// ─────────────────────────────────────────────────────────────────────────────

export type TagKind = 'sw' | 'hw' | 'prt';
export type Category = 'all' | 'fpga' | 'pcb' | 'firmware' | 'simulation';

export interface Tag {
  label: string;
  kind: TagKind;
}

export interface Project {
  id: string;
  title: string;
  type: string;          // Display label (e.g. "PCB Design · Embedded Systems")
  category: Category;    // Used for filter buttons on /projects
  date: string;
  description: string;
  bullets: string[];
  tags: Tag[];
  image?: string;        // Path relative to /public  (e.g. "assets/ece295-pcb.png")
  imageAlt?: string;
  github?: string;
  featured?: boolean;    // Show on homepage featured row
}

export const projects: Project[] = [
  {
    id: 'ece295-pcb',
    title: 'Custom Embedded Controller — ECE295',
    type: 'PCB Design · Embedded Systems · Hardware',
    category: 'pcb',
    date: '2025',
    featured: true,
    image: 'assets/ece295-pcb.png',   // !! drop your screenshot here !!
    imageAlt: 'ECE295 custom embedded controller PCB layout in Altium Designer showing SI5351, OLED, I2C, UART, JTAG interfaces',
    description:
      'Designed a full embedded system PCB from schematic to Gerbers in Altium Designer for ECE295 — featuring a microcontroller with multi-protocol peripheral integration across I²C, UART, and JTAG.',
    bullets: [
      'Integrated <strong>SI5351 programmable clock generator</strong> and OLED display driver via I²C bus (R_I2C1 / R_I2C2).',
      'Exposed <strong>JTAG debug port and UART interface</strong> for firmware development and in-circuit test access.',
      'Designed bypass/decoupling network (C1–C4), reset circuitry, and GPIO expansion headers (J6, J7).',
      'Included buzzer drivers (B1, B2), rotary encoders (R_EC1, R_EC2), and user-input switches with pull resistors.',
      'Routed dual-layer board with copper fills, via stitching, and signal-integrity-aware layout for clock and data lines.',
    ],
    tags: [
      { label: 'Altium Designer', kind: 'hw' },
      { label: 'PCB Layout',      kind: 'hw' },
      { label: 'Schematic Capture', kind: 'hw' },
      { label: 'I²C',             kind: 'prt' },
      { label: 'UART',            kind: 'prt' },
      { label: 'JTAG',            kind: 'prt' },
      { label: 'SI5351',          kind: 'sw' },
      { label: 'OLED',            kind: 'sw' },
      { label: 'Microcontroller', kind: 'sw' },
    ],
    github: 'https://github.com/apiwichs',
  },

  {
    id: 'fpga-maze',
    title: 'Wayout — FPGA First-Person Maze Game',
    type: 'FPGA · Digital Design · RTL',
    category: 'fpga',
    date: 'Nov. 2025',
    featured: true,
    description:
      'Real-time 3D-perspective maze game on DE1-SoC, built over 3 weeks in Verilog with a complete VGA graphics pipeline and FSM-driven game logic.',
    bullets: [
      'Designed <strong>clock dividers, pixel-timing generators, and double-buffered VGA output</strong> for tear-free 60 Hz rendering.',
      'Implemented FSM-based control logic with shift registers for player movement, wall detection, and state transitions.',
      'Verified system behavior via <strong>ModelSim waveform analysis</strong> and cycle-accurate register-level simulation.',
      'Geometric shape rendering and grid-based player snapping for pseudo-3D perspective projection.',
    ],
    tags: [
      { label: 'Verilog',      kind: 'hw' },
      { label: 'DE1-SoC',      kind: 'hw' },
      { label: 'Quartus',      kind: 'hw' },
      { label: 'ModelSim',     kind: 'sw' },
      { label: 'FSM',          kind: 'sw' },
      { label: 'VGA Timing',   kind: 'prt' },
    ],
    github: 'https://github.com/apiwichs',
  },

  {
    id: 'cpu-simulator',
    title: '5-Stage CPU Pipeline Performance Simulator',
    type: 'Computer Architecture · Simulation',
    category: 'simulation',
    date: '2025',
    description:
      'Cycle-accurate software model of a 5-stage RISC pipeline (IF/ID/EX/MEM/WB) with hazard detection, stall injection, and per-cycle performance analytics.',
    bullets: [
      'Implemented <strong>RAW data hazard detection and stall insertion logic</strong> to model pipeline bubbles and dependency penalties.',
      'Computed CPI, stall rate, and stage occupancy from cycle-level execution traces using NumPy and Pandas.',
      'Generated per-cycle traces and visualized <strong>pipeline occupancy and stall behavior</strong> with Matplotlib.',
    ],
    tags: [
      { label: 'Python',                kind: 'sw' },
      { label: 'NumPy / Pandas',        kind: 'sw' },
      { label: 'Matplotlib',            kind: 'sw' },
      { label: 'Computer Architecture', kind: 'hw' },
      { label: 'CPI Analysis',          kind: 'sw' },
    ],
    github: 'https://github.com/apiwichs',
  },

  // ─── ADD MORE PROJECTS HERE ───────────────────────────────────────────────
  // {
  //   id: 'my-new-project',
  //   title: 'Project Title',
  //   type: 'Category Label',
  //   category: 'firmware',   // 'fpga' | 'pcb' | 'firmware' | 'simulation'
  //   date: '2026',
  //   description: 'Short paragraph description.',
  //   bullets: ['Bullet one.', 'Bullet two.'],
  //   tags: [{ label: 'C', kind: 'sw' }, { label: 'STM32', kind: 'hw' }],
  //   github: 'https://github.com/apiwichs/...',
  // },
];
