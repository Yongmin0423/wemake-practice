import { Hero } from '~/common/components/hero';
import type { Route } from './+types/ideas-page';
import { IdeaCard } from '../components/idea-card';

export const meta: Route.MetaFunction = () => {
  return [
    { title: 'IdeaGPT | wemake' },
    {
      name: 'description',
      content: 'Find ideas for your next project',
    },
  ];
};

export default function IdeasPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="IdeasGPT"
        subtitle="Find ideas for your next project"
      />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <IdeaCard
            key={`ideaId-${index}`}
            ideaId={`ideaId-${index}`}
            title="A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business."
            views={123}
            timeAgo="12 hours ago"
            likes={12}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
