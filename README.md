Kanban Board with JWT Authentication
This project is a Kanban board application with secure JWT (JSON Web Tokens) authentication. It allows users to log in securely, manage tasks on a Kanban board, and ensures protection against unauthorized access.

📹 Demo Video: 
https://app.screencastify.com/v2/watch/agXkJjE6uEJecSo3Wlz9
https://drive.google.com/file/d/1E6b5du13VitHTUlyk-b5bqa4ykz9K73Z/view?usp=sharing

📂 GitHub Repository:  https://github.com/Vader24-LT/Kanban-Board
📧 Contact Email: Luis322009@gotmail.com

Features
✅ Secure JWT-based authentication
✅ Login page with form validation
✅ Protected Kanban board route
✅ Session management with token expiration
✅ Error handling for invalid credentials
✅ Local storage for token persistence
✅ Automatic redirect to login when unauthenticated

User Story
AS A member of an agile team
I WANT a Kanban board with a secure login page
SO THAT I can securely access and manage my work tasks

Installation
Clone the repository:

bash
git clone https://github.com/your-username/kanban-jwt-auth.git
cd kanban-jwt-auth
Install dependencies:

bash
cd server && npm install
cd ../client && npm install
Set up environment variables:
Create a .env file in server/ with:

DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
JWT_SECRET=your_random_jwt_secret_key
Running the App
Backend (Express.js):

bash
cd server
npm start
Frontend (React):

bash
cd client
npm start
➡️ Access the app: http://localhost:3000

Deployment

🚀 Deployed on Render:
🔗 Live Demo

Follow Render's guide for PostgreSQL + Node.js deployment.

Project Structure
kanban-jwt-auth/  
├── server/               # Backend (Node.js + Express)  
│   ├── src/  
│   │   ├── middleware/   # JWT auth middleware  
│   │   ├── routes/       # Protected API routes  
│   │   └── ...  
├── client/               # Frontend (React)  
│   ├── src/  
│   │   ├── api/          # Auth API calls  
│   │   ├── utils/        # Token management  
│   │   └── pages/        # Login & Kanban UI  
└── ...  

How JWT Authentication Works

Login: User submits credentials → Server validates & issues JWT.

Storage: Client saves JWT in local storage.

Requests: JWT sent in Authorization header for protected routes.

Verification: Server checks JWT validity before granting access.

Logout/Expiry: Token removed from storage or invalidated.

Contact & Support
📧 Email: Luis322009@hotmail.com
🐛 Report Issues: VaderLT-24

License
📜 MIT License - Free for use and modification.
