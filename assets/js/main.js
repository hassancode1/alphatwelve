/*=============== SHOW SIDEBAR ===============*/
let currentThemeColor = '#64748B';
const showSidebar = (toggleId, sidebarId, headerId, mainId) => {
    const toggle = document.getElementById(toggleId),
          sidebar = document.getElementById(sidebarId),
          header = document.getElementById(headerId),
          main = document.getElementById(mainId)
    
    if(toggle && sidebar && header && main){
        toggle.addEventListener('click', ()=>{
            /* Show sidebar */
            sidebar.classList.toggle('show-sidebar')
            /* Add padding header */
            header.classList.toggle('left-pd')
            /* Add padding main */
            main.classList.toggle('left-pd')
        })
    }
}

showSidebar('header-toggle','sidebar', 'header', 'main')

/*=============== LINK ACTIVE ===============*/
const sidebarLink = document.querySelectorAll('.sidebar__list a')

function linkColor(){
    sidebarLink.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

sidebarLink.forEach(l => l.addEventListener('click', linkColor))

const bottomLink = document.querySelectorAll('.bottom-nav a')

function linkColorBottom(){
    bottomLink.forEach(l => l.classList.remove('active-link-bottom'))
    this.classList.add('active-link-bottom')
}
bottomLink.forEach(l => l.addEventListener('click', linkColorBottom))
/*=============== DARK LIGHT THEME ===============*/
const themeSwitch = document.getElementById('theme-button')
const darkTheme = 'dark-theme'

const selectedTheme = localStorage.getItem('selected-theme')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeSwitch.checked = selectedTheme === 'dark'
}

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle(darkTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    if (getCurrentTheme() === 'dark') {
        currentThemeColor = '#ffff'
    } else {
        currentThemeColor = '#64748B';
    }
  renderTable()
    updateChartColors();
})

/*=============== COLLAPSE SIDEBAR ===============*/
const collapseSidebar = document.getElementById('collapse-sidebar')
const sidebar = document.getElementById('sidebar')
const header = document.getElementById('header')
const main = document.getElementById('main')

collapseSidebar.addEventListener('click', (e) => {
    e.preventDefault()
    sidebar.classList.toggle('collapsed')
    header.classList.toggle('left-pd')
    main.classList.toggle('left-pd')
    

    const icon = collapseSidebar.querySelector('i')
    const span = collapseSidebar.querySelector('span')
    
    if (sidebar.classList.contains('collapsed')) {
        icon.classList.replace('ri-arrow-left-s-line', 'ri-arrow-right-s-line')
        span.textContent = 'Expand'
    } else {
        icon.classList.replace('ri-arrow-right-s-line', 'ri-arrow-left-s-line')
        span.textContent = 'Collapse'
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) {
        sidebar.classList.remove('collapsed')
        header.classList.remove('left-pd')
        main.classList.remove('left-pd')
    }
})
const ctx = document.getElementById('myBarChart')
const myBarChart  =new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Data set',
        backgroundColor: '#8576FF',
        data:[700, 900, 700, 400, 1000, 500, 800, 400, 800, 700, 900, 600],
       borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
                legend: {
                        display: false
                    },
                }
    }
  });
const updateChartColors = () => {
    myBarChart.options.scales.x.ticks.color = currentThemeColor
    myBarChart.options.scales.y.ticks.color = currentThemeColor
    
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        label.style.color = currentThemeColor
    });
    
    myBarChart.update();
};
;
const swiper = new Swiper('.swiper', {
    loop: true,  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + '"></div>';
      },
    },
    slidesPerView: 1,
    spaceBetween: 10,
  });


  document.addEventListener('DOMContentLoaded', () => {
    renderTable()
  populateDateFilters()
  populateNameFilter
});


