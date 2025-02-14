class TestimonialSlider extends HTMLElement {
    connectedCallback() {
      // Set the component's inner HTML including the structure and styles
      this.innerHTML = `
        <section class="bg-[#0b0616] text-white py-16 px-6">
          <h2 class="text-center text-3xl font-semibold text-white">
            Kind words from <span class="text-purple-400">satisfied clients</span>
          </h2>
          <div class="relative overflow-hidden mt-10">
            <div id="testimonial-slider" class="flex space-x-6 testimonial-container">
              <div class="min-w-[350px] bg-[#131022] p-6 rounded-xl">
                <p class="text-gray-300">
                  Collaborating with Novelty Dec was an absolute pleasure. Their professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.
                </p>
                <div class="flex items-center mt-4">
                  <img src="https://randomuser.me/api/portraits/men/1.jpg" class="w-10 h-10 rounded-full" alt="John Doe">
                  <div class="ml-3">
                    <p class="font-bold">John Doe</p>
                    <p class="text-sm text-gray-400">Director of Enterprise</p>
                  </div>
                </div>
              </div>
              <div class="min-w-[350px] bg-[#131022] p-6 rounded-xl">
                <p class="text-gray-300">
                  The team’s enthusiasm for every facet of development truly stands out. If you're looking to elevate your website and enhance your brand, Novelty Dec is the perfect partner.
                </p>
                <div class="flex items-center mt-4">
                  <img src="https://randomuser.me/api/portraits/women/2.jpg" class="w-10 h-10 rounded-full" alt="Jane Smith">
                  <div class="ml-3">
                    <p class="font-bold">Jane Smith</p>
                    <p class="text-sm text-gray-400">CEO, Tech Corp</p>
                  </div>
                </div>
              </div>
              <div class="min-w-[350px] bg-[#131022] p-6 rounded-xl">
                <p class="text-gray-300">
                  From start to finish, the project was handled with care and expertise. I highly recommend Novelty Dec for any web development needs.
                </p>
                <div class="flex items-center mt-4">
                  <img src="https://randomuser.me/api/portraits/men/3.jpg" class="w-10 h-10 rounded-full" alt="Michael Brown">
                  <div class="ml-3">
                    <p class="font-bold">Michael Brown</p>
                    <p class="text-sm text-gray-400">Founder, Startup Inc.</p>
                  </div>
                </div>
              </div>
                            <div class="min-w-[350px] bg-[#131022] p-6 rounded-xl">
                <p class="text-gray-300">
                  From start to finish, the project was handled with care and expertise. I highly recommend Novelty Dec for any web development needs.
                </p>
                <div class="flex items-center mt-4">
                  <img src="https://randomuser.me/api/portraits/men/3.jpg" class="w-10 h-10 rounded-full" alt="Michael Brown">
                  <div class="ml-3">
                    <p class="font-bold">Michael Brown</p>
                    <p class="text-sm text-gray-400">Founder, Startup Inc.</p>
                  </div>
                </div>
              </div>
                            <div class="min-w-[350px] bg-[#131022] p-6 rounded-xl">
                <p class="text-gray-300">
                  From start to finish, the project was handled with care and expertise. I highly recommend Novelty Dec for any web development needs.
                </p>
                <div class="flex items-center mt-4">
                  <img src="https://randomuser.me/api/portraits/men/3.jpg" class="w-10 h-10 rounded-full" alt="Michael Brown">
                  <div class="ml-3">
                    <p class="font-bold">Michael Brown</p>
                    <p class="text-sm text-gray-400">Founder, Startup Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <style>
          /* Custom styles for the testimonial slider */
          .testimonial-container {
            cursor: grab;
            overflow: hidden;
          }
          .testimonial-container:active {
            cursor: grabbing;
          }
        </style>
      `;
  
      // Initialize slider functionality
      const slider = this.querySelector('#testimonial-slider');
      let isDown = false;
      let startX;
      let scrollLeft;
  
      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
  
      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });
  
      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
      });
  
      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
      });
    }
  }
  
  customElements.define('testimonial-slider', TestimonialSlider);
  