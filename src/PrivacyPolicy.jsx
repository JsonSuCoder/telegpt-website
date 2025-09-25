import React from 'react';
import './PrivacyPolicy.scss';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-container">
        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="effective-date">Effective Date: August 13, 2025</p>
        </header>

        <div className="privacy-content">
          <div className="intro-section">
            <p>
              This Privacy Policy is intended to explain how we, the TelyAI Service (hereinafter referred to as "we" or "the Service") collect, use, process and protect your personal data when you use our Smart Chat Assistant Service. TelyAI is your smart companion on Telegram, offering a range of powerful AI features including text generation, translation, grammar checking, content summary, meeting scheduling and voice calls.
            </p>
            <p>
              We know your importance to privacy. This policy details how we process your information and what rights you have with it.
            </p>
          </div>

          <section className="policy-section">
            <h2>1. Introduction</h2>
            <p>
              TelyAI is committed to enhancing user interaction on Telegram with advanced artificial intelligence technology. As part of the Telegram ecosystem, this service runs through Telegram's API, meaning that some of your data will be processed in accordance with Telegram's own privacy policy. We recommend that you review Telegram's privacy policy to understand how its data is processed, including how it shares user data with relevant departments (such as IP addresses and phone numbers) according to legal obligations.
            </p>
            <div className="policy-overview">
              <h3>This Privacy Policy covers:</h3>
              <ul>
                <li>What data do we collect</li>
                <li>How we use your data</li>
                <li>How we share your data</li>
                <li>How we protect your data</li>
                <li>How long do we keep your data</li>
                <li>Your rights to the data</li>
                <li>How we deal with children's privacy</li>
                <li>Changes to this policy</li>
                <li>How to contact us</li>
              </ul>
            </div>
          </section>

          <section className="policy-section">
            <h2>2. Information we collect</h2>
            <p>To provide and improve TelyAI services, we may collect the following types of information:</p>
            
            <div className="subsection">
              <h3>2.1 Information you provide directly</h3>
              <p>When you use TelyAI, you may provide us with:</p>
              <ul>
                <li><strong>Telegram User ID:</strong> This is the unique identifier we use to identify and serve you. We do not collect your Telegram phone number or contact list.</li>
                <li><strong>AI function input:</strong> text messages you send to the robot, voice input (for voice call functions), and content that needs to be translated or summarized. These contents will be used as input for the processing of the AI model.</li>
                <li><strong>Contact Information:</strong> When you use the meeting scheduling feature, we only collect participants' email addresses to send meeting invitations. We do not collect or store phone numbers or other contact information.</li>
                <li><strong>Location Information:</strong> If you choose to share your location in a chat, that location data will be processed like other messages.</li>
                <li><strong>Feedback information:</strong> Feedback voluntarily submitted, including questions, suggestions or error reports.</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>2.2 Automatically collected information</h3>
              <p>When you use TelyAI, we may automatically collect:</p>
              <ul>
                <li><strong>Usage Data:</strong> Information about how you interact with AI features, including the features you use, the frequency of use, the timestamp of each interaction, and the AI response time.</li>
                <li><strong>Device Information:</strong> We collect information from devices and browsers integrated with our services, including device types, hardware models, operating systems and versions, browser types and languages.</li>
                <li><strong>Technical data:</strong> System logs related to service operations, such as API requests, error logs, and performance data for diagnostics and stability.</li>
                <li><strong>Cookies and tracking technologies:</strong> We and our service providers use cookies, web beacons and other technologies to collect information to improve our services and your experience.</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>2.3 Information from Telegram API</h3>
              <p>
                As a backend service for Telegram bots, we receive the necessary information through the Telegram API in response to your requests, such as your Telegram user ID and message content. We do not proactively collect any information that exceeds the scope of the service required.
              </p>
            </div>

            <div className="subsection">
              <h3>2.4 Information from Google API</h3>
              <p>When you choose to use features that require Google Account authorization, we will collect data through the following Google API services:</p>
              
              <div className="api-service">
                <h4>Google API services and scopes used:</h4>
                
                <div className="api-item">
                  <h5>Google Calendar API</h5>
                  <ul>
                    <li><strong>Scopes:</strong> https://www.googleapis.com/auth/calendar</li>
                    <li><strong>Data collected:</strong> calendar event information, meeting details, schedule</li>
                    <li><strong>Purpose of use:</strong> Create meetings, query schedules, and schedule reminders</li>
                    <li><strong>Necessity Note:</strong> Full calendar access is required to create, modify and query meeting events</li>
                  </ul>
                </div>

                <div className="api-item">
                  <h5>Google OAuth 2.0 API</h5>
                  <ul>
                    <li><strong>Scopes:</strong> https://www.googleapis.com/auth/userinfo.email, https://www.googleapis.com/auth/userinfo.profile</li>
                    <li><strong>Data collected:</strong> Google user ID, email address, basic profile information</li>
                    <li><strong>Purpose of use:</strong> authentication, account association, service notification</li>
                    <li><strong>Necessity Note:</strong> Ensure secure authentication and personalization of services</li>
                  </ul>
                </div>
              </div>
              
              <p>We strictly comply with the Google API Services User Data Policy, including "limited use" requirements.</p>
            </div>

            <div className="subsection">
              <h3>2.5 Third-party analysis services</h3>
              <p>To improve service quality and user experience, we use the following third-party analytics services to collect anonymous usage data:</p>
              <ul>
                <li><strong>Google Analytics:</strong> Used to analyze application usage patterns and performance</li>
                <li><strong>Firebase Analytics:</strong> for application performance monitoring and crash reporting</li>
                <li><strong>Other analytical tools:</strong> for user behavior analysis and service optimization</li>
              </ul>
              <p>
                All information collected through third-party analytics services is anonymous and cannot be associated with a specific user. This data is used only to improve the quality of services and will not be used for advertising or other marketing purposes.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <h2>3. Google API Services Limited Usage Policy Compliance Statement</h2>
            <p>TelyAI's use of information received from Google APIs will comply with the Google API Services User Data Policy, including limited use requirements.</p>
            
            <div className="subsection">
              <h3>3.1 Limited use commitment</h3>
              <p>We explicitly promise:</p>
              <ul>
                <li><strong>No user data for sale:</strong> We will never sell your Google user data to any third party</li>
                <li><strong>Not for advertising:</strong> We do not use your Google user data for advertising, redirection, personalization, or interest-based advertising</li>
                <li><strong>Not used for credit assessments:</strong> We do not use your Google user data for determining credit value or lending purposes</li>
                <li><strong>Not transmitted to data brokers:</strong> We will not transfer your Google user data to advertising platforms, data brokers or any information resellers</li>
                <li><strong>Not trained AI models:</strong> We will not use your Google user data to train generalized AI or machine learning models</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>3.2 Manual viewing restrictions</h3>
              <p>We do not allow manual viewing of your Google user data except for the following:</p>
              <ul>
                <li>Get your express consent to view specific messages, files, or other data</li>
                <li>For security purposes (such as investigating abuse)</li>
                <li>Technical support required (requires your explicit request)</li>
                <li>Under the circumstances required by law</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>3.3 Data aggregation usage</h3>
              <p>
                We may aggregate and anonymize data for internal operational purposes only (such as reporting aggregate statistics in internal dashboards), but such use complies with applicable privacy and other legal requirements.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <h2>4. How we use your information</h2>
            <p>We use your information for the following purposes:</p>
            
            <div className="subsection">
              <h3>4.1 Core service provision</h3>
              <ul>
                <li><strong>Providing and maintaining services:</strong> Processing your AI requests such as text generation, translation, grammar checking, summary and voice calls</li>
                <li><strong>Meeting Management Features:</strong> Create, modify, and manage your Google Calendar events</li>
                <li><strong>Contact Management:</strong> Find and manage meeting participant information</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>4.2 Service improvement</h3>
              <ul>
                <li><strong>Improve and optimize services:</strong> Analyze usage patterns to improve existing features and develop new features</li>
                <li><strong>Troubleshooting and Support:</strong> Diagnose technical issues and respond to support requests</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>4.3 Safety and compliance</h3>
              <ul>
                <li><strong>Ensure service security:</strong> Monitor potential abuse or threats to ensure users and platforms' security</li>
                <li><strong>Comply with legal obligations:</strong> meet applicable legal and regulatory requirements</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>4.4 Specific uses of Google user data</h3>
              <p>For data obtained through the Google API, we will only use it for:</p>
              <ul>
                <li>Provide and run features of your choice (such as creating meetings based on your calendar, reading your contacts for sending invitations)</li>
                <li>Improve the experience and stability of these features</li>
                <li>Provide you with a personalized service experience</li>
              </ul>
            </div>
          </section>

          <section className="policy-section">
            <h2>5. How we share your information</h2>
            <p>To provide the core functionality of TelyAI, your information may be shared under the following circumstances:</p>
            
            <div className="subsection">
              <h3>5.1 with AI Model Provider</h3>
              <p>Your input (such as text, voice data) may be sent to third-party AI model providers for processing. These providers process data in accordance with their respective privacy policies.</p>
            </div>

            <div className="subsection">
              <h3>5.2 Using Telegram</h3>
              <p>Because TelyAI runs through Telegram's infrastructure, data such as your user ID and message content are processed by Telegram before they arrive at us and after they leave us. For more details, please refer to Telegram's Privacy Policy.</p>
            </div>

            <div className="subsection">
              <h3>5.3 With Service Providers</h3>
              <p>We may hire third-party companies and individuals to help us provide, maintain and analyze our services (e.g., hosting, database management). These providers only access the data required to perform their duties and are obliged not to use it for any other purpose.</p>
            </div>

            <div className="subsection">
              <h3>5.4 Special protection of Google user data</h3>
              <p>We will not transfer your Google user data to any third party unless necessary to provide the features you choose to use (such as writing events to the Google Calendar API). In these cases, the data will only be transmitted in a secure encrypted channel and will only be sent to the Google API or a service provider with your express consent.</p>
            </div>

            <div className="subsection">
              <h3>5.5 Legal Requirements</h3>
              <p>We may disclose your data to comply with legal obligations or valid requirements of public authorities (such as courts, government agencies).</p>
            </div>

            <div className="subsection">
              <h3>5.6 Business Transfer</h3>
              <p>If TelyAI involves a merger, acquisition, or asset sale, your data may be transferred as part of the transaction. We will notify you 30 days in advance before your data is subject to other privacy policies.</p>
            </div>

            <div className="subsection">
              <h3>5.7 Get your consent</h3>
              <p>We will use your information for other purposes not mentioned in this policy only with your express consent.</p>
            </div>

            <div className="highlight-box">
              <p><strong>We promise: We will never sell your personal data.</strong></p>
            </div>
          </section>

          <section className="policy-section">
            <h2>6. Data retention</h2>
            <p>We retain your data only for the period required to achieve the purposes described in this Privacy Policy:</p>
            
            <div className="subsection">
              <h3>6.1 Specific retention period</h3>
              <ul>
                <li><strong>Telegram User ID and Basic Account Information:</strong> Retained during your use of the Services and deleted within 30 days after the account is deleted</li>
                <li><strong>AI interactive content:</strong> Delete within 24 hours after processing is completed, unless you explicitly request that you retain it for improving your personal experience</li>
                <li><strong>Google User Data:</strong>
                  <ul>
                    <li>Calendar data: only temporarily accessed when the service is provided, and not stored locally</li>
                    <li>Contact data: Only temporarily cached during the meeting creation process, deleted immediately after completion</li>
                    <li>Authentication token: retained during the validity period and automatically deleted after expiration.</li>
                  </ul>
                </li>
                <li><strong>Technical logs and usage data:</strong> retained for 90 days, then automatically deleted or anonymous</li>
                <li><strong>Feedback and support data:</strong> Retained for 2 years for service improvement</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>6.2 Data deletion program</h3>
              <p>Once data is no longer needed, we will take the following measures:</p>
              <ul>
                <li>Completely delete data from the active system</li>
                <li>Clear data from the backup system (up to 30 days)</li>
                <li>Make sure the data cannot be recovered</li>
                <li>Or irreversible anonymization of the data</li>
              </ul>
            </div>
          </section>

          <section className="policy-section">
            <h2>7. Data security</h2>
            
            <div className="subsection">
              <h3>7.1 Technical safety measures</h3>
              <p>We implement the following security measures to protect your data:</p>
              <ul>
                <li><strong>Transmission encryption:</strong> All data transmissions are encrypted using TLS 1.3</li>
                <li><strong>Storage encryption:</strong> Sensitive data is encrypted using AES-256</li>
                <li><strong>Access control:</strong> Implement role-based access control, the principle of minimum permissions</li>
                <li><strong>API Security:</strong> All Google API calls use OAuth 2.0 security authentication</li>
                <li><strong>Network security:</strong> firewall protection, intrusion detection system</li>
                <li><strong>Regular security audits:</strong> Quarterly security assessments and vulnerability scans</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>7.2 Organizational safety measures</h3>
              <ul>
                <li><strong>Staff training:</strong> Regular privacy and security training</li>
                <li><strong>Access Monitoring:</strong> Record and monitor all data access activities</li>
                <li><strong>Incident Response:</strong> Establish a Data Breach Emergency Response Program</li>
                <li><strong>Third-party assessment:</strong> Regularly accept independent security assessments</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>7.3 Google API special security requirements</h3>
              <p>We comply with Google's security assessment requirements, including:</p>
              <ul>
                <li>Regular safety assessment</li>
                <li>Third-party security certification</li>
                <li>Comply with Cloud Application Security Assessment (CASA) standards</li>
              </ul>
            </div>

            <div className="warning-box">
              <p><strong>Important reminder:</strong> No internet transmission or electronic storage method is 100% secure. We cannot guarantee the absolute security of any information you transmit to us, but we promise to protect your data using industry best practices.</p>
            </div>
          </section>

          <section className="policy-section">
            <h2>8. Your data protection rights</h2>
            <p>Under applicable data protection laws, you may have the following rights to your personal data:</p>
            
            <div className="subsection">
              <h3>8.1 Basic Rights</h3>
              <ul>
                <li><strong>Access:</strong> You may request access to the personal data we hold about you</li>
                <li><strong>Right to correct:</strong> You can request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion Right:</strong> You can request to delete your data under certain conditions</li>
                <li><strong>Right to restrict processing:</strong> You may require us to restrict processing of your data in certain circumstances</li>
                <li><strong>Data portability:</strong> You can request your data in a structured, commonly used, machine-readable format</li>
                <li><strong>Right to object:</strong> You may object to our processing of your personal data</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>8.2 Google Data Special Rights</h3>
              <ul>
                <li><strong>Revoke Authorization:</strong> You can revoke our access to your Google data at any time through your Google Account settings</li>
                <li><strong>View permissions:</strong> You can view the permissions we currently have in your Google Account Settings</li>
                <li><strong>Data Export:</strong> You can ask to export your Google data we process</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>8.3 Methods of exercising rights</h3>
              <p>To exercise these rights:</p>
              <ul>
                <li>Send an email to: Hi@telyai.org</li>
                <li>Explain the rights you want to exercise in the email</li>
                <li>Provide necessary authentication information</li>
                <li>We will respond to your request within 30 days</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>8.4 Complaint Rights</h3>
              <p>If you believe that we have violated privacy laws, you have the right to complain to the relevant data protection regulator.</p>
            </div>
          </section>

          <section className="policy-section">
            <h2>9. Children's Privacy</h2>
            
            <div className="subsection">
              <h3>9.1 Age restriction</h3>
              <p>TelyAI does not target or knowingly collect personal data from children under the age of 13. We require all users to be at least 13 years of age.</p>
            </div>

            <div className="subsection">
              <h3>9.2 Age verification</h3>
              <p>We ensure compliance by:</p>
              <ul>
                <li>Identify age requirements in terms of service</li>
                <li>Monitor usage patterns to identify possible minor users</li>
                <li>Not using Google Sign-In as a authentication method for children</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>9.3 Handling of underage users found</h3>
              <p>If we find data for children under 13 years of age:</p>
              <ul>
                <li>Stop processing of this data immediately</li>
                <li>Delete from our server within 48 hours</li>
                <li>Notify the relevant guardian (if possible)</li>
                <li>Prevent the account from continuing to use the service</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>9.4 Parental rights</h3>
              <p>If you are a parent or guardian and believe that your child has provided us with personal data, please contact us immediately: Hi@telyai.org</p>
            </div>
          </section>

          <section className="policy-section">
            <h2>10. International data transmission</h2>
            
            <div className="subsection">
              <h3>10.1 Data transfer location</h3>
              <p>Your data may be transferred to and processed on computers outside your country. Data protection laws in these countries may differ from those in your jurisdiction.</p>
            </div>

            <div className="subsection">
              <h3>10.2 Transmission guarantee measures</h3>
              <p>When we conduct international data transmission, we adopt the following safeguards:</p>
              <ul>
                <li><strong>Standard Contract Terms:</strong> Use standard contract terms approved by the European Commission</li>
                <li><strong>Adequacy Decision:</strong> Priority transfer to countries with adequate data protection levels</li>
                <li><strong>Other safeguards:</strong> Implement additional technical and organizational measures</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>10.3 Google Data Transfer</h3>
              <p>The transmission of Google user data strictly complies with Google's data transfer policies and applicable data protection laws.</p>
            </div>
          </section>

          <section className="policy-section">
            <h2>11. Changes to this policy</h2>
            
            <div className="subsection">
              <h3>11.1 Update frequency</h3>
              <p>We may update this Privacy Policy from time to time. We promise:</p>
              <ul>
                <li>This policy is reviewed at least once a year</li>
                <li>Update timely when major changes occur in business practices</li>
                <li>Update immediately when changes are required by law</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>11.2 Notification method</h3>
              <p>When we update this policy, we will:</p>
              <ul>
                <li>Release an updated version on this page</li>
                <li>Update the "Last Update" date at the top of the page</li>
              </ul>
              <p>For major changes, we will:</p>
              <ul>
                <li>Notify by email (if we have your email address)</li>
                <li>Show obvious notifications in the service</li>
                <li>Notify 30 days in advance</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>11.3 Version Control</h3>
              <p>We maintain the version history of this policy and you can request to view previous versions. Major changes include:</p>
              <ul>
                <li>Changes in data collection type</li>
                <li>Changes in the purpose of data use</li>
                <li>Changes in data sharing practices</li>
                <li>Changes in retention period</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>11.4 User Accepted</h3>
              <p>By continuing to use our services, you accept the updated privacy policy. If you do not agree to the change, you can stop using the Service and request that your data be deleted.</p>
            </div>
          </section>

          <section className="policy-section">
            <h2>12. User-generated content and community guidelines</h2>
            
            <div className="subsection">
              <h3>12.1 Public content</h3>
              <p>The information you post in public chats and channels is available for viewing by other users of Telegram and its clients. Please note:</p>
              <ul>
                <li>Do not include offensive, sensitive, unpleasant or malicious content</li>
                <li>Avoid publishing content that may violate local laws and regulations</li>
                <li>Make sure you have the right to share what you post</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>12.2 Content Filtering</h3>
              <ul>
                <li>All content is stored and processed by Telegram servers</li>
                <li>Telegram is developing algorithms that automatically detect inappropriate content and block access</li>
                <li>We cooperate with Telegram's content review mechanism</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>12.3 Reporting mechanism</h3>
              <p>You can report misconduct in the following ways:</p>
              <ul>
                <li>Report through context menu when highlighting messages in a chat</li>
                <li>Report on the target user's profile page</li>
                <li>Contact our support team directly</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>12.4 User blocking</h3>
              <p>You can block any user and you will not receive any messages from that user after blocking. The blocking function can be used on the target user's profile page.</p>
            </div>
          </section>

          <section className="policy-section">
            <h2>13. Contact Us</h2>
            
            <div className="subsection">
              <h3>13.1 Privacy Issues</h3>
              <p>If you have any questions or suggestions about this Privacy Policy, please contact us at:</p>
              <div className="contact-info">
                <p><strong>Email:</strong> Hi@telyai.org</p>
                <p><strong>Topic:</strong> Privacy Policy Consultation</p>
              </div>
            </div>

            <div className="subsection">
              <h3>13.2 Data Protection Officer</h3>
              <p>We will appoint a data protection officer if required by applicable law. You can contact our data protection team through the above email address.</p>
            </div>

            <div className="subsection">
              <h3>13.3 Response time</h3>
              <p>We promise:</p>
              <ul>
                <li><strong>Confirm to receive your inquiries:</strong> within 48 hours</li>
                <li><strong>Full reply General consultation:</strong> within 7 working days</li>
                <li><strong>Data processing rights request:</strong> within 30 days</li>
                <li><strong>Emergency safety incident:</strong> within 24 hours</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>13.4 Other contact information</h3>
              <p>For urgent privacy or security issues, you can also:</p>
              <ul>
                <li>Contact directly through our Telegram bots</li>
                <li>Visit our official website for more contact information</li>
              </ul>
            </div>
          </section>

          <div className="important-statement">
            <h3>Important Statement</h3>
            <p>
              As part of the Telegram robot ecosystem, TelyAI follows the basic principles of Telegram: We do not use your data to serve ads, we only store the data required by TelyAI as a secure and feature-rich AI assistant service.
            </p>
          </div>

          <section className="policy-section">
            <h2>Appendix: Technical and Legal Reference</h2>
            
            <div className="subsection">
              <h3>A1. Applicable laws and regulations</h3>
              <ul>
                <li>EU General Data Protection Regulation (GDPR)</li>
                <li>California Consumer Privacy Act (CCPA/CPRA)</li>
                <li>Children's Online Privacy Protection Act (COPPA)</li>
                <li>State privacy laws (if applicable)</li>
                <li>Telegram Bot Platform Developer Terms of Service</li>
                <li>Telegram Terms of Service</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>A2. Google Policy Reference</h3>
              <ul>
                <li>Google API Services User Data Policy</li>
                <li>Google APIs Terms of Service</li>
                <li>Google Cloud Privacy Notice</li>
                <li>Google Workspace Data Processing Agreement</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>A3. Safety Standard Reference</h3>
              <ul>
                <li>ISO 27001 Information Security Management</li>
                <li>SOC 2 Type II Compliance</li>
                <li>Cloud Application Security Assessment (CASA)</li>
                <li>TLS 1.3 Transmission Encryption Standard</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>A4. Telegram-related policies</h3>
              <ul>
                <li>Telegram Privacy Policy</li>
                <li>Standard Privacy Policy for Bots and Mini Apps</li>
                <li>Telegram Bot Platform Developer Terms of Service</li>
                <li>Terms of Service for Bots</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;