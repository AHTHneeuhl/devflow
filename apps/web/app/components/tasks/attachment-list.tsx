'use client';

import { useEffect } from 'react';
import { attachmentService } from '@/services/attachment-service';
import { useAttachmentStore } from '@/store/attachment-store';

type Props = { taskId: string };

export function AttachmentList({ taskId }: Props) {
  const attachments = useAttachmentStore((s) => s.attachments);
  const setAttachments = useAttachmentStore((s) => s.setAttachments);

  useEffect(() => {
    attachmentService.list(taskId).then(setAttachments);
  }, [taskId, setAttachments]);

  return (
    <div className="space-y-2">
      {attachments.map((a) => (
        <a
          key={a.id}
          href={a.url}
          target="_blank"
          className="block border rounded p-2 text-sm hover:bg-gray-50"
        >
          {a.filename}
        </a>
      ))}
    </div>
  );
}
