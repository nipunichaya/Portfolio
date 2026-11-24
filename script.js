const trainingData = [
            {
                title: "Test Training element",
                institution: "Angoda",
                period: "Pissu",
                icon: "fa-hospital-user",
                description: "Test project 123 ajdahfiaoknfi fdhaikdnai jashdak jkdad okho ajowkh akos ajin eirjhfao kmcha wjoak",
                featured: true
            },
            {
                title: "Internal Medicine & Inpatient Care",
                institution: "Manipal Teaching Hospital, Nepal",
                period: "Clinical Rotation",
                icon: "fa-hospital-user",
                description: "Conducted comprehensive patient histories, physical examinations, daily ward rounds, diagnostic workups, and formulation of multidisciplinary treatment plans.",
                featured: true
            },
            {
                title: "Emergency & Acute Care",
                institution: "Manipal Teaching Hospital, Nepal",
                period: "Clinical Rotation",
                icon: "fa-truck-medical",
                description: "Assisted in rapid patient triage, trauma stabilization, acute medical emergencies, suturing, wound care, and life-saving bedside procedures.",
                featured: true
            },
            {
                title: "Maternal & Child Health",
                institution: "Manipal Teaching Hospital, Nepal",
                period: "Clinical Rotation",
                icon: "fa-baby",
                description: "Experienced in antenatal care, obstetric support, pediatric growth monitoring, immunization counseling, and management of common childhood illnesses.",
                featured: true
            },
            {
                title: "General Surgery & Perioperative Care",
                institution: "Manipal Teaching Hospital, Nepal",
                period: "Clinical Rotation",
                icon: "fa-user-doctor",
                description: "Participated in preoperative assessments, surgical assisting, postoperative ward monitoring, drain management, and sterile dressing techniques.",
                featured: true
            },
            {
                title: "Community Medicine & Rural Outreach",
                institution: "Kaski District, Nepal",
                period: "Field Posting",
                icon: "fa-hand-holding-medical",
                description: "Delivered primary health screenings, sanitation awareness, and maternal nutrition education in underserved rural hill communities.",
                featured: false
            }
        ];

const projectsData = [
            {
                id: "rural-health-camp",
                title: "Rural Health Screening & Awareness Camp",
                category: "Community Health Initiative",
                year: "Pokhara, Nepal",
                icon: "fa-stethoscope",
                description: "Coordinated multidisciplinary health camps providing blood pressure, blood glucose, and maternal health screenings along with preventive lifestyle counseling.",
                articleContent: [
                    "Access to preventive healthcare in remote hilly regions around Pokhara remains a significant public health challenge. To bridge this gap, our medical team organized a series of community outreach health camps in collaboration with local community leaders.",
                    "During the initiative, over 250 residents received comprehensive vital sign assessments, random blood glucose testing, anemia screening, and individualized consultations. High-risk patients identified with uncontrolled hypertension or diabetes were provided structured referral pathways to Manipal Teaching Hospital for continuity of care.",
                    "Alongside clinical screenings, interactive workshops were conducted in the local language covering balanced nutrition, maternal hygiene, sanitation practices, and early warning signs of cardiovascular and metabolic conditions."
                ],
                featured: true
            },
            {
                id: "discharge-literacy-guide",
                title: "Patient Discharge & Medication Literacy Guide",
                category: "Clinical Quality Improvement",
                year: "Hospital Ward Initiative",
                icon: "fa-file-medical",
                description: "Developed simplified visual discharge instructions to improve medication adherence and follow-up attendance among chronic disease patients.",
                articleContent: [
                    "Complex polypharmacy regimens and dense medical jargon often lead to unintentional medication errors following hospital discharge, particularly among elderly patients and those with limited health literacy.",
                    "This quality improvement initiative introduced color-coded, icon-assisted discharge instruction sheets tailored for patients recovering from acute exacerbations of chronic conditions such as heart failure, COPD, and diabetes mellitus.",
                    "By pairing visual dosing schedules (morning, afternoon, night) with clear red-flag symptom checklists, patients and family caregivers reported greater confidence in managing home recovery and adhering to scheduled outpatient follow-up visits."
                ],
                featured: true
            },
            {
                id: "hypertension-diabetes-drive",
                title: "Hypertension & Diabetes Early Detection Drive",
                category: "Preventive Medicine",
                year: "Public Health Project",
                icon: "fa-heart-circle-check",
                description: "Organized community risk-stratification workshops focusing on early lifestyle modification and cardiovascular risk reduction.",
                articleContent: [
                    "Non-communicable diseases (NCDs) account for a growing burden of morbidity across South Asia, with many individuals remaining undiagnosed until complications arise.",
                    "Through structured community screening stations, participants underwent BMI measurement, waist-to-hip ratio calculation, blood pressure profiling, and dietary habit evaluation.",
                    "Each participant received a personalized cardiovascular risk summary card and practical, culturally appropriate guidance on sodium reduction, physical activity, and routine blood pressure monitoring."
                ],
                featured: true
            },
            {
                id: "antimicrobial-stewardship-audit",
                title: "Antimicrobial Stewardship Ward Audit",
                category: "Clinical Audit",
                year: "Internal Medicine",
                icon: "fa-capsules",
                description: "Reviewed inpatient antibiotic prescribing patterns to support rational antimicrobial use and adherence to institutional clinical guidelines.",
                articleContent: [
                    "Antimicrobial resistance poses a critical threat to modern inpatient care. This clinical audit evaluated empirical antibiotic selection, culture-sensitivity de-escalation practices, and duration of therapy across general medical wards.",
                    "Retrospective chart reviews highlighted opportunities to optimize timely intravenous-to-oral switch protocols and standardize documentation of antibiotic stop/review dates at 48–72 hours.",
                    "Findings were presented during departmental academic sessions to reinforce evidence-based prescribing habits and minimize unnecessary broad-spectrum antimicrobial exposure."
                ],
                featured: false
            }
        ];

