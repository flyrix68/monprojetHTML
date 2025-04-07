// Global variables
let currentPage = 1;
const totalPages = 4;

// Sample document data for each page
const allDocuments = {
    1: [
        {
            type: "Course",
            subject: "Algorithms",
            title: "Advanced Sorting Algorithms",
            meta: "Course • Spring 2024 • Prof. Martin",
            icon: "PDF"
        },
        {
            type: "Exam",
            subject: "Database Systems",
            title: "Midterm Exam",
            meta: "Exam • Fall 2024 • Prof. Garcia",
            icon: "PDF"
        },
        {
            type: "Correction",
            subject: "Database Systems",
            title: "Midterm Exam Correction",
            meta: "Correction • Fall 2024 • Prof. Garcia",
            icon: "PDF"
        },
        {
            type: "Course",
            subject: "Computer Networks",
            title: "TCP/IP Protocols",
            meta: "Course • Fall 2024 • Prof. Chen",
            icon: "PDF"
        },
        {
            type: "Course",
            subject: "Artificial Intelligence",
            title: "Neural Networks",
            meta: "Course • Spring 2024 • Prof. Kim",
            icon: "PDF"
        },
        {
            type: "Exam",
            subject: "Linear Algebra",
            title: "Final Exam",
            meta: "Exam • Spring 2024 • Prof. Lewis",
            icon: "PDF"
        }
    ],
    2: [
        {
            type: "Course",
            subject: "Mathematical Analysis",
            title: "Differential Equations",
            meta: "Course • Fall 2024 • Prof. Zhang",
            icon: "PDF"
        },
        {
            type: "Exam",
            subject: "Artificial Intelligence",
            title: "Final Exam 2024",
            meta: "Exam • Spring 2024 • Prof. Kim",
            icon: "PDF"
        },
        {
            type: "Correction",
            subject: "Linear Algebra",
            title: "Final Exam Correction",
            meta: "Correction • Spring 2024 • Prof. Lewis",
            icon: "PDF"
        },
        {
            type: "Course",
            subject: "Database Systems",
            title: "SQL and NoSQL Databases",
            meta: "Course • Fall 2024 • Prof. Garcia",
            icon: "PDF"
        },
        {
            type: "Correction",
            subject: "Computer Networks",
            title: "Assignment 3 Solutions",
            meta: "Correction • Fall 2024 • Prof. Chen",
            icon: "PDF"
        },
        {
            type: "Course",
            subject: "Algorithms",
            title: "Dynamic Programming",
            meta: "Course • Fall 2024 • Prof. Martin",
            icon: "PDF"
        }
    ],
    3: [
        {
            type: "Exam",
            subject: "Mathematical Analysis",
            title: "Midterm Exam 2024",
            meta: "Exam • Fall 2024 • Prof. Zhang",
            icon: "PDF"
        },
        {
            type: "Correction",
            subject: "Artificial Intelligence",
            title: "Project Evaluation Guidelines",
            meta: "Correction • Spring 2024 • Prof. Kim",
            icon: "PDF"
        },
        {
            type: "Course",
            subject: "Computer Networks",
            title: "Network Security Protocols",
            meta: "Course • Spring 2024 • Prof. Chen",
            icon: "PDF"
        },
        {
            type: "Exam",
            subject: "Algorithms",
            title: "Final Exam 2023",
            meta: "Exam • Fall 2023 • Prof. Johnson",
            icon: "PDF"
        },
        {
            type: "Course",
            subject: "Linear Algebra",
            title: "Matrix Transformations",
            meta: "Course • Fall 2024 • Prof. Lewis",
            icon: "PDF"
        },
        {
            type: "Correction",
            subject: "Database Systems",
            title: "Final Exam Solutions",
            meta: "Correction • Spring 2023 • Prof. Rodriguez",
            icon: "PDF"
        }
    ],
    4: [
        {
            type: "Course",
            subject: "Artificial Intelligence",
            title: "Machine Learning Fundamentals",
            meta: "Course • Fall 2023 • Prof. Kim",
            icon: "PDF"
        },
        {
            type: "Exam",
            subject: "Computer Networks",
            title: "Final Exam 2023",
            meta: "Exam • Fall 2023 • Prof. Smith",
            icon: "PDF"
        },
        {
            type: "Correction",
            subject: "Mathematical Analysis",
            title: "Midterm Solutions",
            meta: "Correction • Fall 2024 • Prof. Zhang",
            icon: "PDF"
        },
        {
            type: "Course",
            subject: "Algorithms",
            title: "Graph Algorithms",
            meta: "Course • Spring 2023 • Prof. Johnson",
            icon: "PDF"
        },
        {
            type: "Exam",
            subject: "Linear Algebra",
            title: "Midterm Exam 2023",
            meta: "Exam • Fall 2023 • Prof. Davis",
            icon: "PDF"
        },
        {
            type: "Correction",
            subject: "Artificial Intelligence",
            title: "Assignment 4 Solutions",
            meta: "Correction • Spring 2023 • Prof. Wilson",
            icon: "PDF"
        }
    ]
};

