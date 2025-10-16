import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { mockUsers } from '@/lib/mock-data'
import { format } from 'date-fns'

const statusVariant = {
  active: 'success',
  inactive: 'destructive',
  pending: 'warning',
} as const

export function Users() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <p className="text-muted-foreground">
          Manage your team members and their permissions
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>
            A list of all users in your organization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">
                    User
                  </th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">
                    Role
                  </th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">
                    Department
                  </th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">
                    Joined
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockUsers.map((user) => (
                  <tr key={user.id} className="border-b last:border-0">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>
                            {user.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="text-sm">{user.role}</div>
                    </td>
                    <td className="py-4">
                      <div className="text-sm">{user.department}</div>
                    </td>
                    <td className="py-4">
                      <Badge variant={statusVariant[user.status]}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-4">
                      <div className="text-sm text-muted-foreground">
                        {format(user.joinedDate, 'MMM d, yyyy')}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
