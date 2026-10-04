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
    tagline: "Machine Learning &middot; Computer Vision &middot; Generative &amp; Agentic AI",
    photo: "images/profile.jpg",

    // Bio paragraph. Inline links are plain HTML, same as before.
    bio: `I am a final-year undergraduate student at the
      <a href="https://www.nitk.ac.in/">National Institute of Technology Karnataka (NITK), Surathkal</a>,
      pursuing a major in Computer Science and Engineering. I am currently a Research Intern at
      <a href="https://mbzuai.ac.ae/">MBZUAI, UAE</a>, advised by
      <a href="https://mbzuai.ac.ae/study/faculty/imran-razzak/">Prof. Imran Razzak</a>, and a Student Researcher at the
      Vision and Image Processing Lab, NITK, advised by
      <a href="https://sites.google.com/site/jenyrajan/">Prof. Jeny Rajan</a>.
      Previously, I was an AI and DevOps Engineering Intern on the DevSecOps team at
      <a href="https://www.hp.com/">HP Inc.</a>, Bengaluru, and a Research Intern at the
      <a href="https://cambum.net/I3D.htm">I3D Lab</a>,
      <a href="https://iisc.ac.in/">Indian Institute of Science (IISc), Bengaluru</a>, under
      <a href="https://cambum.net/PB/">Prof. Pradipta Biswas</a>.`,

    researchInterest: "I'm interested in Computer Vision and Generative Modeling, particularly for medical imaging, as well as Agentic AI.",

    // Contact / profile links shown under the bio.
    links: [
      { label: "Email", href: "mailto:atharvarege05@gmail.com" },
      { label: "CV", href: "data/resume.pdf" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=m1rvB_8AAAAJ&hl=en" },
      { label: "OpenReview", href: "https://openreview.net/profile?id=~Atharva_Atul_Rege1" },
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
    { date: "10/2026", text: `Placed 4th of about 200 submissions in the MICCAI 2026 RARE Challenge with
      <a href="https://github.com/adinathdukre/AFA-LoRA">AFA-LoRA</a>.` },
    { date: "09/2026", text: `4 papers accepted at MICCAI 2026 workshops, including
      <a href="https://openreview.net/forum?id=WylqMXauzj">SCALA</a> as an oral (top 15%).` },
    { date: "05/2026", text: `Joined the DevSecOps Team at HP Inc. as an AI and DevOps Intern.`},
    { date: "02/2026", text: `Joined the Vision and Image Processing Lab, NITK, as a Student Researcher under Prof. Jeny Rajan.` },
    { date: "12/2025", text: `Joined Prof. Imran Razzak's Research Group at MBZUAI, UAE, as a Research Intern.` },
    { date: "05/2025", text: `Joined I3D Lab, IISc, Bengaluru, as a Research Intern.` },
  ],

  // --------------------------------------------------------------------
  // PUBLICATIONS
  //
  // TEMPLATE (copy this in):
  //   {
  //     image: "images/your-thumbnail.jpg",
  //     imageCredit: { author: "Name", license: "CC BY-SA 4.0", href: "https://..." },  // optional, listed in the footer
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
      image: "images/primed.gif",
      imageCredit: { author: "Llorenzi", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:RM_glioblastoma_-_trasversale.gif" },
      title: "PRIMED: Prior-Informed Missing-Modality MRI Synthesis Needs No Sampler",
      titleHref: "#",
      authors: [
        { text: "Atharva Atul Rege", self: true },
        { text: "Adinath Dukre", href: "https://scholar.google.com/citations?user=z4HpNkEAAAAJ&hl=en" },
        { text: "Imran Razzak", href: "http://scholar.google.com/citations?user=GlXI4N8AAAAJ&hl=en" }
      ],
      venue: "WACV 2027 (Under Review)",
      description: `Shows that an informed-prior bridge's intermediate state is uninformative, collapsing a
        four-network, thousand-step diffusion baseline for missing-modality MRI synthesis to one network and one
        forward pass (28.61 dB PSNR, 0.944 SSIM, 0.152 s per volume).`
    },
    {
      image: "images/dbinr.gif",
      imageCredit: { author: "Hermoye", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Brain_MRI_T1_movie.gif" },
      title: "DB-INR: Dual-Band Implicit Neural Representations for Medical Image Segmentation",
      titleHref: "#",
      authors: [
        { text: "S. Sinha" },
        { text: "Adinath Dukre", href: "https://scholar.google.com/citations?user=z4HpNkEAAAAJ&hl=en" },
        { text: "Atharva Atul Rege", self: true },
        { text: "P. Sunil" },
        { text: "L. S. Bastos" },
        { text: "R. Roy" },
        { text: "Imran Razzak", href: "http://scholar.google.com/citations?user=GlXI4N8AAAAJ&hl=en" }
      ],
      venue: "WACV 2027 (Under Review)",
      description: `A dual-band sinusoidal implicit neural representation for medical image segmentation,
        reaching 0.851 Dice on OASIS-2D and +0.039 Dice across 11 MedSegBench datasets, with 1.8x faster
        inference and 1.5x lower activation memory.`
    },
    {
      image: "images/tulabm.gif",
      imageCredit: { author: "Llorenzi", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:RM_glioblastoma_-_coronale.gif" },
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
        boundary-aware supervision, raising tumor-region SSIM from 73.2 to 88.7 at under 0.097 s per image.`
    },
    {
      image: "images/scala.gif",
      imageCredit: { author: "Jccmoon", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Four_chamber_cardiovascular_magnetic_resonance_imaging.gif" },
      title: "SCALA: Semi-supervised Cascade for Left Atrial Scar, Cavity, and Multi-Structure CT Segmentation",
      titleHref: "https://openreview.net/forum?id=WylqMXauzj",
      authors: [
        { text: "Atharva Atul Rege", self: true },
        { text: "Adinath Dukre", href: "https://scholar.google.com/citations?user=z4HpNkEAAAAJ&hl=en" },
        { text: "Sarth Santosh Shah" },
        { text: "Imran Razzak", href: "http://scholar.google.com/citations?user=GlXI4N8AAAAJ&hl=en" }
      ],
      venue: "MICCAI 2026 CARE LeftAtrium Workshop (Oral, top 15%)",
      links: [
        { label: "OpenReview", href: "https://openreview.net/forum?id=WylqMXauzj" },
        { label: "Code", href: "https://github.com/adinathdukre/SCALA" }
      ],
      description: `A cavity-conditioned semi-supervised cascade for left-atrial scar, cavity, and multi-structure
        CT segmentation that recovers the train-to-evaluation grid mismatch with sub-slice offset voting.`
    },
    {
      image: "images/beat.gif",
      imageCredit: { author: "Kjetil Lenes", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Apikal4D.gif" },
      title: "BEAT: Boundary-aware Efficient Anatomy-Transfer for Multimodal Mitral Valve Segmentation",
      titleHref: "https://openreview.net/forum?id=yRMVmTyr3S",
      authors: [
        { text: "Atharva Atul Rege", self: true },
        { text: "Adinath Dukre", href: "https://scholar.google.com/citations?user=z4HpNkEAAAAJ&hl=en" },
        { text: "Sarth Santosh Shah" },
        { text: "Imran Razzak", href: "http://scholar.google.com/citations?user=GlXI4N8AAAAJ&hl=en" }
      ],
      venue: "MICCAI 2026 Medical World Model Workshop",
      links: [
        { label: "OpenReview", href: "https://openreview.net/forum?id=yRMVmTyr3S" },
        { label: "Code", href: "https://github.com/adinathdukre/BEAT-MVAA" }
      ],
      description: `One unified boundary-aware recipe for mitral valve segmentation across cardiac CT, 3D TEE,
        and surgical video.`
    },
    {
      image: "images/fieldfilm.gif",
      imageCredit: { author: "Jacopo Bertolotti", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Nuclear_magnetization_relaxation.gif" },
      title: "FieldFiLM: A Unified Conditional Generator for the MRI Field-Strength Continuum",
      titleHref: "https://openreview.net/forum?id=4Xh9urpNEr",
      authors: [
        { text: "Sarth Santosh Shah" },
        { text: "Atharva Atul Rege", self: true },
        { text: "Adinath Dukre", href: "https://scholar.google.com/citations?user=z4HpNkEAAAAJ&hl=en" },
        { text: "Imran Razzak", href: "http://scholar.google.com/citations?user=GlXI4N8AAAAJ&hl=en" }
      ],
      venue: "MICCAI 2026 MRIxFields Workshop",
      links: [
        { label: "OpenReview", href: "https://openreview.net/forum?id=4Xh9urpNEr" }
      ],
      description: `A single conditional 3D U-Net that translates MRI across all directed scanner field-strength
        pairs via a signed logarithmic field-gap embedding.`
    },
    {
      image: "images/radar.gif",
      imageCredit: { author: "Mikael Häggström", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Projectional_rendering_of_CT_scan_of_thorax_(thumbnail).gif" },
      title: "RADAR: Acquisition-Adversarial Attention Pooling over a Frozen Chest-Radiograph Foundation Model for Tuberculosis Screening",
      titleHref: "https://openreview.net/forum?id=5qyZJRpe41",
      authors: [
        { text: "Atharva Atul Rege", self: true },
        { text: "Adinath Dukre", href: "https://scholar.google.com/citations?user=z4HpNkEAAAAJ&hl=en" },
        { text: "Sarth Santosh Shah" },
        { text: "Imran Razzak", href: "http://scholar.google.com/citations?user=GlXI4N8AAAAJ&hl=en" }
      ],
      venue: "MICCAI 2026 TREAT-MMTB Workshop",
      links: [
        { label: "OpenReview", href: "https://openreview.net/forum?id=5qyZJRpe41" },
        { label: "Code", href: "https://github.com/adinathdukre/RADAR-TB" }
      ],
      description: `Adversarially removes acquisition style from a frozen chest X-ray foundation model's read-out
        for tuberculosis screening, reaching 0.84 F1 on an external 4-country cohort.`
    },
    {
      image: "images/mrgenai.gif",
      imageCredit: { author: "MIXTER1980", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Virtual_Fixtures_Project_(1991-1994)_animated_example.gif" },
      title: "Improving Mixed Reality Interaction through Generative AI",
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
      venue: "Intelligent User Interfaces (IUI) 2027 (Under Review)",
      links: [
        { label: "SSRN", href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6697402" }
      ],
      description: `A zero-shot synthetic-data pipeline combining diffusion scene editing, CLIP interpolation, and
        guided inpainting that drives YOLOv8 to 97% and 99.5% mAP on two benchmarks without manual annotation.
        In a VR-headset user study, holographic guidance cut task completion time by 21.4% and workload by 41.9%
        over text-based guidance.`
    }
  ],

  // --------------------------------------------------------------------
  // PROJECTS
  //
  // TEMPLATE (copy this in):
  //   {
  //     image: "images/your-thumbnail.jpg",
  //     imageCredit: { author: "Name", license: "CC BY-SA 4.0", href: "https://..." },  // optional, listed in the footer
  //     title: "Project Title",
  //     titleHref: "https://github.com/you/repo",
  //     links: [ { label: "Source Code", href: "https://..." }, { label: "Project Page", href: "https://..." } ],
  //     description: "One or two sentence summary."
  //   },
  // --------------------------------------------------------------------
  projects: [
    {
      image: "images/pramaan.gif",
      imageCredit: { author: "Kjerish", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Order_book_depth_chart.gif" },
      title: "Pramaan",
      titleHref: "https://github.com/Atharva-Rege/Pramaan",
      links: [
        { label: "Source Code", href: "https://github.com/Atharva-Rege/Pramaan" }
      ],
      description: `An LLM agent that answers questions on Indian company filings with page-level citations and
        6 verification checks, using hybrid retrieval and a cross-encoder fine-tuned on free XBRL labels
        (nDCG@10 from 0.75 to 0.99). On a quarterly-refreshing benchmark of 1,069 questions from 248 filings,
        graded automatically against XBRL, it beats naive RAG by 49 points.`
    },
    {
      image: "images/ghosttext.gif",
      imageCredit: { author: "JackPotte", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Devanagari_s_स.gif" },
      title: "Ghost-Text Rescue",
      description: `A VLM-based OCR pipeline that recovers Devanagari text from legacy PDFs with broken glyph
        mappings, combining page rasterisation, vision-language inference, and quality-aware routing. Silent
        extraction errors affect 10.7% of pages and 14.6% of public government documents sampled from Common Crawl.`
    },
    {
      image: "images/afalora.gif",
      imageCredit: { author: "Cancer Research UK", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Having_an_endoscopy.webm" },
      title: "AFA-LoRA: MICCAI 2026 RARE Challenge",
      titleHref: "https://github.com/adinathdukre/AFA-LoRA",
      links: [
        { label: "Source Code", href: "https://github.com/adinathdukre/AFA-LoRA" },
        { label: "Weights", href: "https://huggingface.co/adidukre/AFA-LoRA" }
      ],
      description: `Placed 4th of about 200 submissions with a 25-model DINOv2 ViT-B/14 and ResNet-50 ensemble,
        fine-tuned with LoRA (0.9M of 86M parameters trained) and shipped as an offline GPU container that
        sizes itself to a 1,100 s time budget.`
    },
    {
      image: "images/calitree.gif",
      imageCredit: { author: "KieranMaher", license: "Public domain", href: "https://commons.wikimedia.org/wiki/File:SegLungsCompos.gif" },
      title: "CaliTree: MICCAI 2026 ATM'26 Challenge",
      titleHref: "https://github.com/adinathdukre/CaliTree",
      links: [
        { label: "Source Code", href: "https://github.com/adinathdukre/CaliTree" },
        { label: "Weights", href: "https://huggingface.co/adidukre/CaliTree" }
      ],
      description: `A two-track solution to the ATM'26 airway challenge: calibre-band nnU-Net segmentation of
        the airway from chest CT, and tree-consistent labelling of the airway into 20 anatomical branches by
        voting voxel predictions over a TEASAR skeleton under a tree prior.`
    },
    {
      image: "images/meddamamba.gif",
      imageCredit: { author: "KieranMaher", license: "Public domain", href: "https://commons.wikimedia.org/wiki/File:CtOrthor.gif" },
      title: "MedDAMamba",
      titleHref: "https://github.com/Atharva-Rege/MedDAMamba",
      links: [
        { label: "Source Code", href: "https://github.com/Atharva-Rege/MedDAMamba" }
      ],
      description: `A state-space (Mamba) backbone with dynamic adaptive scanning for head-and-neck CT tumor
        classification, paired with domain-adaptive feature learning to maintain accuracy across sites.`
    },
    {
      image: "images/tbos.gif",
      title: "The Brush of Spells: Text-Guided Image Inpainting",
      titleHref: "https://github.com/IEEE-NITK/text-guided-image-inpainting",
      links: [
        { label: "Source Code", href: "https://github.com/IEEE-NITK/text-guided-image-inpainting" },
        { label: "Project Page", href: "https://ieee.nitk.ac.in/virtual_expo/report/69" }
      ],
      description: `Implemented MMFL: Multimodal Fusion Learning for Text-Guided Image Inpainting using
        Generative Adversarial Networks (GANs) on CUB-200-2011 Birds, reaching 25.1 PSNR and 89.3% SSIM, with
        added contrastive and WGAN objectives to improve text-image alignment.`
    },
    {
      image: "images/visionkinect.gif",
      imageCredit: { author: "Brandenads", license: "Public domain", href: "https://commons.wikimedia.org/wiki/File:Tetris_Game_4-Line_Clear.gif" },
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
      image: "images/finbot.gif",
      imageCredit: { author: "Sophia Guevara", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Bot_Animation.gif" },
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
