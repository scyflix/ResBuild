document.addEventListener("DOMContentLoaded", () => {
  function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const skills = document.getElementById("skills").value;
    const experiencedate = document.getElementById("experiencedate").value; const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const date = document.getElementById("date").value;

    const resumeHTML = `
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
      <h3>Work Experience</h3>
      <p>${experiencedate}</p> <p>${experience}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Date</h3>
      <p>${date}</p>
    `;

    const resumeOutput = document.getElementById("resume-output");
    resumeOutput.innerHTML = resumeHTML;
    resumeOutput.style.display = "block";
  }

  function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const skills = document.getElementById("skills").value;
    const experiencedate = document.getElementById("experiencedate").value; const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const date = document.getElementById("date").value;

    const resumeContent = `
Name: ${name}
Email: ${email}
Phone: ${phone}

Skills:
${skills}

Work Experience:
${experiencedate} ${experience}

Education:
${education}

Date: ${date}
    `;

    doc.text(resumeContent, 10, 10);
    doc.save("Resume.pdf");
  }

  // Attach functions to buttons
  window.generateResume = generateResume;
  window.downloadPDF = downloadPDF;

  // Auto-resize textareas
  document.querySelectorAll("textarea").forEach(textarea => {
    textarea.addEventListener("input", () => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    });
  });
});
