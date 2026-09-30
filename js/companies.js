const companiesGrid = document.getElementById("companiesGrid");
const companySearch = document.getElementById("companySearch");


// Display Companies


function displayCompanies(companyList){

    companiesGrid.innerHTML = "";

    companyList.forEach(company=>{

        companiesGrid.innerHTML += `

        <div class="company-card">

            <img
                src="${company.logo}"
                alt="${company.name}"
                class="company-logo"
                onerror="this.src='images/company-placeholder.png'">

            <h3>${company.name}</h3>

            <p class="rating">

                ⭐ ${company.rating}

            </p>

            <p class="industry">

                ${company.industry}

            </p>

            <p class="location">

                📍 ${company.location}

            </p>

            <p>

                👨‍💻 ${company.employees}

            </p>

            <p class="jobs">

                💼 ${company.jobs} Open Jobs

            </p>

            <button onclick="viewCompany(${company.id})">

                View Company

            </button>

        </div>

        `;

    });

}

displayCompanies(companies);


// Search


companySearch.addEventListener("input",function(){

    const keyword = this.value.toLowerCase();

    const filteredCompanies = companies.filter(company =>

        company.name.toLowerCase().includes(keyword) ||

        company.industry.toLowerCase().includes(keyword) ||

        company.location.toLowerCase().includes(keyword)

    );

    displayCompanies(filteredCompanies);

});


// View Company


function viewCompany(id){

    window.location.href = `company.html?id=${id}`;

}