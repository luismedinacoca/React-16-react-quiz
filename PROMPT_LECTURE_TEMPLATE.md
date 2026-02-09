# Documentation Completion Prompt Template

## Task Description

Focus on this content from the documentation file `docs/LECTURE_STEPS.md`:

## 🔧 XXX. Lesson XXX — *[LESSON_TITLE]*

- [[LESSON_TITLE]](#-x-lesson-xxx---[slugified-title])
- [XXX.1 Context](#x1-context)
- [XXX.2 Updating code according the context](#x2-updating-code-according-the-context)
  - [XXX.2.1 [Subsection Title]](#-x21-[slugified-subsection-title])
- [XXX.3 Issues](#x3-issues)
- [XXX.4 Pending Fixes (TODO)](#x4-pending-fixes-todo)

### 🧠 XXX.1 Context:

[CONTEXT_PLACEHOLDER_OR_EMPTY]

### ⚙️ XXX.2 Updating code/theory according the context:

[EXISTING_CODE_EXAMPLES_AND_EXPLANATIONS]

### 🐞 XXX.3 Issues:

[EXISTING_ISSUE_LIST_SUMMARY]

| Issue | Status | Log/Error |
|---|---|---|

### 🧱 XXX.4 Pending Fixes (TODO)

- [ ]
- [↑ top - [LESSON_TITLE]](#-x-lesson-xxx---[slugified-title])

---

## Instructions

### 1. Structure and Organization
- **Table of Contents (TOC)**: Each lesson must start with a clickable TOC linking to all main sections and subsections (XXX.2.Y).
- **Emoji Standard**: Use the following emojis for section headers:
    - 🔧 for the main Lesson header.
    - 🧠 for XXX.1 Context.
    - ⚙️ for XXX.2 Updating code/theory.
    - 🐞 for XXX.3 Issues.
    - 🧱 for XXX.4 Pending Fixes (TODO).
- **Naming Consistency**: Use "Updating code/theory according the context" for the XXX.2 header.
- **Back to Top Link**: After the `XXX.4 Pending Fixes (TODO)` checklist, always append the following line:
  ```
  [↑ top - [LESSON_TITLE]](#-x-lesson-xxx---[slugified-title])
  ```
  This link must appear **immediately after** the final `- [ ]` item and nowhere else.

### 2. Summarize Existing Code & Examples
  - **Read the Section Thoroughly**: Carefully review the entire `[EXISTING_CODE_EXAMPLES_AND_EXPLANATIONS]` content, including:
  - The complete **XXX.2 Updating code according to the context** section
  - All nested subsections **XXX.2.Y** (e.g., XXX.2.1, XXX.2.2, etc.)

- **Create Two-Level Summaries**: Produce concise, high-level summaries at both section and subsection levels:

  #### **XXX.2 Section Summary**
  - Add a `#### **Summary**` section as the **first element inside XXX.2**
  - Explain in 2–5 bullet points:
    - The overall purpose of the XXX.2 section
    - What specific problem this part of the lesson solves
    - How the various XXX.2.Y subsections connect and relate to each other

  #### **XXX.2.Y Subsection Summaries**
  - For **each XXX.2.Y subsection**, prepend a `**Subsection Summary**` block
  - Include 2–5 bullet points explaining:
    - What the specific code or example does (or attempts to do)
    - Its primary responsibility within the broader lesson context
    - Key patterns, libraries, frameworks, or concepts demonstrated
    - If images/screenshots are present (e.g., `![caption](../img/...)`), infer their intent and explain what they illustrate in the summary.
    - If present: the purpose and content of any images, diagrams, or screenshots (infer intent and summarize what they illustrate)

- **Important Guidelines**:
  - Do **not** rewrite, refactor, optimize, or modify the original code examples
  - Focus on high-level understanding; ignore low-level implementation details unless critical to comprehension
  - Keep all summaries concise and focused on understanding rather than evaluation
  - Clearly separate summaries from original content using bold labels: `**Summary**` and `**Subsection Summary**`
  - All summaries must be in English and maintain the original markdown formatting

### 3. Complete the Context section (XXX.1)
- Provide a comprehensive explanation of the topic.
- Explain when and why it's used
- Include examples from the project
- Use:
  - **Key Concepts** (numbered list), 
  - **Advantages** (bullet list), 
  - **Disadvantages/Gotchas** (bullet list), 
  - **When to Consider Alternatives** (bullet list).
- Link the theory to the practical implementation in the project.

### 4. Complete the Issues section (XXX.3)
- Identify inconsistencies, bugs, or code quality issues
- List issues in a bulleted summary list *before* the table.
- Populate the table with:
    - **Issue**: Descriptive title.
    - **Status**: (e.g., ⚠️ Identified, ✅ Fixed, ℹ️ Low Priority, ℹ️ Informational).
    - **Log/Error**: Detailed explanation with file paths and line ranges (e.g., `src/components/Search.jsx:10-15`).

### 5. Complete the Pending Fixes (TODO) section (XXX.4)
- Create actionable, specific tasks.
- Include file paths and line numbers.
- Include specific file paths and line numbers when relevant
- Prioritize tasks appropriately
- Make tasks specific and measurable
- For design or logic alternatives, provided concise code snippets (e.g., suggested refactors).

## Expected Output Format

- Maintain the exact formatting seen in `docs/LECTURE_STEPS.md`. 
- Use code references for all file names and components. 
- **All content must be in English.**
- **DO NOT delete the template which is at the end.**

