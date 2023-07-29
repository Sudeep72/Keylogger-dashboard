# Keylogger for Windows

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)

[Dashboard](https://whisparo.vercel.app)

# For EDUCATIONAL PURPOSES ONLY

## Keylogger
A keylogger is a type of surveillance technology used to monitor and record each keystroke on a specific computer.

# Code
You can find the python script above. It is also with stealth mode. Feel free to modify and use.

## Dashboard
Dashboard is used to find the keys logged. It consists pc_name as file name who atleast ran the script atleast once.

# Setup
``` 
git clone https://github.com/Sudeep72/Keylogger-dashboard.git
```

Install necessary dependencies by 
``` 
npm install
```

Create a file `.env.local` with
```
NEXT_PUBLIC_SUPABASE_URL = your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY = your_supabase_anon_key
NEXT_SUPABASE_SERVICE_ROLE_KEY = your_supabase_service_role_key
```
Create a Supabase account and setup a project

For more information, refer [Supabase](https://supabase.com/docs)

Run the project
```
npm run dev
```
Feel free to modify and use according to your needs.

# Construction
Keys logged and pc_name are fetched and sent via API to supabase and stored in supabase buckets.

Buckets are fetched and displayed in the website.

Manual signup is only supported for security purposes. To make a login credentials, navigate to your supabase project 
and add credentials.

## Tech Stack
- Next JS
- Tailwind CSS
- Supabase
- Daisy UI
- Python

# Hosting
- Hosted via [Vercel](https://vercel.com)
- Make sure that `vercel.json` file is present
- Before deployment add the environmental variables to Vercel environmental variables and deploy

---
#### Uses

Some uses of Keylogger are:

- Business Administration: Monitor what employees are doing.
- School/Institutions: Track keystrokes and log banned words in a file.
- Personal Control and File Backup: Make sure no one is using your computer when you are away.
- Parental Control: Track what your children are doing.
- Self analysis

---

Feel free to contribute to fix any problems, or to submit an issue!

Please note, this repo is for educational purposes only. No contributors, major or minor, are to fault for any actions done by this program.

Any queries, contact via [mail](sudeep7217@gmail.com)

# Support
<p><a href="https://www.buymeacoffee.com/sudeep7217u"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="sudeep7217u" /></a></p><br><br><p>&nbsp;</p>
