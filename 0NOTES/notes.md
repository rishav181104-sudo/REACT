                             REACT :-

 //WHAT S REACT AND WHY DO WE USE REACT      
                              
.Javascript library to built Dynamic and interactive user interfaces.
.Developed at Facebook in 2011.
.Used to create single page applications.
.Currently widely used js library.
.React will take care of creating and updating DOM elements.
.React creates a web pge with small and reusable components.

  //INTRODUCTON TO COMPONENTS

.Components help us write reusable , modular and better organized code .
.React applicaion is a tree of components with app(i.e app is te root component).Component as a root bringing everything Together
.There ar mainly two typs of components :-
 1.functional components
      .initially stateless
      .can use hooks for state and effects
      .simpler and mor concise
      .more popular
 2.class components (not in use because outdated) 


  //IDE : - it stands for integrted development environment. Designed to improve developer efficiency.
   .Features : - . Code autocomplete , syntax Hihlighting , version Control , Error Checking

    //Create a react app 
official tool is CRA(Create React App)
Vite is modern tool to create React Project . Vite produces quick and small bundle size. 
Vite uses npm run dev to launch dev server
use npm start for CRA    


   //Creating React Components
 * File Extensions
    .JS
    * Stands for JavaScript
    * Contains regular JavaScript code
    * Used for general logic and components
    .JSX
    * Stands for JavaScript XML
    * Combines JavaScript with HTML-like tags
    * Makes it easier to design UI components
    * this is not html , though it resembles HTML, we are actually writing JSX , which stands for js XML. jsx gets converted to js code 
    * Babeljs.io/repl is a tool that allows you to see how jsx is transformed into js
 * Class vs Function Components
 * What is JSX?

 * Exporting component
    .Enables the use of components in other parts
    .Default Export : allows exporting a single component as the default from a module
    .Naming export : Allows exporting multiple items from a module
    .Importing : To use an exported component you need to import it in the destination file using import syntax

 * Other important Points
   . Naming must be capitalized , lower case for default HTML.
   . HTML: Unlike vanilla JS wher u cannot directly write HTML , in react , you   can embed HTML-like syntax using JSX.
   . CSS: In React , CSS can be directly imported into component files , allowing
   for modular and component-specific styling 

 * Dynamic Components
   .JSX allows the creation of dynamic and interactive UI components
   .JS Expressions : Using {} , we can embed any JS expression directly with JSX . This includes variables , function calls and more.

 * Reusable Components
   .Modularity : Components are Modular,
   allowing for easy reuse across different parts of an application.
   .Consistency : Reusing components ensures UI Consistency and reduces the chamces of discrepancies.
   .Efficiency : Reduces development time and effort by avoiding duplication of code
   Maintainability : Changes made to a reused component reflect everywhere it's used, simplifying updates and bug fixes.
    
 * Note :
     npm create vite@latest


     cd file name
     npm install
     npm run dev


* Including Bootstrap( UI FRAMEWORK)
  1. install  : npm i bootstrap@5.3.8npm 
  2. import 'bootstrap/dist/css/bootstrap.min.css';



# FRAGMENTS
1. Allows the grouping of multiple elements without extra DOM nodes
2. It is important because it returns element without a wrapping parent
3. Cleaner DOM and consistent styling
4. Two Syntaxes:-
  * <React.fragment>...</React.Fragment>
  Short: <>...</>


# MAP METHOD
1. Purpose : Render lists from array data
2. JSX Elements: Transform array itemes into JSX.
3. Inline Rendering : Directly inside JSX
   {items.map(item => <li key={item.id}>{item.name}</li>)}
4. Key Prop : Assign unique key for optimized re-renders.
   <div key={item.id}>{item.name}</div>      


# Conditional Rendering
> Conditional Rendering
 * Displaying content based on certain conditions.  
 * Allows for dynamic user interfaces.  
> Methods
 * If-else statements: Choose between two blocks of content.  
 * Ternary operators: Quick way to choose between two options.  
 * Logical operators: Useful for rendering content when a condition is true.  
> Benefits
 * Enhances user experience.  
 * Reduces unnecessary rendering.  
 * Makes apps more interactive and responsive.   

 * { condition && <div>Write something</div> }

 * { !condition ? <div>Error do it again</div> :
               <div>Congratulations</div> }

# Passing Data via Props
 * Props in React
    .Short for properties  
    .Mechanism for passing data  
    .Read-only by default  
 * Usage
    .Pass data from parent to child component  
    .Makes components reusable  
    .Defined as attributes in JSX  
 * Key Points
    .Data flows one-way (downwards)  
    .Props are immutable  
    .Used for communication between components  
 * Examples
        <Header title="My App"/>


# CSS Modules

1. Localized class names to avoid global conflicts.  
2. Styles are scoped to individual components.  
3. Helps in creating component-specific styles.  
4. Automatically generates unique class names.  
5. Promotes modular and maintainable CSS.  
6. Can use alongside global CSS when needed.

* Cat.css :- 
.meow{
  color:orange;
}

* CSS :-
.cat_meow_j3xk {
   color:orange;
}


# PASSING CHILDREN 

1. children is a special prop for passing elements into components.  
2. Used for flexible and reusable component designs.  
3. Common in layout or container components.  
4. Accessed with props.children.  
5. Can be any content: strings, numbers, JSX, or components.  
6. Enhances component composability and reusability.

* function Container(props) {
  return (
    <div className="container-style">
      {props.children}
    </div>
  );
}

