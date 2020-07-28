const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolder = () => {
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
        contentTarget.innerHTML += `
        <div class="person gawker"></div>
        `
    })
}