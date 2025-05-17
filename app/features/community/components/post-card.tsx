import { Card, CardHeader, CardFooter, CardTitle } from "../../../common/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../../common/components/ui/avatar"
import { Button } from "../../../common/components/ui/button"
import { Link } from "react-router"

interface PostCardProps {
  postId: string
  title: string
  author: string
  category: string
  timeAgo: string
}

export function PostCard({
  postId,
  title,
  author,
  category,
  timeAgo,
}: PostCardProps) {
  return (
    <Link to={`/community/${postId}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-12">
            <AvatarFallback>{author[0]}</AvatarFallback>
            <AvatarImage src="https://github.com/apple.png" />
          </Avatar>
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <div className="flex flex-row text-sm leading-tight gap-2">
              <span>{author}</span>
              <span>{category}</span>
              <span>•</span>
              <span>{timeAgo}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link">
            Reply &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
