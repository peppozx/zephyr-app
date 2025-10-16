import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatDistanceToNow } from 'date-fns'
import { mockActivities } from '@/lib/mock-data'
import type { ActivityItem } from '@/types'
import { User, Briefcase, CheckCircle, Server } from 'lucide-react'

const activityIcons = {
  user: User,
  project: Briefcase,
  task: CheckCircle,
  system: Server,
}

const activityColors = {
  user: 'success',
  project: 'default',
  task: 'secondary',
  system: 'warning',
} as const

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest updates and changes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockActivities.map((activity: ActivityItem) => {
            const Icon = activityIcons[activity.type]
            return (
              <div key={activity.id} className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>{' '}
                    {activity.action}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant={activityColors[activity.type]} className="text-xs">
                      {activity.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
