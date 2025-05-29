import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
} from '../../../common/components/ui/card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../common/components/ui/avatar';
import { Button } from '../../../common/components/ui/button';
import { Link } from 'react-router';
import { cn } from '~/lib/utils';
import { ChevronUpIcon } from 'lucide-react';
import { DateTime } from 'luxon';

interface PostCardProps {
  postId: number;
  title: string;
  author: string;
  category: string;
  authorAvatarUrl: string | null;
  timeAgo: string;
  expanded?: boolean;
  votesCount?: number;
}

export function PostCard({
  postId,
  title,
  author,
  category,
  authorAvatarUrl,
  timeAgo,
  expanded = false,
  votesCount = 0,
}: PostCardProps) {
  return (
    <Link
      to={`/community/${postId}`}
      className="block"
    >
      <Card
        className={cn(
          'bg-transparent hover:bg-card/50 transition-colors',
          expanded ? 'flex flex-row items-center justify-between' : ''
        )}
      >
        <CardHeader className="flex flex-row items-center gap-2 w-full">
          <Avatar className="size-12">
            <AvatarFallback>{author[0]}</AvatarFallback>
            <AvatarImage src={authorAvatarUrl || ''} />
          </Avatar>
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <div className="flex flex-row text-sm leading-tight gap-2">
              <span>{author}</span>
              <span>{category}</span>
              <span>•</span>
              <span>{DateTime.fromISO(timeAgo).toRelative()}</span>
            </div>
          </div>
        </CardHeader>
        {!expanded && (
          <CardFooter className="flex justify-end">
            <Button variant="link">Reply &rarr;</Button>
          </CardFooter>
        )}
        {expanded && (
          <CardFooter className="flex justify-end  pb-0">
            <Button
              variant="outline"
              className="flex flex-col h-14"
            >
              <ChevronUpIcon className="size-4 shrink-0" />
              <span>{votesCount}</span>
            </Button>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
}
