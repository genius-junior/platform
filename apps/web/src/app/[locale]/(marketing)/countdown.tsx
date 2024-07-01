'use client';

import { useAnimate } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

const COUNTDOWN_FROM = '2024-07-07';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = () => {
  const t = useTranslations();

  return (
    <div className="mx-auto flex w-full items-center rounded-lg border">
      <CountdownItem unit="Day" text={t('common.days')} />
      <div className="bg-border h-24 w-[0.5px]" />
      <CountdownItem unit="Hour" text={t('common.hours')} />
      <div className="bg-border h-24 w-[0.5px]" />
      <CountdownItem unit="Minute" text={t('common.minutes')} />
      <div className="bg-border h-24 w-[0.5px]" />
      <CountdownItem unit="Second" text={t('common.seconds')} />
    </div>
  );
};

const CountdownItem = ({
  unit,
  text,
}: {
  unit: 'Day' | 'Hour' | 'Minute' | 'Second';
  text: string;
}) => {
  const { ref, time } = useTimer(unit);

  return (
    <div className="flex h-24 w-1/4 flex-col items-center justify-center gap-1 font-mono md:h-36 md:gap-2">
      <div className="relative w-full overflow-hidden text-center">
        <span
          ref={ref}
          className="text-foreground block text-2xl font-medium md:text-4xl lg:text-6xl xl:text-7xl"
        >
          {time}
        </span>
      </div>
      <span className="text-foreground/70 text-xs font-light md:text-sm lg:text-base">
        {text}
      </span>
    </div>
  );
};

export default ShiftingCountdown;

// NOTE: Framer motion exit animations can be a bit buggy when repeating
// keys and tabbing between windows. Instead of using them, we've opted here
// to build our own custom hook for handling the entrance and exit animations
const useTimer = (unit: 'Day' | 'Hour' | 'Minute' | 'Second') => {
  const [ref, animate] = useAnimate();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeRef = useRef(0);

  const [time, setTime] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    let newTime = 0;

    if (unit === 'Day') {
      newTime = Math.floor(distance / DAY);
    } else if (unit === 'Hour') {
      newTime = Math.floor((distance % DAY) / HOUR);
    } else if (unit === 'Minute') {
      newTime = Math.floor((distance % HOUR) / MINUTE);
    } else {
      newTime = Math.floor((distance % MINUTE) / SECOND);
    }

    if (newTime !== timeRef.current) {
      // Exit animation
      await animate(
        ref.current,
        { y: ['0%', '-50%'], opacity: [1, 0] },
        { duration: 0.35 }
      );

      timeRef.current = newTime;
      setTime(newTime);

      // Enter animation
      await animate(
        ref.current,
        { y: ['50%', '0%'], opacity: [0, 1] },
        { duration: 0.35 }
      );
    }
  };

  return { ref, time };
};
