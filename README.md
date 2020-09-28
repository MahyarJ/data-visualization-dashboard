# Data Visualization Dashboard

> Technical Aspects - by Mahyar Jamalabadi

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).- The project is available on my [Github](https://github.com/MahyarJ/data-visualization-dashboard).- The project UI is also available on [Netlify](https://dv-dashboard.netlify.app//).

## Design

- I put a good effort to fulfill the entire design mockups to make everything deployable right out of the box. Be Pixel-Perfect!

  > **ProTip:** The design itself has no color guide on the charts, so I implemented a new type of checkboxes that handles colors and legends itself to be more clear and minimal.

- I used `Sass` styling to show that I'm completely aware of implementing styles separated from JS and in this small amount of work I preferred to use it as I'm feeling happy with that, but in real programs, it really depends on what project needs and what is going on there. In some cases that we need theming and integrated styling with front-end logic, we mostly need to use `styled-components` or similar experiences.

- Make things responsive as much as we could, can leads every part of our users to check the reports and visualizations on any type of device and screen.

  > **ProTip:** The PeriodPicker is a component that its changing can affect all over the dashboard. So, as we try to prepare a responsive behavior in handheld devices, it's better to be `sticky` at top of the app screen to be available within vertical scrolls.

## Code Quality

- Using [Recharts](https://recharts.org/) components that fulfill UI needs in this amount of time, was the best choice for me as they perfectly work to match `D3` SVG experiences and `React` rendering abilities. Also, I think we better _don't reinvent the wheel_ as much as we can. But as we needed to be more flexible in huge projects we can use libraries like `D3`.

- I separate the components as much as they could make tests simpler and prevent complications.

- I tried to extract `reusable` custom hooks to make the inside component logic more simple and easy to understand.

- Also extracting helper functions as `helpers` could make things cleaner and also help us to separately test the helper functions themselves.

- Handling loading state in components and appropriate default values for props are too important to implement. Also, handling `loading` and `error` return values in hooks can lead us to a better status handling.

  > **ProTip:** Handling a loading state with a `Loading` component can make a better UX. As the APIs are local, you can slow down your network, using `dev-tools` to see the result. In real-world APIs, these loadings happen a million times.

## Test

- Assigning proper `data-testid` to components can help us find the components among a bunch of others.

- I tried to add some tests to show in a production-ready code-base and modules, we have to be fully proofed with appropriate tests and simplifying the code-review and merge flows.

- In real-world projects, I prefer to add more challenging unit tests, integration, and e2e testing to make more robust working software.

## Available Scripts

In the project directory run `yarn` to install dependencies, and after that, you can use
`yarn start`
to run the app in the development mode.

Also, you can use the `yarn test` script to run tests of the project.

The page will reload if you make edits.
You will also see any lint errors in the console.
Other scripts are the same as `create-react-app` documentation.
