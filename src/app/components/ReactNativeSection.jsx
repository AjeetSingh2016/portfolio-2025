import { motion } from "framer-motion";
import {
  FaReact,
} from "react-icons/fa";

// const reactNativeApps = [
//   {
//     title: "QuickSync",
//     description:
//       "Sync links and tasks across devices in real time with speed and reliability.",
//     url: "https://play.google.com/store/apps/dev?id=6755526526590570884",
//     tags: ["React Native", "Realtime"],
//     icon: <FaMobileAlt className="text-purple-400" />,
//   },
//   {
//     title: "Automatic Expense Manager",
//     description:
//       "Track and manage daily expenses efficiently with a clean Android-first UX.",
//     url: "https://flawwless-showcase.vercel.app/home",
//     tags: ["Finance", "Android"],
//     icon: <FaWallet className="text-cyan-400" />,
//   },
// //   {
// //     title: "Flawwless – Legal Education",
// //     description:
// //       "Mobile-first legal education app simplifying complex legal concepts.",
// //     url: "https://flawwless-showcase-second.vercel.app/home",
// //     tags: ["EdTech", "Legal"],
// //     icon: <FaBalanceScale className="text-purple-400" />,
// //   },
//   {
//     title: "Device Info",
//     description:
//       "Deep insights into Android hardware, sensors, and system data.",
//     url: "https://play.google.com/store/apps/details?id=com.systeminformation2024",
//     tags: ["Android", "System"],
//     icon: <FaMicrochip className="text-cyan-400" />,
//   },
//   {
//     title: "QR Code Scanner & Generator",
//     description:
//       "Fast and lightweight QR code scanning and generation app.",
//     url: "https://play.google.com/store/apps/details?id=com.qrcodeproject2024",
//     tags: ["Utility", "QR"],
//     icon: <FaQrcode className="text-purple-400" />,
//   },
//   {
//     title: "Taskify",
//     description:
//       "Task management app focused on productivity and daily planning.",
//     url: "https://play.google.com/store/apps/details?id=com.ajeet2016.taskManagment",
//     tags: ["Tasks", "Productivity"],
//     icon: <FaTasks className="text-cyan-400" />,
//   },
//   {
//     title: "Orbital – Space Explorer",
//     description:
//       "Educational app to explore planets, missions, and space science.",
//     url: "https://play.google.com/store/apps/details?id=com.ajeet2016.spaceexplorer",
//     tags: ["Space", "Education"],
//     icon: <FaRocket className="text-purple-400" />,
//   },
// ];

const reactNativeApps = [
  {
    title: "QuickSync",
    description:
      "Sync links and tasks across devices in real time with speed and reliability.",
    url: "https://play.google.com/store/apps/dev?id=6755526526590570884",
    tags: ["React Native", "Realtime"],
    iconUrl:
      "https://play-lh.googleusercontent.com/ucbLQKPE2NnRPk4CDbXLrVAUlfo1CvKqAew9sCczEtKz-0UKFiM0pzvIebpUWaqVwRE=w480-h960-rw",
  },
  {
    title: "Automatic Expense Manager",
    description:
      "Track and manage daily expenses efficiently with a clean Android-first UX.",
    url: "https://portfolio-2025-singh.s3.us-east-1.amazonaws.com/Apk/Expense+Manager.rar",
    tags: ["Finance", "Android"],
    iconUrl: "https://img.icons8.com/fluency/96/receipt.png",
  },
  {
    title: "Device Info",
    description:
      "Deep insights into Android hardware, sensors, and system data.",
    url: "https://play.google.com/store/apps/details?id=com.systeminformation2024",
    tags: ["Android", "System"],
    iconUrl:
      "https://play-lh.googleusercontent.com/0gBVjkHHHfghwLoQ7pWwiFSKerSjzFI_rO3Z9too9oPEtMrh8-UuPrb0-HGcyGivHw=w480-h960-rw",
  },
  {
    title: "QR Code Scanner & Generator",
    description: "Fast and lightweight QR code scanning and generation app.",
    url: "https://play.google.com/store/apps/details?id=com.qrcodeproject2024",
    tags: ["Utility", "QR"],
    iconUrl:
      "https://play-lh.googleusercontent.com/TDMTbmTkFnZ3oK5cQ-_FAAQ5hev42xt0u8GLXPVpl05K_8qxK5PL8K1LPY74D8EFn6ec=w480-h960-rw",
  },
  {
    title: "Taskify",
    description:
      "Task management app focused on productivity and daily planning.",
    url: "https://play.google.com/store/apps/details?id=com.ajeet2016.taskManagment",
    tags: ["Tasks", "Productivity"],
    iconUrl:
      "https://play-lh.googleusercontent.com/N0vlvihkxNs9_szj6KoxPlAMJuvsXLJL4q48oceljH8rfOTHlhOkTbp96gwOxwKyvUVh=w480-h960-rw",
  },
  {
    title: "Orbital – Space Explorer",
    description:
      "Educational app to explore planets, missions, and space science.",
    url: "https://play.google.com/store/apps/details?id=com.ajeet2016.spaceexplorer",
    tags: ["Space", "Education"],
    iconUrl:
      "https://play-lh.googleusercontent.com/Z75ShynWoKEBSBfSpSjUodBUFEl8V5Z7UDIBDoQI00YStDut900tI7D92lTODT9WW230=w480-h960-rw",
  },
];

export default function ReactNativeSection({
  containerVariants,
  itemVariants,
}) {
  return (
    <motion.section
      className="mb-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-xl md:text-3xl font-bold mb-6 md:mb-10 flex items-center"
        variants={itemVariants}
      >
        <FaReact className="mr-2 md:mr-3 text-cyan-400 text-lg md:text-2xl" />
        React Native Apps
      </motion.h3>

      {/* 2 × 3 Grid */}
      <div
        className="
  grid
  grid-cols-2 grid-rows-3        /* Small screens: 2 × 3 */
  md:grid-cols-3 md:grid-rows-2  /* Medium & large screens: 3 × 2 */
  gap-4
  px-3 md:px-4 lg:px-6
  max-w-5xl mx-auto
"
      >
        {reactNativeApps.map((app, index) => (
          <motion.a
            key={index}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-cyan-500/40 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -2 }}
          >
            <div className="p-4">
              {/* Icon */}
              <div className="w-11 h-11 rounded-md  flex items-center justify-center mb-3 overflow-hidden">
                <img
                  src={app.iconUrl}
                  alt={`${app.title} app icon`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 line-clamp-1">
                {app.title}
              </h4>

              <p className="text-[11px] text-gray-400 mt-1 line-clamp-2">
                {app.description}
              </p>

              <div className="flex flex-wrap gap-1 mt-2">
                {app.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[9px] px-1.5 py-0.5 bg-gray-700/50 rounded-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
        
      </div>
      {/* Optional CTA */}
  <motion.div
    className="mt-6 text-center"
    variants={itemVariants}
  >
    <a
      href="https://play.google.com/store/apps/dev?id=6755526526590570884"
      target="_blank"
      className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition"
    >
      View all apps on Play Store →
    </a>
  </motion.div>
    </motion.section>
  );
}
