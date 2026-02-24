const jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: "130,000 BDT",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "all"
  },

  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "130,000 BDT",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "all"
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "125,000 BDT",
    description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "all"
  },

  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "140,000 BDT",
    description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "all"
  },
  
  {
    id: 5,
    companyName: "NextGen IT",
    position: "QA Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "45,000 BDT",
    description: "Test and maintain software quality.",
    status: "all"
  },
  {
    id: 6,
    companyName: "CodeCraft",
    position: "Full Stack Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: "80,000 BDT",
    description: "Work on MERN stack projects.",
    status: "all"
  },
  {
    id: 7,
    companyName: "InnovateX",
    position: "Mobile App Developer",
    location: "Remote",
    type: "Contract",
    salary: "60,000 BDT",
    description: "Develop Android apps.",
    status: "all"
  },
  {
    id: 8,
    companyName: "BrightPath",
    position: "Support Engineer",
    location: "Khulna",
    type: "Full-time",
    salary: "30,000 BDT",
    description: "Provide technical support.",
    status: "all"
  }
];

let currentTab = "all";

function renderJobs() {
  const container = document.getElementById("jobsContainer");
  const emptyState = document.getElementById("emptyState");
  container.innerHTML = "";

  const filtered = jobs.filter(job =>
    currentTab === "all" ? true : job.status === currentTab
  );

  document.getElementById("tabCount").innerText = filtered.length;

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
  }

  filtered.forEach(job => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded shadow";

    card.innerHTML = `
      <h3 class="text-xl font-bold">${job.companyName}</h3>
      <p class="font-medium">${job.position}</p>
      <p>${job.location} | ${job.type}</p>
      <p class="text-green-600 font-semibold">${job.salary}</p>
      <p class="text-gray-600">${job.description}</p>

      <div class="flex gap-2 mt-4">
        <button onclick="updateStatus(${job.id}, 'interview')" 
          class="bg-green-500 text-white px-3 py-1 rounded">Interview</button>

        <button onclick="updateStatus(${job.id}, 'rejected')" 
          class="bg-red-500 text-white px-3 py-1 rounded">Rejected</button>

        <button onclick="deleteJob(${job.id})" 
          class="bg-gray-500 text-white px-3 py-1 rounded">Delete</button>
      </div>
    `;

    container.appendChild(card);
  });

  updateDashboard();
}

function updateStatus(id, status) {
  const job = jobs.find(j => j.id === id);
  job.status = status;
  renderJobs();
}

function deleteJob(id) {
  const index = jobs.findIndex(j => j.id === id);
  jobs.splice(index, 1);
  renderJobs();
}

function updateDashboard() {
  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText =
    jobs.filter(j => j.status === "interview").length;
  document.getElementById("rejectedCount").innerText =
    jobs.filter(j => j.status === "rejected").length;
}

function switchTab(tab) {
  currentTab = tab;
  renderJobs();
}

renderJobs();