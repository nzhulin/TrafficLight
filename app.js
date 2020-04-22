let traficLight = document.querySelectorAll('.traffic-light')
let activeLight = 0;
let start = document.querySelector('.start')
let stop = document.querySelector('.stop')



start.onclick = () => timerId = setInterval(() => {
    changeLight()
}, 1000);

stop.onclick = () => clearInterval(timerId);

function changeLight() {
    traficLight[activeLight].className = 'traffic-light'
    activeLight++

    if (activeLight > 2) {
        activeLight = 0;
    }
    let currentLight = traficLight[activeLight]
    currentLight.classList.add(currentLight.getAttribute("color"))

}