// Function to render documents for a specific page
function renderDocuments(page) {
    const container = document.getElementById('documents-container');
    container.innerHTML = '';
    
    const documents = allDocuments[page];
    
    documents.forEach(doc => {
        const docCard = document.createElement('div');
        docCard.className = 'document-card';
        
        docCard.innerHTML = `
            <div class="card-header">
                <div class="doc-icon">${doc.icon}</div>
                <div>${doc.subject}</div>
            </div>
            <div class="card-body">
                <h3 class="doc-title">${doc.title}</h3>
                <div class="doc-meta">${doc.meta}</div>
                <div class="card-actions">
                    <a href="#" class="btn btn-primary">Download</a>
                    <button class="btn btn-outline">Preview</button>
                </div>
            </div>
        `;
        
        container.appendChild(docCard);
    });
}

// Function to change page
function changePage(page) {
    if (page < 1 || page > totalPages) return;
    
    // Update current page
    currentPage = page;
    
    // Render documents for this page
    renderDocuments(page);
    
    // Update pagination buttons active state
    const paginationButtons = document.querySelectorAll('.pagination .page-btn');
    if (paginationButtons) {
        paginationButtons.forEach((btn, index) => {
            if (index < totalPages) {
                btn.classList.toggle('active', (index + 1) === page);
            }
        });
    }
}

 // Function for next page button
function nextPage() {
    if (currentPage < totalPages) {
        changePage(currentPage + 1);
    }
}

// Function to activate tab
function activateTab(tab) {
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(t => {
        t.classList.remove('active');
    });
    
    // Add active class to clicked tab
    tab.classList.add('active');
    
    // Filter documents based on the selected tab
    const tabText = tab.textContent.trim();
    let documentType = '';
    
    switch(tabText) {
        case 'Courses':
            documentType = 'Course';
            break;
        case 'Exams':
            documentType = 'Exam';
            break;
        case 'Corrections':
            documentType = 'Correction';
            break;
        default:
            documentType = '';
    }
    
    filterDocumentsByType(documentType);
}

// Function to filter documents by type
function filterDocumentsByType(type) {
    const container = document.getElementById('documents-container');
    container.innerHTML = '';
    
    let filteredDocs = [];
    
    // If type is empty, show all documents for current page
    if (!type) {
        renderDocuments(currentPage);
        return;
    }
    
    // Filter documents across all pages
    for (let i = 1; i <= totalPages; i++) {
        const docsForPage = allDocuments[i].filter(doc => doc.type === type);
        filteredDocs = [...filteredDocs, ...docsForPage];
    }
    
    // Display filtered documents
    filteredDocs.forEach(doc => {
        const docCard = document.createElement('div');
        docCard.className = 'document-card';
        
        docCard.innerHTML = `
            <div class="card-header">
                <div class="doc-icon">${doc.icon}</div>
                <div>${doc.subject}</div>
            </div>
            <div class="card-body">
                <h3 class="doc-title">${doc.title}</h3>
                <div class="doc-meta">${doc.meta}</div>
                <div class="card-actions">
                    <a href="#" class="btn btn-primary">Download</a>
                    <button class="btn btn-outline">Preview</button>
                </div>
            </div>
        `;
        
        container.appendChild(docCard);
    });
}

// Function to show home page
function showHome() {
    // Reset to page 1 when returning to home
    currentPage = 1;

    const mainContent = document.getElementById('main-content');
    if (!mainContent) return; // Add null check for safety

    mainContent.innerHTML = `
        <!-- Search section -->
        <section class="search-section">
            <div class="search-container">
                <input type="text" class="search-input" placeholder="Search for courses, exams, or corrections...">
                <button class="search-button">Search</button>
            </div>
            <div class="filters">
                <div class="filter-group">
                    <label for="document-type">Type:</label>
                    <select id="document-type" class="filter-select">
                        <option value="all">All</option>
                        <option value="course">Course</option>
                        <option value="exam">Exam</option>
                        <option value="correction">Correction</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label for="subject">Subject:</label>
                    <select id="subject" class="filter-select">
                        <option value="all">All</option>
                        <option value="algorithms">Algorithms</option>
                        <option value="database">Database Systems</option>
                        <option value="networking">Computer Networks</option>
                        <option value="ai">Artificial Intelligence</option>
                        <option value="analysis">Mathematical Analysis</option>
                    </select>
                </div>
            </div>
        </section>

        <!-- Documents grid -->
        <section class="documents-section">
            <!-- Tabs -->
            <div class="tabs">
                <div class="tab active" onclick="activateTab(this)">All</div>
                <div class="tab" onclick="activateTab(this)">Courses</div>
                <div class="tab" onclick="activateTab(this)">Exams</div>
                <div class="tab" onclick="activateTab(this)">Corrections</div>
            </div>

            <!-- Documents Container -->
            <div id="documents-container" class="documents-grid"></div>

            <!-- Pagination -->
            <div class="pagination">
                <button class="page-btn" onclick="changePage(currentPage - 1)">‹</button>
                ${Array.from({length: totalPages}, (_, i) => 
                    `<button class="page-btn ${i + 1 === currentPage ? 'active' : ''}" onclick="changePage(${i + 1})">${i + 1}</button>`
                ).join('')}
                <button class="page-btn" onclick="changePage(currentPage + 1)">›</button>
            </div>
        </section>
    `;

    // Render initial documents
    renderDocuments(currentPage);
}