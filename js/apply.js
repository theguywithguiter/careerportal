
// CHECK LOGIN


const loggedIn = localStorage.getItem("loggedIn");

if(!loggedIn){

    window.location.href = "login.html";

}

// USER


const user = JSON.parse(localStorage.getItem("user"));

document.getElementById("name").value = user.name;

document.getElementById("email").value = user.email;


// GET JOB


const params = new URLSearchParams(window.location.search);

const jobId = Number(params.get("id"));

const job = jobs.find(item => item.id === jobId);


// DISPLAY JOB


document.getElementById("jobTitle").textContent = job.title;

document.getElementById("companyName").textContent = job.company;

document.getElementById("jobLocation").textContent = "📍 " + job.location;

document.getElementById("jobSalary").textContent = "💰 " + job.salary;

document.getElementById("jobExperience").textContent = "💼 " + job.experience;


// APPLY


document.getElementById("applyForm").addEventListener("submit",function(e){

    e.preventDefault();

    let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

    // Prevent duplicate applications

    const alreadyApplied = appliedJobs.some(item => item.id === job.id);

    if(alreadyApplied){

        alert("⚠️ You have already applied for this job!");

        window.location.href = "applications.html";

        return;

    }

    // Status list

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

    const randomStatus = statuses[Math.floor(Math.random()*statuses.length)];

    // Today's Date

    const today = new Date();

    const appliedDate = today.toLocaleDateString("en-IN",{

        day:"numeric",

        month:"long",

        year:"numeric"

    });

    // Save Application

    appliedJobs.push({

        ...job,

        appliedDate: appliedDate,

        status: randomStatus

    });

    localStorage.setItem("appliedJobs",JSON.stringify(appliedJobs));

    alert("🎉 Application Submitted Successfully!");

    window.location.href = "applications.html";

});