import * as motion from "motion/react-client";

const BrandingIllustration = () => (
  <motion.svg
    viewBox="0 0 400 240"
    className="w-full h-full"
    initial="initial"
    whileHover="hover"
  >
    <defs>
      <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="400" height="240" fill="transparent" />
    <motion.circle
      cx="200"
      cy="120"
      r="80"
      fill="url(#grad1)"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
    <motion.g
      variants={{ hover: { y: -5, x: 5 } }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <path d="M180 80 l40 20 v40 l-40 -20 z" fill="#ffffff" />
      <path d="M220 100 l40 -20 v40 l-40 20 z" fill="#a1a1aa" />
      <path d="M180 80 l40 -20 l40 20 l-40 20 z" fill="#e4e4e7" />
    </motion.g>
    <motion.g
      variants={{ hover: { y: 5, x: -5 } }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <path d="M140 140 l30 15 v30 l-30 -15 z" fill="#3f3f46" />
      <path d="M170 155 l30 -15 v30 l-30 15 z" fill="#18181b" />
      <path d="M140 140 l30 -15 l30 15 l-30 15 z" fill="#27272a" />
    </motion.g>
    <text
      x="24"
      y="216"
      fill="#3f3f46"
      fontSize="8"
      fontFamily="monospace"
      className="tracking-[0.2em]"
    >
      SYSTEMS_NOT_PIXELS
    </text>
  </motion.svg>
);

const WebIllustration = () => (
  <motion.svg
    viewBox="0 0 400 240"
    className="w-full h-full"
    whileHover="hover"
  >
    <rect
      x="40"
      y="40"
      width="320"
      height="160"
      rx="2"
      fill="#09090b"
      stroke="#18181b"
      strokeWidth="1"
    />
    <circle cx="60" cy="55" r="2.5" fill="#ef4444" />
    <circle cx="70" cy="55" r="2.5" fill="#27272a" />
    <circle cx="80" cy="55" r="2.5" fill="#27272a" />
    <motion.rect
      x="60"
      y="80"
      width="100"
      height="80"
      rx="1"
      fill="#18181b"
      variants={{ hover: { x: 5 } }}
    />
    <motion.rect
      x="180"
      y="80"
      width="140"
      height="6"
      rx="1"
      fill="#ef4444"
      opacity="0.8"
      variants={{ hover: { width: 150 } }}
    />
    <rect x="180" y="95" width="120" height="3" rx="1" fill="#27272a" />
    <rect x="180" y="105" width="80" height="3" rx="1" fill="#27272a" />
    <rect
      x="180"
      y="135"
      width="60"
      height="25"
      rx="1"
      stroke="#27272a"
      fill="transparent"
    />
    <rect
      x="250"
      y="135"
      width="60"
      height="25"
      rx="1"
      fill="#ef4444"
      opacity="0.1"
    />
  </motion.svg>
);

const UIIllustration = () => (
  <motion.svg
    viewBox="0 0 400 240"
    className="w-full h-full"
    whileHover="hover"
  >
    <line x1="40" y1="180" x2="360" y2="180" stroke="#18181b" strokeWidth="1" />
    {[60, 100, 140, 180, 220].map((x, i) => (
      <motion.rect
        key={x}
        x={x}
        y={180 - (40 + i * 15)}
        width="24"
        height={40 + i * 15}
        fill={i % 2 === 0 ? "#ef4444" : "#3f3f46"}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        style={{ originY: 1 }}
        transition={{ delay: 0.5 + i * 0.1 }}
      />
    ))}
    <motion.circle
      cx="320"
      cy="100"
      r="30"
      stroke="#ef4444"
      strokeWidth="1"
      fill="transparent"
      strokeDasharray="4 4"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
  </motion.svg>
);

const FullStackIllustration = () => (
  <motion.svg
    viewBox="0 0 400 240"
    className="w-full h-full"
    whileHover="hover"
  >
    <rect
      x="40"
      y="40"
      width="320"
      height="160"
      rx="4"
      fill="#020203"
      stroke="#18181b"
    />
    <text
      x="60"
      y="85"
      fill="#ef4444"
      fontSize="14"
      fontFamily="monospace"
      fontWeight="bold"
    >
      const
    </text>
    <text x="115" y="85" fill="#ffffff" fontSize="14" fontFamily="monospace">
      node = export
    </text>
    <motion.rect
      x="60"
      y="105"
      width="1"
      height="16"
      fill="#ef4444"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 0.8, repeat: Infinity }}
    />
    <motion.g variants={{ hover: { x: 10 } }}>
      <rect x="280" y="150" width="60" height="18" rx="9" fill="#18181b" />
      <text
        x="292"
        y="162"
        fill="#ef4444"
        fontSize="7"
        fontFamily="monospace"
        fontWeight="bold"
      >
        SYSTEM_ACT
      </text>
    </motion.g>
  </motion.svg>
);
