import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="mb-12 flex justify-start gap-8 md:gap-12">
      <div className="shrink-0">
        {!imageError ? (
          <motion.img
            layoutId="profile-picture"
            src="/images/ProfilePicMallorca.jpeg"
            alt="Portrait of Devyn Weir"
            transition={{
              layout: {
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="h-[693px] w-[453px] rounded-2xl object-cover shadow-md ring-1 ring-gray-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-64 w-64 items-center justify-center rounded-2xl bg-gray-200 text-3xl font-semibold text-gray-600 shadow-md ring-1 ring-gray-300">
            DW
          </div>
        )}
      </div>
    </section>
  );
}
