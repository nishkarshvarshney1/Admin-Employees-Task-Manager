const admin = [
  {
    "id": "ADM001",
    "email": "nishkarshvarshney18@gmail.com",
    "password": "123",
    "name": "Nishkarsh"
  }
]

const employees = [
  {
    "EMP001": {
      "id": "EMP001",
      "name": "Rahul Sharma",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskId": "T0101",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Update task tracker",
          "taskDescription": "Make sure all assigned work and progress are accurately reflected in the tracker.",
          "taskData": {
            "assignedTo": "EMP001",
            "priority": "low",
            "dueDate": "2026-09-22"
          }
        },
        {
          "taskId": "T0102",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Research competitors",
          "taskDescription": "Research competitor activities and summarize the key findings.",
          "taskData": {
            "assignedTo": "EMP001",
            "priority": "medium",
            "dueDate": "2026-09-23"
          }
        },
        {
          "taskId": "T0103",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Review project progress",
          "taskDescription": "Review the current project status and identify any pending work.",
          "taskData": {
            "assignedTo": "EMP001",
            "priority": "high",
            "dueDate": "2026-09-22"
          }
        },
        {
          "taskId": "T0104",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Check inventory",
          "taskDescription": "Review current inventory levels and report any items that need attention.",
          "taskData": {
            "assignedTo": "EMP001",
            "priority": "high",
            "dueDate": "2026-09-24"
          }
        },
        {
          "taskId": "T0105",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Organize documents",
          "taskDescription": "Sort and organize the team's documents and project files.",
          "taskData": {
            "assignedTo": "EMP001",
            "priority": "medium",
            "dueDate": "2026-09-18"
          }
        },
        {
          "taskId": "T0106",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Update client records",
          "taskDescription": "Review and update the latest client information in the system.",
          "taskData": {
            "assignedTo": "EMP001",
            "priority": "high",
            "dueDate": "2026-09-27"
          }
        },
        {
          "taskId": "T0107",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare presentation",
          "taskDescription": "Create and finalize the presentation for the upcoming review.",
          "taskData": {
            "assignedTo": "EMP001",
            "priority": "low",
            "dueDate": "2026-09-23"
          }
        },
        {
          "taskId": "T0108",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Send follow-up emails",
          "taskDescription": "Send follow-up emails to the assigned clients and leads.",
          "taskData": {
            "assignedTo": "EMP001",
            "priority": "low",
            "dueDate": "2026-09-17"
          }
        }
      ],
      "newTask": 2,
      "active": 2,
      "completed": 3,
      "failed": 3
    }
  },
  {
    "EMP002": {
      "id": "EMP002",
      "name": "Priya Verma",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskId": "T0201",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Check inventory",
          "taskDescription": "Review current inventory levels and report any items that need attention.",
          "taskData": {
            "assignedTo": "EMP002",
            "priority": "low",
            "dueDate": "2026-09-25"
          }
        },
        {
          "taskId": "T0202",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare weekly report",
          "taskDescription": "Compile this week's performance data and prepare the weekly report.",
          "taskData": {
            "assignedTo": "EMP002",
            "priority": "medium",
            "dueDate": "2026-09-20"
          }
        },
        {
          "taskId": "T0203",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Team meeting",
          "taskDescription": "Attend the scheduled team meeting and discuss current priorities.",
          "taskData": {
            "assignedTo": "EMP002",
            "priority": "low",
            "dueDate": "2026-09-16"
          }
        },
        {
          "taskId": "T0204",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Review project progress",
          "taskDescription": "Review the current project status and identify any pending work.",
          "taskData": {
            "assignedTo": "EMP002",
            "priority": "high",
            "dueDate": "2026-09-17"
          }
        },
        {
          "taskId": "T0205",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Organize documents",
          "taskDescription": "Sort and organize the team's documents and project files.",
          "taskData": {
            "assignedTo": "EMP002",
            "priority": "medium",
            "dueDate": "2026-09-27"
          }
        },
        {
          "taskId": "T0206",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Update client records",
          "taskDescription": "Review and update the latest client information in the system.",
          "taskData": {
            "assignedTo": "EMP002",
            "priority": "medium",
            "dueDate": "2026-09-19"
          }
        },
        {
          "taskId": "T0207",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Send follow-up emails",
          "taskDescription": "Send follow-up emails to the assigned clients and leads.",
          "taskData": {
            "assignedTo": "EMP002",
            "priority": "high",
            "dueDate": "2026-09-28"
          }
        },
        {
          "taskId": "T0208",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare presentation",
          "taskDescription": "Create and finalize the presentation for the upcoming review.",
          "taskData": {
            "assignedTo": "EMP002",
            "priority": "low",
            "dueDate": "2026-09-19"
          }
        }
      ],
      "newTask": 5,
      "active": 8,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "EMP003": {
      "id": "EMP003",
      "name": "Arjun Singh",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskId": "T0301",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Review project progress",
          "taskDescription": "Review the current project status and identify any pending work.",
          "taskData": {
            "assignedTo": "EMP003",
            "priority": "low",
            "dueDate": "2026-09-29"
          }
        },
        {
          "taskId": "T0302",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Send follow-up emails",
          "taskDescription": "Send follow-up emails to the assigned clients and leads.",
          "taskData": {
            "assignedTo": "EMP003",
            "priority": "high",
            "dueDate": "2026-09-16"
          }
        },
        {
          "taskId": "T0303",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Prepare weekly report",
          "taskDescription": "Compile this week's performance data and prepare the weekly report.",
          "taskData": {
            "assignedTo": "EMP003",
            "priority": "high",
            "dueDate": "2026-09-27"
          }
        },
        {
          "taskId": "T0304",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Update client records",
          "taskDescription": "Review and update the latest client information in the system.",
          "taskData": {
            "assignedTo": "EMP003",
            "priority": "high",
            "dueDate": "2026-09-25"
          }
        },
        {
          "taskId": "T0305",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Organize documents",
          "taskDescription": "Sort and organize the team's documents and project files.",
          "taskData": {
            "assignedTo": "EMP003",
            "priority": "high",
            "dueDate": "2026-09-16"
          }
        },
        {
          "taskId": "T0306",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Research competitors",
          "taskDescription": "Research competitor activities and summarize the key findings.",
          "taskData": {
            "assignedTo": "EMP003",
            "priority": "low",
            "dueDate": "2026-09-19"
          }
        },
        {
          "taskId": "T0307",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Update task tracker",
          "taskDescription": "Make sure all assigned work and progress are accurately reflected in the tracker.",
          "taskData": {
            "assignedTo": "EMP003",
            "priority": "low",
            "dueDate": "2026-09-25"
          }
        },
        {
          "taskId": "T0308",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare presentation",
          "taskDescription": "Create and finalize the presentation for the upcoming review.",
          "taskData": {
            "assignedTo": "EMP003",
            "priority": "medium",
            "dueDate": "2026-09-20"
          }
        },
        {
          "taskId": "T0309",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Team meeting",
          "taskDescription": "Attend the scheduled team meeting and discuss current priorities.",
          "taskData": {
            "assignedTo": "EMP003",
            "priority": "high",
            "dueDate": "2026-09-21"
          }
        },
        {
          "taskId": "T0310",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Check inventory",
          "taskDescription": "Review current inventory levels and report any items that need attention.",
          "taskData": {
            "assignedTo": "EMP003",
            "priority": "high",
            "dueDate": "2026-09-25"
          }
        }
      ],
      "newTask": 2,
      "active": 4,
      "completed": 3,
      "failed": 3
    }
  },
  {
    "EMP004": {
      "id": "EMP004",
      "name": "Ananya Gupta",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskId": "T0401",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Prepare presentation",
          "taskDescription": "Create and finalize the presentation for the upcoming review.",
          "taskData": {
            "assignedTo": "EMP004",
            "priority": "low",
            "dueDate": "2026-09-26"
          }
        },
        {
          "taskId": "T0402",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare weekly report",
          "taskDescription": "Compile this week's performance data and prepare the weekly report.",
          "taskData": {
            "assignedTo": "EMP004",
            "priority": "high",
            "dueDate": "2026-09-18"
          }
        },
        {
          "taskId": "T0403",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Organize documents",
          "taskDescription": "Sort and organize the team's documents and project files.",
          "taskData": {
            "assignedTo": "EMP004",
            "priority": "high",
            "dueDate": "2026-09-21"
          }
        }
      ],
      "newTask": 0,
      "active": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "EMP005": {
      "id": "EMP005",
      "name": "Vivek Kumar",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskId": "T0501",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Check inventory",
          "taskDescription": "Review current inventory levels and report any items that need attention.",
          "taskData": {
            "assignedTo": "EMP005",
            "priority": "medium",
            "dueDate": "2026-09-26"
          }
        },
        {
          "taskId": "T0502",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Update client records",
          "taskDescription": "Review and update the latest client information in the system.",
          "taskData": {
            "assignedTo": "EMP005",
            "priority": "medium",
            "dueDate": "2026-09-27"
          }
        },
        {
          "taskId": "T0503",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Review project progress",
          "taskDescription": "Review the current project status and identify any pending work.",
          "taskData": {
            "assignedTo": "EMP005",
            "priority": "low",
            "dueDate": "2026-09-22"
          }
        },
        {
          "taskId": "T0504",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Organize documents",
          "taskDescription": "Sort and organize the team's documents and project files.",
          "taskData": {
            "assignedTo": "EMP005",
            "priority": "high",
            "dueDate": "2026-09-26"
          }
        }
      ],
      "newTask": 2,
      "active": 2,
      "completed": 2,
      "failed": 0
    }
  }
]

export const setLocalStorage = () => {
  localStorage.setItem('admin', JSON.stringify(admin))
  localStorage.setItem('employees', JSON.stringify(employees))
}

export const getLocalStorage = () => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  const employees = JSON.parse(localStorage.getItem('employees'))
  return {admin, employees}
}