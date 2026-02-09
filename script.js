<script>

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttonsContainer = document.querySelector(".buttons");

function moveButton() {

    const containerRect = buttonsContainer.getBoundingClientRect();
    const yesRect = yesBtn.getBoundingClientRect();

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const padding = 10;

    let randomX, randomY;
    let overlap;

    do {

        randomX = Math.random() * (containerRect.width - btnWidth - padding);
        randomY = Math.random() * (containerRect.height - btnHeight - padding);

        const noRect = {
            left: containerRect.left + randomX,
            right: containerRect.left + randomX + btnWidth,
            top: containerRect.top + randomY,
            bottom: containerRect.top + randomY + btnHeight
        };

        overlap = !(
            noRect.right < yesRect.left ||
            noRect.left > yesRect.right ||
            noRect.bottom < yesRect.top ||
            noRect.top > yesRect.bottom
        );

    } while (overlap);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function goNextPage() {
    window.location.href = "next.html";
}

</script>
