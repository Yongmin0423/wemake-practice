import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "../../../common/components/ui/card"
import { Button } from "../../../common/components/ui/button"
import { MessageCircleIcon, EyeIcon, ChevronUp } from "lucide-react"
import { Link } from "react-router"

interface ProductCardProps {
  productId: string
  productName: string
  productDescription: string
  commentsCount: number
  viewsCount: number
  votesCount: number
}

export function ProductCard({
  productId,
  productName,
  productDescription,
  commentsCount,
  viewsCount,
  votesCount,
}: ProductCardProps) {
  return (
    <Link to={`/products/${productId}`}>
      <Card className="w-full flex flex-row items-center justify-between bg-transparent hover:bg-card/50">
        <CardHeader>
          <CardTitle className="w-full text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">
            {productName}
          </CardTitle>
          <CardDescription className="w-full text-muted-foreground">
            {productDescription}
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-px text-sm text-muted-foreground">
              <MessageCircleIcon className="size-4" />
              <span>{commentsCount}</span>
            </div>
            <div className="flex items-center gap-px text-sm text-muted-foreground">
              <EyeIcon className="size-4" />
              <span>{viewsCount}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0">
          <Button variant="outline" className="flex h-14">
            <ChevronUp className="size-4 shrink-0" />
            <span>{votesCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
