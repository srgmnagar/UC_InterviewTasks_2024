async function fetchApi() {
    const response=await fetch('https://se-tasks.vercel.app/events');
    const data=await response.json();
    console.log(data);
    displayEvents(data);
} 
fetchApi()
function displayEvents(data) {
    const main=document.querySelector("main");
    main.innerHTML = '';
    console.log(main);
    
    data.forEach(data => {
        const card = `
            <div class="card">
            <h1>${data.name}</h1>
            <h2>${data.description}</h2>
            <div class="details">
                <h2>Timing: ${data.date}</h2>
                <h2>Time:${data.time}</h2>
                <h2>Venue: ${data.venue}</h2>
                <h2>Category: ${data.category}</h2>
            </div>
            <div class="tickets">
                <h2>Ticket Price: ${data.ticketPrice}</h2>
                <h2>Total Tickets: ${data.totalTickets}</h2>
                <h2>Available Ticket: ${data.availableTickets}</h2>
                <h2>Booked Ticket: ${data.bookedTickets}</h2>
            </div>
            <button>Book Now</button>
        </div>
        `;
        main.innerHTML += card;
    });
}
