localStorage.clear()

const employees = [
  { 
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com", 
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare report",
        taskDescription: "Create monthly sales report",
        taskDate: "2026-03-20",
        taskCategory: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team meeting",
        taskDescription: "Attend weekly sync meeting",
        taskDate: "2026-03-18",
        taskCategory: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client follow-up",
        taskDescription: "Call client for feedback",
        taskDate: "2026-03-15",
        taskCategory: "Communication"
      }
    ]
  },

  { 
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com", 
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix bugs",
        taskDescription: "Resolve issues in dashboard",
        taskDate: "2026-03-21",
        taskCategory: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review teammate PR",
        taskDate: "2026-03-19",
        taskCategory: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update docs",
        taskDescription: "Update API documentation",
        taskDate: "2026-03-22",
        taskCategory: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy app",
        taskDescription: "Push app to production",
        taskDate: "2026-03-17",
        taskCategory: "Deployment"
      }
    ]
  },

  { 
    id: 3,
    firstName: "Rohit",
    email: "employee3@example.com", 
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design UI",
        taskDescription: "Create landing page design",
        taskDate: "2026-03-23",
        taskCategory: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Logo update",
        taskDescription: "Redesign company logo",
        taskDate: "2026-03-16",
        taskCategory: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Banner creation",
        taskDescription: "Create marketing banners",
        taskDate: "2026-03-14",
        taskCategory: "Marketing"
      }
    ]
  },

  { 
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com", 
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database backup",
        taskDescription: "Backup production database",
        taskDate: "2026-03-24",
        taskCategory: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize queries",
        taskDescription: "Improve DB performance",
        taskDate: "2026-03-18",
        taskCategory: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Server monitoring",
        taskDescription: "Check server health",
        taskDate: "2026-03-22",
        taskCategory: "DevOps"
      }
    ]
  },

  { 
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com", 
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Marketing plan",
        taskDescription: "Plan social media campaign",
        taskDate: "2026-03-25",
        taskCategory: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email campaign",
        taskDescription: "Send newsletter",
        taskDate: "2026-03-19",
        taskCategory: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Ad campaign",
        taskDescription: "Run paid ads",
        taskDate: "2026-03-17",
        taskCategory: "Advertising"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "SEO optimization",
        taskDescription: "Improve website SEO",
        taskDate: "2026-03-23",
        taskCategory: "SEO"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
    
}
export const getLocalStorage = () =>{
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))
   return {employees,admin}
};