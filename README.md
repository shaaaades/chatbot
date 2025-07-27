# 💬 Chatbot with React and Google's Gemini AI API

This is a simple chatbot application built with React that leverages Google's Gemini AI API. This practice project was created to enhance my understanding on React concepts.

---

## 🚀 What I learned

This project helped me get hands-on with:

- **Express.js Routing**
- **Middleware Setup**
- **Environment Variables**
- **API integration**
- **Handling forms and inputs**
- **Conditional Rendering**
- **Component Structure**

---

## 📂 Project Structure

```
project-root/
├── client/                      # React frontend
│   ├── public/
│   │   └── fonts/               # Custom fonts used in the app
│   ├── src/
│   │   ├── components/          # UI components grouped by feature
│   │   │   ├── ChatError/       # Error display components
│   │   │   ├── ChatHeader/      # Top section (title/logo)
│   │   │   ├── ChatInput/       # Prompt input and submit
│   │   │   ├── ChatMessage/     # AI response display
│   │   │   ├── ChatPage/        # Page wrapper layout
│   │   │   └── common/          
│   │   │       ├── services/    # Frontend API utilities 
│   │   │       └── styles/      # Reusable CSS 
│   │   ├── config.js            # Frontend runtime config
│   │   ├── config.json          # Static frontend config or constants
│   │   ├── main.jsx             # React app entry point
│   │   └── index.html           # Main HTML template
│
├── server/                      # Express backend
│   ├── config/                  # CORS and environment setup
│   ├── routers/                 # Route handlers (e.g., /chat)
│   ├── services/                # Gemini AI integration
│   ├── utility/                 # Helper functions (e.g., formatting)
│   └── index.js                 # Express server entry point
```

---

## 🛠 How to Run the App

1. Clone or download the repository.
2. In the server folder:
   1. Run `npm install` to install dependencies.
   2. Create your `.env` file containing your own [Google Gemini API key](https://aistudio.google.com/apikey).
   3. Run `node index.js` to run the server.
3. In the client folder:
   1. Run `npm install` to install dependencies.
   2. Run `npm run dev` to run the React project.

---

## ✅ Features

- Acts as a real-time chatbot using Google Gemini API
- Clean prompt and response UI with React components
- Centralized error handling
- Modular file structure
- Responsive design

---