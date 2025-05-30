import { IdeaCard } from '~/features/ideas/components/idea-card';
import type { Route } from './+types/dashboard-ideas-page';

export const meta: Route.MetaFunction = () => {
  return [{ title: 'My Ideas | wemake' }];
};

export default function DashboardIdeasPage() {
  return (
    <div className="space-y-5 h-full">
      <h1 className="text-2xl font-semibold mb-6">Claimed Ideas</h1>
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <IdeaCard
            key={`ideaId-${index}`}
            ideaId={`ideaId-${index}`}
            title="A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business."
            views={123}
            timeAgo="12 hours ago"
            likes={12}
          />
        ))}
      </div>
    </div>
  );
}
