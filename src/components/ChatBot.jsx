import { useState } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Chào bạn! Tôi là trợ lý ảo của Razer. Bạn cần hỏi gì về Viper V4 Pro?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          // Nhét thêm system prompt để bot có kiến thức về sản phẩm
          messages: [
            { 
              role: "system", 
              content: "Bạn là nhân viên CSKH của Razer. Hãy trả lời bằng tiếng Việt, ngắn gọn, súc tích. Thông tin sản phẩm: Razer Viper V4 Pro giá 159.99 USD, nặng 54g, cảm biến Focus Pro 35K, polling rate 8000Hz." 
            },
            ...newMessages
          ]
        })
      });
      
      const data = await res.json();
      
      // Bắt lỗi nếu API trả về không thành công
      if (!res.ok) {
        console.error("Lỗi từ Groq API:", data);
        setMessages([...newMessages, { role: 'assistant', content: `Lỗi API: ${data.error?.message || 'Vui lòng kiểm tra lại F12'}` }]);
        setIsLoading(false);
        return;
      }

      if (data.choices && data.choices.length > 0) {
        setMessages([...newMessages, { role: 'assistant', content: data.choices[0].message.content }]);
      }
    } catch (error) {
      console.error("Lỗi mạng:", error);
      setMessages([...newMessages, { role: 'assistant', content: 'Xin lỗi, không thể kết nối đến máy chủ AI.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Khung Chat (Hiện khi isOpen = true) */}
      <div 
        className={`absolute bottom-20 right-0 w-80 sm:w-96 bg-zinc-950 border border-green-500/30 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
        style={{ height: '500px' }}
      >
        {/* Header */}
        <div className="bg-green-500 text-black p-4 font-bold flex justify-between items-center">
          <span>Razer AI Assistant</span>
          <button onClick={() => setIsOpen(false)} className="hover:text-zinc-800">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Khung nội dung tin nhắn */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a]">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.role === 'user' ? 'bg-green-500 text-black rounded-tr-none' : 'bg-zinc-800 text-white rounded-tl-none'}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 text-green-500 p-3 rounded-xl rounded-tl-none flex space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input gửi tin nhắn */}
        <form onSubmit={sendMessage} className="p-3 bg-zinc-900 border-t border-zinc-800 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhập câu hỏi..." 
            className="flex-1 bg-zinc-800 text-white px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
          />
          <button type="submit" disabled={isLoading} className="bg-green-500 text-black px-4 py-2 rounded font-bold hover:bg-green-400 disabled:opacity-50">
            Gửi
          </button>
        </form>
      </div>

      {/* Nút tròn Chat */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-green-500 text-black rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:scale-110 transition-transform"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        )}
      </button>
    </div>
  );
}
