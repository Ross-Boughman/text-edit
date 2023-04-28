const butInstall = document.getElementById("buttonInstall");

// shows button, stores event
window.addEventListener('beforeinstallprompt', (event) => {

    window.deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);
  });

  // shows prompt, allows prompt to be reset
butInstall.addEventListener('click', async () => {
  
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  promptEvent.prompt();
  
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

// clears prompt
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
  }); 
  