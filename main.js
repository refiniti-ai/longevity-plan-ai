const apiKey = ""; 

        // Toggle Theme Logic
        function togglePricing(type) {
            const body = document.body;
            const indPill = document.querySelector('.floating-toggle-bar .toggle-pill:first-child');
            const entPill = document.querySelector('.floating-toggle-bar .toggle-pill:last-child');
            
            if (type === 'enterprise') {
                body.classList.add('theme-blue');
                indPill.classList.remove('active');
                entPill.classList.add('active');
            } else {
                body.classList.remove('theme-blue');
                indPill.classList.add('active');
                entPill.classList.remove('active');
            }
        }

        function toggleMobileNav() {
            const nav = document.getElementById('mobileNav');
            nav.classList.toggle('active');
        }

        function openModal() {
            document.getElementById('contactModal').style.display = 'flex';
            const isEnterprise = document.body.classList.contains('theme-blue');
            const planRadios = document.getElementsByName('plan');
            if (isEnterprise) {
                // Select Corp/Enterprise
                for(let r of planRadios) { if(r.value === 'enterprise') r.checked = true; }
            } else {
                // Select Athlete/Performance (default)
                for(let r of planRadios) { if(r.value === 'performance') r.checked = true; }
            }
        }
        
        function closeModal() { document.getElementById('contactModal').style.display = 'none'; }

        // Legal Modal Logic
        function openLegalModal(section) {
            document.getElementById('legalModal').style.display = 'flex';
            // Close all first
            const items = document.querySelectorAll('.legal-accordion-item');
            items.forEach(i => i.classList.remove('active'));
            // Open specific if provided
            if (section) {
                const target = document.getElementById('acc-' + section);
                if(target) target.classList.add('active');
            }
        }
        function closeLegalModal() { document.getElementById('legalModal').style.display = 'none'; }
        function toggleLegal(id) {
            const item = document.getElementById(id);
            item.classList.toggle('active');
        }

        function toggleFaq(item) {
            item.classList.toggle('active');
            const toggle = item.querySelector('.faq-toggle');
            toggle.textContent = item.classList.contains('active') ? '−' : '+';
        }

        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
                tabcontent[i].classList.remove("active");
            }
            tablinks = document.getElementsByClassName("tab-btn");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            setTimeout(() => { document.getElementById(tabName).classList.add("active"); }, 10);
            evt.currentTarget.className += " active";
        }

        function openMemTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("mem-tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
                tabcontent[i].classList.remove("active");
            }
            const container = evt.currentTarget.parentElement;
            const buttons = container.getElementsByClassName("tab-btn");
            for (i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("active");
            }
            document.getElementById(tabName).style.display = "block";
            setTimeout(() => { document.getElementById(tabName).classList.add("active"); }, 10);
            evt.currentTarget.classList.add("active");
        }

        function updateChart(index, value) {
            const statElement = document.getElementById('chartMainStat');
            statElement.innerText = value;
            const bars = document.querySelectorAll('.v-bar');
            const labels = document.querySelectorAll('.bar-label');
            bars.forEach((bar, i) => {
                if(i === index) {
                    bar.style.background = 'var(--accent)';
                    bar.style.boxShadow = '0 0 15px rgba(220, 38, 38, 0.4)';
                } else {
                    bar.style.background = 'rgba(255,255,255,0.15)';
                    bar.style.boxShadow = 'none';
                }
            });
            labels.forEach((label, i) => {
                if(i === index) label.classList.add('active'); else label.classList.remove('active');
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            // DNA Animation setup
            const container = document.getElementById('dnaContainer');
            const segments = 20;
            for (let i = 0; i < segments; i++) {
                const rung = document.createElement('div');
                rung.className = 'dna-segment';
                rung.style.top = (i * (100 / segments)) + '%';
                const delay = (-2 + (0.15 * i)) + 's';
                rung.style.animationDelay = delay;
                container.appendChild(rung);
            }
            
            // Monitor Randomizer
            setInterval(() => {
                const hr = Math.floor(Math.random() * (68 - 58) + 58);
                const o2 = Math.floor(Math.random() * (100 - 97) + 97);
                document.getElementById('hrVal').innerHTML = hr + ' <span class="mp-unit">BPM</span>';
                document.getElementById('o2Val').innerHTML = o2 + ' <span class="mp-unit">%</span>';
            }, 3000);
        });