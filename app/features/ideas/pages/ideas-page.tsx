import { Hero } from '~/common/components/hero';
import type { Route } from './+types/ideas-page';
import { IdeaCard } from '../components/idea-card';
import { getGptIdeas } from '../queries';

export const meta: Route.MetaFunction = () => {
  return [
    { title: 'IdeaGPT | wemake' },
    {
      name: 'description',
      content: 'Find ideas for your next project',
    },
  ];
};

export const loader = async () => {
  const ideas = await getGptIdeas({ limit: 20 });
  return { ideas };
};

export default function IdeasPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero
        title="IdeasGPT"
        subtitle="Find ideas for your next project"
      />
      <div className="grid grid-cols-4 gap-4">
        {loaderData.ideas.map((idea) => (
          <IdeaCard
            key={idea.gpt_idea_id}
            ideaId={idea.gpt_idea_id}
            title={idea.idea}
            views={idea.views}
            timeAgo={idea.created_at}
            likes={idea.likes}
            claimed={idea.is_claimed}
          />
        ))}
      </div>
    </div>
  );
}
