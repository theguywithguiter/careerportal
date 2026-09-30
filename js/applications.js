
// GET APPLIED JOBS


const applicationsContainer = document.getElementById("applicationsContainer");
const emptyState = document.getElementById("emptyState");

let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

// Demo statuses
const statuses = [

    {
        text:"Application Received",
        class:"received"
    },

    {
        text:"Under Review",
        class:"review"
    },

    {
        text:"Shortlisted",
        class:"shortlisted"
    },

    {
        text:"Interview Scheduled",
        class:"interview"
    },

    {
        text:"Rejected",
        class:"rejected"
    }

];


// EMPTY STATE


if(appliedJobs.length === 0){

    document.querySelector(".applications-section").style.display="none";

    emptyState.style.display="flex";

}

else{

    emptyState.style.display="none";

    displayApplications();

}


// DISPLAY APPLICATIONS


function displayApplications(){

    applicationsContainer.innerHTML="";

    appliedJobs.forEach((job,index)=>{

        let status = job.status;

        if(!status){

            status = statuses[index % statuses.length];

            job.status = status;

        }

        let appliedDate = job.appliedDate || "Today";

        applicationsContainer.innerHTML += `

        <div class="application-card">

            <h2>

                ${job.title}

            </h2>

            <h3>

                ${job.company}

            </h3>

            <p>

                📍 ${job.location}

            </p>

            <p>

                💼 ${job.experience}

            </p>

            <p>

                💰 ${job.salary}

            </p>

            <p>

                📅 Applied On : ${appliedDate}

            </p>

            <span class="status ${status.class}">

                ${status.text}

            </span>

            <button onclick="viewJob(${job.id})">

                View Details

            </button>

        </div>

        `;

    });

    localStorage.setItem("appliedJobs",JSON.stringify(appliedJobs));

}


// VIEW DETAILS


function viewJob(id){

    window.location.href=`job-details.html?id=${id}`;

}