const researchData = [
    {
        id: "acute-febrile-illnesses-study",
        title: "Clinical Profile & Outcomes of Acute Febrile Illnesses in a Tertiary Care Center",
        type: "Observational Study",
        venue: "Manipal College of Medical Sciences, Nepal",
        year: "MBBS Research",
        icon: "fa-microscope",
        description: "Evaluated seasonal epidemiological trends, diagnostic markers, and clinical recovery patterns among patients presenting with acute undifferentiated fever.",
        articleContent: [
            "Background: Acute undifferentiated febrile illness (AUFI) is one of the most frequent causes of hospital admission in Nepal, encompassing overlapping vector-borne and bacterial etiologies such as dengue, scrub typhus, enteric fever, and leptospirosis.",
            "Methods: A hospital-based observational analysis was conducted to document presenting symptoms, hematological parameters, serological profiles, and clinical outcomes among adult inpatients admitted with acute fever.",
            "Key Findings & Conclusion: Thrombocytopenia, transaminitis, and seasonal clustering during post-monsoon months served as vital clinical clues for early empirical management. Prompt recognition of warning signs significantly reduced hospital stay duration and prevented end-organ complications."
        ],
        featured: true
    },
    {
        id: "antenatal-care-adherence-survey",
        title: "Awareness & Adherence to Antenatal Care Guidelines Among Expectant Mothers",
        type: "Cross-Sectional Survey",
        venue: "Department of Community Medicine",
        year: "Public Health Research",
        icon: "fa-book-medical",
        description: "Assessed socio-demographic factors influencing timely antenatal visits, iron-folic acid supplementation, and institutional delivery preparedness.",
        articleContent: [
            "Background: Consistent antenatal care (ANC) is essential for reducing maternal and neonatal morbidity. Understanding barriers to completing recommended ANC visits helps tailor effective community health interventions.",
            "Methods: Structured interviews were administered to expectant mothers attending outpatient clinics and community outreach centers to evaluate knowledge of danger signs in pregnancy, micronutrient compliance, and birth preparedness.",
            "Key Findings & Conclusion: While awareness of routine checkups was high, geographic distance and household responsibilities occasionally delayed first-trimester registration. Strengthening community health worker follow-ups emerged as a practical strategy to improve early ANC engagement."
        ],
        featured: true
    },
    {
        id: "complex-endocrine-case-report",
        title: "Case Report: Multidisciplinary Management of Complex Endocrine Presentation",
        type: "Clinical Case Report",
        venue: "Department of Internal Medicine",
        year: "Clinical Case Study",
        icon: "fa-file-lines",
        description: "Documented diagnostic challenges, imaging correlations, and successful therapeutic stabilization in a rare inpatient clinical presentation.",
        articleContent: [
            "Case Presentation: A middle-aged patient presented with progressive fatigue, electrolyte disturbances, and nonspecific systemic symptoms that initially mimicked common infectious and metabolic disorders.",
            "Diagnostic Workup: Systematic hormonal assays combined with targeted cross-sectional imaging revealed an underlying endocrine etiology requiring coordinated medical stabilization.",
            "Discussion: This case underscores the importance of maintaining a broad differential diagnosis when evaluating persistent electrolyte abnormalities and highlights the value of multidisciplinary collaboration in achieving full clinical recovery."
        ],
        featured: false
    }
];

function createTrainingCard(item) {
    return `<article class="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] flex flex-col justify-between rounded-2xl p-7 bg-slate-50 border border-slate-100 hover:border-medical-200 hover:shadow-md transition">
        <div><div class="flex items-center justify-between gap-3 mb-5">
            <div class="w-12 h-12 rounded-xl bg-medical-100 text-medical-700 flex items-center justify-center shrink-0"><i class="fa-solid ${item.icon} text-xl"></i></div>
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-white text-medical-700 border border-slate-200/80">${item.period}</span>
        </div><h3 class="text-lg font-bold text-slate-900">${item.title}</h3>
        <p class="text-xs font-medium text-medical-700 mt-1">${item.institution}</p>
        <p class="text-sm text-slate-600 mt-3 leading-relaxed">${item.description}</p></div></article>`;
}

