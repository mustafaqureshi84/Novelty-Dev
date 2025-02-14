class HeroSection extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="bg-gradient-to-b from-purple-950 via-purple-800 to-purple-900 text-white min-h-screen flex items-center justify-center px-4">
            <div class="text-center text-white">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-serif font-medium mb-10">
                    When your app breaks, fix it faster<br>with Novelty Dev
                </h1>
                <div class="relative flex flex-col md:flex-row items-center md:items-start md:justify-center gap-6">
                    <div class="bg-black bg-opacity-80 p-6 rounded-xl w-64 h-24 flex items-center justify-center text-white text-lg font-medium shadow-lg relative md:top-0 md:left-0"
                        style="background: linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(0,0,0,0.8));">
                        Error Monitoring
                    </div>
                    <div class="bg-black bg-opacity-80 p-6 rounded-xl w-64 h-24 flex items-center justify-center text-white text-lg font-medium shadow-lg relative md:top-6 md:left-6"
                        style="background: linear-gradient(to bottom right, rgba(128,0,128,0.3), rgba(0,0,0,0.8));">
                        Tracing
                    </div>
                    <div class="bg-black bg-opacity-80 p-6 rounded-xl w-64 h-24 flex items-center justify-center text-white text-lg font-medium shadow-lg relative md:top-12 md:left-12"
                        style="background: linear-gradient(to bottom right, rgba(255,165,0,0.3), rgba(0,0,0,0.8));">
                        Session Reply
                    </div>
                </div>
            </div>
        </section>
      `;
    }
  }
  
  customElements.define('hero-section', HeroSection);
  