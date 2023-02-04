import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Layout from './Layout';
import { useAppearance } from '../../hooks/useAppearance';
import { ActionIcon, Select } from '@mantine/core';
import { StarIcon } from '@heroicons/react/24/outline';
import { useOrgs } from '../../hooks/useOrganizations';

interface NestedLayoutProps {
  children: React.ReactNode;
  orgMode?: boolean;
}

const tabs = [
  {
    name: 'Overview',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Boards',
    href: '/boards',
  },
  {
    name: 'Members',
    href: '/members',
  },
  {
    name: 'Settings',
    href: '/settings',
  },
];

const NestedLayout: FC<NestedLayoutProps> = ({
  children,
  orgMode = true,
}: NestedLayoutProps) => {
  const router = useRouter();

  const {
    query: { orgId, projectId },
  } = router;

  const { segments } = useAppearance();
  const rootTabs = orgMode
    ? tabs
    : tabs.filter((tab) => tab.name !== 'Projects');

  const rootPath = orgMode ? `/orgs/${orgId}` : `/projects/${projectId}`;
  const { orgs } = useOrgs();

  const generateRoute = (orgId: string | null) => {
    if (!orgId) return '/';
    const segments = router.asPath.split('/');
    return segments.length > 2
      ? `/${segments[1]}/${orgId}/${segments?.[3] || ''}`
      : `/${segments[1]}/${orgId}`;
  };

  return (
    <Layout>
      <nav className="absolute left-0 right-0 border-b border-zinc-800">
        <div className="flex items-center gap-4 py-4 px-8 lg:mx-48">
          <Select
            placeholder="Select workspace"
            value={(orgId || '') as string}
            onChange={(id) => router.push(generateRoute(id))}
            data={
              orgs?.current
                ? orgs.current.map((org) => ({
                    label: org.name,
                    value: org.id,
                  }))
                : []
            }
          />

          <ActionIcon color="yellow">
            <StarIcon className="h-6 w-6" />
          </ActionIcon>
        </div>
        <div className="scrollbar-none flex gap-4 overflow-x-auto px-8 transition-all duration-300 lg:mx-56 lg:px-0">
          {rootTabs.map((tab) => (
            <Link
              key={tab.name}
              href={`${rootPath}${tab.href}`}
              className={`group rounded-t-lg border-b-2 pb-2 ${
                segments &&
                segments.length > 0 &&
                (orgMode
                  ? segments
                      .map((segment) => segment.content)
                      .includes(tab.name)
                  : `${segments[2]?.content}` === tab.name)
                  ? 'border-zinc-300 text-zinc-300'
                  : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <div className="rounded px-4 py-1 font-semibold group-hover:bg-zinc-800">
                {tab.name}
              </div>
            </Link>
          ))}
        </div>
      </nav>
      <div className="my-32 mx-4 md:mx-8 lg:mx-16 xl:mx-32">{children}</div>
    </Layout>
  );
};

export default NestedLayout;
