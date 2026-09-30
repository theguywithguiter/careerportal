// ===========================
// COUNTERS (NO ANIMATION)
// ===========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    if(target === 95){

        counter.textContent = target + "%";

    }

    else if(target >= 1000){

        counter.textContent = "10K+";

    }

    else{

        counter.textContent = target + "+";

    }

});

// ===========================
// LOGIN STATUS
// ===========================

const user = JSON.parse(localStorage.getItem("user"));

const loggedIn = localStorage.getItem("loggedIn");

const navButtons = document.getElementById("navButtons");

if(loggedIn && user){

    navButtons.innerHTML = `

        <a href="profile.html" class="login-btn">

            👋 Hi, ${user.name}

        </a>

        <a href="#" id="logout" class="signup-btn">

            Logout

        </a>

    `;

    document.getElementById("logout").addEventListener("click",function(){

        localStorage.removeItem("loggedIn");

        window.location.reload();

    });

}

// ===========================
// HOME SEARCH
// ===========================

const homeSearch = document.getElementById("homeSearch");

const homeLocation = document.getElementById("homeLocation");

const homeSearchBtn = document.getElementById("homeSearchBtn");

if(homeSearch && homeSearchBtn){

    homeSearchBtn.addEventListener("click", function(){

        const keyword = homeSearch.value.trim();

        const location = homeLocation.value.trim();

        window.location.href =
        `jobs.html?search=${encodeURIComponent(keyword)}&location=${encodeURIComponent(location)}`;

    });

}