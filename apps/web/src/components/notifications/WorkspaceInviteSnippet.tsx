'use client';

import { toast } from '.@repo/ui/components/ui/use-toast';
import { Workspace } from '@/types/primitives/Workspace';
import moment from 'moment';
import 'moment/locale/vi';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/navigation';

interface Props {
  ws: Workspace;
  transparent?: boolean;
}

const WorkspaceInviteSnippet = ({ ws, transparent = true }: Props) => {
  const router = useRouter();
  const { t, lang } = useTranslation('invite');

  const creationDate = moment(ws?.created_at).locale(lang).fromNow();

  const invitedTo = t('invited-to');

  const declineInviteLabel = t('decline-invite');
  const acceptInviteLabel = t('accept-invite');

  const acceptInviteSuccessTitle = t('invite:accept-invite-success-title');
  const acceptInviteSuccessMessage = t('invite:accept-invite-success-msg');

  const acceptInviteErrorTitle = t('invite:accept-invite-error-title');
  const acceptInviteErrorMessage = t('invite:accept-invite-error-msg');

  const declineInviteSuccessTitle = t('invite:decline-invite-success-title');
  const declineInviteSuccessMessage = t('invite:decline-invite-success-msg');

  const declineInviteErrorTitle = t('invite:decline-invite-error-title');
  const declineInviteErrorMessage = t('invite:decline-invite-error-msg');

  const acceptInvite = async (ws: Workspace) => {
    const response = await fetch(`/api/workspaces/${ws.id}/accept-invite`, {
      method: 'POST',
    });

    if (response.ok) {
      toast({
        title: acceptInviteSuccessTitle,
        description: acceptInviteSuccessMessage,
        color: 'teal',
      });
      router.refresh();
    } else {
      toast({
        title: acceptInviteErrorTitle,
        description: acceptInviteErrorMessage,
        color: 'red',
      });
    }
  };

  const declineInvite = async (ws: Workspace) => {
    const response = await fetch(`/api/workspaces/${ws.id}/decline-invite`, {
      method: 'POST',
    });

    if (response.ok) {
      toast({
        title: declineInviteSuccessTitle,
        description: declineInviteSuccessMessage,
        color: 'teal',
      });
      router.refresh();
    } else {
      toast({
        title: declineInviteErrorTitle,
        description: declineInviteErrorMessage,
        color: 'red',
      });
    }
  };

  return (
    <div
      className={`rounded-lg border p-4 ${
        transparent ? 'bg-primary-foreground/40' : 'bg-primary-foreground/40'
      }`}
    >
      <div className="cursor-default font-semibold transition duration-150">
        <span className="text-foreground/60">{invitedTo} </span>
        <span className="text-foreground">
          {ws?.name || `Unnamed Workspace`}
        </span>
        {ws?.created_at ? (
          <span className="text-foreground/60 font-normal">
            {' '}
            • {creationDate}
          </span>
        ) : null}
      </div>

      <div className="mt-2 grid gap-2 md:grid-cols-2">
        <div
          className="text-foreground hover:bg-foreground/5 flex cursor-pointer items-center justify-center rounded border p-1 font-semibold transition duration-300"
          onClick={() => declineInvite(ws)}
        >
          {declineInviteLabel}
        </div>

        <div
          className="text-foreground hover:bg-foreground/5 flex flex-1 cursor-pointer items-center justify-center rounded border p-1 font-semibold transition duration-300"
          onClick={() => acceptInvite(ws)}
        >
          {acceptInviteLabel}
        </div>
      </div>
    </div>
  );
};

export default WorkspaceInviteSnippet;
