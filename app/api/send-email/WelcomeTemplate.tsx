import * as React from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <html>
      <body>
        <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
          <h1 style={{ color: "#333" }}>Welcome, {name}!</h1>
          <p>
            Thank you for joining our community! We are excited to have you on
            board.
          </p>
          <p>
            If you have any questions, feel free to reach out to us at any time.
            We are here to help.
          </p>
          <p>Best,</p>
          <p>The Team at Resend</p>
        </div>
      </body>
    </html>
  );
};

export default WelcomeTemplate;
