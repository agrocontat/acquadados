"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5535999908460?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20o%20Acquadados!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="whatsapp-pulse fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
      style={{ background: "#2AAED4", boxShadow: "0 4px 20px rgba(42,174,212,0.45)" }}
    >
      <svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" aria-hidden="true">
        <path d="M16 2C8.27 2 2 8.27 2 16c0 2.45.65 4.86 1.89 6.99L2 30l7.26-1.86A13.94 13.94 0 0016 30c7.73 0 14-6.27 14-14S23.73 2 16 2zm0 25.5a11.5 11.5 0 01-5.87-1.61l-.42-.25-4.3 1.1 1.13-4.18-.27-.44A11.5 11.5 0 1116 27.5zm6.32-8.6c-.35-.17-2.06-1.02-2.38-1.14-.32-.12-.55-.17-.78.17s-.9 1.14-1.1 1.37-.4.26-.75.09c-.35-.17-1.48-.55-2.82-1.74-1.04-.93-1.75-2.08-1.95-2.43-.2-.35-.02-.54.15-.71.16-.16.35-.4.52-.6.18-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.58-.28-.68-.57-.59-.78-.6h-.66c-.23 0-.6.09-.91.43-.32.35-1.2 1.17-1.2 2.85 0 1.68 1.23 3.31 1.4 3.54.17.23 2.42 3.7 5.86 5.19.82.35 1.45.56 1.95.72.82.26 1.56.22 2.15.13.66-.1 2.06-.84 2.35-1.65.29-.82.29-1.52.2-1.67-.08-.14-.32-.23-.67-.4z" />
      </svg>
    </a>
  );
}
