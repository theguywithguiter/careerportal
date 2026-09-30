const jobsGrid = document.querySelector(".jobs-grid");
const searchInput = document.getElementById("searchInput");
const params = new URLSearchParams(window.location.search);

const homeKeyword = params.get("search");
const homeLocation = params.get("location");

if(homeKeyword){

    searchInput.value = homeKeyword;

}

const jobFilters = document.querySelectorAll(".job-filter");
const locationFilters = document.querySelectorAll(".location-filter");
const experienceFilters = document.querySelectorAll(".experience-filter");

function displayJobs(jobList){

    jobsGrid.innerHTML = "";

    jobList.forEach(job => {

        jobsGrid.innerHTML += `

        <div class="job-card">

            <span class="job-type">${job.type}</span>

            <div class="job-header">

                <h3>${job.title}</h3>

                <button
                    class="wishlist-btn"
                    onclick="saveJob(${job.id})"
                    title="Save Job">

                    ♡ 

                </button>

            </div>

            <p class="company">${job.company}</p>

            <p class="location">📍 ${job.location}</p>

            <p class="experience">💼 ${job.experience}</p>

            <p class="salary">${job.salary}</p>

            <button class="job-apply-btn" onclick="openJob(${job.id})">

                Apply Now

            </button>

        </div>

        `;

    });

}

displayJobs(jobs);

if(homeKeyword){

    filterJobs();

}

function filterJobs(){

    let filteredJobs = [...jobs];

    // SEARCH

    const keyword = searchInput.value.toLowerCase();

if(keyword || homeLocation){

    filteredJobs = filteredJobs.filter(job => {

        const matchesSearch =
            keyword === "" ||
            job.title.toLowerCase().includes(keyword) ||
            job.company.toLowerCase().includes(keyword);

        const matchesLocation =
            !homeLocation ||
            job.location.toLowerCase().includes(homeLocation.toLowerCase());

        return matchesSearch && matchesLocation;

    });

}

    // JOB TYPE

    const selectedTypes = [];

    jobFilters.forEach(box => {

        if(box.checked){

            selectedTypes.push(box.value);

        }

    });

    if(selectedTypes.length){

        filteredJobs = filteredJobs.filter(job =>

            selectedTypes.includes(job.type)

        );

    }

    // LOCATION

    const selectedLocations = [];

    locationFilters.forEach(box => {

        if(box.checked){

            selectedLocations.push(box.value);

        }

    });

    if(selectedLocations.length){

    filteredJobs = filteredJobs.filter(job => {

        if(selectedLocations.includes(job.location)){

            return true;

        }

        if(
            selectedLocations.includes("Others") &&
            !["Kolkata","Bangalore","Hyderabad"].includes(job.location)
        ){

            return true;

        }

        return false;

    });

}

    // EXPERIENCE

    const selectedExperience = [];

    experienceFilters.forEach(box => {

        if(box.checked){

            selectedExperience.push(box.value);

        }

    });

    if(selectedExperience.length){

        filteredJobs = filteredJobs.filter(job =>

            selectedExperience.includes(job.experience)

        );

    }

    displayJobs(filteredJobs);

}

// EVENTS

searchInput.addEventListener("input", filterJobs);

jobFilters.forEach(box => {

    box.addEventListener("change", filterJobs);

});

locationFilters.forEach(box => {

    box.addEventListener("change", filterJobs);

});

experienceFilters.forEach(box => {

    box.addEventListener("change", filterJobs);

});
function openJob(id){

    window.location.href = `job-details.html?id=${id}`;

}
function saveJob(id){

    const job = jobs.find(item => item.id === id);

    let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

    const alreadySaved = savedJobs.some(item => item.id === id);

    if(alreadySaved){

        alert("Job already saved!");

        return;

    }

    savedJobs.push(job);

    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));

    alert("Job Saved to Profile!");

}