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