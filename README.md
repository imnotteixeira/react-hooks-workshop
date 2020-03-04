# react-hooks-workshop
Abstract your business logic from the views with custom React Hooks

## Workshop structure

This workshop is divided in a series of steps, which will be conveniently available in the respective numbered branches. If you ever get lost, simply switch to the step-branch you want.

### Step 0

In this step, we configure a basic React application with different views depending on the viewport (Mobile renders `MyFormMobile`, Desktop renders `MyFormDesktop`)

The entrypoint is the `App` component that selectively renders based on the viewport size

### Step 1

In this step we want to actually have a form on each view. However, the mobile layout should render a full page `Dialog`, whereas the Desktop version has a simple `Card`. The form will have 3 elements, a `TextField` for search, a `Switch` for toggling hidden results, and a `Slider` for setting the number of results per page (10-50, with inc. of 10, default 10). 

The caveat here is elements' order in the different layouts:

Desktop:
 - Search
 - Slider
 - Switch

Mobile:
 - Search
 - Switch
 - Slider

Below are the mockups for the desired views:

Desktop:

![Desktop Mockup](https://imgur.com/xZp08Sp.png)

Mobile:

![Mobile Mockup](https://i.imgur.com/xMMnZHx.png)

### Step 2

Now, we need to add the logic for the fields to actually work. Let's create handlers for each field to update _onchange_.
We will need to keep the values of each field in a state variable. Hint: you might want to use `useState` now.

Add the logic for each view, and then resize your window to trigger the layout change. Oh no! Something's wrong...

### Step 3

As you might have noticed, something is making the state reset when the layout changes. That makes sense, since each component `MyFormDesktop` and `MyFormMobile` have their independent `useState` calls. Thus, changing a state variable inside one component, is not actually triggering changes in the other component/layout.

The solution is to extract that state to a common place, and then pass the values and the setters to each layout, so that every layout receives the current value and can change it.

Create a `MyForm` component that holds the form state and renders the 2 layouts conditionally (check the <App> logic to selctively render)
In the `App` component, simply render the `MyForm` component directly

### Step 4

You probably have a lot of business logic code in your `MyForm` component. You cannot easily test that code either. That can be fixed with a custom hook. Let's get to it!

Create a `hooks/` folder and add the `useMyForm.js` there.

This hook must contain the `useState` calls and export all the values and setters for the components to use

### Step 5

Notice how the onChange fields are similar in both layouts. Also, the rules for the sliders, which are part of business logic, can be set in the custom hook so that it becomes a single point of truth and when you change it there, it applies on both layouts.

You must add the Props for the components to the hook exports as well. Then you can use them in the respective components like so: `<Component {...ComponentProps} />`
