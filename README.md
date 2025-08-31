# 📩 Messages App

## Overview
This project is a **real-time messaging viewer** built with **Supabase** and vanilla **JavaScript**.  
It fetches messages from a Supabase database and updates the UI instantly whenever new messages are added.  

This app is a **supporting module for my portfolio project**. It shows all the messages I receive from users via the contact form on my portfolio website, helping me keep track of communications efficiently in real-time.

The main purpose of this project is to practice connecting frontend apps to a **backend database**, handle **real-time data updates**, and display messages in a **clean, modern UI**.

---

## 🛠 Features

- **Real-time message updates** using Supabase Realtime Channels  
- Fetch and display messages from the Supabase `contacts` table  
- Styled **message cards** with sender, email, message content, and timestamp  
- Responsive layout for desktop and mobile  
- Graceful handling for **no messages** or **error states**  

---

## 💻 What I Learned

- Setting up a **Supabase client** in a frontend project  
- Querying data from Supabase using `select()` and ordering with `.order()`  
- Handling **realtime database updates** with `supabase.channel` and `postgres_changes`  
- Dynamically rendering HTML elements using JavaScript  
- CSS techniques for **glassmorphism**, card shadows, hover effects, and responsive layouts  
- Building an interactive UI without any frameworks  
- Understanding how to integrate a **supporting module** for a larger portfolio project  

---

## 🛠 Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend / Database:** Supabase (PostgreSQL)  
- **Realtime:** Supabase Realtime channels  

