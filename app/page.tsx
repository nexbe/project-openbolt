"use client";
    import React, { useState } from "react";
    import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    
    const DUMMY_STORIES = [
      { id: "s1", title: "Implement User Authentication", description: "As a user, I want to be able to log in and log out." },
      { id: "s2", title: "Create Project Dashboard", description: "As a project manager, I want a dashboard to view project progress." },
    ];
    
    const DUMMY_TASKS = [
      { id: "t1", storyId: "s1", title: "Design Login Page", status: "In Progress" },
      { id: "t2", storyId: "s1", title: "Implement Login API", status: "To Do" },
      { id: "t3", storyId: "s2", title: "Create Task List Component", status: "Completed" },
    ];
    
    const DUMMY_SPRINT = {
      id: "sp1",
      name: "Sprint 1",
      startDate: "2024-01-01",
      endDate: "2024-01-15",
      status: "Active",
    };
    
    export default function Home() {
      const [stories, setStories] = useState(DUMMY_STORIES);
      const [tasks, setTasks] = useState(DUMMY_TASKS);
      const [sprint, setSprint] = useState(DUMMY_SPRINT);
    
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Agile Project Dashboard</h1>
    
          {/* Sprint Overview */}
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Sprint: {sprint.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Status: {sprint.status}</p>
              <p>Start Date: {sprint.startDate}</p>
              <p>End Date: {sprint.endDate}</p>
            </CardContent>
          </Card>
    
          {/* User Stories */}
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">User Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stories.map((story) => (
                <Card key={story.id}>
                  <CardHeader>
                    <CardTitle>{story.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{story.description}</p>
                    {/* Tasks related to the story */}
                    <h3 className="text-lg font-semibold mt-2">Tasks</h3>
                    <ul>
                      {tasks
                        .filter((task) => task.storyId === story.id)
                        .map((task) => (
                          <li key={task.id} className="flex justify-between items-center">
                            <span>{task.title}</span>
                            <span className="text-sm text-gray-500">{task.status}</span>
                          </li>
                        ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
    
          {/* Task Management */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Task Management</h2>
            {/* Add task creation form or task list here */}
          </section>
        </div>
      );
    }
