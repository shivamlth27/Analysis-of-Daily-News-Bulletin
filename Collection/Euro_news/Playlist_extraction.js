// Run this code in Console

// -----Step 1-----
let goToBottom = setInterval(() => window.scrollBy(0, 1000), 200);

// -----Step 2-----
clearInterval(goToBottom);
let arrayVideos = [];
console.log('\n'.repeat(50));
const links = document.querySelectorAll('a');
for (const link of links) {
  if (link.id === "video-title") {
  link.href = link.href.split('&list=')[0];
    arrayVideos.push(link.name+','+link.href);
    console.log(link.name+',',link.href);
  }
}

// -----Step 3-----
let data = arrayVideos.join('\n');
let blob = new Blob([data], {type: 'text/csv'});
let elem = window.document.createElement('a');
elem.href = window.URL.createObjectURL(blob);
elem.download = 'my_data.csv';
document.body.appendChild(elem);
elem.click();
document.body.removeChild(elem);