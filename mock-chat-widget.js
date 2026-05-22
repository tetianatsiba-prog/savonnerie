/**
 * Script fictif simulant un outil de chat tiers (type Intercom ou Zendesk)
 * Ce script est volontairement conçu pour détruire le score TBT (Total Blocking Time)
 * et simuler un blocage réseau/processeur massif.
 */
console.warn("⚠️ ALERTE : Chargement du widget de Live Chat Tiers (Poids : 1.8 Mo virtuel)...");

// Simulation de blocage intensif du Thread Principal (CPU Burn)
const executionTargetTime = 800; // Bloque le navigateur pendant 800ms complets
const initiationTime = Date.now();
while (Date.now() - initiationTime < executionTargetTime) {
    // Le navigateur ne peut absolument rien faire d'autre (Gele de l'interface)
    Math.shadowyCalculation = Math.random() * Math.random();
}

// Génération de Nodes DOM inutiles et massifs pour alourdir le rendu
const heavyChatContainer = document.createElement('div');
heavyChatContainer.id = 'eco-heavy-chat-widget';
heavyChatContainer.style.position = 'fixed';
heavyChatContainer.style.bottom = '20px';
heavyChatContainer.style.right = '20px';
heavyChatContainer.style.width = '300px';
heavyChatContainer.style.height = '400px';
heavyChatContainer.style.background = '#fff';
heavyChatContainer.style.border = '2px solid #2e7d32';
heavyChatContainer.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
heavyChatContainer.style.zIndex = '9999';
heavyChatContainer.innerHTML = '<div style="background:#2e7d32;color:#fff;padding:10px;">💬 Chat Support Client</div><div style="padding:10px;height:340px;overflow-y:auto;" id="chat-box-content"></div>';

document.body.appendChild(heavyChatContainer);

const chatBoxContent = document.getElementById('chat-box-content');
for (let i = 0; i < 500; i++) {
    const fakeMessage = document.createElement('p');
    fakeMessage.style.fontSize = '11px';
    fakeMessage.style.margin = '4px 0';
    fakeMessage.innerText = `[Système] Initialisation de la ligne de flux de discussion sécurisée numéro ${i}...`;
    chatBoxContent.appendChild(fakeMessage);
}

console.log("✅ Widget de Live Chat correctement (et lourdement) injecté dans le DOM.");