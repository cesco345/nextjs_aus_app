import { Resend } from "resend";
import WelcomeTemplate from "./WelcomeTemplate";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "algotrade345@gmail.com",
    subject: "Hello World",
    react: <WelcomeTemplate name="Mateo" />,
  });
}
