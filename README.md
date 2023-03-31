# Information
## Setup
- Install [NodeJS](https://nodejs.org/dist/v18.14.1/node-v18.14.1-x64.msi)
- Open VS Code To The Folder You Want The Repo To Be Saved TO On Your Machine
- Open A Terminal In VS Code `CTRL+SHIFT+@`
- Clone The Repository `git clone https://github.com/AJGamesArchive/chess.git`
- Install Ionic `npm i -g @ionic/cli`
- Set Execution Policy **If** Needed `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
- Run `npm install`

## Remember!
- Sync your local repo with the main repo **BEFORE you start coding anything every time you go to do something!**
- When your finished for the day, commit your changes and sync them to the main repo **EVEN IF** the code is not finished or fully working.
- **IF** the project dependencies have changed since you last edited code, you will need to run `npm install` again before working. If your unsure if wether or not anything has changed, run the command anyway to be safe.

## Run A DEV Build
- `ionic serve` - Runs Web Dev Server
- `npm run start` - Runs Web Dev Server **If** `Ionic Serve` Doesn't Work
- `CTRL+SHIFT+I` - Opens Chrome DEV Tools in your browser to allow you to see the console and view the app in mobile mode.

## Ionic Commands
- `ionic build` - Compile A Production Build
- `ionic cap add android` - Create the Android Components Within the Project & Compile a Production Build
- `ionic cap sync android` - Update the Android Components Within the Project & Compile a Production Build
- `ionic cap run android --livereload --external` - Runs Dev Server On A Mobile Device
- `ionic cap run android --livereload --external --open` - Runs Dev Server On A Mobile Device Through Android Studio

## Capacitor Commands
- `npm install @capacitor/core` - Install Capacitor
- `npm install @capacitor/cli --save-dev` - Install Capacity Dev Save Feature
- `ionic integrations enable capacitor` - Enable Capacitor
- `npm install @capacitor/app @capacitor/haptics @capacitor/keyboard @capacitor/status-bar` - Install Useful Capacitor Packages

## Setup Firebase & Cloud Firestore
- Install Firebase Tools `npm install -g firebase-tools`
- Install Firebase Modules `npm install firebase`

## Firebase Commands
- `firebase login` - Login To Firebase
- `firebase init` - Setup Web Deployment To Firebase
- `firebase deploy` - Deploy A Production Build

# Documentation
## Programming Language Docs
- [TypeScript](https://www.typescriptlang.org/docs/) - Programming Language
- [Ionic](https://ionicframework.com/docs/components) - UI Builder
- [React](https://reactjs.org/docs/getting-started.html) - Framework

## Additional Library's
- [HowlerJS](https://github.com/goldfire/howler.js#quick-start) - Sound Library
- [ChessBoardJSX](https://chessboardjsx.com) - Chess Board GUI Library
- [ChessJS](https://github.com/jhlywa/chess.js/blob/master/README.md) - Chess Functionality, Piece Movement & AI Library

## Capacitor Docs
- [Capacitor Docs](https://capacitorjs.com/docs/android) - Capacitor Android Documentation
- [Capacitor Troubleshooting Docs](https://capacitorjs.com/docs/android/troubleshooting) - Troubleshooting Android Issues

## Firebase

### Main Docs
- [Information On Firebase Deployment](https://ionicframework.com/docs/react/pwa)
- [Information On Cloud Firestore](https://firebase.google.com/docs/web/setup?authuser=1)

### Cloud Firestore Docs
- [Firestore Docs: Getting Started](https://cloud.google.com/firestore/docs/create-database-web-mobile-client-library#web-version-9_2) - Information On Firebase Database
- [Firestore Docs: Adding Data](https://cloud.google.com/firestore/docs/manage-data/add-data) - How To Write Data To Cloud Firestore
- [Firestore Docs: Reading Data](https://cloud.google.com/firestore/docs/query-data/get-data) - How To Read Data From Cloud Firestore