const jobLibrary = {
  // INDUSTRY-SPECIFIC CATEGORIES (3 categories with 4 industry variants each)
  
  "Documentation & Report Writing": {
    healthcare: {
      description: "Use AI to generate HIPAA-compliant, de-identified templates (clinical notes, discharge summaries, billing reports). Staff only enter workflows, not patient identifiers.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Office AI tools (Google Docs AI, Microsoft Copilot), or privacy-first/local LLMs (AnythingLLM, GPT4All).",
      setupTime: "20 min to create templates",
      weeklySavings: "1-3 hrs/week",
      efficiencyGain: 22,
      quickGuide: "Prep: Replace PHI with placeholders ('Patient A, 55 y/o male'). AI Step: Ask LLM: 'Create a discharge summary template with headings (Findings, Plan, Notes), standard phrasing, and placeholders ((Insert vitals)), ((Insert meds))). Exclude identifiers.' Post-process: Save in Word/Docs for staff reuse. Compliance Tip: Add PHI manually offline for HIPAA compliance."
    },
    education: {
      description: "Use AI to draft FERPA-compliant templates for progress reports, behavior notes, and lesson summaries. Teachers/admins use AI for structure/phrasing, not student names or grades.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Office AI tools (Google Docs AI, Microsoft Copilot), or privacy-first/local LLMs (AnythingLLM, GPT4All).",
      setupTime: "20 min to create templates",
      weeklySavings: "1-2 hrs/week",
      efficiencyGain: 20,
      quickGuide: "Prep: Replace student identifiers ('Student A, high school sophomore'). AI Step: Ask LLM: 'Create a progress report template with sections (Overview, Strengths, Growth, Next Steps). Include placeholders, no student names/grades.' Post-process: Save templates in Docs/Drive. Compliance Tip: Personalize offline to remain FERPA compliant."
    },
    finance: {
      description: "Use AI to create SEC/FINRA-compliant templates (audit memos, financial disclosures, compliance reports) with placeholders for figures. No client data entered into AI.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Office AI tools (Google Docs AI, Microsoft Copilot), or privacy-first/local LLMs (AnythingLLM, GPT4All).",
      setupTime: "30 min to build base templates",
      weeklySavings: "2-3 hrs/week",
      efficiencyGain: 20,
      quickGuide: "Prep: Remove firm names/account numbers; use placeholders ('Company X, $XXX'). AI Step: Ask LLM: 'Generate a financial compliance report template with sections (Executive Summary, Risk, Controls, Findings). Insert placeholders for $$ and dates.' Post-process: Store template in Excel/Word. Compliance Tip: Insert regulated data offline to meet SEC/FINRA rules."
    },
    business: {
      description: "Use AI to draft corporate reporting templates (performance reviews, audit summaries, KPI reports). Helps managers avoid repetitive formatting.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Office AI tools (Google Docs AI, Microsoft Copilot), or privacy-first/local LLMs (AnythingLLM, GPT4All).",
      setupTime: "15-20 min",
      weeklySavings: "1-2 hrs/week",
      efficiencyGain: 20,
      quickGuide: "Prep: List recurring business report needs (KPIs, quarterly trends). AI Step: Ask LLM: 'Create a performance report template with sections (KPIs, Trends, Risks, Recommendations). Use placeholders for figures.' Post-process: Save in Docs/Notion for team use. Compliance Tip: Avoid inserting confidential client data in AI — add it offline."
    }
  },

  "Communication & Email Management": {
    healthcare: {
      description: "Use AI to draft and summarize routine emails while ensuring no PHI is entered. Helps staff respond faster without copying sensitive data into AI.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Email-integrated AI tools (Gmail AI, Microsoft Copilot), Workflow AI tools (Zapier, Make).",
      setupTime: "15-20 min",
      weeklySavings: "2-3 hrs/week",
      efficiencyGain: 20,
      quickGuide: "Prep: Remove patient identifiers; use generic terms ('Patient A'). AI Step: Ask LLM: 'Draft a professional reply to confirm appointment rescheduling and outline next steps.' Post-process: Paste draft into secure email; add PHI manually. Compliance Tip: HIPAA requires no PHI be processed through AI."
    },
    education: {
      description: "Use AI to create FERPA-compliant templates for parent updates, faculty memos, and student communications. AI handles phrasing/structure; staff add identifiers offline.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Email-integrated AI tools (Gmail AI, Microsoft Copilot), Workflow AI tools (Zapier, Make).",
      setupTime: "15-20 min",
      weeklySavings: "1-2 hrs/week",
      efficiencyGain: 20,
      quickGuide: "Prep: Replace names with placeholders ('Student A'). AI Step: Ask LLM: 'Draft a parent update about a student's general progress using a supportive, professional tone.' Post-process: Add student-specific details offline. Compliance Tip: Keep AI output generic; personalize outside AI to stay FERPA compliant."
    },
    finance: {
      description: "Use AI to draft routine client updates, compliance reminders, and meeting follow-ups without referencing non-public info.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Email-integrated AI tools (Gmail AI, Microsoft Copilot), Workflow AI tools (Zapier, Make).",
      setupTime: "20-30 min",
      weeklySavings: "2-4 hrs/week",
      efficiencyGain: 20,
      quickGuide: "Prep: Strip out account numbers, tickers, and confidential details. AI Step: Ask LLM: 'Draft a compliance reminder email with a professional tone and bulleted next steps.' Post-process: Add specific financial data offline. Compliance Tip: SEC/FINRA rules require all client-sensitive info be excluded from AI drafts."
    },
    business: {
      description: "Use AI to draft and triage professional emails (status updates, meeting invites, customer responses). Staff can bulk process inbox faster.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Email-integrated AI tools (Gmail AI, Microsoft Copilot), Workflow AI tools (Zapier, Make).",
      setupTime: "15-20 min",
      weeklySavings: "1-3 hrs/week",
      efficiencyGain: 20,
      quickGuide: "Prep: Identify routine email types (status updates, invites). AI Step: Ask LLM: 'Draft a professional meeting invite with agenda and RSVP request.' Post-process: Customize details and send via secure email. Compliance Tip: Avoid adding confidential client or HR data into AI; fill those in manually."
    }
  },

  "Data Analysis & Processing": {
    healthcare: {
      description: "Use AI to analyze de-identified datasets (quality metrics, survey data, operational reports). Staff upload only aggregated or anonymized data to generate summaries, visualizations, and dashboards.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Office AI tools (Excel Copilot, Google Sheets AI, Power BI AI), Workflow AI tools (Zapier, Make).",
      setupTime: "30-45 min",
      weeklySavings: "3-5 hrs/week",
      efficiencyGain: 23,
      quickGuide: "Prep: Remove PHI; use de-identified datasets. AI Step: Ask LLM: 'Summarize trends from this dataset and create 3 visualizations (admission rate, discharge time, readmission risk).' In ChatGPT/Gemini: generate a dashboard with charts/tables. In Excel Copilot: 'Analyze column F (admission times) and column J (readmission rates). Provide averages, highlight anomalies, and suggest metrics to track.' Post-process: Export dashboards to Excel/Sheets for review. Compliance Tip: Only analyze anonymized data to maintain HIPAA compliance."
    },
    education: {
      description: "Use AI to review de-identified academic datasets (test scores, attendance, retention). Generate descriptive stats, summaries, and simple dashboards to support reporting.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Office AI tools (Excel Copilot, Google Sheets AI, Power BI AI), Workflow AI tools (Zapier, Make).",
      setupTime: "30 min",
      weeklySavings: "2-4 hrs/week",
      efficiencyGain: 20,
      quickGuide: "Prep: Replace student names with IDs or categories. AI Step: Ask LLM: 'Analyze this attendance dataset by grade level. Provide averages, high/low values, and a 3-point summary.' In ChatGPT: build a dashboard of attendance trends by grade level. In Excel Copilot: 'Summarize column B (test scores) against column D (attendance) and recommend key insights.' Post-process: Create dashboards in Sheets/Excel. Compliance Tip: FERPA requires de-identified data for AI analysis."
    },
    finance: {
      description: "Use AI to analyze anonymized financial data (trading volumes, transaction logs, expense reports) to generate summaries, visualizations, and KPI dashboards.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Office AI tools (Excel Copilot, Google Sheets AI, Power BI AI), Workflow AI tools (Zapier, Make).",
      setupTime: "45 min",
      weeklySavings: "4-6 hrs/week",
      efficiencyGain: 25,
      quickGuide: "Prep: Strip client names, account numbers, and tickers. AI Step: Ask LLM: 'Summarize this quarterly expense dataset. Show top 5 cost categories and percent change from last quarter.' In ChatGPT/Gemini: generate a financial dashboard. In Excel Copilot: 'Analyze column C (expense category) vs column H (quarter totals) and suggest KPIs to track.' Post-process: Review outputs with compliance team. Compliance Tip: SEC/FINRA require exclusion of non-public info from AI workflows."
    },
    business: {
      description: "Use AI to process internal metrics (sales, marketing performance, customer feedback) for summaries, trends, and dashboards.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Office AI tools (Excel Copilot, Google Sheets AI, Power BI AI), Workflow AI tools (Zapier, Make).",
      setupTime: "30 min",
      weeklySavings: "2-3 hrs/week",
      efficiencyGain: 20,
      quickGuide: "Prep: Export internal datasets (sales KPIs, survey results). AI Step: Ask LLM: 'Summarize sales trends across Q1-Q2. Highlight top products, regions, and growth opportunities.' In ChatGPT/Gemini: create a dashboard of sales KPIs with charts. In Excel Copilot: 'Analyze column B (product category) vs column F (revenue) and recommend growth opportunities.' Post-process: Turn dashboards into PowerPoint/Notion slides. Compliance Tip: Avoid uploading confidential client lists or PII; anonymize data first."
    }
  },

  // GENERIC CATEGORIES (12 categories with single strategy each)

  "Customer Service & Support": {
    generic: {
      description: "Use AI to draft response templates for FAQs and complaints, and to analyze customer feedback across channels for recurring issues.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.)",
      setupTime: "30 min",
      weeklySavings: "2-4 hrs/week",
      efficiencyGain: 20,
      quickGuide: "Prep: Export recent support emails, chat logs, or social comments (remove names/order IDs). AI Step: Ask LLM: 'Analyze these 50 complaints and list the top 5 recurring issues and most common questions.' Then: 'Draft response templates for each issue with placeholders for names and order info.' Post-process: Save templates into a shared folder or CRM. Compliance Tip: Never input customer PII; add case details manually after AI generates drafts."
    }
  },

  "Scheduling & Planning": {
    generic: {
      description: "Use AI to create agenda templates, balance workloads, and predict busy periods using past schedules.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Office AI tools (Google Calendar AI, Microsoft Copilot)",
      setupTime: "20-30 min",
      weeklySavings: "1-2 hrs/week",
      efficiencyGain: 20,
      quickGuide: "Prep: Gather past 2-4 weeks of schedules (remove employee names if sensitive). AI Step: Ask LLM: 'Based on this schedule, identify peak workload days and suggest adjustments for balance.' Also: 'Draft a weekly agenda template with standard headings (Priorities, Deadlines, Action Items).' Post-process: Import agendas to Docs/Calendar; rebalance schedules manually. Compliance Tip: Keep staff identifiers out of AI if subject to HR/privacy rules."
    }
  },

  "Research & Information Gathering": {
    generic: {
      description: "Use AI to quickly summarize sources and conduct deeper multi-source research with citations.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Perplexity AI, Gemini Pro 2.5",
      setupTime: "30-40 min",
      weeklySavings: "3-5 hrs/week",
      efficiencyGain: 25,
      quickGuide: "Prep: Identify 2-3 sources (articles, reports, competitor sites). AI Step: In Perplexity/Gemini: 'Summarize this 20-page report into 5 bullet insights with source citations.' In ChatGPT: 'Compare competitor X's pricing with competitor Y's — what gaps exist?' Post-process: Compile findings into Docs/Notion with citations. Compliance Tip: Cross-verify AI findings with original sources to avoid errors."
    }
  },

  "Training & Education": {
    generic: {
      description: "Use AI to create training outlines, quizzes, and adapt learning content to performance gaps.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.)",
      setupTime: "30-40 min",
      weeklySavings: "2-4 hrs/week",
      efficiencyGain: 23,
      quickGuide: "Prep: List training goals + sample quiz results (de-identified). AI Step: Ask LLM: 'Create a training outline with 3 modules, 5 quiz questions, and a 1-page handout.' Then: 'Analyze these anonymized results and suggest where learners struggled most.' Post-process: Save training docs to LMS/shared drive and insert names offline. Compliance Tip: Keep learner identifiers and HR data out of AI."
    }
  },

  "Sales & Marketing": {
    generic: {
      description: "Use AI to draft ad copy, emails, and analyze competitor ads for best practices to adapt.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.)",
      setupTime: "25-30 min",
      weeklySavings: "2-3 hrs/week",
      efficiencyGain: 20,
      quickGuide: "Prep: Gather competitor ads (Facebook Ad Library, TikTok Creative Center). AI Step: Ask LLM: 'Analyze these ads — what messages, tones, or visuals are driving engagement?' Then: 'Draft 3 ad variations for our [product/service] based on those strategies.' Post-process: Adapt ads in Canva/your ad manager. Compliance Tip: Do not upload customer lists or sensitive campaign data."
    }
  },

  "Inventory & Supply Management": {
    generic: {
      description: "Use AI to create checklists, reorder reminders, and transform raw logs into simple dashboards.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Office AI tools (Excel AI, Google Sheets AI)",
      setupTime: "30-40 min",
      weeklySavings: "3-4 hrs/week",
      efficiencyGain: 25,
      quickGuide: "Prep: Export your raw data into Excel/Google Sheets with clear columns (e.g., Item, Stock, Weekly Usage, Date). AI Step: Use this prompt in ChatGPT/Claude/Gemini: 'I have an inventory dataset with columns [Item], [Current Stock], [Weekly Usage], [Date]. Please create a simple dashboard plan: 1) add a calculated column for 'Weeks Remaining = Current Stock ÷ Weekly Usage,' 2) suggest 2-3 charts (bar, line, or pie) to track trends, 3) provide formulas or pivot table instructions I can paste into Sheets/Excel.' Post-process: Copy formulas into Sheets/Excel, insert charts, save as a 'Dashboard' tab, and add conditional formatting (e.g., red = low stock). Compliance Tip: Remove vendor contracts or pricing details before uploading to AI."
    }
  },

  "Quality Control & Review": {
    generic: {
      description: "Use AI to draft QA checklists, analyze reports, and flag recurring defects in operations.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Office AI tools (Excel AI, Google Docs AI)",
      setupTime: "20-30 min",
      weeklySavings: "2-3 hrs/week",
      efficiencyGain: 20,
      quickGuide: "Prep: Collect QA logs or inspection notes (remove proprietary identifiers). AI Step: Ask LLM: 'Summarize this QA report and highlight 3 recurring issues.' Then: 'Create a 10-item checklist for inspection of [product/process].' Post-process: Save checklists in Docs/QA system and share with teams. Compliance Tip: Avoid sharing proprietary formulas or sensitive specs."
    }
  },

  "Presentation & Public Speaking": {
    generic: {
      description: "Use AI to generate slide outlines, speaker notes, and audience Q&A sets, then design slides in AI-powered tools.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Gamma, Canva",
      setupTime: "30-45 min",
      weeklySavings: "2-4 hrs/week",
      efficiencyGain: 23,
      quickGuide: "Prep: Outline your presentation topic + audience type. AI Step: In ChatGPT/Claude: 'Draft a 10-slide outline with notes and 5 audience Q&As.' Then in Gamma/Canva: auto-generate a slide deck with visuals/layouts. Post-process: Refine slides manually; rehearse with AI-generated Q&A. Compliance Tip: Do not input confidential strategies or client data."
    }
  },

  "Lead Generation & Prospecting": {
    generic: {
      description: "Use AI to research potential clients, draft outreach templates, and organize leads into structured lists.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Research AI (Perplexity, Gemini Pro 2.5)",
      setupTime: "30-40 min",
      weeklySavings: "3-5 hrs/week",
      efficiencyGain: 23,
      quickGuide: "Prep: Export target industry keywords, LinkedIn search results, or company lists. AI Step: Ask LLM: 'Organize this list of companies into a lead table with columns: Company, Contact Role, Prospect Notes, Outreach Status.' Then: 'Draft a cold email template with placeholders for [Name], [Role], [Pain Point].' Post-process: Paste the table into Sheets/CRM and personalize emails. Compliance Tip: Do not upload personal emails or sensitive contact data into AI."
    }
  },

  "Talent Acquisition": {
    generic: {
      description: "Use AI to screen resumes, summarize candidate strengths, and draft interview questions.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.)",
      setupTime: "30-40 min",
      weeklySavings: "3-4 hrs/week",
      efficiencyGain: 20,
      quickGuide: "Prep: Collect resumes or LinkedIn profiles (remove candidate identifiers). AI Step: Ask LLM: 'Summarize this resume into 5 bullets: experience, skills, certifications, potential concerns.' Then: 'Generate 5 structured interview questions tailored to this candidate.' Post-process: Recruiter reviews AI summaries, validates questions, and sends to hiring manager. Compliance Tip: Keep all PII out of AI; follow EEOC/fair hiring guidelines."
    }
  },

  "Onboarding": {
    generic: {
      description: "Use AI to generate onboarding checklists, welcome guides, and role-specific training outlines for new hires.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Office AI tools (Google Docs AI, Microsoft Copilot)",
      setupTime: "20-30 min",
      weeklySavings: "2-3 hrs/week",
      efficiencyGain: 20,
      quickGuide: "Prep: List standard onboarding steps (IT setup, HR paperwork, training modules). AI Step: Ask LLM: 'Draft a 1-week onboarding checklist for a new [Role], including Day 1 tasks, key contacts, and first-week goals.' Then: 'Create a 1-page welcome guide for new hires.' Post-process: Customize checklists in Docs/Notion; assign tasks to managers. Compliance Tip: Ensure sensitive HR data (employee IDs, contracts) is added offline, not in AI."
    }
  },

  "Customer/User Insights": {
    generic: {
      description: "Use AI to summarize survey responses, support tickets, and usability test notes into clear insights.",
      tools: "General-purpose LLMs (ChatGPT, Claude, Gemini, etc.), Research AI (Perplexity, Gemini Pro 2.5)",
      setupTime: "30-40 min",
      weeklySavings: "3-4 hrs/week",
      efficiencyGain: 23,
      quickGuide: "Prep: Export anonymized feedback data (survey responses, interview notes, test results). AI Step: Ask LLM: 'Categorize this feedback into 3 buckets: strengths, pain points, suggestions. Highlight recurring themes.' Then: 'Generate a 1-page insight report with charts/tables I can paste into Sheets/Docs.' Post-process: Share with product/UX teams, validate top themes with raw data. Compliance Tip: Strip out customer names/emails before upload; keep feedback anonymous."
    }
  }
};

// Export for use in the application
// Make jobLibrary available globally
window.jobLibrary = jobLibrary;
