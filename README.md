# 📝 Intelligent Form with Dynamic Validation 



---

> **An interactive registration form built with Vanilla JS featuring real-time validations, accessibility feedback (ARIA), and a password strength analyzer.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)

### 📌 Table of Contents
- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [How to Run](#how-to-run)
- [Authors](#authors)

### 🎯 About the Project
The **Intelligent Form** is a practical demonstration of a reactive, user-friendly, and secure registration interface. It guides the user throughout input filling with instant feedback, blocking submission until all business rules and validation constraints are met.

### ✨ Key Features
* 🔤 **Text Mirroring & Character Counter:** Real-time display of the typed input with a limit counter (50 characters max) and visual overflow alerts.
* 🗺️ **Dependent Selects (State → City):** The city dropdown dynamically enables and populates based on the selected state (e.g., SP or RJ).
* ✉️ **On-Blur Email Validation:** Focus styling (`focus`) and automatic email syntax checking when the field loses focus (`blur`).
* 🔐 **Password Strength Analyzer:** Dynamic evaluation of password length and complexity, rating it as *Weak*, *Medium*, or *Strong* with distinct color feedback.
* ♿ **Accessible Error Summary:** Live-updated list of pending validation issues utilizing accessible attributes (`aria-live`, `role="alert"`) for screen readers.
* 🔄 **Post-Submission Reset:** Automatic form state clearing and UI restoration after successful submission.

### 🛠️ Tech Stack
* **HTML5:** Semantic layout and ARIA attributes for screen reader support.
* **CSS3:** Responsive styling, focus states, and dynamic error classing (`.invalid`).
* **JavaScript (ES6+):** Native DOM manipulation, Regular Expressions (RegEx) for data validation, and event handling (`input`, `change`, `blur`, `submit`).

### 💻 How to Run
1. Clone the repository:
   ```bash
   git clone [https://github.com/GabrielPitoli/Formulario-Inteligente.git](https://github.com/GabrielPitoli/Formulario-Inteligente.git)

Navigate to the folder:

Bash
cd Formulario-Inteligente
Open index.html directly in your web browser or use the Live Server extension in VS Code.

👥 Authors
Gabriel Pitoli Bueno — RA: 25001076

Rafael Pagani Palma — RA: 25000880
