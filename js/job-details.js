const params = new URLSearchParams(window.location.search);

const jobId = Number(params.get("id"));

const job = jobs.find(item => item.id === jobId);

const container = document.getElementById("jobContainer");

if(job){

container.innerHTML = `

<div class="job-details-card">

    <span class="job-type">${job.type}</span>

    <h1>${job.title}</h1>

    <h2>${job.company}</h2>

    <div class="job-info">

        <span>📍 ${job.location}</span>

        <span>💰 ${job.salary}</span>

        <span>💼 ${job.experience}</span>

    </div>

    <div class="details-section">

        <h3>Job Description</h3>

        <p>${job.description}</p>

    </div>

    <div class="details-section">

        <h3>Skills Required</h3>

        <ul>

            ${job.skills.map(skill=>`<li>${skill}</li>`).join("")}

        </ul>

    </div>

    <div class="details-section">

        <h3>Responsibilities</h3>

        <ul>

            ${job.responsibilities.map(task=>`<li>${task}</li>`).join("")}

        </ul>

    </div>

    <div class="details-section">

        <h3>About Company</h3>

        <p>${job.about}</p>

    </div>

    <a href="apply.html?id=${job.id}" class="apply-btn">

    Apply Now

</a>

</div>

`;

}