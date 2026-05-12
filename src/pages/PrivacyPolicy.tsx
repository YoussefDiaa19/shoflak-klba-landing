import LegalDocument, { type LegalSection } from "./LegalDocument";

const sections: LegalSection[] = [
  {
    title: "1. Information We Collect",
    paragraphs: ["We collect information that you voluntarily provide when using the App."],
    subsections: [
      {
        title: "A. Account Information",
        paragraphs: ["When you create an account using Google Sign-In or Apple Sign-In, we may collect:"],
        bullets: ["Your name", "Email address", "Profile picture", "Authentication provider ID", "We do not collect passwords because authentication is handled by third-party providers."],
      },
      {
        title: "B. Profile Information",
        paragraphs: ["You may provide information for your owner profile, including:"],
        bullets: ["Display name", "Profile photo", "City and area selected from dropdown menus", "We do not collect precise geographic location data or GPS location."],
      },
      {
        title: "C. Pet Information",
        paragraphs: ["When posting pets on the App, users may provide:"],
        bullets: ["Pet name", "Age", "Breed", "Personality", "Bio/description", "Vaccination status", "Pet photos", "All pet information may be publicly visible to other users of the App after approval by the admin team."],
      },
      {
        title: "D. Messages and Shared Content",
        paragraphs: ["Users may communicate through the App's messaging system.", "We may store:"],
        bullets: ["Chat messages", "Shared images", "Reports and moderation actions", "Messages are used to provide communication functionality and maintain platform safety."],
      },
      {
        title: "E. Reports and Blocking Information",
        paragraphs: ["If users report pets, profiles, or messages, we may collect:"],
        bullets: ["Report reason", "Reported content", "User IDs involved", "Moderation history", "This information is used to investigate abuse, enforce rules, and improve safety."],
      },
      {
        title: "F. App Preferences",
        paragraphs: ["The App may store certain user preferences locally or in our systems, including:"],
        bullets: ["Selected language preference (such as English or Arabic)", "Theme preference (light mode or dark mode)", "This information is used solely to personalize the user experience."],
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    bullets: [
      "Provide and operate the App",
      "Allow users to create profiles and pet listings",
      "Enable messaging between users",
      "Moderate and approve pet posts",
      "Respond to reports and abuse",
      "Maintain platform security and safety",
      "Prevent fraud, spam, or misuse",
      "Personalize user experience and app preferences",
      "Respond to support requests submitted through the contact form",
      "Comply with legal obligations",
    ],
  },
  {
    title: "3. Public Information",
    paragraphs: ["The following information may be visible to other users:"],
    bullets: ["Owner display name", "Profile picture", "City/area", "Pet profiles and pet images", "Pet descriptions and details", "Users should avoid sharing sensitive personal information publicly."],
  },
  {
    title: "4. User-Generated Content",
    paragraphs: [
      "Users retain ownership of the content they upload, including pet photos, bios, profile information, and chat content.",
      "However, by uploading content to the App, you grant Shoflak Klba a non-exclusive, worldwide, royalty-free license to:",
    ],
    bullets: ["Host", "Store", "Display", "Reproduce", "Moderate", "your content solely for operating and improving the App."],
  },
  {
    title: "5. Account Deletion",
    paragraphs: ["Users may delete their accounts through the App.", "When an account is deleted:"],
    bullets: ["Owner profile information is removed", "Pet listings are deleted", "Uploaded content is removed", "Associated account data is deleted from our active systems", "Some information may remain temporarily in backups or where legally required."],
  },
  {
    title: "6. Third-Party Services",
    paragraphs: ["We use trusted third-party services to operate the App."],
    subsections: [
      { title: "A. Backend and Database", paragraphs: ["The App uses Supabase for backend services and database infrastructure."] },
      { title: "B. Push Notifications", paragraphs: ["The App uses Firebase Cloud Messaging for push notifications."] },
      { title: "C. Image Storage", paragraphs: ["The App uses Cloudflare R2 object storage for storing uploaded images."] },
      { title: "D. Authentication", paragraphs: ["Login services are provided through:"], bullets: ["Google", "Apple", "These third-party services may process data according to their own privacy policies."] },
    ],
  },
  {
    title: "7. Contact Forms",
    paragraphs: ["Users may contact us through the in-app contact form. Information submitted through the contact form may be used to respond to support requests, feedback, or reports."],
  },
  {
    title: "8. Data Security",
    paragraphs: ["We take reasonable technical and organizational measures to protect user information from unauthorized access, misuse, loss, or disclosure.", "However, no method of electronic storage or internet transmission is completely secure, and we cannot guarantee absolute security."],
  },
  {
    title: "9. Children's Privacy",
    paragraphs: ["Shoflak Klba is intended for users aged 13 years or older.", "We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided personal information, we may remove the account and associated data.", "Parents or guardians who believe a child has used the App may contact us."],
  },
  {
    title: "10. Content Moderation",
    paragraphs: ["All pet posts are subject to manual approval by the App administrator.", "Users may also:"],
    bullets: ["Report pets", "Report messages", "Block other users", "We reserve the right to remove content or suspend accounts that violate our rules or create unsafe experiences."],
  },
  {
    title: "11. No Verification Guarantee",
    paragraphs: ["Information provided in pet profiles, including vaccination status, breed, age, or personality, is submitted by users and is not independently verified by Shoflak Klba.", "Users are responsible for verifying information before arranging meetings, breeding, or interactions."],
  },
  {
    title: "12. External Meetings and Responsibility",
    paragraphs: ["Shoflak Klba only provides a platform for users to connect.", "We are not responsible for:"],
    bullets: ["Offline interactions", "Pet breeding outcomes", "Injuries", "Illnesses", "Veterinary issues", "Misrepresentation by users", "Transactions or agreements made outside the App", "Users interact and arrange meetings entirely at their own risk."],
  },
  {
    title: "13. International Use",
    paragraphs: ["The App may be accessible worldwide.", "By using the App, you understand that your information may be processed and stored in countries different from your own."],
  },
  {
    title: "14. Changes to This Privacy Policy",
    paragraphs: ["We may update this Privacy Policy from time to time.", "Updated versions will be posted within the App or on the related app store listing with a revised effective date.", "Continued use of the App after updates means you accept the revised Privacy Policy."],
  },
  {
    title: "15. Contact Information",
    paragraphs: ["If you have questions about this Privacy Policy, you may contact:"],
    bullets: ["Youssef Diaa", "Email: youssefdiaa19@gmail.com"],
  },
  {
    title: "16. Governing Law",
    paragraphs: ["This Privacy Policy shall be governed by and interpreted in accordance with the laws of Egypt."],
  },
];

const PrivacyPolicy = () => (
  <LegalDocument
    title="Privacy Policy for Shoflak Klba"
    effectiveDate="May 12, 2026"
    intro={[
      "Welcome to Shoflak Klba (the App, we, our, or us), operated by Youssef Diaa.",
      "Shoflak Klba is a mobile application designed to help users find suitable companions and mates for pets, specifically dogs, cats, and birds.",
      "By using the App, you agree to the practices described in this Privacy Policy.",
    ]}
    sections={sections}
  />
);

export default PrivacyPolicy;