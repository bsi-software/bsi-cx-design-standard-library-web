import Alpine from '@alpinejs/csp';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';


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
    isConverting: false,
    ffmpeg: null, 
    fetchFile: null, 
    
    async init(){
        this.ffmpeg = createFFmpeg({ log: true });
        this.fetchFile = fetchFile;


        this.recordBtn = this.$root.querySelector('.record-btn');
        this.waveform = this.$root.querySelector('.waveform');
        this.timer = this.$root.querySelector('.timer');
        this.audioPlayback = this.$root.querySelector('.audio-playback');
        this.inputFile = this.$root.querySelector('.form-field input').id;
    },

    formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const m = String(Math.floor(totalSeconds / 60)).padStart(2,'0');
        const s = String(totalSeconds % 60).padStart(2,'0');
        return `${m}:${s}`;
    },

    async toggleRecording() {
        if (!this.mediaRecorder || this.mediaRecorder.state === "inactive") {
            // reset
            if(this.audioPlayback.classList.contains("visible")){
                this.audioPlayback.classList.remove("visible");
                this.audioPlayback.src = "";
                if(document.getElementById(this.inputFile)){
                    document.getElementById(this.inputFile).value = "";
                }   
            }

            // Registration start
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.mediaRecorder = new MediaRecorder(stream);
            this.chunks = [];
            // Show timer
            this.timer.textContent = "00:00";
            this.timer.style.display = "block";

            this.mediaRecorder.ondataavailable = e => this.chunks.push(e.data);
            this.mediaRecorder.onstop = async () => {
                const webmBlob = new Blob(this.chunks, { type: 'audio/webm' });

                // Convertion
                this.isConverting = true;
                this.timer.textContent = 'Converting...';

                const oggBlob = await this.convertToOgg(webmBlob);
                const url = URL.createObjectURL(oggBlob);

                this.audioPlayback.src = url;
                this.audioPlayback.classList.add('visible');

                // Insert file in the form field
                const file = new File([oggBlob], 'registration.ogg', { type: 'audio/ogg' });
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                const input = document.getElementById(this.inputFile);
                if (input) input.files = dataTransfer.files;

                this.isConverting = false;
                clearInterval(this.timerInterval);
                this.$root.querySelector('.recorder-top').classList.remove('recording');
                this.timer.textContent = '00:00';
                this.timer.style.display = 'none';
            };

            this.mediaRecorder.start();
            this.$root.querySelector('.recorder-top').classList.add('recording');

            // Timer
            this.startTime = Date.now();
            this.timerInterval = setInterval(() => {
                this.timer.textContent = this.formatTime(Date.now() - this.startTime);
            }, 500);

        } else if (this.mediaRecorder.state === "recording") {
            // Stop recording
            this.mediaRecorder.stop();
            this.$root.querySelector('.recorder-top').classList.remove('recording');
        } 
    },

    async convertToOgg(webmBlob) {
        if (!this.ffmpeg) {
            this.ffmpeg = createFFmpeg({ log: true });
            await this.ffmpeg.load();
        }

        const ffmpeg = this.ffmpeg;
        const fetchFile = this.fetchFile;

        if (!ffmpeg.loaded) {
            console.log('Loading FFmpeg...');
            await ffmpeg.load();
        }

        const data = await fetchFile(webmBlob);
        ffmpeg.FS('writeFile', 'input.webm', data);

        // .ogg convertion
        await ffmpeg.run('-i', 'input.webm', '-c:a', 'libopus', 'output.ogg');

        const oggData = ffmpeg.FS('readFile', 'output.ogg');
        return new Blob([oggData.buffer], { type: 'audio/ogg' });
    },

}));