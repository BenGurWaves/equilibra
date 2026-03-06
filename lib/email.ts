const RESEND_API_KEY =
  process.env.RESEND_API_KEY || "re_Mc3MGtTE_NoXXi3npTxsoZ1bmi6oDvvEC";

async function sendEmail(payload: {
  from: string;
  to: string;
  subject: string;
  html: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("Failed to send email:", error);
  }
}

export async function sendWelcomeEmail(email: string, name?: string) {
  await sendEmail({
    from: "Equilibra <onboarding@resend.dev>",
    to: email,
    subject: "Welcome to Equilibra — Your 7-Day Reset Starts Now",
    html: `
      <div style="background:#000;color:#fff;padding:48px 24px;font-family:'Inter',sans-serif;max-width:560px;margin:0 auto;">
        <h1 style="font-family:'Space Grotesk',sans-serif;font-size:28px;font-weight:700;letter-spacing:0.05em;margin:0 0 8px;">
          Welcome${name ? `, ${name}` : ""}
        </h1>
        <p style="color:rgba(255,255,255,0.5);font-size:14px;line-height:1.6;margin:0 0 32px;">
          You just took the first step toward unbreakable calm.
        </p>
        <div style="border:1px solid rgba(255,255,255,0.1);padding:24px;margin:0 0 32px;">
          <p style="color:rgba(255,255,255,0.3);font-size:11px;text-transform:uppercase;letter-spacing:0.15em;margin:0 0 8px;">
            Day 1
          </p>
          <h2 style="font-family:'Space Grotesk',sans-serif;font-size:20px;font-weight:700;margin:0 0 8px;">
            Nervous System Reset
          </h2>
          <p style="color:rgba(255,255,255,0.5);font-size:14px;line-height:1.6;margin:0;">
            5 physiological sighs. 5 minutes. The fastest way to activate your body's built-in calm switch.
          </p>
        </div>
        <a href="https://equilibra.health/dashboard" style="display:inline-block;background:#fff;color:#000;padding:14px 32px;font-family:'Space Grotesk',sans-serif;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;text-decoration:none;">
          Start Day 1
        </a>
        <p style="color:rgba(255,255,255,0.15);font-size:11px;margin:32px 0 0;line-height:1.5;">
          Equilibra is not therapy. If you're in crisis, call or text 988.<br/>
          You're receiving this because you signed up at Equilibra.
        </p>
      </div>
    `,
  });
}

export async function sendTrialReminderEmail(
  email: string,
  daysLeft: number
) {
  await sendEmail({
    from: "Equilibra <onboarding@resend.dev>",
    to: email,
    subject: `${daysLeft} days left — keep building resilience`,
    html: `
      <div style="background:#000;color:#fff;padding:48px 24px;font-family:'Inter',sans-serif;max-width:560px;margin:0 auto;">
        <h1 style="font-family:'Space Grotesk',sans-serif;font-size:28px;font-weight:700;letter-spacing:0.05em;margin:0 0 8px;">
          Don't stop now
        </h1>
        <p style="color:rgba(255,255,255,0.5);font-size:14px;line-height:1.6;margin:0 0 32px;">
          You have ${daysLeft} days left in your 7-Day Reset. Every day you complete builds real resilience.
        </p>
        <a href="https://equilibra.health/dashboard" style="display:inline-block;background:#fff;color:#000;padding:14px 32px;font-family:'Space Grotesk',sans-serif;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;text-decoration:none;">
          Continue Your Reset
        </a>
        <p style="color:rgba(255,255,255,0.15);font-size:11px;margin:32px 0 0;line-height:1.5;">
          Equilibra is not therapy. If you're in crisis, call or text 988.
        </p>
      </div>
    `,
  });
}
