Here is the README in English for your project:

---

# TwitterFollowCard App

A simple React app that mimics the functionality of following and unfollowing users, similar to Twitter. The app displays a user card with the username, avatar, and a button that toggles between "Follow" and "Unfollow" states when clicked.

## Description

This app includes a `TwitterFollowCard` component that:

- Displays the user's avatar, fetched from the `unavatar.io` API.
- Allows toggling between "Follow" and "Unfollow" states by clicking a button.
- Dynamically updates the button text based on whether the user is followed or not.
- Uses React's `useState` hook to manage the follow state.

## Features

- **Dynamic Avatar**: The user's avatar is fetched dynamically using the `unavatar.io` API based on their username.
- **Interactivity**: Clicking the button toggles the follow state between "Follow" and "Unfollow."
- **Custom Styles**: The button's style changes based on the follow state, with a different class applied when the user is being followed.
- **Customizable Props**: You can customize the username, full name, and the content of the card.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Nicokevo/ReactJsCurso.git
   ```

2. Navigate to the project folder:

   ```bash
   cd <PROJECT_FOLDER>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the app:

   ```bash
   npm start
   ```

5. Open the browser and visit `http://localhost:3000` to see the app in action.

## Usage

The `TwitterFollowCard` component accepts the following props:

- **`children`**: The name you want to display on the card (usually the user's name).
- **`userName`**: The username to display in the avatar and on the bottom of the card. If not provided, it defaults to `'unknow'`.
- **`name`**: The full name of the user. This is not used explicitly in the code, but you can extend functionality with it if needed.

### Example Usage:

```jsx
<TwitterFollowCard userName="jesus" name="Jesús Pérez">
  @jesus_perez
</TwitterFollowCard>
```

This component renders a card with Jesús Pérez's avatar and a button to follow or unfollow him.

## Dependencies

- React (using `useState` for state management)

## Styles

You can customize the following styles in the related CSS file:

- `.tw-followCard`
- `.tw-followCard-header`
- `.tw-followCard-avatar`
- `.tw-followCard-info`
- `.tw-followCard-button`
- `.is-following`

These styles define the appearance of the user card, including the avatar image, username, and the interaction button.

## Contributing

If you'd like to contribute, please open a pull request or create an issue to discuss the changes you'd like to make.

---

This README covers the basic details of the app, how to use it, the customizable props, and how to interact with the `TwitterFollowCard` component. You can expand it further depending on the project's requirements.
