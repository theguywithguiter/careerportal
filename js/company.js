const params = new URLSearchParams(window.location.search);

const companyId = Number(params.get("id"));

const company = companies.find(item => item.id === companyId);


// Company Details


document.getElementById("companyLogo").src = company.logo;

document.getElementById("companyLogo").onerror = function(){

    this.src = "images/company-placeholder.png";

};

document.getElementById("companyName").textContent = company.name;

document.getElementById("companyRating").textContent = company.rating;

document.getElementById("companyIndustry").textContent = company.industry;

document.getElementById("companyLocation").textContent = company.location;

document.getElementById("companyEmployees").textContent = company.employees;

document.getElementById("companyJobs").textContent = company.jobs;

// ===========================
// About Company
// ===========================

const about = {

Google:"Google is a global technology company known for Search, Android, Cloud Computing, Artificial Intelligence and YouTube. It focuses on building products that help billions of users worldwide.",

Microsoft:"Microsoft develops Windows, Azure Cloud, Office 365, AI solutions and enterprise software used across the globe.",

Amazon:"Amazon is one of the world's largest e-commerce and cloud computing companies with innovation in AWS, logistics and AI.",

Adobe:"Adobe develops creative software like Photoshop, Illustrator, Premiere Pro and powerful digital marketing solutions.",

Infosys:"Infosys is a global IT consulting and digital services company helping businesses with cloud, AI and software engineering.",

TCS:"Tata Consultancy Services is India's largest IT services company delivering consulting, software development and digital transformation.",

Accenture:"Accenture is a multinational consulting company specializing in technology, cloud, operations and strategy.",

Wipro:"Wipro provides IT consulting, cloud solutions, cybersecurity and business process services worldwide.",

Zoho:"Zoho builds cloud-based business software including CRM, Mail, Books, Projects and Workplace solutions.",

IBM:"IBM focuses on enterprise software, hybrid cloud, artificial intelligence and consulting services.",

Oracle:"Oracle develops enterprise databases, cloud infrastructure and business software used globally.",

Cisco:"Cisco is a global networking and cybersecurity company providing hardware and cloud networking solutions.",

Samsung:"Samsung is a multinational electronics company producing smartphones, semiconductors and consumer electronics.",

Flipkart:"Flipkart is one of India's largest e-commerce companies offering online shopping, fintech and logistics services.",

Capgemini:"Capgemini provides consulting, technology services and digital transformation solutions worldwide.",

EY:"EY is a leading consulting and professional services firm specializing in assurance, tax and advisory.",

Deloitte:"Deloitte provides consulting, audit, financial advisory, tax and technology services globally.",

NVIDIA:"NVIDIA leads in AI computing, GPUs, gaming technology and autonomous systems.",

Paytm:"Paytm is a fintech company providing digital payments, banking and commerce services.",

"Tech Mahindra":"Tech Mahindra provides IT services, software engineering and digital transformation globally.",

Cognizant:"Cognizant is a multinational IT services company focused on digital engineering, AI and consulting."

};

document.getElementById("companyAbout").textContent = about[company.name];


// Open Positions


const openJobs = document.getElementById("openJobs");

const companyJobs = jobs.filter(job => job.company === company.name);

if(companyJobs.length === 0){

openJobs.innerHTML = "<p>No openings available.</p>";

}

else{

companyJobs.forEach(job=>{

openJobs.innerHTML += `

<div class="job-item">

<h3>${job.title}</h3>

<p>📍 ${job.location}</p>

<p>💼 ${job.experience}</p>

<p style="color:#8b5cf6;font-weight:600;">

${job.salary}

</p>

</div>

`;

});

}


// Explore Jobs


document.getElementById("exploreBtn").addEventListener("click",function(){

window.location.href=`jobs.html?search=${encodeURIComponent(company.name)}`;

});