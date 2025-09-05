import Alpine from '@alpinejs/csp';

Alpine.data('audioRecorder', () => ({
    mediaRecorder: null,
    chunks: [],
    startTime: null,
    timerInterval: null,
    inputFile: null,
    recordBtn: null,
    waveform: null,
    timer: null,
    audioPlayback: null,
    audioInput: null,
    
    init(){
        this.recordBtn = this.$root.querySelector('.record-btn');
        this.waveform = this.$root.querySelector('.waveform');
        this.timer = this.$root.querySelector('.timer');
        this.audioPlayback = this.$root.querySelector('.audio-playback');
        this.audioInput = this.$root.querySelector('.audio-input');
        this.inputFile = this.$root.querySelector('.id-file-input').innerHTML;
        this.$root.querySelector('.id-file-input').remove();
        //console.log(this.inputFile);
        document.getElementById(this.inputFile)?.setAttribute("accept","audio/*");
    },

    formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const m = String(Math.floor(totalSeconds / 60)).padStart(2,'0');
        const s = String(totalSeconds % 60).padStart(2,'0');
        return `${m}:${s}`;
    },

    async toggleRecording() {

        if (!this.mediaRecorder || this.mediaRecorder.state === "inactive") {
            if(this.audioPlayback.classList.contains("visible")){
                this.audioPlayback.classList.remove("visible");
                this.audioPlayback.src = "";
                if(document.getElementById(this.inputFile)){
                    document.getElementById(this.inputFile).value = "";
                }   
            }
            // Inizio registrazione
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.mediaRecorder = new MediaRecorder(stream);
            this.chunks = [];
            // Show timer
            this.timer.textContent = "00:00";
            this.timer.style.display = "block";

            this.mediaRecorder.ondataavailable = e => this.chunks.push(e.data);
            this.mediaRecorder.onstop = () => {
                const blob = new Blob(this.chunks, { type: 'audio/webm' });
                const url = URL.createObjectURL(blob);
                this.audioPlayback.src = url;
                this.audioPlayback.classList.add("visible");

                // Inserisci il file nell’input nascosto
                const file = new File([blob], "registrazione.webm", { type: 'audio/webm' });
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                if(document.getElementById(this.inputFile)){
                    document.getElementById(this.inputFile).files = dataTransfer.files;
                }
                //this.audioInput.files = dataTransfer.files;

                clearInterval(this.timerInterval);
                this.waveform.classList.remove('recording');
                this.recordBtn.classList.remove('recording');
                this.timer.textContent = "00:00";
                this.timer.style.display = "none";
            };

            this.mediaRecorder.start();
            this.recordBtn.classList.add('recording');
            this.waveform.classList.add('recording');

            // Timer
            this.startTime = Date.now();
            this.timerInterval = setInterval(() => {
                this.timer.textContent = this.formatTime(Date.now() - this.startTime);
            }, 500);

        } else if (this.mediaRecorder.state === "recording") {
            // Ferma registrazione
            this.mediaRecorder.stop();
            this.recordBtn.classList.remove('recording');
            this.waveform.classList.remove('recording');
        } 
    }

}));