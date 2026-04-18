const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const yearTarget = document.getElementById("year");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.getElementById("form-status");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!siteNav.contains(event.target) && !navToggle.contains(event.target)) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (contactForm && formStatus) {
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const defaultButtonText = submitButton ? submitButton.textContent : "";

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    if (contactForm.getAttribute("action") === "#") {
      formStatus.className = "form-status is-error";
      formStatus.textContent =
        "Este formulario aun no esta conectado a un servicio de envio. Sustituye action=\"#\" para habilitarlo en produccion.";
      return;
    }

    const formData = new FormData(contactForm);

    contactForm.classList.add("is-submitting");
    formStatus.className = "form-status";
    formStatus.textContent = "Enviando mensaje...";

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Enviando...";
    }

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      contactForm.reset();
      formStatus.className = "form-status is-success";
      formStatus.textContent = "Mensaje enviado correctamente. Te responderemos pronto.";
    } catch (error) {
      formStatus.className = "form-status is-error";
      formStatus.textContent =
        "No se pudo enviar el mensaje en este momento. Intenta de nuevo o escribenos por WhatsApp.";
    } finally {
      contactForm.classList.remove("is-submitting");

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = defaultButtonText;
      }
    }
  });
}
