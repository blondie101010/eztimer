class EzTimer {
    constructor(div, seconds, warn) {
        if (typeof div == 'undefined') {
            throw "The `div` parameter is required in EzTimer.";
        }
        
        this.element = document.getElementById(div);
        this.element.className += " ezTimer";
        
        if (typeof seconds == 'undefined') {
            seconds = 0;
        }
        
        if (typeof warn == 'undefined') {
            warn = 0;
        }
        
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
        var me = this;
        this.show();
        this.intervalId = setInterval(function() { me.countDown(); }, 1000);
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
