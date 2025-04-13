document.addEventListener("DOMContentLoaded", () => {
  function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const date = document.getElementById("date").value;

    const resumeHTML = `
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
      <h3>Work Experience</h3>
      <p>${experience}</p>
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
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const date = document.getElementById("date").value;

    const resumeContent = `
Name: ${name}
Email: ${email}
Phone: ${phone}

Skills:
${skills}

Work Experience:
 ${experience}

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




function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const skills = document.getElementById("skills").value;
  const experience = document.getElementById("experience").value;
  const education = document.getElementById("education").value;
  const date = document.getElementById("date").value;

  let y = 10; // vertical spacing tracker

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(name, 10, y);
  y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`Email: ${email}`, 10, y);
  y += 7;
  doc.text(`Phone: ${phone}`, 10, y);
  y += 10;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Skills", 10, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(skills, 10, y);
  y += 10;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Work Experience", 10, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  const splitExp = doc.splitTextToSize(experience, 180); // wrap long text
  doc.text(splitExp, 10, y);
  y += splitExp.length * 6 + 4;

  doc.setFont("helvetica", "bold");
  doc.text("Education", 10, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  const splitEdu = doc.splitTextToSize(education, 180);
  doc.text(splitEdu, 10, y);
  y += splitEdu.length * 6 + 4;

  doc.setFont("helvetica", "bold");
  doc.text("Date", 10, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.text(date, 10, y);

  doc.save("Resume.pdf");
}
