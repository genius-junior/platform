import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { GetServerSidePropsContext } from 'next';
import { ReactElement, useEffect, useState } from 'react';
import DayTitle from '../../components/calendar/DayTitle';
import Layout from '../../components/layout/Layout';
import { useAppearance } from '../../hooks/useAppearance';
import { useUserData } from '../../hooks/useUserData';
import { useUserList } from '../../hooks/useUserList';
import { PageWithLayoutProps } from '../../types/PageWithLayoutProps';
import CalendarHeader from '../../components/calendar/CalendarHeader';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};

const CalendarPage: PageWithLayoutProps = () => {
  const {
    setRootSegment,
    changeLeftSidebarSecondaryPref,
    disablePadding,
    enablePadding,
  } = useAppearance();
  const { updateUsers } = useUserList();
  const { data } = useUserData();

  useEffect(() => {
    changeLeftSidebarSecondaryPref('visible');
    disablePadding();

    setRootSegment({
      content: 'Calendar',
      href: '/expenses',
    });

    return () => {
      enablePadding();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) updateUsers([data]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const [date, setDate] = useState(new Date());

  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const setToday = () => {
    setDate(new Date());
  };

  const setPreviousWeek = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 7);
    setDate(newDate);
  };

  const setNextWeek = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 7);
    setDate(newDate);
  };

  const getMonday = () => {
    const day = date.getDay() || 7;
    if (day !== 1) {
      date.setHours(-24 * (day - 1));
    }
    return date;
  };

  // get other date from monday to sunday
  const getWeekdays = () => {
    const monday = getMonday();
    const days = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(monday);
      day.setDate(day.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const shortMonthName = new Intl.DateTimeFormat('en-US', { month: 'long' })
    .format;
  const longMonth = shortMonthName(date); // "July"

  const isDev = process.env.NODE_ENV === 'development';

  if (!isDev)
    return (
      <div className="h-full min-h-full w-full p-8">
        <div className="flex h-full w-full items-center justify-center rounded-lg border border-purple-300/20 bg-purple-300/10 text-6xl font-semibold text-purple-300">
          Under construction 🚧
        </div>
      </div>
    );

  const title = `${longMonth} ${date.getFullYear()}`;

  return (
    <div className="flex h-full w-full flex-col border-zinc-800 bg-zinc-900 p-6">
      <CalendarHeader
        title={title}
        prevHandler={setPreviousWeek}
        nextHandler={setNextWeek}
        todayHandler={setToday}
      />

      <div>
        <div className="float-right grid w-[93%] grid-cols-7">
          {weekdays.map((weekday, index) => (
            <div key={index}>
              <DayTitle date={getWeekdays()[index]} weekday={weekday} />
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-y-scroll text-center scrollbar-none">
        <div className="float-left grid w-[7%] grid-rows-[24]">
          {Array.from(Array(23).keys()).map((hour, index) => (
            <div
              key={index}
              className="relative flex h-20 w-full min-w-fit items-center justify-end border-b border-zinc-800 text-xl font-semibold"
            >
              <span className="absolute right-0 bottom-0 px-2">
                {hour + 1}:00
              </span>
            </div>
          ))}
        </div>
        <div className="float-right grid w-[93%] grid-cols-7">
          {weekdays.map((_, index) => (
            <div key={index}>
              <div className="grid grid-rows-[24]">
                {Array.from(Array(24).keys()).map((index) => (
                  <div
                    key={index}
                    className="flex h-20 items-center justify-center border-l border-b border-zinc-800"
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

CalendarPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CalendarPage;