* EXAMPLE
<Container>
  <h1>Welcome to My App</h1>
  <p>This content is passed as children to the
  Container component.</p>
</Container>


# Handling Events
 * Key Points
1. React events use camelCase, e.g., onClick.  
2. Uses synthetic events, not direct browser events.  
3. Event handlers can be functions or arrow functions.  
4. Use onChange for controlled form inputs.  
5. Avoid inline arrow functions in JSX for performance.


# Passing Functions via Props

1. Pass dynamic behaviour between components.  
2. Enables upward communication from child to parent.  
3. Commonly used for event handling.  
4. Parent defines a function, child invokes it.  
5. Enhances component interactivity.  
6. vExample:
<Button onClick="{handleClick}"/>

Note :- if child want to communicate with the parent , it is done via (Emit Event)


# Managing State
  * Key Points:
1. State represents data that changes over time.  
2. State is local and private to the component.  
3. State changes cause the component to re-render.  
4. For functional components, use the useState hook.  
5. React Functions that start with word use are called hooks.  
6. Hooks should only be used inside components.  
7. Parent components can pass state down to children via props.  
8. Lifting state up: share state between components by moving it to their closest common ancestor.

# State vs Props
 * State:
1. Local and mutable data within a component.  
2. Initialized within the component.  
3. Can change over time.  
4. Causes re-render when updated.  
5. Managed using useState in functional components.  
 * Props:
1. Passed into a component from its parent.  
2. Read-only (immutable) within the receiving component.  
3. Allow parent-to-child component communication.  
4. Changes in props can also cause a re-render.

## React-icon Library
* You can use a lot of icons without managing them.  
 .Install Package
    => npm install react-icons --save  
 .Use icon:
    => import {IconName} from "react-icons/fc";

# Inspecting with React Dev Tools
1. Inspection: Allows inspection of React component hierarchies.  
2. State & Props: View and edit the current state and props of components.  
3. Performance: Analyze component re-renders and performance bottlenecks.  
4. Navigation: Conveniently navigate through the entire component tree.  
5. Filtering: Filter components by name or source to locate them quickly.  
6. Real-time Feedback: See live changes as you modify state or props.  

# How React Works
 * Root Component:
1. The App is the main or root component of a React application.  
2. It's the starting point of your React component tree. 

 * Virtual DOM:
1. React creates an in-memory structure called the virtual DOM.  
2. Different from the actual browser DOM.  
3. It's a lightweight representation where each node stands for a component and its attributes.

 * Reconciliation Process:
1. When component data changes, React updates the virtual DOM's state to mirror these changes.  
2. React then compares the current and previous versions of the virtual DOM.  
3. It identifies the specific nodes that need updating.  
4. Only these nodes are updated in the real browser DOM, making it efficient.  

# How React Works
  * React and ReactDOM:
1. The actual updating of the browser's DOM isn't done by React itself.  
2. It's handled by a companion library called react-dom.  
  * Root Element:
1. The root div acts as a container for the React app.  
2. The script tag is where the React app starts executing.  
3. If you check main.tsx, the component tree is rendered inside this root element.  
  * Strict Mode Component:
1. It's a special component in React.  
2. Doesn't have a visual representation.  
3. Its purpose is to spot potential issues in your React app.  
  * Platform Independence:
1. React's design allows it to be platform-agnostic.  
2. While react-dom helps build web UIs using React,ReactNative can be used to craft mobile app UIs


# React Vs Angular vs Vue
  * React, Angular, and Vue:
1. React is a library, while Angular and Vue.js are frameworks.
2. React focuses on UI; Angular and Vue.js offer comprehensive tools for full app development.
   * Library vs. Framework:
1. A library offers specific functionality.
2. A framework provides a set of tools and guidelines.
3. In simpler terms: React is a tool; Angular and Vue.js are toolsets.
  * React's Specialty:
1. React's main role is crafting dynamic, interactive UIs.
2. It doesn't handle routing, HTTP calls, state management, and more.
   * React's Flexibility:
1. React doesn't dictate tool choices for other app aspects.
2. Developers pick what fits their project best.
   * About Angular and Vue.js:
1. Angular, developed by Google, provides a robust framework with a steep learning curve.
2. Vue.js is known for its simplicity and ease of integration, making it beginner-friendly.

# Using Forms
1. State Management: Each input's state is stored in the component's state.
2. Handling Changes: Use onChange to detect input changes.
3. Submission: Utilize onSubmit for form submissions and prevent default with event.preventDefault().
4. Validation: Implement custom validation or use third-party libraries.

# Use Ref
1. useRef allows access to DOM elements and retains mutable values without re-renders.
2. Used with the ref attribute for direct DOM interactions.
3. Can hold previous state or prop values.
4. Not limited to DOM references; can hold any value.
5. Refs can be passed as props also
     * const refObject = useRef( initialValue );

 # Update state from Previous State
1. Spread Operator: Use to maintain immutability when updating arrays or objects.
2. Functional Updates: Use (existingPosts) => [postData, ...existingPosts] to avoid stale values during asynchronous updates.   

 
 # Context API
1. Prop Drilling: Context API addresses prop drilling; component composition is an alternative.  
2. Folder Setup: Use a store folder for context files.  
3. Initialization: Use React.createContext with initial state and export it.  
4. Provider: Implement with contextName.Provider in components.  
5. Access Value: Use the useContext hook.  
6. Dynamic Data: Combine context value with state.  
7. Export Functions: Context can also export functions for actions.  
8.Logic Separation: This helps keep the UI and business logic separate from each other.