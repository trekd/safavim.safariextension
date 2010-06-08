function messageHandler(event) {
    if (event.name === 'test') {
      alert(event.message);
    }
}

function commandHandler(event) {
  if (event.command === 'displayConfigPage') {
    alert(event.identifier);
  };
}

safari.application.addEventListener('message', messageHandler, false);
safari.application.addEventListener('command', commandHandler, false);