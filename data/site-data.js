/*
 * ============================================================================
 *  SITE CONTENT — edit this file to update the website. No other file
 *  needs to change. index.html reads this data and builds the page for you.
 *
 *  HOW TO ADD A NEW ENTRY
 *  -----------------------
 *  Each section below (NEWS, PUBLICATIONS, PROJECTS) is a plain list of
 *  entries. To add one: copy the "TEMPLATE" block shown in the comment
 *  above that list, paste it as a new item, and fill in your own values.
 *  Keep the commas between items. That's it — save the file and reload
 *  the page.
 *
 *  A few fields accept small bits of HTML (e.g. "<a href=...>Name</a>")
 *  so you can link a co-author's name or an affiliation, exactly like the
 *  old hand-written HTML did. Only put your own trusted text there.
 * ============================================================================
 */

const SITE_DATA = {

  // --------------------------------------------------------------------
  // PROFILE — the hero section at the top of the page.
  // --------------------------------------------------------------------
  profile: {
    name: "Atharva Atul Rege",
    tagline: "Computer Vision &middot; Generative Modeling &middot; NLP",
    photo: "images/profile.jpg",

    // Bio paragraph. Inline links are plain HTML, same as before.
    bio: `I am a third-year undergraduate student at the
      <a href="https://www.nitk.ac.in/">National Institute of Technology Karnataka (NITK), Surathkal</a>,
      pursuing a major in Computer Science and Engineering. I am currently working as a Research Intern at GenMI Lab,
      <a href="https://mbzuai.ac.ae/">MBZUAI, UAE</a>, under the guidance of
      <a href="https://mbzuai.ac.ae/study/faculty/imran-razzak/">Prof. Imran Razzak</a>.
      I have previously worked as a Research Intern at the <a href="https://cambum.net/I3D.htm">I3D Lab</a>,
      <a href="https://iisc.ac.in/">Indian Institute of Science (IISc), Bengaluru</a>, India, under
      <a href="https://cambum.net/PB/">Prof. Pradipta Biswas</a>.`,

    researchInterest: "I'm interested in Computer Vision, Generative Modeling and Natural Language Processing.",

    // Contact / profile links shown under the bio.
    links: [
      { label: "Email", href: "mailto:atharvaatulrege.231cs114@nitk.edu.in" },
      { label: "CV", href: "data/resume.pdf" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=m1rvB_8AAAAJ&hl=en" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/atharva-rege-467543312/" },
      { label: "GitHub", href: "https://github.com/Atharva-Rege" }
    ]
  },

  // --------------------------------------------------------------------
  // NEWS — reverse-chronological timeline.
  //
  // TEMPLATE (copy this in):
  //   { date: "MM/YYYY", text: "What happened." },
  // --------------------------------------------------------------------
  news: [
    { date: "05/2026", text: `Joined the DevSecOps Team at HP Inc. as an AI and DevOps Intern.`},
    { date: "12/2025", text: `Joined Prof. Imran Razzak's Research Group at MBZUAI, UAE, as a Research Intern.` },
    { date: "05/2025", text: `Joined I3D Lab, IISc, Bengaluru, as a Research Intern.` },
  ],

  // --------------------------------------------------------------------
  // PUBLICATIONS
  //
  // TEMPLATE (copy this in):
  //   {
  //     image: "images/your-thumbnail.jpg",
  //     title: "Paper Title",
  //     titleHref: "https://link-to-paper-or-#",
  //     authors: [
  //       { text: "Your Name", self: true },       // self: true renders bold, no link
  //       { text: "Co-author Name", href: "https://their-page" }
  //     ],
  //     venue: "Conference/Journal, Year (status)",
  //     links: [ { label: "arXiv", href: "https://..." } ],
  //     description: "One or two sentence summary."
  //   },
  // --------------------------------------------------------------------
  publications: [
    {
      image: "images/TuLaBM.jpg",
      title: "TuLaBM: Tumor-Biased Latent Bridge Matching for Contrast-Enhanced MRI Synthesis",
      titleHref: "https://arxiv.org/abs/2603.19386",
      authors: [
        { text: "Atharva Atul Rege", self: true },
        { text: "Adinath Dukre", href: "https://scholar.google.com/citations?user=z4HpNkEAAAAJ&hl=en" },
        { text: "Numan Balci", href: "https://www.clevelandclinicabudhabi.ae/en/find-a-doctor/numan-balci" },
        { text: "Dwarikanath Mahapatra", href: "https://scholar.google.com/citations?user=j5K7HPoAAAAJ&hl=en" },
        { text: "Imran Razzak", href: "http://scholar.google.com/citations?user=GlXI4N8AAAAJ&hl=en" }
      ],
      venue: "(Under Review)",
      links: [
        { label: "arXiv", href: "https://arxiv.org/abs/2603.19386" }
      ],
      description: `TuLaBM is a tumor-biased latent bridge matching framework that synthesizes contrast-enhanced
        MRI from non-contrast MRI by combining latent Brownian bridge transport, tumor-focused attention, and
        boundary-aware supervision to achieve fast inference and superior tumor-detail preservation over GAN
        and diffusion-based methods.`
    },
    {
      image: "images/MRGenAI.jpg",
      title: "Improving MR Interaction through GenAI",
      titleHref: "#",
      authors: [
        { text: "Yashaswi Sinha", href: "https://scholar.google.com/citations?user=64jHILsAAAAJ&hl=en" },
        { text: "Yash Kumar Sahu", href: "https://www.yashkumarsahu.com/" },
        { text: "Atharva Atul Rege", self: true },
        { text: "Rubini M" },
        { text: "Subin Raj" },
        { text: "Himanshu Vishwakarma", href: "https://scholar.google.com/citations?user=ktqjVN0AAAAJ&hl=en" },
        { text: "Maharudra Rajendra Kharsade" },
        { text: "Abhishek Mukhopadhyay" },
        { text: "Pradipta Biswas", href: "https://cambum.net/PB/" }
      ],
      venue: "Engineering Applications of Artificial Intelligence (Under Review)",
      links: [
        { label: "SSRN", href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6697402" }
      ],
      description: `A diffusion model-based framework for parametric editing of material properties of
        foreground objects within images, enabling fine-grained control over visual attributes and additionally
        providing seamless compositing onto diverse backgrounds, validated on industrial datasets.`
    }
  ],

  // --------------------------------------------------------------------
  // PROJECTS
  //
  // TEMPLATE (copy this in):
  //   {
  //     image: "images/your-thumbnail.jpg",
  //     title: "Project Title",
  //     titleHref: "https://github.com/you/repo",
  //     links: [ { label: "Source Code", href: "https://..." }, { label: "Project Page", href: "https://..." } ],
  //     description: "One or two sentence summary."
  //   },
  // --------------------------------------------------------------------
  projects: [
    {
      image: "images/tbos.jpg",
      title: "The Brush of Spells: Text-Guided Image Inpainting",
      titleHref: "https://github.com/IEEE-NITK/text-guided-image-inpainting",
      links: [
        { label: "Source Code", href: "https://github.com/IEEE-NITK/text-guided-image-inpainting" },
        { label: "Project Page", href: "https://ieee.nitk.ac.in/virtual_expo/report/69" }
      ],
      description: `Implemented MMFL: Multimodal Fusion Learning for Text-Guided Image Inpainting using
        Generative Adversarial Networks (GANs), leveraging a multimodal architecture to inpaint images based
        on textual prompts.`
    },
    {
      image: "images/visionkinect.jpg",
      title: "Vision Kinect",
      titleHref: "https://github.com/Atharva-Rege/Vision-Kinect",
      links: [
        { label: "Source Code", href: "https://github.com/Atharva-Rege/Vision-Kinect" },
        { label: "Project Page", href: "https://ieee.nitk.ac.in/virtual_expo/report/54" }
      ],
      description: `Developed a YOLO-based hand gesture recognition system for completely touchless,
        gesture-controlled interactive Tetris gameplay, demonstrating applications in Human-Computer
        Interaction (HCI).`
    },
    {
      image: "images/finbotai.jpg",
      title: "FinBot-AI",
      titleHref: "https://github.com/Atharva-Rege/FinBot-AI",
      links: [
        { label: "Source Code", href: "https://github.com/Atharva-Rege/FinBot-AI" }
      ],
      description: `Developed a generative AI-powered finance chatbot leveraging OpenAI's GPT-4 and LangChain,
        streamlining complex financial queries with accurate, context-aware responses and Retrieval-Augmented
        Generation. Built an interactive web interface with Streamlit to enable instant customer support and
        personalized financial advice.`
    }
  ]
};
