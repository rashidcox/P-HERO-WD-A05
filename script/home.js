//login check

let isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {
    window.location.href = "login.html";
}

const link = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
const allData = () => {
    fetch(link)
        .then(x => x.json())
        .then(y => allDataDisplay(y.data))
}
allData()

function allDataDisplay(a) {
    const item = idd('item_card');
    item.innerHTML = " ";
    const issue = idd('issues_num');
    issue.innerHTML = `${a.length} Issues`;
    a.forEach(element => {
        const cardD = document.createElement('div')
        cardD.innerHTML = `
      <div class="bg-white rounded-xl shadow border-t-4 ${element.status === 'open' ? 'border-green-500' : 'border-violet-500'}  p-5 flex flex-col justify-between">

                <!-- Top -->
                <div class="flex items-center justify-between mb-3">
                    <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <img src="${element.status === 'open' ? 'assets/Open-Status.png' : 'assets/Closed- Status .png'} " alt="">
                    </div>

                    <span class="text-xs font-semibold bg-red-100 text-red-600 px-3 py-1 rounded-full uppercase">
                        ${element.priority}
                    </span>
                </div>

                <!-- Title -->
                <h3 class="font-semibold text-gray-800 text-lg leading-snug line-clamp-1">
                    ${element.title}
                </h3>

                <!-- Description -->
                <p class="text-gray-500 text-sm mt-2 line-clamp-3">
                    ${element.description}
                </p>

                <!-- Tags -->
                <div class="flex gap-2 flex-wrap mt-4">
                    <span class="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                        <i class="fa-solid fa-bug"></i> BAG</span>
                    </span>

                    <span class="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                        <i class="fa-solid fa-life-ring"></i> HELP WANTED
                    </span>
                </div>

                <!-- Footer -->
                <div class="border-t mt-4 pt-3 text-xs text-gray-400">
                    <p class="truncate">#${element.id} by ${element.assignee}</p>
                    <p>${formatDate(element.updatedAt)}</p>
                </div>

            </div>
    `
        item.append(cardD);
    });
}

const openData = () => {
    fetch(link)
        .then(x => x.json())
        .then(y => openDataDisplay(y.data))
}

function openDataDisplay(o) {
    const item = idd('item_card');
    item.innerHTML = " ";
    const result = o.filter(element => element.status === 'open');

    result.forEach(element => {
        const cardD = document.createElement('div')
        cardD.innerHTML = `
      <div class="bg-white rounded-xl shadow border-t-4 ${element.status === 'open' ? 'border-green-500' : 'border-violet-500'}  p-5 flex flex-col justify-between">

                <!-- Top -->
                <div class="flex items-center justify-between mb-3">
                    <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <img src="${element.status === 'open' ? 'assets/Open-Status.png' : 'assets/Closed- Status .png'} " alt="">
                    </div>

                    <span class="text-xs font-semibold bg-red-100 text-red-600 px-3 py-1 rounded-full uppercase">
                        ${element.priority}
                    </span>
                </div>

                <!-- Title -->
                <h3 class="font-semibold text-gray-800 text-lg leading-snug line-clamp-1">
                    ${element.title}
                </h3>

                <!-- Description -->
                <p class="text-gray-500 text-sm mt-2 line-clamp-3">
                    ${element.description}
                </p>

                <!-- Tags -->
                <div class="flex gap-2 flex-wrap mt-4">
                    <span class="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                        <i class="fa-solid fa-bug"></i> BAG</span>
                    </span>

                    <span class="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                        <i class="fa-solid fa-life-ring"></i> HELP WANTED
                    </span>
                </div>

                <!-- Footer -->
                <div class="border-t mt-4 pt-3 text-xs text-gray-400">
                    <p class="truncate">#${element.id} by ${element.assignee}</p>
                    <p>${formatDate(element.updatedAt)}</p>
                </div>

            </div>
    `
        item.append(cardD);
    });
}

function closeData() {
    fetch(link)
        .then(x => x.json())
        .then(y => closeDataDisplay(y.data));
}
function closeDataDisplay(c) {
    const item = idd('item_card');
    item.innerHTML = " ";
    const result = c.filter(element => element.status === 'closed');

    result.forEach(element => {
        const cardD = document.createElement('div')
        cardD.innerHTML = `
      <div class="bg-white rounded-xl shadow border-t-4 ${element.status === 'open' ? 'border-green-500' : 'border-violet-500'}  p-5 flex flex-col justify-between">

                <!-- Top -->
                <div class="flex items-center justify-between mb-3">
                    <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <img src="${element.status === 'open' ? 'assets/Open-Status.png' : 'assets/Closed- Status .png'} " alt="">
                    </div>

                    <span class="text-xs font-semibold bg-red-100 text-red-600 px-3 py-1 rounded-full uppercase">
                        ${element.priority}
                    </span>
                </div>

                <!-- Title -->
                <h3 class="font-semibold text-gray-800 text-lg leading-snug line-clamp-1">
                    ${element.title}
                </h3>

                <!-- Description -->
                <p class="text-gray-500 text-sm mt-2 line-clamp-3">
                    ${element.description}
                </p>

                <!-- Tags -->
                <div class="flex gap-2 flex-wrap mt-4">
                    <span class="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                        <i class="fa-solid fa-bug"></i> BAG</span>
                    </span>

                    <span class="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                        <i class="fa-solid fa-life-ring"></i> HELP WANTED
                    </span>
                </div>

                <!-- Footer -->
                <div class="border-t mt-4 pt-3 text-xs text-gray-400">
                    <p class="truncate">#${element.id} by ${element.assignee}</p>
                    <p>${formatDate(element.updatedAt)}</p>
                </div>

            </div>
    `
        item.append(cardD);
    });
}





function setFilter(type) {
    if (type === 'closed') { closeData() }
    if (type === 'open') { openData() }
    if (type === 'all') { allData() }

    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => {
        btn.classList.remove("bg-[#4A00FF]", "text-white");
        btn.classList.add("bg-gray-200");
    });

    event.target.classList.remove("bg-gray-200");
    event.target.classList.add("bg-[#4A00FF]", "text-white");

}

// ceach id 
function idd(a) {
    return document.getElementById(a);
}


// date format function
function formatDate(dateString) {
    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}


