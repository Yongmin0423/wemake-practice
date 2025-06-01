import type { MetaFunction } from '@remix-run/node';
import { ProductCard } from '../../features/products/components/product-card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';
import { PostCard } from '../../features/community/components/post-card';
import { IdeaCard } from '../../features/ideas/components/idea-card';
import { JobCard } from '../../features/jobs/components/job-card';
import { TeamCard } from '~/features/teams/components/team-card';
import { getProductsByDateRange } from '~/features/products/queries';
import { DateTime } from 'luxon';
import { getPosts } from '~/features/community/queries';
import { getGptIdeas } from '~/features/ideas/queries';
import { getJobs } from '~/features/jobs/queries';
import type { Route } from './+types/home-page';
import { getTeams } from '~/features/teams/queries';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Home | wemake',
    },
    { name: 'description', content: 'Home page of wemake' },
  ];
};

export const loader = async () => {
  const products = await getProductsByDateRange({
    startDate: DateTime.now().startOf('day'),
    endDate: DateTime.now().endOf('day'),
    limit: 7,
  });
  const posts = await getPosts({
    limit: 7,
    sorting: 'newest',
  });
  const ideas = await getGptIdeas({ limit: 7 });
  const jobs = await getJobs({ limit: 5 });
  const teams = await getTeams({ limit: 5 });
  return { products, posts, ideas, jobs, teams };
};

export default function HomePage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Today's Products</h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
          <Button
            variant="link"
            asChild
            className="text-lg p-0"
          >
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
        {loaderData.products.map((product) => (
          <ProductCard
            key={product.product_id}
            productId={product.product_id.toString()}
            productName={product.name}
            productDescription={product.description}
            commentsCount={product.reviews}
            viewsCount={product.views}
            votesCount={product.upvotes}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Latest Discussions</h2>
          <p className="text-xl font-light text-foreground">
            The lastest discussions from our community.
          </p>
          <Button
            variant="link"
            asChild
            className="text-lg p-0"
          >
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {loaderData.posts.map((post) => (
          <PostCard
            key={post.post_id}
            postId={post.post_id}
            title={post.title}
            author={post.author}
            authorAvatarUrl={post.author_avatar}
            category={post.topic}
            timeAgo={post.created_at}
            votesCount={post.upvotes}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">IdeasGPT</h2>
          <p className="text-xl font-light text-foreground">Find ideas for your next project.</p>
          <Button
            variant="link"
            asChild
            className="text-lg p-0"
          >
            <Link to="/ideagpt">Explore all ideas &rarr;</Link>
          </Button>
        </div>
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
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Lastest Jobs</h2>
          <p className="text-xl font-light text-foreground">Find your dream Jobs</p>
          <Button
            variant="link"
            asChild
            className="text-lg p-0"
          >
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {loaderData.jobs.map((job) => (
          <JobCard
            jobId={job.job_id}
            companyName={job.company_name}
            companyLogo={job.company_logo}
            timeAgo={job.created_at}
            title={job.position}
            type={job.job_type}
            location={job.location}
            salary={job.salary_range}
            city={job.company_location}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Find a team mate</h2>
          <p className="text-xl font-light text-foreground">
            Join a team looking for a new member.
          </p>
          <Button
            variant="link"
            asChild
            className="text-lg p-0"
          >
            <Link to="/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>
        {loaderData.teams.map((team) => (
          <TeamCard
            key={team.team_id}
            id={team.team_id}
            leaderUsername={team.team_leader.username}
            leaderAvatarUrl={team.team_leader.avatar}
            positions={team.roles.split(', ')}
            projectDescription={team.product_description}
          />
        ))}
      </div>
    </div>
  );
}