const events = [
    { name: "Tech Conference 2024", speaker: "John Doe", date: "2024-06-15", status: "In Progress" },
    { name: "AI Symposium", speaker: "Jane Smith", date: "2024-07-22", status: "Completed" },
    { name: "Web Dev Workshop", speaker: "Bob Johnson", date: "2024-05-10", status: "In Progress" },
    { name: "UX/UI Design Meetup", speaker: "Diana White", date: "2024-06-30", status: "In Progress" },
    { name: "Blockchain Seminar", speaker: "Ethan Black", date: "2024-07-12", status: "Completed" },
    { name: "Agile Methodology Seminar", speaker: "Ian Yellow", date: "2024-06-25", status: "In Progress" },
    { name: "DevOps Summit", speaker: "Julia Purple", date: "2024-07-30", status: "Completed" },
    { name: "Mobile App Development Workshop", speaker: "Kevin Orange", date: "2024-08-15", status: "In Progress" },
    { name: "Big Data Analytics Conference", speaker: "Liam Indigo", date: "2024-09-22", status: "Completed" },
    { name: "AR/VR Technology Expo", speaker: "Mia Violet", date: "2024-10-05", status: "In Progress" },
    { name: "Ethical Hacking Workshop", speaker: "Olivia Magenta", date: "2024-06-20", status: "In Progress" },
    { name: "Artificial Intelligence in Healthcare", speaker: "Peter Cyan", date: "2024-07-25", status: "Completed" },
    { name: "Robotics and Automation Conference", speaker: "Quinn Lime", date: "2024-08-30", status: "In Progress" },
    { name: "5G Technology Summit", speaker: "Rachel Maroon", date: "2024-09-15", status: "Completed" },
    { name: "E-commerce Strategies Seminar", speaker: "Ulysses Navy", date: "2024-06-28", status: "In Progress" },
    { name: "Digital Marketing Masterclass", speaker: "Violet Plum", date: "2024-07-18", status: "Completed" },
    { name: "Cybersecurity in IoT Devices", speaker: "William Beige", date: "2024-08-25", status: "In Progress" },
    { name: "Future of Work Symposium", speaker: "Xena Gold", date: "2024-09-10", status: "Completed" },
    { name: "Blockchain in Supply Chain", speaker: "Yara Silver", date: "2024-10-15", status: "In Progress" },
    { name: "AI Ethics and Governance", speaker: "Zack Bronze", date: "2024-11-20", status: "Completed" }
];

function getStatusColor(status) {
    switch(status.toLowerCase()) {
        case 'in progress':
            return '#10B981'; 
        case 'completed':
            return '#3B82F6';
        default:
            return '#9E9E9E'; 
    }
}

const lightThemeColors = {
    completed: { bg: '#D1FAE5', text: '#10B981' },
    inProgress: { bg: '#DBEAFE', text: '#3B82F6' },
    default: { bg: '#F3F4F6', text: '#9E9E9E' }
};

const darkThemeColors = {
    completed: { bg: 'none', text: '#10B981' ,border: '#10B981' },
    inProgress: { bg: 'none', text: '#3B82F6', border: '#3B82F6'},
    default: { bg: '#374151', text: '#9E9E9E' }
};

function getStatusColorDesktop(status) {
    const isDarkMode = document.body.classList.contains(darkTheme);
    console.log(isDarkMode)
    const colors = isDarkMode ? darkThemeColors : lightThemeColors;
    switch(status.toLowerCase()) {
        case 'in progress':
            return colors.inProgress;
        case 'completed':
            return colors.completed;
        default:
            return colors.default;
    }
}


function populateNameFilter() {
    const nameFilter = document.getElementById('name-filter');
    const nameFilterMoble = document.getElementById('name-filter-mobile');
    const uniqueNames = [...new Set(events.map(event => event.name))]; 

    uniqueNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        nameFilter.appendChild(option);
        nameFilterMoble.appendChild(option);
    });
}

function populateDateFilters() {
    const DateFilter = document.getElementById('date-filter');
    const DateFilterMobile = document.getElementById('date-filter-mobile');

    const dates = [...events.map(event => event.date)]; 
    
    dates.forEach(date => {
        const option = document.createElement('option');
        option.value = date;
        option.textContent = new Date(date).toLocaleDateString();
        DateFilter.appendChild(option);
        DateFilterMobile.appendChild(option);
    });
}
let currentPage = 1;
let itemsPerPage = 5;

const paginationNumbers = document.getElementById("pagination-numbers");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
let display = document.querySelector(".main__display-title")

