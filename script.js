function generateResume() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;
    let education = document.getElementById("education").value;
    let date = document.getElementById("date").value;
   

    let resumeHTML = `
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

    let resumeOutput = document.getElementById("resume-output");
    resumeOutput.innerHTML = resumeHTML;
    resumeOutput.style.display = "block";
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    // Get resume content
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;
    let education = document.getElementById("education").value;
    let date = document.getElementById("date").value;

    // Format the content for PDF
    let resumeContent = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}

        Skills:
        ${skills}

        Work Experience:
        ${experience}

        Education:
        ${education}
        Date:
        ${date}
    `;

    // Add content to PDF
    doc.text(resumeContent, 10, 10);

    // Save PDF
    doc.save("Resume.pdf");
}
