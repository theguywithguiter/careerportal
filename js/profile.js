const user = JSON.parse(localStorage.getItem("user"));
const loggedIn = localStorage.getItem("loggedIn");

if(!loggedIn || !user){

    window.location.href = "login.html";

}


// User Details


document.getElementById("userName").textContent = user.name;
document.getElementById("userEmail").textContent = user.email;


// Applied Jobs Count


const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

document.getElementById("appliedCount").textContent = appliedJobs.length;


// Saved Jobs


let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

document.getElementById("savedCount").textContent = savedJobs.length;

const savedJobsList = document.getElementById("savedJobsList");

function loadSavedJobs(){

    savedJobsList.innerHTML = "";

    if(savedJobs.length === 0){

        savedJobsList.innerHTML = `

        <div class="saved-job">

            <h3>No Saved Jobs ❤️</h3>

            <p>You haven't saved any jobs yet.</p>

        </div>

        `;

        return;

    }

    savedJobs.forEach(job=>{

        savedJobsList.innerHTML += `

        <div class="saved-job">

            <h3>${job.title}</h3>

            <p><strong>${job.company}</strong></p>

            <p>📍 ${job.location}</p>

            <p>💼 ${job.experience}</p>

            <p class="salary">${job.salary}</p>

            <div class="saved-buttons">

                <button class="view-btn"
                onclick="viewJob(${job.id})">

                    View Details

                </button>

                <button class="remove-btn"
                onclick="removeSavedJob(${job.id})">

                    Remove

                </button>

            </div>

        </div>

        `;

    });

}

loadSavedJobs();


// View Job


function viewJob(id){

    window.location.href = `job-details.html?id=${id}`;

}


// Remove Saved Job


function removeSavedJob(id){

    savedJobs = savedJobs.filter(job => job.id !== id);

    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));

    document.getElementById("savedCount").textContent = savedJobs.length;

    loadSavedJobs();

}


// Logout


document.getElementById("logoutBtn").addEventListener("click",()=>{

    localStorage.removeItem("loggedIn");

    window.location.href="login.html";

});