function renderTable() {
    const tableBody = document.getElementById('table-body');
    const mobileList = document.getElementById('mobile-list');
    const statusFilter = document.getElementById('status-filter').value || document.getElementById('status-filter-mobile').value;
    const nameFilter = document.getElementById('name-filter').value || document.getElementById('name-filter-mobile').value;
    const searchTerm = (document.getElementById('search-input').value || document.getElementById('search-input-mobile').value).toLowerCase();
    const startDate = document.getElementById('date-filter').value || document.getElementById('date-filter-mobile').value;
   
    const filteredEvents = events.filter(event => {
        const matchesStatus = statusFilter === '' || event.status.toLowerCase() === statusFilter.toLowerCase();
        const matchesName = nameFilter === '' || event.name === nameFilter;
        const matchesSearch = event.name.toLowerCase().includes(searchTerm);
        const matchesDate = startDate === '' || event.date === startDate;
        return matchesStatus && matchesName && matchesSearch && matchesDate;
    });

    const pageCount = Math.ceil(filteredEvents.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedEvents = filteredEvents.slice(startIndex, endIndex);

    tableBody.innerHTML = '';
    mobileList.innerHTML = '';

    if (paginatedEvents.length === 0) {
            const emptyRow = tableBody.insertRow();
            emptyRow.innerHTML = `
                <td colspan="4" class="empty-state">
                    <div class="empty-state__content">
                        <i class="ri-file-list-3-line empty-state__icon"></i>
                        <p>No events found</p>
                    </div>
                </td>
            `;

        const emptyCard = document.createElement('div');
        emptyCard.className = 'mobile-card empty-state';
        emptyCard.innerHTML = `
            <div class="empty-state__content">
                <i class="ri-file-list-3-line empty-state__icon"></i>
                <p>No events found</p>
            </div>
        `;
        mobileList.appendChild(emptyCard);
    } else {
        paginatedEvents.forEach(event => {
            const statusColorDesktop = getStatusColorDesktop(event.status);
            const statusColor = getStatusColor(event.status);
            const row = tableBody.insertRow();
            row.innerHTML = `
            <tr>
                <td class="event-name">${event.name}</td>
                <td>${event.speaker}</td>
                <td>${event.date}</td>
                <td>
                    <div class="status-indicator" style="background-color: ${statusColorDesktop.bg}; border: 1px solid ${statusColorDesktop.border}; color: ${statusColorDesktop.text};">
                        <div class="status-dot" style="background-color: ${statusColorDesktop.text};"></div>
                        ${event.status}
                    </div>
                </td>
            </tr>`;
            row.addEventListener('click', () => {
                openModal(event);
            });

        
        
            const card = document.createElement('div');
            card.className = 'mobile-card';
            card.innerHTML = `
            <div class="card__wrapper">
                <i class="ri-arrow-right-s-line view__icons"></i>
                <h2 class="details__title" style="cursor:pointer">${event.name}</h2>
                <div style="background-color: ${statusColor}" class="status-indicator">
                    <span style="background-color: ${statusColor}"></span>${event.status}
                </div>
            </div>
            <div class="details" style="display: none;">
                <h3 class="details__name">${event.speaker}</h3>
                <h3 class="details__name">${event.date}</h3>
            </div>`;
            mobileList.appendChild(card);
            const viewIcon = card.querySelector('.view__icons');
            const detailItem = card.querySelector('.details__title');
            viewIcon.addEventListener('click', () => toggleDetails(card));
            detailItem.addEventListener('click', () => openModal(event));
        });
        display.textContent=`Displaying ${paginatedEvents.length} results`
    }

    updatePagination(pageCount);
}


document.getElementById('status-filter').addEventListener('change', renderTable);
document.getElementById('name-filter').addEventListener('change', renderTable);
document.getElementById('date-filter').addEventListener('change', renderTable);
document.getElementById('search-input').addEventListener('input', renderTable);

document.getElementById('status-filter-mobile').addEventListener('change', renderTable);
document.getElementById('name-filter-mobile').addEventListener('change', renderTable);
document.getElementById('date-filter-mobile').addEventListener('change', renderTable);
document.getElementById('search-input-mobile').addEventListener('input', renderTable);



function toggleDetails(card) {
    const details = card.querySelector('.details');
    const icon = card.querySelector('.view__icons');
    
    if (details.style.display === 'none') {
        details.style.display = 'flex';
        icon.classList.replace('ri-arrow-right-s-line', 'ri-arrow-down-s-line');
    } else {
        details.style.display = 'none';
        icon.classList.replace('ri-arrow-down-s-line', 'ri-arrow-right-s-line');
    }
}



function updatePagination(pageCount) {
    paginationNumbers.innerHTML = "";
    
    for (let i = 1; i <= pageCount; i++) {
        const pageNumber = document.createElement("button");
        pageNumber.className = "pagination-number";
        pageNumber.innerHTML = i;
        pageNumber.setAttribute("page-index", i);
        pageNumber.setAttribute("aria-label", "Page " + i);

        if (i === currentPage) {
            pageNumber.classList.add("active");
        }

        pageNumber.addEventListener("click", () => {
            currentPage = i;
            renderTable();
        });

        paginationNumbers.appendChild(pageNumber);
    }

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === pageCount;
}

const rowSelector = document.getElementById('row-selector');
rowSelector.addEventListener('change', (e) => {
    console.log("working")
    itemsPerPage = parseInt(e.target.value);
    currentPage = 1; 
    renderTable();
});


prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
});

nextButton.addEventListener("click", () => {
    const pageCount = Math.ceil(events.length / itemsPerPage);
    if (currentPage < pageCount) {
        currentPage++;
        renderTable();
    }
});

function viewDetails(eventName) {
    alert(`Viewing details for ${eventName}`);
}

function openModal(event) {
    const modal = document.getElementById('eventModal');
    const modalEventName = document.getElementById('modalEventName');
    const modalEventDate = document.querySelector('.eventdate');
    modalEventName.textContent = event.name;  
    modalEventDate.textContent = `Event Date: ${event.date}`
    modal.style.display = 'block';
  }
  


  function closeModal() {
    const modal = document.getElementById('eventModal');
    modal.style.display = 'none';
  }
  document.querySelector(".close-modal").addEventListener('click', closeModal);


renderTable();
populateNameFilter();
populateDateFilters()