export interface User {
  id: string
  name: string
  email: string
  avatar: string
  role: string
  department: string
  status: 'active' | 'inactive' | 'pending'
  joinedDate: Date
}

export interface DashboardStats {
  totalRevenue: number
  totalUsers: number
  activeProjects: number
  taskCompletion: number
  revenueChange: number
  usersChange: number
  projectsChange: number
  tasksChange: number
}

export interface RevenueData {
  month: string
  revenue: number
  profit: number
}

export interface ActivityItem {
  id: string
  user: string
  action: string
  timestamp: Date
  type: 'user' | 'project' | 'task' | 'system'
}

export interface AnalyticsData {
  category: string
  value: number
  change: number
}

export interface Project {
  id: string
  name: string
  status: 'active' | 'completed' | 'on-hold'
  progress: number
  budget: number
  spent: number
  team: number
  deadline: Date
}
