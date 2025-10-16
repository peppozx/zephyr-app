import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUp, ArrowDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  title: string
  value: string | number
  change: number
  icon: LucideIcon
  format?: 'currency' | 'number' | 'percentage'
}

export function StatCard({ title, value, change, icon: Icon, format = 'number' }: StatCardProps) {
  const isPositive = change >= 0
  const formattedChange = Math.abs(change).toFixed(1)

  let displayValue = value
  if (format === 'currency' && typeof value === 'number') {
    displayValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value)
  } else if (format === 'percentage') {
    displayValue = `${value}%`
  } else if (format === 'number' && typeof value === 'number') {
    displayValue = new Intl.NumberFormat('en-US').format(value)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{displayValue}</div>
        <div className="flex items-center text-xs">
          {isPositive ? (
            <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
          ) : (
            <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
          )}
          <span className={cn(isPositive ? 'text-green-500' : 'text-red-500')}>
            {formattedChange}%
          </span>
          <span className="ml-1 text-muted-foreground">from last month</span>
        </div>
      </CardContent>
    </Card>
  )
}
