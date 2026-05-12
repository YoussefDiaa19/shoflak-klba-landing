import LegalDocument, { type LegalSection } from "./LegalDocument";

const sections: LegalSection[] = [
  {
    title: "1. About the App",
    paragraphs: ["Shoflak Klba is a platform designed to help users connect with other pet owners for the purpose of finding companions or mates for pets, specifically:"],
    bullets: ["Dogs", "Cats", "Birds", "The App allows users to create owner profiles, post pet profiles, browse pets, message other users, save favorites, report content, and block users."],
  },
  {
    title: "2. Eligibility",
    paragraphs: ["To use the App, you must:"],
    bullets: ["Be at least 13 years old", "Have the legal ability to agree to these Terms", "Use the App in compliance with applicable laws", "By using the App, you confirm that you meet these requirements."],
  },
  {
    title: "3. Account Registration",
    paragraphs: ["Users may access the App only through:"],
    bullets: ["Google Sign-In", "Apple Sign-In", "You are responsible for maintaining access to your login provider account.", "You agree to provide accurate and truthful information when creating your profile and pet listings."],
  },
  {
    title: "4. User Content",
    paragraphs: ["Users may upload and share content including:"],
    bullets: ["Pet photos", "Owner profile photos", "Pet details and descriptions", "Messages and images in chats", "You retain ownership of your content.", "However, by uploading content to the App, you grant Shoflak Klba permission to host, store, display, moderate, and reproduce your content solely for operating and improving the App."],
  },
  {
    title: "5. Pet Information Disclaimer",
    paragraphs: ["All pet information displayed in the App is provided by users.", "Shoflak Klba does not verify:"],
    bullets: ["Vaccination status", "Breed authenticity", "Pet health", "Pet behavior", "User identity", "Accuracy of listings", "Users are solely responsible for verifying any information before arranging meetings or breeding activities."],
  },
  {
    title: "6. Acceptable Use",
    paragraphs: ["You agree NOT to:"],
    bullets: ["Post false or misleading information", "Upload inappropriate or offensive content", "Harass, threaten, or abuse other users", "Spam users", "Impersonate another person", "Use the App for illegal activities", "Upload content unrelated to dogs, cats, or birds", "Attempt to hack, disrupt, or misuse the App", "Circumvent bans or restrictions", "We reserve the right to remove content or suspend accounts that violate these Terms."],
  },
  {
    title: "7. Content Moderation",
    paragraphs: ["All pet listings are subject to manual approval by the App administrator.", "Users may:"],
    bullets: ["Report pets", "Report messages", "Block users", "We may review reported content and take moderation actions including removing content, rejecting listings, suspending accounts, and permanently banning users.", "Moderation decisions are made at our sole discretion."],
  },
  {
    title: "8. Messaging and User Interactions",
    paragraphs: ["The App includes messaging features that allow users to communicate directly.", "Users are solely responsible for their conversations, shared content, arranged meetings, and agreements made with others.", "Shoflak Klba is not responsible for user behavior, scams, misconduct, harassment, offline interactions, or injuries or damages arising from meetings.", "Users interact entirely at their own risk."],
  },
  {
    title: "9. Pet Breeding and External Arrangements",
    paragraphs: ["Shoflak Klba only provides a platform for connecting pet owners.", "We are not responsible for:"],
    bullets: ["Breeding outcomes", "Pet compatibility", "Pregnancy complications", "Veterinary expenses", "Injuries", "Diseases", "Genetic conditions", "Pet sales or transactions", "Disputes between users", "Any arrangement made outside the App is entirely between users."],
  },
  {
    title: "10. Blocking and Reporting",
    paragraphs: ["Users may block other users and report content or messages.", "Blocking a user may limit interactions within the App, but we cannot guarantee complete prevention of future contact outside the platform.", "False or abusive reporting may result in account action."],
  },
  {
    title: "11. Account Deletion",
    paragraphs: ["Users may delete their accounts through the App.", "Upon deletion:"],
    bullets: ["Profile information may be removed", "Pet listings may be deleted", "Uploaded content may be removed", "Some information may remain temporarily in backups or where legally required."],
  },
  {
    title: "12. Intellectual Property",
    paragraphs: ["The App, including its branding, design, software, and features, is owned by Shoflak Klba and/or Youssef Diaa.", "Users may not:"],
    bullets: ["Copy", "Modify", "Reverse engineer", "Redistribute", "Exploit", "any part of the App without permission."],
  },
  {
    title: "13. Third-Party Services",
    paragraphs: ["The App relies on third-party services including:"],
    bullets: ["Supabase", "Firebase", "Cloudflare", "Google", "Apple", "We are not responsible for outages, failures, or actions caused by third-party services."],
  },
  {
    title: "14. Disclaimer of Warranties",
    paragraphs: ["The App is provided on an AS IS and AS AVAILABLE basis.", "We do not guarantee that the App will always be available, will be error-free, that users will behave safely or honestly, that matches or breeding arrangements will be successful, or that information on the platform is accurate.", "Use of the App is entirely at your own risk."],
  },
  {
    title: "15. Limitation of Liability",
    paragraphs: ["To the maximum extent permitted by law, Shoflak Klba and Youssef Diaa shall not be liable for:"],
    bullets: ["Indirect damages", "Lost profits", "Emotional distress", "Injuries", "Veterinary costs", "Data loss", "User disputes", "Damages arising from user interactions or pet breeding activities"],
  },
  {
    title: "16. Termination",
    paragraphs: ["We reserve the right to suspend accounts, restrict access, remove content, or permanently ban users at any time and for any reason, especially for violations of these Terms."],
  },
  {
    title: "17. Changes to These Terms",
    paragraphs: ["We may update these Terms and Conditions from time to time.", "Updated versions will be posted within the App or related app store listings.", "Continued use of the App after updates means you accept the revised Terms."],
  },
  {
    title: "18. Governing Law",
    paragraphs: ["These Terms and Conditions shall be governed by and interpreted in accordance with the laws of Egypt."],
  },
  {
    title: "19. Contact Information",
    paragraphs: ["If you have questions about these Terms and Conditions, you may contact:"],
    bullets: ["Youssef Diaa", "Email: youssefdiaa19@gmail.com"],
  },
];

const TermsConditions = () => (
  <LegalDocument
    title="Terms and Conditions for Shoflak Klba"
    effectiveDate="May 12, 2026"
    intro={[
      "Welcome to Shoflak Klba (the App, we, our, or us), operated by Youssef Diaa.",
      "These Terms and Conditions govern your access to and use of the Shoflak Klba mobile application and related services.",
      "By creating an account or using the App, you agree to these Terms and Conditions. If you do not agree, you must not use the App.",
    ]}
    sections={sections}
  />
);

export default TermsConditions;