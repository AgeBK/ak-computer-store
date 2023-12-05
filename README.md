## About

I built this little mock e-commerce style website from a random JSON file I found online which contains retail computer store data with accompanying images. I hosted the JSON file on JSONBIN.io

The website has 3 pages. The home page which is a list of all the different categories, it's basically a navigation page. The category page lists all the products for a particular category and can be sorted alphabetically, by price or sale items. The product page displays all the details about an individual product. I have built a shopping cart for it as well which you can add products to and a 'toasty' style notification when products are added. The idea of the app being that the user can have a simulated on-line shopping experience.

The site uses React Context to share common data and functions I use throughout the site, React Router for navigation and 22 different components including a container component and a custom hook. For styling, it's using Flexbox via CSS modules. The site also includes loading and error components and should look good on small and larger screens. Responsive design techniques have been taken into account as well as semantic HTML and accessibility.

06/12/23

- Migrated app from CRA to Vite
- Added unit tests

07/09/23

- Style change
- Update readme
- index.html update

06/09/23

- Style/refactoring
- Removed unnecessary images
- Modified hook that changes cart state
- Added Button component

30/08/23

- Fixed footer not aligning to bottom
- Changed hover hook to accommodate for mobile
- Style/refactoring

29/08/23

- Added ScrollToTop and Content component
- Style/refactoring

28/08/23

- Style/refactoring
- Fixed footer bug
- Added Header/Error Component

27/08/23

- Many style updates
- Added Footer component

26/08/23

- Fixed financial sort for Category
- Set max-width on MainContainer
- Numerous style changes most components
- Responsive style changes for smaller screens

25/08/23

- Got cart working and styling
- Added hover hook
- Style changes on most components

22/08/23

- Created Container, SalesPitch, Cart components
- Added breadcrumb to Product component
- Other various style changes and refactoring to existing components

18/08/23

- Modified Add to cart functionality + created Add to cart button component
- Created Select control (Sort), sorts order of products in Category component - alphabetically/price/sale items
- Styled Category
- Created Price Component

17/08/23

- Add to cart functionality
- Created Loading Component
- Category and Product Components rendering data
- Home styled/rendering

15/08/23

- Added website images
- Created context, set up fetch to get website JSON data
- Created Home, Category, Product, Image Components
- Set up routes (React Router) in App component
