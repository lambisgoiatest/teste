# Harness Front-end Coding Challenge

## Overview

This is a take-home coding challenge to assess your front-end development skills. You'll build an e-commerce application with product listings, a shopping cart, and product detail pages.

**Important:** Please complete only the requirements that correspond to the position level you're applying for (Junior, Mid-level, or Senior).

### Prerequisite skills

- React (components, hooks, state management)
- Next.js (pages, routing)
- JavaScript/TypeScript fundamentals

### Getting Started

1. The product data is in `test_data.json` in the `/app` folder
2. Use Next.js API routes or server actions to simulate API calls
3. **Do not import the JSON file directly into client-side code**

Styling: Use any component/UI libraries you prefer, but ensure the application is presentable.

## Position-Specific Requirements

<details>
<summary><strong>Junior Frontend Developer</strong></summary>

### Junior Frontend Developer

**Required Features:**

1. **Product Collection Page**
   - Display products in an organized grid/list
   - Implement basic filtering and sorting
   - Show product images, names, and prices

2. **Shopping Cart**
   - Add/remove items
   - Display cart total
   - Show quantity of each item
   - Prevent adding out-of-stock items

3. **Product Details Page**
   - Display product information
   - Show product image
   - Add to cart functionality
   - Display stock availability

**Technical Focus:**

- Clean component structure
- Basic state management
- Responsive design
- Readable code

</details>

<details>
<summary><strong>Mid-Level Frontend Developer</strong></summary>

### Mid-Level Frontend Developer

**Required Features:**
*All Junior requirements, plus:*

1. **Enhanced Product Collection**
   - Implement pagination
   - Add search functionality
   - More advanced filtering options

2. **Advanced Cart Features**
   - Quantity adjustments
   - Stock validation
   - Cart persistence between page navigation
   - Total calculation with tax/shipping estimates
     - no need to ping external apis for this, a simple guesstimate of those
       values will suffice.

3. **Improved Product Details**
   - Image display with zoom capability
   - Related products section (show other products in category)

**Technical Focus:**

- Efficient state management
- Error handling
- Code organization and reusability
- Performance considerations

</details>

<details>
<summary><strong>Senior Frontend Developer</strong></summary>

### Senior Frontend Developer

**Required Features:**
*All Mid-level requirements, plus:*

1. **Advanced Collection Features**
   - Performance optimizations for large datasets (`test_data_large.json`)
   - Category-based collection pages
   - Advanced filtering and sorting options
   - Consider implementing infinite scroll

2. **Complete Shopping Experience**
   - Full checkout flow (you can fake the transaction, there's no need for a
     backend to save this)
   - Cart persistence between sessions
   - Order summary
   - Form validation

3. **Polished User Experience**
   - Loading states
   - Error boundaries
   - Accessibility considerations
   - Performance optimizations

**Technical Focus:**

- Advanced state management patterns
- Architecture and scalability
- Performance optimization techniques

</details>

### Background

You have been tasked with creating a collection of products in an e-commerce
application. The goal is to call data from an API and render it to the screen in
a way that allows customers to easily sort, search, find details, and add
products to a cart.

### Optional Enhancements (All Levels)

These aren't required, but are ideas if you've finished your level's requirements
and are looking for more.

- Implement a less generic more branded style
- Create an "About Us" page
- Add header with navigation
- Add testing to your application (Jest, Cypress, Playwright, etc.)
  - it would be awesome to show us how you'd handle unit, integration, or e2e testing.

### Evaluation Criteria

- Code quality and organization
- Feature completeness for your level
- UI/UX considerations
- Performance and optimization
- Problem-solving approach

## When I'm done, how do I submit my code?

When you're ready, please submit your work for review as a pull request to the
`main` branch. Also reach out to the hiring manager. If we haven't already, we
can schedule an interview to review your code together.
