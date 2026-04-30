"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    return { error: "Preenche todos os campos." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "marcojxmartins@gmail.com",
      subject: `Portfólio · ${subject}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="margin:0;padding:0;background:#050508;font-family:'Segoe UI',sans-serif;">
          <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
            
            <!-- Header -->
            <div style="text-align:center;margin-bottom:32px;">
              <h1 style="margin:0;font-size:28px;font-weight:900;background:linear-gradient(135deg,#00d4ff,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">&lt;Marco Martins /&gt;</h1>
              <p style="margin:8px 0 0;color:#8888aa;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Nova mensagem do portfólio</p>
            </div>

            <!-- Card -->
            <div style="background:#0d0d14;border:1px solid #1a1a2e;border-radius:16px;overflow:hidden;">
              
              <!-- Accent bar -->
              <div style="height:3px;background:linear-gradient(90deg,#00d4ff,#7c3aed);"></div>

              <div style="padding:32px;">
                <!-- Fields -->
                <div style="margin-bottom:20px;">
                  <p style="margin:0 0 4px;color:#8888aa;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Nome</p>
                  <p style="margin:0;color:#f0f0ff;font-size:16px;font-weight:600;">${name}</p>
                </div>

                <div style="margin-bottom:20px;">
                  <p style="margin:0 0 4px;color:#8888aa;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Email</p>
                  <a href="mailto:${email}" style="margin:0;color:#00d4ff;font-size:15px;text-decoration:none;">${email}</a>
                </div>

                <div style="margin-bottom:24px;">
                  <p style="margin:0 0 4px;color:#8888aa;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Assunto</p>
                  <p style="margin:0;color:#f0f0ff;font-size:15px;">${subject}</p>
                </div>

                <!-- Divider -->
                <div style="height:1px;background:linear-gradient(90deg,transparent,#1a1a2e,transparent);margin-bottom:24px;"></div>

                <!-- Message -->
                <div>
                  <p style="margin:0 0 12px;color:#8888aa;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Mensagem</p>
                  <p style="margin:0;color:#f0f0ff;font-size:15px;line-height:1.7;white-space:pre-wrap;">${message}</p>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div style="text-align:center;margin-top:24px;">
              <p style="margin:0;color:#5a5a7a;font-size:12px;">Enviado através do teu portfólio · <a href="https://github.com/marcoXmartins25" style="color:#00d4ff;text-decoration:none;">github.com/marcoXmartins25</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return { success: true };
  } catch {
    return { error: "Erro ao enviar. Tenta novamente." };
  }
}
