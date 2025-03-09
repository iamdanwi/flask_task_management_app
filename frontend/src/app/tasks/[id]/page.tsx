"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, CheckCircle, Clock, List, Save, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function TaskDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [task, setTask] = useState<Task | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editedTask, setEditedTask] = useState<Task | null>(null)

  // In a real app, this would fetch from an API
  useEffect(() => {
    // Simulate API call to get task details
    const fetchTask = async () => {
      // This is mock data - in a real app, you'd fetch from an API
      const mockTasks: Task[] = [
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
      ]

      const foundTask = mockTasks.find((t) => t.id === params.id)

      if (foundTask) {
        setTask(foundTask)
        setEditedTask(foundTask)
      } else {
        // If task not found, redirect to dashboard
        router.push("/dashboard")
        toast("Task not found", {
          description: "The requested task could not be found.",
        })
      }
    }

    fetchTask()
  }, [params.id, router])

  if (!task) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Loading task...</h2>
          <p className="text-muted-foreground">Please wait while we fetch the task details.</p>
        </div>
      </div>
    )
  }

  const handleSave = () => {
    if (!editedTask) return

    // In a real app, this would be an API call
    setTask(editedTask)
    setIsEditing(false)

    toast("Task updated", {
      description: "Your task has been updated successfully.",
    })
  }

  const handleDelete = () => {
    // In a real app, this would be an API call
    router.push("/dashboard")

    toast("Task deleted", {
      description: "Your task has been deleted successfully.",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span>TaskFlow</span>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to Dashboard</span>
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="/dashboard">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to Dashboard</span>
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Task Details</h1>
          </div>
          <div className="flex items-center gap-2">
            {isEditing ? (
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            ) : (
              <Button onClick={() => setIsEditing(true)}>Edit Task</Button>
            )}
            <Button variant="destructive" onClick={handleDelete}>
              <Trash className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto">
          {isEditing ? (
            <>
              <CardHeader>
                <CardTitle>Edit Task</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={editedTask?.title}
                    onChange={(e) => setEditedTask((prev) => (prev ? { ...prev, title: e.target.value } : null))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    value={editedTask?.description}
                    onChange={(e) => setEditedTask((prev) => (prev ? { ...prev, description: e.target.value } : null))}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select
                      value={editedTask?.priority}
                      onValueChange={(value) =>
                        setEditedTask((prev) =>
                          prev ? { ...prev, priority: value as "Low" | "Medium" | "High" } : null,
                        )
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
                      value={editedTask?.dueDate}
                      onChange={(e) => setEditedTask((prev) => (prev ? { ...prev, dueDate: e.target.value } : null))}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="completed"
                    className="h-4 w-4 rounded border-gray-300"
                    checked={editedTask?.completed}
                    onChange={(e) => setEditedTask((prev) => (prev ? { ...prev, completed: e.target.checked } : null))}
                  />
                  <Label htmlFor="completed">Mark as completed</Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false)
                    setEditedTask(task)
                  }}
                >
                  Cancel
                </Button>
                <Button onClick={handleSave}>Save Changes</Button>
              </CardFooter>
            </>
          ) : (
            <>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className={task.completed ? "line-through opacity-70" : ""}>{task.title}</CardTitle>
                  <div className="flex h-5 items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                      checked={task.completed}
                      onChange={() => setTask((prev) => (prev ? { ...prev, completed: !prev.completed } : null))}
                      aria-label="Mark as completed"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Description</h3>
                  <p className={`text-sm ${task.completed ? "line-through opacity-70" : ""}`}>
                    {task.description || "No description provided."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Priority</h3>
                    <div className="flex items-center gap-1">
                      <List className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{task.priority}</span>
                    </div>
                  </div>
                  {task.dueDate && (
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Due Date</h3>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{new Date(task.dueDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Status</h3>
                    <span className={`text-sm ${task.completed ? "text-green-600" : "text-amber-600"}`}>
                      {task.completed ? "Completed" : "In Progress"}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => setIsEditing(true)} className="w-full">
                  Edit Task
                </Button>
              </CardFooter>
            </>
          )}
        </Card>
      </main>
      <footer className="w-full border-t py-4">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} TaskFlow</p>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>
      </footer>
    </div>
  )
}

