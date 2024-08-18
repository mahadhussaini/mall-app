import React, { useState, useEffect, ReactNode } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import socketService from './Socket_Service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseurl } from '../BaseUrl';

interface Message {
  message: ReactNode;
  sender: string;
 
  text: string;
  senderId: string;
  receiverId: string;
  _id:string;
}

const Chat: React.FC = ( {navigation }: any) => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [senderId,setsenderid] = useState<string| null>(); // Example sender ID, replace with actual logic
  const [receiverId,setrecieverid] = useState<string | null>(); // Example receiver ID, replace with actual logic

//   useEffect(() => {
//     socketService.connect();

//     // Listen for previous messages
//     socketService.on("previous_messages", (previousMessages: Message[]) => {
//       setMessages(previousMessages);
//         console.log(messages,"MESSAGES")


//     });

//     // Listen for new messages
//     // socketService.on('previous_messages', (msg: Message) => {
//     //   setMessages((prevMessages) => [...prevMessages, msg]);
//     // });

//     // Request previous messages when the component mounts
//     socketService.emit("get_previous_messages", {
//       sender: senderId,
//       receiver: receiverId,
//     });

//     return () => {
//       socketService.disconnect();
//     };
//   }, [senderId, receiverId]);

//   const sendMessage = () => {
//     if (message.trim()) {
//       const newMessage: Message = {
//           _id: Math.random().toString(36).substr(2, 9),
//           text: message,
//           senderId,
//           receiverId,
          
//       };
//       socketService.emit('send_message', newMessage);
//       setMessage('');
//       setMessages((prevMessages) => [...prevMessages, newMessage]); // Add the new message to the state
//     }
//   };



useEffect(() => {

 
    socketService.connect();
  
    // Listen for previous messages
    socketService.on("previous_messages", (previousMessages: Message[]) => {
      setMessages(previousMessages);
    //   console.log(messages, "MESSAGES");
    });
  
    // Request previous messages when the component mounts
    socketService.emit("get_previous_messages", {
      sender: senderId,
      receiver: receiverId,
    });
  
    // This effect will run again whenever messages state changes
  }, [messages]);


  


  useEffect(() => {
    const fetchData = async () => {
        try {
            const customer_id = await AsyncStorage.getItem('customer_id');
            const vendor_id = await AsyncStorage.getItem('vendor_id');
            console.log('Customer ID:', customer_id);
            setsenderid(customer_id)
            setrecieverid(vendor_id)
            console.log('Vendor ID:', vendor_id);
        } catch (error) {
            console.error('Error fetching data from AsyncStorage:', error);
        }
    };

    fetchData();
}, []);







  // useEffect(() => {
  //   socketService.connect();
  
  //   // Listen for previous messages
  //   socketService.on("previous_messages", (previousMessages: Message[]) => {
  //     setMessages(previousMessages);
  //   //   console.log(messages, "MESSAGES");
  //   });
  
  //   // Request previous messages when the component mounts
  //   socketService.emit("get_previous_messages", {
  //     sender: senderId,
  //     receiver: receiverId,
  //   });
  
  //   // This effect will run again whenever messages state changes
  // }, [senderId, receiverId, messages]);


const sendMessage = async () => {
    if (message !== '') {
      const messageData = {
        sender: senderId,
        receiver: receiverId,
        message: message,
      };
      // console.log(messageData);
        socketService.emit('send_message', messageData);
      setMessage('');
 
    }
  };


 
  



  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={item.sender === senderId ? styles.myMessage : styles.theirMessage}>
            <Text style={styles.messageText}>
              {item.sender === senderId ? 'You' : 'Receiver'}: {item.message}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item._id}
      />
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message"
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor:'#1e1e1e'
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#13171B',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#1AC1F3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  messageText: {
    fontSize: 16,
    color:'white'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    color:'white',
    borderRadius:10
  },
});

export default Chat;






// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
// import socketService from './Socket_Service';

// interface Message {
//   id: string;
//   text: string;
//   senderId: string;
//   receiverId: string;
// }

// const Chat: React.FC = () => {
//   const [message, setMessage] = useState<string>('TS');
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [senderId] = useState<string>('65f205bd9a8b4e40e33dd48b'); // Example sender ID, replace with actual logic
//   const [receiverId] = useState<string>('6623064dbbe36f0862c20344'); // Example receiver ID, replace with actual logic

//   useEffect(() => {
//     socketService.connect();

//     socketService.on("previous_messages", (previousMessages: Message[]) => {
//       setMessages(previousMessages);
//     });

//     socketService.on('chat message', (msg: Message) => {
//       setMessages((prevMessages) => [...prevMessages, msg]);
//     });

//     // Request previous messages when the component mounts
//     socketService.emit("get_previous_messages", {
//       sender: senderId,
//       receiver: receiverId,
//     });

//     return () => {
//       socketService.disconnect();
//     };
//   }, [senderId, receiverId]);

//   const sendMessage = () => {
//     if (message.trim()) {
//       const newMessage: Message = {
//         id: Math.random().toString(36).substr(2, 9),
//         text: message,
//         senderId,
//         receiverId,
//       };
//       socketService.emit('send_message', newMessage);
//       setMessage('');
//       setMessages((prevMessages) => [...prevMessages, newMessage]); // Add the new message to the state
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={messages}
//         renderItem={({ item }) => (
//           <Text style={styles.message}>
//             {item.senderId === senderId ? 'You' : item.senderId}: {item.text}
//           </Text>
//         )}
//         keyExtractor={(item) => item.id}
//       />
//       <TextInput
//         style={styles.input}
//         value={message}
//         onChangeText={setMessage}
//         placeholder="Type a message"
//       />
//       <Button title="Send" onPress={sendMessage} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     padding: 10,
//   },
//   message: {
//     padding: 10,
//     backgroundColor: 'yellow',
//     marginVertical: 2,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//   },
// });

// export default Chat;

