    import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

    // 🔑 Replace with your own values
    const SUPABASE_URL = 'https://ajgkjydmmmgfqzcnwkoz.supabase.co'
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqZ2tqeWRtbW1nZnF6Y253a296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1NzYwNTgsImV4cCI6MjA3MjE1MjA1OH0.TZFrXuJWaMos_CpAEyClUTnpAH8kKXu5Q2xRmEM3Ak0'

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

    const container = document.getElementById("messages-container");

    async function fetchMessages() {
    const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        container.innerHTML = `<p>Error loading messages: ${error.message}</p>`;
        return;
    }

    renderMessages(data);
    }

    function renderMessages(messages) {
    if (!messages.length) {
        container.innerHTML = "<p>No messages yet.</p>";
        return;
    }

    container.innerHTML = "";
    messages.forEach(msg => {
        const div = document.createElement("div");
        div.classList.add("message");
        div.innerHTML = `
        <strong>${msg.name} (${msg.email})</strong>
        <p>${msg.message}</p>
        `;
        container.appendChild(div);
    });
    }

    // Listen for new messages in real-time
    supabase
    .channel("contacts-changes")
    .on("postgres_changes", { event: "INSERT", schema: "public", table: "contacts" }, payload => {
        const newMsg = payload.new;
        const div = document.createElement("div");
        div.classList.add("message");
        div.innerHTML = `
        <strong>${newMsg.name} (${newMsg.email})</strong>
        <p>${newMsg.message}</p>
        `;
        container.prepend(div); // put new message on top
    })
    .subscribe();

    // Initial load
    fetchMessages();
        