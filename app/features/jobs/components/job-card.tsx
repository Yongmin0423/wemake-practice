import { Card, CardHeader, CardFooter, CardContent, CardTitle } from "../../../common/components/ui/card"
import { Button } from "../../../common/components/ui/button"
import { Badge } from "../../../common/components/ui/badge"
import { Link } from "react-router"

interface JobCardProps {
  jobId: string
  companyName: string
  companyLogo: string
  timeAgo: string
  title: string
  type: string
  location: string
  salary: string
  city: string
}

export function JobCard({
  jobId,
  companyName,
  companyLogo,
  timeAgo,
  title,
  type,
  location,
  salary,
  city,
}: JobCardProps) {
  return (
    <Link to={`/jobs/${jobId}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader>
          <div className="flex items-center gap-4 mb-8">
            <img
              src={companyLogo}
              alt={`${companyName} Logo`}
              className="size-10 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-accent-foreground">{companyName}</span>
              <span className="text-xs text-muted-foreground">{timeAgo}</span>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="outline">{type}</Badge>
          <Badge variant="outline">{location}</Badge>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">
              {salary}
            </span>
            <span className="text-sm text-muted-foreground">
              {city}
            </span>
          </div>
          <Button variant="secondary" size="sm">Apply now</Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
