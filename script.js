let 
    video = document.getElementById('vid'),
    remainingTime = document.getElementById('remainingTime'),
    totalTime = document.getElementById('totalTime'),
    playPause = document.getElementById('playPause'),
    stop = document.getElementById('stop'),
    rewind = document.getElementById('rewind'),
    begin = document.getElementById('begin'),
    end = document.getElementById('end'),
    fastForward = document.getElementById('fastForward'),
    volume = document.getElementById('volume'),
    mute = document.getElementById('mute'),
    scrubber = document.getElementById('scrubber'),
    playbackRate = document.getElementById('playbackRate'),

    TIME_STEP =5,
    vol = 0;

    const formatTime = function (seconds) {
        //round off seconds
        seconds = Math.round(seconds);
        let minute = 0;
        if (seconds >= 60) {   
            minute = Math.floor(seconds/ 60);
            seconds = (seconds - (minute * 60));
        }

        seconds = seconds + '';
        if (seconds.length == 1) {
            seconds = '0' + seconds;
        }
        return minute + ':' + seconds;
    }

    const playOrPauseVideo = function () {
        if (video.paused || video.ended) {
            //call the inbuilt .play() to play
            video.play();
            playPause.innerText = 'Pause';
        }else{
            //call the inbuilt .pause()
            video.pause();
            playPause.innerText = 'Play';
        }
    }
    video.addEventListener('click', playOrPauseVideo, false);
    playPause.addEventListener('click', playOrPauseVideo, false);

    //implementing the stop is tricky as no inbuilt js function for stoping a video
    //target the stop button
    stop.addEventListener('click', ()=>{
        //call the pause
        video.pause();
        //set current time to 0, the very beginner
        video.currentTime = 0
        playPause.innerText = 'Play';
        video.playbackRate =1;
        playbackRate.value = 1;
    }, false)

    //Begin btn
    begin.addEventListener('click', ()=>{
        //set video time back to the begining without pausing 
        video.currentTime = 0;
    }, false);
    //Rewind
    rewind.addEventListener('click', ()=>{
        video.currentTime -= TIME_STEP;
    }, false);

    //fastforward
    fastForward.addEventListener('click', ()=>{
        video.currentTime += TIME_STEP;
    }, false);

    //end
    end.addEventListener('click', ()=>{
        //check the vid current time to vid duration
        video.currentTime = video.duration;
        playPause.innerText = 'Play' ;
    });
    //volume
    volume.addEventListener('change', ()=>{
        video.volume = this.value;
    }, false);
    //mute
    mute.addEventListener('click', ()=>{
        if (!video.muted) {
            vol = volume.value;
        }
        video.muted = !video.muted;
        if (video.muted) {
            volume.value = 0;
            mute.innerText = 'Unmute';
        } else {
            volume.value = vol;
            mute.innerText = 'Mute';
        }
    }, false);
    //scubbr
    scrubber.addEventListener('change', ()=>{
        video.currentTime  = this.value;
    }, false);
    //playbackrate
    playbackRate.addEventListener('change', ()=>{
        video.playbackRate - this.value;
    }, false);

    //play and time update
    video.addEventListener('play', ()=>{
        totalTime.innerText = formatTime(video.duration);
    });

    video.addEventListener('timeupdate', ()=>{
        remainingTime.innerText = formatTime(video.currentTime);
        scrubber.value = video.currentTime;
    }, false);