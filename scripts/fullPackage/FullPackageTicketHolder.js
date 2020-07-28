const contentTargets = document.querySelectorAll(".people")
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolder = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
        contentTargets.forEach(target => {
        target.innerHTML += `
        <div class="person bigSpender"></div>
        `
        })
    })
}