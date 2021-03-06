import {useState} from 'react';
    
const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage(msg);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <h1>Set Message</h1>
            <textarea placeholder="Enter your message here" onChange={(e) => setMsg(e.target.value)}value={msg}
            ></textarea>
            <input type="submit" value="Send Message" />
        </form>
    );
};
    
export default MessageForm;