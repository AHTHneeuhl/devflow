import { NewProjectButton } from '@/app/components/projects/new-project-button';

export default function ProjectsPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Projects</h1>

        <NewProjectButton />
      </div>
    </div>
  );
}
