# React + Vite

### Project Documentation

This project consists of several React components for building a financial dashboard. Below is a brief overview of each component and how they are structured.

---

#### `App.js`

The main entry point of the application. It renders the `Sidebar` and `Content` components.

---

#### `Sidebar.js`

This component represents the sidebar of the application. It includes a logo and navigation links. The sidebar state (whether it's open or closed) is managed using the `SidebarContext`. The sidebar toggles between open and closed states based on user interaction.

---

#### `Content.js`

The main content area of the application. It consists of two main components: `ContentTop` and `ContentMain`. This component is responsible for rendering the top content and the main content grid.

---

#### `ContentMain.js`

The main content grid of the application. It contains several sub-components such as `Cards`, `Transaction`, `Reports`, `Budget`, `Loans`, and `Advice`. These sub-components represent different sections of the financial dashboard.

---

#### `SidebarContext.js`

A context provider for managing the state of the sidebar. It provides a `SidebarContext` and a `SidebarProvider` component for managing the state of the sidebar (open or closed) across different components.

---

#### `BarChart.js`

A reusable component for rendering a bar chart using Chart.js library. It takes `labels` and `datasets` as props to dynamically render the chart. The chart displays data related to financial transactions over time.

---

### How to Run the Application

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.
4. Start the development server using `npm start` or `yarn start`.

---

### Dependencies

- React: A JavaScript library for building user interfaces.
- Chart.js: A simple yet flexible JavaScript charting library for designers & developers.
- Iconsax React: A library for using Iconsax icons in React applications.

---

### Testing

- Unit Test was also conducted using jest for some part of the app


---

### Contributors

#### Nnaji Benjamin | Developer
---
