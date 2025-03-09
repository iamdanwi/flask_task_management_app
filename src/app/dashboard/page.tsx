"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CheckCircle, Clock, List, LogOut, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

// Task type definition
interface Task {
  id: string
  title: string
  description: string
  priority: "Low" | "Medium" | "High"
  dueDate: string
  completed: boolean
}

export default function DashboardPage() {
  const router = useRouter()

  // Sample tasks data
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Complete project proposal",
      description: "Draft the initial project proposal for the client meeting",
      priority: "High",
      dueDate: "2025-03-15",
      completed: false,
    },
    {
      id: "2",
      title: "Review team updates",
      description: "Go through weekly team updates and provide feedback",
      priority: "Medium",
      dueDate: "2025-03-12",
      completed: false,
    },
    {
      id: "3",
      title: "Prepare presentation",
      description: "Create slides for the upcoming stakeholder presentation",
      priority: "High",
      dueDate: "2025-03-18",
      completed: false,
    },
    {
      id: "4",
      title: "Update documentation",
      description: "Update the project documentation with recent changes",
      priority: "Low",
      dueDate: "2025-03-20",
      completed: false,
    },
  ])

  const [searchQuery, setSearchQuery] = useState("")
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false)
  const [newTask, setNewTask] = useState<Omit<Task, "id" | "completed">>({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
  })

  // Filter tasks based on search query
  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Handle task completion toggle
  const toggleTaskCompletion = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  // Handle adding a new task
  const handleAddTask = () => {
    if (!newTask.title) {
      toast("Task title required", {
        description: "Please provide a title for your task.",
      })
      return
    }

    const task: Task = {
      id: Date.now().toString(),
      ...newTask,
      completed: false,
    }

    setTasks([task, ...tasks])
    setNewTask({
      title: "",
      description: "",
      priority: "Medium",
      dueDate: "",
    })
    setIsAddTaskOpen(false)

    toast("Task added", {
      description: "Your new task has been added successfully.",
    })
  }

  // Handle task deletion
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
    toast("Task deleted", {
      description: "The task has been deleted successfully.",
    })
  }

  // Handle logout
  const handleLogout = () => {
    router.push("/")
    toast("Logged out", {
      description: "You have been logged out successfully.",
    })
  }

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(dateString));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span>TaskFlow</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search tasks..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Logout</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">My Tasks</h1>
          <Dialog open={isAddTaskOpen} onOpenChange={setIsAddTaskOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Task
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Task</DialogTitle>
                <DialogDescription>Create a new task to add to your list.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Task title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Task description"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select
                      value={newTask.priority}
                      onValueChange={(value) =>
                        setNewTask({ ...newTask, priority: value as "Low" | "Medium" | "High" })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Low">Low</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input
                      id="dueDate"
                      type="date"
                      value={newTask.dueDate}
                      onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddTaskOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddTask}>Add Task</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {filteredTasks.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No tasks found</h3>
              <p className="text-muted-foreground text-center max-w-md mb-6">
                {searchQuery
                  ? "No tasks match your search criteria. Try a different search term."
                  : "You don't have any tasks yet. Add your first task to get started."}
              </p>
              {!searchQuery && (
                <Button onClick={() => setIsAddTaskOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Your First Task
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredTasks.map((task) => (
              <Card key={task.id} className={task.completed ? "opacity-60" : ""}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="line-clamp-1">{task.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <span className="flex items-center gap-1">
                          <List className="h-3 w-3" />
                          {task.priority}
                        </span>
                        {task.dueDate && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {formatDate(task.dueDate)}
                          </span>
                        )}
                      </CardDescription>
                    </div>
                    <div className="flex h-5 items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300"
                        checked={task.completed}
                        onChange={() => toggleTaskCompletion(task.id)}
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm ${task.completed ? "line-through" : ""} line-clamp-2`}>{task.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="outline" size="sm" onClick={() => deleteTask(task.id)}>
                    Delete
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <Link href={`/tasks/${task.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
      <footer className="w-full border-t py-4">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} TaskFlow</p>
          <p className="text-sm text-muted-foreground">
            {tasks.filter((t) => t.completed).length} of {tasks.length} tasks completed
          </p>
        </div>
      </footer>
    </div>
  )
}

