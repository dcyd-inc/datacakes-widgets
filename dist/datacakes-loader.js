(()=>{const n=document.createElement("template");n.innerHTML='\n<style>\n  #upload-button {\n    display: flex;\n    align-items: center;\n    width: 150px;\n    height: 150px;\n    color: white;\n    background-image: linear-gradient(270deg, #03e8fd, #d770ab);\n    border: 1px solid #ccc;\n    border-radius: 50%;\n    box-shadow: 0 0 5px #fff;\n    cursor: pointer;\n    margin: 10px;\n  }\n\n  #upload-button:hover #file-icon {\n    opacity: 0.5;\n  }\n\n  #upload-button.default #file-icon {\n    animation = none;\n  }\n\n  #upload-button.loading {\n    box-shadow: 0 0 10px #fff;\n  }\n\n  #upload-button.loading #file-icon {\n    animation-play-state: running;\n    opacity: 0.5;\n  }\n\n  @keyframes pulse {\n    0% { transform: scale(1); }\n    12.5% { transform: scale(1.035); }\n    25% { transform: scale(1.05); }\n    37.5% { transform: scale(1.035); }\n    50% { transform: scale(1); }\n    62.5% { transform: scale(.965); }\n    75% { transform: scale(.95); }\n    87.5% { transform: scale(.965); }\n    100% { transform: scale(1); }\n  }\n\n  #file-icon {\n    margin: 0 auto;\n    display: block;\n    width: 100px;\n    height: 100px;\n    fill: currentColor;\n    overflow: hidden;\n    animation-name: pulse;\n    animation-duration: 1500ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    transform-origin: 50% 50%;\n    animation-play-state: paused;\n  }\n</style>\n<label for="upload" id="upload-button">\n  <svg class="default" id="file-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326z m1.8 562H232V136h302v216c0 23.2 18.8 42 42 42h216v494z"  /><path d="M544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z"  />\n  </svg>\n</label>\n<input type="file" id="upload" hidden accept=\'.pdf,.csv,.doc,.docx,.txt,.png,.jpg\' multiple>\n';class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(n.content.cloneNode(!0))}connectedCallback(){this.select("input").onchange=n=>this.handleChange(n)}async handleChange(n){this.select("label").className="loading",this.select("input").disabled=!0;const t=n.target.files[0],a=await async function(n){var t=new FormData;t.append("docs",n);return(await fetch("https://bots.datacakes.ai/create-docs-bot",{method:"POST",body:t})).json()}(t);this.select("input").value="",this.select("label").className="default",this.select("input").disabled=!1,this.broadcast("datacakes-docs-loaded",a)}broadcast(n,t){this.dispatchEvent(new CustomEvent(n,{detail:t,bubbles:!0,composed:!0}))}get select(){return this.shadowRoot.querySelector.bind(this.shadowRoot)}}window.customElements.define("datacakes-loader",t)})();