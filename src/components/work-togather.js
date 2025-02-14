class ContactSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="py-16 bg-[#050107] text-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="w-1/2 border-t-2 border-white mb-8"></div>
          <div class="md:flex md:items-center md:justify-between">
            <div class="md:w-2/3">
              <h2 class="text-4xl md:text-5xl font-semibold mb-6 text-[48px] leading-[72px]">
                Let’s work together
              </h2>
              <p class="text-[32px] font-normal max-w-[40rem] text-gray-300 leading-[48px] mb-8">
                Reach out to our global team to imagine, 
                make and scale new products, services, 
                experiences, business models, ventures 
                and ways of working.
              </p>
            </div>
            <div>
              <button class="border border-white text-white px-12 py-3 uppercase font-medium tracking-wide hover:bg-white hover:text-black transition-colors">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('contact-section', ContactSection);
