import type {
  User,
  DashboardStats,
  RevenueData,
  ActivityItem,
  AnalyticsData,
  Project
} from '@/types'

export const mockUser: User = {
  id: '1',
  name: 'John Anderson',
  email: 'john.anderson@company.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  role: 'Product Manager',
  department: 'Product',
  status: 'active',
  joinedDate: new Date('2023-01-15'),
}

export const mockDashboardStats: DashboardStats = {
  totalRevenue: 245680,
  totalUsers: 1847,
  activeProjects: 32,
  taskCompletion: 87.5,
  revenueChange: 12.5,
  usersChange: 8.2,
  projectsChange: -3.1,
  tasksChange: 5.4,
}

export const mockRevenueData: RevenueData[] = [
  { month: 'Jan', revenue: 45000, profit: 12000 },
  { month: 'Feb', revenue: 52000, profit: 15000 },
  { month: 'Mar', revenue: 48000, profit: 13500 },
  { month: 'Apr', revenue: 61000, profit: 18000 },
  { month: 'May', revenue: 55000, profit: 16500 },
  { month: 'Jun', revenue: 67000, profit: 20000 },
  { month: 'Jul', revenue: 72000, profit: 22000 },
  { month: 'Aug', revenue: 68000, profit: 21000 },
  { month: 'Sep', revenue: 75000, profit: 23500 },
  { month: 'Oct', revenue: 82000, profit: 26000 },
  { month: 'Nov', revenue: 79000, profit: 24500 },
  { month: 'Dec', revenue: 88000, profit: 28000 },
]

export const mockActivities: ActivityItem[] = [
  {
    id: '1',
    user: 'Sarah Johnson',
    action: 'Created new project "Mobile App Redesign"',
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    type: 'project',
  },
  {
    id: '2',
    user: 'Michael Chen',
    action: 'Completed task "API Integration"',
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    type: 'task',
  },
  {
    id: '3',
    user: 'Emily Davis',
    action: 'Joined the platform',
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
    type: 'user',
  },
  {
    id: '4',
    user: 'System',
    action: 'Database backup completed successfully',
    timestamp: new Date(Date.now() - 1000 * 60 * 180),
    type: 'system',
  },
  {
    id: '5',
    user: 'David Wilson',
    action: 'Updated project deadline for "E-commerce Platform"',
    timestamp: new Date(Date.now() - 1000 * 60 * 240),
    type: 'project',
  },
]

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    role: 'Senior Developer',
    department: 'Engineering',
    status: 'active',
    joinedDate: new Date('2022-03-12'),
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    role: 'UX Designer',
    department: 'Design',
    status: 'active',
    joinedDate: new Date('2022-06-20'),
  },
  {
    id: '3',
    name: 'Emily Davis',
    email: 'emily.davis@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    role: 'Marketing Manager',
    department: 'Marketing',
    status: 'active',
    joinedDate: new Date('2023-01-08'),
  },
  {
    id: '4',
    name: 'David Wilson',
    email: 'david.wilson@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    role: 'Product Owner',
    department: 'Product',
    status: 'active',
    joinedDate: new Date('2021-11-15'),
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    email: 'lisa.anderson@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    role: 'DevOps Engineer',
    department: 'Engineering',
    status: 'inactive',
    joinedDate: new Date('2022-09-03'),
  },
  {
    id: '6',
    name: 'James Taylor',
    email: 'james.taylor@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    role: 'QA Lead',
    department: 'Quality',
    status: 'active',
    joinedDate: new Date('2023-04-18'),
  },
]

export const mockAnalyticsData: AnalyticsData[] = [
  { category: 'Web Traffic', value: 45230, change: 12.5 },
  { category: 'User Engagement', value: 87.5, change: 5.2 },
  { category: 'Conversion Rate', value: 3.8, change: -1.2 },
  { category: 'Customer Satisfaction', value: 94.2, change: 8.7 },
  { category: 'Revenue Growth', value: 152000, change: 15.3 },
  { category: 'Active Sessions', value: 2847, change: 22.1 },
]

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Mobile App Redesign',
    status: 'active',
    progress: 68,
    budget: 125000,
    spent: 85000,
    team: 8,
    deadline: new Date('2025-12-31'),
  },
  {
    id: '2',
    name: 'E-commerce Platform',
    status: 'active',
    progress: 42,
    budget: 250000,
    spent: 105000,
    team: 12,
    deadline: new Date('2026-03-15'),
  },
  {
    id: '3',
    name: 'Customer Portal',
    status: 'completed',
    progress: 100,
    budget: 80000,
    spent: 78000,
    team: 6,
    deadline: new Date('2024-09-30'),
  },
  {
    id: '4',
    name: 'Analytics Dashboard',
    status: 'on-hold',
    progress: 25,
    budget: 60000,
    spent: 15000,
    team: 4,
    deadline: new Date('2026-01-31'),
  },
]

export const categoryChartData = [
  { name: 'Marketing', value: 400, fill: '#3b82f6' },
  { name: 'Sales', value: 300, fill: '#8b5cf6' },
  { name: 'Engineering', value: 300, fill: '#ec4899' },
  { name: 'Operations', value: 200, fill: '#f59e0b' },
]

export const trafficChartData = [
  { name: 'Mon', visits: 4200, pageViews: 8400 },
  { name: 'Tue', visits: 3800, pageViews: 7600 },
  { name: 'Wed', visits: 5100, pageViews: 10200 },
  { name: 'Thu', visits: 4600, pageViews: 9200 },
  { name: 'Fri', visits: 5800, pageViews: 11600 },
  { name: 'Sat', visits: 3200, pageViews: 6400 },
  { name: 'Sun', visits: 2900, pageViews: 5800 },
]
