const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolder = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        contentTarget.innerHTML += `
        <div class="person eater"></div>
        `
    })
}

eventHub.addEventListener("click", eventObj =>{
    if(event.target.id === "foodTicket") {

        const foodEvent = new CustomEvent ("foodTicketPurchased")

    eventHub.dispatchEvent(foodEvent)

    }
})