import type { Route } from "../../features/products/pages/+types/leaderboard-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Leaderboard | wemake" },
    { name: "description", content: "Top products leaderboard" },
  ];
}

export default function LeaderboardPage() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center rounded-md bg-gradient-to-t from-background to-primary/10">
        <h2 className="text-5xl font-bold leading-tight tracking-tight">
          Leaderboard
        </h2>
        <p className="text-2xl font-light text-foreground">
          The most popular products on wemake
        </p>
      </div>
    </div>
  );
}