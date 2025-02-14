class FooterSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="relative bg-gradient-to-r from-[#7D0079] to-black text-white py-10">
        <div class="absolute inset-x-0 top-0 h-px bg-white"></div>
        <div class="max-w-7xl mx-auto px-4">
          <div>
            <h2 class="text-3xl md:text-[48px] leading-[76.8px] font-normal mb-2">Contact</h2>
          </div>
          <div class="mb-8">
            <h3 class="text-3xl md:text-[32px] leading-[32px] font-normal mb-2">
              Ready to take your digital presence to the next level?
            </h3>
            <p class="text-lg md:text-[16px] leading-[22.4px] font-normal text-[#C1C2D3]">
              Reach out to me today and let’s discuss how I can help you achieve your goals.
            </p>
          </div>
          <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div class="text-sm">
              &copy; 2024 John Doe
            </div>
            <div class="flex space-x-4">
              <a href="#" class="bg-[#05041F14] p-3 rounded hover:bg-[#05041F29] transition-colors duration-300" style="box-shadow: inset 0 0 4px #FFFFFF1F;" aria-label="Instagram">
                <img src="../src/images/footer/insta.png" alt="Instagram" class="h-5 w-5" />
              </a>
              <a href="#" class="bg-[#05041F14] p-3 rounded hover:bg-[#05041F29] transition-colors duration-300" style="box-shadow: inset 0 0 4px #FFFFFF1F;" aria-label="Twitter">
                <img src="../src/images/footer/twitter.png" alt="Twitter" class="h-5 w-5" />
              </a>
              <a href="#" class="bg-[#05041F14] p-3 rounded hover:bg-[#05041F29] transition-colors duration-300" style="box-shadow: inset 0 0 4px #FFFFFF1F;" aria-label="Github">
                <img src="../src/images/footer/github.png" alt="Github" class="h-5 w-5" />
              </a>
              <a href="#" class="bg-[#05041F14] p-3 rounded hover:bg-[#05041F29] transition-colors duration-300" style="box-shadow: inset 0 0 4px #FFFFFF1F;" aria-label="Whatsapp">
                <img src="../src/images/footer/whatsapp.png" alt="Whatsapp" class="h-5 w-5" />
              </a>
              <a href="#" class="bg-[#05041F14] p-3 rounded hover:bg-[#05041F29] transition-colors duration-300" style="box-shadow: inset 0 0 4px #FFFFFF1F;" aria-label="LinkedIn">
                <img src="../src/images/footer/linkedln.png" alt="LinkedIn" class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-section', FooterSection);
