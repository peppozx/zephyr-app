import { DollarSign, Users, Briefcase, CheckCircle } from 'lucide-react'
import { StatCard } from '@/components/dashboard/StatCard'
import { RevenueChart } from '@/components/dashboard/RevenueChart'
import { RecentActivity } from '@/components/dashboard/RecentActivity'
import { mockDashboardStats } from '@/lib/mock-data'

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value={mockDashboardStats.totalRevenue}
          change={mockDashboardStats.revenueChange}
          icon={DollarSign}
          format="currency"
        />
        <StatCard
          title="Total Users"
          value={mockDashboardStats.totalUsers}
          change={mockDashboardStats.usersChange}
          icon={Users}
          format="number"
        />
        <StatCard
          title="Active Projects"
          value={mockDashboardStats.activeProjects}
          change={mockDashboardStats.projectsChange}
          icon={Briefcase}
          format="number"
        />
        <StatCard
          title="Task Completion"
          value={mockDashboardStats.taskCompletion}
          change={mockDashboardStats.tasksChange}
          icon={CheckCircle}
          format="percentage"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <div className="md:col-span-4">
          <RevenueChart />
        </div>
        <div className="md:col-span-3">
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}
