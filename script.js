function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Target the resume output HTML
    let resumeElement = document.getElementById("resume-output");

    doc.html(resumeElement, {
        callback: function (doc) {
            doc.save("Resume.pdf");
        },
        x: 10,
        y: 10,
        html2canvas: { scale: 0.5 }
    });
}


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;
    let education = document.getElementById("education").value;
    let date = document.getElementById("date").value;

    // Properly formatted multi-line string
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

Date: ${date}
    `;

    // Split the content into lines and add them one by one
    const lines = resumeContent.trim().split('\n');
    let y = 10;
    lines.forEach(line => {
        doc.text(line.trim(), 10, y);
        y += 10; // space between lines
    });

    doc.save("Resume.pdf");
}
