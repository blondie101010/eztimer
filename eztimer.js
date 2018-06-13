'use strict';

class EzTimer {
    /**
     * 
     * @param {(string|HTMLElement)} selector target HTML element
     * @param {number} seconds 
     * @param {number} warn 
     */
    constructor(selector, seconds = 0, warn  = 0){
        if (typeof selector === 'undefined') {
            throw "The `div` parameter is required in EzTimer.";
        }

        if (selector instanceof HTMLElement){
            this.element = selector;
        }else{
            this.element = document.querySelector(selector);
        }
        this.element.classList.add("ezTimer");
         
        this.warn = warn;
        this.intervalId = 0;
        this.seconds = seconds;
        this.call = null;
        
        this.start();
    }
    
    update(seconds) {
        if (seconds < 1) {
            seconds = 0;
    
            this.element.style.color = "red";

            this.stop();
        }
        else if (seconds <= this.warn) {
            this.element.style.color = "orange";
        }

        this.seconds = seconds;
        this.show();

        if (!seconds && this.call) {
            setTimeout(this.call, 1);
        }
    }

    countDown() {
        this.update(this.seconds - 1);
    }
    
    start() {
        this.show();
        this.intervalId = setInterval(() => {
            this.countDown()
        }, 1000);
    }
    
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = 0;
        }
    }

    show() {
        let hours = Math.floor(this.seconds / 3600);
        let seconds = this.seconds - hours * 3600;
        let minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
    
        this.element.innerHTML = ("" + hours).padStart(2, "00") + ":" + ("" + minutes).padStart(2, "00") + ":" + ("" + seconds).padStart(2, "00");
    }
}
