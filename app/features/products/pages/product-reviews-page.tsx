import { Button } from '~/common/components/ui/button';
import { ReviewCard } from '../components/review-card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/common/components/ui/dialog';
import CreateReviewDialog from '../components/create-review-dialog';
import type { Route } from './+types/product-reviews-page';
import { getReviews } from '../queries';
import { useOutletContext } from 'react-router';

export function meta() {
  return [
    { title: 'Product Reviews | wemake' },
    {
      name: 'description',
      content: 'Read and write product reviews',
    },
  ];
}

export const loader = async ({ params }: Route.LoaderArgs) => {
  const reviews = await getReviews(Number(params.productId));
  return { reviews };
};

export default function ProductReviewsPage({ loaderData }: Route.ComponentProps) {
  const { review_count } = useOutletContext<{ review_count: number }>();
  return (
    <Dialog>
      <div className="space-y-10 max-w-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{review_count} Reviews </h2>
          <DialogTrigger>
            <Button variant={'secondary'}>Write a review</Button>
          </DialogTrigger>
        </div>
        <div className="space-y-20">
          {loaderData.reviews.map((review) => (
            <ReviewCard
              username={review.user.name}
              handle={review.user.username}
              avatarUrl={review.user.avatar}
              rating={review.rating}
              content={review.review}
              postedAt={review.created_at}
            />
          ))}
        </div>
      </div>
      <CreateReviewDialog />
    </Dialog>
  );
}
