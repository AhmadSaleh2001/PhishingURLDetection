import React from "react";

function Tips() {
  return (
    <ol className="list-group list-group-numbered">
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Emulate trusted brand pages</div>
          One of the standard cyber security practices is not to open emails
          from unknown senders. To fool you, the hacker builds a page that
          matches the pages of trusted brands. You might receive a message that
          looks like it's from Apple, Amazon, or your bank, but is actually fake
          and contains phishing malware.
        </div>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Spelling errors</div>
          Hackers don't pay money to proofread their writing...with a specific
          intent. They only want to fool the most stupid of people, so phishing
          scams often include critical errors, such as typos or grammatical
          errors. Clumsy formatting, poor graphics, and the use of random fonts
          are some of the hallmarks of phishing.
        </div>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Use of scare tactics</div>
          Urgency and intimidation are two marketing tactics known to get
          customers to act quickly. Criminals also use these two methods in
          phishing scams to get victims to mindlessly click on certain links.
          For example, they may claim that your bank account is about to be
          closed, that you will face a fine if you do not cooperate with them,
          or that there is a security breach in your account.
        </div>
      </li>

      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            The hacker uses an unofficial email address
          </div>
          Even if hackers can professionally clone the branding and email
          templates of a trusted company, they can never use the company's
          official email address. Most phishing programs are sent from
          completely random email addresses, but sometimes, hackers manage to
          secure addresses similar to those of exploiting companies. It's worth
          checking the company's website for official contact details before
          responding.
        </div>
      </li>

      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Perfect things are hard to believe</div>
          Besides using scare tactics, phishing scams also take advantage of our
          physical nature. For example, claims that you won an iPad, a vacation
          abroad, or a million dollars are classic scams. So always remember, if
          a situation is incredibly perfect, it is likely to be a lie.
        </div>
      </li>
    </ol>
  );
}

export default Tips;
