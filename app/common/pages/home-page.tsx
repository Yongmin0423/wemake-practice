import type { MetaFunction } from "@remix-run/node";
import { ProductCard } from "../../features/products/components/product-card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { PostCard } from "../../features/community/components/post-card";
import { IdeaCard } from "../../features/ideas/components/idea-card";
import { JobCard } from "../../features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";
import type { Route } from "./+types/home-page";

export const meta: MetaFunction = () => {
  return [{
    title: "Home | wemake",
  }, {name: "description", content: "Home page of wemake"}]
}


export default function HomePage() {
  return (
     <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/products/leaderboards">Explore all products</Link>
          </Button>
        </div>
          {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard
                key={index}
                productId={index.toString()}
                productName={`Product Name ${index}`}
                productDescription="Product Description"
                commentsCount={0}
                viewsCount={0}
                votesCount={0}
              />
          ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The lastest discussions from our community.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community">Explore all discussions</Link>
          </Button>
        </div>
          {Array.from({ length: 11 }).map((_, index) => (
          <PostCard
            key={index}
            postId={index.toString()}
            title={`Discussion Title ${index}`}
            author="Jane Doe"
            category="Productivity"
            timeAgo="2 days ago"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            IdeasGPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next project.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/ideagpt">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <IdeaCard
            key={index}
            ideaId={index.toString()}
            title="A startup that create an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business."
            views={100}
            timeAgo="12 hours ago"
            likes={100}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Lastest Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find your dream Jobs
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <JobCard
            jobId={index.toString()}
            companyName="Meta"
            companyLogo="http://github.com/facebook.png"
            timeAgo="12 hours ago"
            title="Software Engineer"
            type="Full-time"
            location="Remote"
            salary="$100,000 - $150,000"
            city="San Francisco, CA"
          />
        ))}
      </div>
       <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Find a team mate
          </h2>
          <p className="text-xl font-light text-foreground">
            Join a team looking for a new member.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 7 }).map((_, index) => (
          <TeamCard
            key={`teamId-${index}`}
            id={`teamId-${index}`}
            leaderUsername="lynn"
            leaderAvatarUrl="https://github.com/inthetiger.png"
            positions={[
              "React Developer",
              "Backend Developer",
              "Product Manager",
            ]}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
    </div>
  );
}