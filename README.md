# React-JS-Boilerplate
A boilerplate for React JS App

- Skeleton: create-react-app (CRA)
- Session history: history
- Redux bindings for React Router: connected-react-router
- State management: redux
- API handling: redux saga
- Design Library: antd
- Database: firebase
- Hosting: firebase

## Guide
1. Fork the repo
2. Update Libraries
	- on updating react-scripts it will be as good as creating a new app with cra
	- **Note**: history v5.0.1 doesn't work. Use v4.10.1
3. Add the firebase config (src/settings/firebase/firebaseConfig.json)
4. Setup the auth providers in firebase authentication & mirror the same in src/settings/firebase/uiConfig.js
	
All set..