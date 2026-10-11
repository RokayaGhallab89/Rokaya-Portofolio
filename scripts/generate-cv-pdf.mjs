import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateCV() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Page 1
  let page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();
  let y = height - 40;
  const margin = 40;
  const contentWidth = width - margin * 2;

  // Header
  page.drawText('ROKAYA ALI MUBARAK MOHAMED', {
    x: margin,
    y,
    size: 18,
    font: fontBold,
    color: rgb(0.12, 0.25, 0.45),
  });
  y -= 18;

  page.drawText('Frontend Developer | Next.js | React.js | WordPress', {
    x: margin,
    y,
    size: 11,
    font: fontBold,
    color: rgb(0.2, 0.45, 0.7),
  });
  y -= 20;

  // Section: Personal Information
  function drawSectionHeader(title) {
    y -= 10;
    page.drawText(title, {
      x: margin,
      y,
      size: 10,
      font: fontBold,
      color: rgb(0.15, 0.2, 0.3),
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 1,
      color: rgb(0.2, 0.45, 0.7),
    });
    y -= 12;
  }

  drawSectionHeader('PERSONAL INFORMATION');

  const personalInfo = [
    ['Address', 'Nasr City, Cairo, Egypt'],
    ['Mobile', '+20 103 290 7055'],
    ['Email', 'Rokayaghallab4@gmail.com'],
    ['Portfolio', 'Rokaya Ali - Portfolio'],
    ['GitHub', 'github.com/RokayaGhallab89'],
  ];

  for (const [k, v] of personalInfo) {
    page.drawText(k, {
      x: margin,
      y,
      size: 9,
      font: fontBold,
      color: rgb(0.25, 0.25, 0.25),
    });
    page.drawText(v, {
      x: margin + 90,
      y,
      size: 9,
      font: fontRegular,
      color: rgb(0.2, 0.2, 0.2),
    });
    y -= 13;
  }

  // Professional Profile
  drawSectionHeader('PROFESSIONAL PROFILE');
  const profileText =
    'Frontend Developer with progressive experience building responsive, high-performance websites and web applications using Next.js, React.js, JavaScript, and WordPress. Experienced in translating UI/UX designs into reusable components, integrating REST APIs, customizing WordPress and WooCommerce, and optimizing websites for speed, SEO, accessibility, and cross-browser compatibility. Strong Computer Science foundation with additional experience in hosting, domains, troubleshooting, and production support. Focused on clean code, scalable interfaces, polished user experiences, and reliable delivery.';

  function wrapText(text, maxWidth, font, size) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  for (const line of wrapText(profileText, contentWidth, fontRegular, 8.5)) {
    page.drawText(line, {
      x: margin,
      y,
      size: 8.5,
      font: fontRegular,
      color: rgb(0.2, 0.2, 0.2),
    });
    y -= 11;
  }

  // Work Experience
  drawSectionHeader('WORK EXPERIENCE');

  const jobs = [
    {
      period: 'Jan 2026 – Present',
      role: 'Frontend Developer | Next.js & React.js',
      company: 'Servix Agency',
      bullets: [
        'Build responsive, production-ready web interfaces using Next.js, React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.',
        'Translate UI/UX designs into reusable components and responsive layouts with consistent behaviour across desktop, tablet, and mobile.',
        'Integrate REST APIs and dynamic data, implementing forms, validation, loading states, error handling, and interactive user flows.',
        'Maintain and customize WordPress and WooCommerce websites, including page layouts, product experiences, checkout enhancements, and custom styling.',
        'Improve page speed, Core Web Vitals, accessibility, technical SEO, and cross-browser compatibility while supporting deployment and production fixes.',
      ],
    },
    {
      period: 'Jan 2025 – Dec 2025',
      role: 'Frontend & WordPress Developer',
      company: 'Roaa PDA',
      bullets: [
        'Developed responsive websites and landing pages using WordPress, Elementor, HTML, CSS, and JavaScript.',
        'Customized themes, page templates, navigation, forms, and reusable content sections to match brand and user-experience requirements.',
        'Maintained website content and functionality, resolved frontend issues, and improved mobile responsiveness and cross-browser consistency.',
        'Supported hosting, domain, deployment, backup, and website maintenance tasks to keep digital platforms stable and available.',
      ],
    },
    {
      period: 'Jan 2024 – Dec 2024',
      role: 'Web & WordPress Developer',
      company: 'Namaa Foundation',
      bullets: [
        'Built and maintained responsive WordPress pages for organisational programmes, campaigns, news, and public-facing information.',
        'Implemented frontend updates using HTML, CSS, JavaScript, and WordPress page-building tools while following established brand guidelines.',
        'Optimized page structure, images, navigation, and mobile layouts to improve usability, performance, accessibility, and search visibility.',
        'Handled website troubleshooting, content updates, forms, backups, hosting coordination, and day-to-day technical website support.',
      ],
    },
  ];

  for (const job of jobs) {
    page.drawText(`${job.period}  ${job.role}  |  ${job.company}`, {
      x: margin,
      y,
      size: 9,
      font: fontBold,
      color: rgb(0.1, 0.15, 0.25),
    });
    y -= 12;

    for (const bullet of job.bullets) {
      const wrapped = wrapText(bullet, contentWidth - 14, fontRegular, 8);
      page.drawText('•', {
        x: margin + 2,
        y,
        size: 8,
        font: fontRegular,
        color: rgb(0.2, 0.2, 0.2),
      });
      for (let i = 0; i < wrapped.length; i++) {
        page.drawText(wrapped[i], {
          x: margin + 12,
          y,
          size: 8,
          font: fontRegular,
          color: rgb(0.25, 0.25, 0.25),
        });
        y -= 10.5;
      }
    }
    y -= 4;
  }

  // Page 2
  page = pdfDoc.addPage([595.28, 841.89]);
  y = height - 45;

  const jobsPage2 = [
    {
      period: 'Jan 2023 – Dec 2023',
      role: 'Frontend Developer | React.js',
      company: 'CodeSoft',
      bullets: [
        'Developed responsive frontend interfaces for business and ERP-related web applications using React.js, JavaScript, HTML, and CSS.',
        'Built reusable components, forms, tables, and data-driven UI elements and connected them with backend services through REST APIs.',
        'Debugged interface issues, improved usability and responsiveness, and collaborated on feature testing and production-ready releases.',
      ],
    },
    {
      period: 'Jan 2022 – Dec 2022',
      role: 'Junior Frontend & WordPress Developer',
      company: 'SoftKhana',
      bullets: [
        'Created responsive landing pages and website sections using HTML5, CSS3, JavaScript, and WordPress.',
        'Customized WordPress themes, styling, page layouts, and content while supporting domain, hosting, and website deployment tasks.',
        'Tested websites across devices and browsers, fixed layout and functionality issues, and provided ongoing website maintenance support.',
      ],
    },
  ];

  for (const job of jobsPage2) {
    page.drawText(`${job.period}  ${job.role}  |  ${job.company}`, {
      x: margin,
      y,
      size: 9,
      font: fontBold,
      color: rgb(0.1, 0.15, 0.25),
    });
    y -= 12;

    for (const bullet of job.bullets) {
      const wrapped = wrapText(bullet, contentWidth - 14, fontRegular, 8.5);
      page.drawText('•', {
        x: margin + 2,
        y,
        size: 8.5,
        font: fontRegular,
        color: rgb(0.2, 0.2, 0.2),
      });
      for (let i = 0; i < wrapped.length; i++) {
        page.drawText(wrapped[i], {
          x: margin + 12,
          y,
          size: 8.5,
          font: fontRegular,
          color: rgb(0.25, 0.25, 0.25),
        });
        y -= 11;
      }
    }
    y -= 6;
  }

  // Education
  drawSectionHeader('EDUCATION AND TRAINING');
  page.drawText("Bachelor's Degree in Computer Science", {
    x: margin,
    y,
    size: 9,
    font: fontBold,
    color: rgb(0.1, 0.15, 0.25),
  });
  y -= 12;
  page.drawText('South Valley University', {
    x: margin,
    y,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.3, 0.3, 0.3),
  });
  y -= 14;

  // Certifications
  drawSectionHeader('CERTIFICATIONS AND TRAINING');
  const certs = [
    '•  MERN Stack Development - ITI',
    '•  Front-End Development - Route Academy',
  ];
  for (const c of certs) {
    page.drawText(c, {
      x: margin,
      y,
      size: 8.5,
      font: fontRegular,
      color: rgb(0.2, 0.2, 0.2),
    });
    y -= 12;
  }

  // Digital Skills
  drawSectionHeader('DIGITAL SKILLS');
  const skills = [
    '•  Next.js and React.js: component-based interfaces, routing, rendering, state handling, and reusable UI architecture',
    '•  JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap',
    '•  WordPress and WooCommerce: Elementor, theme/page customization, product pages, forms, and checkout workflows',
    '•  REST API integration, dynamic data handling, forms, validation, and asynchronous user flows',
    '•  Responsive web design, mobile-first implementation, cross-browser compatibility, and accessibility',
    '•  Performance optimization, Core Web Vitals, image optimization, and on-page technical SEO',
    '•  Git/GitHub, hosting and domain deployment, debugging, maintenance, and production support',
  ];
  for (const s of skills) {
    const wrapped = wrapText(s, contentWidth, fontRegular, 8.5);
    for (const line of wrapped) {
      page.drawText(line, {
        x: margin,
        y,
        size: 8.5,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.25),
      });
      y -= 11.5;
    }
    y -= 2;
  }

  // Language Skills
  drawSectionHeader('LANGUAGE SKILLS');
  page.drawText('Arabic - Native', {
    x: margin,
    y,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.25, 0.25, 0.25),
  });
  y -= 12;
  page.drawText('English - Intermediate', {
    x: margin,
    y,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.25, 0.25, 0.25),
  });
  y -= 14;

  // Additional Information
  drawSectionHeader('ADDITIONAL INFORMATION');
  page.drawText("•  Available with 15 days' notice.", {
    x: margin,
    y,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.25, 0.25, 0.25),
  });
  y -= 12;
  page.drawText('•  References available on request.', {
    x: margin,
    y,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.25, 0.25, 0.25),
  });

  const pdfBytes = await pdfDoc.save();
  const outPath1 = '/public/Rokaya-Ghallab-CV.pdf';
  const outPath2 = '/app/applet/public/Rokaya-Ghallab-CV.pdf';
  fs.mkdirSync('/public', { recursive: true });
  fs.mkdirSync('/app/applet/public', { recursive: true });
  fs.writeFileSync(outPath1, pdfBytes);
  fs.writeFileSync(outPath2, pdfBytes);
  console.log('Successfully generated Rokaya-Ghallab-CV.pdf (' + pdfBytes.length + ' bytes)');
}

generateCV().catch(console.error);
