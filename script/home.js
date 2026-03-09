//login check

let isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {
  window.location.href = "login.html";
}



const link = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
const allData = () => {
  fetch(link)
    .then(x => x.json())
    .then(y => DataDisplay(y.data))
}
allData()

function DataDisplay(a) {
  const item = document.getElementById('item_card');
  item.innerHTML = " ";
  const issue = document.getElementById('issues_num');
  issue.innerHTML = `${a.length} Issues`;

  a.forEach(element => {
    console.log(element)
    const cardD = document.createElement('div')
    cardD.innerHTML = `
      <div class="bg-white rounded-xl shadow border-t-4 border-green-500 p-5 flex flex-col justify-between">

                <!-- Top -->
                <div class="flex items-center justify-between mb-3">
                    <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <img src="assets/Open-Status.png" alt="">
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
                    <p>1/15/2024</p>
                </div>

            </div>
    `

    item.append(cardD);
  });
}


