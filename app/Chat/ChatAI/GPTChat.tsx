// // App.js
// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// import { getGPTResponse } from './GPT';
// import axios from 'axios';

// const GPTChat = () => {
   
//    // const API_KEY = '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';
//    // const config = new Configuration({
//    //    apiKey: API_KEY
//    // });
//    // const openAI = new OpenAIApi(config);
   
//    // const [input, setInput] = useState('');
//    // const [output, setOutput] = useState('');

//    // const response = async () => {
//    //    try {
//    //       const userInput = prompt + input;
//    //       const response = await openAI.Completion.create({
//    //          model: 'text-davinci-003',
//    //          prompt: `You: ${userInput}\nAI:`,
//    //          temperature: 0,
//    //          maxTokens: 60,
//    //          top_p: 1,
//    //          frequency_penalty: 0.5,
//    //          presence_penalty: 0.5,
//    //          stop: ['You:'],
//    //       });
//    //       setOutput(response.data.choices[0].text)
//    //    } catch (error) {
//    //       console.error('Error communicating with OpenAI:', error);
//    //    }
//    //    setInput('');
//    // };

//    return (
//       <View style={styles.container}>
//          <Text style={styles.heading}>GPT Integration in React Native</Text>
//          <TextInput
//             style={styles.input}
//             placeholder="Enter your prompt..."
//             value={input}
//             onChangeText={setInput}
//          />
//          <Button title="Get GPT Response" onPress={response} />
//          <Text style={styles.response}>{output}</Text>
//       </View>
//    );
// };

// const styles = StyleSheet.create({
//    container: {
//       flex: 1,
//       padding: 20,
//       justifyContent: 'center',
//       backgroundColor: '#f5f5f5',
//    },
//    heading: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginBottom: 20,
//       textAlign: 'center',
//    },
//    input: {
//       height: 40,
//       borderColor: '#ccc',
//       borderWidth: 1,
//       marginBottom: 20,
//       paddingHorizontal: 10,
//       borderRadius: 5,
//    },
//    response: {
//       marginTop: 20,
//       fontSize: 18,
//       color: '#333',
//    },
// });

// export default GPTChat;
