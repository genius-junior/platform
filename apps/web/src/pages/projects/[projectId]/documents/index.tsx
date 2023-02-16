import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import useSWR from 'swr';
import NestedLayout from '../../../../components/layouts/NestedLayout';
import { useAppearance } from '../../../../hooks/useAppearance';
import HeaderX from '../../../../components/metadata/HeaderX';
import { Divider } from '@mantine/core';
import { DocumentPlusIcon } from '@heroicons/react/24/solid';
import { Document } from '../../../../types/primitives/Document';
import Link from 'next/link';
import { showNotification } from '@mantine/notifications';

const ProjectDocumentsPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const { data: project } = useSWR(
    projectId ? `/api/projects/${projectId}` : null
  );

  const { setRootSegment } = useAppearance();

  useEffect(() => {
    setRootSegment(
      project?.orgs?.id
        ? [
            {
              content: project?.orgs?.name || 'Unnamed Workspace',
              href: `/orgs/${project.orgs.id}`,
            },
            {
              content: 'Projects',
              href: `/orgs/${project?.orgs?.id}/projects`,
            },
            {
              content: project?.name || 'Untitled Project',
              href: `/projects/${projectId}`,
            },
            { content: 'Documents', href: `/projects/${projectId}/documents` },
          ]
        : []
    );
  }, [
    projectId,
    project?.orgs?.id,
    project?.orgs?.name,
    project?.name,
    setRootSegment,
  ]);

  const { data: documents, error: documentsError } = useSWR<Document[]>(
    projectId ? `/api/projects/${projectId}/documents` : null
  );

  const addDocument = async () => {
    const res = await fetch(`/api/projects/${projectId}/documents`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: '',
      }),
    });

    if (!res.ok) {
      showNotification({
        title: 'Error',
        message: 'An error occurred while creating the document.',
        color: 'red',
      });
      return;
    }

    const { id } = await res.json();
    router.push(`/projects/${projectId}/documents/${id}`);
  };

  return (
    <>
      <HeaderX label={`Documents – ${project?.name || 'Untitled Project'}`} />

      {projectId && (
        <>
          <div className="rounded-lg bg-zinc-900 p-4">
            <h1 className="text-2xl font-bold">Documents</h1>
            <p className="text-zinc-400">
              Store text-based information with enhanced formatting and
              collaboration.
            </p>
          </div>
        </>
      )}

      <Divider className="my-4" />

      <button
        onClick={addDocument}
        className="flex items-center gap-1 rounded bg-blue-300/20 px-4 py-2 font-semibold text-blue-300 transition hover:bg-blue-300/10"
      >
        New document <DocumentPlusIcon className="h-4 w-4" />
      </button>

      <div className="mb-8 mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {documents &&
          documents?.map((document) => (
            <Link
              href={`/projects/${projectId}/documents/${document.id}`}
              key={document.id}
              className="relative rounded-lg border border-zinc-800/80 bg-[#19191d] p-4 transition hover:bg-zinc-800/80"
            >
              <p className="font-semibold lg:text-lg xl:text-xl">
                {document.name || 'Untitled Document'}
              </p>
            </Link>
          ))}
      </div>
    </>
  );
};

ProjectDocumentsPage.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout mode="project">{page}</NestedLayout>;
};

export default ProjectDocumentsPage;