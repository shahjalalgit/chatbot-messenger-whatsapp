# Next.js Facebook Chat Demo

This is a demo Next.js 12.3.1 app that integrates the Facebook Messenger Customer Chat Plugin.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Replace `YOUR_FACEBOOK_PAGE_ID` in `components/FacebookChat.js` with your actual Facebook Page ID.
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Notes
- You may need to whitelist your domain in your Facebook Page settings under Messenger Platform > Whitelisted Domains.
- The Messenger plugin may not show up on localhost unless you add it as a whitelisted domain.