function createProjectCard(item) {
    return `<a href="article.html?section=projects&id=${item.id}" class="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] flex flex-col justify-between rounded-2xl p-7 bg-white border border-slate-200/80 hover:border-medical-400 hover:shadow-md transition">
        <div><div class="flex items-center justify-between gap-3 mb-5">
            <div class="w-12 h-12 rounded-xl bg-medical-50 text-medical-700 flex items-center justify-center shrink-0 border border-medical-100 group-hover:bg-medical-600 group-hover:text-white transition"><i class="fa-solid ${item.icon} text-xl"></i></div>
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-medical-50 text-medical-800">${item.category}</span>
        </div><h3 class="text-lg font-bold text-slate-900 group-hover:text-medical-700 transition">${item.title}</h3>
        <p class="text-xs font-medium text-slate-500 mt-1">${item.year}</p><p class="text-sm text-slate-600 mt-3 leading-relaxed">${item.description}</p></div>
        <div class="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-medical-700"><span>Read Project Details</span><i class="fa-solid fa-arrow-right ml-2 text-[11px]"></i></div></a>`;
}

function createResearchCard(item) {
    return `<a href="article.html?section=research&id=${item.id}" class="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] flex flex-col justify-between rounded-2xl p-7 bg-slate-50 border border-slate-100 hover:border-medical-300 hover:bg-white hover:shadow-md transition">
        <div><div class="flex items-center justify-between gap-3 mb-5">
            <div class="w-12 h-12 rounded-xl bg-medical-100 text-medical-700 flex items-center justify-center shrink-0 group-hover:bg-medical-600 group-hover:text-white transition"><i class="fa-solid ${item.icon} text-xl"></i></div>
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-white text-medical-700 border border-slate-200/80">${item.type}</span>
        </div><h3 class="text-lg font-bold text-slate-900 leading-snug group-hover:text-medical-700 transition">${item.title}</h3>
        <p class="text-xs font-medium text-medical-700 mt-1.5">${item.venue} &bull; ${item.year}</p><p class="text-sm text-slate-600 mt-3 leading-relaxed">${item.description}</p></div>
        <div class="mt-5 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-medical-700"><span>Read Full Article</span><i class="fa-solid fa-arrow-right ml-2 text-[11px]"></i></div></a>`;
}

function showToast(message) {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toast-message");
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.remove("translate-y-24", "opacity-0");
    setTimeout(() => toast.classList.add("translate-y-24", "opacity-0"), 3500);
}

function copyEmail() {
    const emailText = document.getElementById("email-text");
    if (!emailText) return;
    const input = document.createElement("input");
    input.value = emailText.textContent;
    document.body.appendChild(input);
    input.select();
    try { document.execCommand("copy"); showToast("Email address copied to clipboard!"); }
    catch (error) { showToast("Unable to copy email."); }
    document.body.removeChild(input);
}

document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    const menuButton = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    if (menuButton && menu) {
        menuButton.addEventListener("click", () => menu.classList.toggle("hidden"));
        document.querySelectorAll(".mobile-link").forEach(link => link.addEventListener("click", () => menu.classList.add("hidden")));
    }

    const trainingContainer = document.getElementById("training-container");
    if (trainingContainer) {
        trainingContainer.innerHTML = trainingData.map(createTrainingCard).join("");
    }
    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer) {
        const featured = projectsData.filter(item => item.featured);
        projectsContainer.innerHTML = (featured.length ? featured : projectsData).map(createProjectCard).join("");
    }
    const researchContainer = document.getElementById("research-container");
    if (researchContainer) {
        const featured = researchData.filter(item => item.featured);
        researchContainer.innerHTML = (featured.length ? featured : researchData).map(createResearchCard).join("");
    }

    const archiveContainer = document.getElementById("archive-container");
    if (archiveContainer) {
        const type = document.body.dataset.archive;
        archiveContainer.innerHTML = type === "projects"
                ? projectsData.map(createProjectCard).join("")
                : researchData.map(createResearchCard).join("");
    }

    const articleTitle = document.getElementById("article-title");
    if (articleTitle) {
        const params = new URLSearchParams(window.location.search);
        const section = params.get("section");
        const id = params.get("id");
        const dataset = section === "projects" ? projectsData : researchData;
        const item = dataset.find(entry => entry.id === id);
        if (!item) {
            articleTitle.textContent = "Article Not Found";
            document.getElementById("article-summary-box").textContent = "The requested page could not be found.";
            return;
        }
        document.getElementById("article-badge").textContent = section === "projects" ? item.category : item.type;
        document.getElementById("article-meta").textContent = section === "projects" ? item.year : `${item.venue} • ${item.year}`;
        articleTitle.textContent = item.title;
        document.getElementById("article-summary-box").textContent = item.description;
        document.getElementById("article-body").innerHTML = (item.articleContent || [item.description]).map(text => `<p>${text}</p>`).join("");
        document.getElementById("article-archive-btn").href = section === "projects" ? "medical-writing.html" : "research.html";
        document.getElementById("article-archive-label").textContent = section === "projects" ? "All Medical Writing" : "All Research";
        document.getElementById("article-back-label").textContent = section === "projects" ? "Back to Medical Writing" : "Back to Research";
        document.title = `${item.title} | Dr. Nipuni Lelwala`;
    }
});
