'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { Building2, Earth, GraduationCap, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export const StatisticCards = () => {
  return (
    <div className="grid w-full grid-cols-1 place-content-center items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-4">
      <TiltCard
        title="40+"
        description="Cơ sở trên toàn quốc"
        icon={<Building2 className="h-16 w-16 text-center text-violet-600" />}
      />
      <TiltCard
        title="40.000+"
        description="Học sinh đã tốt nghiệp và đi ra thế giới từ Genius Junior"
        icon={<GraduationCap className="h-16 w-16 text-center text-blue-600" />}
      />
      <TiltCard
        title="16.5%"
        description="Học sinh đang học tập và làm việc tại 12 quốc gia trên thế giới"
        icon={<Earth className="h-16 w-16 text-center text-green-600" />}
      />
      <TiltCard
        title="96%"
        description="Tỷ lệ học viên có việc làm sau khi tốt nghiệp"
        icon={<Sparkles className="h-16 w-16 text-center text-yellow-600" />}
      />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({
  title = 'HOVER ME',
  description = 'Description',
  icon,
}: {
  title?: string;
  description?: string;
  icon?: JSX.Element;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className="relative h-96 w-full rounded-xl bg-gradient-to-br from-red-300 to-violet-300"
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-4 flex flex-col items-center justify-between rounded-xl bg-white/70 px-4 py-8 text-black shadow-lg backdrop-blur"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          {icon}
          <p
            style={{
              transform: 'translateZ(50px)',
            }}
            className="bg-gradient-to-br from-red-500 via-violet-600 to-sky-400 bg-clip-text py-1 text-center text-4xl font-bold text-[#53abee] text-transparent"
          >
            {title}
          </p>
        </div>
        <p
          style={{
            transform: 'translateZ(25px)',
          }}
          className="text-center text-lg font-semibold"
        >
          {description}
        </p>
        <div />
      </div>
    </motion.div>
  );
};
