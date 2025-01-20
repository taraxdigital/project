// Data
const projects = [
  {
    title: "<a href='https://www.artstation.com/axicblk' target='_blank' style='text-decoration: none; color: #00fff7; cursor: pointer; '>Artstation</a>",
    role: "Lead Game Designer",
    description: "I create immersive scenarios of innovative worlds",
    image: "img/artstation.png",
    tech: ["Unity", "C#", "Blender", "Photoshop"]
  },
  {
    title: "<a href='https://www.redbubble.com/es/people/axicdant3/shop?anchor=profile&asc=u' target='_blank' style='text-decoration: none; color: #00fff7; cursor: pointer; '>Store</a>",
    role: "unique designs",
    description: "Eclusive and personalized products.",
    image: "img/tienda.png",
    tech: ["Unreal Engine", "Blueprint", "Substance Painter"]
  },
  {
    title: "<a href='https://theh3llwalk3r.wixsite.com/danielariasperandres' target='_blank' style='text-decoration: none; color: #00fff7; cursor: pointer; '>Website</a>",
    role: "official website",
    description: "Here you can see all my works",
    image: "img/web.png",
    tech: ["Unity", "C#", "3DS Max", "Adobe XD"]
  },
  {
    title: "<a href='https://ko-fi.com/axicblk' target='_blank' style='text-decoration: none;color: #00fff7;cursor: pointer;'>Support me here</a>",
    role: "coffee",
    description: "Invite me for a coffee, if you liked my work",
    image: "img/taza-café.png",
    tech: ["Unity", "C#", "3DS Max", "Adobe XD"]
  },
{
  title: "<a href='https://www.amazon.es/dp/B0C6L43SDD?ref_=cm_sw_r_cp_ud_dp_T2P2F91HZZP84KQWS6F9' target='_blank' style='text-decoration: none; color: #00fff7; cursor: pointer; '>Amazon</a>",
  role: "Writer",
  description: "A science fiction book that will take you to unknown worlds.",
  image: "img/AMAZON.png",
  tech: ["World",]
}
];



// Initialize Lucide icons
lucide.createIcons();

// Render projects
function renderProjects() {
  const projectsContainer = document.getElementById('projectsContainer');
  projectsContainer.innerHTML = projects.map((project, index) => `
    <div class="project-card" data-index="${index}">
      <div class="project-content">
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-role">${project.role}</p>
          <p class="project-description">${project.description}</p>
          <div class="tech-tags">
            ${project.tech.map(tech => `
              <span class="tech-tag">${tech}</span>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}


// Render skills
function renderSkills() {
  const skillsContainer = document.getElementById('skillsContainer');
  skillsContainer.innerHTML = skills.map(skill => `
    <div class="skill-card">
      <div class="skill-header">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-level">${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: 0%"></div>
      </div>
    </div>
  `).join('');
}

// Animate skill bars when they come into view
// function animateSkillBars() {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const progressBar = entry.target.querySelector('.skill-progress');
//         const level = entry.target.querySelector('.skill-level').textContent.replace('%', '');
//         progressBar.style.width = `${level}%`;
//       }
//     });
//   }, { threshold: 0.5 });

//   document.querySelectorAll('.skill-card').forEach(card => {
//     observer.observe(card);
//   });
// }

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
    
  // Add hover effect to skill items
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const icon = item.querySelector('.skill-icon');
      icon.style.transform = 'scale(1.2)';
    });
    item.addEventListener('mouseleave', () => {
      const icon = item.querySelector('.skill-icon');
      icon.style.transform = 'scale(1)';

    });
  });
});