const btnBuyTickets = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const butTickets = document.querySelector("#but-tickets");
const modalContainer = document.querySelector(".js-modal-container");
for (const btnBuyTicket of btnBuyTickets) {
    btnBuyTicket.onclick = function () {
        modal.classList.add("open");
    };
}

modalClose.onclick = function () {
    modal.classList.remove("open");
};
modal.onclick = function () {
    modal.classList.remove("open");
};
butTickets.onclick = function () {
    modal.classList.remove("open");
  
};
modalContainer.onclick = function (event) {
    event.stopPropagation();
};
