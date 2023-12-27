<h1 align="center">Anonymous Chat App with React and Socket.IO</h1>


<p align="center">
<img src="https://github.com/Heeneth12/chat-io/assets/114326514/9ace89c4-107e-49db-a2e6-c0b3aa8de2a0" alt="Image" width="600" height="1000">


</p>
 



## Introduction

This application is an anonymous chat platform built using React for the front end and Express with Socket.IO for real-time communication on the server side. The key feature of this app is its anonymous nature; users can join chat rooms without providing any personal information or usernames.

### Features

- **Real-time Chat:** Utilizes Socket.IO to enable real-time, bidirectional communication between clients and the server.
- **Anonymous Access:** Users can join chat rooms without any registration or login, only by providing a room name.
- **Multiple Rooms:** Supports multiple chat rooms, allowing users to join different conversations.
- **Simplified UI:** A straightforward UI with minimalistic design focusing on chat functionality.

### Technologies Used

- **Frontend:**
    - React: Used for building the user interface.
    - Socket.IO Client: Enables WebSocket communication with the server.
- **Backend:**
    - Express.js: Powers the server-side logic and API endpoints.
    - Socket.IO: Manages real-time WebSocket connections.

## Usage

1. **Setup:**
   - Clone the repository to your local machine.
   - Navigate to the project directory.

2. **Installation:**
   - Install dependencies for both the server and client:
     ```bash
     npm install
     ```

3. **Running the App:**
   - Start the server:
     ```bash
     npm start
     ```
   - The server will run on `http://localhost:9000`.

4. **Using the App:**
   - Open the app in a web browser.
   - Enter a room name or choose an existing room to join the chat.
   - Start chatting anonymously with others in the same room.

## Additional Information

- **Storage:** This app doesn't utilize any storage/database. All communication happens in real-time, and no user data is stored.
- **Anonymous Nature:** Users can freely join and leave chat rooms without any identification, ensuring anonymity.
- **Customization:** Feel free to customize and expand the app based on your requirements.

## Contributing

Contributions are welcome! If you'd like to enhance the app or fix any issues, please fork the repository and submit a pull request.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
